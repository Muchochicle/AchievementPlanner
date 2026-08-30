import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-crew-2.js";

test("the The Crew 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-crew-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-crew-2");

});

test("the The Crew 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Followers",
            "Collection, Skills & Feats",
            "Meta & Endgame Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official The Crew 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to MotorNation", "Ruler of the Streets", "Master of the Line", "Creative Thinker", "Double Down", "That's a Wrap!", "Pics or it didn’t Happen", "Coast to Coast", "First Autograph", "Press Conference", "Rising Star", "The Man, the Myth, the Legend", "Are you a God? (Say yes)", "Paint Don't Hurt", "The Collector", "Jack of all trades", "Virtuoso", "I Must Break You", "Hard way to hell", "Social Butterfly", "Easy Rider", "Reality Check", "Leap of Faith, No Straw", "Drift Like a Tester", "Act Like a Game Designer", "Act Like an Art Director", "The End is Nigh", "Ride the Jewels", "Max Out Fury Load", "BFF", "Act like a Narrative Designer", "Ghost Bustin' 2", "Binge Watching", "Epic Win"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
