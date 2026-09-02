import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/among-us.js";

test("the Among Us guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "among-us-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "among-us");

});

test("the Among Us guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kills & Tasks",
            "Map Wins",
            "Win Conditions & Impostor Feats",
            "Hide n Seek Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Among Us achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A TASTE FOR IT", "KILLER", "ASSASSIN", "SCOURGE", "INTERN", "MANAGER", "TASKMASTER", "A SHIP ADRIFT", "CORPORATE LOCKDOWN", "UNEARTHED", "TOPPAT CREWMATES", "NEVER SUSPECT A THING", "A WELL-OILED MACHINE", "SABOTEUR", "SLASHER", "SURVIVOR", "SMOOTH TALKER", "IMPOSSIBLE TASK", "LIGHTS OUT", "WATCH ME SCAN", "CREWPOSTOR", "H U N G E R", "SHERLOCK", "CIRCUMVENTER", "HIDDEN TALENT", "NO ESCAPE", "PERFORM UNDER PRESSURE", "TRUST NO ONE", "I CAN BE YOUR ANGLE", "YOU CAN'T RUN", "BUT YOU CAN HIDE", "YOU CAN RUN", "BUT YOU CAN'T HIDE"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
