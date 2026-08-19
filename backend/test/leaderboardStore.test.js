import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import {
    indexUserSnapshot,
    indexProfileSnapshotSafely,
    getGameLeaderboard,
    getUserGameRank,
    getGameLeaderboardSize,
    getGlobalLeaderboard,
    getUserGlobalRank,
    getGlobalLeaderboardSize
} from "../services/leaderboardStore.js";

function baseSnapshot(overrides = {}) {

    return {

        steamId: "1",
        personaName: "Alice",
        avatarUrl: "https://example.com/avatar.jpg",
        profileUrl: "https://steamcommunity.com/id/alice",

        libraryStatus: "available",
        gamesOwned: 2,
        gamesPlayed: 2,
        totalPlaytimeMinutes: 1000,
        games: [
            { appid: 10, playtimeMinutes: 300 },
            { appid: 20, playtimeMinutes: 700 }
        ],

        achievements: {
            achievementsUnlocked: 42,
            gamesCompleted100: 3,
            achievementsStatus: "available"
        },

        ...overrides

    };

}

function getUser(db, steamId) {

    return db.prepare("SELECT * FROM users WHERE steam_id = ?").get(steamId);

}

function getGames(db, steamId) {

    // node:sqlite rows are null-prototype objects - map to plain object
    // literals so deepStrictEqual against a literal expectation compares
    // values, not prototypes.
    return db.prepare(
        "SELECT appid, playtime_minutes FROM user_game_playtime WHERE steam_id = ? ORDER BY appid"
    ).all(steamId).map(row => ({ appid: row.appid, playtime_minutes: row.playtime_minutes }));

}

test("indexUserSnapshot inserts a brand-new user with every field from the snapshot, including first_indexed_at", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot());

        const row = getUser(db, "1");

        assert.strictEqual(row.persona_name, "Alice");
        assert.strictEqual(row.avatar_url, "https://example.com/avatar.jpg");
        assert.strictEqual(row.profile_url, "https://steamcommunity.com/id/alice");
        assert.strictEqual(row.games_owned, 2);
        assert.strictEqual(row.games_played, 2);
        assert.strictEqual(row.total_playtime_minutes, 1000);
        assert.strictEqual(row.library_status, "available");
        assert.strictEqual(row.achievements_unlocked, 42);
        assert.strictEqual(row.games_completed_100, 3);
        assert.strictEqual(row.achievements_status, "available");
        assert.ok(row.first_indexed_at);
        assert.ok(row.last_login_at);
        assert.ok(row.library_refreshed_at);
        assert.ok(row.achievements_refreshed_at);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot updates an existing user's library fields on a second call without replacing first_indexed_at", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot());

        const firstIndexedAt = getUser(db, "1").first_indexed_at;

        // Guarantee the two calls don't land on the exact same millisecond,
        // so a bug that overwrites first_indexed_at would actually show up
        // as a changed value instead of accidentally matching by chance.
        await new Promise(resolve => setTimeout(resolve, 5));

        indexUserSnapshot(db, baseSnapshot({
            personaName: "Alice Updated",
            gamesOwned: 3,
            achievements: {
                achievementsUnlocked: 50,
                gamesCompleted100: 3,
                achievementsStatus: "available"
            }
        }));

        const row = getUser(db, "1");

        assert.strictEqual(row.persona_name, "Alice Updated");
        assert.strictEqual(row.games_owned, 3);
        assert.strictEqual(row.achievements_unlocked, 50);
        assert.strictEqual(row.first_indexed_at, firstIndexedAt);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot persists the library snapshot fields (owned/played/minutes/status/refreshed_at)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            gamesOwned: 5,
            gamesPlayed: 4,
            totalPlaytimeMinutes: 12345,
            libraryStatus: "available"
        }));

        const row = getUser(db, "1");

        assert.strictEqual(row.games_owned, 5);
        assert.strictEqual(row.games_played, 4);
        assert.strictEqual(row.total_playtime_minutes, 12345);
        assert.strictEqual(row.library_status, "available");

    } finally {

        db.close();

    }

});

