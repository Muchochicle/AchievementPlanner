import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gwent.js";

test("the GWENT: The Witcher Card Game guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gwent-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gwent");

});

test("the GWENT: The Witcher Card Game guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorial, Levels & Ranked Progression",
            "In-Match Combat & Board-State Feats",
            "Mastery, Collection & Long-Haul Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official GWENT: The Witcher Card Game achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Agressor", "Alchemist", "Artifanatic", "Art Of War", "Baptized With Fire", "Basics Mastered", "Blacksmith", "Blitz", "CatchEmAll", "Common Denominator", "Destroyer", "Fantastic Five", "Gloves Off", "Go All In", "Greatest Admirer", "Had Enough Yet", "Hall Of Heroes", "Head Start", "Head To Head", "Heart Of Gold", "Hurricane Season", "Iron Fist", "Kickin' Up Dust", "Leviathan", "Master Tactician", "Milestone", "Mission Impossible", "Munchkin", "Napoleon Complex", "Next", "No Man Left Behind", "Nothing Wasted", "Overkill", "Quick, Before-", "Quintuplets", "Ready For Battle", "Romeo And Juliet", "Shiny!", "Uman make smashsmash?!", "Specialist", "Tables Turned", "Thanks, but No Thanks", "The More The Merrier", "Trouper", "We Are Legion", "Your wish is our command"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
