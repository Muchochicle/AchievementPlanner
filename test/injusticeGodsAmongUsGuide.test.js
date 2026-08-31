import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/injustice-gods-among-us.js";

test("the Injustice: Gods Among Us guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "injustice-gods-among-us-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "injustice-gods-among-us");

});

test("the Injustice: Gods Among Us guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Classic Battle & Progression",
            "Online & S.T.A.R. Labs",
            "Combat, Character Mastery & Archives",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Injustice: Gods Among Us achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Top Rung", "Rise to the Top", "Ultimate Battler", "Throwdown!", "Groundbreaking", "Go Sit in the Corner", "I Conquered All", "Mini-Master", "Statistical Advantage", "Sidekick", "The Hero We Deserve", "Almost There", "Justice for All", "Beginner's Luck!", "Overthrown", "I Voted!", "Streak Ender", "Breaking Records", "Over The Top!", "Lucky Break", "Holy Knockout Batman!", "Buddy System", "Practice Makes Perfect", "Learning is Fun", "It Has Begun", "Overachiever", "All Star", "World's Finest", "Heavy Hitter", "Unstoppable Force", "Wrecking Ball", "Around The World", "FINISHED", "Superhuman!", "Metahuman", "Feel the Burn!", "True Marksman", "The Caped Crusader", "Around and Around We Go", "Arkham City Lockdown", "Only a Real Master", "Perfect Aim", "Tourist", "Cosplay", "Gonna Need More Closet Space", "Hoarder", "I Can Back it Up", "Iconic Representation", "Looking Good!", "Bull in a China Shop"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
