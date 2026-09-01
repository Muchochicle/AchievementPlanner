import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/promise-mascot-agency.js";

test("the Promise Mascot Agency guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "promise-mascot-agency-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "promise-mascot-agency");

});

test("the Promise Mascot Agency guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Shrines & Sin Cleansing",
            "Mascots, Upgrades & Business",
            "Character Stories & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Promise Mascot Agency achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Promising Future", "Fought Your Fate", "Start Your Pilgrimage", "Truly Blessed", "Relieve Some Sins", "A Sin Free Town is a Happy Town", "Crush the Old Order", "Build A New Society", "Get Rich or Die in Kaso Machi", "Kaso-Machi Explorer", "Gettin' Air", "Thread The Needle", "Boosting Into Your Heart", "Empire Building", "A New Family", "The Promise Clan", "A Satisfying Life", "Pantheon of Heroes", "The Investigator is Here", "From Zero to Hero", "Community Minded", "Kyushu Rejuvenation Fund", "A Promising Agency", "Palatial Offices", "Queen Of The Pirates", "Good Business Practice", "Business Growth", "Expansion, Expansion, Expansion", "The Pain Of A Game Designer", "The Strays", "Fish Preparation", "Anime Otaku", "Occultism Rules!", "Mascots Never Die", "Unspeakable Horrors", "Hard Worker", "A High Performance Vehicle", "The Sound of Eurobeat", "A Human Shaped Missile", "Feeling Strangely Safe", "Burning Passions For Idols", "Fail at Mindfulness", "A Hero of Justice!", "How Convenient!", "Thirsty Work", "Cultist", "Dark Kaso-Machi", "The Best In Japan", "A Pinky Pledge", "Double Tap"];

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
