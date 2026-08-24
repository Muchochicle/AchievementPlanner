import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Phase 63 (PHASE_63_AUDIT.md) - none of this app's 7 pages had a "Skip to
// main content" link (WCAG 2.1 SC 2.4.1 Bypass Blocks): a keyboard or
// screen-reader user had to tab through the entire navbar (logo, 3+ links,
// and on the home page the search input too) on every single page load
// before reaching real content. This reads each real, current top-level
// HTML file from disk and asserts the skip link is present as the first
// element inside <body> (so it's genuinely the first Tab stop, not just
// present somewhere on the page) and that its href target - <main
// id="main-content"> - actually exists, so a future edit that renames one
// without the other fails a test instead of shipping a broken skip link.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const PAGES = [
    "index.html",
    "game.html",
    "games.html",
    "guide.html",
    "guides.html",
    "podiums.html",
    "profile.html"
];

function readPage(name) {

    return fs.readFileSync(path.join(ROOT, name), "utf-8");

}

for (const page of PAGES) {

    test(`${page} - skip link is the first element in <body>, before the navbar`, () => {

        const html = readPage(page);

        const bodyStart = html.indexOf("<body>");
        const skipLinkStart = html.indexOf('<a href="#main-content" class="skip-link">');
        const navbarStart = html.indexOf('<div id="navbar">');

        assert.ok(bodyStart !== -1, "expected a <body> tag");
        assert.ok(skipLinkStart !== -1, "expected the skip link anchor");
        assert.ok(navbarStart !== -1, "expected the navbar mount point");

        assert.ok(skipLinkStart > bodyStart, "skip link must be inside <body>");
        assert.ok(skipLinkStart < navbarStart, "skip link must come before the navbar so it's the first Tab stop");

    });

    test(`${page} - has a <main id="main-content"> matching the skip link's href target`, () => {

        const html = readPage(page);

        assert.match(html, /<main id="main-content"/);

    });

    // Without tabindex="-1", <main> isn't a valid focus target at all -
    // activating the skip link scrolls the page into view but leaves
    // keyboard/screen-reader focus sitting on <body> (confirmed via live
    // browser verification, Phase 63), silently defeating the whole point
    // for the exact users this link exists for. tabindex="-1" makes it
    // programmatically focusable without adding it to the normal Tab
    // order - the standard fix for this well-known skip-link gotcha.
    test(`${page} - <main id="main-content"> has tabindex="-1" so activating the skip link actually moves focus, not just scroll position`, () => {

        const html = readPage(page);

        assert.match(html, /<main id="main-content" tabindex="-1">/);

    });

}

test("style.css defines .skip-link with an off-screen default position and a :focus state that brings it on-screen", () => {

    const css = fs.readFileSync(path.join(ROOT, "src", "css", "style.css"), "utf-8");

    assert.match(css, /\.skip-link\s*\{[^}]*top:\s*-\d/, "expected .skip-link to be positioned off-screen by default");
    assert.match(css, /\.skip-link:focus\s*\{[^}]*top:\s*0/, "expected .skip-link:focus to move on-screen (top:0)");

});