test("indexUserSnapshot persists a valid achievement snapshot's fields (unlocked/completed/status/refreshed_at)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            achievements: {
                achievementsUnlocked: 77,
                gamesCompleted100: 6,
                achievementsStatus: "partial"
            }
        }));

        const row = getUser(db, "1");

        assert.strictEqual(row.achievements_unlocked, 77);
        assert.strictEqual(row.games_completed_100, 6);
        assert.strictEqual(row.achievements_status, "partial");
        assert.ok(row.achievements_refreshed_at);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot leaves achievements NULL/'unknown' on a first insert when the scan produced no valid result", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        // achievements: null - e.g. every one of the user's games came back
        // "unavailable"/transient this scan (see hasValidAchievementResult
        // in leaderboardSnapshot.js). The library snapshot (a confirmed,
        // successful GetOwnedGames call) is still written normally.
        indexUserSnapshot(db, baseSnapshot({ achievements: null }));

        const row = getUser(db, "1");

        assert.strictEqual(row.games_owned, 2);
        assert.strictEqual(row.achievements_unlocked, null);
        assert.strictEqual(row.games_completed_100, null);
        assert.strictEqual(row.achievements_status, "unknown");
        assert.strictEqual(row.achievements_refreshed_at, null);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot does not overwrite a previously-valid achievement snapshot when a later scan produces no valid result", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            achievements: {
                achievementsUnlocked: 42,
                gamesCompleted100: 3,
                achievementsStatus: "available"
            }
        }));

        const afterFirstCall = getUser(db, "1");

        await new Promise(resolve => setTimeout(resolve, 5));

        // A later Profile load where the achievement fan-out came back
        // entirely unavailable/transient this time (achievements: null),
        // but the library snapshot still refreshed successfully.
        indexUserSnapshot(db, baseSnapshot({
            gamesOwned: 4,
            totalPlaytimeMinutes: 5000,
            achievements: null
        }));

        const row = getUser(db, "1");

        // Library fields and last_login_at reflect the new call...
        assert.strictEqual(row.games_owned, 4);
        assert.strictEqual(row.total_playtime_minutes, 5000);
        assert.notStrictEqual(row.last_login_at, afterFirstCall.last_login_at);

        // ...but the last genuinely-valid achievement snapshot is untouched.
        assert.strictEqual(row.achievements_unlocked, 42);
        assert.strictEqual(row.games_completed_100, 3);
        assert.strictEqual(row.achievements_status, "available");
        assert.strictEqual(row.achievements_refreshed_at, afterFirstCall.achievements_refreshed_at);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot writes one user_game_playtime row per owned game", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot());

        assert.deepStrictEqual(getGames(db, "1"), [
            { appid: 10, playtime_minutes: 300 },
            { appid: 20, playtime_minutes: 700 }
        ]);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot persists a real 0-minute row for an owned-but-unplayed game - 0 is a legitimate value, not the same as not owning the game", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            games: [
                { appid: 10, playtimeMinutes: 0 },
                { appid: 20, playtimeMinutes: 700 }
            ]
        }));

        // A real row exists for appid 10 with 0 minutes - distinct from
        // simply having no row at all (which means "not owned").
        assert.deepStrictEqual(getGames(db, "1"), [
            { appid: 10, playtime_minutes: 0 },
            { appid: 20, playtime_minutes: 700 }
        ]);

        // And that 0-minute owner shows up in that game's leaderboard -
        // ranked last, but present, not silently dropped.
        const board = getGameLeaderboard(db, 10);
        assert.strictEqual(board.length, 1);
        assert.strictEqual(board[0].playtimeMinutes, 0);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot removes a game's row once it's no longer in the owned-games list, and keeps the rest", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            games: [
                { appid: 10, playtimeMinutes: 300 },
                { appid: 20, playtimeMinutes: 700 },
                { appid: 30, playtimeMinutes: 100 }
            ]
        }));

        assert.deepStrictEqual(
            getGames(db, "1").map(row => row.appid),
            [10, 20, 30]
        );

        // Game 20 no longer owned (e.g. removed from the Steam library),
        // game 10 played more, game 30 untouched.
        indexUserSnapshot(db, baseSnapshot({
            games: [
                { appid: 10, playtimeMinutes: 350 },
                { appid: 30, playtimeMinutes: 100 }
            ]
        }));

        assert.deepStrictEqual(getGames(db, "1"), [
            { appid: 10, playtime_minutes: 350 },
            { appid: 30, playtime_minutes: 100 }
        ]);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot rolls back the entire transaction (user row and game rows) when a game row fails to write", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        // Establish a known-good baseline first.
        indexUserSnapshot(db, baseSnapshot());

        const before = getUser(db, "1");
        const gamesBefore = getGames(db, "1");

        // appid 0 violates user_game_playtime's CHECK(appid > 0) - this
        // should blow up mid-transaction, after the user row upsert and
        // after at least one valid game row would otherwise have been
        // written.
        assert.throws(() => {

            indexUserSnapshot(db, baseSnapshot({
                personaName: "Should Not Stick",
                gamesOwned: 999,
                games: [
                    { appid: 10, playtimeMinutes: 9999 },
                    { appid: 0, playtimeMinutes: 50 }
                ]
            }));

        });

        // Nothing from the failed call should have taken effect - not the
        // users row, not the game rows.
        assert.deepStrictEqual(getUser(db, "1"), before);
        assert.deepStrictEqual(getGames(db, "1"), gamesBefore);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot preserves NULL/partial semantics: a 'partial' achievement status keeps its real (non-fabricated) numbers", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            achievements: {
                achievementsUnlocked: 10,
                gamesCompleted100: 0,
                achievementsStatus: "partial"
            }
        }));

        const row = getUser(db, "1");

        // "Partial" must not be silently coerced into a clean number or a
        // fabricated zero/null - the real best-effort count and the
        // "partial" flag both persist side by side.
        assert.strictEqual(row.achievements_status, "partial");
        assert.strictEqual(row.achievements_unlocked, 10);
        assert.strictEqual(row.games_completed_100, 0);

    } finally {

        db.close();

    }

});

