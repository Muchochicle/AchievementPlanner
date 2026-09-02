import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chants-of-sennaar.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1931770 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("chants-of-sennaar");

test("getPlannerData('chants-of-sennaar') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for chants-of-sennaar");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Chants of Sennaar achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Chants of Sennaar achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Chants of Sennaar achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A good beginning", "Rebuild a first link"],
        ["A great audience", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["A Link to the Past", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["A new dawn", "Reach the Garden"],
        ["Alchemists Express", "Ride the cable car in the Alchemists' section."],
        ["Cable guy", "Activate all Terminals"],
        ["Champollion", "Validate all glyphs in the game"],
        ["Fashion victim", "Leave the Level 2 Armory wearing the wrong disguise after the Call has been made."],
        ["Feels like springtime", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["For its own good", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["Free at last", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["Half the way", "Rebuild half of the links"],
        ["I did it", "Reach the game's 'bad' ending."],
        ["In this together", "Reach the game's 'good' ending, having reconnected all the peoples of the tower."],
        ["One last step", "Reach Exile"],
        ["Open door", "Rebuild the mutual understanding between one specific pair of the tower's peoples - one of the six possible pairings - described here spoiler-free."],
        ["Peace walker", "Rebuild all links in the game"],
        ["Rascal", "Ring the Abbey bell three times (Level 1)."],
        ["Scholar", "Validate half of the game's glyphs"],
        ["That's the spirit", "Fill in the Journal's first page"],
        ["The darkness", "Reach the Galleries"],
        ["The great escape", "Reach the Frontier"],
        ["The Preacher's fate", "Discover the Preacher's corpse in the underground maze beneath the Abbey graveyard (Level 1)."],
        ["True G3M4R", "Win both of the mini-games in the Gardens (Level 3)."],
        ["Welcome to the Tower", "Reach the Abbey"],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
