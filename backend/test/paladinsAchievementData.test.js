import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/paladins.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 444090 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("paladins");

test("getPlannerData('paladins') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for paladins");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Paladins achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Paladins achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Paladins achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Challenger", "Unlock Ranked"],
        ["Battle Thirsty", "Play over 300 matches"],
        ["Beta Player", "Reach level 30 during the Paladins Beta."],
        ["Big Spender", "Spend over 100,000 Credits in the item store over all your matches"],
        ["Boom Headshot", "Land 5 headshots in a row without missing."],
        ["Bounty Hunter", "Kill an enemy player who is on a 15 killstreak or higher."],
        ["Bronze Friends Forever", "Play 5 hours with a player from your friends list in your party."],
        ["Bullet Sponge", "Shield over 100,000 damage in a match"],
        ["Champion Mastery I", "1 Champion at Mastery 5."],
        ["Champion Mastery II", "2 Champions at Mastery 5."],
        ["Champion Mastery III", "3 Champions at Mastery 5."],
        ["Champion Mastery IV", "4 Champions at Mastery 5."],
        ["Champion Mastery IX", "9 Champions at Mastery 5."],
        ["Champion Mastery V", "5 Champions at Mastery 5."],
        ["Champion Mastery VI", "6 Champions at Mastery 5."],
        ["Champion Mastery VII", "7 Champions at Mastery 5."],
        ["Champion Mastery VIII", "8 Champions at Mastery 5."],
        ["Champion Mastery X", "10 Champions at Mastery 5."],
        ["Citizen of the Realm", "Get a daily reward 7 days in a row"],
        ["Counter-Air Defense", "Kill a player in the air who is over 100 units above the ground."],
        ["Double Kills Bronze", "10 Double Kills."],
        ["Double Kills Diamond", "400 Double Kills."],
        ["Double Kills Gold", "100 Double Kills"],
        ["Double Kills Platinum", "200 Double Kills."],
        ["Double Kills Silver", "50 Double Kills."],
        ["Friends Forever Diamond", "Play 250 hours with a player from your friends list in your party."],
        ["Friends Forever Gold", "Play 25 hours with a player from your friends list in your party."],
        ["Friends Forever Platinum", "Play 100 hours with a player from your friends list in your party."],
        ["From The Grave", "Kill an enemy champion after they had already killed you."],
        ["Give 110 Percent", "Get a killing blow after the round has ended."],
        ["Gone Spelunking", "Die to an environmental hazard."],
        ["Hard Carry", "Kill more than 20 enemy champions in a single match."],
        ["I Like Big Numbers", "Deal more than 100,000 damage during a match."],
        ["Last One Standing", "Be the only player alive in a match."],
        ["Master Collector", "Unlock 100 Cards."],
        ["Millionaire", "Earn over 1,000,000 Gold over your play history"],
        ["Not Like This", "Kill an enemy player while you are at or below 50 Health."],
        ["Pinnacle", "Reach Master in Ranked"],
        ["Questions Later", "Deal damage to every enemy champion in a match before any of them damage you."],
        ["Send Off", "Kill a player with an environmental hazard."],
        ["Silver Friends Forever", "Play 10 hours with a player from your friends list in your party."],
        ["Sniper", "Kill an enemy player from over 300 units away."],
        ["Surgeon General", "Heal over 100,000 health in a match"],
        ["Survivor", "Survive more than 50 battles with less than 10% health."],
        ["Teamed Up Bronze", "Play a match while in a party."],
        ["Teamed Up Diamond", "Play 100 matches while in a party."],
        ["Teamed Up Gold", "Play 20 matches while in a party."],
        ["Teamed Up Platinum", "Play 50 matches while in a party."],
        ["Teamed Up Silver", "Play 10 matches while in a party."],
        ["The Dedicated", "Have over 30 different champions at mastery level 15 or higher"],
        ["The Insane", "Have over 30 different champions at mastery level 20 or higher"],
        ["This is My Style", "Build your own custom loadout"],
        ["To the Victor go the Spoils", "Earn over 500,000 Gold over your play history"],
        ["Unstoppable", "Reach a 20 kill streak in a match"],
        ["Untouched", "Win a match where the enemy team scored no points."],
        ["Variety is the Spice of Life", "Have over 30 different champions at mastery level 10 or higher"],
        ["Well Trained", "Complete the Paladins Tutorial."],
        ["Witness to History", "Have a Paladins account over 1 year old"],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
