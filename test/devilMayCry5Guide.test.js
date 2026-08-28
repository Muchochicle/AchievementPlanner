import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/devil-may-cry-5.js";

test("the Devil May Cry 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "devil-may-cry-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "devil-may-cry-5");

});

test("the Devil May Cry 5 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty Clears",
            "Mission Progress & Secret Feats",
            "Style Ranks & Combat",
            "S Ranks, Skills & Milestones",
            "Bloody Palace & Vergil",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Devil May Cry 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Let's Rock!", "Showtime!", "Doing Daddy Proud", "Dance with the Devil", "Stairway to Heaven",
        "Highway to Hell", "Fall from Grace", "Protect the People", "Where the Red Orbs Grow", "Reunion",
        "Backroad", "Break a Leg", "End of the Line", "Share the Pain", "Light in the Darkness",
        "Eagle-Eyed", "This Ain't Over", "Don't Mess with the Best", "The Qliphoth", "Each In His Own Way",
        "Gotta Hurry", "Slick Moves", "Obedience Training", "Back to Life", "Man on a Mission",
        "Battle for the Ages", "Not Too Shabby", "Steppin' up the Style", "Seriously Stylish Slaying!", "Secrets Exposed",
        "The Quick and the Dead", "Well I'll Be Damned", "Hell of a Hunter", "Worthy of Legend", "I Believe I Can Fly",
        "Nothing's Impossible", "Be the Legend", "Demon Breeder", "Physical Perfection", "The Devil's Own",
        "A New Job", "Jackpot!", "Demon Destroyer", "Rearm and Repeat", "Dante The Gambler",
        "Who Needs Weapons Anyway?", "Unarmed and Dangerous", "Pet Protection", "Slam Dunk", "Too Easy",
        "Rest in Peace", "Sibling Rivalry", "Concentrated Strength", "Heart of a Swordsman", "This is Power"
    ];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
