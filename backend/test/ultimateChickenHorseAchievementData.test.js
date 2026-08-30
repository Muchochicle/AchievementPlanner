import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ultimate-chicken-horse.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 386940 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 31 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ultimate-chicken-horse");

test("getPlannerData('ultimate-chicken-horse') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for ultimate-chicken-horse");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Ultimate Chicken Horse achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Ultimate Chicken Horse achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Ultimate Chicken Horse achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Friend Appears", "Unlock a character"],
        ["Animal Cruelty", "Kill people with traps 100 times"],
        ["Archer", "Kill someone with an arrow 100 times"],
        ["Back to the Basics", "Win without any special points"],
        ["Building A Community", "Unlock all characters"],
        ["Clutch Performer", "Enter sudden death 20 times"],
        ["Comeback Kid", "Score 50 comeback points"],
        ["Craftsperson", "Attach two blocks together with glue"],
        ["Droppin' Bills", "Die with the coin 10 times"],
        ["Engineer", "Glue four blocks together"],
        ["Full Wardrobe", "Unlock all outfits"],
        ["Gettin' Fancy", "Unlock an outfit"],
        ["Gettin' the Hang of It", "Play 10 games"],
        ["Goon", "Kill someone with a hockey puck shooter 100 times"],
        ["Greedy McGreedster", "Get 50 coins"],
        ["Magellan", "Unlock all levels"],
        ["Neat and Nimble", "Wall jump 1000 times"],
        ["Necromancer Dancer", "Get 10 post-mortem points"],
        ["Not So Sharp", "Die on barbed wire 10 times"],
        ["Seasoned Vet", "Play 30 games"],
        ["Showoff", "Play 50 games online"],
        ["Solo Master", "Score 100 solo points"],
        ["Space-Time Cadet", "Teleport 50 times"],
        ["Spaghetti Award", "Die 50 times in a black hole"],
        ["Takin' On the World!", "Play online with a local friend"],
        ["Techie", "Play 10 games online"],
        ["Threat to Public Security", "Place 1000 traps"],
        ["Trappist", "Place 200 traps"],
        ["Ultimate Expert", "Play 100 games"],
        ["Wilhelm Audition", "Fall into the void 100 times"],
        ["Young Explorer", "Unlock a level"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
