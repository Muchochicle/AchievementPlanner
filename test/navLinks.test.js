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

test("marks Games active with aria-current on games.html, Podiums inactive", () => {

    setPath("/games.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");

    assert.match(gamesLink, /class="active"/);
    assert.match(gamesLink, /aria-current="page"/);

    assert.match(podiumsLink, /class=""/);
    assert.doesNotMatch(podiumsLink, /aria-current/);

});

test("marks Games active on game.html too (the Game detail page is part of the Games section)", () => {

    setPath("/game.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");

    assert.match(gamesLink, /class="active"/);
    assert.match(gamesLink, /aria-current="page"/);

});

test("marks Podiums active with aria-current on podiums.html, Games inactive", () => {

    setPath("/podiums.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");

    assert.match(gamesLink, /class=""/);
    assert.doesNotMatch(gamesLink, /aria-current/);

    assert.match(podiumsLink, /class="active"/);
    assert.match(podiumsLink, /aria-current="page"/);

});

test("marks neither link active on a page outside both sections (e.g. the Home page)", () => {

    setPath("/index.html");

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");

    assert.match(gamesLink, /class=""/);
    assert.doesNotMatch(gamesLink, /aria-current/);

    assert.match(podiumsLink, /class=""/);
    assert.doesNotMatch(podiumsLink, /aria-current/);

});

test("does not crash and marks neither link active for a root '/' pathname with no filename at all", () => {

    setPath("/");

    assert.doesNotThrow(() => createNavLinks());

    const html = createNavLinks();

    const gamesLink = extractLink(html, "games.html", "Games");
    const podiumsLink = extractLink(html, "podiums.html", "Podiums");

    assert.match(gamesLink, /class=""/);
    assert.match(podiumsLink, /class=""/);

});

test("always renders the disabled Guides/Roadmap/About links as aria-disabled with a 'Soon' badge", () => {

    setPath("/games.html");

    const html = createNavLinks();

    for (const label of ["Guides", "Roadmap", "About"]) {

        const disabledLink = html.slice(html.indexOf(label) - 200, html.indexOf(label) + 100);

        assert.match(disabledLink, /aria-disabled="true"/);

    }

    assert.strictEqual((html.match(/nav-link-soon/g) ?? []).length, 3);

});
