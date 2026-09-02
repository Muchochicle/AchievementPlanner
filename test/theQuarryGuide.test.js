import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-quarry.js";

test("the The Quarry guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-quarry-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-quarry");

});

test("the The Quarry guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Chapters & Overall Outcomes","Story Outcomes","Skill & Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official The Quarry achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Prologue","Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Chapter 6","Chapter 7","Chapter 8","Chapter 9","Chapter 10","Epilogue","Rough Night","Hackett's Quarry Massacre","The Final Girl","Nick of Time","The White Wolf","Nobody's Fool","Lovers' Quarrel","Should've Gone to the Motel","Above the Law","Mutually Assured","Just a Flesh Wound","Phlebotomy","Last Man Standing","Family Matters","Blood Pact","Bizzare Yet Bonafide","Reactionist","You're Breathtaking!","Peanut Butter Butterpops!","Hard Pass","Decked Out","Forewarned is Forearmed","Meddling Kids!","It's All Coming Together","What's This?","Conspiracy Theorist","The Truth is Out There","Creature Feature"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
