// Task 10 (Contact Us): pure validation/normalization for a contact
// submission. No DB, no network, no wall-clock reads - kept separate from
// contactController.js the same way this codebase keeps every reduce/
// derive step separate from the code that calls it, so the rules can be
// unit-tested with synthetic input alone.

// Deliberately generous ceilings - a real bug report or idea is a few
// paragraphs at most. These exist as abuse/defense-in-depth (a malformed
// or malicious client posting an enormous body), not a limit any genuine
// message should approach. MESSAGE_MAX matches the frontend textarea's
// own maxlength (see profile-settings.js) so a message typed right up to
// the field's limit is never rejected by a stricter server.
export const MESSAGE_MAX = 4000;
export const NAME_MAX = 120;
export const EMAIL_MAX = 254;
export const REASON_MAX = 120;

// The <select> options shipped by the form (profile-settings.js). An
// unknown/empty reason is normalized to "Other" rather than rejected -
// the reason is a coarse category, never worth failing a genuine message
// over, and a future client version could add options this list doesn't
// know yet.
export const ALLOWED_REASONS = Object.freeze([
    "Bug report",
    "Something isn't working",
    "Account issue",
    "Suggestion / feedback",
    "Other"
]);

// A deliberately simple, permissive email shape check: exactly one "@",
// at least one char before it, and a dotted domain after it with no
// whitespace anywhere. Matching the full RFC 5322 grammar is neither
// possible with a sane regex nor useful here - the only real goal is to
// catch an obvious typo ("jordi@", "jordigmail.com") before storing it,
// so a reply address that can't possibly work isn't silently kept. The
// frontend runs the same shape of check first (validateEmail.js) for an
// instant inline error; this is the authoritative re-check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {

    return typeof value === "string"
        && value.length <= EMAIL_MAX
        && EMAIL_RE.test(value.trim());

}

// Returns { ok: true, value: {...} } with normalized fields ready for
// contactStore.saveContactMessage, or { ok: false, message } with a
// single, user-safe explanation of the first problem found. `raw` is the
// parsed request body (already size-capped by express.json()); steamId /
// userAgent are supplied separately by the controller from the session /
// headers, never trusted from the body.
export function validateContactSubmission(raw, { steamId = null, userAgent = null } = {}) {

    const body = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};

    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {

        return { ok: false, message: "A message is required." };

    }

    if (message.length > MESSAGE_MAX) {

        return { ok: false, message: `Message is too long (max ${MESSAGE_MAX} characters).` };

    }

    // Email is optional. Only validated when the user actually provided
    // one - an empty/missing field is a valid "no reply needed" submission,
    // never an error. A provided-but-malformed address IS an error (the
    // brief: "Do not silently discard the email").
    const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
    let replyEmail = null;

    if (rawEmail) {

        if (!isValidEmail(rawEmail)) {

            return { ok: false, message: "That email address doesn't look right. Leave it blank if you don't need a reply." };

        }

        replyEmail = rawEmail;

    }

    const rawName = typeof body.name === "string" ? body.name.trim() : "";

    if (rawName.length > NAME_MAX) {

        return { ok: false, message: `Name is too long (max ${NAME_MAX} characters).` };

    }

    const rawReason = typeof body.reason === "string" ? body.reason.trim().slice(0, REASON_MAX) : "";

    const reason = ALLOWED_REASONS.includes(rawReason) ? rawReason : "Other";

    return {

        ok: true,

        value: {
            reason,
            message,
            replyEmail,
            name: rawName || null,
            steamId: steamId ?? null,
            userAgent: typeof userAgent === "string" ? userAgent.slice(0, 400) : null
        }

    };

}
