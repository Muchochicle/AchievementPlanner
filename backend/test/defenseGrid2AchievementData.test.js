import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/defense-grid-2.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 221540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("defense-grid-2");

test("getPlannerData('defense-grid-2') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for defense-grid-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every Defense Grid 2 achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every Defense Grid 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 65 Defense Grid 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Items No Less", "Enable a Tower Augmentation Item on 10 Towers."],
        ["Alien Tears", "Earn a gold medal on every mission in Story mode."],
        ["Annihilator", "Kill 10,000 aliens."],
        ["Arsenal", "Build 20 towers of any type in one mission."],
        ["Base Defender", "Complete the single player campaign in Story Mode."],
        ["Boot Camp", "Finish all the missions in Chapter 1 in Story Mode."],
        ["Brothers in Arms", "Earn Bronze in a Co-Op Multiplayer mission."],
        ["Burn Baby Burn", "Build 100 Inferno towers."],
        ["Close Call", "Save a core that is less than 10 seconds away from the map's exit point."],
        ["Confident", "Use the speed up control at 3x for a total of 60 seconds in any mission."],
        ["Death From Above", "Use the Orbital Laser Special Weapon (General Cai)."],
        ["Diversity", "Build 1 of each tower type in any single mission."],
        ["Eradicator", "Kill 100 aliens."],
        ["Exterminator", "Kill 1000 aliens."],
        ["Field Promotion", "Earn a silver (or better) medal."],
        ["Filthy Rich", "Win a mission with at least 10,000 resources remaining."],
        ["Firebug", "Using only Inferno towers, Win any chapter 4 (or later) mission."],
        ["First Blood", "Kill 1 alien."],
        ["Flawless Victory", "Earn a Gold Medal."],
        ["Full Defense", "Build 50 towers of any type in one mission."],
        ["Full House", "Build and fully upgrade each tower type in one mission."],
        ["Full Potential", "Win a chapter 4 (or later) mission with level 3 towers only and no selling."],
        ["Go Team!", "Earn Gold in a Co-Op Multiplayer mission."],
        ["Go To Your Home", "Use the Core Teleport special weapon (Professor Taylor)."],
        ["Great Ball of Fire", "Build 100 Meteor towers."],
        ["Gun Crazy", "Using only Gun towers, Win any chapter 4 (or later) mission."],
        ["Happy Returns", "Recover a loose core."],
        ["Head Trauma", "Build 100 Concussion towers."],
        ["Hey! That's mine!", "Kill an alien carrying a power core."],
        ["High Voltage", "Build 100 Tesla towers."],
        ["If At First You Don't Succeed, Retry Again", "Use the reload checkpoint option five times in a single mission."],
        ["Indecisive", "Sell 10 towers or more in a single mission."],
        ["Kaboom!", "Build 100 Cannon towers."],
        ["Leadhead", "Build 100 Gun towers."],
        ["Liquidator", "Sell 10 towers."],
        ["Master Builder", "Use the command shuttle to move 6 map sections in Mission 6."],
        ["Master Siege Breaker", "Survive 100 waves on any Super Grinder challenge mode."],
        ["Master Strategist", "Earn 100 Gold Medals on any missions."],
        ["Minimalist", "Using only level 1 towers, Win any Chapter 4 (or later) mission."],
        ["More Please", "Use the Resource Reinforcement Special Weapon (Professor Briel)."],
        ["No Fast Blast", "Use the Temporal Cannon Special Weapon (Colonel Rissler)."],
        ["No Sale", "Win any mission without selling any towers."],
        ["Not So Fast", "Build 100 Temporal towers."],
        ["Now With Sprinkles", "Enable a Tower Augmentation item on any tower."],
        ["Penny Pincher", "Win a mission with at least 5,000 resources remaining."],
        ["Pew Pew", "Build 100 Laser towers."],
        ["Planet Defender", "Earn a silver medal (or better) on all missions in the Story mode."],
        ["Pumped Up Towers", "Use the Tower Overcharge Special Weapon (Advisor Zacara)."],
        ["Retry", "Use the Reload Checkpoint option."],
        ["Salvage Rights", "Kill an alien boss creature. (Juggernaut, Rumbler, Turtle, or Crasher)"],
        ["Shell-shocked", "Using only Cannon towers, Win any chapter 4 (or later) mission."],
        ["Shoot That Guy", "Use the Precision Targeting Special Weapon (Rear Admiral Phillips)."],
        ["Siege Breaker", "Survive 100 waves on Grinder challenge mode on any mission."],
        ["Surplus", "Win a mission with at least 1,000 resources remaining."],
        ["Thanks For Playing!", "Earn Bronze on a Single Player mission."],
        ["The Not-So-Friendly Skies", "Build 100 Missile towers."],
        ["The Path Most Traveled", "Win a Gold medal on mission 19 without using the Command Shuttle."],
        ["Tower Expert", "Build every tower and every upgrade for each tower."],
        ["Untouchable", "Beat a Chapter 4 mission or higher with zero cores captured."],
        ["Warning Shots", "Play a Competitive Multiplayer mission."],
        ["What IS that?", "Inspect 10 aliens."],
        ["Winning Shots", "Earn a Victory in a DG Fighter Multiplayer mission."],
        ["Would You Like a Boost With That?", "Build 100 Boost towers."],
        ["Xenocide", "Kill 50,000 aliens."],
        ["Yellow Beats Green", "Upgrade a level 1 tower to a level 2 tower."],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
