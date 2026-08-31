import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/naruto-shippuden-ultimate-ninja-storm-4.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 349040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("naruto-shippuden-ultimate-ninja-storm-4");

test("getPlannerData('naruto-shippuden-ultimate-ninja-storm-4') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for naruto-shippuden-ultimate-ninja-storm-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Naruto Shippuden: Ultimate Ninja STORM 4 achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Naruto Shippuden: Ultimate Ninja STORM 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Naruto Shippuden: Ultimate Ninja STORM 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["30 Wins in Ultimate Survival!", "Got past 30 opponents in Ultimate Survival."],
        ["A Chain of Battles", "Completed The Creation Chapter."],
        ["A Fist Toward Great Evil", "Completed \"Madara's Pulse\" with an S Rank."],
        ["A Lightning Blade Pierces a Friend", "Completed \"A Battle Across Time and Space\" with an S Rank."],
        ["A Never-ending Threat", "Completed the Chapter of the United Front"],
        ["A Puppet with Ten Tails", "Completed \"Roar of the Ten Tails\" with an S Rank."],
        ["Advanced Ability Cap Survival Complete!", "Completed all of the advanced level of Ability Cap Survival."],
        ["Agony and the Future", "Completed \"Side Story - Battle of the Ancestors\" with an S Rank."],
        ["An Unstoppable Duo", "Completed \"The Boys' Battlefield (Part 2)\" with an S Rank."],
        ["Attacking is the Greatest Defense", "Completed a 50-hit combo."],
        ["Awakening in the Darkness", "Completed \"In Hell\" with an S Rank."],
        ["Beginner Ability Cap Survival Complete!", "Completed all of the beginner level of Ability Cap Survival."],
        ["Beyond the Cycle of Reincarnation", "Completed \"Side Story - The Man Named Kabuto\" with an S Rank."],
        ["Bonds Rebound", "Cleared the Chapter of New Life"],
        ["Boruto's Tale - All S Ranks", "You completed all of the Boruto's Tale main event battles with an S rank."],
        ["Boruto's Tale Expert", "You completed all of the Boruto's Tale main events."],
        ["Boruto's Tale Master", "You completed all of the Boruto's Tale side quests."],
        ["Conqueror of a Violent Battle", "Completed \"The Battle Intensifies\" with an S Rank."],
        ["Dancing to the Same Beat", "Performed a Finish Cut-In with a Combination or Linked Secret Technique."],
        ["Differing Paths", "Finished the Chapter of Two Unparalleled Warriors"],
        ["Excellent! Advanced Challenge League Beaten!", "You completed all of the advanced level of Challenge League."],
        ["Farewell, Obito", "Completed \"Kaguya, the Violent Goddess (Part 1)\" with an S Rank."],
        ["Forbidden Power Released", "Finished off an opponent while Awakened."],
        ["Full Power Teamwork!", "Finished off an opponent during a Linked Awakening."],
        ["Identity Revealed", "Completed \"Behind the Mask\" with an S Rank."],
        ["Incredible Skill, Inherited", "Completed \"The Taka Soars Ahead\" with an S Rank."],
        ["Intermediate Ability Cap Survival Complete!", "Completed all of the medium level of Ability Cap Survival."],
        ["Madara, Pulverized", "Completed \"Wind Rages, Thunder Races\" with an S Rank."],
        ["Masterful Timing", "Connected a Counterattack."],
        ["Orochimaru Surpassed", "Completed \"The Taka Flies Again\" with an S Rank."],
        ["Perfect Storm Master", "Unlocked all the achievements."],
        ["Perfect Win", "Won a 3 round battle without losing a single round."],
        ["Personal Strength, Released", "Finished with your own personal Finish Cut-In."],
        ["Personal Strengths, Maxed Out", "Landed a hit with each team member's Secret Technique in one battle."],
        ["Reaching the Light", "Completed \"Filling a Hole of the Heart\" with an S Rank."],
        ["Sealing the Violent Goddess", "Cleared the Chapter of the Final Showdown"],
        ["Standing up to the Threat", "Completed \"The Ten Tails Jinchuriki\" with an S Rank."],
        ["Surpassing a Goddess", "Completed \"Kaguya, the Violent Goddess (Part 2)\" with an S Rank."],
        ["Surpassing One's Master", "Completed \"Side Story - A Pitch Black World\" with an S Rank."],
        ["Team Minato's Struggle", "Completed \"The Boys' Battlefield (Part 1)\" with an S Rank."],
        ["The Burning Roar of a Hot-Blooded Beast", "Completed \"The Crimson Beast\" with an S Rank."],
        ["The Last Man Standing", "Completed \"Naruto and Sasuke\" with an S Rank."],
        ["The Possibilities of the Next Strike", "Changed leader during a combo."],
        ["The Showdown's Victor", "Completed \"Those Who Know All\" with an S Rank."],
        ["The Taka Flies", "Completed \"To the Battlefield\" with an S Rank."],
        ["The Three-Way Deadlock Unleashed", "Completed \"Team 7 United\" with an S Rank."],
        ["The Ultimate Combo", "Completed \"Two\" with an S Rank."],
        ["To the Bitter End", "Completed \"Deathmatch of Creation\" with an S Rank."],
        ["Trail of the Gale Expert", "Completed all the main events in \"Trail of the Gale.\""],
        ["Trail of the Gale Master", "Completed all the sub events in \"Trail of the Gale.\""],
        ["Unscathed", "Won a battle without suffering any costume damage."],
        ["Wow! Intermediate Challenge League Beaten!", "You completed all of the intermediate level of Challenge League."],
        ["Yeah! Beginner Challenge League Beaten!", "You completed all of the beginner level of Challenge League."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
