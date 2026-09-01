import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/buckshot-roulette.js";

test("the Buckshot Roulette guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "buckshot-roulette-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "buckshot-roulette");

});

test("the Buckshot Roulette guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Beating the Game & Double or Nothing",
            "Hidden Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Buckshot Roulette achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["70K", "Bronze Gates", "Chasing Losses", "Overdose", "Nope!", "140K", "1000K", "Coin Flip", "Digita, Orava and Koni", "Know When To Quit", "Name Taken", "Full House", "Why?", "Soak It In", "Going Out With Style!", "High Rollers"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
