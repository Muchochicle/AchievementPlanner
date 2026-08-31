import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/serious-sam-2.js";

test("the Serious Sam 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "serious-sam-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "serious-sam-2");

});

test("the Serious Sam 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Difficulty",
            "Combat & Challenge Feats",
            "Secret Easter Eggs & Speed",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Serious Sam 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Beginner", "Simba Defender", "Zixie Savior", "Chi Fang Champion", "Dances with Kleer", "Elvian Defender", "Hugo Annihilator", "Mental Kicker", "Totally Serious", "Serious Master", "Mental Institution Master", "Look, It's A Secret", "Sam I Am!", "Powered Up", "Atomic Firecracker", "Extra Life!", "A Helping Hand", "He Sure Had Me Fooled!", "Double Trouble", "Punk Rocker", "Bird Lover", "Sherlock", "My Old Love", "Don't Feed The Monkey!!!", "How Unfortunate", "Fun And Games", "Someone Pick Up The Phone...", "Football Glory", "Serious Run", "Cannon Expert"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
