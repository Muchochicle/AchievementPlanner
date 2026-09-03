// Task 10 (Contact Us): read/write access to the contact_messages table
// (see leaderboardDb.js's initSchema for the table's own rationale).
// Mirrors playerProgressStore.js / leaderboardStore.js's plain "pass in a
// db, get/return plain data" shape, so it is equally easy to unit-test
// against an isolated in-memory database instead of the real singleton.
//
// Validation (email format, message length, allowed reasons) is the
// controller's job (see contactController.js), not this data-access
// layer's - everything passed here is already sanitized/normalized.

// Persists one contact submission. `fields` is the already-validated,
// already-trimmed set of values from the controller. Returns the
// server-assigned id + createdAt so the caller can hand the user a real
// reference number ("your message was received, ref #123").
export function saveContactMessage(db, fields) {

    const now = new Date().toISOString();

    const result = db.prepare(`
        INSERT INTO contact_messages (
            created_at, steam_id, reason, message, reply_email, name, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        now,
        fields.steamId ?? null,
        fields.reason,
        fields.message,
        fields.replyEmail ?? null,
        fields.name ?? null,
        fields.userAgent ?? null
    );

    return { id: Number(result.lastInsertRowid), createdAt: now };

}

// Most-recent-first, for a future admin/review surface. Not wired to any
// route yet - the messages are readable directly from the SQLite file on
// the server's persistent volume until such a surface exists. Kept here
// (rather than added later) so the table has a defined read path from the
// start and the shape is covered by tests.
export function getRecentContactMessages(db, { limit = 50 } = {}) {

    const safeLimit = Number.isInteger(limit) && limit > 0 ? Math.min(limit, 500) : 50;

    return db.prepare(`
        SELECT
            id,
            created_at   AS createdAt,
            steam_id     AS steamId,
            reason,
            message,
            reply_email  AS replyEmail,
            name,
            handled
        FROM contact_messages
        ORDER BY created_at DESC, id DESC
        LIMIT ?
    `).all(safeLimit);

}
