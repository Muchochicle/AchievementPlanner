import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/world-of-warships.js";

test("the World of Warships guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "world-of-warships-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "world-of-warships");

});

test("the World of Warships guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battle & Progression Milestones",
            "Research, Containers & Campaigns",
            "Operations",
            "Later Campaigns & Collections",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official World of Warships achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Battle Hero", "Legend of the Seas", "Bane of the Oceans", "Amateur", "Warrior", "Veteran", "Initial Capital", "Moneybags", "Business Magnate", "Naval Warfare. Arson", "Naval Warfare. Flooding", "Naval Warfare. Ramming", "Naval Warfare. Tactics", "Naval Warfare. Weaponry Basics", "Junior Naval Designer", "Naval Constructor", "Chief Naval Architect", "Junior Supply Officer", "Supply Officer", "Senior Supply Officer", "Smooth Supply", "\"Science of Victory\"", "\"Science of Victory\" with Honors", "\"Honorable Service\"", "\"Honorable Service\" with Honors", "Weather Beaten", "Old-Timer", "Experienced One", "Important Missions", "Special Orders", "Secret Instructions", "Shield", "Guardian", "Protector", "Exterminator", "Raider", "Ravager", "\"Yamamoto Isoroku\"", "\"Yamamoto Isoroku\"", "\"Yamamoto Isoroku\" with Honors", "American Cruisers", "Hit Hard! Hit Fast! Hit Often!", "Hit Hard! Hit Fast! Hit Often! with Honors"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
