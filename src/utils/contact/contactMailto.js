// Single source of truth for the Contact & Support destination - read by
// both profile-settings.js (to render it as visible text/a real mailto:
// link, so a visitor can see and use it before ever touching the form)
// and src/js/profile.js (to build the actual submission URL). Never
// duplicate this string anywhere else - a second, hand-typed copy is
// exactly how the previous, invented "support@achievementplanner.app"
// address happened.
export const SUPPORT_EMAIL = "supportachievementplanner@gmail.com";

// This project has no email-sending backend/service (no SMTP credentials,
// no transactional-email API key) - see profile-settings.js's own header
// comment for why that's a deliberate choice, not an oversight. A mailto:
// link is the one mechanism that can deliver a real email to a real inbox
// with zero new infrastructure, zero secrets, and zero third-party
// service: the browser hands off to whatever mail client is already
// configured on the visitor's own device.
//
// encodeURIComponent on both subject and body - reason/message are
// free-form visitor input, and an unescaped "&" or "#" in either would
// otherwise corrupt the URL's own query-string structure (e.g. truncating
// the body at the first "&", or losing everything after a "#").
export function buildContactMailtoUrl({ reason, message }) {

    const subject = encodeURIComponent(`AchievementPlanner - ${reason}`);
    const body = encodeURIComponent(message);

    return `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;

}
