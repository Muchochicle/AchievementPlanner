import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Phase 68 (PHASE_68_AUDIT.md): game.html and index.html both had the
// identical static <title>Achievement Planner</title>, and every other
// page split between two different separator conventions ("|" on
// games.html/guide.html/guides.html, "•" on podiums.html/profile.html) -
// game.js's error path also never set document.title at all, so a failed
// game load left the tab permanently indistinguishable from the homepage.
// This reads each real, current top-level HTML file from disk and asserts
// a single, consistent "<Page> | Achievement Planner" convention, so a
// future edit reintroducing either the duplicate-title or the mixed-
// separator regression fails a test instead of shipping unnoticed.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

function readPage(name) {

    return fs.readFileSync(path.join(ROOT, name), "utf-8");

}

function extractTitle(html) {

    const match = html.match(/<title>([^<]*)<\/title>/);

    return match ? match[1] : null;

}

test("index.html's title is the bare brand name, not shared verbatim with any other page's static title", () => {

    const homeTitle = extractTitle(readPage("index.html"));

    assert.strictEqual(homeTitle, "Achievement Planner");

    const OTHER_PAGES = ["game.html", "games.html", "guide.html", "guides.html", "podiums.html", "profile.html", "roadmap.html", "about.html"];

    for (const page of OTHER_PAGES) {

        const title = extractTitle(readPage(page));

        assert.notStrictEqual(title, homeTitle, `${page}'s static title must not be identical to index.html's, or a failed/pre-JS load is indistinguishable from the homepage in browser history/tabs`);

    }

});

const SUFFIXED_PAGES = ["game.html", "games.html", "guide.html", "guides.html", "podiums.html", "profile.html", "roadmap.html", "about.html"];

for (const page of SUFFIXED_PAGES) {

    test(`${page}'s static title uses the "| Achievement Planner" suffix convention, not a mismatched separator`, () => {

        const title = extractTitle(readPage(page));

        assert.ok(title, `expected a <title> in ${page}`);
        assert.match(title, / \| Achievement Planner$/);
        assert.doesNotMatch(title, /•/, `${page}'s title must not use the old "•" separator convention`);

    });

}

test("game.js's dynamic titles (success and both error-path branches) all use the same '| Achievement Planner' suffix as the rest of the site", () => {

    const source = fs.readFileSync(path.join(ROOT, "src", "js", "game.js"), "utf-8");

    const titleAssignments = [...source.matchAll(/document\.title\s*=\s*`([^`]*)`/g)].map(m => m[1]);

    assert.ok(titleAssignments.length >= 2, "expected at least the success-path and error-path title assignments");

    for (const template of titleAssignments) {

        assert.match(template, /\| Achievement Planner$/, `document.title template "${template}" must use the "| Achievement Planner" suffix`);
        assert.doesNotMatch(template, /•/);

    }

});
