import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cook-serve-delicious.js";

test("the Cook, Serve, Delicious! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cook-serve-delicious-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cook-serve-delicious");

});

test("the Cook, Serve, Delicious! guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Restaurant Stars & Progression",
            "Cuisine Pins & VIPs",
            "Food Upgrades",
            "Perfect Days, Extreme & Battle Kitchen",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Cook, Serve, Delicious! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One Star Restaurant", "Two Star Restaurant", "Three Star Restaurant", "Four Star Restaurant", "Five Star Restaurant", "Platinum Star Restaurant", "Iron Cook Master", "Hungry Fest Champion", "The Love Chef", "ClicknStart Investor", "1k Customers Served", "2.5k Customers Served", "5k Customers Served", "7.5k Customers Served", "10k Customers Served", "15k Customers Served", "American Foods Pin", "Italian/Mexican Foods Pin", "Exotic Foods Pin", "Oceanic Foods Pin", "Liquid Pin", "Breakfast Foods Pin", "The VIP Treatment", "Forever Remembered", "Two Star Food Upgrade", "Three Star Food Upgrade", "Four Star Fosters", "Four Star Chicken", "Four Star Fish", "Four Star Fried Rice", "Four Star Lasagna", "Four Star Nachos", "Four Star Pasta", "Four Star Baked Potato", "Five Star Burger", "Five Star Kabob", "Five Star Lobster", "Five Star Pizza", "Five Star Soup", "Five Star Steak", "Five Star Sushi", "Five Star Wine", "Robbery", "Perfect Day", "Rare Perfect Day", "Impossible Perfect Day", "Super Rush Hour", "When It's Ready", "Special Guest Star", "Amazing Cameo Appearances", "Quick Challenge", "Superb Lineup of Awesome"];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
