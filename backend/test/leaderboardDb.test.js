import { test } from "node:test";
import assert from "node:assert";
import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";

import {
    createLeaderboardDb,
    getLeaderboardDb,
    resetLeaderboardDbForTests
} from "../services/leaderboardDb.js";

// A fresh temp file path per test that needs real disk (idempotency and
// "directory doesn't exist yet" both need to survive closing/reopening the
// same file, which ":memory:" can't do - every ":memory:" connection is
// its own isolated database). Nested under an extra subdirectory so the
// "parent directory doesn't exist yet" scenario is exercised for real.
function tempDbPath() {

    return path.join(
        os.tmpdir(),
        `achievementplanner-leaderboard-test-${crypto.randomUUID()}`,
        "test.db"
    );

}

function cleanup(dbPath) {

    const dir = path.dirname(dbPath);

    if (fs.existsSync(dir)) {

        fs.rmSync(dir, { recursive: true, force: true });

    }

}

function tableNames(db) {

    return db.prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name"
    ).all().map(row => row.name);

}

function indexNames(db) {

    return db.prepare(
        "SELECT name FROM sqlite_master WHERE type = 'index' ORDER BY name"
    ).all().map(row => row.name);

}

test("createLeaderboardDb creates the users and user_game_playtime tables from an empty database", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.deepStrictEqual(
            tableNames(db),
            ["user_game_playtime", "users"]
        );

    } finally {

        db.close();

    }

});

test("createLeaderboardDb creates every leaderboard index the podium endpoints will need", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const indexes = indexNames(db);

        assert.ok(indexes.includes("idx_user_game_playtime_leaderboard"));
        assert.ok(indexes.includes("idx_users_games_owned"));
        assert.ok(indexes.includes("idx_users_games_played"));
        assert.ok(indexes.includes("idx_users_total_playtime"));
        assert.ok(indexes.includes("idx_users_achievements_unlocked"));
        assert.ok(indexes.includes("idx_users_games_completed_100"));

    } finally {

        db.close();

    }

});

test("the application works correctly when the database file (and its parent directory) do not exist yet", () => {

    const dbPath = tempDbPath();

    assert.strictEqual(fs.existsSync(dbPath), false);
    assert.strictEqual(fs.existsSync(path.dirname(dbPath)), false);

    try {

        const db = createLeaderboardDb(dbPath);

        try {

            assert.strictEqual(fs.existsSync(dbPath), true);
            assert.deepStrictEqual(
                tableNames(db),
                ["user_game_playtime", "users"]
            );

        } finally {

            db.close();

        }

    } finally {

        cleanup(dbPath);

    }

});

// Phase 68: the complementary pragma to busy_timeout (set right above it
// in initSchema) - only meaningful for a real file-backed database, so
// this specifically uses a real temp file rather than ":memory:" (which
// SQLite reports as journal_mode "memory" regardless, per its own docs).
test("createLeaderboardDb enables WAL journal mode for a real file-backed database", () => {

    const dbPath = tempDbPath();

    try {

        const db = createLeaderboardDb(dbPath);

        try {

            const { journal_mode: journalMode } = db.prepare("PRAGMA journal_mode;").get();

            assert.strictEqual(journalMode, "wal");

        } finally {

            db.close();

        }

    } finally {

        cleanup(dbPath);

    }

});

