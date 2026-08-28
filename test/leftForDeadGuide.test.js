import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/left-4-dead.js";

test("the Left 4 Dead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "left-4-dead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "left-4-dead");

});

test("the Left 4 Dead guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Survivals",
            "Difficulty & Restriction Runs",
            "Special Infected: Kills & Rescues",
            "Playing as the Infected",
            "Survival Mode",
            "Crash Course & The Sacrifice",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Left 4 Dead achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/left-4-dead.json).
    const officialAchievementNames = [
        "DEAD STOP", "DRAG AND DROP", "CR0WND", "UNTOUCHABLES", "BLIND LUCK",
        "MY BODYGUARD", "AKIMBO ASSASSIN", "FIELD MEDIC", "PHARM-ASSIST", "HELPING HAND",
        "HERO CLOSET", "HUNTER PUNTER", "TONGUE TWISTER", "NO SMOKING SECTION", "101 CREMATIONS",
        "DO NOT DISTURB", "MAN VS TANK", "TANKBUSTERS", "SAFETY FIRST", "NO-ONE LEFT BEHIND",
        "UNBREAKABLE", "WITCH HUNTER", "RED MIST", "PYROTECHNICIAN", "ZOMBIE GENOCIDEST",
        "DEAD GIVEAWAY", "GROUND COVER", "CLEAN KILL", "STAND TALL", "BACK 2 HELP",
        "ZOMBICIDAL MANIAC", "WHAT ARE YOU TRYING TO PROVE?", "NOTHING SPECIAL", "BURN THE WITCH", "TOWERING INFERNO",
        "SPINAL TAP", "STOMACH UPSET", "BRAIN SALAD", "JUMP SHOT", "MERCY KILLER",
        "TOLL COLLECTOR", "DEAD BARON", "GRIM REAPER", "BARF BAGGED", "BIG DRAG",
        "CHAIN SMOKER", "DOUBLE JUMP", "All 4 Dead", "DEAD WRECKENING", "LAMB 2 SLAUGHTER",
        "OUTBREAK", "LAST STAND", "BRONZE METTLE", "SILVER BULLETS", "VIOLENCE IS GOLDEN",
        "DISTINGUISHED SURVIVOR", "HEROIC SURVIVOR", "LEGENDARY SURVIVOR", "CRASH-PROOF", "QUICK POWER",
        "THE LITTLEST GENOCIDE", "SMASH HIT", "TRUCK STOP", "20 CAR PILE-UP", "JUMPIN' JACK SMASH",
        "SLIPPERY PULL", "TANK STUMBLE", "WIPEFEST", "Supreme Sacrifice", "Kill Bill",
        "Barrel Rolled", "Chaos Generator", "Sacrifizzle"
    ];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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
