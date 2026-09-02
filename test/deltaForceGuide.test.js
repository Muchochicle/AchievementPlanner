import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/delta-force.js";

test("the Delta Force guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "delta-force-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "delta-force");

});

test("the Delta Force guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Level Progression",
            "Operations: Item Extractions",
            "Operations: Combat & Progress",
            "Warfare: Single-Match Tallies",
            "Warfare: Lifetime Totals",
            "Operator Damage Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Delta Force achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Top Agent", "Veteran Operator", "Field Marshal ", "Field Vanguard", "Everlasting Heart", "Military Enthusiast", "Mechanical Cardio", "Physical Hacker", "Next-Gen Material", "Precise Detection", "Multi-Core Processing", "Cleaner Bot", "My Turf", "Brickyard Supervisor", "Hotel Ownership Transfer Notice", "Ghost in the Halls", "On the Scope", "Ultimate Stash", "First Victory", "Tank Terminator", "Rescue More!", "Killing Machine", "Welding Warlord", "Ace Sniper", "Nuclear Strike", "Headshot Expert", "Endless Barrage", "Pistol Cleaner", "Heavy Barrage", "Battlefield Angel", "The Butcher", "Field Marathon", "Field Half-Marathon", "Bone Collector", "An Eye for an Eye", "D-wolf - Operations", "D-wolf - Warfare", "Vyron - Operations", "Vyron - Warfare", "Stinger - Operations", "Stinger - Warfare", "Toxik - Operations", "Toxik - Warfare", "Shepherd - Operations", "Shepherd - Warfare", "Uluru - Operations", "Uluru - Warfare", "Luna - Operations", "Luna - Warfare", "Hackclaw - Operations", "Hackclaw - Warfare", "Sineva - Operations", "Sineva - Warfare"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
