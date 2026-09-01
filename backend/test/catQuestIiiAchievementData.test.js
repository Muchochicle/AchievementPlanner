import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cat-quest-iii.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2305840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("cat-quest-iii");

test("getPlannerData('cat-quest-iii') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for cat-quest-iii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Cat Quest III achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Cat Quest III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Cat Quest III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Painful Pawst, Avenged", "Completed the Mama Milka questline!"],
        ["Armeowry Amateur", "Collected 10 different pieces of equipment!"],
        ["Armeowry Enjoyer", "Collected 40 different pieces of equipment!"],
        ["Armeowry Furshionista", "Collected all equipment in the Purribean!"],
        ["Bounty Domiewnator", "Claimed all wanted poster bounties!"],
        ["Commewnity Helper", "Returned all lost items to their rightful owners!"],
        ["Furry Spicy yet Supurr Sweet", "Defeated Captain Takomeowki, the leader of the Spicy Squids!"],
        ["Furst Bounty", "Claimed a wanted poster's bounty!"],
        ["Furst Secret", "Found a hidden item!"],
        ["Happurrly Ever After", "Witnessed the Purrmaid find her Prince Charming!"],
        ["King of Pi-rats No More", "Defeated the Pi-rat King, the leader of the pi-rats, in his hideout."],
        ["Love is Furever", "Completed the Lovepurr dungeon!"],
        ["Meowsterwork", "Completed the Kidd Cat questline!"],
        ["My North Star was Always You", "Reach the secret/good ending: find Aelius all three times on the overworld map and receive all three of his mana upgrades before defeating the Pi-Rat King, then finish the game."],
        ["No Necromeowncy Here!", "Completed the Mage Bonny questline!"],
        ["Once Bitten, 8 Times Shy", "Completed the 8-bit dungeon!"],
        ["Paws Over Tentacles", "Defeated Cathulhu, the menace of the ocean."],
        ["Purroblem Solver", "Completed all 12 sets of puzzle stones!"],
        ["Purrsitively Golden", "Completed the Golden Tower!"],
        ["Purrzzler", "Completed a set of puzzle stones!"],
        ["Quack Goes the Ducky", "Defeated the Duck of Doom, the ruler of the seven seas!"],
        ["Rock on, Supurrstar!", "Defeated Captain Meowtallika, the leader of the Meowtallika crew."],
        ["Secret Purrlunderer", "Found all the hidden items!"],
        ["Ship Furst Mate", "Collected 5 ship blueprints!"],
        ["Ship Mewster", "Collected all the ship blueprints!"],
        ["Ship Miewtenant", "Collected your first ship blueprint!"],
        ["Spellmewster", "Learned all 10 spells!"],
        ["Treasure Expurrlorer", "Opened 80 Treasure Chests!"],
        ["Treasure Pouncer", "Opened 50 Treasure Chests!"],
        ["Treasure Rummeowger", "Opened 20 Treasure Chests!"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
