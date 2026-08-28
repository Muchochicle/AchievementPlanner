import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farming-simulator-22.js";

test("the Farming Simulator 22 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farming-simulator-22-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farming-simulator-22");

});

test("the Farming Simulator 22 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First-Time Milestones",
            "Farming Volume",
            "Animals & Beehives",
            "Vehicles & Production",
            "Deliveries & Map Collectibles",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Farming Simulator 22 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Road Trip", "Plant get enough", "Allez hopp", "Giddy-up!", "Help me to help you",
        "It's just the beginning", "Just a sprinkle", "Own use", "Field Trip", "Long haul",
        "Van Gogh", "It just fell off", "Clucky Streak", "Three little piggies…", "Fluffyness",
        "Thoroughbred!", "Bringing in the Honey", "I like to switch it up", "It's sow easy", "Large-scale supplier",
        "Fix me up", "I read Shakespeare and stuff", "You are not a kangaroo", "Ultimutt Pawesomeness", "That's a wrap",
        "Cowherd", "Cheese it", "Game on", "Gone but not for cotton", "Well-Oiled Machine",
        "Vehicle fleet", "This is just my weekend vehicle", "Pretty colourful", "Highly cultivated", "The plot thickens",
        "Helper A does not stop … ever", "All out of Land", "Raisin the stakes", "Olea europaea", "Original grain",
        "Hard work pays off", "It's never too late to farm", "Rock on", "I'm stumped", "You wood not believe it"
    ];

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
