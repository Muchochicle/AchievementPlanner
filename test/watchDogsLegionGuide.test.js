import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/watch-dogs-legion.js";

test("the Watch Dogs: Legion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "watch-dogs-legion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "watch-dogs-legion");

});

test("the Watch Dogs: Legion guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boroughs",
            "Recruitment & Team",
            "Combat & Stealth Feats",
            "Activities & Collectibles",
            "Bloodline & Resistance Modes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Watch Dogs: Legion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Brave New World", "The Future Is Bright", "Long Live the Queen", "Hacker, Tailor, Soldier, Spy", "When Good Men Do Nothing",
        "Divided We Fall", "The One That Got Away", "In the Nick of Time", "A Roof Over Your Head", "England for Everyone",
        "A Dish Best Served Cold", "Making Friends", "Rise Up", "Take Back London", "And Stay Down",
        "Every Walk of Life", "Meta-Gaming", "Down to the Wire", "Death From Above", "NO NOT THE BEES",
        "Hack the Planet", "Shaken Not Stirred", "Power to the People", "Paint Me Like One of Your...", "Throw the Book at Them",
        "The Royal Tour", "You Don't See Me!", "Could've Made National", "Bullseye", "Piece de Resistance",
        "Bottom's Up", "DedSec Delivery", "All About Aesthetic", "Re-Wrap My Whip", "Fresh Threads",
        "Fully Kitted", "Locked and Loaded", "Oral History", "Magpie", "Breaking The Ice",
        "Switcheroo", "One Big Happy Family", "Fully Kitted 2.0", "Packrat", "Vive la Résistance",
        "Community Service", "Off The Record", "Supply And Demand", "Long Live DedSec",
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
