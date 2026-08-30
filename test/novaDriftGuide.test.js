import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nova-drift.js";

test("the Nova Drift guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nova-drift-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nova-drift");

});

test("the Nova Drift guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Build & Weapon Feats",
            "Endgame, Scoring & Boss Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Nova Drift achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Planet Buster", "A Bold Strategy", "No, You", "Volatile Projectile", "Divide by Zero", "Missile Massacre", "Turbo Tortoise", "I Regret Everything", "Pure of Mod and Body", "Filled with Determination", "Shouldn’t Have Been Standing There", "Sonic Rainboom", "This is Fine", "Ludicrous Speed", "Shock and Awe", "Secret Weapon", "Bullet Sponge", "Gaze Into the Abyss", "The Best Defense", "Boop Noodle", "Chaos Is A Ladder", "Don't Play Dice with The Universe", "Ultra Chaos", "Trolley Problem", "Joust", "Serenity Now", "World Serpent", "NOT THE BEES", "Still Alive", "The Hard Way", "Savor The Void", "Social Distancing", "I Want It All", "I Get By With A Little Help From My Friends", "Steady... Steady...", "Malfunction", "'Tis But A Scratch", "It Was At That Moment He Knew...", "Restraining Order", "Ya Basic"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
