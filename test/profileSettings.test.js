import { test } from "node:test";
import assert from "node:assert";

const { createProfileSettings } = await import("../src/components/profile-settings/profile-settings.js");
const { SUPPORT_EMAIL } = await import("../src/utils/contact/contactMailto.js");

test("createProfileSettings omits the Account/logout section entirely for a logged-out session", () => {

    const html = createProfileSettings({ logged: false });

    assert.doesNotMatch(html, /id="settings-logout-btn"/);
    assert.doesNotMatch(html, /<h3>Account<\/h3>/);

});

test("createProfileSettings defaults to the logged-out state when called with no argument", () => {

    const html = createProfileSettings();

    assert.doesNotMatch(html, /id="settings-logout-btn"/);

});

test("createProfileSettings renders the Account section with a logout button for a logged-in session", () => {

    const html = createProfileSettings({ logged: true });

    assert.match(html, /<h3>Account<\/h3>/);
    assert.match(html, /id="settings-logout-btn"/);
    assert.match(html, />\s*Log out\s*</);

});

test("createProfileSettings always renders the Contact & Support form, regardless of login state", () => {

    for (const session of [{ logged: false }, { logged: true }]) {

        const html = createProfileSettings(session);

        assert.match(html, /<h3>Contact &amp; Support<\/h3>/);
        assert.match(html, /id="contact-form"/);
        assert.match(html, /id="contact-reason"/);
        assert.match(html, /id="contact-message"/);
        assert.match(html, /type="submit"/);

    }

});

test("createProfileSettings' contact form covers every stated contact reason (bug, broken feature, account issue, feedback)", () => {

    const html = createProfileSettings();

    assert.match(html, /Report a bug/);
    assert.match(html, /Something isn't working/);
    assert.match(html, /Account issue/);
    assert.match(html, /Suggestion or feedback/);

});

test("createProfileSettings' contact message field is required, so a submit can't fire with an empty message", () => {

    const html = createProfileSettings();

    const textareaMatch = html.match(/<textarea[^>]*id="contact-message"[^>]*>/);

    assert.ok(textareaMatch, "expected the contact message textarea");
    assert.match(textareaMatch[0], /required/);

});

// Regression coverage for the reported bug: the destination address must
// be visible in the page BEFORE the visitor ever touches Send, not just
// buried inside a JS-constructed mailto: URL. Also guards against the
// invented "support@achievementplanner.app" address (never shipped as
// real, but this pins the real one so it can't quietly regress).
test("createProfileSettings shows the real support email as visible, clickable text before the form", () => {

    const html = createProfileSettings();

    const emailIndex = html.indexOf(SUPPORT_EMAIL);
    const formIndex = html.indexOf("<form");

    assert.ok(emailIndex !== -1, "the real support email must appear in the rendered markup");
    assert.ok(emailIndex < formIndex, "the email must be visible before the form, not only inside a submit-time-built URL");
    assert.match(html, new RegExp(`<a[^>]*href="mailto:${SUPPORT_EMAIL}"[^>]*>${SUPPORT_EMAIL}</a>`));
    assert.doesNotMatch(html, /support@achievementplanner\.app/, "the old invented address must never reappear");

});

test("createProfileSettings' contact form has novalidate (submit handling re-validates manually via reportValidity)", () => {

    const html = createProfileSettings();

    assert.match(html, /<form id="contact-form" class="contact-form" novalidate>/);

});

test("createProfileSettings' contact message field caps length, matching the backend's MESSAGE_MAX (contactValidation.js)", () => {

    const html = createProfileSettings();

    const textareaMatch = html.match(/<textarea[^>]*id="contact-message"[^>]*>/);

    assert.match(textareaMatch[0], /maxlength="4000"/);

});

test("createProfileSettings' contact form has an OPTIONAL email field, clearly labelled as reply-only", () => {

    const html = createProfileSettings();

    // The field exists, is type=email, and is NOT marked required.
    const emailInput = html.match(/<input[^>]*id="contact-email"[^>]*>/);
    assert.ok(emailInput, "expected an #contact-email input");
    assert.match(emailInput[0], /type="email"/);
    assert.doesNotMatch(emailInput[0], /\brequired\b/);

    // The UI makes the "only needed for a reply" contract explicit.
    assert.match(html, /required only if you want a reply/i);
    assert.match(html, /we still get your message/i);

});

test("createProfileSettings' contact form has an OPTIONAL name field", () => {

    const html = createProfileSettings();

    const nameInput = html.match(/<input[^>]*id="contact-name"[^>]*>/);
    assert.ok(nameInput, "expected an #contact-name input");
    assert.doesNotMatch(nameInput[0], /\brequired\b/);

});

test("createProfileSettings' contact message field is still the only REQUIRED form control", () => {

    const html = createProfileSettings();

    // Every form control tag, then count the ones carrying a `required`
    // attribute - prose like "required only if you want a reply" must not
    // count.
    const controls = html.match(/<(input|textarea|select)\b[^>]*>/g) ?? [];

    const requiredControls = controls.filter(tag => /\srequired(\s|>|\/)/.test(tag));

    assert.strictEqual(requiredControls.length, 1, "exactly one control (the message) should be required");
    assert.match(requiredControls[0], /id="contact-message"/);

});

test("createProfileSettings includes a hidden, accessible status region for the post-submit result", () => {

    const html = createProfileSettings();

    assert.match(html, /id="contact-form-status"/);
    assert.match(html, /role="status"/);
    assert.match(html, /aria-live="polite"/);

    const statusMatch = html.match(/<p[^>]*id="contact-form-status"[^>]*>/);
    assert.ok(statusMatch, "expected the status paragraph");
    assert.match(statusMatch[0], /hidden/, "the status region must start hidden - nothing has been submitted yet on first render");

});

test("createProfileSettings' submit button has a stable id so profile.js can disable it and change its label while sending", () => {

    const html = createProfileSettings();

    assert.match(html, /id="contact-submit-btn"[^>]*type="submit"/);

});
