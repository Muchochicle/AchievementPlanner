import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { saveContactMessage, getRecentContactMessages } from "../services/contactStore.js";

test("saveContactMessage persists a full submission and returns an id + createdAt", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const { id, createdAt } = saveContactMessage(db, {
            steamId: "76561198000000000",
            reason: "Bug report",
            message: "The Games sort dropdown resets on filter change.",
            replyEmail: "player@example.com",
            name: "Jordi",
            userAgent: "Mozilla/5.0"
        });

        assert.strictEqual(typeof id, "number");
        assert.ok(id > 0);
        assert.strictEqual(typeof createdAt, "string");

        const [row] = getRecentContactMessages(db);

        assert.strictEqual(row.id, id);
        assert.strictEqual(row.reason, "Bug report");
        assert.strictEqual(row.message, "The Games sort dropdown resets on filter change.");
        assert.strictEqual(row.replyEmail, "player@example.com");
        assert.strictEqual(row.name, "Jordi");
        assert.strictEqual(row.steamId, "76561198000000000");
        assert.strictEqual(row.handled, 0);

    } finally {

        db.close();

    }

});

test("saveContactMessage accepts a minimal submission (no steamId, email, or name)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const { id } = saveContactMessage(db, {
            reason: "Other",
            message: "Just saying thanks, love the site."
        });

        const [row] = getRecentContactMessages(db);

        assert.strictEqual(row.id, id);
        assert.strictEqual(row.steamId, null);
        assert.strictEqual(row.replyEmail, null);
        assert.strictEqual(row.name, null);

    } finally {

        db.close();

    }

});

test("getRecentContactMessages returns newest first and respects the limit", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        for (let i = 0; i < 5; i++) {

            saveContactMessage(db, { reason: "Other", message: `msg ${i}` });
            await new Promise(r => setTimeout(r, 2));

        }

        const recent = getRecentContactMessages(db, { limit: 3 });

        assert.strictEqual(recent.length, 3);
        assert.strictEqual(recent[0].message, "msg 4");
        assert.strictEqual(recent[2].message, "msg 2");

    } finally {

        db.close();

    }

});
