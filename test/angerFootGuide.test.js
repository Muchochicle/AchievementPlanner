import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/anger-foot.js";

test("the Anger Foot guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "anger-foot-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "anger-foot");

});

test("the Anger Foot guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Gangs, Endings & Completion",
            "Early Level Secrets",
            "Later Level Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Anger Foot achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sneaker Head", "Peace Prevails", "Captain Planet", "Bankruptcy", "Prudish", "Movie Night", "A New World", "Completionist", "Brogress Quest", "Rattle Me Bones", "Thunderdome", "Intervention Required", "Quick Draw", "Stress Test", "I Prefer Books", "Eye For Goal", "Fire Prevention", "Ponte Plunge", "Pest Control", "Reptilian Recycling", "Couldn't Resist", "Make It Stop", "Unplugged", "Feedback Appreciated", "Hide And Seek", "Defiance", "Not Impressed", "Where Do They Come From?", "Where Do They Go?", "Fried And Battered"];

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
