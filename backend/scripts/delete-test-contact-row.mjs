// One-off maintenance: remove the automated rows that Task 10 verification
// left in contact_messages on the production volume. Two kinds exist, both
// created by tooling, never by a real visitor:
//
//   1. QA rows      - name "AP QA" AND the message contains
//                     "automated verification by Claude Code".
//   2. probe rows   - message is EXACTLY the fixed deploy-probe string
//                     below (a deploy-detection loop briefly posted these
//                     while waiting for a Railway redeploy).
//
// Why a committed, guarded script rather than a raw DELETE: it will only
// ever delete a row matching one of those exact fingerprints, so it
// cannot touch a genuine submission even if run carelessly. It prints
// every row it deletes and is a harmless no-op (exit 0) when there are
// none.
//
// Usage, from the backend service (Railway "Root Directory" = backend):
//
//     railway run node scripts/delete-test-contact-row.mjs        # every automated row
//     railway run node scripts/delete-test-contact-row.mjs 3      # only id 3, still fingerprint-guarded
//
// It honours DATABASE_PATH exactly like the app does (services/
// leaderboardDb.js), so `railway run` targets the same volume file the
// running server uses.

import { getLeaderboardDb } from "../services/leaderboardDb.js";

const QA_NAME = "AP QA";
const QA_MESSAGE_MARKER = "automated verification by Claude Code";
const PROBE_MESSAGE = "__deploy_probe__ (not stored: invalid, empty-ish check)";

function classify(row) {

    if (!row || typeof row.message !== "string") {

        return null;

    }

    if (row.name === QA_NAME && row.message.includes(QA_MESSAGE_MARKER)) {

        return "QA verification row";

    }

    if (row.message === PROBE_MESSAGE) {

        return "deploy-probe row";

    }

    return null;

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

    if (!classify(row)) {

        console.error(
            `\nRefusing to delete row #${targetId}: it does not match any known automated fingerprint.\n` +
            "If you genuinely intend to delete it, do so manually after confirming it is not a real user submission."
        );
        process.exit(2);

    }

    candidates = [row];

} else {

    candidates = db
        .prepare("SELECT id, created_at, name, reason, message FROM contact_messages ORDER BY id")
        .all()
        .filter(classify);

    if (candidates.length === 0) {

        console.log("No automated rows found in contact_messages - nothing to do.");
        process.exit(0);

    }

}

const deleteOne = db.prepare("DELETE FROM contact_messages WHERE id = ?");

let deleted = 0;

for (const row of candidates) {

    console.log(`Deleting ${classify(row)} #${row.id} (${row.created_at})`);
    deleted += deleteOne.run(row.id).changes;

}

const remaining = db.prepare("SELECT COUNT(*) AS n FROM contact_messages").get();

console.log(`\nDeleted ${deleted} row(s). contact_messages now holds ${remaining.n} row(s).`);
