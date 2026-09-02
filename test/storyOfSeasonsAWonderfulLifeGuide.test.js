import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/story-of-seasons-a-wonderful-life.js";

test("the STORY OF SEASONS: A Wonderful Life guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "story-of-seasons-a-wonderful-life-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "story-of-seasons-a-wonderful-life");

});

test("the STORY OF SEASONS: A Wonderful Life guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Life Chapters","Farm & Nature","Home, Cooking & Money","Suggested Order"]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official STORY OF SEASONS: A Wonderful Life achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Reached Chapter 1: Beginnings.","Reached Chapter 2: Branching.","Reached Chapter 3: Blessings.","Reached Chapter 4: Blooming.","Reached Chapter 5: Traversal.","Reached Chapter 6: Twilight.","Reached Chapter 7: Beyond.","Maxed out your first animal or bird's LP.","Obtained 8 total animals.","Obtained 8 total birds.","Had an animal born on the farm.","Discovered 5 rare crops.","Discovered 20 rare crops.","Discovered 10 hybrid crops.","Discovered all hybrid crops.","Obtained 5 fish.","Obtained all fish.","Fished up the golden axe.","Obtained the Blade of Legend.","Obtained the message in a bottle.","Obtained 2 gold treasures.","Obtained 5 tablets.","Obtained 10 dishes.","Obtained 100 dishes.","Cleared 10 requests.","Cleared 100 requests.","Cleaned the grave for the first time.","Made 10,000G.","Made 100,000G.","Made 500,000G.","Got 10 additional facilities.","Looked in the mirror 3 times.","Obtained 7 total records.","Obtained all blessed tools."];

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
