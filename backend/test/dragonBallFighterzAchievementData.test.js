import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragon-ball-fighterz.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 678950 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dragon-ball-fighterz");

test("getPlannerData('dragon-ball-fighterz') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragon-ball-fighterz");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every DRAGON BALL FighterZ achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every DRAGON BALL FighterZ achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 DRAGON BALL FighterZ achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Arena Aficionado", "Arena Match - Play 20 matches."],
        ["Arena Enthusiast", "Arena Match - Play a match."],
        ["Arena Expert", "Arena Match - Play 10 matches."],
        ["Battle-Ready", "Practice - Complete all battle tutorials."],
        ["Before Creation Comes Destruction...", "Practice - Complete 200 Different Combo Challenges."],
        ["Bye-Bye Buu", "Story - Defeat Clone Kid Buu."],
        ["Care to Become the next God of Destruction?", "Arcade - Complete a course with an S Rank."],
        ["Casual Combatant", "World Match - Play 10 Casual Matches."],
        ["Conversationalist", "Story - Trigger a special conversation sequence between characters."],
        ["Deep Pockets", "Acquire 5,000,000 Zeni throughout the course of playing."],
        ["Don't Underestimate Earth!", "Practice - Complete 30 Different Combo Challenges."],
        ["Extreme Gravity Guru", "Arcade - Complete the Extreme Gravity Spaceship Course."],
        ["Farewell, Tien...", "Complete seven or more quest tutorials."],
        ["Goku Isn't the Only Super Saiyan...", "World Match - Play a Ranked Match."],
        ["Ho ho ho... What an Unexpected Thrill", "Story - Complete the Enemy Warrior Arc."],
        ["Hyperbolic Heavyweight", "Arcade - Complete the Hyperbolic Time Chamber Course."],
        ["I am Goku, the Legendary Super Saiyan!", "Story - Complete the Super Warrior Arc."],
        ["It's Play Time!", "World Match - Play a Casual Match."],
        ["Just Looking", "Arena Match - Observe a match."],
        ["Ladies and Gents, We Have a Winner!", "Tournament - Emerge as champion."],
        ["Lemme Play Too!", "World Match - Play 20 Casual Matches."],
        ["Link Level 20", "Story - Raise Link Level to 20."],
        ["Link Level 40", "Story - Raise Link Level to 40."],
        ["Millionaire", "Acquire 1,000,000 Zeni throughout the course of playing."],
        ["My Appetite...Is Insatiable...!", "Story - Complete the Android 21 Arc."],
        ["My Power Level is 530,000", "World Match - Acquire 530,000 BP."],
        ["Practice Makes Perfect", "Practice - Perform a combo that deals 5000 or more damage in Training Mode."],
        ["Set for Life", "Acquire 20,000,000 Zeni over the course of playing."],
        ["Snake Way Sensei", "Arcade - Complete the Snake Way Course."],
        ["Stamp of Approval", "Replay - Use a Z Stamp while watching a Replay Channel."],
        ["The Power to Go Beyond the Super Saiyan!", "Practice - Complete 100 Different Combo Challenges."],
        ["This Pain Will Make Me Stronger!", "World Match - Play 20 Ranked Matches."],
        ["To Test Myself, I Too Will Fight", "Local Battle - Play a match."],
        ["Yo, I'm Goku!", "Complete a quest tutorial."],
        ["You Can't Win This...", "World Match - Play 10 Ranked Matches."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
