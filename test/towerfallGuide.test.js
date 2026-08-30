import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/towerfall.js";

test("the TowerFall guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "towerfall-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "towerfall");

});

test("the TowerFall guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Discovery & Archers",
            "Combat & Trials",
            "Quest Mode",
            "Dark World Expansion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official TowerFall achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Serpent Hymns", "Omens", "Creation Myth", "Ascension", "Exuluna",
        "Fabled Recluse", "Demented Thespian", "Demon Queen", "Sleepy Master", "High Treason",
        "Battle Stenography", "Dex Check", "Thief's Badge", "Time Lord", "Tall Tales",
        "Massive Mythology", "Way of the Order", "Rapture", "Crimson Shield", "Golden Goddess",
        "Reaper's Crown", "Wretched Seer", "Lady Abigail", "The Blind Lich", "Cataclysm",
        "Dream Team", "Dark World Conquerors", "Last Stand", "Overlords", "Speed of Light",
    ];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
