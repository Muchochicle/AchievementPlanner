import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/songs-of-syx.js";

test("the Songs of Syx guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "songs-of-syx-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "songs-of-syx");

});

test("the Songs of Syx guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Production & Prosperity Titles",
            "Specialist & Builder Titles",
            "Ruler & Conqueror Titles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Songs of Syx achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Provider", "The Bureaucrat", "The Caretaker", "The Clumsy", "The Drunkard",
        "The Entertainer", "The Gourmand", "The Merciful", "The merciless", "The Pleasurer",
        "The Undefeated", "The Uniter", "The Wise", "The Artisan", "Breaker of Chains",
        "The Child of the Sun", "First of Their Name", "Heaviest of Hands", "Herdsman of Entelodonts", "Lifebringer",
        "Lord of the Seven Kingdoms", "Richest of Kings", "Warden of the North", "Ruler of Sedge and Bee", "Seer of the Gods",
        "The Builder", "The Conquerer", "The Great", "The Mad", "The Nudist",
        "Protector of the Realm", "The Slaver", "The Usurper", "Ruler of Kings",
    ];

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
