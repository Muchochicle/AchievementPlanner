import { getLeaderboardDb } from "../services/leaderboardDb.js";
import { saveContactMessage } from "../services/contactStore.js";
import { sendContactNotification } from "../services/emailNotifier.js";
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
// carries a real reference id.
//
// Delivery is a two-step, order-that-matters flow:
//
//   1. store   - saveContactMessage() writes the row. If THIS fails,
//                nothing was received: respond 500, nothing is lost
//                because nothing existed.
//   2. notify  - sendContactNotification() emails the support inbox via a
//                transactional email provider (services/emailNotifier.js).
//                By the time this runs the message is already durably
//                stored, so a failure here must NOT become an error
//                response and must NOT discard anything - it only changes
//                what we tell the user.
//
// The response therefore carries BOTH `success` (was it received & stored)
// and `notificationStatus` ("sent" | "skipped" | "failed" - was the
// support inbox actually emailed). The frontend uses the latter to pick
// its confirmation wording; it never claims an email was delivered on the
// strength of the DB write alone.
//
// Rate limiting: mounted under /api, so the existing apiRateLimiter in
// server.js (300 requests / 15 min / IP) already covers it - well above
// any legitimate contact use, low enough to bound scripted spam. The
// 256kb express.json() body cap and MESSAGE_MAX in contactValidation.js
// are the other two guards.

export async function postContact(req, res) {

    return postContactWithDeps(req, res, {
        getLeaderboardDb,
        saveContactMessage,
        sendContactNotification
    });

}

// Injectable version for tests - same getX/getXWithDeps split every other
// controller here uses (playerProgressController.js, profileStatsController.js)
// so the validation + persistence contract can be verified against an
// isolated in-memory database, and every notification outcome
// (sent/skipped/failed/threw) can be exercised with a fake notifier.
export async function postContactWithDeps(req, res, deps) {

    const { getLeaderboardDb, saveContactMessage, sendContactNotification } = deps;

    const steamId = req.session?.user?.steamid ?? null;
    const userAgent = req.get?.("user-agent") ?? req.headers?.["user-agent"] ?? null;

    const validation = validateContactSubmission(req.body, { steamId, userAgent });

    if (!validation.ok) {

        return res.status(400).json({

            success: false,

            message: validation.message

        });

    }

    // Step 1 - store. A failure here means nothing was received.
    let stored;

    try {

        const db = getLeaderboardDb();

        stored = saveContactMessage(db, validation.value);

    } catch (error) {

        return sendServerError(res, error, "POST /api/contact");

    }

    // Step 2 - notify. The message is durably stored from this point on, so
    // every outcome below still returns success: true; only
    // notificationStatus changes. sendContactNotification is contracted
    // never to throw (see emailNotifier.js), but the extra guard keeps a
    // hypothetical bug in it from turning a genuinely-received message into
    // a 500.
    let notification;

    try {

        notification = await sendContactNotification({
            id: stored.id,
            createdAt: stored.createdAt,
            ...validation.value
        });

    } catch (error) {

        console.error("[POST /api/contact] notification threw unexpectedly:", error);

        notification = { status: "failed", error };

    }

    res.json({

        success: true,

        id: stored.id,

        receivedAt: stored.createdAt,

        // Whether we can actually reply - lets the frontend tailor its
        // confirmation ("we'll get back to you at ..." vs "we won't be
        // able to reply directly") without re-deriving it from the
        // fields it sent.
        canReply: Boolean(validation.value.replyEmail),

        // Whether the support inbox was actually emailed:
        //   "sent"    - provider accepted the notification
        //   "skipped" - notifications not configured on this deployment
        //   "failed"  - provider rejected it or was unreachable
        // The message is stored regardless; the frontend never says an
        // email went out unless this is "sent".
        notified: notification.status === "sent",

        notificationStatus: notification.status

    });

}
