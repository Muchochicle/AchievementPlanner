import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/thronefall.js";

test("the Thronefall guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "thronefall-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "thronefall");

});

test("the Thronefall guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorial & Map Wins",
            "Eternal Trials & Crowns",
            "Later Maps & More Crowns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Thronefall achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Your Throne Awaits", "A New King", "Nordfels", "Ruler of Nordfels", "Durststein", "Ruler of Durststein", "Frostsee", "Ruler of Frostsee", "All Equipment Unlocked", "Uferwind", "Ruler of Uferwind", "Eternal Peasant", "Eternal Squire", "Eternal Knight", "Eternal Baron", "Eternal Warlord", "Eternal Conqueror", "Eternal Legend", "Sturmklamm", "Ruler of Sturmklamm", "5 Crowns", "10 Crowns", "20 Crowns", "30 Crowns", "Wildbach", "Ruler of Wildbach", "Moorweg", "Ruler of Moorweg", "Freifort", "Ruler of Freifort", "Totend", "Ruler of Totend", "40 Crowns", "50 Crowns"];

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
