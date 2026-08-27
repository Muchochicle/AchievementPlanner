import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cuphead.json - 42 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 268910
// (fetched through this app's own services/steamApi.js) - 33 of 42 ship
// a real, official Steam description. Swing You Sinner, Selling Out,
// Cutting Corners, Bravo Zulu P-26, Rolling Sixes, High Roller, Pacifist,
// A Horrible Night To Have a Curse, and Paladin are hidden achievements
// Steam never describes publicly (confirmed via the same API call) -
// their descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const cuphead = getPlannerData("cuphead");

test("getPlannerData('cuphead') returns real planner data with 42 curated achievements", () => {

    assert.ok(cuphead, "expected real planner data for cuphead");
    assert.ok(Array.isArray(cuphead.achievements));
    assert.strictEqual(cuphead.achievements.length, 42);

});

test("every Cuphead achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = cuphead.achievements.map(a => a.id);
    const apinames = cuphead.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Cuphead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of cuphead.achievements) {

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

test("every one of the 33 officially-described Cuphead achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 9 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Taking Names", "Defeat a boss"],
        ["A Walk in the Park", "Defeat every boss in Inkwell Isle I"],
        ["A Day at the Fair", "Defeat every boss in Inkwell Isle II"],
        ["A Trip Downtown", "Defeat every boss in Inkwell Isle III"],
        ["Casino Night", "Complete the Casino"],
        ["Put On a Show", "Get an S-Rank"],
        ["Sheriff", "Obtain an A-Rank or higher on all bosses in Inkwell Isle I"],
        ["Boss", "Obtain an A-Rank or higher on all bosses in Inkwell Isle II"],
        ["Mayor", "Obtain an A-Rank or higher on all bosses in Inkwell Isle III"],
        ["King", "Obtain an A-Rank or higher on all bosses in Inkwell Hell"],
        ["Souls Saved", "Complete the game on Normal"],
        ["Beat The Devil At His Own Game", "Complete the game on Expert"],
        ["Butter-and-Egg Man", "Buy everything in Porkrind's Shop"],
        ["Ceramic Strike", "Defeat a boss with an Extra Special move"],
        ["Porcelain Power", "Defeat a boss with a Super Art"],
        ["Magician Lord", "Obtain all Super Arts"],
        ["Perfect Run", "Complete a level without getting hit"],
        ["Coffers Full", "Get every coin in all of the levels"],
        ["Bouncing Ball", "Parry five times before hitting the ground"],
        ["Parry Persistance", "Complete 20 parries"],
        ["Parry Performance", "Complete 100 parries"],
        ["A Vacation in the Wilds", "Defeat every boss in Inkwell Isle IV"],
        ["Ranger", "Obtain an A-Rank or Higher on all bosses in Inkwell Isle IV"],
        ["Alive and Kicking", "Defeat a boss with Ms. Chalice"],
        ["Decadent", "Defeat 10 bosses with Ms. Chalice"],
        ["The Golden Touch", "Defeat a boss with one of Ms. Chalice's Super Arts"],
        ["The Latest Sensation", "Defeat a boss with one of Porkrind's new weapons"],
        ["Checkmate", "Defeat all of the King of Games' Champions"],
        ["A King's Admiration", "Defeat the King's Gauntlet"],
        ["Compliments to the Chef", "Complete your quest on Inkwell Isle IV"],
        ["The High Hat", "Defeat a boss on Inkwell Isle IV without killing any of its minions"],
        ["Hearty", "Have 9HP at one time"],
        ["Cooked to Perfection", "Get an S-Rank on a stage of Inkwell Isle IV"]
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Swing You Sinner", "Selling Out", "Cutting Corners", "Bravo Zulu P-26",
        "Rolling Sixes", "High Roller", "Pacifist", "A Horrible Night To Have a Curse", "Paladin"
    ]);

    const dataPairs = cuphead.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 9 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const devil = cuphead.achievements.find(a => a.apiname === "CompleteDevil");
    const badEnding = cuphead.achievements.find(a => a.apiname === "BadEnding");
    const secretPassage = cuphead.achievements.find(a => a.apiname === "FoundSecretPassage");
    const smallPlane = cuphead.achievements.find(a => a.apiname === "SmallPlaneOnlyWin");
    const diceNoHit = cuphead.achievements.find(a => a.apiname === "NoHitsTakenDicePalace");
    const allMoney = cuphead.achievements.find(a => a.apiname === "FoundAllMoney");
    const pacifist = cuphead.achievements.find(a => a.apiname === "PacifistRun");
    const cursedRelic = cuphead.achievements.find(a => a.apiname === "DefeatDevilPhase2");
    const paladin = cuphead.achievements.find(a => a.apiname === "Paladin");

    assert.ok(devil && devil.name === "Swing You Sinner" && devil.description.length > 0);
    assert.ok(badEnding && badEnding.name === "Selling Out" && badEnding.description.length > 0);
    assert.ok(secretPassage && secretPassage.name === "Cutting Corners" && secretPassage.description.length > 0);
    assert.ok(smallPlane && smallPlane.name === "Bravo Zulu P-26" && smallPlane.description.length > 0);
    assert.ok(diceNoHit && diceNoHit.name === "Rolling Sixes" && diceNoHit.description.length > 0);
    assert.ok(allMoney && allMoney.name === "High Roller" && allMoney.description.length > 0);
    assert.ok(pacifist && pacifist.name === "Pacifist" && pacifist.description.length > 0);
    assert.ok(cursedRelic && cursedRelic.name === "A Horrible Night To Have a Curse" && cursedRelic.description.length > 0);
    assert.ok(paladin && paladin.name === "Paladin" && paladin.description.length > 0);

});
