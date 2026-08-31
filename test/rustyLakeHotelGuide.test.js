import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rusty-lake-hotel.js";

test("the Rusty Lake Hotel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rusty-lake-hotel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rusty-lake-hotel");

});

test("the Rusty Lake Hotel guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Owl, Deer & Boar",
            "Pheasant, Rabbit & Pigeon",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Rusty Lake Hotel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Secret Rusty Lake Specialty", "Just Hanging", "The Elevator", "Deer Meat", "Mushrooms", "Rosemary", "Albert's Way ", "Boar Ribs", "Red Wine", "Tomatoes", "You know what to do!", "Pheasant Breast", "White Wine", "Thyme", "Need a hand?", "Rabbit Leg", "Carrot", "White Beans", "Watch Closely!", "Pigeon Wing", "Potatoes", "Blackberries", "Can't catch me!"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
