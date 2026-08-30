import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ghost-recon-wildlands.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 460930 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ghost-recon-wildlands");

test("getPlannerData('ghost-recon-wildlands') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for ghost-recon-wildlands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Ghost Recon Wildlands achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Ghost Recon Wildlands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Ghost Recon Wildlands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Mousetrap", "Killed 7 enemies with a single mine."],
        ["A Good Start", "Completed the first mission \"Amaru's rescue\"."],
        ["A hero once, a hero twice", "Fallen Ghosts: complete the operation"],
        ["Artisanal SAM", "Fallen Ghosts: Destroy an enemy helicopter using an explosive bolt."],
        ["Assault Rifle Fanatic", "Collected all assault rifle models."],
        ["Bad Reputation", "Completed the Influence operation."],
        ["Beat the Boss", "Defeated your first boss."],
        ["Black-out Boomer", "Destroyed a generator with a C4 blast."],
        ["Brake a leg", "Operation Narco Road: Complete a trial without using the brakes"],
        ["Broken Locks", "Completed the Security operation."],
        ["Cluster Bomber", "Killed 7 enemies with a single C4 blast."],
        ["Cristina", "Operation Narco Road: Kill 50 enemies with any gang's vehicle"],
        ["Deadly Curious", "Interrogated 20 sources."],
        ["Death from Above", "Killed an enemy with a drone."],
        ["Death in the Dark", "Made a close-combat kill at night."],
        ["Eagle-Eyed", "Marked 100 enemies with the binoculars."],
        ["El Visible", "Operation Narco Road: Kill the final target"],
        ["Eye in the Sky", "Marked 100 enemies with a drone."],
        ["Fearless", "Skydived 10 times."],
        ["Finished the Job", "Killed an enemy in close combat who was hurt by another player."],
        ["Gang Leader", "Operation Narco Road: Kill One boss of the cartel"],
        ["Handgun Fanatic", "Collected all handguns models."],
        ["Heavy Medals", "Collected all the bonus medals."],
        ["Highway Bandit", "Tagged 10 convoys."],
        ["Kill list", "Fallen Ghosts: Kill one of each Extranjeros squad archetypes"],
        ["Legend Hunter", "Discovered one legend."],
        ["Legendary Hunter", "Discovered all  legends."],
        ["Light Machine-Gun Fanatic", "Collected all light machine-gun models."],
        ["Long Shot", "Hit a target more than 400m away."],
        ["Mal Rodilla-Ternera", "Operation Narco Road: Complete an Electro™ challenge while freefalling"],
        ["Mission Master", "Completed all Story missions."],
        ["More Followers than Escobar", "Operation Narco Road: Fill the Followers Gauge of all regions to 100%"],
        ["No Better Rebel", "Maxed out each Rebel skill."],
        ["Nondescript jungle hero", "Fallen Ghosts: Kill 10 Covert Ops Extranjeros using your knife"],
        ["Only the Best", "Bought all upgrades."],
        ["Pull!", "Shot an enemy chopper out of the air with a mortar."],
        ["Real Rebel", "Unlocked all the Rebel skills."],
        ["Rebel leader", "Fallen Ghosts: Complete a Final Rebel Op"],
        ["Rebel Sympathizer", "Unlocked a Rebel skill."],
        ["Road Warrior", "Drove a vehicle for 100 km."],
        ["Scenic Route", "Narco Road: Go from Eddie's party villa to Arturo's bar in 8 minutes or less in a ground vehicle"],
        ["Serious Collector", "Found 50% of the documents in the game."],
        ["Shotguns Fanatic", "Collected all shotguns models."],
        ["Shut Down", "Completed the Production operation."],
        ["Smuggler's Blues", "Completed the Smuggling operation."],
        ["Sniper Rifle Fanatic", "Collected all sniper rifle models."],
        ["Spice of Life", "Played each type of side mission."],
        ["Submachine-Gun Fanatic", "Collected all submachine-gun models."],
        ["Tactical genius", "Fallen Ghosts: Blind yourself using the Flash Drone"],
        ["Teamwork!", "Completed 3 missions with another player."],
        ["The Champion", "Maxed out your XP and levels."],
        ["The End", "Finished the story."],
        ["The Whole Story", "Found all documents."],
        ["Thorough supporter", "Fallen Ghosts: Complete every Rebel Op and Mission"],
        ["Top Drone", "Bought all drone-related upgrades."],
        ["Ultimate Skill", "Bought all the upgrades of a Skill branch."],
        ["With a Pistol!", "Took out a sniper with a pistol."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
