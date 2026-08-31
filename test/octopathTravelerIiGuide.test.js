import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/octopath-traveler-ii.js";

test("the OCTOPATH TRAVELER II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "octopath-traveler-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "octopath-traveler-ii");

});

test("the OCTOPATH TRAVELER II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battle & Journey Basics",
            "Traveler Stories & Crossed Paths",
            "Endgame & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official OCTOPATH TRAVELER II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Story All Your Own", "First Break", "Max Boost", "A New Skill", "The Journey Begins", "Setting Sail", "Eight Travelers", "An Answer, a Journey", "Eir's Apothecaries", "The Collar Removed", "Protector of the Island", "The Road to Prosperity", "Agnea the Star", "The Truth Lies in the Flame", "Clear Skies", "Master of Your Craft", "By the Light of the Heart", "The Detective and His Assistant", "A Peaceful Little Forest", "Mysteries of the Night Sky", "Dawn Breaks", "Octopath Traveler", "EX Skill Master", "Job Master", "Master of Solistia", "Hard Hitter", "Gate to the Netherworld", "Worth the Detour", "Record Collector", "Battle-Tested Gear", "Informed Adventurer", "Octopath Traveler...?", "100 Out Cold"];

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
