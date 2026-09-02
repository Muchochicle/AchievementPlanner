import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-roottrees-are-dead.js";

test("the The Roottrees are Dead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-roottrees-are-dead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-roottrees-are-dead");

});

test("the The Roottrees are Dead guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Investigation","Collectibles & Completion","Spider Search Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official The Roottrees are Dead achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Genealogy Genie","Voracious Reader","You Deserve a Gold Star","Thinking Outside the Box","Search Failure","Call Screener","Establishing Roots","Audiophile","Take My Hand Beneath the Tree","Branching Out","Family Secrets","The Big Reveal","Old Flings","Extracurricular Activities","Roottree Company Affairs","What's the Deal With All These Roottrees?","Duckler County Denizen","Loose Ends: Part One","Loose Ends: Part Two","It's All Connected!","FamilyDoku!","Where There's Smoke..."];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