test("indexUserSnapshot never being called at all (persistence skipped) leaves the optional numeric fields NULL, not 0", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        // Simulates a user who has never successfully completed the
        // Profile stats flow - no row should exist, so nothing can ever be
        // mistaken for a real zero.
        assert.strictEqual(getUser(db, "1"), undefined);

    } finally {

        db.close();

    }

});

test("repeated indexing of the same steam user (simulating overlapping Profile requests) does not corrupt data or duplicate rows", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        for (let i = 0; i < 5; i++) {

            indexUserSnapshot(db, baseSnapshot({
                personaName: `Alice ${i}`,
                totalPlaytimeMinutes: 1000 + i,
                games: [
                    { appid: 10, playtimeMinutes: 300 + i },
                    { appid: 20, playtimeMinutes: 700 + i }
                ]
            }));

        }

        const users = db.prepare("SELECT * FROM users").all();
        assert.strictEqual(users.length, 1);
        assert.strictEqual(users[0].persona_name, "Alice 4");
        assert.strictEqual(users[0].total_playtime_minutes, 1004);

        assert.deepStrictEqual(getGames(db, "1"), [
            { appid: 10, playtime_minutes: 304 },
            { appid: 20, playtime_minutes: 704 }
        ]);

    } finally {

        db.close();

    }

});

test("indexProfileSnapshotSafely persists a full snapshot end-to-end from steamUser/libraryGames/libraryCounts/achievementStats", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const persisted = indexProfileSnapshotSafely({

            steamUser: {
                steamid: "2",
                personaname: "Bob",
                avatarfull: "https://example.com/bob.jpg",
                profileurl: "https://steamcommunity.com/id/bob"
            },

            libraryGames: [{ appid: 10, playtime_forever: 300 }],

            libraryCounts: { gamesOwned: 1, gamesPlayed: 1 },

            achievementStats: {
                achievements: 5,
                completedGames: 0,
                gamesConsidered: 1,
                gamesWithPlayerDataUnavailable: 0,
                gamesWithTransientErrors: 0
            }

        }, db);

        assert.strictEqual(persisted, true);

        const row = getUser(db, "2");
        assert.strictEqual(row.persona_name, "Bob");
        assert.strictEqual(row.achievements_unlocked, 5);

    } finally {

        db.close();

    }

});

