import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/against-the-storm.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1336490 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 80 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("against-the-storm");

test("getPlannerData('against-the-storm') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for against-the-storm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Against the Storm achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Against the Storm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 officially-described Against the Storm achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Real Challenge", "Win a game on Veteran difficulty (or higher)."],
        ["Abandoned Settlement", "Win a game near the Abandoned Settlement modifier."],
        ["Against All Odds", "Win a game on Viceroy difficulty (or higher)."],
        ["Ancient Battleground", "Win a game near the Ancient Battleground modifier."],
        ["Bandit Camp", "Win a game near the Bandit Camp modifier."],
        ["Barren Lands", "Win a game near the Barren Lands modifier."],
        ["Bat Utopia", "Win a game with 30 Bats, 15 x Bat House, 1 x Academy (Nightwatchers)"],
        ["Beaver Utopia", "Win a game with 30 Beavers, 15 x Beaver House, 1 x Guild House"],
        ["Blood Flower Farmer", "Win a game with 3 active Blood Flower clones on the map."],
        ["Coral Forest", "Win a game on the Coral Forest biome."],
        ["Corrosive Torrent", "Win a game near the Corrosive Torrent modifier."],
        ["Cursed Lands", "Win a game on the Cursed Royal Woodlands biome."],
        ["Dangerous Lands", "Win a game near the Dangerous Lands modifier."],
        ["Defying the Crown", "Win a game without completing any orders."],
        ["Drylands", "Win a game near the Drylands modifier. (Nightwatchers)"],
        ["Efficient Explorer", "Win a game after completing 25 Glade Events."],
        ["Exiled", "Exile 50 villagers in the Manorial Court. (Nightwatchers)"],
        ["Feeding The People", "Ensure all villagers have all their Complex Food needs fulfilled simultaneously."],
        ["Feeling Lucky", "Obtain the Rainpunk Foundry blueprint from an expedition in the Coastal Grove. (Keepers of the Stone)"],
        ["Fertile Meadows", "Win a game near the Fertile Grounds modifier."],
        ["First Real Expedition", "Win a game in the Royal Woodlands biome, and on Settler difficulty (or higher)."],
        ["Fishmen Ritual Site", "Win a game near the Fishmen Ritual Site modifier."],
        ["Flooded Mines", "Win a game near the Flooded Mines modifier."],
        ["Forbidden Lands", "Win a game near the Forbidden Lands modifier."],
        ["Forsaken Gods Temple", "Win a game near the Forsaken Gods Temple modifier."],
        ["Fox Utopia", "Win a game with 30 Foxes, 15 x Fox House, 1 x Tea Doctor"],
        ["Frog Republic", "Upgrade 12 Frog Houses to the maximum level in one game. (Keepers of the Stone)"],
        ["Frog Utopia", "Win a game with 40 Frogs, 20 x Frog House, 1 x Forum. (Keepers of the Stone)"],
        ["Frosts", "Win a game near the Frosts modifier."],
        ["Gathering Storm", "Win a game near the Gathering Storm modifier."],
        ["Green Thumb", "Win a game after building at least 40 Fertile Fields in the Bamboo Flats. (Nightwatchers)"],
        ["Harpy Utopia", "Win a game with 30 Harpies, 15 x Harpy House, 1 x Bath House"],
        ["Haunted Forest", "Win a game near the Haunted Forest modifier."],
        ["Higher Needs", "Fulfill all villagers’ Service needs simultaneously (requires 3 species; Commons excluded)."],
        ["Homesick", "Win a game in 5 years or less."],
        ["Human Utopia", "Win a game with 30 Humans, 15 x Human House, 1 x Temple"],
        ["Into the Forest", "Win after discovering 2 Dangerous Glades before the end of Year 1, on Pioneer difficulty."],
        ["It's Wednesday", "Win a game with Frogs on a Wednesday. (Keepers of the Stone)"],
        ["Land of Greed", "Win a game near the Land of Greed modifier."],
        ["Levitating Monument", "Win a game near the Levitating Monument modifier."],
        ["Like a Machine", "Win a game after completing 3 timed orders."],
        ["Living on Credit", "Buy goods worth 500 Amber on credit on the Black Market. (Nightwatchers)"],
        ["Lizard Utopia", "Win a game with 30 Lizards, 15 x Lizard House, 1 x Clan Hall"],
        ["Lost Colonies", "Win a game near the Ruins modifier."],
        ["Monastery of the Holy Flame", "Win a game near the Monastery of the Holy Flame modifier."],
        ["No Deaths", "Win a game with 0 villagers dying."],
        ["Ominous Presence", "Win a game near the Ominous Presence modifier."],
        ["Overcoming Difficulty", "Win a game on Pioneer difficulty (or higher)."],
        ["Overgrown Library", "Win a game near the Overgrown Library modifier."],
        ["Paradise", "Fulfill all villagers’ needs simultaneously (requires 3 species; Commons excluded)."],
        ["Peaceful Life", "Keep the Fluffbeak's well-being at 75% or higher for at least 20 minutes. (Nightwatchers)"],
        ["Petrified Necropolis", "Win a game near the Petrified Necropolis modifier."],
        ["Prestigious Expedition", "Win a game on Prestige 10 difficulty (or higher)."],
        ["Refinery", "Win with: 1 x Mine, 1 x Smelter, 1 x Smithy, on the difficulty: Veteran."],
        ["Riverlands", "Win a game near the Riverlands modifier. (Nightwatchers)"],
        ["Royal Outpost", "Win a game near the Royal Outpost modifier."],
        ["Ruined Armory", "Win a game near the Ruined Armory modifier."],
        ["Ruins", "Win a game after taking care of 10 ruins found in glades."],
        ["Serving Ale", "Win with: 1 x Small Farm, 1 x Brewery, 1 x Tavern, on the difficulty: Veteran."],
        ["Shady Dealings", "Complete 50 transactions on the Black Market. (Nightwatchers)"],
        ["Silent Dominion", "Win a game near the Silent Dominion modifier. (Nightwatchers)"],
        ["Sparkdew Crystals", "Win a game near the Sparkdew Crystals modifier."],
        ["Statue of the Forefathers", "Win a game near the Statue of the Forefathers modifier."],
        ["Strider Rider", "Send out 100 expeditions in the Coastal Grove. (Keepers of the Stone)"],
        ["Taking Action", "Win a game after completing 5 Glade Events."],
        ["The Ashen Thicket", "Win a game on the Ashen Thicket biome. (Keepers of the Stone)"],
        ["The Bamboo Flats", "Win a game on the Bamboo Flats biome. (Nightwatchers)"],
        ["The Coastal Grove", "Win a game on the Coastal Grove biome. (Keepers of the Stone)"],
        ["The Emberwright", "Create 20 Experimental Cornerstones in the Ashen Thicket. (Keepers of the Stone)"],
        ["The Marshlands", "Win a game on the The Marshlands biome."],
        ["The Queen's Chosen", "Win a game on Prestige 20 difficulty (or higher)."],
        ["The Rocky Ravine", "Win a game on the Rocky Ravine biome. (Nightwatchers)"],
        ["The Scarlet Orchard", "Win a game on the Scarlet Orchard biome."],
        ["The Search Continues", "Send out 12 expeditions in one game in the Coastal Grove. (Keepers of the Stone)"],
        ["The Weakest Link", "Exile 15 villagers in the Manorial Court in one game. (Nightwatchers)"],
        ["Trade Baron", "Win a game after completing 20 trade routes."],
        ["Treasure", "Win a game after opening or sending 20 Abandoned Caches to the Citadel."],
        ["Untamed Wilds", "Win a game near the Untamed Wilds modifier."],
        ["Victory Through Prosperity", "Earn 14 Reputation Points through Resolve in a single game."],
        ["Watchtower", "Win a game near the Watchtower modifier."],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
