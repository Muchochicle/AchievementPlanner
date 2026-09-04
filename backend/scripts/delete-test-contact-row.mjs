// One-off maintenance: remove the automated-QA rows that Task 10
// verification passes inserted into contact_messages on the production
// volume. Each such row has name "AP QA" and a message beginning
// "[automated verification by Claude Code ...]".
//
// Why a committed, guarded script rather than a raw DELETE: it can only
// ever remove a row that matches BOTH known test-row fingerprints below
// (exact name "AP QA" AND the verification marker in the message), so it
// cannot touch a real user submission even if run carelessly. It prints
// every row it deletes and is a harmless no-op (exit 0) if there are none.
//
// Usage, from the backend service (Railway "Root Directory" = backend):
//
//     railway run node scripts/delete-test-contact-row.mjs        # all QA rows
//     railway run node scripts/delete-test-contact-row.mjs 3      # only id 3, still fingerprint-guarded
//
// It honours DATABASE_PATH exactly like the app does (services/
// leaderboardDb.js), so `railway run` targets the same volume file the
// running server uses.

import { getLeaderboardDb } from "../services/leaderboardDb.js";

const EXPECTED_NAME = "AP QA";
const EXPECTED_MESSAGE_MARKER = "automated verification by Claude Code";

function isTestRow(row) {

    return row
        && row.name === EXPECTED_NAME
        && typeof row.message === "string"
        && row.message.includes(EXPECTED_MESSAGE_MARKER);

}

const db = getLeaderboardDb();

const idArg = process.argv[2];

let candidates;

if (idArg !== undefined) {

    const targetId = Number(idArg);

    if (!Number.isInteger(targetId) || targetId <= 0) {

        console.error(`Invalid id argument: ${idArg}`);
        process.exit(1);

    }

    const row = db
        .prepare("SELECT id, created_at, name, reason, message FROM contact_messages WHERE id = ?")
        .get(targetId);

    if (!row) {

        console.log(`contact_messages row #${targetId} not found - nothing to do (already removed?).`);
        process.exit(0);

    }

    if (!isTestRow(row)) {

        console.error(
            `\nRefusing to delete row #${targetId}: it does not match the automated-QA fingerprint ` +
            `(expected name "${EXPECTED_NAME}" and a message containing "${EXPECTED_MESSAGE_MARKER}").\n` +
            "If you genuinely intend to delete it, do so manually after confirming it is not a real user submission."
        );
        process.exit(2);

    }

    candidates = [row];

} else {

    candidates = db
        .prepare("SELECT id, created_at, name, reason, message FROM contact_messages WHERE name = ?")
        .all(EXPECTED_NAME)
        .filter(isTestRow);

    if (candidates.length === 0) {

        console.log("No automated-QA rows found in contact_messages - nothing to do.");
        process.exit(0);

    }

}

const deleteOne = db.prepare("DELETE FROM contact_messages WHERE id = ?");

let deleted = 0;

for (const row of candidates) {

    console.log("Deleting row:", JSON.stringify(row, null, 2));
    deleted += deleteOne.run(row.id).changes;

}

const remaining = db.prepare("SELECT COUNT(*) AS n FROM contact_messages").get();

console.log(`\nDeleted ${deleted} row(s). contact_messages now holds ${remaining.n} row(s).`);
