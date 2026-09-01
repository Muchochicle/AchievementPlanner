import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/el-paso-elsewhere.js";

test("the El Paso, Elsewhere guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "el-paso-elsewhere-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "el-paso-elsewhere");

});

test("the El Paso, Elsewhere guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Collectibles & Endings",
            "Combat, Hostages & Bosses",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official El Paso, Elsewhere achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["FAITHFUL LISTENER", "FLASHBACK", "GOODBYE", "BURIAL", "SCARS FADE", "THANKS FOR BELIEVING", "OLD CLASSIC", "LIFTOFF", "HIGH STAKES", "SPRING LOADED", "BULLET TIMED", "SHARPSHOOTER", "RELUCTANT HERO", "DIGGING YOUR OWN GRAVE", "I DIDN'T MEAN TO", "HATE THAT GUY", "FRANKENSTEIN", "BIBLICALLY ACCURATE", "UPGRADED", "WAKEUP", "NEEDLE DROP"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
