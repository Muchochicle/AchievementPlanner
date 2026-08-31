import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sid-meiers-ace-patrol-pacific-skies.js";

test("the Ace Patrol: Pacific Skies guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sid-meiers-ace-patrol-pacific-skies-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sid-meiers-ace-patrol-pacific-skies");

});

test("the Ace Patrol: Pacific Skies guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battles, Campaigns & Difficulty",
            "Squadron & Mission Points",
            "Ace Pilots & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Ace Patrol: Pacific Skies achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Win a Battle - US Army", "Win a Battle - US Navy", "Win a Battle - Japanese Army", "Win a Battle - Japanese Navy", "Win the Campaign - US Army", "Win the Campaign - US Navy", "Win the Campaign - Japanese Army", "Win the Campaign - Japanese Navy", "Win a Mission - Pilot", "Win a Mission - Ace", "Win a Mission - Leader", "Win a Mission - Legend", "50,000 Squadron points - US Army", "50,000 Squadron points - US Navy", "50,000 Squadron points - Japanese Army", "50,000 Squadron points - Japanese Navy", "100,000 Squadron points - US Army", "100,000 Squadron points - US Navy", "100,000 Squadron points - Japanese Army", "100,000 Squadron points - Japanese Navy", "150,000 Squadron points - US Army", "150,000 Squadron points - US Navy", "150,000 Squadron points - Japanese Army", "150,000 Squadron points - Japanese Navy", "5,000 point mission - US Army", "5,000 point mission - Japanese Navy", "10,000 point mission - US Army", "10,000 point mission - US Navy", "10,000 point mission - Japanese Army", "10,000 point mission - Japanese Navy", "15,000 point mission - US Army", "15,000 point mission - US Navy", "15,000 point mission - Japanese Army", "15,000 point mission - Japanese Navy", "US Army Ace Pilot (5 Victories)", "US Navy Ace Pilot (5 Victories)", "Japanese Army Ace Pilot (5 Victories)", "Japanese Navy Ace Pilot (5 Victories)", "Legendary US Army Pilot (50 Victories)", "Legendary US Navy Pilot (50 Victories)", "Legendary Japanese Army Pilot (50 Victories)", "Legendary Japanese Navy Pilot (50 Victories)", "Hat Trick - Rookie", "Hat Trick - Pilot", "Hat Trick - Ace", "Hat Trick - Leader", "Hat Trick - Legend", "Four Aces", "5,000 point mission - US Navy", "5,000 point mission - Japanese Army"];

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
