import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/homeworld-3.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1840080 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("homeworld-3");

test("getPlannerData('homeworld-3') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for homeworld-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Homeworld 3 achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Homeworld 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Homeworld 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Dark Cloud Gathers", "Uncover the enemy's identity (Mission 5)."],
        ["A Helluva Ship", "Integrate the production facility into the mothership (Mission 2)."],
        ["A Path Across the Galaxy", "In Campaign, have a (non-mothership) ship built in Facility 315 survive all the way through until the end of the campaign."],
        ["Admiral", "Complete the campaign on Medium difficulty."],
        ["As They Have Hunted Us", "Defeat the Warsage (Mission 9)."],
        ["Big Game Hunter", "Eliminate 50 total enemy capital ships."],
        ["Bug Swatter", "Eliminate 200 total enemy strikecraft in the campaign."],
        ["Captain", "Complete the campaign on Easy difficulty."],
        ["Chapel Perilous", "Survive the Asteroid Storm (a campaign-mission objective)."],
        ["Destruct Sequence Alpha-One", "Scuttle one of your own ships."],
        ["Fix-it Frigate", "Fully repair 50 ships using Support Frigates."],
        ["Ghosts Of The Desert", "Enter the Ice Shelf without the mothership being detected (an optional Mission 10 objective)."],
        ["Grand Armada", "Build a grand total of 500 ships."],
        ["Hostile Takeover", "Capture an enemy ship."],
        ["If You’ll Be My Bodyguard", "Order a ship to guard another ship."],
        ["Into the Glacier", "Navigate the icy crevasse (a Mission 10 objective)."],
        ["Kablammo", "Blow up 5 ships with one explosion."],
        ["Navigator", "Complete the campaign on Hard difficulty."],
        ["Not Today, Singularity!", "Win a Skirmish match consisting of at least 3 enemy AI opponents."],
        ["Nothing Short Of Miraculous", "Eliminate the Incarnate reinforcement fleet (an optional Mission 10 objective)."],
        ["One Step Too Close", "Encounter a new, mysterious enemy (Mission 4)."],
        ["Open The Way", "Disable the Citadel (Mission 8)."],
        ["Prepare To Shipbreak", "Ward off enemies during core repairs (Mission 7)."],
        ["Shall We Play a Game?", "Successfully complete a War Games session for the first time."],
        ["Stay in formation!", "Set a command group to assume a new formation."],
        ["That Belongs in a Museum!", "Collect an artifact during a War Games session."],
        ["That Was One in a Million!", "Land the final shot to destroy a Capital ship with a Fleet Bomber ship."],
        ["The Great Cannon", "Unlock the mothership's Fusion Missile through research."],
        ["The Sajuuk-Khar", "Reunite with the Khar-Sajuuk (Mission 11)."],
        ["The Time Of Prophecy", "Witness the enemy using a Hyperspace Tunnel (Mission 12)."],
        ["The Unbound", "Research your first ship upgrade."],
        ["This War Is Over", "Complete the campaign by defeating the Incarnate Titan (Mission 13)."],
        ["Untouchable", "Complete 5 missions without the Mothership being hit by enemy fire."],
        ["Warriors Of The Fringe", "Defeat the Kalan Raider Carrier (Mission 3)."],
        ["We Are Away", "Put the Khar-Kushan through its paces (Mission 1)."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
