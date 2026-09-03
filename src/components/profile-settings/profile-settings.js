import { SUPPORT_EMAIL } from "../../utils/contact/contactMailto.js";
import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Account-management actions (logging out, contacting support) live here,
// on the Profile page, rather than in the navbar - the navbar stays
// focused on navigation and the compact player-widget (see navbar.js).
// Wiring (the logout click handler, the contact form's submit handler)
// lives in src/js/profile.js, matching this app's existing convention of
// keeping components pure HTML-string generators and wiring DOM events
// from the page controller that renders them (see avatar-picker.js/
// profile.js's own avatarPicker.onclick).
//
// The logout control only renders for a logged-in session - there is
// nothing to log out of otherwise. Contact & Support always renders: a
// bug report or suggestion is useful whether or not the visitor is
// currently signed in.
export function createProfileSettings(
    session = {
        logged: false
    }
) {

    return `

        <section class="profile-settings">

            <h2>Settings</h2>

            ${session?.logged ? createAccountSection() : ""}

            ${createContactSection()}

        </section>

    `;

}

function createAccountSection() {

    return `

        <div class="profile-settings-group">

            <h3>Account</h3>

            <p class="profile-settings-hint">

                You're signed in with Steam. Logging out ends your session
                on this device.

            </p>

            <button

                id="settings-logout-btn"

                class="logout-btn"

                type="button"

            >

                Log out

            </button>

        </div>

    `;

}

// A lightweight, no-backend contact mechanism: the form composes a
// pre-filled mailto: link and hands off to the visitor's own email client
// - no ticket/support backend exists in this project today, and this app's
// existing architecture (a static GitHub Pages frontend with no server-
// side code of its own, plus a small Railway API with no outbound-email
// capability - no SMTP credentials, no transactional-email API key
// configured anywhere) makes standing up real email delivery for this
// alone disproportionate, and would require secrets this app has nowhere
// safe to keep on a static frontend anyway. The `reason` <select>'s value
// doubles as both the visible label and the eventual email subject line,
// which is also the hook a future "verified bug report -> badge" feature
// (see the Contact & Support idea in the project brief) could key off
// without changing this markup at all.
//
// The destination is shown as a real, always-present mailto: link
// (SUPPORT_EMAIL, the one place this address is defined - see
// contactMailto.js) *before* the form itself - a visitor can see, and even
// use, the real address without ever touching Send, satisfying "make the
// destination explicit" independently of whether the form's own JS
// behaves correctly on their device/browser.
//
// #contact-form-status is empty markup on first render - src/js/profile.js
// fills it in only after a real submit attempt (see attemptMailto.js),
// and its content always describes what actually happened (a mail-client
// hand-off was attempted; whether one opened is a best-effort guess), never
// a blanket "message sent" the page has no way to actually confirm.
function createContactSection() {

    const emailHtml = escapeHtml(SUPPORT_EMAIL);

    return `

        <div class="profile-settings-group">

            <h3>Contact &amp; Support</h3>

            <p class="profile-settings-hint">

                Found a bug, hit something that isn't working, have an
                account problem, or just want to share an idea? Reach us
                directly at
                <a class="contact-email-link" href="mailto:${emailHtml}">${emailHtml}</a>,
                or fill out the form below - it opens your email app with
                your message already addressed and pre-filled.

            </p>

            <form id="contact-form" class="contact-form" novalidate>

                <label class="contact-form-field">

                    Reason

                    <select id="contact-reason" name="reason">

                        <option value="Bug report">Report a bug</option>

                        <option value="Something isn't working">Something isn't working</option>

                        <option value="Account issue">Account issue</option>

                        <option value="Suggestion / feedback">Suggestion or feedback</option>

                        <option value="Other">Other</option>

                    </select>

                </label>

                <label class="contact-form-field">

                    Message

                    <textarea

                        id="contact-message"

                        name="message"

                        rows="4"

                        maxlength="1500"

                        placeholder="Describe what happened, or share your idea..."

                        required

                    ></textarea>

                </label>

                <button
                    id="contact-submit-btn"
                    type="submit"
                    class="btn-primary"
                >
                    Send
                </button>

                <p
                    id="contact-form-status"
                    class="contact-form-status"
                    role="status"
                    aria-live="polite"
                    hidden
                ></p>

            </form>

        </div>

    `;

}
