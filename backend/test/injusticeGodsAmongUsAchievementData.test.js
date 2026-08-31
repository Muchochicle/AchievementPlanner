import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/injustice-gods-among-us.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("injustice-gods-among-us");

test("getPlannerData('injustice-gods-among-us') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for injustice-gods-among-us");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Injustice: Gods Among Us achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Injustice: Gods Among Us achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Injustice: Gods Among Us achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Star", "Get 100 Stars in S.T.A.R. Lab Mode"],
        ["Almost There", "Complete 50% of Story Mode"],
        ["Arkham City Lockdown", "Defeat every Villain With Batman"],
        ["Around and Around We Go", "Perform every level interaction once"],
        ["Around The World", "Knock opponent through all transitions across all levels"],
        ["Beginner's Luck!", "Win a single online match"],
        ["Breaking Records", "Win 100 complete Online Matches"],
        ["Buddy System", "Enter Online Practice with someone on your friends list"],
        ["Bull in a China Shop", "Cause maximum damage in all Arenas (does not include Practice mode)"],
        ["Cosplay", "Unlock a costume in the Archives"],
        ["Feel the Burn!", "Perform every Meter Burn special move of every character"],
        ["FINISHED", "Win a match with the super move of any character"],
        ["Go Sit in the Corner", "Win a multiplayer match with a timeout"],
        ["Gonna Need More Closet Space", "Unlock All costumes in the Archives"],
        ["Groundbreaking", "Use every interactable and win in a multiplayer match"],
        ["Heavy Hitter", "Perform a 10 hit combo with every character"],
        ["Hoarder", "Unlock everything in the Archives"],
        ["Holy Knockout Batman!", "Win 10 complete Ranked matches"],
        ["I Can Back it Up", "Equip a new Background Image"],
        ["I Conquered All", "Beat All S.T.A.R. Lab Missions (Excluding DLC)"],
        ["I Voted!", "Vote Correctly in a KOTH match"],
        ["Iconic Representation", "Equip a new Icon"],
        ["It Has Begun", "Complete 1 S.T.A.R. Lab Mission"],
        ["Justice for All", "Complete 100% of Story Mode"],
        ["Learning is Fun", "Complete Tutorial"],
        ["Looking Good!", "Equip a new Character Portrait"],
        ["Lucky Break", "Win 1 complete Ranked match"],
        ["Metahuman", "Perform every special move of every character"],
        ["Mini-Master", "Win all story mode minigames"],
        ["Only a Real Master", "Make a comeback when at low health (10% or less)"],
        ["Over The Top!", "Play 200 complete Online Matches"],
        ["Overachiever", "Get 3 stars on 1 S.T.A.R. Lab Mission"],
        ["Overthrown", "Dethrone the King in an online match"],
        ["Perfect Aim", "Win a match as Deathstroke without missing a shot (minimum 12 shots)"],
        ["Practice Makes Perfect", "Enter Practice Mode"],
        ["Rise to the Top", "Complete Classic Battle with any character"],
        ["Sidekick", "Reach Level 10"],
        ["Statistical Advantage", "View Your Hero Card"],
        ["Streak Ender", "Defeat a Survivor"],
        ["Superhuman!", "Perform every character's supermove"],
        ["The Caped Crusader", "Win with Batman using every special move and his Supermove"],
        ["The Hero We Deserve", "Reach Level 100"],
        ["Throwdown!", "Perform 8 throws and win in a multiplayer match"],
        ["Top Rung", "Complete Classic Battle with all characters"],
        ["Tourist", "Send an opponent through all three Metropolis transitions in one fight"],
        ["True Marksman", "Win a match with Green Arrow using only arrows"],
        ["Ultimate Battler", "Complete Battle Mode"],
        ["Unstoppable Force", "Win a Clash sequence with any character"],
        ["World's Finest", "Complete All S.T.A.R. Lab Missions with 3 Stars"],
        ["Wrecking Ball", "Knock an opponent through a transition"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
