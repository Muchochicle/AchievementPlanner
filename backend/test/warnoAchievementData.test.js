import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warno.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1611600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("warno");

test("getPlannerData('warno') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for warno");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every WARNO achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every WARNO achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 WARNO achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Airdrop Denied", "Complete Closing the Trap campaign with PACT"],
        ["Allons! Allons!", "Complete Fulda Gap campaign with NATO"],
        ["Breakthrough", "Complete Fulda Gap campaign with PACT"],
        ["Brotherhood Under Fire", "Complete Operation Survivors on any difficulty"],
        ["Captain", "Defeat medium AI in skirmish mode"],
        ["Civil War", "Complete Bruderkrieg campaign with NATO"],
        ["Colonel", "Defeat very hard AI in skirmish mode"],
        ["Companiable", "Win a 4v4 multiplayer game"],
        ["Conqueror", "Win a multiplayer game in Conquest mode"],
        ["Delayed Retribution", "Complete Operation Delayed Retribution on any difficulty"],
        ["Destructor", "Win a multiplayer game in Destruction mode"],
        ["Elite", "Reach Level 20"],
        ["En garde!", "Complete operation The Dieburg Salient in any difficulty"],
        ["Fallen Kingdom", "Complete Armored Fury campaign with PACT"],
        ["Faster, stronger", "Complete Four Days to the Weser campaign with PACT"],
        ["For Queen and Country", "Complete operation Hold Until Relieved in any difficulty"],
        ["Glory or Attrition", "Complete Operation Glory or Attrition on any difficulty"],
        ["Hamburg Hustle", "Complete Operation Marauders on any difficulty"],
        ["Highway to Hell", "Complete Highway 66 campaign with NATO"],
        ["Horsemen of the Apocalypse", "Complete operation Black Horse's Last Stand on any difficulty"],
        ["It takes two men to make one brother", "Complete Bruderkrieg campaign with PACT"],
        ["It's a Trap!", "Complete operation The Kitzingen Ruse on any difficulty"],
        ["Keep your friends close...", "Add a friend"],
        ["Kulachniy Boy", "Complete The Left Hook campaign with PACT"],
        ["Lieutenant", "Defeat easy AI in skirmish mode"],
        ["Major", "Defeat hard AI in skirmish mode"],
        ["Major General", "Defeat hardest AI in skirmish mode"],
        ["March of the Tankmen", "Complete operation Red Juggernaut on any difficulty"],
        ["Operation Tauroggen", "Complete Airborne Assault campaign with PACT"],
        ["Ordeal by fire", "Complete Operation Running the Gauntlet on any difficulty"],
        ["Party Animal", "Win a 10v10 multiplayer game"],
        ["Resilience", "Complete Closing the Trap campaign with NATO"],
        ["Rookie", "Reach Level 5"],
        ["Siegfried's Wrath", "Complete Operation Siegfried's Wrath on any difficulty"],
        ["Steel Beasts", "Complete operation Backhand Blow on any difficulty"],
        ["Teammate", "Win a 3v3 multiplayer game"],
        ["The Anvil", "Complete Holding Attack campaign with PACT"],
        ["The Hammer", "Complete Holding Attack campaign with NATO"],
        ["The Hydra", "Complete Operation The Hydra on any difficulty"],
        ["The Kassel Airlift", "Complete Airborne Assault campaign with NATO"],
        ["The Mother Road", "Complete Highway 66 campaign with PACT"],
        ["Tides of war", "Complete Four Days to the Weser campaign with NATO"],
        ["Trained", "Reach Level 10"],
        ["Twilight of the Gods", "Complete operation Götterdammerung on any difficulty"],
        ["Vanguard", "Complete operation Sledgehammer in any difficulty"],
        ["We once shared this crown", "Complete Armored Fury campaign with NATO"],
        ["When the Winged Hussars arrived", "Complete Operation The Winged Hussars on any difficulty"],
        ["Wingman", "Win a 2v2 multiplayer game"],
        ["With a little help from my friends", "Complete The Left Hook campaign with NATO"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
