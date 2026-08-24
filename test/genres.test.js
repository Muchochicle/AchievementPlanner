import { test } from "node:test";
import assert from "node:assert";

import { getGenres, createGenresHTML } from "../src/utils/catalog/genres.js";

test("getGenres collects the unique, sorted set of genres across every game, skipping games with no genres field", () => {

    const genres = getGenres([

        { genres: ["Puzzle", "Adventure"] },
        { genres: ["Adventure", "Roguelike"] },
        {}

    ]);

    assert.deepStrictEqual(genres, ["Adventure", "Puzzle", "Roguelike"]);

});

test("getGenres returns an empty array when no game has any genres", () => {

    assert.deepStrictEqual(getGenres([{}, { genres: [] }]), []);

});

// Finding 10 (PHASE_51-54_AUDIT.md) - createGenresHTML previously
// interpolated `genre` raw into both an attribute and element text with no
// escaping. genres are currently only ever sourced from curated static
// JSON (not attacker-controlled), but this is escaped anyway to match this
// codebase's established convention and close the gap for any future
// dynamic source.
test("createGenresHTML escapes an HTML-injecting genre in both the checkbox value attribute and the visible label text", () => {

    const html = createGenresHTML([`<img src=x onerror=alert(1)>`]);

    assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
    assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);

});

test("createGenresHTML prevents an attribute-breakout payload in the checkbox value attribute", () => {

    const html = createGenresHTML([`x" onchange="alert(1)`]);

    assert.doesNotMatch(html, /onchange="alert\(1\)"/);
    assert.match(html, /value="x&quot; onchange=&quot;alert\(1\)"/);

});

test("createGenresHTML still renders normal genres correctly", () => {

    const html = createGenresHTML(["Puzzle", "Adventure"]);

    assert.match(html, /value="Puzzle"/);
    assert.match(html, />\s*Puzzle\s*</);
    assert.match(html, /value="Adventure"/);
    assert.match(html, />\s*Adventure\s*</);

});

test("createGenresHTML returns an empty string for an empty genre list", () => {

    assert.strictEqual(createGenresHTML([]), "");

});
