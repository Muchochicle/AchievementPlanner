// Task 10 (Contact Us): the client-side half of email validation, run for
// an instant inline error before anything is sent. The backend
// (backend/utils/contactValidation.js) runs the same shape of check as
// the authoritative one - this is purely UX, never the security boundary.
//
// Deliberately permissive: exactly one "@", something before it, and a
// dotted domain after it, no whitespace. The goal is only to catch an
// obvious typo ("me@", "megmail.com") so a reply address that can't
// possibly work isn't submitted - not to enforce RFC 5322 (impossible
// with a sane regex, and it would reject valid-but-unusual real addresses).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAIL_MAX = 254;

export function isValidEmail(value) {

    return typeof value === "string"
        && value.trim().length <= EMAIL_MAX
        && EMAIL_RE.test(value.trim());

}
