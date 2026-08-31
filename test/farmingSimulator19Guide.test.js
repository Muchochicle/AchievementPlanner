import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farming-simulator-19.js";

test("the Farming Simulator 19 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farming-simulator-19-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farming-simulator-19");

});

test("the Farming Simulator 19 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Playtime, Money & Missions",
            "Field Work",
            "Forestry & Animals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Farming Simulator 19 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Longplay", "Lucrative Labor", "A Good Deed", "Helping Out", "Legendary Aide", "Backyard Gardener", "Starting Small", "Happy Plants", "Reap What You Sow", "Fervent Farmer ", "Plant Prosperity", "Delighted Plants", "Ample Yield", "Chief of Cultivation", "Serial Sower", "Ecstatic Plants", "Humongous Harvest", "I Saw That Coming!", "More Wood!", "Milk Magnate", "Wool Commander", "Pink Progress", "Egg Lord"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
