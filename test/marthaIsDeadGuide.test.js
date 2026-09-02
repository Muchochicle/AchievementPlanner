import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/martha-is-dead.js";

test("the Martha Is Dead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "martha-is-dead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "martha-is-dead");

});

test("the Martha Is Dead guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Setting","Photography","Collectibles & Routine","Suggested Order"]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Martha Is Dead achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Strength","Judgement","Justice","The Lovers","The High Priestess","The Fool","The Tower","The Stars","The Emperor","The Sun","The Hierophant","The Magician","Temperance","The Hermit","The Devil","The Moon","The Hanged Man","The Chariot","The Wheels of Fortune","The Empress","The World","Death"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
