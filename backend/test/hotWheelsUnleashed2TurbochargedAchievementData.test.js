import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hot-wheels-unleashed-2-turbocharged.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2051120 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hot-wheels-unleashed-2-turbocharged");

test("getPlannerData('hot-wheels-unleashed-2-turbocharged') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for hot-wheels-unleashed-2-turbocharged");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every HOT WHEELS UNLEASHED 2 - Turbocharged achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every HOT WHEELS UNLEASHED 2 - Turbocharged achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 HOT WHEELS UNLEASHED 2 - Turbocharged achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…Is half done", "Get half of the Collection vehicles (DLC excluded)."],
        ["A little nest egg", "Earn 100,000 Coins in total."],
        ["Acrobat", "Perform 20 jumps with any vehicle."],
        ["Bel Paese", "Win 3 events in Made in Italy Career mode."],
        ["Better too much", "Equip any duplicate vehicle with 7 skills."],
        ["Beyond the limit", "Upgrade the type of any vehicle."],
        ["Can you keep a secret?", "Obtain a 'Secret' vehicle."],
        ["Challenge accepted!", "Accept the challenge of a Challenge Event in Career mode."],
        ["Drift champ", "Complete 10 races in Drift Master mode."],
        ["Drifting teacher", "Drift for 500,000 centimeters (196,850 inches) in total."],
        ["Eagle eye", "Get all the Super Treasure Hunt vehicles."],
        ["Extra gear", "Equip any vehicle with a skill."],
        ["Extreme conditions", "Complete the goal of an Extreme Event in Career mode."],
        ["For the family", "Win 1 Quick Race in Toretto's Garage (not unlockable in Online and Split Screen modes)."],
        ["Globetrotter", "Complete a race in every environment (except the Track Room)."],
        ["I want to believe", "Win 1 Quick Race in Hangar 68 (not unlockable in Online and Split Screen modes)."],
        ["I'm in charge here!", "Complete all goals of an area in Career mode."],
        ["Ignition", "Upgrade the Tier of an AcceleRacers DLC vehicle to Ultimate."],
        ["Immortal", "Complete 10 races in Elimination mode."],
        ["International license", "Complete 10 races in any online mode."],
        ["It's me you have to beat", "Complete 10 races in Quick Race mode."],
        ["Italian heart", "Upgrade the category of a Made in Italy DLC vehicle to Ultimate."],
        ["Like lightning!", "Use the Boost for 30 minutes in total."],
        ["Look, Mom! No track!", "Complete 5 races in Waypoint mode."],
        ["Magic trick", "Reach a new Prestige level."],
        ["Masterful!", "Reach the podium 25 times in any mode (not unlockable in Split Screen mode)."],
        ["Mission complete", "Complete your first Unleashed Mission."],
        ["Now try online", "Win a Quick Race on Hard AI difficulty."],
        ["Out of control", "Perform 10 lateral dashes with any vehicle."],
        ["Out of this world", "Win 3 events in Alien Encounters Career mode."],
        ["Perfectionist", "Upgrade the type of a vehicle to Ultimate."],
        ["Pizza, pasta, and engines", "Win 1 Quick Race through the Italian Village (not unlockable in Online and Split Screen modes)."],
        ["Rookie", "Complete the tutorial."],
        ["Shapeshifter", "Reach the podium with a Rocket, Off-Road, Balanced, Drifter, Swift, and Heavy Duty vehicle."],
        ["Shopping time!", "Make a purchase at the Shop."],
        ["Solo", "Complete a Quick Race in Multiplayer mode."],
        ["Spendthrift", "Buy 25 vehicles at the Shop."],
        ["Spin the wheel", "Spin the Hot Wheels™ Spin for the first time."],
        ["Spoiled for choice", "Buy all the skills of a vehicle."],
        ["Stage animal", "Validate a track in Track Builder mode."],
        ["Terror of the road", "Reach the podium 100 times (not unlockable in Split Screen mode)."],
        ["The Nitro Bot", "Defeat the fifth Boss in Career mode."],
        ["The Octopus", "Defeat the first Boss in Career mode."],
        ["The Scorpion", "Defeat the second Boss in Career mode."],
        ["The Speed of Silence", "Win 3 events in AcceleRacers Career mode."],
        ["The Terrordactyl", "Defeat the third Boss in Career mode."],
        ["The Ultimate Race", "Win 1 Quick Race in the AcceleDrome (not unlockable in Online and Split Screen modes)."],
        ["The Yeti", "Defeat the fourth Boss in Career mode."],
        ["They're among us", "Upgrade the category of an Alien Encounters DLC vehicle to Ultimate."],
        ["Too Fast", "Upgrade the Tier of a Fast & Furious DLC vehicle to Ultimate."],
        ["Too Furious", "Win 3 events in Fast & Furious Career mode."],
        ["Tools of the trade", "Get all the Track Builder Modules."],
        ["Versatile riding", "Complete a race in every offline mode."],
        ["Well begun…", "Complete the Unleashed Goal of an Event in Career mode."],
        ["You're good at this!", "Reach level 20."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
