import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-primal.js";

test("the Far Cry Primal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-primal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-primal");

});

test("the Far Cry Primal guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Beasts & Village",
            "Weapon & Combat Feats",
            "Outposts, Taming & Collectibles",
            "Survivor Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Far Cry Primal achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This Way To Oros", "Spearproof", "Liberator", "Uncaged", "Krati, Krati, Krati!", "Deadeye", "Spiritual Advisor", "Mister Fix-It", "Gray Huntress", "Twelve Labors", "To Ash", "Evolution in Action", "Here Kitty", "Big Teddy", "Endangered", "Good Boy", "Home Improvement", "Subdivisions", "Tears of Shame", "Real Estate Baron", "Killer's Belief", "And Stay Down", "Skewered", "Sharpshooter", "Inflammable", "David And Goliath", "Outta My Way", "Bad Trip", "BEES!", "Quickdraw", "Right On Target", "Bullseye", "Gotcha", "Sic 'Em", "Feathered Friend", "Expert Wenja", "Armorer", "Kanda Of Faith", "Skirmish", "Expansion", "Conquest", "Menagerie", "Fancy Friend", "Veterinarian", "Cave Hoarder", "Good Neighbor", "Mapmaker", "Crush Your Enemies", "Master Tracker", "Mark 4 Wenja", "Apex Predator", "TOP OF THE FOOD CHAIN", "TOP OF THE FOOD CHAIN (2ND CHANCE)", "TOP OF THE FOOD CHAIN (PERMADEATH)", "SURVIVAL OF THE FITTEST"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
