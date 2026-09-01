import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/layers-of-fear-2016.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 391720 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("layers-of-fear-2016");

test("getPlannerData('layers-of-fear-2016') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for layers-of-fear-2016");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Layers of Fear (2016) achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Layers of Fear (2016) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 27 Layers of Fear (2016) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art Connoisseur", "Gaze at paintings for a total of an hour"],
        ["Artist's struggle", "Embrace death for the first time"],
        ["Finishing touch", "Complete a painting"],
        ["I know what I want", "Reach a conclusive ending"],
        ["I Remember It Like It Was Yesterday", "Recalled all your childhood memories."],
        ["Immortalized in my heart", "Gather all family mementos"],
        ["Inspired OCD", "Search 100 drawers and cabinets"],
        ["Instinct of self-preservation", "In Chapter 5, when your wife's shadow is projected on the wall ahead, do not turn around - just keep walking forward."],
        ["It rings a bell", "Discover an echo from the past"],
        ["It was worth a try", "Dial 911 on the rotary phone in Chapter 5."],
        ["It's covered up for a reason", "Get working on your Magnum Opus"],
        ["Let Bygones Be Bygones", "(Inheritance DLC) Reach the Father ending."],
        ["Omniscient", "See all three endings (the portrait of your wife, of yourself, and of your wife and baby)."],
        ["Once Upon A Time", "(Inheritance DLC) Watch the full fable storybook."],
        ["Preferred Parent", "(Inheritance DLC) Stick to one parent's side through the entire quarrel vision."],
        ["Scraps of love", "Find a memento of your family"],
        ["Sketchbook of the damned", "After reaching the 'wife' ending, open the book on the table in front of the broken couch (it reveals the developers' faces)."],
        ["Sword Of The Serpent", "(Inheritance DLC) Pull the sword from the stone behind the canvas and walk into the serpent to slay it."],
        ["The artist's impression", "Collect a rat sketch"],
        ["The Big Picture", "Assemble all the puzzle pieces."],
        ["The Tree and the Apple", "(Inheritance DLC) Reach the true ending - side with the Father, collect all notes and drawings in one run, and arrange the drawings on the wall."],
        ["This could be important", "Read every note in the game."],
        ["Those eyes can pierce a man's soul", "Gaze at a certain unsettling portrait long enough that its eyes seem to pierce you."],
        ["Too Little, Too Late", "(Inheritance DLC) Reach the Mother ending."],
        ["Wanderer", "Take a thousand steps"],
        ["Whispers long forgotten", "Recall every word you said"],
        ["You might have a problem", "Gather all drawings of rodents"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
