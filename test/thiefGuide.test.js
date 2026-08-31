import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/thief.js";

test("the Thief guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "thief-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "thief");

});

test("the Thief guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Thieving Feats",
            "Stealth, Collectibles & The City",
            "Story Progression",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Thief achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Obsessive Compulsive ", "Sleight of Hand ", "Quickly Pick a Lucky Lock ", "Something to Prove ", "Dark Archer ", "Legend in Leather ", "Mint Condition ", "Focus on the Tasks at Hand ", "A Moral Victory ", "One Step Ahead ", "Clear Headed ", "Hard Times ", "Modesty Denied ", "Child of the Shadows  ", "Hail of Glass ", "Health Hazard ", "Priceless ", "What's Yours is Mine ", "Happy Birthday ", "Hidden Agenda ", "Finders Keepers ", "Cache Dispenser ", "Working Overtime ", "Dastardly Deeds ", "All That Glitters ", "Old Habits Die Hard ", "Two Faced ", "The Drop ", "Lockdown ", "Dust to Dust ", "Dirty Secrets ", "A Friend in Need ", "The Forsaken ", "A Man Apart ", "The Hidden City ", "The Dawn's Light ", "Predatory Drive "];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
