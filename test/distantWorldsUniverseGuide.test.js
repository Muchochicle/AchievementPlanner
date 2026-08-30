import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/distant-worlds-universe.js";

test("the Distant Worlds: Universe guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "distant-worlds-universe-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "distant-worlds-universe");

});

test("the Distant Worlds: Universe guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "War, Conquest & Destruction Tiers",
            "Government, Alliances & Playstyle",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Distant Worlds: Universe achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Behold the Power!", "Backstabber", "Wunderworld", "Wunderworld", "Wunderworld", "What's Yours is Mine", "What's Yours is Mine", "What's Yours is Mine", "Conqueror", "Conqueror", "Conqueror", "Galactic Downfall", "Don't Tell me the Odds", "The Final War", "Marauder", "Marauder", "Marauder", "Veteran of the Galactic War", "Veteran of the Galactic War", "Veteran of the Galactic War", "Planetary Warfare", "Planetary Warfare", "Planetary Warfare", "Disassembler", "Disassembler", "Disassembler", "Monster Hunter", "Monster Hunter", "Monster Hunter", "Assassin", "Assassin", "Assassin", "New Galactic Order", "New Galactic Order", "New Galactic Order", "I am the Law", "I am the Law", "I am the Law", "A House Divided", "Ancient Order", "Dark Times", "We Want You", "If You Can't Beat 'Em", "Minecrafter", "Free Trader", "Warmonger", "Cloak and Blaster", "Cloak and Blaster", "Cloak and Blaster", "Raider", "Raider", "Raider", "Peace through Peace", "Galaxy in Flames"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
