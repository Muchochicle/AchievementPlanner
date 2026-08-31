import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shadow-warrior-2.js";

test("the Shadow Warrior 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shadow-warrior-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shadow-warrior-2");

});

test("the Shadow Warrior 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty, Levels & Kill Counts",
            "Money, Upgrades & Crafting",
            "Special Kills",
            "Champion Boss Fights & Trials",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 64-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /64 Steam achievements/);

});

test("every one of the 64 official Shadow Warrior 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I'm a Collector Myself", "Casual Wang", "Normal Wang", "Hard Wang", "Insane Wang", "King of the Dragon Mountain", "King of Mount Akuma", "Unfinished Business", "Goddess Slayer", "Sempai", "Sensei", "Grandmaster", "Junior Hitman", "Executioner", "Call me Wang, Lo Wang", "Shiny!", "My Precious", "Ancient Chinese Secrets", "That's a Lot of Coins", "Financial Security", "Ready for Action", "Unique Collection", "Legendary Collection", "Handyman", "Legendary Handyman", "Trickster", "Wang the Impaler", "Tiny Little Pieces", "Toxic Blast", "Living Torch", "Short Circuit", "Bullseye", "Mr. Kosugi", "Lieutenant Akimbo", "The Sharpest Spike", "Vicious Sentinel", "The Chef", "Frozen Widow", "The Guard", "Unit-64 Commodore", "ST-RC1 Titan", "Gun Fury", "Transistor ZL-260", "Alpha R-XIII", "Shady Rascal", "Queen of D.O.L.L.s", "Old Fart", "Apprentice of Musashi", "Magmator of the Devil Mountain", "Lord Destroyer", "Eradicator", "Colonel Fasthand", "The Toxitor", "Captain Lo-Gan", "The Highest Priest", "The Lord of War", "TL-Devourer", "Resistor ZL-260", "I Think I Saw a Wabbit", "Student of The Way of the Wang", "Master of The Way of the Wang", "Orb Collector", "Experienced Orb Collector", "The Way of Masamune"];

    assert.strictEqual(officialAchievementNames.length, 64, "sanity check on this test's own reference list");

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
