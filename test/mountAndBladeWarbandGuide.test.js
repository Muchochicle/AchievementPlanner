import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mount-and-blade-warband.js";

test("the Mount & Blade: Warband guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mount-and-blade-warband-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mount-and-blade-warband");

});

test("the Mount & Blade: Warband guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Character Skills",
            "Roaming Calradia & Roleplay",
            "Kingdom & Conquest",
            "Multiplayer & Meta Awards",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Mount & Blade: Warband achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Man Eater", "None Shall Pass", "The Holy Hand Grenade", "Look at the Bones!", "Khaaan!", "Get up Stand up", "Baron got back", "Best served cold", "Trick Shot", "Gambit", "Old school Sniper", "Calradian Army Knife", "Mountain Blade", "Holy Diver", "Force of Nature", "Bring out your Dead", "Might makes Right", "Community Service", "Agile Warrior", "Melee Master", "Dexterous Dastard", "Mind on the Money", "Art of War", "The Ranger", "Trojan Bunny Maker", "Migrating Coconuts", "Help Help I'm being Repressed", "Sarranidian Nights", "Old dirty scoundrel", "The Bandit", "Got Milk?", "Sold into Slavery", "Medieval Times", "Good Samaritan", "Morale Leader", "Abundant Feast", "Book Worm", "Romantic Warrior", "Happily ever after", "Heart Breaker", "Autonomous Collective", "I dub thee", "Sassy!", "The Golden Throne ", "Knights of the Round", "Talking helps", "Kingmaker", "Pugnascious D", "Gold Farmer", "Royality Payment", "Medieval Emlak", "Calradian Tea Party", "Manifest Destiny", "Concilio Calradi", "Victum Sequens", "This is our land", "Spoil the charge", "Harassing Horseman", "Throwing Star", "Shish Kebab", "Last man standing", "Every breath you take", "Choppy Chop Chop", "Mace in yer Face!", "The Huscarl", "Ruin the Raid", "Glorious Mother Faction", "Elite Warrior", "Son of Odin", "Iron Bear", "Legendary Rastam", "Svarog the Mighty", "King Arthur", "Kassai Master", "Man Handler", "Girl Power", "Queen", "Empress", "Talk of the town", "Lady of the Lake"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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
