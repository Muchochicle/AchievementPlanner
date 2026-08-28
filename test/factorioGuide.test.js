import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/factorio.js";

test("the Factorio guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "factorio-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "factorio");

});

test("the Factorio guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Automation",
            "Production Ladders",
            "Rockets, Speedruns & Game Completion",
            "Combat, Trains & Nature",
            "Space Age: Planets, Travel & Science",
            "Space Age: Enemies, Quality & Endgame",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Factorio achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Automated cleanup", "Automated construction", "Circuit veteran 1", "Circuit veteran 2", "Circuit veteran 3",
        "Computer age 1", "Computer age 2", "Computer age 3", "You've got a package", "Delivery service",
        "Eco unfriendly", "Getting on track", "Getting on track like a pro", "Golem", "Iron throne 1",
        "Iron throne 2", "Iron throne 3", "It stinks and they don't like it", "Lazy bastard", "Logistic network embargo",
        "Mass production 1", "Mass production 2", "Mass production 3", "Minions", "Smoke me a kipper, I'll be back for breakfast",
        "No time for chitchat", "There is no spoon", "Pyromaniac", "Raining bullets", "Run Forrest, run",
        "Solaris", "So long and thanks for all the fish", "Steam all the way", "Steamrolled", "Tech maniac",
        "Trans-Factorio express", "Watch your step", "You are doing it right", "Arachnophilia", "Art of siege",
        "Automate this!", "Crafting with efficiency", "Crafting with productivity", "Crafting with quality", "Crafting with speed",
        "I am the destroyer of worlds", "Express delivery", "Fusion power", "Get off my lawn", "If it bleeds, we can kill it",
        "It stinks and they do like it", "Keeping your hands clean", "Look at my shiny rare armor", "Make it better", "Mining with determination",
        "My modules are legendary", "No room for more", "Nuclear power", "Pest control", "Reach for the stars",
        "Research with agriculture", "Research with automation", "Research with chemicals", "Research with cryogenics", "Research with electromagnetics",
        "Research with logistics", "Research with metallurgics", "Research with military", "Research with production", "Research with space",
        "Research with utility", "Rush to space", "Second star to the right and straight on till morning", "Going to shattered planet 1", "Going to shattered planet 2",
        "Going to shattered planet 3", "Size doesn't matter", "Solar power", "Steam power", "Terraformer",
        "Today's fish is trout a la creme", "Visit Aquilo", "Visit Fulgora", "Visit Gleba", "Visit Vulcanus",
        "We need bigger guns", "Work around the clock", "Research with promethium"
    ];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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
