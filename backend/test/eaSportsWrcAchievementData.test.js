import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ea-sports-wrc.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1849250 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ea-sports-wrc");

test("getPlannerData('ea-sports-wrc') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for ea-sports-wrc");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every EA SPORTS WRC achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every EA SPORTS WRC achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 EA SPORTS WRC achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Algarve it a go!", "Win a stage at Vodafone Rally de Portugal  that you started with heavy engine damage."],
        ["Asphalt Artist", "Drive 100 Miles (160km) on Asphalt."],
        ["Class Act", "Complete at least one stage using a vehicle from the WRC, WRC2, and Junior WRC Vehicle Classes."],
        ["Consistency is key", "Finish on the podium at every event in a Championship Mode season."],
        ["Driver's Alliance", "Complete a Clubs or Esports event at any location."],
        ["E-stonia", "Complete a Quick Play Online event at Rally Estonia."],
        ["El Matador", "Win an event at Rally Iberia in the SUBARU Impreza 1995."],
        ["Ghost Buster", "Download and beat a Ghost in Time Trial."],
        ["Gold Rush", "Achieve 5 Gold medals in Moments."],
        ["Gravel Guru", "Drive 100 Miles (160km) on Gravel/Dirt."],
        ["In the Headlights", "Finish on the podium of an event at Rallye Monte-Carlo in a MINI Cooper S."],
        ["Keepin it real", "Complete 5 Moments."],
        ["Long Haul Hero", "Drive 1000 Miles (1600km)."],
        ["Master Vehicle Builder", "Build 5 cars in the Builder."],
        ["Miracle in the Mountains", "Finish an event at Guanajuato Rally Mexico without any severe mechanical damage."],
        ["NEW PB!", "Beat a Personal Best time in Time Trial."],
        ["Perfect Score", "Complete a regularity rally stage with 0 penalty points."],
        ["Personalised Podium", "Finish on the Podium of a Custom Championship, in a Builder car, with a custom livery."],
        ["Regularity Renaissance", "Win a Regularity Rally event in Rally Italia Sardegna in the Lancia Stratos."],
        ["Rookie Season", "Complete your first career season."],
        ["Snow Specialist", "Drive 100 Miles (160km) on Snow."],
        ["Snowgloeb", "Win an event at Rally Sweden in the Citroën Xsara WRC."],
        ["Team Principal", "Create your own team in Career Mode."],
        ["Vehicle Builder", "Build your first Builder car."],
        ["World Rally Champion!", "Win a WRC Championship in Career mode."],
        ["Your first time?", "Complete a lesson in the Rally School."],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
