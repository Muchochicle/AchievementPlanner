import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hyper-light-drifter.json - 23 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 257850 (fetched through this app's own services/steamApi.js) -
// 17 of 23 ship a real, official Steam description. Natural Leader, The
// Dash Eternal, Star Athlete, Boss Rush Level 1, Boss Rush Level 2, and
// Boss Rush Level 3 are hidden achievements Steam never describes
// publicly (confirmed via the same API call) - their descriptions here
// are curatorial summaries of their real, community-documented unlock
// conditions. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const hyperLightDrifter = getPlannerData("hyper-light-drifter");

test("getPlannerData('hyper-light-drifter') returns real planner data with 23 curated achievements", () => {

    assert.ok(hyperLightDrifter, "expected real planner data for hyper-light-drifter");
    assert.ok(Array.isArray(hyperLightDrifter.achievements));
    assert.strictEqual(hyperLightDrifter.achievements.length, 23);

});

test("every Hyper Light Drifter achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = hyperLightDrifter.achievements.map(a => a.id);
    const apinames = hyperLightDrifter.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Hyper Light Drifter achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of hyperLightDrifter.achievements) {

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

test("every one of the 17 officially-described Hyper Light Drifter achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Natural Leader, The Dash Eternal, Star Athlete, Boss Rush Level 1,
    // Boss Rush Level 2, and Boss Rush Level 3 (the 6 hidden
    // achievements) are excluded here - Steam never exposes a public
    // description for them - and covered by their own dedicated test
    // below instead.
    const officialAchievements = [
        ["One Shot", "Finish the game without dying"],
        ["Nice Shot!", "Kill 5 enemies with a bomb"],
        ["Dummy", "Trick a Dirk to jump off a ledge"],
        ["Don't Give Up!", "You can do it!"],
        ["Meditation", "Casey would know what to do"],
        ["Nothing's Easy, Now is it?", "Opening death"],
        ["Chain Dash Champion", "How many can you get?"],
        ["Diamonds Are Forever", "Collect all modules"],
        ["Shine Bright", "Collect all Gearbits"],
        ["Walk-In Closet", "Collect all outfits"],
        ["Hoarder", "Collect Everything"],
        ["Librarian", "Collect all tablets"],
        ["Contender", "Beat Hoarde Mode"],
        ["Bully", "Beat all bosses"],
        ["Masochist", "Beat NG+"],
        ["Line Em' Up", "Hit 4 enemies with one railgun shot"],
        ["Armory", "Collect all Weapons"]
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Natural Leader", "The Dash Eternal", "Star Athlete", "Boss Rush Level 1", "Boss Rush Level 2", "Boss Rush Level 3"]);

    const dataPairs = hyperLightDrifter.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const nature = hyperLightDrifter.achievements.find(a => a.apiname === "NATURE");
    const dash = hyperLightDrifter.achievements.find(a => a.apiname === "800DASH");
    const soccer = hyperLightDrifter.achievements.find(a => a.apiname === "SOCCERWIN");
    const bossRush1 = hyperLightDrifter.achievements.find(a => a.apiname === "BOSSRUSHLEVELONE");
    const bossRush2 = hyperLightDrifter.achievements.find(a => a.apiname === "BOSSRUSHLEVELTWO");
    const bossRush3 = hyperLightDrifter.achievements.find(a => a.apiname === "BOSSRUSHLEVELTHREE");

    assert.ok(nature && nature.name === "Natural Leader" && nature.description.length > 0);
    assert.ok(dash && dash.name === "The Dash Eternal" && dash.description.length > 0);
    assert.ok(soccer && soccer.name === "Star Athlete" && soccer.description.length > 0);
    assert.ok(bossRush1 && bossRush1.name === "Boss Rush Level 1" && bossRush1.description.length > 0);
    assert.ok(bossRush2 && bossRush2.name === "Boss Rush Level 2" && bossRush2.description.length > 0);
    assert.ok(bossRush3 && bossRush3.name === "Boss Rush Level 3" && bossRush3.description.length > 0);

});