test("indexProfileSnapshotSafely never throws and returns false when persistence fails (best-effort isolation)", () => {

    const db = createLeaderboardDb(":memory:");
    db.close();

    // The db handle is now closed/unusable - every write against it must
    // fail. This must not throw out of indexProfileSnapshotSafely; the
    // caller (profileStatsController.js) relies on that guarantee to keep
    // the Profile statistics response working even when persistence can't.
    let persisted;

    assert.doesNotThrow(() => {

        persisted = indexProfileSnapshotSafely({

            steamUser: { steamid: "3", personaname: "Carol" },
            libraryGames: [],
            libraryCounts: { gamesOwned: 0, gamesPlayed: 0 },
            achievementStats: {
                achievements: 0,
                completedGames: 0,
                gamesConsidered: 0,
                gamesWithPlayerDataUnavailable: 0,
                gamesWithTransientErrors: 0
            }

        }, db);

    });

    assert.strictEqual(persisted, false);

});

test("getGameLeaderboard returns players for that appid ordered by playtime, highest first, respecting limit", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Alice", games: [{ appid: 10, playtimeMinutes: 300 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "Bob", games: [{ appid: 10, playtimeMinutes: 900 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", personaName: "Carol", games: [{ appid: 10, playtimeMinutes: 600 }] }));
        // A different game entirely - must never leak into appid 10's board.
        indexUserSnapshot(db, baseSnapshot({ steamId: "4", personaName: "Dave", games: [{ appid: 20, playtimeMinutes: 5000 }] }));

        const board = getGameLeaderboard(db, 10);

        assert.deepStrictEqual(board.map(row => row.personaName), ["Bob", "Carol", "Alice"]);
        assert.deepStrictEqual(board.map(row => row.playtimeMinutes), [900, 600, 300]);

        const top2 = getGameLeaderboard(db, 10, { limit: 2 });
        assert.strictEqual(top2.length, 2);
        assert.deepStrictEqual(top2.map(row => row.personaName), ["Bob", "Carol"]);

    } finally {

        db.close();

    }

});

test("getGameLeaderboard falls back to the default limit for a negative/zero/non-integer limit instead of SQLite's 'unlimited' LIMIT -1 semantics", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        for (let i = 1; i <= 12; i++) {

            indexUserSnapshot(db, baseSnapshot({ steamId: String(i), personaName: `Player ${i}`, games: [{ appid: 10, playtimeMinutes: i }] }));

        }

        // SQLite treats LIMIT -1 as "no limit" - a negative/invalid value
        // here must not silently return all 12 rows.
        assert.strictEqual(getGameLeaderboard(db, 10, { limit: -1 }).length, 10);
        assert.strictEqual(getGameLeaderboard(db, 10, { limit: 0 }).length, 10);
        assert.strictEqual(getGameLeaderboard(db, 10, { limit: 1.5 }).length, 10);
        assert.strictEqual(getGameLeaderboard(db, 10, { limit: "10" }).length, 10);

    } finally {

        db.close();

    }

});

test("getUserGameRank returns null when the user has no row for that game (not owned or never indexed)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", games: [{ appid: 10, playtimeMinutes: 300 }] }));

        assert.strictEqual(getUserGameRank(db, "1", 999), null);
        assert.strictEqual(getUserGameRank(db, "does-not-exist", 10), null);

    } finally {

        db.close();

    }

});

