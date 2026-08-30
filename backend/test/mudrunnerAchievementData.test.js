import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mudrunner.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 675010 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mudrunner");

test("getPlannerData('mudrunner') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for mudrunner");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every MudRunner achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every MudRunner achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 MudRunner achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Anthropologist", "Find and visit 2 fluorescent flower meadows in the \"Downhill\" at night in one game"],
        ["Beautiful Tan", "Travel 10 kilometers along the shorelines of American Wilds"],
        ["Blind Navigation", "Finish a level without reaching any Watchpoints in Single Player mode"],
        ["Caravan", "Load up two trucks and winch them together to reach Lumber Mill simultaneously"],
        ["Carrier", "Load up Type A vehicle in the trunk of your truck and drive it for 200 meters in total"],
        ["Climb a Hill", "Complete all bonus objectives in the challenge \"Climb a hill\""],
        ["Climber", "Reach the top of any 2 of 3 mountains in the \"Island\" in one game"],
        ["Cooperation", "Pass 5 log ownerships to other players"],
        ["Crane Operator", "Complete all bonus objectives in the challenge \"Crane Operator\""],
        ["Crane Operator II", "Complete all bonus objectives in the challenge \"Crane Operator II\""],
        ["Cross a River", "Complete all bonus objectives in the challenge \"Cross a River\""],
        ["Crossing", "Complete the \"Crossing\" in Hardcore mode"],
        ["Crossing Settler", "Unlock all Garages in the \"Crossing\""],
        ["David", "Use winch in Pull mode to tow another vehicle for 50 meters in total"],
        ["Delivery Mission", "Complete all bonus objectives in the challenge \"Delivery Mission\""],
        ["Deluge", "Complete the \"Deluge\" in Hardcore mode"],
        ["Deluge Settler", "Unlock all Garages in the \"Deluge\""],
        ["Diver", "Drive through water so that your vehicle is submerged and then escape without the engine stalling"],
        ["Downhill", "Complete the \"Downhill\" in Hardcore mode"],
        ["Downhill Settler", "Unlock all Garages in the \"Downhill\""],
        ["Drive Carefully", "Deliver the load without receiving any damage and switching to other trucks"],
        ["Driver", "Travel 100 kilometers"],
        ["Eco-friendly", "Burn 100 litres of fuel without releasing accelerator"],
        ["Explore Crossing", "Reach all Watchpoints in the \"Crossing\""],
        ["Explore Deluge", "Reach all Watchpoints in the \"Deluge\""],
        ["Explore Downhill", "Reach all Watchpoints in the \"Downhill\""],
        ["Explore Island", "Reach all Watchpoints in the \"Island\""],
        ["Explore Seashore", "Reach all Watchpoints in the \"Seashore\""],
        ["Explore The Bog", "Reach all Watchpoints in \"The Bog\""],
        ["Farmer", "Squelch 50 pumpkins in total"],
        ["Fisherman", "Winch a disabled vehicle out of the water with another vehicle"],
        ["Forester", "Finish a level without using the Navigation map in Single Player mode"],
        ["Freight-Ex", "Complete all bonus objectives in the challenge \"Freight-Ex\""],
        ["Fuel Tanker", "Fill up other player's trucks with 1000 litres of fuel in total"],
        ["I Have All I Need", "Finish a level without changing any vehicle addons in Single Player mode"],
        ["Island", "Complete the \"Island\" in Hardcore mode"],
        ["Island Settler", "Unlock all Garages in the \"Island\""],
        ["Lumberjack", "Knock down 100 trees it total"],
        ["Master Logger", "If capsized while delivering load, pick and pack scattered logs back"],
        ["Mechanic", "Repair other player trucks for 1000 points in total"],
        ["Mushroomer", "Squelch 50 mushrooms in total"],
        ["My Only Love", "Finish a level using only one vehicle in Single Player mode"],
        ["Night Safari", "Complete all bonus objectives in the challenge \"Night Safari\""],
        ["Old Still Good", "Fill a particular Lumber Mill by using Type B-130 only"],
        ["Repair & Refuel", "Complete all bonus objectives in the challenge \"Repair & Refuel\""],
        ["Rescue Mission", "More than 150 meters away from any Garage, tow a fully damaged truck to a Garage"],
        ["Seashore", "Complete the \"Seashore\" in Hardcore mode"],
        ["Seashore Settler", "Unlock all Garages in the \"Seashore\""],
        ["Sisyphus", "Drive with the parking brake engaged for 200 meters in total"],
        ["Size Does Matter", "Fill a particular Lumber Mill by delivering Long Logs only"],
        ["Size Doesn't Matter", "Fill a particular Lumber Mill by delivering Short Logs only"],
        ["Speed Racer", "Reach speed of 40 km/h with a loaded truck"],
        ["Student Driver", "Receive 500 or more damage points from a single impact"],
        ["Stunt Driver", "Make a quick 360 degree roll over the roof"],
        ["The Bog", "Complete \"The Bog\" in Hardcore mode"],
        ["The Bog Settler", "Unlock all Garages in \"The Bog\""],
        ["The Expedition", "Complete all bonus objective in challenge \"The Expedition\""],
        ["The Rig", "Complete all bonus objectives in the challenge \"The Rig\""],
        ["Trophy-raid", "Reach all Watchpoints on any level with the Type A-3151 vehicle"],
        ["Unstoppable", "Load up a truck and drive to an Lumber Mill without releasing accelerator"],
        ["Visit Grandma", "Complete all bonus objectives in the challenge \"Visit Grandma\""],
        ["World Cruise", "Get in Type A-968m and drive 400 meters or more away"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
