import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bomb-rush-cyberfunk.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1353230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("bomb-rush-cyberfunk");

test("getPlannerData('bomb-rush-cyberfunk') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for bomb-rush-cyberfunk");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Bomb Rush Cyberfunk achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Bomb Rush Cyberfunk achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Bomb Rush Cyberfunk achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Baller", "Score on the basketball court in Versum Hill"],
        ["Brink Terminal Bombed", "Hit all graffiti spots in Brink Terminal"],
        ["Brink Terminal Tricked", "Hit a 14.000.000 score combo in Brink Terminal"],
        ["Flying rats begone", "Chase away all pigeons from High Square in Brink Terminal "],
        ["Funk Star", "Get 6 star heat"],
        ["Hideout Bombed", "Hit all graffiti spots in Hideout"],
        ["Hideout tricked", "Hit a 2.500.000 score combo in Hideout"],
        ["In the flow", "Keep your combo going for 4 minutes "],
        ["Iron legs", "Fall and land on your feet from 8 floors high "],
        ["Mataan Bombed", "Hit all graffiti spots in Mataan"],
        ["Mataan Tricked", "Hit a 16.000.000 score combo in Mataan"],
        ["Millennium Mall Bombed", "Hit all graffiti spots in Millennium Mall"],
        ["Millennium Mall Tricked", "Hit a 12.000.000 score combo in Millennium Mall"],
        ["Millennium Square Bombed", "Hit all graffiti spots on Millennium Square"],
        ["Millennium Square Tricked", "Hit a 1.200.000 score combo in Millennium Square"],
        ["Nice", "69 second manual"],
        ["Now go outside", "Defeat the final boss"],
        ["Photo Generic", "Take 17 pictures of Polo the scuba mascot "],
        ["Pyramid Island Bombed", "Hit all graffiti spots on Pyramid Island"],
        ["Pyramid Island Tricked", "Hit a 15.000.000 score combo in Pyramid Island"],
        ["State of the art", "Cover an entire stage with unique Graffiti pieces"],
        ["Versum Hill Bombed", "Hit all graffiti spots in Versum Hill"],
        ["Versum Hill Tricked", "Hit a 13.000.000 score combo in Versum Hill"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
