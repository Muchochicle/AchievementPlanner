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
// existing architecture (a static frontend + a small Railway API with no
// outbound-email capability) makes standing one up for this alone
// disproportionate. The `reason` <select>'s value doubles as both the
// visible label and the eventual email subject line, which is also the
// hook a future "verified bug report -> badge" feature (see the Contact &
// Support idea in the project brief) could key off without changing this
// markup at all.
function createContactSection() {

    return `

        <div class="profile-settings-group">

            <h3>Contact &amp; Support</h3>

            <p class="profile-settings-hint">

                Found a bug, hit something that isn't working, have an
                account problem, or just want to share an idea? Send us a
                message.

            </p>

            <form id="contact-form" class="contact-form">

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

                        placeholder="Describe what happened, or share your idea..."

                        required

                    ></textarea>

                </label>

                <button
                    type="submit"
                    class="btn-primary"
                >
                    Send
                </button>

                <p class="profile-settings-hint">

                    This opens your email app with a pre-filled message to
                    our support address - nothing is sent automatically.

                </p>

            </form>

        </div>

    `;

}
