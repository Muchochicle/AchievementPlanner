import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/guacamelee-super-turbo-championship-edition.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 275390 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("guacamelee-super-turbo-championship-edition");

test("getPlannerData('guacamelee-super-turbo-championship-edition') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for guacamelee-super-turbo-championship-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Guacamelee! Super Turbo Championship Edition achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Guacamelee! Super Turbo Championship Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Guacamelee! Super Turbo Championship Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Next-gen!!\"", "Start a New Game on Save Slot #2"],
        ["Boom-Shack-Calaca", "Defeat Calaca"],
        ["Cock of the Walk", "Defeat an enemy using the Pollo Bomb"],
        ["Combo Nerd", "Achieve a 125 Hit Combo"],
        ["Do or Do Not", "Complete the first Combo Chicken Challenge"],
        ["El Savior", "Collect all six Orbs (hidden in Agave Field, Caverna del Pollo, El Infierno, Forest del Chivo, Sierra Morena and Tule Tree - the last drops after defeating Calaca) to save Lupita and see the true ending. Needs the Goat Fly ability and very hard platforming."],
        ["Flawless", "Defeat an arena without taking any damage"],
        ["Got to catch them all", "Find an orb"],
        ["Heavyweight", "Earn a Bronze Medal in all Infierno challenges"],
        ["I Have The Power", "Purchase 20 Upgrades from the Shop"],
        ["I swat you", "Defeat a Chupacabra using only Slam"],
        ["Last Straw", "Break Uay Chivo's fake statue in the Tule Tree"],
        ["Licking his Wounds", "Defeat Jaguar Javier"],
        ["Lore Master", "Complete All Side Quests"],
        ["Main Event", "Defeat a Skeleton Luchador"],
        ["No Encore!", "Defeat El Trio de la Muerte"],
        ["Nooks and Crannies", "Find 100% of the hidden items in a single area"],
        ["Pollo Power", "Become a Chicken"],
        ["Poncho'd Out", "Complete the Combo Chicken quest"],
        ["Power Within", "Complete Uay Chivo's INTENSO training"],
        ["Snuffed Out", "Defeat Flame Face"],
        ["That was Hard Mode?", "Defeat the game on Hard mode"],
        ["That was INTENSE", "Kill 20 Enemies in a single INTENSO sequence"],
        ["That's one big Gato Frito", "Kill the Alebrije"],
        ["The Devil wears Revenge!", "Defeat Calaca with full health in Diablo's Suit"],
        ["The Never Ending Combo", "Achieve a 200 Hit Combo"],
        ["Viva La Resurrección", "Become a Luchador"],
        ["Who put these here???", "Achieve 100% completion in all areas"],
        ["World Champion", "Earn a Gold Medal in all Infierno challenges "],
        ["X'tabay-Bye", "Redeem X'tabay"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
