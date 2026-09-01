import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/prince-of-persia-the-lost-crown.js";

test("the The Lost Crown guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "prince-of-persia-the-lost-crown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "prince-of-persia-the-lost-crown");

});

test("the The Lost Crown guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story Bosses",
            "Upgrades & Exploration",
            "Combat & Side Quests",
            "Mask of Darkness DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official The Lost Crown achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Maneater", "The Forest Trespasser", "Snake in the Sand", "Fists & Arrows", "The Storm Master", "The White Lion", "King of Kings", "The End of Time", "A Warrior's End", "Time Served", "Parallel Universe", "Warrior Within", "Glory of Faravahar", "Blessing of Shamshir", "Tools of a Prophet", "Elixir of Gods", "Cyra's Last Hope", "Written in the Sand", "Tree of Life", "Spectre of the Seas", "The True Moon", "Charitable Soul", "Betrayal", "Natural Resources", "Shock Trooper", "An Honorable End", "All the Time in the World", "Air Dancer", "Deadly Trap", "The Dead Die Twice", "Remember Me", "Remember You", "Remember Us", "Broken Mask", "Total Recall", "Health Is Wealth", "Thoughtful Accessories", "Cut the Power", "Two Birds with One Saw", "Easy Come, Easy Go"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
