import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/xcom-enemy-unknown.js";

test("the XCOM: Enemy Unknown guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "xcom-enemy-unknown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "xcom-enemy-unknown");

});

test("the XCOM: Enemy Unknown guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Difficulty & Story Research",
            "Base, Squad & Endgame",
            "Enemy Within & Slingshot DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official XCOM: Enemy Unknown achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No Looking Back", "Meet New People. Then Kill Them.", "Xavier", "Humanity's Savior", "Earth First", "Our Finest Hour", "Lone Wolf", "Bada Boom", "Welcoming Committee", "Pale Horse", "Shooting Stars", "Ain't No Cavalry Comin'", "As A Scalpel", "Edison", "Angel of Death", "All Employees Must Wash Hands…", "Beyond the Veil", "Prisoner of War", "The Gatekeeper", "X Marks the Spot", "See All, Know All", "On the Shoulders of Giants", "Ride the Lightning", "Eye in the Sky", "All Together Now", "Hunter/Killer", "Man No More", "Bubonic", "We Happy Few ", "The Hardest Road", "Worth Every Penny", "Oppenheimer", "One Gun at a Time", "Skunkworks", "You Have 5 Seconds to Comply", "Theory...", "...and Practice.", "Wet Work", "A Continental Fellow", "What Wonders Await", "Up and Running", "Combat Ready", "Drums in the Deep", "Happy to Oblige", "And Hell's Coming With Me", "Off My Planet", "Tables Turned", "And So It Begins…", "The Volunteer", "Flight of the Valkyries", "New Friend", "Bait the Hook", "The Bigger They Are", "Rising Dragon", "All Aboard", "Who Needs Limbs?", "A Little Bit Alien", "Enemy Within", "Steel Martyr", "Apotheosis Denied", "They Shall Not Pass", "Zom-B-Gone", "An Army Of Four", "The Meld Squad", "Shieldbuster", "Someone Your Own Size", "Taking A Load Off", "Where in the World", "Mind the Step", "Nice Cover", "By Our Powers Combined", "Rise of the Machines", "Mutatis Mutandis", "Mental Minefield", "Anger Management", "Remington… Max Remington", "G’day", "Regenerate This", "Tingling Sensation", "Pain in the Neck", "Solid Prospect", "Ours are the Furies", "Elite Defense", "Guardian of Earth", "All Hands on Deck"];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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
