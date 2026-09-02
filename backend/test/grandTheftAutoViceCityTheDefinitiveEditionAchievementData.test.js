import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grand-theft-auto-vice-city-the-definitive-edition.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1546990 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("grand-theft-auto-vice-city-the-definitive-edition");

test("getPlannerData('grand-theft-auto-vice-city-the-definitive-edition') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for grand-theft-auto-vice-city-the-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Grand Theft Auto: Vice City - The Definitive Edition achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Grand Theft Auto: Vice City - The Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Grand Theft Auto: Vice City - The Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Heat from Little Havana", "Complete the \"Trojan Voodoo\" mission."],
        ["Bloodstained Hands", "Earn the Butcher criminal rating."],
        ["Born in the 80’s", "Listen to every radio music station at least once."],
        ["Bull in a China Shop", "Cause $1,000,000 in property damage."],
        ["Catch Me if You Can", "Achieve a six-star wanted level."],
        ["Chauffeur", "Complete the \"Publicity Tour\" mission."],
        ["Chopper’d Up", "Kill all hostile NPCs during the mission \"Demolition Man\" using the RC chopper’s blades."],
        ["City Sleuth", "Find 100 hidden packages."],
        ["Daredevil", "Complete 36 unique jumps."],
        ["Don't Need Roads", "Hit maximum speed in a Deluxo."],
        ["Done it All", "Earn 100% completion."],
        ["Grand Theft Auto", "Retrieve every wanted vehicle at Sunshine Autos Import Garage."],
        ["Greasy Palms", "Use a police bribe to reduce your wanted level."],
        ["Gun for Hire", "Complete all assassination contracts."],
        ["High Quality H2O", "Extinguish 10 fires."],
        ["I'm Famous!", "Earn the Stuff of Legends media attention rank."],
        ["Iron-y", "Kill the property developer with a golf club during the mission 'Four Iron'."],
        ["Just Like the Real Thing", "Win the RC Bandit Race."],
        ["Keepie-Uppy Okie Dokie", "Earn a high score of 5 with the Keepie-Uppy Beach Ball."],
        ["Kingpin", "Unlock all achievements."],
        ["Legal Counsel", "Complete the \"Riot\" mission."],
        ["Life of the Party", "Complete the \"All Hands on Deck!\" mission."],
        ["Mischief Managed", "Complete the \"Keep Your Friends Close...\" mission."],
        ["Not my First Time", "Complete mission \"G-Spotlight\" without falling from the rooftops."],
        ["One is Better Than Two", "Perform a 30 second wheelie."],
        ["Pie Guy", "Deliver 10 pizzas."],
        ["Point A to Point B", "Drop off 25 passengers driving the taxi."],
        ["Running Rampant", "Complete Vigilante mission level 12."],
        ["Salutations My Little Friend", "Use the M4 to take out Diaz during the mission 'Rub Out'."],
        ["Somebody Call the Wambulance?", "Complete Paramedic Mission level 12."],
        ["South American Connection", "Complete the \"Supply & Demand\" mission."],
        ["Take the Cannoli", "Earn the Godfather criminal rating."],
        ["Tommy Two-Wheels", "Complete the \"Hog Tied\" mission."],
        ["Vice City Mogul", "Own 10 properties."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
