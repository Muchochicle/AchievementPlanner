import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/overcooked-all-you-can-eat.js";

test("the Overcooked! All You Can Eat guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "overcooked-all-you-can-eat-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "overcooked-all-you-can-eat");

});

test("the Overcooked! All You Can Eat guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Progression",
            "Classic Mode & Location Feats",
            "Chaos & Party Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Overcooked! All You Can Eat achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hero of Thyme", "The Unbread", "World Renowned Chef", "All You Can Eat", "World Traveler", "Hot Pot Shot", "Rooting for you", "Would You Like Fries With That?", "Lettuce Begin", "Fast Food", "Clockwork Kitchen", "It's Bean Emotional", "If You Can't Stand the Heat", "Careful Driver", "Kitchen Nightmares", "Out of this World", "Pop!", "Get Berried", "Racoon Magic", "This Is Fine", "Clutz in the Kitchen", "It's RAAW", "It's COLD", "It's a Cook-Off!", "Bangers and Trash", "Fire Hazard", "Dinner Party Posse", "The All Seeing Fry-Cook\t", "Calculated Risk", "Bear Picnic", "Boxing Champion", "Something Fishy", "New World Order", "Monster Mash", "Space Jelly", "Food Critic", "Infestation", "They Suspect Nothing...", "You're a Real Pizza-work", "Back in my day...", "Can You Pet The Dog?", "Can You Still Pet The Dog?"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
