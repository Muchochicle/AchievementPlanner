import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chained-echoes.json - 37 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1229240 (fetched through this app's own services/steamApi.js) -
// all 37 ship a real, official Steam description. Chained Echoes has no
// Steam-hidden achievements at all. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const chainedEchoes = getPlannerData("chained-echoes");

test("getPlannerData('chained-echoes') returns real planner data with 37 curated achievements", () => {

    assert.ok(chainedEchoes, "expected real planner data for chained-echoes");
    assert.ok(Array.isArray(chainedEchoes.achievements));
    assert.strictEqual(chainedEchoes.achievements.length, 37);

});

test("every Chained Echoes achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = chainedEchoes.achievements.map(a => a.id);
    const apinames = chainedEchoes.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Chained Echoes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of chainedEchoes.achievements) {

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

test("every one of the 37 official Chained Echoes achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["The Beginning", "Finish the prologue."],
        ["Act Racer", "Finish act I."],
        ["Next Steps", "Finish act II."],
        ["Bad Memories", "Finish act III."],
        ["True King", "Beat the game."],
        ["Sky Champion", "Reclaim your Sky Armor."],
        ["Hitchcock was Right", "Disturb 60 birds."],
        ["God King", "Slay the ultimate boss."],
        ["One of Us", "Find all recruits."],
        ["A Blade Runner", "Get all ultimate weapons."],
        ["Bargain Hunter", "Buy all Deals."],
        ["Reward Starter", "Get a Reward Board chain of over 5."],
        ["Reward Addict", "Get a Reward Board chain of over 20."],
        ["Reward Junkie", "Get a Reward Board chain of over 40."],
        ["Reward Mixer", "Get a Reward Board chain of over 80."],
        ["Reward Dealer", "Get a Reward Board chain of over 120."],
        ["Reward Cartel Boss", "Complete the Reward Board."],
        ["Walking Killing Machine", "Complete the bestiary."],
        ["Ahoy ye Heartie", "Join the Adventurer’s Guild."],
        ["Endangered Species", "Defeat all Unique Monsters."],
        ["Side Tracker", "Finish all side quests."],
        ["Walking Library", "Read all lore books."],
        ["Infleeencer", "Flee 42 times."],
        ["Death to My Enemies", "Win 50 battles."],
        ["Winning Streak", "Win 100 battles."],
        ["Brutal Battler", "Win 200 battles."],
        ["Praying", "Find a Class Emblem."],
        ["Son of a Preacher Man", "Find 6 Class Emblems."],
        ["Preacher Man", "Find 12 Class Emblems."],
        ["Oh Crab!", "Find the Crab Village."],
        ["The Platypus’ Mind", "Find the platypus gang’s treasure."],
        ["Uncanny Expertise", "Learn all skills for Tomke."],
        ["Customer is King", "Sell 1 piece of crap."],
        ["Skill Share", "Learn all skills with all characters."],
        ["Class Master", "Master a Class Emblem skill."],
        ["Master of One", "Master a Sky Armor weapon."],
        ["Jack of All Trades", "Master all Sky Armor weapons with one Sky Armor."]
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = chainedEchoes.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