test("getUserGameRank returns competition ranking (ties share a rank, next distinct value skips)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", games: [{ appid: 10, playtimeMinutes: 900 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "2", games: [{ appid: 10, playtimeMinutes: 900 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", games: [{ appid: 10, playtimeMinutes: 300 }] }));

        // Two-way tie for 1st.
        assert.deepStrictEqual(getUserGameRank(db, "1", 10), { playtimeMinutes: 900, rank: 1 });
        assert.deepStrictEqual(getUserGameRank(db, "2", 10), { playtimeMinutes: 900, rank: 1 });

        // Third place is rank 3, not 2 - two players already outrank them.
        assert.deepStrictEqual(getUserGameRank(db, "3", 10), { playtimeMinutes: 300, rank: 3 });

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard ranks users by the requested category's column, highest first", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Alice", gamesOwned: 50 }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "Bob", gamesOwned: 200 }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", personaName: "Carol", gamesOwned: 120 }));

        const board = getGlobalLeaderboard(db, "games-owned");

        assert.deepStrictEqual(board.map(row => row.personaName), ["Bob", "Carol", "Alice"]);
        assert.deepStrictEqual(board.map(row => row.value), [200, 120, 50]);

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard falls back to the default limit for a negative limit instead of SQLite's 'unlimited' LIMIT -1 semantics", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        for (let i = 1; i <= 12; i++) {

            indexUserSnapshot(db, baseSnapshot({ steamId: String(i), personaName: `Player ${i}`, gamesOwned: i }));

        }

        assert.strictEqual(getGlobalLeaderboard(db, "games-owned", { limit: -1 }).length, 10);

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard excludes users whose data for that category was never fetched (NULL/'unknown'), never fabricating a rank for them", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            personaName: "HasAchievements",
            achievements: { achievementsUnlocked: 10, gamesCompleted100: 1, achievementsStatus: "available" }
        }));

        // achievements: null - this user's row exists (library indexed fine)
        // but achievements_unlocked/achievements_status stay NULL/'unknown'.
        indexUserSnapshot(db, baseSnapshot({
            steamId: "2",
            personaName: "NeverScanned",
            achievements: null
        }));

        const board = getGlobalLeaderboard(db, "achievements");

        assert.deepStrictEqual(board.map(row => row.personaName), ["HasAchievements"]);

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard/getUserGlobalRank exclude a 'private' library_status user from library-based categories", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            personaName: "PublicProfile",
            libraryStatus: "available",
            gamesOwned: 100
        }));

        // A private Steam library - library_status isn't 'available', so
        // this user must never appear (or be counted) in a library-based
        // leaderboard, even though a users row exists for them.
        indexUserSnapshot(db, baseSnapshot({
            steamId: "2",
            personaName: "PrivateProfile",
            libraryStatus: "private",
            gamesOwned: 500
        }));

        const board = getGlobalLeaderboard(db, "games-owned");
        assert.deepStrictEqual(board.map(row => row.personaName), ["PublicProfile"]);

        assert.strictEqual(getUserGlobalRank(db, "2", "games-owned"), null);
        assert.deepStrictEqual(getUserGlobalRank(db, "1", "games-owned"), { value: 100, rank: 1 });

    } finally {

        db.close();

    }

});

test("a 'private' library_status does not affect achievement-based categories - they're tracked independently", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            libraryStatus: "private",
            gamesOwned: 500,
            achievements: { achievementsUnlocked: 42, gamesCompleted100: 3, achievementsStatus: "available" }
        }));

        // Excluded from a library category...
        assert.strictEqual(getUserGlobalRank(db, "1", "games-owned"), null);

        // ...but still ranked normally for achievements, since that status
        // is tracked in its own separate column.
        assert.deepStrictEqual(getUserGlobalRank(db, "1", "achievements"), { value: 42, rank: 1 });

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard includes 'partial' achievement data (a genuine best-effort figure) alongside 'available'", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            personaName: "FullyScanned",
            achievements: { achievementsUnlocked: 10, gamesCompleted100: 1, achievementsStatus: "available" }
        }));

        indexUserSnapshot(db, baseSnapshot({
            steamId: "2",
            personaName: "PartiallyScanned",
            achievements: { achievementsUnlocked: 30, gamesCompleted100: 2, achievementsStatus: "partial" }
        }));

        const board = getGlobalLeaderboard(db, "achievements");

        assert.deepStrictEqual(board.map(row => row.personaName), ["PartiallyScanned", "FullyScanned"]);

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboard throws on an unrecognized category instead of silently building unsafe SQL", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.throws(() => {

            getGlobalLeaderboard(db, "not-a-real-category");

        }, /Unknown leaderboard category/);

    } finally {

        db.close();

    }

});

