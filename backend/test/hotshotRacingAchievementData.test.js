import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hotshot-racing.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 609920 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hotshot-racing");

test("getPlannerData('hotshot-racing') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for hotshot-racing");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Hotshot Racing achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Hotshot Racing achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Hotshot Racing achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Artiste", "Achieve 1st place as Keiko in any Grand Prix on Expert."],
        ["Barely Breathing", "Drive or Explode: Finish a race on fire."],
        ["Barrel-ly Made It", "Finish a Barrel Barrage race on fire"],
        ["Barreling Along", "Finish a Barrel Barrage race without hitting a single barrel"],
        ["Beat the Rap", "(Robbers only) Complete a race of Cops & Robbers without being converted into a Cop."],
        ["BWM Driver", "Slipstream behind a player for 5 seconds."],
        ["C4", "Start the explosion timer 4 times in Drive or Explode."],
        ["Carbon Fibre Optic", "Play an Online race."],
        ["Catch my Drift", "Build a full boost bar segment from one drift."],
        ["Competent", "Come 1st in 4 arcade races on different tracks."],
        ["Daredevil", "Achieve 1st place as Xing in any Grand Prix on Expert."],
        ["Destruction Level 99", "Finish a race with 20 track destructibles destroyed."],
        ["Download Diva", "Finish first in the Boss Level GP on Expert"],
        ["Dunkin'", "(Robbers Only) Perform a donut in a race and achieve the highest score."],
        ["Family Man", "Achieve 1st place as Mike in any Grand Prix on Expert."],
        ["Fishing for Compliments", "Play an Online race with a customised vehicle."],
        ["Follow the Crowd", "Beat a downloaded ghost time in Time Trial."],
        ["Follow Your Dreams", "Achieve 1st place as Alexa in any Grand Prix on Expert."],
        ["Gentrified", "Achieve 1st place as Aston in any Grand Prix on Expert."],
        ["Globetrotter", "Finish an arcade race on every track."],
        ["Grafting hard", "Build your boost meter to full from empty twice in a race."],
        ["Hotshot", "Come 1st in every GP as any character on Expert."],
        ["Hustler", "Come 1st in an Arcade Race after dropping to 8th place from 1st place. "],
        ["K.O.", "In Drive or Explode, crash into another racer causing them to explode."],
        ["Machine in the Ghost", "Drive inside a ghost in Time Trial for 5 seconds."],
        ["Marking Territory", "Set a personal best time on every track. (No mirrored track required.)"],
        ["Newbie", "Come 1st in an arcade race."],
        ["Not a Robot", "Achieve 1st place as Toshiro in any Grand Prix on Expert."],
        ["Not Your Lucky Day", "In Drive or Explode, explode before reaching the 1st checkpoint."],
        ["On Cloud 9", "Come 1st in 9 online races (any game mode)"],
        ["Overachiever", "Unlock all customisation options. "],
        ["Pacifist", "Complete a race without colliding with another racer."],
        ["Phew!", "Come 1st and beat 2nd place by 1 second."],
        ["Practise Makes Perfect", "Beat 5 personal bests on any track."],
        ["Precision", "Drive or Explode: Finish a lap without taking any damage. (Restored health is irrelevant.)"],
        ["Professional", "Come 1st in 8 arcade races on different tracks."],
        ["Raving", "Achieve 1st place as Viktor in any Grand Prix on Expert."],
        ["Redemption Arc", "Fail a start line boost and take 1st place in arcade mode."],
        ["Referral Bonus", "(Cops only) Convert 3 Robbers into Cops in a Cops & Robbers race."],
        ["Reverse Psychology", "(Cops only) Convert a Robber by colliding whilst driving in the wrong direction."],
        ["Seeing Double", "(Cops Only) Convert 2 Robbers within a second of eachother"],
        ["Self Reflection", "Complete a race on a mirrored track."],
        ["Serial Sprinter", "Perform 10 boosts in a race."],
        ["Show Off…", "Reverse across the finish line and take 1st place in an arcade race."],
        ["Speedster", "Achieve 1st place as Marcus in any Grand Prix on Expert."],
        ["Speedy Exit", "Exit a Drift with a Boost."],
        ["Stick it to the Dev", "Beat a default ghost time in Time Trial."],
        ["Supersonic", "Cross the finish line on Drive or Explode at 300mph."],
        ["The Destroyer", "Drive or Explode: Cause 3 vehicles to explode within 10 seconds of hitting them."],
        ["The Peacock", "Customise every aspect of a vehicle and complete a race with it."],
        ["Trophy Hunter", "Purchase all customisation options. "],
        ["Wheeler Dealer", "Complete a race in every vehicle."],
        ["World Class", "Come 1st in 16 arcade races on different tracks."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
