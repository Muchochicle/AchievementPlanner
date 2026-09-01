import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/selaco.js";

test("the Selaco guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "selaco-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "selaco");

});

test("the Selaco guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Combat Milestones",
            "Story Progress & Stats",
            "Minigames & Special Campaign",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Selaco achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["NotEvenRemotelyFair.WAD", "Marathon Runner", "Reporting for duty!", "Safe Heaven", "Pub Brawl", "Power Overwhelming", "Daily Bonus", "Little Plushy Man", "AFK", "Crime Averted", "Myth, busted!", "Humiliation!", "Death Incarnate", "Buddy System", "Sharp and Shiny", "Sharp Shooter", "Gwyn Simp", "Unionize!", "Humanity's Second Chance", "Homecoming", "Death Toll", "Paper Forever", "Game Over!", "DPS LFG", "Overkill", "Save the World, bro!", "It's not a bug, it's a feature!", "Mozzarella Miracle!", "Embrace The Chaos", "Strongbox"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
