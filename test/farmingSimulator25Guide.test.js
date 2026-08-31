import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farming-simulator-25.js";

test("the Farming Simulator 25 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farming-simulator-25-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farming-simulator-25");

});

test("the Farming Simulator 25 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Farming Activities & Totals",
            "Animals & Vehicle Fleet",
            "Deliveries, Forestry & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Farming Simulator 25 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Road Trip", "Plant get enough", "The plot thickens", "Allez hopp", "You are not a kangaroo", "Giddy-up!", "Thoroughbred!", "Help me to help you", "Helper A does not stop … ever", "It's just the beginning", "Just a sprinkle", "It's sow easy", "Own use", "Large-scale supplier", "Field Trip", "Long haul", "van Gogh", "It just fell off", "Fix me up", "Fluffiness", "Three little piggies…", "Clucky Streak", "Bringing in the Honey", "Cowherd", "I like to switch it up", "This is just my weekend vehicle", "Vehicle fleet", "I read Shakespeare and stuff", "Highly cultivated", "Ultimutt Pawesomeness", "That's a wrap", "Gone but not for cotton", "Raisin the stakes", "Olea europaea", "Original grain", "Rock on", "I'm stumped", "You wood not believe it", "Hard work pays off", "All out of Land", "Well-Oiled Machine", "Rusty", "Over 9000!", "Tutti-Frutti", "It's never too late to farm"];

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
