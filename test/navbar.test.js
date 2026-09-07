import { test } from "node:test";
import assert from "node:assert";

// createNavbar() -> createNavLinks() reads window.location.pathname, which
// is not available in plain Node - same minimal stub as navLinks.test.js.
globalThis.window = {
    location: { pathname: "/" }
};

const { createNavbar } = await import("../src/components/navbar/navbar.js");

test("logged-out navbar renders a Steam login button with a real gap between 'Log in' and 'with Steam'", () => {

    const html = createNavbar({ logged: false });

    assert.match(html, /class="steam-login-btn"/, "logged-out navbar must show the Steam login button");

    // Regression: .steam-login-btn is display:flex, so a literal leading
    // space inside the suffix <span> gets stripped as flex-item
    // whitespace, rendering "Log inwith Steam". The gap must be a
    // non-collapsible &nbsp;, never a plain space that flex can eat.
    assert.match(
        html,
        /Log in<span class="steam-login-btn-suffix">(&nbsp;| )with Steam<\/span>/,
        'the suffix must start with a non-breaking space so the button reads "Log in with Steam", not "Log inwith Steam"'
    );

    assert.doesNotMatch(
        html,
        /Log in<span class="steam-login-btn-suffix"> with Steam/,
        "a plain leading space here is the bug - flex layout strips it"
    );

});

