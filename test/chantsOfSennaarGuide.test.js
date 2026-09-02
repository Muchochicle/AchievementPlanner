import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chants-of-sennaar.js";

test("the Chants of Sennaar guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chants-of-sennaar-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chants-of-sennaar");

});

test("the Chants of Sennaar guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Ascent","Reconnecting the Peoples","Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Chants of Sennaar achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["That's the spirit","Welcome to the Tower","The great escape","A new dawn","The darkness","One last step","Scholar","Champollion","I did it","In this together","A good beginning","Half the way","Peace walker","Cable guy","Feels like springtime","Open door","Free at last","A great audience","For its own good","A Link to the Past","The Preacher's fate","Rascal","Fashion victim","True G3M4R","Alchemists Express"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
