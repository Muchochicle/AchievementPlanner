import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/riptide-gp2.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 257790 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("riptide-gp2");

test("getPlannerData('riptide-gp2') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for riptide-gp2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every Riptide GP2 achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Riptide GP2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 Riptide GP2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aggressive Racer", "Earn 3 stars in every Elimination event."],
        ["Amateur", "Get 1 star in all Career events."],
        ["Big Fish", "Win 50 Online matches."],
        ["By A Nose", "Win an Online race event by less than a tenth of a second."],
        ["Call Me Picasso", "Paint your Hydro Jet."],
        ["Champion", "Get 3 stars in all Career events."],
        ["Collector", "Buy 8 Hydrojets."],
        ["Destructive Tendencies", "Smash a bridge in the Factory Shift event."],
        ["Enthusiast", "Buy 4 Hydrojets."],
        ["Flying High", "Jump over 200 meters."],
        ["Freeky Stylie", "Unlock a level 10 Stunt."],
        ["I Did It!", "Place 1st in any event."],
        ["It's a Secret", "Find the hidden easter egg."],
        ["Mechanic", "Upgrade a Hydrojet."],
        ["My First Hydrojet", "Buy 1 Hydrojet."],
        ["Predator", "Win 100 Online matches."],
        ["Pro Racer", "Earn 3 stars in every Race event."],
        ["Professional", "Get 2 stars in all Career events."],
        ["Seasoned Vet", "Reach level 20."],
        ["Small Fish", "Win an Online match."],
        ["So Close!", "Lose an Online race event by less than a tenth of a second."],
        ["Socialite", "Play an Online match."],
        ["Speedy Racer", "Earn 3 stars in every Hot Lap."],
        ["Still Counts", "Win a race without the rider."],
        ["Stunt Expert", "Get 1500 points in a Freestyle event."],
        ["Stunt Master", "Get 2000 points in a Freestyle event."],
        ["Stunt Novice", "Get 1000 points in a Freestyle event."],
        ["Tricked Out", "Upgrade a Hydrojet fully."],
        ["Tricky Racer", "Earn 3 stars in every Freestyle event."],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
