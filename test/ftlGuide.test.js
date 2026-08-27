import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ftl.js";

test("the FTL guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ftl-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ftl");

});

test("the FTL guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progress & Victory",
            "Long-Term Totals",
            "Restriction Runs",
            "Combat Feats",
            "Kestrel, Zoltan & Stealth Cruisers",
            "Engi, Rock & Mantis Cruisers",
            "Slug & Federation Cruisers",
            "Crystal & Lanius Cruisers",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official FTL achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/ftl.json).
    const officialAchievementNames = [
        "Just Getting Started", "Federation Base in Range", "Federation Victory (Easy)", "Federation Victory (Normal)", "Your Own Fleet",
        "Rule Ten: Greed is Eternal", "Warlord", "I don't need no stinkin' upgrades!", "Coming in for my Pacifism run!", "On a Wing and a Prayer",
        "Ballistophobia", "Technophobia", "Living off the Land", "No Redshirts Here", "Some people just like to watch ships burn",
        "Astronomically Low Odds", "They never saw it coming", "BOARDING OBJECTIVE SUCCESSFUL", "Trustworthy Auto-Pilot", "Slice and Dice",
        "Victory through Asphyxiation", "The United Federation", "Full Arsenal", "Tough Little Ship", "Shields Holding",
        "Givin' her all she's got, Captain!", "Manpower", "Bird of Prey", "Phase Shift", "Tactical Approach",
        "Robotic Warfare", "I hardly lifted a finger", "The guns... They've stopped", "Is it warm in here?", "Defense Drones Don't Do D'anything!",
        "Ancestry", "Take no prisoners!", "Avast, ye scurvy dogs!", "Battle Royale", "We're in Position!",
        "Home Sweet Home", "Disintegration Ray", "Master of Patience", "Diplomatic Immunity", "Artillery Mastery",
        "Sweet Revenge", "No Escape", "Clash of the Titans", "Advanced Mastery", "Scrap Hoarder",
        "Loss of Cabin Pressure"
    ];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
