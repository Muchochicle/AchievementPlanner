import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hand-of-fate.js";

test("the Hand of Fate guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hand-of-fate-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hand-of-fate");

});

test("the Hand of Fate guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Stats & Combat Feats",
            "Collections & Equipment Sets",
            "Bosses & Blessings",
            "Encounter Sets & Quests",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Hand of Fate achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Juggernaut", "Well Supplied", "Wealthy Lord", "Squire", "Adventurer", "Very Lucky", "Very Unlucky", "Master Combatant", "Quick Reflexes", "Close Shave", "Very Brave or Very Stupid", "Hunter", "Slayer", "Ninja", "Master of Traps", "Champion", "Well Equipped", "Well Travelled", "Dragon Slayer", "King of the Undead", "Arch Mage", "Bling", "Combat Ready", "Dungeon Master", "Release the Lava Golems!", "Release the Mages!", "Release the Lich!", "Release the Minotaur!", "Humbled", "Corrupted", "Drained", "Pure Enlightenment", "Wretched Soul", "Dungeon Conqueror", "Graduation", "Lord of War", "Master of the Shadows", "The Lion Prince", "Explorer", "Never Enough", "Hunger Satiated.", "Merchant's Saviour", "Holy Champion", "The Wanderer", "Elite Training", "Kraken Master", "One with the Kraken", "Metal Mogul", "The Elder Lizard", "Great Hunter", "Deep Delver", "Vault Raider", "World Saviour"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
