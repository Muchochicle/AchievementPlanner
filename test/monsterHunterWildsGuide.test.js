import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monster-hunter-wilds.js";

test("the Monster Hunter Wilds guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monster-hunter-wilds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monster-hunter-wilds");

});

test("the Monster Hunter Wilds guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions & Overall",
            "Hunting Life & Firsts",
            "Rank, Crafting & Crowns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Monster Hunter Wilds achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Eastward Wings", "Windward Lands", "Shadow in the Downpour", "Guardians of the Forge", "Bringer of Harmony", "New Ecosystems", "A Bitter Environment", "Beyond the Black Wings", "One Corner of the World", "A True Hunter Is Never Satisfied", "Let the Investigations Begin!", "The Hunt Is On!", "A Step Toward Mutual Understanding", "East to West, A Hunter Never Rests", "Angling for a Bite", "Mmm, So Tasty!", "Was It a Meal to Remember?", "The Bigger They Are...", "Hunter-Assassin", "Hit 'Em Where It Hurts!", "A Prize Held High", "I Caught a Shooting Star!", "Monster (Squid) Hunter", "A-fish-ionado", "Campmaster", "Glamper", "A Keen-eyed Observation", "Ride-or-die Companion", "Established Hunter", "Impregnable Defense", "Power Is Everything", "Someone Worth Following", "A Legacy Restored", "Bourgeois Hunter", "Explorer of the Eastlands", "Monster Ph.D.", "Seasoned Hunter", "Miniature Crown", "Miniature Crown Collector", "Miniature Crown Master", "Giant Crown", "Giant Crown Collector", "Giant Crown Master", "Capture Pro", "Monster Slayer", "Top of the Food Chain", "Hunters United", "Hunters United Forever", "Gossip Hunter", "Newly Forged Bonds"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
