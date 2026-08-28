import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bioshock-infinite.js";

test("the BioShock Infinite guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bioshock-infinite-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bioshock-infinite");

});

test("the BioShock Infinite guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapon Kill Counts",
            "Vigors, Tears & Sky-Line Combat",
            "Gear, Upgrades & Collectibles",
            "Clash in the Clouds (DLC)",
            "Burial at Sea (DLC)",
            "Story Markers (Hidden)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official BioShock Infinite achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Written in the Clouds", "Welcome to Monument Island", "Shock Tactics", "First Class Ticket", "Armed Revolt",
        "Working Class Hero", "Blood in the Streets", "Higher Learning", "The Bird or The Cage", "Tin Soldier",
        "Saw the Elephant", "Stone Cold Pinkerton", "Auld Lang Syne", "Should Auld Acquaintance...", "Industrial Accident",
        "Aerial Assassin", "A Real Pistol", "Passionately Reciprocated", "Street Sweeper", "Big Game Hunter",
        "Loose Cannon", "On a Clear Day...", "Here Little Piggy", "Master of Pyrotechnics", "Seasoned to Taste",
        "Well Rounded", "Vigorous Opposition", "More for Your Money", "Combination Shock", "Mind Over Matter",
        "Tear 'em a New One", "Strange Bedfellows", "On the Fly", "Bolt From the Blue", "Hazard Pay",
        "Bon Voyage", "Skeet Shoot", "Lost Weekend", "David & Goliath", "Heartbreaker",
        "Dress for Success", "Kitted Out", "Raising the Bar", "Infused with Greatness", "Sightseer",
        "The Roguish Type", "Eavesdropper", "Grand Largesse", "Coins in the Cushion", "Scavenger Hunt",
        "Friendly Skies", "Duke or Dimwit?", "Rooftop Ruffian", "Hand of the Prophet", "Museum Curator",
        "Sergeant-at-Arms", "Rope-a-Dope", "The Ol' One-Two", "Missile Defense System", "Blue Ribbon Champ",
        "Down in the Briney", "Burial at Sea", "Audio Enthusiast", "Fully Equipped", "Confirmed Luddite",
        "Cook and Serve", "Chain Reaction", "Break the Ice", "Snowball Effect", "Going Places",
        "Up and Running", "Mein Hair", "Paid in Full", "The Whole Story", "Taffer's Delight",
        "Making Some Noise", "Twofer", "Glutton for Punishment", "Dead Drop", "Never Saw It Coming"
    ];

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
