import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/botany-manor.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1425350 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("botany-manor");

test("getPlannerData('botany-manor') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for botany-manor");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Botany Manor achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Botany Manor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Botany Manor achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art Lover", "Take a close look at the artwork around the manor."],
        ["Boom", "Trigger the bright flash while experimenting with the Fulguria."],
        ["Botanical Researcher", "Complete every page in the Herbarium"],
        ["Brook Chalice", "Grow Brook Chalice"],
        ["Clean and Tidy", "Flush the toilet."],
        ["Crack", "Crack open the Phoenix Of The Forest seed."],
        ["Cradle Fern", "Grow the Cradle Fern"],
        ["Fixer Upper", "Repair the broken stairs in the Orangery."],
        ["Flower Arranging", "Discover the flower-arranging room."],
        ["Fool's Emerald", "Grow the Fool's Emerald"],
        ["Frogger", "Cross the pond using the lilypads."],
        ["Fulguria", "Grow the Fulguria"],
        ["Grandmother's Vault", "Open Grandmother's vault."],
        ["Green Thumbs", "Have several plants growing at the same time."],
        ["Help?", "Tap out 'SOS' on the telegraph."],
        ["History Sleuth", "Find the hidden priest hole."],
        ["In The Bin", "Tip a grown flower out into the bin."],
        ["Let Me In!", "Try (and fail) to open a locked door."],
        ["Lockpicker", "Pick a lock."],
        ["Mountaineer", "Reach the top of the tower."],
        ["Nightfall", "Grow the Nightfall"],
        ["Oscilette", "Grow the Oscilette"],
        ["Phoenix Of The Forest", "Grow the Phoenix Of The Forest"],
        ["Photographer", "Take a picture of a plant."],
        ["Piano Woman", "Play the harpsichord."],
        ["Pixie Tears", "Grow the Pixie Tears"],
        ["Quack Quack", "Find a rubber duck."],
        ["Quack Quack Quack Quack!", "Find every rubber duck hidden around the manor."],
        ["Sapphire Gloom", "Grow the Sapphire Gloom"],
        ["Springdance Shrub", "Grow the Springdance Shrub"],
        ["Take A Break", "Sit down on a chair."],
        ["Taking A Nap", "Sit on a bench for a long time."],
        ["The End", "Reach the end of the game"],
        ["Who Needs A Plumber?", "Solve the plumbing puzzle by connecting the pipes."],
        ["Windmill Wort", "Grow the Windmill Wort"],
        ["Wolfglove", "Grow the Wolfglove"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