test("initialization is idempotent: reopening the same file does not error, drop tables, or lose data", () => {

    const dbPath = tempDbPath();

    try {

        const first = createLeaderboardDb(dbPath);

        first.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("76561198000000001", "IdempotencyTester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        first.close();

        // Reopening runs every CREATE TABLE/INDEX IF NOT EXISTS again -
        // must not throw, must not wipe the row inserted above.
        const second = createLeaderboardDb(dbPath);

        try {

            const row = second.prepare(
                "SELECT * FROM users WHERE steam_id = ?"
            ).get("76561198000000001");

            assert.strictEqual(row.persona_name, "IdempotencyTester");

            // A third open, for good measure - idempotent means "any
            // number of times", not just "twice".
            const third = createLeaderboardDb(dbPath);
            third.close();

        } finally {

            second.close();

        }

    } finally {

        cleanup(dbPath);

    }

});

test("users.steam_id is unique - a duplicate insert is rejected", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const insert = db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `);

        insert.run("1", "First", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        assert.throws(() => {

            insert.run("1", "Second", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        });

    } finally {

        db.close();

    }

});

test("users required fields (persona_name, first_indexed_at, last_login_at) cannot be null", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.throws(() => {

            db.prepare(`
                INSERT INTO users (steam_id, first_indexed_at, last_login_at)
                VALUES (?, ?, ?)
            `).run("1", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        }, /NOT NULL/);

    } finally {

        db.close();

    }

});

test("users optional numeric snapshot fields stay SQL NULL when omitted, not 0", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("1", "Tester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        const row = db.prepare("SELECT * FROM users WHERE steam_id = ?").get("1");

        // Regression guard: these columns must never default to 0 - a
        // future accidental "DEFAULT 0" would silently turn unavailable/
        // unfetched Steam data into a fabricated real zero (see
        // PHASE_32_AUDIT.md section F).
        assert.strictEqual(row.games_owned, null);
        assert.strictEqual(row.games_played, null);
        assert.strictEqual(row.total_playtime_minutes, null);
        assert.strictEqual(row.achievements_unlocked, null);
        assert.strictEqual(row.games_completed_100, null);

    } finally {

        db.close();

    }

});

test("users.library_status/achievements_status default to 'unknown' and reject values outside the allowed set", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("1", "Tester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        const row = db.prepare("SELECT * FROM users WHERE steam_id = ?").get("1");

        assert.strictEqual(row.library_status, "unknown");
        assert.strictEqual(row.achievements_status, "unknown");

        assert.throws(() => {

            db.prepare(`
                INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at, library_status)
                VALUES (?, ?, ?, ?, ?)
            `).run("2", "Tester2", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z", "not-a-real-status");

        }, /CHECK constraint failed/);

    } finally {

        db.close();

    }

});

test("user_game_playtime enforces a foreign key to users and rejects an orphan row", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.throws(() => {

            db.prepare(`
                INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
                VALUES (?, ?, ?, ?)
            `).run("does-not-exist", 10, 500, "2026-08-19T00:00:00.000Z");

        }, /FOREIGN KEY constraint failed/);

    } finally {

        db.close();

    }

});

test("deleting a user cascades to their user_game_playtime rows", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("1", "Tester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        db.prepare(`
            INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
            VALUES (?, ?, ?, ?)
        `).run("1", 10, 500, "2026-08-19T00:00:00.000Z");

        db.prepare("DELETE FROM users WHERE steam_id = ?").run("1");

        const remaining = db.prepare(
            "SELECT * FROM user_game_playtime WHERE steam_id = ?"
        ).all("1");

        assert.deepStrictEqual(remaining, []);

    } finally {

        db.close();

    }

});

test("user_game_playtime's composite primary key rejects a duplicate (steam_id, appid) row", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("1", "Tester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        const insertGame = db.prepare(`
            INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
            VALUES (?, ?, ?, ?)
        `);

        insertGame.run("1", 10, 500, "2026-08-19T00:00:00.000Z");

        assert.throws(() => {

            insertGame.run("1", 10, 999, "2026-08-19T00:00:00.000Z");

        });

    } finally {

        db.close();

    }

});

test("user_game_playtime rejects a non-positive appid and negative playtime", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `).run("1", "Tester", "2026-08-19T00:00:00.000Z", "2026-08-19T00:00:00.000Z");

        assert.throws(() => {

            db.prepare(`
                INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
                VALUES (?, ?, ?, ?)
            `).run("1", 0, 100, "2026-08-19T00:00:00.000Z");

        }, /CHECK constraint failed/);

        assert.throws(() => {

            db.prepare(`
                INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
                VALUES (?, ?, ?, ?)
            `).run("1", 10, -5, "2026-08-19T00:00:00.000Z");

        }, /CHECK constraint failed/);

    } finally {

        db.close();

    }

});

test("a game leaderboard query (ORDER BY playtime DESC via the leaderboard index) returns the expected ranking", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const insertUser = db.prepare(`
            INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at)
            VALUES (?, ?, ?, ?)
        `);

        const insertGame = db.prepare(`
            INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
            VALUES (?, ?, ?, ?)
        `);

        const now = "2026-08-19T00:00:00.000Z";

        insertUser.run("1", "Alice", now, now);
        insertUser.run("2", "Bob", now, now);
        insertUser.run("3", "Carol", now, now);

        insertGame.run("1", 10, 300, now);
        insertGame.run("2", 10, 900, now);
        insertGame.run("3", 10, 600, now);
        // A different game entirely - must never leak into appid 10's ranking.
        insertGame.run("1", 20, 5000, now);

        const top = db.prepare(`
            SELECT u.persona_name, g.playtime_minutes
            FROM user_game_playtime g
            JOIN users u ON u.steam_id = g.steam_id
            WHERE g.appid = ?
            ORDER BY g.playtime_minutes DESC
        `).all(10);

        assert.deepStrictEqual(
            top.map(row => row.persona_name),
            ["Bob", "Carol", "Alice"]
        );

    } finally {

        db.close();

    }

});

test("getLeaderboardDb returns the same connection on repeated calls (singleton) and honors DATABASE_PATH", () => {

    const dbPath = tempDbPath();
    const previousEnv = process.env.DATABASE_PATH;

    process.env.DATABASE_PATH = dbPath;
    resetLeaderboardDbForTests();

    try {

        const first = getLeaderboardDb();
        const second = getLeaderboardDb();

        assert.strictEqual(first, second);
        assert.strictEqual(fs.existsSync(dbPath), true);

    } finally {

        resetLeaderboardDbForTests();

        if (previousEnv === undefined) {

            delete process.env.DATABASE_PATH;

        } else {

            process.env.DATABASE_PATH = previousEnv;

        }

        cleanup(dbPath);

    }

});
