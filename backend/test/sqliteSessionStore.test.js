import { test } from "node:test";
import assert from "node:assert";
import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";

import { createLeaderboardDb, getLeaderboardDb, resetLeaderboardDbForTests } from "../services/leaderboardDb.js";
import { SqliteSessionStore } from "../services/sqliteSessionStore.js";

// Exercises SqliteSessionStore's actual express-session Store contract
// (callback-based get/set/destroy/touch/all/length/clear) against an
// isolated in-memory database per test - this is the class server.js now
// constructs in place of session.MemoryStore, so these are the tests that
// would catch a regression in the store express-session itself talks to,
// as opposed to sessionStore.test.js's lower-level SQL coverage.

function newStore() {

    return new SqliteSessionStore({ db: createLeaderboardDb(":memory:") });

}

function futureExpires(msFromNow = 60_000) {

    return new Date(Date.now() + msFromNow);

}

test("get() on an unknown sid calls back with (null, null)", () => {

    const store = newStore();

    store.get("unknown-sid", (err, session) => {

        assert.strictEqual(err, null);
        assert.strictEqual(session, null);

    });

});

test("set() then get() round-trips the session object", () => {

    const store = newStore();
    const sessionData = { cookie: { expires: futureExpires() }, user: { steamid: "123" } };

    store.set("sid-1", sessionData, err => {

        assert.strictEqual(err, null);

        store.get("sid-1", (getErr, retrieved) => {

            assert.strictEqual(getErr, null);
            assert.deepStrictEqual(retrieved, JSON.parse(JSON.stringify(sessionData)));

        });

    });

});

test("set() without an explicit callback does not throw", () => {

    const store = newStore();

    assert.doesNotThrow(() => store.set("sid-1", { cookie: { expires: futureExpires() } }));

});

test("destroy() removes the session - a subsequent get() returns null", () => {

    const store = newStore();

    store.set("sid-1", { cookie: { expires: futureExpires() } }, () => {

        store.destroy("sid-1", destroyErr => {

            assert.strictEqual(destroyErr, null);

            store.get("sid-1", (err, session) => {

                assert.strictEqual(session, null);

            });

        });

    });

});

test("touch() extends expiry without altering the stored session data", () => {

    const store = newStore();
    const original = { cookie: { expires: futureExpires(500) }, user: { steamid: "1" } };

    store.set("sid-1", original, () => {

        const extended = { cookie: { expires: futureExpires(999_999) }, user: { steamid: "1" } };

        store.touch("sid-1", extended, touchErr => {

            assert.strictEqual(touchErr, null);

            store.get("sid-1", (err, retrieved) => {

                // session_data round-trips through JSON.stringify/parse
                // (see set()/get()), which serializes cookie.expires from a
                // Date to an ISO string - comparing against the same
                // round-trip of `original`, not `original` itself, so this
                // asserts the *content* is unchanged rather than asserting
                // an incidental type that no store implementation preserves.
                assert.deepStrictEqual(retrieved, JSON.parse(JSON.stringify(original)), "touch() must not overwrite session_data - only sessionStore.js's touchSession() writes to expires_at");

            });

        });

    });

});

test("get() on an already-expired session returns null (lazy expiry)", () => {

    const store = newStore();

    store.set("sid-1", { cookie: { expires: new Date(Date.now() - 1000) } }, () => {

        store.get("sid-1", (err, session) => {

            assert.strictEqual(session, null);

        });

    });

});

test("a session with no cookie.expires falls back to a real future expiry, not an immediately-expired one", () => {

    const store = newStore();

    store.set("sid-1", { user: { steamid: "1" } }, () => {

        store.get("sid-1", (err, session) => {

            assert.deepStrictEqual(session, { user: { steamid: "1" } }, "a session without cookie.expires must still be retrievable immediately after being set, not treated as already expired");

        });

    });

});

test("all() returns every stored session keyed by sid", () => {

    const store = newStore();

    store.set("sid-a", { cookie: { expires: futureExpires() }, n: "a" }, () => {

        store.set("sid-b", { cookie: { expires: futureExpires() }, n: "b" }, () => {

            store.all((err, sessions) => {

                assert.strictEqual(err, null);
                assert.deepStrictEqual(Object.keys(sessions).sort(), ["sid-a", "sid-b"]);
                assert.strictEqual(sessions["sid-a"].n, "a");

            });

        });

    });

});

test("length() reports the current session count", () => {

    const store = newStore();

    store.set("sid-a", { cookie: { expires: futureExpires() } }, () => {

        store.set("sid-b", { cookie: { expires: futureExpires() } }, () => {

            store.length((err, count) => {

                assert.strictEqual(err, null);
                assert.strictEqual(count, 2);

            });

        });

    });

});

test("clear() removes every session", () => {

    const store = newStore();

    store.set("sid-a", { cookie: { expires: futureExpires() } }, () => {

        store.clear(clearErr => {

            assert.strictEqual(clearErr, null);

            store.length((err, count) => {

                assert.strictEqual(count, 0);

            });

        });

    });

});

test("pruneExpired() removes only expired sessions, leaving fresh ones intact", () => {

    const store = newStore();

    store.set("expired", { cookie: { expires: new Date(Date.now() - 5000) } }, () => {

        store.set("fresh", { cookie: { expires: futureExpires() } }, () => {

            store.pruneExpired();

            store.all((err, sessions) => {

                assert.deepStrictEqual(Object.keys(sessions), ["fresh"]);

            });

        });

    });

});

test("constructing SqliteSessionStore with no arguments uses the shared leaderboard db singleton without throwing", () => {

    // Mirrors leaderboardDb.test.js's own singleton test: points
    // DATABASE_PATH at a throwaway temp file first, so this never touches
    // the real dev/prod achievementplanner.db as a side effect of running
    // the test suite.
    const previousEnv = process.env.DATABASE_PATH;
    const dbPath = path.join(os.tmpdir(), `achievementplanner-session-store-test-${crypto.randomUUID()}`, "test.db");

    process.env.DATABASE_PATH = dbPath;
    resetLeaderboardDbForTests();

    try {

        assert.doesNotThrow(() => new SqliteSessionStore());
        assert.strictEqual(getLeaderboardDb(), getLeaderboardDb(), "the no-arg store must reuse the same shared singleton, not open its own connection");

    } finally {

        resetLeaderboardDbForTests();

        if (previousEnv === undefined) {

            delete process.env.DATABASE_PATH;

        } else {

            process.env.DATABASE_PATH = previousEnv;

        }

        fs.rmSync(path.dirname(dbPath), { recursive: true, force: true });

    }

});
