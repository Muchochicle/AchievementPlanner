import { getLeaderboardDb } from "../services/leaderboardDb.js";
import { saveContactMessage } from "../services/contactStore.js";
import { validateContactSubmission } from "../utils/contactValidation.js";
import { sendServerError } from "../utils/sendServerError.js";

// Task 10 (Contact Us).
//
// The previous mechanism was a mailto: hand-off from the frontend: the
// page built a pre-filled mailto: URL and set window.location to it, then
// *guessed* whether a mail client opened by watching for a window blur
// (see the old src/utils/contact/attemptMailto.js). That guess was wrong
// often enough - webmail-only devices, Gmail registered as a protocol
// handler opening a background tab, or simply a browser that doesn't blur
// - that a large share of users hit "We couldn't detect an email app
// opening..." on a perfectly normal Send. There was also no actual inbox:
// nothing was ever received unless the user then hit send inside their
// mail client.
//
// This endpoint replaces that with a real submission the server can
// genuinely confirm: the message is persisted to SQLite (the same
// achievementplanner.db on the Railway persistent volume that already
// holds leaderboard/player-progress/session data) and the response
// carries a real reference id. No email is *sent* from here - this app
// has no SMTP credentials or transactional-email API key anywhere, by
// design, and adding one is out of scope - but "message received and
// stored" is a true statement the frontend can now make honestly, which
// "your mail client may have opened" never was. The frontend keeps the
// mailto: link as an explicit, clearly-labeled fallback for when this
// endpoint can't be reached at all.
//
// Rate limiting: mounted under /api, so the existing apiRateLimiter in
// server.js (300 requests / 15 min / IP) already covers it - well above
// any legitimate contact use, low enough to bound scripted spam. The
// 256kb express.json() body cap and MESSAGE_MAX in contactValidation.js
// are the other two guards.

export async function postContact(req, res) {

    return postContactWithDeps(req, res, { getLeaderboardDb, saveContactMessage });

}

// Injectable version for tests - same getX/getXWithDeps split every other
// controller here uses (playerProgressController.js, profileStatsController.js)
// so the validation + persistence contract can be verified against an
// isolated in-memory database.
export async function postContactWithDeps(req, res, deps) {

    const { getLeaderboardDb, saveContactMessage } = deps;

    const steamId = req.session?.user?.steamid ?? null;
    const userAgent = req.get?.("user-agent") ?? req.headers?.["user-agent"] ?? null;

    const validation = validateContactSubmission(req.body, { steamId, userAgent });

    if (!validation.ok) {

        return res.status(400).json({

            success: false,

            message: validation.message

        });

    }

    try {

        const db = getLeaderboardDb();

        const { id, createdAt } = saveContactMessage(db, validation.value);

        res.json({

            success: true,

            id,

            receivedAt: createdAt,

            // Whether we can actually reply - lets the frontend tailor its
            // confirmation ("we'll get back to you at ..." vs "we won't be
            // able to reply directly") without re-deriving it from the
            // fields it sent.
            canReply: Boolean(validation.value.replyEmail)

        });

    } catch (error) {

        sendServerError(res, error, "POST /api/contact");

    }

}
