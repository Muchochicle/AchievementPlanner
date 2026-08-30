import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wildfrost.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1811990 (fetched through this app's own services/steamApi.js).
// 5 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wildfrost");

test("getPlannerData('wildfrost') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for wildfrost");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Wildfrost achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Wildfrost achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Wildfrost achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Balloonist", "Win a Daily Voyage"],
        ["Beastmaster", "Defeat a Boss without applying Snow to them"],
        ["Berry Good", "Have 30 or more Health on a single unit"],
        ["Best Friends", "Win a run with your pet as your only active Companion"],
        ["Big Hitter", "Deal 50 damage in a single hit"],
        ["Bigger Hitter", "Deal 100 damage in a single hit"],
        ["Charmless", "Win a run without any Charms equipped"],
        ["Clunkmaster", "Win a run with the Clunkmaster tribe"],
        ["Feed the Beast", "Feed the Muncher a Consume item. No starting clan begins with a Consume item, so find one early in a run and feed it to the Muncher (you can abandon the run right after if you are just going for the achievement)."],
        ["Gnome Friend", "Spare the Naked Gnome. On rare occasions (only on your first encounter with it) a Naked Gnome appears at the very start of a boss battle - defeat the boss without killing the gnome to unlock this."],
        ["Gnomebringer", "Win a run with the Naked Gnome on your team - any ending counts, not just the true one, so recruiting and winning with the Gnome on a normal run is enough."],
        ["High Roller", "Buy 3 Charms from a single shop in one visit - charms get more expensive each time you buy one at the same shop, so save up before spending."],
        ["Hoarder", "Have 12 or more cards in your hand at once"],
        ["Icemaster", "Stack 5 Block on a single target"],
        ["Lone Survivor", "Win a battle with just your Leader remaining"],
        ["Long Live the King", "Survive an attack from King Moko and win the battle"],
        ["Minimalist", "Win a battle without any cards left in your deck"],
        ["One Punch", "Defeat the Frost Guardian with a Scrappy Sword"],
        ["Rampage", "Stack x10 Frenzy on a single target"],
        ["Ritual", "Sacrifice 5 allies in a single battle"],
        ["Shademancer", "Win a run with the Shademancer tribe"],
        ["Snowball Fight", "Stack 15 Snow on a single target"],
        ["Snowdweller", "Win a run with the Snowdweller tribe"],
        ["Sunbringer", "Defeat the Heart of the Storm, the game's true final boss. It only appears if you form the Lumin Vase (from Lumin Goop plus the Broken Vase) and have at least 10 points of Storm Bells equipped - Storm Bells start at 5 and increase by 1 each run you complete, so this needs several prior clears before the true fight becomes reachable."],
        ["Tough Nut", "Stack 50 Shell on a single target"],
        ["Toxic", "Stack 20 Shroom on a single target"],
        ["Undefeated", "Achieve a 3 Win Streak"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 5 hidden Wildfrost achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["High Roller", "Gnome Friend", "Feed the Beast", "Sunbringer", "Gnomebringer"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
