import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-1.js";

test("the Battlefield 1 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-1-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-1");

});

test("the Battlefield 1 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "War Stories Campaign",
            "Multiplayer Rank & Class Progression",
            "Weapon & Vehicle Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Battlefield 1 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Operations", "Counter-sniper", "Play the Objective", "Warbonds", "Corporal",
        "Assault Enlistment", "Medic Enlistment", "Scout Enlistment", "Support Enlistment", "Decorated",
        "Friends in High Places", "Nothing is Written", "Through Mud and Blood", "Avanti Savoia!", "The Runner",
        "Taking down giants", "All men dream", "Sound of thunder", "Conquering the mountains", "The hills of Gallipoli",
        "Up close and personal", "Mightier than the shovel", "Shock Wave", "Triple Boluk-Bashi", "The Great War",
        "The War to End All Wars", "Catching up on some reading", "Enough for a library", "Up to the challenge", "Putting in the effort",
        "Master of adaptation", "French War Hero", "Drei Vier Grenadier", "Saint Chamond Operator", "Maître d'Armes",
        "The Revolution is Coming", "Charged into Battle", "Secured the Resources", "Endured the Winter", "Filled the Stockpile",
        "Rough Seas", "Serve With Honor", "Become Operational", "The Power in These Waters", "Naval Weapons Collection",
        "Firefighter", "Advanced Studies", "Modern Technology", "Flyswatter", "Weapons of the Apocalypse",
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
