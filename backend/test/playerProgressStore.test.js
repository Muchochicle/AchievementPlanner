import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { getPlayerProgress, savePlayerProgress, deletePlayerProgress } from "../services/playerProgressStore.js";

test("getPlayerProgress returns null when this steamId has never synced before", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.strictEqual(getPlayerProgress(db, "does-not-exist"), null);

    } finally {

        db.close();

    }

});

test("savePlayerProgress then getPlayerProgress round-trips the state object exactly", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const state = {
            player: { level: 3, totalXP: 610, badges: ["first-blood"], claimedAchievements: ["hades:1"], claimedGames: [] },
            inventory: { avatars: ["default", "rookie"] },
            equippedAvatar: "rookie"
        };

        savePlayerProgress(db, "1", JSON.stringify(state));

        const result = getPlayerProgress(db, "1");

        assert.deepStrictEqual(result.state, state);
        assert.strictEqual(typeof result.updatedAt, "string");

    } finally {

        db.close();

    }

});

test("savePlayerProgress upserts - a second call for the same steamId overwrites, not duplicates", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        savePlayerProgress(db, "1", JSON.stringify({ player: { level: 1 } }));
        savePlayerProgress(db, "1", JSON.stringify({ player: { level: 2 } }));

        const rowCount = db.prepare("SELECT COUNT(*) AS count FROM player_progress").get().count;
        const result = getPlayerProgress(db, "1");

        assert.strictEqual(rowCount, 1);
        assert.strictEqual(result.state.player.level, 2);

    } finally {

        db.close();

    }

});

test("savePlayerProgress's updated_at advances on a later write", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const first = savePlayerProgress(db, "1", JSON.stringify({ player: { level: 1 } }));

        await new Promise(resolve => setTimeout(resolve, 5));

        const second = savePlayerProgress(db, "1", JSON.stringify({ player: { level: 2 } }));

        assert.notStrictEqual(first, second);
        assert.ok(new Date(second) > new Date(first));

    } finally {

        db.close();

    }

});

test("progress for different steamIds is stored and read independently", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        savePlayerProgress(db, "1", JSON.stringify({ player: { level: 1 } }));
        savePlayerProgress(db, "2", JSON.stringify({ player: { level: 99 } }));

        assert.strictEqual(getPlayerProgress(db, "1").state.player.level, 1);
        assert.strictEqual(getPlayerProgress(db, "2").state.player.level, 99);

    } finally {

        db.close();

    }

});

test("deletePlayerProgress removes exactly this steamId's row and returns true", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        savePlayerProgress(db, "1", JSON.stringify({ player: { level: 5 } }));
        savePlayerProgress(db, "2", JSON.stringify({ player: { level: 9 } }));

        const removed = deletePlayerProgress(db, "1");

        assert.strictEqual(removed, true);
        assert.strictEqual(getPlayerProgress(db, "1"), null, "the target row is gone");
        assert.strictEqual(getPlayerProgress(db, "2").state.player.level, 9, "another account's row is untouched");

    } finally {

        db.close();

    }

});

test("deletePlayerProgress is idempotent - deleting a non-existent / already-deleted row is a no-op that returns false", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        assert.strictEqual(deletePlayerProgress(db, "never-synced"), false);

        savePlayerProgress(db, "1", JSON.stringify({ player: {} }));

        assert.strictEqual(deletePlayerProgress(db, "1"), true);
        assert.strictEqual(deletePlayerProgress(db, "1"), false, "second delete of the same row still succeeds, just changes nothing");
        assert.doesNotThrow(() => deletePlayerProgress(db, "1"));

    } finally {

        db.close();

    }

});

test("deletePlayerProgress touches ONLY player_progress - users / user_game_playtime / sessions / contact_messages are left intact", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare("INSERT INTO users (steam_id, persona_name, first_indexed_at, last_login_at) VALUES (?, ?, ?, ?)")
            .run("1", "Tester", "2026-09-07T00:00:00.000Z", "2026-09-07T00:00:00.000Z");
        db.prepare("INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at) VALUES (?, ?, ?, ?)")
            .run("1", 220, 1234, "2026-09-07T00:00:00.000Z");
        db.prepare("INSERT INTO sessions (sid, session_data, expires_at) VALUES (?, ?, ?)")
            .run("sess-1", "{}", "2099-01-01T00:00:00.000Z");
        db.prepare("INSERT INTO contact_messages (created_at, reason, message) VALUES (?, ?, ?)")
            .run("2026-09-07T00:00:00.000Z", "Bug report", "hi");
        savePlayerProgress(db, "1", JSON.stringify({ player: { level: 3 } }));

        deletePlayerProgress(db, "1");

        assert.strictEqual(getPlayerProgress(db, "1"), null);
        assert.strictEqual(db.prepare("SELECT COUNT(*) AS c FROM users").get().c, 1, "users row survives");
        assert.strictEqual(db.prepare("SELECT COUNT(*) AS c FROM user_game_playtime").get().c, 1, "playtime row survives");
        assert.strictEqual(db.prepare("SELECT COUNT(*) AS c FROM sessions").get().c, 1, "session row survives - the visitor stays logged in");
        assert.strictEqual(db.prepare("SELECT COUNT(*) AS c FROM contact_messages").get().c, 1, "contact message survives");

    } finally {

        db.close();

    }

});

test("getPlayerProgress degrades to null (instead of throwing) on a corrupted stored state value", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        db.prepare(`
            INSERT INTO player_progress (steam_id, state, updated_at)
            VALUES (?, ?, ?)
        `).run("1", "{not valid json!!!", "2026-08-25T00:00:00.000Z");

        assert.doesNotThrow(() => getPlayerProgress(db, "1"));
        assert.strictEqual(getPlayerProgress(db, "1"), null);

    } finally {

        db.close();

    }

});