test("getUserGlobalRank returns the user's value and competition rank among qualifying users", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Alice", gamesOwned: 50 }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "Bob", gamesOwned: 200 }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", personaName: "Carol", gamesOwned: 200 }));

        // Bob and Carol tie for 1st.
        assert.deepStrictEqual(getUserGlobalRank(db, "2", "games-owned"), { value: 200, rank: 1 });
        assert.deepStrictEqual(getUserGlobalRank(db, "3", "games-owned"), { value: 200, rank: 1 });

        // Alice is 3rd - two people already outrank her.
        assert.deepStrictEqual(getUserGlobalRank(db, "1", "games-owned"), { value: 50, rank: 3 });

    } finally {

        db.close();

    }

});

test("getUserGlobalRank returns null for a user with no qualifying data (never indexed, or data unavailable for this category)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", achievements: null }));

        assert.strictEqual(getUserGlobalRank(db, "1", "achievements"), null);
        assert.strictEqual(getUserGlobalRank(db, "does-not-exist", "games-owned"), null);

    } finally {

        db.close();

    }

});

test("getUserGlobalRank does not let never-fetched/unavailable users inflate another user's rank", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            achievements: { achievementsUnlocked: 10, gamesCompleted100: 1, achievementsStatus: "available" }
        }));

        // Three more users with achievements never scanned - must not count
        // as "ahead" of anyone, and must not be counted as "behind" either.
        for (const steamId of ["2", "3", "4"]) {

            indexUserSnapshot(db, baseSnapshot({ steamId, achievements: null }));

        }

        assert.deepStrictEqual(getUserGlobalRank(db, "1", "achievements"), { value: 10, rank: 1 });

    } finally {

        db.close();

    }

});

test("getUserGlobalRank throws on an unrecognized category", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.throws(() => {

            getUserGlobalRank(db, "1", "not-a-real-category");

        }, /Unknown leaderboard category/);

    } finally {

        db.close();

    }

});

test("getGlobalLeaderboardSize counts only qualifying users for that category, matching what getGlobalLeaderboard ranks over", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({
            steamId: "1",
            achievements: { achievementsUnlocked: 10, gamesCompleted100: 1, achievementsStatus: "available" }
        }));
        indexUserSnapshot(db, baseSnapshot({
            steamId: "2",
            achievements: { achievementsUnlocked: 20, gamesCompleted100: 2, achievementsStatus: "partial" }
        }));
        // Never scanned - must not count toward the total.
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", achievements: null }));

        assert.strictEqual(getGlobalLeaderboardSize(db, "achievements"), 2);

        // Every user has a real (available) library snapshot in this test.
        assert.strictEqual(getGlobalLeaderboardSize(db, "games-owned"), 3);

    } finally {

        db.close();

    }

});

test("getGameLeaderboardSize counts players with recorded playtime for that game only", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        indexUserSnapshot(db, baseSnapshot({ steamId: "1", games: [{ appid: 10, playtimeMinutes: 100 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "2", games: [{ appid: 10, playtimeMinutes: 200 }] }));
        indexUserSnapshot(db, baseSnapshot({ steamId: "3", games: [{ appid: 20, playtimeMinutes: 300 }] }));

        assert.strictEqual(getGameLeaderboardSize(db, 10), 2);
        assert.strictEqual(getGameLeaderboardSize(db, 20), 1);
        assert.strictEqual(getGameLeaderboardSize(db, 999), 0);

    } finally {

        db.close();

    }

});
