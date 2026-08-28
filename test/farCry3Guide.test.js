import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-3.js";

test("the Far Cry 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-3");

});

test("the Far Cry 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Collectibles & Progression",
            "Outposts & Side Quests",
            "Combat & Skill Feats",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Far Cry 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Blood", "Magic Mushroom", "Worst Date Ever", "One of Us", "Hands Off My Stoner",
        "Retake Wall Street", "Have I Told You?", "Taken for Granted", "Higher Than a Kite", "Deep Cover",
        "Poker Night", "What a Trip", "Free Fall", "Inked Up", "Fully Inked",
        "Money to Burn", "Aftermarket Junkie", "Rebel With a Cause", "Island Liberator", "Unheard",
        "Full Bars", "Archeology 101", "Dead Letters", "Memory to Spare", "Jungle Journal",
        "Bagged and Tagged", "Road Trip", "In Cold Blood", "Let the Trials Begin", "Poker Bully",
        "Hunter Hunted", "Poacher", "Artsy Craftsy", "Needle Exchange", "The Good Stuff",
        "Say Hi to the Internet", "Heartless Pyro", "Love the Boom", "Rock Always Wins", "Never Saw it Coming",
        "Improper Use", "Toxophilite", "Island Paparazzi", "Fearless or Stupid"
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
