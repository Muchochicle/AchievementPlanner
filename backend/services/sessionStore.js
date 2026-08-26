// Phase 74: read/write access to the sessions table (see leaderboardDb.js's
// initSchema for the table's own rationale). Mirrors playerProgressStore.js's
// "pass in a db, get/return plain data" shape - kept separate from
// SqliteSessionStore.js's express-session Store subclass so this data-access
// layer stays trivially unit-testable against an isolated in-memory
// database, with no need to construct a real Store or fake its
// callback-based API just to test a SQL statement.

// Returns the session's raw JSON string, or null when no row exists, or
// when a row exists but has already expired - matching express-session's
// own convention that a missing/expired session and "session not found"
// are indistinguishable to the caller. An expired row is deleted as a side
// effect of this read (lazy expiry), the same behavior express-session's
// built-in MemoryStore.getSession() has (see sessionSweep.test.js) - an
// abandoned session that's never read again still gets cleared out
// eventually by the periodic prune sweep (pruneExpiredSessions below).
export function getSession(db, sid) {

    const row = db.prepare(
        "SELECT session_data AS sessionData, expires_at AS expiresAt FROM sessions WHERE sid = ?"
    ).get(sid);

    if (!row) {

        return null;

    }

    if (new Date(row.expiresAt).getTime() <= Date.now()) {

        destroySession(db, sid);

        return null;

    }

    return row.sessionData;

}

// sessionDataJson must already be a JSON.stringify'd string and expiresAt
// an ISO timestamp string - serializing the caller's session object is
// SqliteSessionStore's job, not this data-access layer's (mirrors
// playerProgressStore.js's savePlayerProgress convention).
export function setSession(db, sid, sessionDataJson, expiresAt) {

    db.prepare(`
        INSERT INTO sessions (sid, session_data, expires_at)
        VALUES (?, ?, ?)
        ON CONFLICT(sid) DO UPDATE SET
            session_data = excluded.session_data,
            expires_at   = excluded.expires_at
    `).run(sid, sessionDataJson, expiresAt);

}

export function destroySession(db, sid) {

    db.prepare("DELETE FROM sessions WHERE sid = ?").run(sid);

}

// Updates only expires_at, leaving session_data untouched - express-session
// calls Store.touch() (not .set()) when a session was read but not
// modified, purely to extend its expiration. A sid with no existing row
// (e.g. destroyed concurrently) is a silent no-op, matching touch's
// "extend if present" semantics rather than resurrecting a deleted
// session.
export function touchSession(db, sid, expiresAt) {

    db.prepare("UPDATE sessions SET expires_at = ? WHERE sid = ?").run(expiresAt, sid);

}

// Plain indexed DELETE - the SQLite-backed equivalent of MemoryStore.all()'s
// side-effecting prune (see server.js's periodic sweep), but cheaper: no
// need to JSON.parse every row just to discard the expired ones.
export function pruneExpiredSessions(db) {

    db.prepare("DELETE FROM sessions WHERE expires_at <= ?").run(new Date().toISOString());

}

export function allSessions(db) {

    return db.prepare(
        "SELECT sid, session_data AS sessionData FROM sessions"
    ).all();

}

export function sessionCount(db) {

    return db.prepare("SELECT COUNT(*) AS count FROM sessions").get().count;

}
