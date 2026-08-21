import { test } from "node:test";
import assert from "node:assert";

// createNavLinks() reads window.location.pathname directly - not available
// in plain Node, so this file provides a minimal stub, matching the
// existing "smallest shim that does the job" convention used for `document`
// in test/catalogFilters.test.js / test/gamesPageFilterPipeline.test.js.
globalThis.window = {
    location: { pathname: "" }
};

const { createNavLinks } = await import("../src/components/nav-links/nav-links.js");

function setPath(pathname) {

    window.location.pathname = pathname;

}

// Pulls out just the markup for one nav <a>, so assertions on one link's
// active/aria-current state can't accidentally match the other link -
// matched by the stable literal text either side of it, tolerant of the
// template's own internal whitespace/attribute-ordering.
function extractLink(html, href, text) {

    const start = html.indexOf(`href="${href}"`);
    const end = html.indexOf(`>${text}</a>`, start);

    return html.slice(start, end);

}

test("marks Games active with aria-current on games.html, Podiums and Guides inactive", () => {

    setPath("/games.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");
    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(gamesLink, /class="active"/);
    assert.match(gamesLink, /aria-current="page"/);

    assert.match(podiumsLink, /class=""/);
    assert.doesNotMatch(podiumsLink, /aria-current/);

    assert.match(guidesLink, /class=""/);
    assert.doesNotMatch(guidesLink, /aria-current/);

});

test("marks Games active on game.html too (the Game detail page is part of the Games section)", () => {

    setPath("/game.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");

    assert.match(gamesLink, /class="active"/);
    assert.match(gamesLink, /aria-current="page"/);

});

test("marks Podiums active with aria-current on podiums.html, Games and Guides inactive", () => {

    setPath("/podiums.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");
    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(gamesLink, /class=""/);
    assert.doesNotMatch(gamesLink, /aria-current/);

    assert.match(podiumsLink, /class="active"/);
    assert.match(podiumsLink, /aria-current="page"/);

    assert.match(guidesLink, /class=""/);
    assert.doesNotMatch(guidesLink, /aria-current/);

});

test("marks Guides active with aria-current on guides.html, Games and Podiums inactive", () => {

    setPath("/guides.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");
    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(gamesLink, /class=""/);
    assert.doesNotMatch(gamesLink, /aria-current/);

    assert.match(podiumsLink, /class=""/);
    assert.doesNotMatch(podiumsLink, /aria-current/);

    assert.match(guidesLink, /class="active"/);
    assert.match(guidesLink, /aria-current="page"/);

});

test("marks Guides active on guide.html too (an individual guide is part of the Guides section)", () => {

    setPath("/guide.html");

    const html = createNavLinks();

    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(guidesLink, /class="active"/);
    assert.match(guidesLink, /aria-current="page"/);

});

test("marks no link active on a page outside every section (e.g. the Home page)", () => {

    setPath("/index.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");
    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(gamesLink, /class=""/);
    assert.doesNotMatch(gamesLink, /aria-current/);

    assert.match(podiumsLink, /class=""/);
    assert.doesNotMatch(podiumsLink, /aria-current/);

    assert.match(guidesLink, /class=""/);
    assert.doesNotMatch(guidesLink, /aria-current/);

});

test("does not crash and marks no link active for a root '/' pathname with no filename at all", () => {

    setPath("/");

    assert.doesNotThrow(() => createNavLinks());

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");
    const guidesLink = extractLink(html, "guides.html", "Guides");

    assert.match(gamesLink, /class=""/);
    assert.match(podiumsLink, /class=""/);
    assert.match(guidesLink, /class=""/);

});

test("always renders the disabled Roadmap/About links as aria-disabled with a 'Soon' badge (Guides is now a real link, not one of these)", () => {

    setPath("/games.html");

    const html = createNavLinks();

    for (const label of ["Roadmap", "About"]) {

        const disabledLink = html.slice(html.indexOf(label) - 200, html.indexOf(label) + 100);

        assert.match(disabledLink, /aria-disabled="true"/);

    }

    assert.doesNotMatch(html, /class="nav-link-disabled"[^>]*>\s*Guides/, "Guides must not still render as a disabled placeholder");

    assert.strictEqual((html.match(/nav-link-soon/g) ?? []).length, 2);

});
