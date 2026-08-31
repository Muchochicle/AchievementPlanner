import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/killer-is-dead.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 261110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("killer-is-dead");

test("getPlannerData('killer-is-dead') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for killer-is-dead");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Killer is Dead achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Killer is Dead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Killer is Dead achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["9 to 1 on Goliath", "Completed Episode 4."],
        ["Alice in Dead Land", "Completed Episode 3."],
        ["Assassins Never Say Die", "Cleared all sub-missions."],
        ["Brilliant Shoulder Throw", "Killed an enemy using the \"Burst Rush.\""],
        ["Brought Down to Size", "Completed Episode 9."],
        ["Bryan-Approved Sniper", "Killed 100 enemies using the \"Head Shot.\""],
        ["Cash Enough For Love", "Have a total of $100 million in cash. "],
        ["Darksider of the Moon", "Cleared all episodes on Very Hard Mode."],
        ["Feeling So High", "Sliced an enemy upward and finished it in the air."],
        ["Float Like a Gadfly", "Sliced an enemy upward and finished it in the air."],
        ["Geisha Girl", "Made Koharu your prisoner in body and soul."],
        ["Gift Collector", "Gave a present 50 times or more."],
        ["Gigolo Begins", "Cleared 6 challenge missions."],
        ["Gigolo Mastership", "Cleared all challenge missions."],
        ["Gigolo Side Story", "Cleared 12 challenge missions."],
        ["Had a Bad Dream", "Completed Episode 5."],
        ["Happiest Man on Earth", "Received 20 rewards from the beauties."],
        ["Have You Got Clean Hands?", "Killed an enemy with an enemy attack."],
        ["In Your Dreams", "Completed Episode 8."],
        ["Kidnapper Executed", "Completed Episode 1."],
        ["Killer at the Gate of Dawn", "Cleared all episodes on Normal Mode."],
        ["Left-Hand Man", "Increased all sub-weapons to maximum upgrade level."],
        ["Lucky Girl", "Made Scarlett your prisoner in body and soul."],
        ["Mondo's Girls Collection", "Collected all female costumes."],
        ["Moon King", "Completed Episode 12."],
        ["No More Spoils", "Completed Episode 6."],
        ["Obscured by the Moonlight", "Cleared all episodes on Hard Mode."],
        ["Office Workers", "Cleared 6 sub-missions."],
        ["Office's Affairs", "Cleared 3 sub-missions."],
        ["Passionate Girl", "Made Natalia your prisoner in body and soul."],
        ["Passport to Infinity", "Changed costume to Ulti-mondo."],
        ["Perfect Job", "Cleared all missions."],
        ["Perfect Killer", "All achievements completed"],
        ["Reliable Friends", "Got revived by Mika 20 times."],
        ["Right-Hand Man", "Increased all Attack and Special skills."],
        ["Scarlett Chaser", "Unlocked 6 challenge missions."],
        ["Scarlett Stalker", "Unlocked 12 challenge missions."],
        ["Scarlett-Approved Stalker", "Unlocked all challenge missions."],
        ["Scratch One Samurai", "Completed Episode 7."],
        ["Sexy Man Whose Blood is Dripping", "Increased BLOOD to maximum upgrade level."],
        ["Suck Like a Leech", "Killed an enemy using the \"Burst Rush.\""],
        ["The Criminal is Dead", "Ranked AAA executioner on 12 missions."],
        ["The Maniac is Dead", "Ranked AAA executioner on 24 missions."],
        ["The Mass Murderer is Dead", "Ranked AAA executioner on 44 missions."],
        ["The Skinny Controller", "Completed Episode 10."],
        ["Toast to Forerunner", "Completed Episode 2."],
        ["Ultimate Physical Beauty", "Increased HEALTH to maximum upgrade level."],
        ["Won't Play With You", "Completed Episode 11."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
