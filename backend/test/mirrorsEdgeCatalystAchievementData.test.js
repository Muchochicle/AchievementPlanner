import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mirrors-edge-catalyst.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1233570 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mirrors-edge-catalyst");

test("getPlannerData('mirrors-edge-catalyst') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for mirrors-edge-catalyst");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Mirror's Edge Catalyst achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Mirror's Edge Catalyst achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Mirror's Edge Catalyst achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Belle of the Ball", "Vault, Slide, Jump, Wallclimb, Turn, Jump, Wallrun, Turn, Jump, Skill Roll"],
        ["Blood is thicker than everything", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Building Blocks", "Complete all side missions in Rezoning"],
        ["Danger Zone", "Reach full focus and take out 10 enemies before it runs out"],
        ["Devastation", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Downtown Girl", "Complete all side missions in Downtown"],
        ["Easy Runner", "Springboard, Wallclimb, Turn, Jump, Coil, Skill Roll"],
        ["Elegant Flight", "Deliver any fragile package without any damage to it"],
        ["Express delivery", "Deliver 10 packages"],
        ["Fighting the system", "Complete 15 billboard hacks and interventions"],
        ["Five Finger Discount", "Remove 10 electronic parts from Conglomerate terminals"],
        ["Full Exposure", "Collect every gridLeak in Glass"],
        ["Georges' Garrison", "Springboard, Swingbar, Jump, Wallclimb, Turn, Jump, Coil"],
        ["Hacker Time", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Hey, it's-a-me again!", "Perform a highground attack as a finishing move"],
        ["I refuse to sink", "Complete all side missions in Anchor"],
        ["I Saw You On The Battlefield", "Destroy all Security Hubs"],
        ["In his bad books", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Into the light", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Knowledge is power", "Complete all of Plastic's missions"],
        ["Law-abiding citizen", "A good Cascadian follows the rules"],
        ["Learn to Fly", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free). Unlocks on completing the 'Be Like Water' story mission."],
        ["Learn to walk", "Purchase Faith's second upgrade"],
        ["Little girl found", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Never forgotten", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["P.I. Connors", "Find every secret bag hidden in Glass"],
        ["Payback", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Peak Performer", "Get a 3-star rating on all Dashes in the main game"],
        ["Praise the Run", "Reach full focus and keep it going"],
        ["Reunion", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free). Unlocks after the opening mission, resuming Faith's old life."],
        ["Roof Runner", "Complete 10 Dashes in the main game"],
        ["Run free", "Purchase half of Faith's upgrades"],
        ["Running Errands", "Complete all side missions"],
        ["Seb's Salute", "Shift, Springboard, Wallrun, Swing Pipe, Skill Roll"],
        ["Shattered Dreams", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Smash & grab", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Spooky", "Customize your Echo"],
        ["Story Teller", "Find every recording and document in Glass"],
        ["Tenacious Traceur", "Wallrun, Turn, Jump, Wallclimb, Turn, Jump, Wallclimb, Turn, Jump"],
        ["The enemy of my enemy", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["This. Is. Glass.", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free). Unlocks on completing the final story mission."],
        ["Time for a Frenzied Rumble", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Undetected Surge", "Shut down any gridNode without notifying KrugerSec of your presence"],
        ["User Generated Finisher", "Complete a user created Time Trial"],
        ["Vengeful Strike", "Story progress marker - unlocks on completing a specific main story mission (described spoiler-free)."],
        ["Veteran Runner", "Shift, Wallrun, Jump, Coil, Skill Roll, Shift"],
        ["Viewfinder", "Complete all side missions in The View"],
        ["With Bells On", "Purchase all of Faith's upgrades"],
        ["You can't keep me down", "Get yourself to a user created Beat L.E."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
