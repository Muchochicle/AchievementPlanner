import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-banner-saga.js";

test("the The Banner Saga guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-banner-saga-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-banner-saga");

});

test("the The Banner Saga guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Class Kills (Part 1)",
            "Godstones",
            "Completion Challenges & Grudgewielder",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official The Banner Saga achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Raidmaster", "Backbiter", "Thrasher", "Bowmaster", "Siege Archer", "Skystriker", "Strongarm", "Shieldmaster", "Provoker", "Warhawk", "Warmaster", "Warleader", "Hunter", "Warden", "Spearmaster", "Eagle Eye", "Mender", "Godstone Denglr", "Godstone Hadrborg", "Godstone Hridvaldyr", "Godstone Marek", "Godstone Radormyr", "Godstone Bjorulf", "Godstone Dundr", "Godstone Ingrid", "Godstone Stravhs", "Normal Difficulty", "Hard Difficulty", "Challenge", "Quartermaster", "High Spirits", "Innocent", "Forced March", "Treasure Hunter", "Diplomat", "Warmonger", "Beat the Odds", "Grudgewielder", "Master Tactician"];

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
