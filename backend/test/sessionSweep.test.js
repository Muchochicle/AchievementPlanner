import { test } from "node:test";
import assert from "node:assert";
import session from "express-session";

// Finding 6 (PHASE_47-59_AUDIT.md, memory-growth half) - server.js now
// constructs its own session.MemoryStore explicitly and periodically calls
// its .all() method, purely to reclaim memory from sessions nobody ever
// reads again (a visitor who logs in once and never returns). This relies
// on a specific, real behavior of the *actual* express-session dependency
// (not a mock): MemoryStore.all() deletes any session it finds already
// expired while building its result list (see
// node_modules/express-session/session/memory.js's getSession()). These
// tests exercise the real, installed express-session package directly, so
// a future version bump that ever changed this behavior would fail a test
// here instead of silently reintroducing the memory leak.

function setRawSession(store, sessionId, cookie, extra = {}) {

    // Mirrors exactly what express-session's own Session.save()/Store.set()
    // path writes: a JSON-serialized object with a `cookie` key whose
    // `expires` is either a Date or an ISO string (both are handled by
    // MemoryStore's own getSession()).
    store.sessions[sessionId] = JSON.stringify({ cookie, ...extra });

}

test("MemoryStore.all() prunes a session whose cookie has already expired", () => {

    const store = new session.MemoryStore();

    setRawSession(store, "expired-session-id", { expires: new Date(Date.now() - 1000).toISOString() });

    assert.ok("expired-session-id" in store.sessions, "sanity check: the raw entry must exist before the sweep");

    // express-session's Store methods are callback-based but the deletion
    // inside getSession() itself happens synchronously as .all() iterates
    // - only the callback's own invocation is deferred (setImmediate).
    // Asserting on the store's own raw state directly (not waiting on the
    // callback) keeps this test free of any timing dependency.
    store.all(() => {});

    assert.strictEqual("expired-session-id" in store.sessions, false, "an expired session must be removed from the store's own backing object as soon as .all() examines it, not just excluded from the callback's result");

});

test("MemoryStore.all() leaves a not-yet-expired session untouched", () => {

    const store = new session.MemoryStore();

    setRawSession(store, "fresh-session-id", { expires: new Date(Date.now() + 60_000).toISOString() });

    store.all(() => {});

    assert.strictEqual("fresh-session-id" in store.sessions, true, "a session whose cookie has not yet expired must survive a sweep pass");

});

test("MemoryStore.all() is safe to call on an empty store", () => {

    const store = new session.MemoryStore();

    assert.doesNotThrow(() => store.all(() => {}));

});

test("MemoryStore.all() correctly handles a mix of expired and fresh sessions in the same sweep", () => {

    const store = new session.MemoryStore();

    setRawSession(store, "old-1", { expires: new Date(Date.now() - 5000).toISOString() });
    setRawSession(store, "fresh-1", { expires: new Date(Date.now() + 60_000).toISOString() });
    setRawSession(store, "old-2", { expires: new Date(Date.now() - 1).toISOString() });

    store.all(() => {});

    assert.strictEqual("old-1" in store.sessions, false);
    assert.strictEqual("old-2" in store.sessions, false);
    assert.strictEqual("fresh-1" in store.sessions, true);

});
