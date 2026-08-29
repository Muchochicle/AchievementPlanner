import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ready-or-not.js";

test("the Ready or Not guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ready-or-not-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ready-or-not");

});

test("the Ready or Not guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Completion",
            "Individual Missions",
            "Challenge Runs",
            "Equipment, Arrests & Career",
            "DLC Completion Meta",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official Ready or Not achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Arrest", "The War", "The Decaying City", "The Left Behind", "The Abducted",
        "The Exploited", "Medal of Valor", "The World", "The Hermit", "The Hanged Man",
        "Way Out West", "The Devil", "The Magician", "The Fool", "Due Process",
        "Back To School", "Panic Room", "Cut To Pieces", "Beat Cop", "Hidden and Dangerous",
        "Meldonin", "After the Storm", "From House to Home", "The Dogs Heads", "The Meek & The Earth",
        "The Margay", "From Land to Sea", "Party Crasher", "Big Shell Specialist", "Sleeper Agent",
        "Smile, You’re On Camera!", "Justice Uncovers Depths Ghosts in Elysium", "Getting Your Sea Legs", "I'm Too Old For This…", "The Emperor",
        "Practice Makes Perfect", "Dress to Impress", "Temperance", "Toxic Fumes", "Off Duty",
        "Who is Pepe Silvia?", "Fool Me Once", "Fool Me Twice", "Walnut Warrior", "Mahogany Masochist",
        "Arrest Warrant", "A Rest For The Wicked", "What's In The Box?!", "Silly String", "Here's Johnny",
        "Peeping Tom", "Say Hello To My Little Friend", "Click From 3, 4 Is Binding", "Door Kickers", "The Tactician",
        "By the Book", "The Flashpoint", "The False Idol", "The Final Directive", "Nosce Te Ipsum",
        "My Eyes, It Burns!", "The Heat is On", "Programmed Psychosis", "All Secrets Safe", "Targeted Manipulation",
        "Eye of Providence",
    ];

    assert.strictEqual(officialAchievementNames.length, 66, "sanity check on this test's own reference list");

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
