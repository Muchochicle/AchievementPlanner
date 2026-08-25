import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { getPlayerProgress, savePlayerProgress } from "../services/playerProgressStore.js";

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
