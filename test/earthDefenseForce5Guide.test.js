import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/earth-defense-force-5.js";

test("the EARTH DEFENSE FORCE 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "earth-defense-force-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "earth-defense-force-5");

});

test("the EARTH DEFENSE FORCE 5 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Conquest 5-50%",
            "Conquest 55-100%",
            "Mastery & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official EARTH DEFENSE FORCE 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Conquest 5%", "Conquest 10%", "Conquest 15%", "Conquest 20%", "Conquest 25%", "Conquest 30%", "Conquest 35%", "Conquest 40%", "Conquest 45%", "Conquest 50%", "Conquest 55%", "Conquest 60%", "Conquest 62%", "Conquest 64%", "Conquest 66%", "Conquest 68%", "Conquest 70%", "Conquest 72%", "Conquest 74%", "Conquest 76%", "Conquest 78%", "Conquest 80%", "Conquest 82%", "Conquest 84%", "Conquest 86%", "Conquest 88%", "Conquest 90%", "Conquest 92%", "Conquest 94%", "Conquest 96%", "Conquest 98%", "Conquest 100%", "Master Ranger", "Master Diver", "Master Air Raider", "Master Fencer", "Rescue", "Super Rescue", "Medic"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
