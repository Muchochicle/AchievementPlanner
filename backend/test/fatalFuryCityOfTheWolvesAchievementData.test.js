import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fatal-fury-city-of-the-wolves.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2492040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fatal-fury-city-of-the-wolves");

test("getPlannerData('fatal-fury-city-of-the-wolves') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for fatal-fury-city-of-the-wolves");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every FATAL FURY: City of the Wolves achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every FATAL FURY: City of the Wolves achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 FATAL FURY: City of the Wolves achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["[EOST] Instructor of Kyokugen Karate", " Clear Hundred Bottle Hero."],
        ["[EOST] King of South Town", "Clear all stages (including South Town+) and reach Lv. 99 with any character."],
        ["[EOST] South Town Specialist", " Clear South Town with 10 characters."],
        ["[EOST] Yearning for Secrets", " Clear a total of 10 Secret Stages."],
        ["[EOST] Yearning for Strength", " Reach Lv. 15 with any character."],
        ["[EOST] Yearning for Supremacy", " Clear South Town with any character."],
        ["Anchors up?", "Win 1 match with a character edited in Color Edit Mode."],
        ["Begone, weakling!", "Clear Arcade Mode on CPU Level 5 without using a continue."],
        ["Can you comprehend that?", "Clear 10 tutorial exercises."],
        ["City of the Wolves", "Unlock all achievements. (Excluding [EOST])"],
        ["Farewell.", "Land a finishing blow with a Hidden Gear."],
        ["Gaahahaha! How do ya like THAT?!", "Clear a total of 120 trials."],
        ["Gonna take you for a ride!", "Start Arcade Mode with any character."],
        ["Heh heh! The hard work's paying off!", "Clear 20 tutorial exercises."],
        ["Here we go! I'm jumping in!", "Clear 1 trial with any character."],
        ["Hey, come on!", "Win a test battle against the SNK clone in Clone Mode."],
        ["Hey, you there!", "Practice in Training Mode for 30 minutes."],
        ["Hmph... Good work.", "Win 1 online match."],
        ["Hnnnn...", "Clear 8 trials with any character."],
        ["I am invincible!", "Fight in 10 Versus Mode battles."],
        ["I know all the cool spots.", "Create 1 playlist in the Jukebox."],
        ["I must ask... Will you remain by my side?", "Use the same character 300 times."],
        ["I'll keep this to remind me of you!", "Use the same character 200 times."],
        ["I'll rip you to shreds!", "Win 50 Survival Mode matches."],
        ["I'm the one who decides my fate!", "Clear Arcade Mode with 15 characters."],
        ["It's a bad day to be you.", "Land a finishing blow with an Ignition Gear."],
        ["It's not enough... I need more!", "Land a finishing blow with a Redline Gear."],
        ["Just stick with me!", "Start Time Attack Mode with any character."],
        ["Keep up the good work, partner!", "Clear Arcade Mode with 7 characters."],
        ["Let's make it a clean fight.", "Fight in 1 Versus Mode battle."],
        ["My turn, huh? I'm ready for action!", "Fight in your first test battle in Clone Mode."],
        ["Not bad for a rookie.", "Clear 1 tutorial exercise."],
        ["Okay! Time to get busy!", "Start Survival Mode."],
        ["Okay... I can do this. Yeah.", "Clear a total of 80 trials."],
        ["Thank you.", "Clear Arcade Mode on CPU Level 5."],
        ["The ladies are gonna love this!", "Get a perfect game."],
        ["Try to keep up, all right!", "Clear Time Attack Mode with any character."],
        ["Viva the Lilien Knights!", "Win 10 online matches."],
        ["Well done! I commend you!", "Clear Arcade Mode for the first time."],
        ["Well, aren't you a cutie!", "Use the same character 100 times."],
        ["YEEAAAAAAH!", "Clear Survival Mode."],
        ["You're really something!", "Play on 10 different stages in Versus Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
