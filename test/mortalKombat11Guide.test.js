import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mortal-kombat-11.js";

test("the Mortal Kombat 11 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mortal-kombat-11-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mortal-kombat-11");

});

test("the Mortal Kombat 11 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorials & Story",
            "Fatalities & Brutalities",
            "Per-Character Fatalities",
            "Towers & Modes",
            "The Krypt",
            "Cosmetics & Misc",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Mortal Kombat 11 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Hit The Dojo", "Ready To Kompete", "No Bad Match Ups", "Blood In The Water", "Deadly Encounter",
        "MURDER!!!", "Brutal End", "Psychopath", "Not Dead Yet", "Grave Robber",
        "Kompetitor", "Half Way There", "What's Next?", "R-E-S-P-E-C-T", "Klassic",
        "I Want It All", "Enough Already", "Tower Champion", "Master of Time", "Disco's Not Dead",
        "Teamwork", "Thrashed", "Family Values", "Balanced", "Cyber Initiative",
        "Bugging Out", "Kollecting Bounties", "Pound Town", "Royal Guard", "Get Some",
        "Caged", "Ka-Ballin", "Bonzer Bog", "Princess Power", "Kollected",
        "Sacrifice", "Hat Trick", "No Bag Boy", "Double Dose Of Deadly", "Struck Down",
        "Never Ends", "Blood Bath", "Target Eliminated", "On Ice", "Turn Back Time",
        "Total Disrespect", "Oh My Days", "My AI Can Do It", "Puppet Master", "My Magic Shoes",
        "Have We Met", "Victorious", "More Power", "Konsumed", "Get Over Here",
        "Skull Kabob", "Gimme Dat Money", "Thank You For Being A Fan",
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
