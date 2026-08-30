import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/streets-of-rage-4.js";

test("the Streets of Rage 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "streets-of-rage-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "streets-of-rage-4");

});

test("the Streets of Rage 4 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Clears I",
            "Skill & Combo Feats",
            "Environmental Kills & Character Clears II",
            "Mastery & Survival",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Streets of Rage 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "All Clear: Axel", "All Clear: Blaze", "All Clear: Cherry", "All Clear: Floyd", "All Clear: Adam",
        "All Clear: SOR1", "All Clear: SOR2", "All Clear: SOR3", "Throwback", "Miss Me?",
        "Dojo Master", "Snap Out of It", "Old-Schooled", "Stage Mastery", "Perfect",
        "Maniac", "All Too Easy", "Combo Pro", "Combo Expert", "Combo Master",
        "100 Yen", "Bleeding Knuckles", "Oops", "Birth of the Cool", "Eating off the Ground",
        "THIS IS WOOD OAK CITY!!!", "Life's a Struggle", "It's Chilly in Here", "Family Reunion", "Somebody Call the Cops!",
        "Dude, My Car!", "Wasted Wine", "Walk on Foot", "Demolition Man", "Collateral Damage",
        "An Elegant Death", "Broke My Toy", "All Clear: Estel", "All Clear: Shiva", "All Clear: Max",
        "Clown Wars", "Ultimate Warrior", "The Possibilities Are Endless", "Phantom in the Hull", "I Am the One",
    ];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
