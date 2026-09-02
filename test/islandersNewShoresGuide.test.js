import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/islanders-new-shores.js";

test("the ISLANDERS: New Shores guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "islanders-new-shores-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "islanders-new-shores");

});

test("the ISLANDERS: New Shores guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Scores & Building","Placement Feats","Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official ISLANDERS: New Shores achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Newcomer","Mayor","Ruler","Monarch","Deity","Builder","Constructor","Architect","Traveler","Adventurer","Explorer","Puzzle Solver","Nice Spot","Brilliant Position","Perfectly Placed","Slow Burn","Islander","Tall Tale","Blessed","Tactician","Spectacular","Cozy","Interconnected","Fluttering","Guild Master","Fortunate","Crammed","Forested","Renovating","Steadfast","Planner","Coordinated","Respectful","Frugal","Protective","Odyssey","Scrupulous","Central","A Short Journey","No time to dilly-dally","Temple Trouble","Fully Stacked","Fast Traveler","A New Challenger","Metropolis","Manufactory","Mt. Roberson","Vanishing","Now you see me","Novice Challenger","Ghost Whisperer","Clairvoyage","Can't Stop Won't Stop","Industrious","Couldn't Stop","Intermediate Challenger","Halfway There","Memory Lane","Can't Have It All","Chilling Gifts","Traditional Traveler","Professional  Challenger"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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
