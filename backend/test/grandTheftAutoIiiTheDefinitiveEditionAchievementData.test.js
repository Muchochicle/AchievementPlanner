import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grand-theft-auto-iii-the-definitive-edition.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1546970 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("grand-theft-auto-iii-the-definitive-edition");

test("getPlannerData('grand-theft-auto-iii-the-definitive-edition') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for grand-theft-auto-iii-the-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every Grand Theft Auto III - The Definitive Edition achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Grand Theft Auto III - The Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 Grand Theft Auto III - The Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Gift from the King", "Complete the \"Kingdom Come\" mission."],
        ["A Marked Man", "Complete \"Last Requests\"."],
        ["By a Mile", "Complete the \"Turismo\" race in under 180 seconds."],
        ["Come Out to Play-y-y-y", "Kill 25 gang members with melee weapons / fists."],
        ["Dirty Money", "Amass a fortune of $1,000,000."],
        ["Disposing of the Evidence", "Crush a car at the junkyard."],
        ["Escape Artist", "Use 20 police bribes."],
        ["First Day on the Job", "Complete \"Luigi's Girls\"."],
        ["Full Artillery", "Use every weapon in the game at least once."],
        ["Furious First Responder", "Complete Paramedic, Firefighter, Vigilante."],
        ["Going Rogue", "Kill 15 criminals during one Vigilante mission."],
        ["Got This Figured Out", "Use a Coach to pick up all 8 girls in the mission 'The Fuzz Ball'."],
        ["Is That All You've Got?", "Achieve 100% completion."],
        ["King of Liberty City", "Unlock all achievements."],
        ["Liberty City Minute", "Survive with less than 10 hp for 1 minute."],
        ["Liberty City Secrets", "Collect 100 hidden packages."],
        ["Man Toyz", "Complete every RC Toyz mission."],
        ["Mob Boss", "Keep both Mafia members alive during the mission 'Triads and Tribulations'."],
        ["Not So Fast", "Complete \"The Exchange\"."],
        ["Offshore Delivery", "Complete \"A Drop in the Ocean\"."],
        ["Planned Ahead", "Kill Chunky Lee Chong using a car rigged with a bomb."],
        ["Playing Doctor", "Complete Paramedic level 12."],
        ["Right-hand Man", "Earn a criminal rating of 2,500."],
        ["Splish Splash", "Extinguish 15 fires during a single Fire Truck mission."],
        ["Street Sweeper", "Waste 100 gang members."],
        ["Wheels Up", "Complete 20 unique jumps."],
        ["Where To?", "Complete 100 taxi fares."],
        ["Without a Scratch", "Deliver Mike Lips' car without a scratch on your first attempt (mission 'Mike Lips Last Lunch')."],
        ["Wreckless Driving", "Perform a perfect insane stunt."],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
