import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-2-remake.js";

test("the Resident Evil 2 (2019) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-2-remake-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-2-remake");

});

test("the Resident Evil 2 (2019) guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Campaign Completion",
            "Survival Mechanics & Combat Feats",
            "Collectibles & Full Clears",
            "Challenge Runs, S Ranks & Speed",
            "Bonus Modes",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Resident Evil 2 (2019) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Welcome to the City of the Dead", "Path to the Goddess", "Never-Ending Rain", "Hack Complete", "Hide and Seek",
        "A Great Need for a Shower", "A Hero Emerges", "A Heroine Emerges", "Broken Umbrella", "The Basics of Survival",
        "Hip to Add Squares", "Customizer", "Don't Need No Stinkin' Gun", "Eat This!", "That'll Hold 'Em",
        "Vermin Extermination", "A Vault-like Mind", "First Break-In", "Bon Appétit", "Zombie Roundup",
        "Like Skeet Shooting", "Keep Their Heads Ringin'", "Hats Off!", "Gotcha!", "Treasure Hunter",
        "A Waist of Space", "One Slick Super-spy", "Young Escapee", "With Time to Spare", "In the Blink of an Eye",
        "Lore Explorer", "Complete Vermin Extermination", "Master of Unlocking", "Leon \"S.\" Kennedy", "Sizzling Scarlet Hero",
        "Hardcore Rookie", "Hardcore College Student", "Frugalist", "Minimalist", "A Small Carbon Footprint",
        "Grim Reaper", "Hell of a Sheriff", "Got 'Em", "Chasing Jill"
    ];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
