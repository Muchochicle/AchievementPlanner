import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvel-cosmic-invasion.js";

test("the MARVEL Cosmic Invasion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvel-cosmic-invasion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvel-cosmic-invasion");

});

test("the MARVEL Cosmic Invasion guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boss Rescues",
            "Hero Combat Feats",
            "Secrets",
            "Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official MARVEL Cosmic Invasion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Battle Begins!", "Dark Phoenix No More!", "Clearing out Cobwebs!", "Mindcontrol Meltdown!", "Mad Titan Thwarted!", "Cosmic Rescue!", "Bug Repelled!", "Matrix Maven!", "Ultimate Alliance!", "Maxed out Superhero!", "Mighty Shield!", "Quantum Strike!", "Cosmic Ghost Blaster!", "Board Bash!", "Full of Photons!", "Hammer Time!", "Fuzzy Grenadier!", "Phoenix Flame!", "Ground Pound!", "Knock'em down!", "Perfect Storm!", "Panther Parry!", "Adamantium Fury!", "Electric Trap!", "Swinging Spider!", "Mighty Marvel Team-Up!", "Galactic Challenger!", "Hits Parade!", "Roll Call!", "Cosmic Cubist!", "Variant Fighter!", "Mutants United!", "Special Attack Assemble!", "Teamwork Tussle!", "Superhero Squad!"];

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
