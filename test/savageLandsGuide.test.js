import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/savage-lands.js";

test("the Savage Lands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "savage-lands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "savage-lands");

});

test("the Savage Lands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Creature Kills",
            "Survival Tasks & Building",
            "Crafting & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Savage Lands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Blood", "Oh Deer!", "Canine Conundrum", "Brittle Bones", "Die Hard the Hunter", "Plagued by Wolves", "They Mostly Come at Night... Mostly.", "Guardian of the Isle", "Task Master", "FIRE!", "Lumberjack That!", "The Basics", "4 Walls and a Roof", "Master Craftsman", "Who Runs Barter Town?", "Prospector", "Clobbering Time", "Which Way is North?", "A Wolf's Bane", "Entering the Unknown"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
