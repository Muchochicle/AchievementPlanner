import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/people-playground.js";

test("the People Playground guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "people-playground-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "people-playground");

});

test("the People Playground guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Counts",
            "Experiments & Creations",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official People Playground achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Creator", "Murderer", "Serial killer", "Mass murderer", "Massacre",
        "Genocide", "Extinction", "Pacifist", "Uncharted territory", "Faraday malfunction",
        "Inverse teleportation", "Radiant", "Black hole", "My insides hurt", "Volume unclamped",
        "Guardian EMP", "Potion seller",
    ];

    assert.strictEqual(officialAchievementNames.length, 17, "sanity check on this test's own reference list");

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
