import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/everspace-2.js";

test("the EVERSPACE 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "everspace-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "everspace-2");

});

test("the EVERSPACE 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ship & Gear Progression",
            "100% Completion & Advanced Combat",
            "Titans DLC",
            "Wrath of the Ancients DLC",
            "Hidden Story Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official EVERSPACE 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A New Home", "In Good Company", "I Heart Horags", "A Friend In Need", "Still In One Piece",
        "No Place Like Home", "There Can Be Only One", "What A Legend!", "A New Ride", "My Precious!",
        "Challenge Accepted", "Against All Outlaws", "Elite Eliminator", "Device Master", "Unlimited Power",
        "Bend it like Roslin", "Under Pressure", "Maxed Out", "Rift Runner", "Top Tier",
        "Spaceship of Theseus", "Been There, Done That", "Work For Hire", "The Catalyst Catalog", "Gotta Find 'Em All",
        "Perky Personnel", "No Asteroid Unturned", "Sidetracked", "That's All You Got?", "Legendary Lunatic",
        "Stasis Smash", "Ludicrous Speed!", "Credits Where Credits Are Due", "Spin Me Right 'Round", "I Don't Like Bullies",
        "Tower Defense", "Rock And Stone!", "Press F To Pay Respects", "It's A Sabotage", "Stop! Hammer Time!",
        "Inner Space", "Catch Of The Day", "Internal Combustion", "I Got You Fam", "Stop Hitting Yourself",
        "The World Is Your Oyster", "A Taste Of Their Own Medicine", "Didn't Hurt A Bit", "Gone Kayaking", "Ancient History",
        "That Belongs In A Museum", "Backup Plan", "Bean There, Done That", "Beam There, Done That", "Home Is Where The Ace Is",
        "Altar Boy", "Power Fantasy? Power Reality!", "Now We Can Finally Play The Game!",
    ];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
