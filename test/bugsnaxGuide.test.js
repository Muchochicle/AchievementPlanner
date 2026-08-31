import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bugsnax.js";

test("the Bugsnax guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bugsnax-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bugsnax");

});

test("the Bugsnax guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Catching & Transforming",
            "Exploration & Collectibles",
            "Story Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Bugsnax achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Everybody Gets One", "Wonderfalls", "Gone Home", "Combo Meal", "Say Cheese!", "Perf Dirt", "Double Trapper", "Grab Bag", "I'm Stuffed", "Feeding Frenzy", "Launch Party", "Clothesline", "In The Arms of the Gramble", "Quartermaster", "Halfway There", "Got to Catch Them All", "Midnight Snak", "That Reminds Me of A Puzzle", "Candid Cryptid", "Sundae Best", "Know Thy Neighbor", "Talkin' Bout Bugsnax", "Bossy Bugs", "Documentarian", "Sidetracked", "Survivor", "Live Laugh Hut", "Dapper Capper", "Deep Impact", "Vacation's End"];

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
