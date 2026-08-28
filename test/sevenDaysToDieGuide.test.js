import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/7-days-to-die.js";

test("the 7 Days to Die guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "7-days-to-die-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "7-days-to-die");

});

test("the 7 Days to Die guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Steps",
            "Crafting, Kill & Travel Milestones",
            "Survival, Level & Fortitude Milestones",
            "PvP",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official 7 Days to Die achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Cause he's the Ax Man", "Good in the sack", "Playing Doctor", "Handy Man", "The Homestead Act",
        "Alexander Bell", "Benjamin Franklin", "Henry Ford", "Thomas Edison", "The Grave Digger",
        "The Embalmer", "The Mortician", "The Funeral Director", "Napoleon", "Julius Caesar",
        "Genghis Khan", "Alexander the great", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo",
        "Neil Armstrong", "Bite the dust", "Knock em Dead", "Your Number's Up", "Meet Your Maker",
        "Alive and Kicking", "Fit as a Fiddle", "Healthy as a Horse", "The Picture of Good Health", "Scavenger",
        "Adventurer", "Nomad", "Warrior", "Survivalist", "On top of the world",
        "Dig Deep", "The polar bare club", "Dirty Larry", "Evil Knievel", "Brush with Death",
        "Near Death Experience", "Cheated Death", "Nearly Immortal"
    ];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
