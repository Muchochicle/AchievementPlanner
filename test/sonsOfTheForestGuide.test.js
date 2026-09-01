import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sons-of-the-forest.js";

test("the Sons of the Forest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sons-of-the-forest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sons-of-the-forest");

});

test("the Sons of the Forest guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival, Building & Companions",
            "Crafting, Digging & Gags",
            "Discoverables",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official Sons of the Forest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["THIS CAN’T BE HEALTHY", "DYNAMO", "COLLECTOR", "1%", "FOODIE", "SURVIVOR", "WHAT COULD GO WRONG", "THIS PLACE ISN’T SO BAD", "NEVER GOING HOME", "TRUSTED", "FASHIONISTA", "TRADESMAN", "CONTRACTOR", "ARCHITECT", "CITY PLANNER", "PINATA", "SUCKER FOR PUNISHMENT", "EVERY MOVE YOU MAKE", "MC CRAFTY", "I DREAM OF SUSHI", "BADGER", "I LIKE BLISTERS", "NEED A BIGGER BOAT", "MAKER", "CHIVALRY IS NOT DEAD", "FOUGHT DEMONS", "FIGHT DEMONS", "KEEP YOUR FRIENDS CLOSE", "OOOH SHINY", "INTERIOR DESIGNER", "BLOCKBUSTER", "GUMSHOE"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
