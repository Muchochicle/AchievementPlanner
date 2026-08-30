import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grey-goo.js";

test("the Grey Goo guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grey-goo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grey-goo");

});

test("the Grey Goo guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Skirmish, Multiplayer & Campaigns",
            "Advanced Multiplayer Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Grey Goo achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Practice Makes Perfect", "Hat Trick", "Glutton for Punishment", "Even Ground", "I Could Do This All Day", "Tag Team", "One Player to Rule Them All", "Full Time Job", "No More Running", "Point of First Contact", "Call for Help", "End of the Beginning", "GG", "Game Ender", "Epic Loss", "Start of Something Epic", "Epic Escalation", "Weapon of Mass Destruction", "Maxed Out!", "Macro Master", "Barca's Finest", "Galactic Explorer", "Evolutionary Pinnacle", "Uncompromised Conquest", "Completionist", "Fort Awesome", "Self Sacrifice", "Back from the Dead", "Kickin' It Old School", "World War G", "Sharing is Caring", "Seasoned Engineer", "Ain't Nobody Got Time for That", "Master of Teleportation", "Civil Servant"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
