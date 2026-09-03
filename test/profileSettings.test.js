import { test } from "node:test";
import assert from "node:assert";

const { createProfileSettings } = await import("../src/components/profile-settings/profile-settings.js");

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
