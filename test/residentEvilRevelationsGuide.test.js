import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-revelations.js";

test("the Resident Evil Revelations guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-revelations-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-revelations");

});

test("the Resident Evil Revelations guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign: Episodes & Difficulty",
            "Campaign: Scanning & Combat Feats",
            "Raid Mode: Stages & Player Levels",
            "Raid Mode: Combat, Weapons & Bonuses",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Resident Evil Revelations achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We'll Find You, Jill", "Get Us Out of Here!", "The Queen Zenobia", "The Storm is Gone", "The Dark Forest", "The Shores of Purgatory", "The Vestibule of Hell", "Surviving Deep Darkness", "First Victim", "Traces of Tragedy", "Last Victim", "Researcher", "Research Complete", "B.O.W. Hunter", "Living on the Edge", "By the Crosshairs", "Bamboozle the Oozes", "Die Another Day", "Triple Play", "A Packaged Deal", "Rockets are for Losers", "The Pool Is Open", "Dodge Master", "Angry Fist", "First Circle Traveler", "Midland Traveler", "Seventh Circle Traveler", "First Circle Overseer", "Midland Overseer", "Seventh Circle Overseer", "Beyond the Veil", "On Your Way", "Moving on Up", "Reaching Higher", "Raising the Bar", "Meteoric Rise", "Top of My Game", "One for Each Minnesota Lake", "That'll Leave a Mark", "Dynamic Duo", "Legendary Find", "Legends Are Made, Not Born", "Shop 'til Ya Drop", "The Unbroken Thread", "Gutsy", "Three is the Magic Number", "Bonus Enthusiast", "Bonus Ace", "Bonus Legend", "Bonus Demi-god"];

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
