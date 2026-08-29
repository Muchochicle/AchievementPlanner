import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/20-minutes-till-dawn.js";

test("the 20 Minutes Till Dawn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "20-minutes-till-dawn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "20-minutes-till-dawn");

});

test("the 20 Minutes Till Dawn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival & Darkness Tiers",
            "Weapon Masteries",
            "Character Masteries",
            "Challenge Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official 20 Minutes Till Dawn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Sunrise", "Dark Night", "Darker Night", "Darkest Night", "Pitch Black",
        "Revolver Mastery", "Shotgun Mastery", "Crossbow Mastery", "Flame Cannon Mastery", "SMG Mastery",
        "Batgun Mastery", "Grenade Launcher Mastery", "Fallen Angel", "Strongwoman", "Pyromaniac",
        "Master Ninja", "Thunder God", "Necromastery", "Bullet Mania", "On the Edge",
        "Reckless", "Nimble", "Pacifist", "Gotta Catch 'Em ALL", "Yokai",
        "Magic Bow Mastery", "Celestial", "Elder God", "Witch", "Reindeer",
        "Cyclone Sword Mastery", "Salvo Knives Mastery", "Watering Gun Mastery", "Master of the Blade",
    ];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
