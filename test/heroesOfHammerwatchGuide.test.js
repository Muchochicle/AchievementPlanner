import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/heroes-of-hammerwatch.js";

test("the Heroes of Hammerwatch guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "heroes-of-hammerwatch-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "heroes-of-hammerwatch");

});

test("the Heroes of Hammerwatch guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses, Classes & Grinds",
            "Mastery, NG+ & Pyramid of Prophecy",
            "Grandmaster, Moon Temple & Mercenaries",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 114-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /114 Steam achievements/);

});

test("every one of the 114 official Heroes of Hammerwatch achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Forsaken Tower", "Stone Guardian", "Warden", "The Three Councilors", "Watcher", "Thundersnow", "Chapter of Light", "The Old Drunkard", "The Pointy Hat", "Expert Paladin", "Expert Priest", "Expert Ranger", "Expert Sorcerer", "Expert Thief", "Expert Warlock", "Expert Wizard", "Exorcist", "Beast Slayer", "Demolisher", "Sanctifier", "Gold Digger", "Miner", "The Outlook Restored", "Hidden Treasures", "Combo Sphere", "Combo Killer", "Good Fortune", "Jailbreak", "Mysterious Monolith", "Unexpected Gifts", "Master Paladin", "Master Priest", "Master Ranger", "Master Sorcerer", "Master Thief", "Master Warlock", "Master Wizard", "Forsaken Tower NG+", "Forsaken Tower NG++", "Forsaken Tower NG+++", "Forsaken Tower NG++++", "Forsaken Tower NG+++++", "Magic Anvil", "Craftsmanship", "Attunement", "A Drinking Game", "Vampire Lord", "Pyramid of Prophecy", "Giant Crustworm", "Queen Iris", "Nerys", "Gladiator", "Arena Champion", "Desert Navigation", "Cursed Relics", "Ancient Legends", "Ewran", "Wylmir", "Phalarath", "Bolgarth", "Calis", "Cedric", "Ozreth", "Kyra", "Book of Monsters", "Expert Gladiator", "Master Gladiator", "Grandmaster Gladiator", "Grandmaster Paladin", "Grandmaster Priest", "Grandmaster Ranger", "Grandmaster Sorcerer", "Grandmaster Thief", "Grandmaster Warlock", "Grandmaster Wizard", "Pyramid of Prophecy NG+", "Pyramid of Prophecy NG++", "Pyramid of Prophecy NG+++", "Pyramid of Prophecy NG++++", "Pyramid of Prophecy NG+++++", "Celestial Signs", "Daran", "Friends For Life", "Valuable Companion", "Magic Furnace", "Blood Altar", "Exsanguination", "Item Gambling", "Legendary Winnings", "Expert Witch Hunter", "Master Witch Hunter", "Grandmaster Witch Hunter", "Elder Wisp", "Krilith's Wolf", "Agents", "Moon Temple", "Moon Temple NG+", "Moon Temple NG++", "Moon Temple NG+++", "Moon Temple NG++++", "Moon Temple NG+++++", "Forsaken Tower Mercenary", "Pyramid of Prophecy Mercenary", "Moon Temple Mercenary", "Private", "Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General", "Legacy Shop", "Lunar Shield"];

    assert.strictEqual(officialAchievementNames.length, 114, "sanity check on this test's own reference list");

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
