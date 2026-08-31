import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/legend-of-grimrock.js";

test("the Legend of Grimrock guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "legend-of-grimrock-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "legend-of-grimrock");

});

test("the Legend of Grimrock guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Difficulty",
            "Secrets, Items & Armour Sets",
            "Combat & Puzzle Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Legend of Grimrock achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Master of the Dungeon", "Seeker of Secrets", "Treasure Hunter", "Monster Killer", "Marksman", "Swordsman", "Go the Extra Mile", "Apprentice Alchemist", "Master Alchemist", "Apprentice Wizard", "Master Wizard", "Archmage", "Hard Boiled", "Doin' It Old School", "Secret Spotter", "Secret Sniffer", "Secret Searcher", "Zhandul's Orb", "Dismantler", "Piece of the Pie", "Buddies With Toorum", "Backstabber", "I Use Gravity As a Weapon", "Here's Johnny", "Ninja Style", "I'm the Bugman!", "Like a Sardine In a Can", "Knight in a Shining Armor", "Skull Snatcher", "Pitfall", "Ogre Slayer", "Tavern Brawler", "Stoner", "Enter The Vault", "Enter The Prison", "Slimed", "Dungeon Hero", "Skill Mastery", "Checkered Room", "Dungeon Runner"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
