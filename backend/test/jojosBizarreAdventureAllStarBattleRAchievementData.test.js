import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/jojos-bizarre-adventure-all-star-battle-r.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1372110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("jojos-bizarre-adventure-all-star-battle-r");

test("getPlannerData('jojos-bizarre-adventure-all-star-battle-r') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for jojos-bizarre-adventure-all-star-battle-r");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every JoJo's Bizarre Adventure: All-Star Battle R achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every JoJo's Bizarre Adventure: All-Star Battle R achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 JoJo's Bizarre Adventure: All-Star Battle R achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Curious Fate", "Completed All-Star Battle Mode."],
        ["A million-to-one luck-sucking leech!", "Won Tournament on all difficulties."],
        ["Ain't beating them!", "Completed 5 panels of All-Star Battle Mode Part 3."],
        ["An Adventurer is the only thing you can be!", "Set off an arena gimmick for the first time."],
        ["Battle Tendency", "Completed all panels of All-Star Battle Mode Part 2."],
        ["Can't Hate The Guy", "Completed 1 panel of All-Star Battle Mode Part 3."],
        ["Come prepared or not at all.", "Pulled off a zoomed-in taunt."],
        ["Di molto!", "Landed an HHA using Easy Beat."],
        ["Diamond is Unbreakable", "Completed all panels of All-Star Battle Mode Part 4."],
        ["Don't come near me!", "Pulled off all Dramatic Finishes."],
        ["First we need strength!", "Completed 1 panel of All-Star Battle Mode Parte 5."],
        ["Golden Wind", "Completed all panels of All-Star Battle Mode Parte 5."],
        ["Great!", "Landed a GHA."],
        ["I knew I could count on you.", "Landed an Assist."],
        ["I reject my humanity!", "Participated in 100 Online matches."],
        ["I... I'm so happy!", "Complete 1 Challenge Battle."],
        ["I'm... Emporio.", "Completed 1 panel of All-Star Battle Mode Part 6."],
        ["I've gotta get them before they get me!", "Ranked up in Ranked Match."],
        ["JoJo's Bizarre Adventure", "All achievements have been unlocked."],
        ["JoJolion", "Completed all panels of All-Star Battle Mode Part 8."],
        ["Let's drink tea and have a nice chat, eh?", "Purchased 100 gallery items."],
        ["My heart resonates!", "Landed an HHA."],
        ["Ode to Humanity", "Completed 1 panel of All-Star Battle Mode Part 1."],
        ["One hell of an experience!", "Completed 1 panel of All-Star Battle Mode Part 4."],
        ["Phantom Blood", "Completed all panels of All-Star Battle Mode Part 1."],
        ["So this is the Real Man's World!", "Completed 1 panel of All-Star Battle Mode Part 7."],
        ["So you saw it...", "Completed a Secret Mission for the first time."],
        ["Some words of praise would be nice!", "Purchased 500 gallery items."],
        ["Stardust Crusaders", "Completed all panels of All-Star Battle Mode Part 3."],
        ["Steel Ball Run", "Completed all panels of All-Star Battle Mode Part 7."],
        ["Stone Ocean", "Completed all panels of All-Star Battle Mode Part 6."],
        ["Sucks to be you!", "You or an opponent were hit by an arena gimmick for the first time."],
        ["Swish!", "Pulled off a Stylish Evade."],
        ["Tacos", "Got hit by all arena gimmicks."],
        ["That's the look of a real man!", "Pulled off a Flash Cancel."],
        ["The hell is this, a punching contest?", "Activated Rush Mode."],
        ["There can be only one!", "Won Tournament for the first time."],
        ["This is a story about lifting a curse...", "Completed 1 panel of All-Star Battle Mode Part 8."],
        ["This is... The World!", "Participated in an Online match."],
        ["True warriors love friendship and respect!", "Completed 1 panel of All-Star Battle Mode Part 2."],
        ["We'll train your arse off!", "Completed a match in Single VS Battle."],
        ["Whoa! Look out above you!", "Set off all arena gimmicks."],
        ["YadaaaaaaAAAAABAAAAAAAAAA", "Pulled off a Dramatic Finish for the first time."],
        ["You! You were looking!", "Completed 30 Secret Missions."],
        ["You've mastered this game, haven't you!", "Completed 50 Secret Missions."],
        ["Your \"end\" has no ending!", "Won 10 times in a row in Endless Battle."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
