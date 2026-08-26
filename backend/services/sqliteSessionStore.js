import session from "express-session";

import { getLeaderboardDb } from "./leaderboardDb.js";
import {
    getSession,
    setSession,
    destroySession,
    touchSession,
    pruneExpiredSessions,
    allSessions,
    sessionCount
} from "./sessionStore.js";

// Fallback only for a session with no cookie.expires (shouldn't happen in
// this app - server.js's session() config always sets cookie.maxAge, and
// express-session derives cookie.expires from it - but a store must still
// behave sanely if ever handed one, rather than persisting a row that can
// never expire).
const DEFAULT_MAX_AGE_MS = 24 * 60 * 60 * 1000;

function resolveExpiresAt(sessionData) {

    if (sessionData?.cookie?.expires) {

        return new Date(sessionData.cookie.expires).toISOString();

    }

    return new Date(Date.now() + DEFAULT_MAX_AGE_MS).toISOString();

}

// A minimal express-session Store backed by this app's existing node:sqlite
// database (Phase 74), replacing server.js's session.MemoryStore so a
// logged-in visitor's session survives a server restart/redeploy instead of
// silently logging them out - the deferred "which persistent store to add"
// decision flagged since PHASE_47-59_AUDIT.md's Finding 6. Deliberately
// reuses achievementplanner.db (see leaderboardDb.js) rather than a new
// dependency or a second database file - see sessionStore.js's own header
// comment for why.
//
// Implements every Store method express-session actually calls for this
// app's session() config (resave:false, saveUninitialized:false - i.e.
// get/set/destroy/touch), plus all()/length()/clear(), which are normal,
// documented Store methods and cost little once get/set exist.
//
// Every method below deliberately computes its result inside its own
// try/catch and only invokes `callback` *after* that block, never from
// inside it - the store's own DB call is genuinely synchronous
// (node:sqlite), but the caller's callback is arbitrary code express-
// session (or a test) supplies, and calling it from inside a try/catch
// scoped to this store's own operation would silently reinterpret any
// exception the *callback itself* throws (e.g. a failed assertion in a
// test) as if this store's get/set/destroy/touch had failed.
export class SqliteSessionStore extends session.Store {

    constructor({ db = getLeaderboardDb() } = {}) {

        super();

        this.db = db;

    }

    get(sid, callback) {

        let sessionDataJson;

        try {

            sessionDataJson = getSession(this.db, sid);

        } catch (error) {

            return callback(error);

        }

        callback(null, sessionDataJson ? JSON.parse(sessionDataJson) : null);

    }

    set(sid, sessionData, callback = () => {}) {

        try {

            setSession(this.db, sid, JSON.stringify(sessionData), resolveExpiresAt(sessionData));

        } catch (error) {

            return callback(error);

        }

        callback(null);

    }

    destroy(sid, callback = () => {}) {

        try {

            destroySession(this.db, sid);

        } catch (error) {

            return callback(error);

        }

        callback(null);

    }

    touch(sid, sessionData, callback = () => {}) {

        try {

            touchSession(this.db, sid, resolveExpiresAt(sessionData));

        } catch (error) {

            return callback(error);

        }

        callback(null);

    }

    all(callback = () => {}) {

        let sessions;

        try {

            sessions = Object.fromEntries(
                allSessions(this.db).map(row => [row.sid, JSON.parse(row.sessionData)])
            );

        } catch (error) {

            return callback(error);

        }

        callback(null, sessions);

    }

    length(callback = () => {}) {

        let count;

        try {

            count = sessionCount(this.db);

        } catch (error) {

            return callback(error);

        }

        callback(null, count);

    }

    clear(callback = () => {}) {

        try {

            this.db.prepare("DELETE FROM sessions").run();

        } catch (error) {

            return callback(error);

        }

        callback(null);

    }

    // Not part of the express-session Store contract - server.js's own
    // periodic sweep calls this directly, replacing MemoryStore.all()'s
    // side-effecting prune (see server.js's own comment there). A plain
    // indexed SQL DELETE is both simpler and cheaper than round-tripping
    // every row through JSON.parse just to discard the expired ones.
    pruneExpired() {

        pruneExpiredSessions(this.db);

    }

}
