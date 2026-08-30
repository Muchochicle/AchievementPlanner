import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/forager.js";

test("the Forager guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "forager-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "forager");

});

test("the Forager guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dungeons, Puzzles & Combat Feats",
            "Grind Milestones & Collection",
            "Museum Bundles, Mastery & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 103-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /103 Steam achievements/);

});

test("every one of the 103 official Forager achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tycoon", "Miner", "Royal", "Gemologist", "Tough", "Tomb Raider", "Pathfinder", "Ice Breaker", "Demon Hunter", "Ancient Astronomer", "Skull Astronomer", "Frozen Astronomer", "Fire Astronomer", "Unscarred", "Occult", "Jester", "Sharpshooter", "Swordmaster", "Winner", "Greedy", "Monster", "Duelist", "Rainbuddy", "Robotic", "Bomberman", "Spelunker", "Gourmand", "Hopeless", "Addicted", "Mason", "Expansionist", "Destroyer", "Jealous", "Disgusting", "Angler", "Hoarder", "Big Hoarder", "Irrigator", "Harvester", "Wealthy", "Millonaire", "Smelter", "Mint", "Treasure Hunter", "Digger", "Artisan", "Constructor", "Champion", "Waterproof", "Secret Finder", "Enlightened", "Marksman", "Acrobat", "Daredevil", "Pillager", "Bug Catcher", "Extrovert", "Diligent", "Druid Helper", "Princess Helper", "Wizard Helper", "Goblin Helper", "Fairy Helper", "Engineer Helper", "Ghost Helper", "Old People Helper", "Fox Helper", "Master Forager", "Master Miner", "Master Builder", "Master Farmer", "Master Chef", "Master Alchemist", "Master Trapper", "Master Archaeologist", "Curator", "Skillful", "Imperialist", "Treasure Master", "Tool Collector", "Accessory Collector", "Seal Collector", "Artifact Collector", "Completionist", "Void Scout", "Void Explorer", "Void Champion", "Void Master", "Illuminator", "Other Worldly", "Galactic", "Summoner", "Slime Regicide", "Bone Regicide", "Not A Monster", "Coin Collector", "Unlimited Power", "Billionaire", "Trillionaire", "Toxic Vanquisher", "Radioactive", "Mad Scientist", "Production Master"];

    assert.strictEqual(officialAchievementNames.length, 103, "sanity check on this test's own reference list");

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
