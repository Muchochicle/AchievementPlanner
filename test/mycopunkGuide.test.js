import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mycopunk.js";

test("the Mycopunk guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mycopunk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mycopunk");

});

test("the Mycopunk guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Upgrades",
            "Missions, Biomes & Progression",
            "Bosses, Threat Levels & Hub Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Mycopunk achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Best Teammate", "Upgrader", "Exotic", "Collector", "Overclocked", "Hard Landing", "Yeehaw", "Space Optimization", "ABOMINATION", "Big Damage", "Serial Killer", "Oops", "Full Crew", "Employee of the Month", "Ow", "Swinger", "Yikes", "No Broccoli Please", "It's So Red", "I Like Sand", "I Think I Left My Keys in the Taxi, Can We Go Back And Get Them?", "Big Shot", "Employee of the Day", "Cranius", "Hi", "Calm Down", "That Was Tough", "Not Too Bad", "Hazard Pay", "Bush League", "Thanks", "Ok Then", "BANG!", "Slap", "I Want Saxitos"];

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
