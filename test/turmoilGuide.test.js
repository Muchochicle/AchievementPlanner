import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/turmoil.js";

test("the Turmoil guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "turmoil-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "turmoil");

});

test("the Turmoil guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Money & Campaign",
            "Oil, Upgrades & Land",
            "The Heat Is On DLC",
            "Deeper Underground DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Turmoil achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Money", "The Big Haul", "Millionaire", "Cake!", "Expert", "Filthy Rich", "Mayor Shareholder", "Oil Tycoon", "Empty Milkshake", "Good Deal", "Great Deal", "Dubious Deal", "Factory Man", "Workshopper", "Stablelized", "Shiny", "Tip Top", "Big Spiller", "Overbidder", "Big Spender", "Promising", "Juicy", "Tree Fiddy", "Dove Hunt", "Cat Whisperer", "As Good As It Gets", "Digging It", "Magmificent", "Methodical", "Taking the Heat", "On Fire", "There's no more panic in this town", "Ruby ruby ruby ruby!", "Truly, Madly, Deeply", "Know when to hold 'em", "Boom, boom, boom, boom!!", "Chasing Waterfalls", "Gasolina", "You're the Best"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
