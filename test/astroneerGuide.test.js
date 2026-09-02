import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/astroneer.js";

test("the ASTRONEER guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "astroneer-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "astroneer");

});

test("the ASTRONEER guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Getting Started","Mastery & Research","The Gateway Network","Exploring the Solar System","Feats & Multiplayer","Completion & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official ASTRONEER achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["EXO Dynamics Training Seal of Approval","Up By the Roots","Pursuit of Knowledge","A Little Byte Goes a Long Way","Dirt Don't Hurt","Do Science To It","A Little Gassy","Sweet New Ride","Scrap for the Scrapper","Junk Trader","Barrier Buster","Delve Greedily and Deep","Making a New Friend","Well Hello There, Fancypants","Thank You For Your Continued Assistance","Lab Rat","Gas Giant","Chop Shop","In An Astroneer's Garden","Resources in the Rough","They Who Smelt It","Research Scientist","Information Dump","Secrets of the Universe","Shapes and Other Shapes","First Step Into a Larger World","Encounter With the Infinite","Sylva Awakened","Desolo Awakened","Calidor Awakened","Vesania Awakened","Novus Awakened","Glacio Awakened","Atrox Awakened","To Infinity...","Blast Off","One Small Step","It's a Dry Heat","Into the Woods","To the Forest Moon","I Feel Sick","Cool As Ice","Now You See Me...","...And Beyond","Hang 10-Squared","Where We're Going, We Don't Need Roads","Galactic Boogaloo","Baby You're a Firework","EXO Dynamics Outreach Participant","Let Me Borrow This Just A Second","Journey to the Center of the Thing","EXO Dynamics Outreach Advocate","Interplanetary Road Trip","EXO Dynamics Solar System Mastery","The First Discovery","The Wanderer's Way"];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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
