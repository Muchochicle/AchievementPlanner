import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/once-human.js";

test("the Once Human guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "once-human-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "once-human");

});

test("the Once Human guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Manibus Scenario",
            "Way of Winter & Deviation Scenarios",
            "Endless Dream & RaidZone",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Once Human achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Corruption Be Gone", "End the Blight", "Spider Nest Purge", "Put Down That Dog", "I Remember Now!",
        "Securement Silo Explorer", "Desperate Lone Wolf", "First Securement", "Securement Master", "Legendary Deviation",
        "Veteran Farmer", "Electricity Expert", "Renovation Master", "Scavenging", "Mod Expert",
        "Manufacturing Tycoon", "No Rock Unturned", "Treasure Hunter", "Drift Master", "Frozen Solid",
        "Stick Together for Warmth", "Raw Chaosium Collector", "Spark Hoarder", "Era of Deviations", "Arena Master",
        "Ultimate Deviation", "Deviation Log", "Sweet Dreams", "Light Dreamer Killer", "Dream Collector",
        "Deep Dreamer Killer", "RaidZone Recruit", "Survival History", "Time to square off", "Gimme That!",
        "Home Run",
    ];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
