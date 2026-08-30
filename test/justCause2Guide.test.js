import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/just-cause-2.js";

test("the Just Cause 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "just-cause-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "just-cause-2");

});

test("the Just Cause 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & The Agency",
            "Chaos, Collection & Exploration",
            "Combat & Grappling-Hook Kills",
            "Driving, Flying & Traversal",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Just Cause 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Panau", "Casino Bust", "The White Tiger", "Mountain Rescue", "Three Kings", "Into the Den", "A Just Cause", "Top Agent", "Heroic Agent", "Legendary Agent", "Gaining a Foothold", "Conqueror of Panau", "A Trusted Ally", "First Taste of Chaos", "Saboteur", "Destroyer", "Professional Hitman", "Up to the Challenge 1", "Up to the Challenge 2", "Leaving No Rock Unturned", "Finders Keepers", "Faction Benefactor", "Globetrotter", "Freeroamer 1", "Freeroamer 2", "Body Count", "Unarmed and Dangerous", "Gravity is a Bitch!", "Follow Me!", "Hang 'em High!", "Wrecking Ball", "Piñata Party", "Juggler", "Road Rage", "Marksman", "Killing Frenzy", "Invincible Warrior", "Destruction Frenzy", "Test Driver", "Trying Anything Once", "Road Trip", "Please Step Out of the Vehicle", "Stunt Driver", "Halfway there", "Parachute Climber", "I Believe I Can Fly", "Bridge Limbo", "Low Flyer", "Perfectionist", "Top of the World"];

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
