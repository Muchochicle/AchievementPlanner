import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-5.js";

test("the Far Cry 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-5");

});

test("the Far Cry 5 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Regions",
            "Hope County Activities",
            "Arcade",
            "Campaign Feats",
            "Completion Modes",
            "DLC (Hours of Darkness, Lost on Mars, Dead Living Zombies)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 72-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /72 Steam achievements/);

});

test("every one of the 72 official Far Cry 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Spark", "You Are Wrath", "Special Delivery", "Only You", "Walk The Path",
        "Together Forever", "Saving Deputy Hudson", "Blissful", "Saving Sheriff Whitehorse", "Saving Deputy Pratt",
        "Science Fact", "Ain't No Wallflower", "Been There, Done That", "Liberator", "Scavenger",
        "What Now?", "The Greatest SOB That Ever Lived", "Pack Rat", "A Wing And A Prayer", "Troublemaker",
        "Sewer Rat", "Peachy Keen", "Kicking the Hornet's Nest", "ARCADE Player", "ARCADE Hero",
        "ARCADE Hunter", "ARCADE Enthusiast", "ARCADE Competitor", "The Hurk Locker", "Hope County Master Angler",
        "Locked and Loaded", "Ghost Kill", "Extra Crafty", "Fashion First", "Big Spender",
        "Stocked Garage", "Ace Killer", "Squash and Run", "Fertilizing the Land", "Death From Above",
        "Opportunity Knocks", "Road Gunner", "Fish Market", "Where's the Beef?", "Ignoble Beasts",
        "Hitting it Off", "Like A Bird", "Close and Personal", "Explosive Surprise", "Survivalist",
        "Silent Death", "80s Hero", "Wendell's Story", "Roguelike", "Leave no one behind",
        "Make them count", "Welcome to Nam", "DLC: Mars:Bug Squasher", "DLC: Mars: Mars Second Amendment", "DLC: Mars: Martian Journal",
        "DLC: Mars: Nick's Story", "DLC: Mars: Slimy Death", "DLC: Mars: The Queen is Dead!", "DLC: Mars: Welcome to Mars", "DLC Zombies: FertiliZer",
        "DLC Zombies: Early ExZit Denied", "DLC Zombies: Blood Zragon", "DLC Zombies: Killer BeeZ", "DLC Zombies: ReZolution", "DLC Zombies: DeceaZed to ExZist",
        "DLC Zombies: Gold MedaliZt", "Infamous"
    ];

    assert.strictEqual(officialAchievementNames.length, 72, "sanity check on this test's own reference list");

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
