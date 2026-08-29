import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mafia-2-definitive-edition.js";

test("the Mafia II: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mafia-2-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mafia-2-definitive-edition");

});

test("the Mafia II: Definitive Edition guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Chapters",
            "Story Missions & Feats",
            "Driving & Combat",
            "Collectibles & Extras",
            "Jimmy's Vendetta (DLC)",
            "Joe's Adventures (DLC)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Mafia II: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Home Sweet Home", "Back in Business", "Big Brother", "A Real Gentleman", "The Price of Oil",
        "The Professional", "Mail Man", "Night Shift", "Good Spirits", "Time Well Spent",
        "Last Respects", "The Wild Ones", "Man of Honor", "Checking Out", "Our Good Friend",
        "Wake Up Call", "Chasing the Dragon", "Chop Chop!", "Men at Work", "Finish Him",
        "Made Man", "Tough Nut", "Get Rich or Die Flyin'", "Pedal to the Metal", "One Careful Owner",
        "Proper Scrapper", "Exporter", "Cruise Control", "Hairdresser", "Knucklehead",
        "Stuck Up", "The Enforcer", "Sharp Suiter", "Tuned Ride", "Dream Handling",
        "Hard to Kill", "Collector's Item", "Petrol Head", "Ladies Man", "Card Sharp",
        "He Who Pays the Barber", "A Lesson in Manners", "Hey Joe", "End of the Rainbow", "The Mafia Never Forgets",
        "Out for Justice", "First Step", "Faster than Light", "Explorer", "Armament King",
        "Firebug", "Sharp Shooter", "Carnapper", "Revenged", "Millionaire",
        "Massacre", "Viva la Resistenza!", "What Witness?", "Arctic Grave", "Dockyard Discord",
        "Five Finger Discount", "Mind the Goods", "Same Shirt Different Day", "Hypersonic", "Jacked Jumper",
        "Driftin' Daddy-O", "Jack of all Trades",
    ];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
