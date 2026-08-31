import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/aven-colony.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 484900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("aven-colony");

test("getPlannerData('aven-colony') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for aven-colony");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Aven Colony achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Aven Colony achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Aven Colony achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Thousand", "Get 1000 colonists in the same colony"],
        ["All is Revealed", "Reveal 95% of the fog on an expedition map"],
        ["Arctic Expansion", "Reach a population of 350 colonists in Azara Falls by the end of Sol 5 (in campaign mode at Normal difficulty or higher)"],
        ["Arido Champion", "Complete the Arido Mesa campaign mission on Normal difficulty or higher"],
        ["Azara Champion", "Complete the Azara Falls campaign mission on Normal difficulty or higher"],
        ["Blasted!", "Destroy 50 Creep Spores before they reach your colony"],
        ["Booster Shot", "Enable a Colony Boost"],
        ["Chancellor!", "Attain the rank of Chancellor"],
        ["Cleansed", "Activate a Cleansing Artifact"],
        ["Commander!", "Attain the rank of Commander"],
        ["Consumerism", "Build 10 Retail Centers"],
        ["Dark and Stormy Night", "Protect the colony from 100 lightning strikes"],
        ["Early Bird", "Bring 20 units of Sandworm Meat back to the colony"],
        ["Eden's Champion", "Complete the Eden Crater campaign mission on Normal difficulty or higher"],
        ["Ellis Island", "Accept 2000 immigrants"],
        ["Empowered", "Activate an Empowerment Artifact"],
        ["Expedition Tycoon", "Keep 5 Expedition Centers operational simultaneously"],
        ["Farm Life", "Build 100 farming structures"],
        ["Fire Sale", "Recycle 100 structures"],
        ["Heisenberg", "Distribute a total of 500 enhancers"],
        ["High Commander!", "Attain the rank of High Commander"],
        ["Hyla's Champion", "Complete the Hyla's Crescent campaign mission on Normal difficulty or higher"],
        ["I'm Losing My Mine", "Deplete 10 Mineral Deposits"],
        ["Jack of All Trades", "Complete 100 trade contracts"],
        ["Kelori Champion", "Complete the Kelori Strand campaign mission on Normal difficulty or higher"],
        ["Kid in an Elevator", "Enable 10 Social Policies or Powers simultaneously"],
        ["Lewis & Clark", "Explore 50 points of interest on expedition maps"],
        ["Megalopolis", "Own 3 fully functional megastructures in the same colony simultaneously"],
        ["Park Ranger", "Own 10 fully functional Parks in the same colony simultaneously"],
        ["President!", "Attain the rank of Expedition President"],
        ["Rescuer", "Rescue 25 lost explorers"],
        ["Rigged Elections", "Win 5 referendum elections in a row with at least 90% of the vote"],
        ["Sandy Gulch Champion", "Complete the Sandy Gulch campaign mission on Normal difficulty or higher"],
        ["Shielded", "Activate a Shielding Artifact"],
        ["Sol Survivor", "Survive for 50 sols in any mission"],
        ["Solar Tycoon", "Build 200 Solar Panels"],
        ["Sorry, We Don't Serve Miners", "Build 100 Mines or Laser Mines"],
        ["Speed Runner", "Complete Vanaar by the end of Sol 5 (in campaign mode at Normal difficulty or higher)"],
        ["Sugar Tooth", "Manufacture 1000 Candy"],
        ["Tenari Champion", "Complete the Tenari Glacier campaign mission on Normal difficulty or higher"],
        ["The Great Depression", "Have 200 colonists unemployed simultaneously"],
        ["The Upper Grade", "Complete 100 building upgrades"],
        ["This is Madness!", "Win a campaign mission on Insane difficulty"],
        ["United", "Activate a Unity Artifact"],
        ["Valley of Death Champion", "Complete the Valley of Death campaign mission on Normal difficulty or higher"],
        ["Vanaar Champion", "Complete the Vanaar campaign mission on Normal difficulty or higher"],
        ["You Have Been Warned", "Receive 10 warnings from Commissioner Veronika"],
        ["Zombies!", "Get 50 colonists infected by the plague"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
