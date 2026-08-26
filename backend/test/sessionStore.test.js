import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import {
    getSession,
    setSession,
    destroySession,
    touchSession,
    pruneExpiredSessions,
    allSessions,
    sessionCount
} from "../services/sessionStore.js";

// Mirrors playerProgressStore.test.js's own conventions - an isolated
// in-memory database per test, exercising the sessions table's plain
// data-access layer directly (no express-session Store wrapper involved -
// see sqliteSessionStore.test.js for that).

function futureIso(msFromNow = 60_000) {

    return new Date(Date.now() + msFromNow).toISOString();

}

function pastIso(msAgo = 1000) {

    return new Date(Date.now() - msAgo).toISOString();

}

test("getSession returns null for a sid that was never stored", () => {

    const db = createLeaderboardDb(":memory:");

    assert.strictEqual(getSession(db, "nonexistent"), null);

});

test("setSession then getSession round-trips the exact JSON string stored", () => {

    const db = createLeaderboardDb(":memory:");
    const payload = JSON.stringify({ cookie: { expires: futureIso() }, user: { steamid: "1" } });

    setSession(db, "sid-1", payload, futureIso());

    assert.strictEqual(getSession(db, "sid-1"), payload);

});

test("setSession on an existing sid overwrites both session_data and expires_at (upsert)", () => {

    const db = createLeaderboardDb(":memory:");

    setSession(db, "sid-1", JSON.stringify({ v: 1 }), pastIso());
    setSession(db, "sid-1", JSON.stringify({ v: 2 }), futureIso());

    assert.strictEqual(getSession(db, "sid-1"), JSON.stringify({ v: 2 }));

});

test("getSession returns null and deletes the row for an already-expired session (lazy expiry)", () => {

    const db = createLeaderboardDb(":memory:");

    setSession(db, "sid-expired", JSON.stringify({ v: 1 }), pastIso());

    assert.strictEqual(getSession(db, "sid-expired"), null);
    assert.strictEqual(sessionCount(db), 0, "the expired row must be removed as a side effect of reading it, not just excluded from the result");

});

test("destroySession removes the row and a subsequent getSession returns null", () => {

    const db = createLeaderboardDb(":memory:");

    setSession(db, "sid-1", JSON.stringify({ v: 1 }), futureIso());
    destroySession(db, "sid-1");

    assert.strictEqual(getSession(db, "sid-1"), null);

});

test("destroySession on a nonexistent sid does not throw", () => {

    const db = createLeaderboardDb(":memory:");

    assert.doesNotThrow(() => destroySession(db, "never-existed"));

});

test("touchSession updates expires_at without touching session_data", () => {

    const db = createLeaderboardDb(":memory:");
    const payload = JSON.stringify({ v: "unchanged" });

    setSession(db, "sid-1", payload, pastIso(500));
    touchSession(db, "sid-1", futureIso());

    assert.strictEqual(getSession(db, "sid-1"), payload, "a touch must not survive as an expired row nor alter the stored session data");

});

test("touchSession on a nonexistent sid is a silent no-op", () => {

    const db = createLeaderboardDb(":memory:");

    assert.doesNotThrow(() => touchSession(db, "never-existed", futureIso()));
    assert.strictEqual(getSession(db, "never-existed"), null);

});

test("pruneExpiredSessions deletes every expired row and leaves fresh ones untouched", () => {

    const db = createLeaderboardDb(":memory:");

    setSession(db, "old-1", JSON.stringify({}), pastIso(5000));
    setSession(db, "old-2", JSON.stringify({}), pastIso(1));
    setSession(db, "fresh-1", JSON.stringify({}), futureIso());

    pruneExpiredSessions(db);

    assert.strictEqual(getSession(db, "old-1"), null);
    assert.strictEqual(getSession(db, "old-2"), null);
    assert.notStrictEqual(getSession(db, "fresh-1"), null);

});

test("pruneExpiredSessions is safe to call on an empty table", () => {

    const db = createLeaderboardDb(":memory:");

    assert.doesNotThrow(() => pruneExpiredSessions(db));

});

test("allSessions returns every stored sid with its raw session_data", () => {

    const db = createLeaderboardDb(":memory:");

    setSession(db, "sid-a", JSON.stringify({ n: "a" }), futureIso());
    setSession(db, "sid-b", JSON.stringify({ n: "b" }), futureIso());

    const rows = allSessions(db);

    assert.strictEqual(rows.length, 2);
    assert.deepStrictEqual(
        new Set(rows.map(r => r.sid)),
        new Set(["sid-a", "sid-b"])
    );

});

test("sessionCount reflects the current row count", () => {

    const db = createLeaderboardDb(":memory:");

    assert.strictEqual(sessionCount(db), 0);

    setSession(db, "sid-1", JSON.stringify({}), futureIso());
    setSession(db, "sid-2", JSON.stringify({}), futureIso());

    assert.strictEqual(sessionCount(db), 2);

});
