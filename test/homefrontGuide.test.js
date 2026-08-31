import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/homefront.js";

test("the Homefront guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "homefront-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "homefront");

});

test("the Homefront guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Chapters",
            "Guerrilla Difficulty & Iron Man",
            "Collectibles & Chapter Challenges",
            "Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Homefront achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Why We Fight", "Freedom", "Fire Sale", "The Wall", "Heartland", "Overwatch", "Golden Gate", "Why We Fight - Guerrilla", "Freedom - Guerrilla", "Fire Sale - Guerrilla", "The Wall - Guerrilla", "Heartland - Guerrilla", "Overwatch - Guerrilla", "Golden Gate - Guerrilla", "Iron Man - Why We Fight", "Iron Man - Freedom", "Iron Man - Fire Sale", "Iron Man - The Wall", "Iron Man - Heartland", "Iron Man - Overwatch", "Iron Man - Golden Gate", "Archivist", "Historian", "Pistol Whipped", "Give Him the Stick", "Welcome to Freedom", "Good Use of Cover", "Mercy", "Let 'em Burn", "David Rejected", "Fatal and Tragic", "Chronicler", "Stairway to Heaven", "Speed Demon", "Safer Skies", "Wilhelm's Nightmare", "Soft Targets", "Weapon Expert", "Drone Expert", "Vehicle Expert", "Expert Of War", "Over the Hill", "3-Star Threat", "5-Star Threat", "Tea Party", "Destructive Duo", "Action Hero"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
