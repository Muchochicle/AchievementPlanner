import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { SqliteSessionStore } from "../services/sqliteSessionStore.js";

// Finding 6 (PHASE_47-59_AUDIT.md, memory-growth half) originally documented
// this against express-session's real session.MemoryStore.all(), which
// server.js's periodic sweep called for its self-pruning side effect.
// Phase 74 replaced that MemoryStore with SqliteSessionStore (a persistent
// store, so a visitor's session now survives a restart too - the half of
// Finding 6 that was still deferred back then) and server.js's sweep now
// calls SqliteSessionStore.pruneExpired() instead of store.all(). These
// tests exercise that same "does the periodic sweep actually reclaim
// storage from a session nobody ever reads again" property against the
// store production code now actually uses.

function setRawSession(store, sid, expiresAt, data = {}) {

    store.db.prepare(`
        INSERT INTO sessions (sid, session_data, expires_at)
        VALUES (?, ?, ?)
    `).run(sid, JSON.stringify(data), expiresAt);

}

function hasRow(store, sid) {

    return Boolean(store.db.prepare("SELECT 1 FROM sessions WHERE sid = ?").get(sid));

}

function newStore() {

    return new SqliteSessionStore({ db: createLeaderboardDb(":memory:") });

}

test("pruneExpired() removes a session whose expires_at has already passed", () => {

    const store = newStore();

    setRawSession(store, "expired-session-id", new Date(Date.now() - 1000).toISOString());

    assert.ok(hasRow(store, "expired-session-id"), "sanity check: the raw row must exist before the sweep");

    store.pruneExpired();

    assert.strictEqual(hasRow(store, "expired-session-id"), false);

});

test("pruneExpired() leaves a not-yet-expired session untouched", () => {

    const store = newStore();

    setRawSession(store, "fresh-session-id", new Date(Date.now() + 60_000).toISOString());

    store.pruneExpired();

    assert.strictEqual(hasRow(store, "fresh-session-id"), true);

});

test("pruneExpired() is safe to call on an empty store", () => {

    const store = newStore();

    assert.doesNotThrow(() => store.pruneExpired());

});

test("pruneExpired() correctly handles a mix of expired and fresh sessions in the same sweep", () => {

    const store = newStore();

    setRawSession(store, "old-1", new Date(Date.now() - 5000).toISOString());
    setRawSession(store, "fresh-1", new Date(Date.now() + 60_000).toISOString());
    setRawSession(store, "old-2", new Date(Date.now() - 1).toISOString());

    store.pruneExpired();

    assert.strictEqual(hasRow(store, "old-1"), false);
    assert.strictEqual(hasRow(store, "old-2"), false);
    assert.strictEqual(hasRow(store, "fresh-1"), true);

});
