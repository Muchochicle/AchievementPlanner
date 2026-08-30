import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/craft-the-world.js";

test("the Craft The World guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "craft-the-world-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "craft-the-world");

});

test("the Craft The World guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Survival & Crafting",
            "Campaign & Endurance",
            "Exploration & Multiplayer I",
            "Multiplayer II",
            "Bosses & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 94-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /94 Steam achievements/);

});

test("every one of the 94 official Craft The World achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Goblinator", "Collector", "Get your own skeleton in the cupboard", "Survival", "Long way begin",
        "Bra-a-a-ins!", "Flying assistants", "Chicken exterminator", "Land holder", "Naturalist",
        "Oktoberfest", "Palace", "Even alone is a warrior!", "Foreman", "Megacrafter",
        "Who needs elves!", "Sinbad the pedestrian", "True dwarf!", "More snails!", "The worst that could happen",
        "I am a pharaoh", "Winter master", "Total annihilation", "Hardcore man", "Railwayman",
        "Tomb rider", "Underground king", "Invulnerable", "Blood lust", "Total crafter",
        "Long-playing", "Bad day", "Persistence", "Sand master", "Worm hunter",
        "Sapper", "Gourmet", "Manufacturer", "Bookworm", "God Hand",
        "Disinsector", "Professional Miner", "Armageddon", "Shopping", "Dungeon Keeper",
        "Sliders", "Reviver", "Liberator", "Multidwarf", "Get strong together",
        "Alpha Dwarf", "Overboost", "Great Explorer", "Thief", "Mercenaries exploiter",
        "Burst of greed", "Creator of the public world", "World Keeper", "Great World Keeper", "Military Researcher",
        "Hird of Dwarves", "Free Builders", "Overpopulation", "Supplier", "Major Supplier",
        "You've been digested!", "Don't even try to shout!", "Epic defeat!", "Dwarfgineer", "Military Engineer",
        "Collector", "Major Defender", "Fortress Defender", "Castle Defender", "Blameless",
        "Monster from the Depths", "The Sphinx’s Riddle", "Two heads are better than none!", "Defeat the animal within yourself", "No one will help the green-skins!",
        "Those born to dig can also fly", "The War of the Worlds", "UFO", "Lonely Loner", "Right to the Heart!",
        "Out of the Woods!", "Guardian of the Mountain", "Lord of the Rings", "Warrior of the Future", "Made It!",
        "Galaxian", "Nasty Things", "Their Name is Legion!", "The Power of the Forest",
    ];

    assert.strictEqual(officialAchievementNames.length, 94, "sanity check on this test's own reference list");

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
