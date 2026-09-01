import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lightyear-frontier.js";

test("the Lightyear Frontier guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lightyear-frontier-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lightyear-frontier");

});

test("the Lightyear Frontier guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Farming & Cleanup",
            "Exploration, Animals & Regions",
            "NPCs, Animals & Homestead",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Lightyear Frontier achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Projectile Farming", "Cultivation Artillery", "Agrarian Bombardment", "Stain Removal", "Nice and Tidy", "Spotless", "Establish a Connection", "Weed Wacker", "Weed Slayer", "Weed Destroyer", "Hygge Apprentice", "Hygge Artisan", "Hygge Expert", "Xenoarchaeology", "Ruin Sweeper", "What Lies Beneath", "Share a Nibble", "Snack Time", "A Feast for Beasts", "Eco-Warrior", "Environmentalist", "Hey, Cut That Out!", "First Spill", "Fledgling Mech-Mechanic", "Tuned Up", "Ballistic Agriculture", "Ulf has Moved In", "Checking in on Ulf", "Diane has Moved In", "Checking in on Diane", "A Seed for Science", "Succesful Experiment", "The Egg Came First", "A Comfy Hand", "A Novice Hatcher", "All You Need is Love", "Born Lucky", "Put a Bow on Them", "Country Roads", "I Would Plow Five Hundred Mounds", "Stuck the Landing", "Agroforester", "Color Me Impressed", "And I Would Plow Five Hundred More", "Old Friend"];

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
