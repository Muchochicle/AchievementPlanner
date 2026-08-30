import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-new-lands.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 496300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("kingdom-new-lands");

test("getPlannerData('kingdom-new-lands') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-new-lands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Kingdom: New Lands achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Kingdom: New Lands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Kingdom: New Lands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Hands on Deck", "Build the boat and escape the fifth land before day 30."],
        ["Birth of a Reign", "Win your first game."],
        ["By the Seventh Day I Cleared an Acre.", "By the seventh day you cleared an acre of land."],
        ["By the Sixth Day I Was Rich.", "By the sixth day you had more gold than you could carry."],
        ["Crowned", "Escape the final land and earn the crown."],
        ["Day C", "Survive day 100."],
        ["Day L", "Survive day 50."],
        ["Day LX", "Survive day 60."],
        ["Day LXX", "Survive day 70."],
        ["Day LXXX", "Survive day 80."],
        ["Day V", "Survive day 5."],
        ["Day X", "Survive day 10."],
        ["Day XC", "Survive day 90."],
        ["Day XL", "Survive day 40."],
        ["Day XLV", "Survive day 45."],
        ["Day XV", "Survive day 15."],
        ["Day XX", "Survive day 20."],
        ["Day XXV", "Survive day 25."],
        ["Day XXX", "Survive day 30."],
        ["Day XXXV", "Survive day 35."],
        ["For Five Days I Turned the Other Cheek.", "For five days you didn't kill anything."],
        ["Heraldic Achievement", "Have a reign that spans five lands."],
        ["Interior Decoration", "Earn some antlers to decorate your coat of arms."],
        ["Maiden Voyage", "Build the boat and escape the first land before day 10."],
        ["On the Eighth Day I Fumbled.", "Until the eighth day you never dropped a coin on the ground."],
        ["On the First Day I Built an Army.", "On the first day you recruited eight archers."],
        ["On the Fourth Day We Had a Feast.", "By the fourth day you hunted 20 or more deer."],
        ["On the Ninth Day I First Ran.", "Until the ninth day you never galloped."],
        ["On the Second Day I Got a Gift.", "On the second day you got free walls."],
        ["On The Tenth Day We Fought Back!", "By the tenth day you destroyed a portal."],
        ["On the Third Day I Lit a Fire.", "On the third day you started your camp."],
        ["Reef the Main", "Build the boat and escape the fourth land before day 25."],
        ["Smooth Sailing", "Build the boat and escape the second land before day 15."],
        ["Stormy Waters", "Build the boat and escape the third land before day 20."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
