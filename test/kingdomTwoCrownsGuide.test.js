import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-two-crowns.js";

test("the Kingdom Two Crowns guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-two-crowns-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-two-crowns");

});

test("the Kingdom Two Crowns guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Days",
            "Exploration & Challenges I",
            "Greed Conquest",
            "Skull Island & Beyond",
            "Oracle Island & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Kingdom Two Crowns achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "On the First Day", "On the Second Day", "On the Third Day", "By the Fourth Day", "By the Fifth Day",
        "On the Sixth Day", "On the Seventh Day", "By the Eighth Day", "On the Ninth Day", "By the Tenth Day",
        "Master of the Sea", "I am an Equestrian", "Is a Hermit still a Hermit if they have friends?", "I HAVE THE TOWER!", "Playing with goo",
        "Pyrotechnics", "Their Savior", "Safe Passage", "Easter Island", "The Student Becomes the Teacher",
        "Beginning of a legend", "Stories Have Begun", "Songs Will Be Written", "Legends Will Be Passed Down", "You have Sealed Your Reign In History",
        "There Is No Greater Ruler Than Thou", "Never Gives Up", "A Journey Is Better Shared", "Cracked the Skull", "A New Heir",
        "The Four Horsemen", "Igavania!", "Here Kitty Kitty Kitty", "Arm the Homeless", "Above and Beyond",
        "I HAVE THE POWER!", "Answer the Call of Olympus", "Oracle Hotline", "Bigger on the Inside", "Go Fish",
        "Blessings from the Gods", "Gift of Prometheus", "That's Not Very Gneiss", "End of an Odyssey", "Hero of Olympus",
        "Mediterranean Vacation",
    ];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
