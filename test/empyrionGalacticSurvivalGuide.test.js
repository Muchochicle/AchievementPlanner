import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/empyrion-galactic-survival.js";

test("the Empyrion - Galactic Survival guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "empyrion-galactic-survival-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "empyrion-galactic-survival");

});

test("the Empyrion - Galactic Survival guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Steps & Survival",
            "Drone Wrecker & Light Year",
            "Combat, Exploration & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Empyrion - Galactic Survival achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Best In Town", "Desperate Measures", "Escape Velocity", "Hazardous Materials Disposal", "Home Is Where The Core Is", "Rip And Tear", "Too Many Legs", "Drone Wrecker Novice", "Drone Wrecker Specialist", "Drone Wrecker Master", "Drone Wrecker Expert", "Light Year Runner", "Light Year Sprinter", "Light Year Pacer", "Light Year Marathoner", "Bedrock Digger", "A Blasting Welcome", "Just To Be Sure", "Crispy 'n Crunchy", "Take Me To Your Leader!", "Luminous Experience", "Anniversary 2026"];

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
