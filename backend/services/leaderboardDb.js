import { DatabaseSync } from "node:sqlite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// backend/services -> backend/data/achievementplanner.db - a dedicated,
// gitignored directory (see .gitignore), never inside a build/dist output
// and never committed. Overridable via DATABASE_PATH (see .env.example)
// for deployments that want the file elsewhere.
const DEFAULT_DB_PATH = path.join(
    __dirname,
    "..",
    "data",
    "achievementplanner.db"
);

function resolveDbPath() {

    return process.env.DATABASE_PATH?.trim() || DEFAULT_DB_PATH;

}

// Phase 32 leaderboard schema (Podiums). Every statement is IF NOT EXISTS,
// so running this against an already-initialized database is a no-op -
// safe to call on every server start, not just the first one.
//
// Two tables, deliberately split by how expensive each is to produce (see
// PHASE_32_AUDIT.md section A):
//
// - users: one row per AchievementPlanner user who has ever logged in via
//   Steam (login IS the opt-in). games_owned/games_played/
//   total_playtime_minutes are a cheap snapshot (one GetOwnedGames call);
//   achievements_unlocked/games_completed_100 are expensive (the same
//   ~250-Steam-call fan-out backend/utils/profileStats.js already performs
//   for the Profile page). Both pairs are stored as materialized columns
//   here - deliberately denormalized - rather than derived by aggregating
//   user_game_playtime at read time: the global leaderboard's whole job is
//   fast "ORDER BY <column> DESC LIMIT 10" reads across every user, and a
//   GROUP BY/aggregate over every row of user_game_playtime on every read
//   would scale far worse than one indexed column per user. Nothing yet
//   writes to these columns - that's Phase 32 Step 2/3, not this schema.
//   library_status/achievements_status record whether the last fetch
//   attempt actually got usable data (see PHASE_32_AUDIT.md section F -
//   Steam returns an empty response for private "Game details"), so a
//   private/unavailable account is represented explicitly rather than
//   indistinguishable from "never refreshed" or fabricated as zero.
//
// - user_game_playtime: one row per (user, owned game), the normalized
//   detail table that powers the per-game podium. Populated in full from
//   the same GetOwnedGames call that produces the cheap columns above, so
//   it costs zero additional Steam calls once Step 2 wires it up.
function initSchema(db) {

    db.exec("PRAGMA foreign_keys = ON;");

    // Phase 32 Step 2 onward: multiple Express requests (concurrent Profile
    // loads for different - or the same - users) can now write to this
    // connection. A busy_timeout makes SQLite retry for up to 5s instead of
    // failing immediately with SQLITE_BUSY if a write ever finds the file
    // locked (single-process today, so mostly future-proofing for a second
    // process/connection down the line - see PHASE_32_AUDIT.md).
    db.exec("PRAGMA busy_timeout = 5000;");

    // The standard complementary pragma to busy_timeout above, for the
    // same future multi-process/multi-connection scenario that comment
    // already reasons about: WAL lets readers and a writer proceed
    // concurrently instead of blocking on SQLite's default rollback-
    // journal exclusive lock. A no-op for the in-memory (":memory:") DB
    // backend/test/*.js uses - SQLite silently ignores journal_mode=WAL
    // there, since there's no file to keep a separate -wal alongside
    // (Phase 68).
    db.exec("PRAGMA journal_mode = WAL;");

    db.exec(`
        CREATE TABLE IF NOT EXISTS users (

            steam_id                    TEXT PRIMARY KEY,
            persona_name                TEXT NOT NULL,
            avatar_url                  TEXT,
            profile_url                 TEXT,

            games_owned                 INTEGER,
            games_played                INTEGER,
            total_playtime_minutes      INTEGER,
            library_status              TEXT NOT NULL DEFAULT 'unknown'
                                             CHECK (library_status IN ('available', 'private', 'unknown')),
            library_refreshed_at        TEXT,

            achievements_unlocked       INTEGER,
            games_completed_100         INTEGER,
            achievements_status         TEXT NOT NULL DEFAULT 'unknown'
                                             CHECK (achievements_status IN ('available', 'partial', 'unknown')),
            achievements_refreshed_at   TEXT,

            first_indexed_at            TEXT NOT NULL,
            last_login_at               TEXT NOT NULL

        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS user_game_playtime (

            steam_id           TEXT NOT NULL REFERENCES users(steam_id) ON DELETE CASCADE,
            appid              INTEGER NOT NULL CHECK (appid > 0),
            playtime_minutes   INTEGER NOT NULL DEFAULT 0 CHECK (playtime_minutes >= 0),
            updated_at         TEXT NOT NULL,

            PRIMARY KEY (steam_id, appid)

        );
    `);

    // Serves both the per-game Top 10 (ORDER BY playtime_minutes DESC
    // WHERE appid = ?) and the current user's rank within that game
    // (COUNT WHERE appid = ? AND playtime_minutes > ?) - see
    // PHASE_32_AUDIT.md section D. No separate index needed for lookups by
    // steam_id alone: it's the leading column of the table's own PRIMARY
    // KEY, which SQLite already indexes.
    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_user_game_playtime_leaderboard
            ON user_game_playtime (appid, playtime_minutes DESC);
    `);

    // One index per future global-leaderboard category (PHASE_32_AUDIT.md
    // section A/D) - each backs a plain "ORDER BY <column> DESC LIMIT 10"
    // over the whole users table.
    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_games_owned
            ON users (games_owned DESC);
    `);

    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_games_played
            ON users (games_played DESC);
    `);

    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_total_playtime
            ON users (total_playtime_minutes DESC);
    `);

    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_achievements_unlocked
            ON users (achievements_unlocked DESC);
    `);

    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_games_completed_100
            ON users (games_completed_100 DESC);
    `);

    // Phase 71: server-side persistence for a logged-in player's own
    // progress (XP/level/badges/claimed achievements & games, equipped
    // avatar, inventory) - previously localStorage-only, so it never
    // survived a browser change or cache clear even though Steam login
    // itself worked (see PHASE_70_AUDIT.md-era product inventory). One row
    // per steam_id holding the whole client-side player/inventory/avatar
    // state as one opaque JSON blob, deliberately NOT normalized into
    // columns: the shape of that state belongs to the frontend (src/utils/
    // player/**) and already changes independently of this table (new
    // badge types, new inventory categories, etc.) - storing it as a blob
    // means neither side needs a coordinated migration when the other's
    // shape grows, mirroring how a session/preferences blob is commonly
    // stored server-side. No FK to users(steam_id): a visitor can log in
    // and start accumulating progress before ever visiting the Profile
    // page (the only thing that populates a users row today via
    // indexProfileSnapshotSafely), so this table must not depend on that
    // row already existing.
    db.exec(`
        CREATE TABLE IF NOT EXISTS player_progress (

            steam_id      TEXT NOT NULL PRIMARY KEY,
            state         TEXT NOT NULL,
            updated_at    TEXT NOT NULL

        );
    `);

    // Phase 74: backing store for express-session (see
    // services/sqliteSessionStore.js), replacing server.js's in-memory
    // session.MemoryStore - previously every logged-in visitor was
    // silently logged out on any server restart/redeploy (deferred since
    // PHASE_47-59_AUDIT.md's Finding 6). One row per session id.
    // expires_at is its own indexed column (not read out of session_data's
    // JSON) so a prune sweep is a plain indexed DELETE, not a full-table
    // JSON.parse of every row. Reuses this same achievementplanner.db
    // rather than a second database file - a session row is no different
    // in kind from a player_progress row already stored here, and one file
    // is simpler to back up/volume-mount than two.
    db.exec(`
        CREATE TABLE IF NOT EXISTS sessions (

            sid            TEXT PRIMARY KEY,
            session_data   TEXT NOT NULL,
            expires_at     TEXT NOT NULL

        );
    `);

    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_sessions_expires_at
            ON sessions (expires_at);
    `);

    // No schema-migration mechanism exists beyond these IF-NOT-EXISTS
    // statements - a future column/table addition here would silently
    // no-op against an already-created achievementplanner.db file, with no
    // error and no upgrade path. Accepted for now given this schema's
    // actual size/stability (unchanged since Phase 32's own design in
    // PHASE_32_AUDIT.md), but flagged explicitly (Phase 68) so any future
    // schema change is a deliberate decision, not an accidental silent
    // no-op discovered by a confused bug report.
}

// Opens (creating if necessary) a SQLite database at dbPath and ensures the
// full leaderboard schema exists. Safe to call repeatedly - every DDL
// statement is IF NOT EXISTS - and safe to call before the file or even
// its parent directory exist yet: node:sqlite's DatabaseSync creates the
// file itself, but does not create missing parent directories, so that's
// handled here first (verified empirically - see PHASE_32 Step 1 dev
// notes; not documented behavior to rely on blindly).
//
// Exported directly (not just via getLeaderboardDb()) so tests can create
// isolated throwaway databases (":memory:" or a temp file) without ever
// touching the real one or the module-level singleton below.
export function createLeaderboardDb(dbPath = resolveDbPath()) {

    if (dbPath !== ":memory:") {

        fs.mkdirSync(path.dirname(dbPath), { recursive: true });

    }

    const db = new DatabaseSync(dbPath);

    initSchema(db);

    return db;

}

// Process-wide singleton, created lazily on first use - importing this
// module never touches disk by itself. This is currently unused by the
// rest of the app (nothing calls getLeaderboardDb() yet - see
// PHASE_32_AUDIT.md's phased implementation order); it exists now so
// later steps have one obvious place to get a shared connection from,
// rather than each caller opening its own.
let singleton = null;

export function getLeaderboardDb() {

    if (!singleton) {

        singleton = createLeaderboardDb();

    }

    return singleton;

}

// Test-only escape hatch: closes and forgets the singleton so a later
// getLeaderboardDb() call (e.g. after changing process.env.DATABASE_PATH
// in a test) creates a fresh connection instead of reusing a stale one.
// The running app never needs this.
export function resetLeaderboardDbForTests() {

    singleton?.close();

    singleton = null;

}
