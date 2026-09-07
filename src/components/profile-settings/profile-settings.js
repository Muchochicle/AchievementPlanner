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

            ${session?.logged ? createProgressionDataSection() : ""}

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

// "Delete my progression data" - only rendered for a logged-in session
// (there is no stored progression to delete otherwise). Wiring (the reveal/
// cancel/confirm click handlers) lives in src/js/profile.js, same
// convention as the logout button above.
//
// Deliberately a two-step reveal, NOT a browser confirm() dialog: the
// consequences need spelling out in full before the visitor commits, and a
// native confirm() can't do that (and the codebase avoids modal dialogs -
// see resetProgress.js is dev-only). The confirmation panel starts hidden;
// the first button reveals it, the second actually deletes. The wording is
// explicit that this wipes stored AchievementPlanner progression only -
// Steam data, the Podiums leaderboard and the login session are all
// untouched, and Steam-derived XP/levels/avatar unlocks rebuild on the
// next load from the user's real achievement history.
function createProgressionDataSection() {

    return `

        <div class="profile-settings-group">

            <h3>Progression data</h3>

            <p class="profile-settings-hint">

                This deletes the AchievementPlanner progression stored for
                your account. It does not affect your Steam account, your
                Steam achievements, or your Podiums leaderboard standing,
                and it does not log you out.

            </p>

            <button

                id="settings-delete-progress-btn"

                class="danger-btn"

                type="button"

            >

                Delete my progression data

            </button>

            <div

                id="settings-delete-progress-confirm"

                class="profile-settings-danger-confirm"

                hidden

            >

                <p class="profile-settings-hint">

                    This will permanently, and with no way to undo it:

                </p>

                <ul class="profile-settings-danger-list">

                    <li>delete the AchievementPlanner progression saved to your account on our server;</li>

                    <li>reset your daily streak, longest streak, earned badges, equipped avatar and per-game planner progress back to zero;</li>

                    <li>keep you signed in with Steam - only the stored progression is removed.</li>

                </ul>

                <p class="profile-settings-hint">

                    XP, level and avatar unlocks that come from your Steam
                    achievement history will rebuild automatically the next
                    time the page loads, because they are re-derived from
                    Steam. Your streak, longest streak and badges start over
                    and cannot be restored. Your Steam data and Podiums
                    leaderboard entry are not deleted by this.

                </p>

                <div class="profile-settings-danger-actions">

                    <button

                        id="settings-delete-progress-confirm-btn"

                        class="danger-btn"

                        type="button"

                    >

                        Yes, delete my progression data

                    </button>

                    <button

                        id="settings-delete-progress-cancel-btn"

                        class="logout-btn"

                        type="button"

                    >

                        Cancel

                    </button>

                </div>

            </div>

            <p

                id="settings-delete-progress-status"

                class="contact-form-status"

                role="status"

                aria-live="polite"

                hidden

            ></p>

        </div>

    `;

}

// Task 10 (Contact Us). The form now submits to a real backend endpoint
// (POST /api/contact - backend/controllers/contactController.js) that
// persists the message and confirms receipt. That replaces the previous
// mailto:-only mechanism, which could never actually confirm anything and
// so showed "we couldn't detect an email app opening..." on a large share
// of perfectly normal sends. The visitor's own email client is kept as an
// explicit, clearly-labelled fallback (the mailto: link below, and an
// automatic fallback in profile.js if the endpoint can't be reached at
// all) - never presented as the primary path, and never described as
// "sent" when all that happened is a client opened.
//
// Fields: Reason (category), Name (optional), Email (optional - and the
// UI is explicit that a reply is only possible if it's given), Message
// (the only required field). The `reason` value doubles as the hook a
// future "verified bug report -> badge" feature could key off without
// changing this markup.
//
// The destination address is shown as a real, always-present mailto: link
// (SUPPORT_EMAIL, defined once in contactMailto.js) *before* the form, so
// a visitor can see and use it without ever touching Send.
//
// #contact-form-status is empty on first render - src/js/profile.js fills
// it in only after a real submit attempt, and its content always
// describes what actually happened (received & stored / invalid input /
// couldn't reach the server, your mail app was opened instead), never a
// blanket "message sent" the page can't back up.
function createContactSection() {

    const emailHtml = escapeHtml(SUPPORT_EMAIL);

    return `

        <div class="profile-settings-group">

            <h3>Contact &amp; Support</h3>

            <p class="profile-settings-hint">

                Found a bug, hit something that isn't working, have an
                account problem, or just want to share an idea? Send it
                straight to the Achievement Planner team below, or email us
                directly at
                <a class="contact-email-link" href="mailto:${emailHtml}">${emailHtml}</a>.

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

                    Name <span class="contact-form-optional">(optional)</span>

                    <input

                        id="contact-name"

                        name="name"

                        type="text"

                        maxlength="120"

                        autocomplete="name"

                        placeholder="What should we call you?"

                    >

                </label>

                <label class="contact-form-field">

                    Email <span class="contact-form-optional">(optional &mdash; required only if you want a reply)</span>

                    <input

                        id="contact-email"

                        name="email"

                        type="email"

                        maxlength="254"

                        autocomplete="email"

                        placeholder="you@example.com"

                        aria-describedby="contact-email-hint"

                    >

                </label>

                <p id="contact-email-hint" class="contact-form-subhint">

                    Leave this blank and we still get your message &mdash; we
                    just won't be able to reply directly.

                </p>

                <label class="contact-form-field">

                    Message

                    <textarea

                        id="contact-message"

                        name="message"

                        rows="4"

                        maxlength="4000"

                        placeholder="Describe what happened, or share your idea..."

                        required

                    ></textarea>

                </label>

                <button
                    id="contact-submit-btn"
                    type="submit"
                    class="btn-primary"
                >
                    Send message
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
