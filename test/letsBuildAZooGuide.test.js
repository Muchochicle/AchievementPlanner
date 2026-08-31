import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lets-build-a-zoo.js";

test("the Let's Build a Zoo guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lets-build-a-zoo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lets-build-a-zoo");

});

test("the Let's Build a Zoo guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Zoo Basics & Animals",
            "Business, Trading & Black Market",
            "Morality, Research & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Let's Build a Zoo achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Have a baby!", "Big Birther", "Captain Cola", "Protest", "Fired Up", "Green Machine", "Tastes Like Bacon", "Hybrid Moments", "Cartographer", "Map Master", "Transport Mogul", "Route Planner", "Sky Writer", "Super Trader", "Gonky", "Ticket Master", "Lion City", "Factory Boss", "Cash King", "Snitch", "Dealer", "He Sells Sanctuary", "Monster Matinee", "Broken Teeth", "Trampoline", "Researcher", "Superior Researcher", "New Zoo", "Decorator", "Land Owner", "Bad Hot Dog", "The Saint", "Criminal Mastermind", "Dinosaur Rebirth", "Bernie And Friends", "Pooped Out", "A Mammoth Discovery", "Death Metal Death", "Dino-Mite", "First Catch", "Sea Monster", "Pearlfect", "GORSD", "Whale Done", "Seas the Day!"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
