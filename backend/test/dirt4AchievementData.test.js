import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dirt-4.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 421020 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dirt-4");

test("getPlannerData('dirt-4') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for dirt-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every DiRT 4 achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every DiRT 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 DiRT 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...now watch this Drive", "Complete all of the Advanced Driving Techniques at the DiRT Academy"],
        ["A Bonafide Underdog Story", "Get an overall win in the lowest eligible Vehicle Class in a Rally Event in Career"],
        ["Always Believe", "Achieve 10 Gold medals in Joyride"],
        ["Be Brave", "Complete a Stage or race with the Fearless Preset active"],
        ["Chapter and Verse", "Set a time in every challenge in a single Joyride Chapter"],
        ["Cleaned up nicely", "Complete a clean Stage or race"],
        ["Completed it mate", "Win the Triple Crown"],
        ["Delta Force", "Finish in the Top Tier of a Delta Daily in Community Events"],
        ["DiRTy Dozen", "Complete all 12 Stages of a Monthly Event in Community Events"],
        ["Double Yolker", "Take two Joker Laps and win a Rallycross race"],
        ["First on the GRID", "Qualify in the top spot in a Rallycross Event in Career"],
        ["First you have to finish", "Finish in first place in a Career Event"],
        ["Flavour of the Week", "Complete back to back Weekly Community Events"],
        ["Four-titude", "Earn the Fearless Bonus in a Stage or race"],
        ["Global Superstar", "Win the Global Rally Series"],
        ["I am the 13.9%", "Win a Stage in Headcam"],
        ["International Off-Road C-1", "Earn the International Off-Road C-1 licence"],
        ["International Off-Road C-3", "Earn the International Off-Road C-3 licence"],
        ["International Rally H-A", "Earn the International Rally H-A licence"],
        ["International Rally H-C", "Earn the International Rally H-C licence"],
        ["International Rally R-1", "Earn the International Rally R-1 licence"],
        ["International Rally R-3", "Earn the International Rally R-3 licence"],
        ["It's all terrain, dummy", "Win the Landrush World Series"],
        ["Kenneth? What's the frequency?", "Destroy 100 blocks in 60 seconds in Joyride"],
        ["Limp Home", "Finish three sectors of a Stage with a flat tyre"],
        ["Little Help?", "Call in the Chief Engineer's recommendations during a Service Interval"],
        ["Make The Dream Work", "Hire a fourth Engineer onto your Team"],
        ["Mondays be like...", "Get a bad case of the Mondays"],
        ["National Stadium Pro-1", "Earn the National Stadium Pro-1 licence"],
        ["National Stadium Pro-3", "Earn the National Stadium Pro-3 licence"],
        ["Never Raced or Rallied", "Buy a vehicle from the Classifieds"],
        ["New R-Evolution", "Own a vehicle equipped with all Grade A parts"],
        ["Obsolete Models a Specialty", "Win the Historic Legends Series"],
        ["Precisely", "Set a Gold medal time in a Time Attack challenge without hitting a penalty marker"],
        ["rAd-hoc", "Repair your car on Stage and win the Stage"],
        ["Real turbulent juice", "Cleanly land a jump longer than 65m"],
        ["Rubbing, son, is racing", "Win the FIA World Rallycross Championship"],
        ["Sweaty", "Complete 25 Events in Pro Tour"],
        ["tankflybosswalk", "Complete an Event in Jam Session"],
        ["Taps Aff", "Finish a Stage in sunny conditions in Community Events or Clubs"],
        ["Textbook", "Win your class in a multi-class Event in Career"],
        ["Thanks for Coming", "Complete the Welcome Event"],
        ["The Day Today", "Finish in the Second Tier or higher in a Daily in Community Events"],
        ["The Nightman Cometh", "Win a Stage at night"],
        ["This is fine", "Triumph in the face of adversity"],
        ["Tooled Up", "Upgrade three Facilities to Grade A quality"],
        ["Truckasaurus", "Qualify for an A-Final in a Landrush Event in Career"],
        ["Up and up", "Get promoted to a new Tier in Pro Tour"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
