import { test } from "node:test";
import assert from "node:assert";

// login-error.js reads window.location / window.history only inside its
// functions (never at module load), so a stub set before the import is
// enough. Matches the repo's "smallest shim that does the job" convention
// (see test/layout.test.js, test/app.test.js).
let replaceStateCalls = [];

globalThis.window = {
    location: {
        href: "https://front.example/index.html?login=failed",
        pathname: "/index.html",
        search: "?login=failed",
        hash: ""
    },
    history: {
        replaceState(state, title, url) {
            replaceStateCalls.push(url);
        }
    }
};

const {
    createLoginError,
    isLoginFailureUrl,
    mountLoginError
} = await import("../src/components/login-error/login-error.js");

test.beforeEach(() => {
    replaceStateCalls = [];
    window.location = {
        href: "https://front.example/index.html?login=failed",
        pathname: "/index.html",
        search: "?login=failed",
        hash: ""
    };
});

// --- isLoginFailureUrl --------------------------------------------------

test("isLoginFailureUrl is true only for an exact login=failed marker", () => {

    assert.strictEqual(isLoginFailureUrl("?login=failed"), true);
    assert.strictEqual(isLoginFailureUrl("?foo=1&login=failed"), true);
    assert.strictEqual(isLoginFailureUrl("?login=failed&bar=2"), true);

    assert.strictEqual(isLoginFailureUrl(""), false);
    assert.strictEqual(isLoginFailureUrl("?login=ok"), false);
    assert.strictEqual(isLoginFailureUrl("?login=failure"), false);
    assert.strictEqual(isLoginFailureUrl("?failed=login"), false);
    assert.strictEqual(isLoginFailureUrl("?LOGIN=failed"), false);

});

test("isLoginFailureUrl falls back to window.location.search when given no argument", () => {

    window.location.search = "?login=failed";
    assert.strictEqual(isLoginFailureUrl(), true);

    window.location.search = "?something=else";
    assert.strictEqual(isLoginFailureUrl(), false);

});

// --- createLoginError -------------------------------------------------

test("createLoginError renders an alert with a retry link to the Steam login endpoint and a dismiss control", () => {

    const html = createLoginError();

    assert.match(html, /role="alert"/);
    assert.match(html, /We couldn't sign you in with Steam\./);
    assert.match(html, /href="[^"]*\/auth\/steam\/login"/, "retry link points at the login endpoint");
    assert.match(html, /class="login-error-retry"/);
    assert.match(html, /class="login-error-dismiss"/);
    assert.match(html, /Try again/);

});

// --- mountLoginError ------------------------------------------------

function makeFakeBanner() {

    return {
        removed: false,
        attributes: {},
        focused: 0,
        _dismissHandler: null,
        querySelector(sel) {
            if (sel === ".login-error-dismiss") {
                return {
                    addEventListener: (evt, fn) => {
                        if (evt === "click") this._dismissHandler = fn;
                    }
                };
            }
            return null;
        },
        remove() { this.removed = true; },
        setAttribute(name, value) { this.attributes[name] = value; },
        focus() { this.focused++; }
    };

}

function makeFakeContainer(banner) {

    return {
        insertedHtml: null,
        insertAdjacentHTML(position, html) {
            this.insertedHtml = { position, html };
        },
        querySelector(sel) {
            return sel === ".login-error" ? banner : null;
        }
    };

}

test("mountLoginError is a no-op (returns false) when the URL has no failure marker", () => {

    window.location.search = "?foo=bar";
    window.location.href = "https://front.example/index.html?foo=bar";

    const banner = makeFakeBanner();
    const container = makeFakeContainer(banner);

    const mounted = mountLoginError(container);

    assert.strictEqual(mounted, false);
    assert.strictEqual(container.insertedHtml, null);
    assert.strictEqual(replaceStateCalls.length, 0);

});

test("mountLoginError is a no-op when there is no container", () => {

    assert.strictEqual(mountLoginError(null), false);
    assert.strictEqual(mountLoginError(undefined), false);

});

test("mountLoginError injects the banner, wires Dismiss, focuses it, and strips ?login=failed from the URL", () => {

    const banner = makeFakeBanner();
    const container = makeFakeContainer(banner);

    const mounted = mountLoginError(container);

    assert.strictEqual(mounted, true);
    assert.strictEqual(container.insertedHtml.position, "afterbegin");
    assert.match(container.insertedHtml.html, /class="login-error"/);

    assert.strictEqual(banner.attributes.tabindex, "-1");
    assert.strictEqual(banner.focused, 1);

    // URL cleaned: replaceState called with the marker removed.
    assert.strictEqual(replaceStateCalls.length, 1);
    assert.strictEqual(replaceStateCalls[0], "/index.html");

    // Dismiss removes the banner.
    assert.strictEqual(typeof banner._dismissHandler, "function");
    banner._dismissHandler();
    assert.strictEqual(banner.removed, true);

});

test("mountLoginError keeps unrelated query params when stripping the marker", () => {

    window.location.href = "https://front.example/index.html?login=failed&ref=twitter";
    window.location.search = "?login=failed&ref=twitter";

    mountLoginError(makeFakeContainer(makeFakeBanner()));

    assert.strictEqual(replaceStateCalls[0], "/index.html?ref=twitter");

});
