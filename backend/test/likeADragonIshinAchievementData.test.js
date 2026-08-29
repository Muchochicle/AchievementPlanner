import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/like-a-dragon-ishin.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1805480 (fetched through this app's own services/steamApi.js).
// 46 of 56 ship a real, official Steam description, quoted
// verbatim below. The 10 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers kept
// spoiler-light), and boss/feat conditions cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("like-a-dragon-ishin");

test("getPlannerData('like-a-dragon-ishin') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for like-a-dragon-ishin");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Like a Dragon: Ishin! achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Like a Dragon: Ishin! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 officially-described Like a Dragon: Ishin! achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "FIRST_TOSA",
        "CLEAR_CHAPTER2",
        "CLEAR_CHAPTER4",
        "CLEAR_CHAPTER6",
        "CLEAR_CHAPTER8",
        "CLEAR_CHAPTER10",
        "CLEAR_CHAPTER12",
        "CLEAR_CHAPTER_ALL",
        "CLEAR_EX_HARD",
        "WIN_ZETUGI_100",
    ]);

    assert.strictEqual(hiddenApinames.size, 10, "sanity check - Like a Dragon: Ishin! has 10 hidden achievements");

    const officialAchievements = [
        ["A Well-Rounded Cast", "Caught a total of 10 fish."],
        ["An Honest Day's Work", "Grew 10 different kinds of plants in the garden."],
        ["Bakumatsu Boss", "Collected all achievements."],
        ["Bandit Rustler", "Cleared the Bandits' Cave."],
        ["Bandit Wrangler", "Cleared the Bandits' Mine."],
        ["Bring Down the Hammer", "Enhanced equipment 100 times."],
        ["Chef's Special", "Cooked 7 different dishes."],
        ["Cocksure", "Placed bets on 5 chicken races."],
        ["Divinely Virtuous", "Earned at least 300,000 Virtue in total."],
        ["Drop and Give Me 100", "Gathered 100 troopers for the Third Division."],
        ["Easy Come, Easy Go", "Tried your hand at each type of gambling."],
        ["Everybody Loves Ryoma", "Completed all Bonds."],
        ["Extraordinarily Virtuous", "Earned at least 100,000 Virtue in total."],
        ["Fairly Virtuous", "Earned at least 50,000 Virtue in total."],
        ["Halfway There", "Brought the Completion List to 50%."],
        ["I'll Have One of Everything", "Ordered at least one item at every restaurant."],
        ["Kyo's Little Helper", "Completed 10 Substories."],
        ["Like a Dragon in Heaven", "Cleared each of the courtesan minigames."],
        ["Limit Breaker", "Broke Ryoma's stats beyond their limits."],
        ["Lord of the Dance", "Performed every dance at Nichibuza."],
        ["Making a Difference", "Completed your first Bond."],
        ["Nominally Virtuous", "Earned at least 10,000 Virtue in total."],
        ["Noodle-Slinger Supreme", "Made at least 10 ryo in sales at the Udon Shop."],
        ["Now It Feels Like Home", "Changed the interior design of your second home."],
        ["On the Level", "Reached Level 50."],
        ["Platonic Bliss", "Watched a Slice of Life event at your second home."],
        ["Revelation Reveler", "Attained all Revelations."],
        ["Saint of Kyo", "Completed 40 Substories."],
        ["Sanada Takedown", "Cleared the Sanada Stronghold."],
        ["Savior of Kyo", "Completed all Substories."],
        ["Side Hustler", "Fulfilled 10 trade orders at your second home."],
        ["Sing Your Heart Out", "Performed every song at Utamaruya."],
        ["Social Butterfly", "Reached max Social Rank in one of the locales."],
        ["Student Among Masters", "Trained with each master of combat."],
        ["Taskmaster", "Brought the Completion List to 100%."],
        ["Tengu Tamer", "Helped the Tachibanagumi bring the Tengu to justice."],
        ["The Abyss Stares Back", "Entered a Battle Dungeon 3 times."],
        ["The Gods Hath Been Humbled", "Completed all tasks in the Diligence Records."],
        ["The Gods Rejoice at Thee", "Completed 20 tasks in the Diligence Records."],
        ["The Gods Sing Thy Praises", "Completed 50 tasks in the Diligence Records."],
        ["The Gods Smile Upon Thee", "Completed 5 tasks in the Diligence Records."],
        ["The Man Who Does It All", "Played every minigame."],
        ["This is MY Ring!", "Won 10 arena battles."],
        ["Ultimate Champion", "Completed every Ultimate Challenge."],
        ["World's Greatest Uncle", "Paid off Haruka's debt in full."],
        ["You've Got Soul", "Unlocked 10 abilities with Soul Orbs."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 10 hidden Like a Dragon: Ishin! achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["FIRST_TOSA", "Home, Sweet Home"],
        ["CLEAR_CHAPTER2", "Losing a Brother"],
        ["CLEAR_CHAPTER4", "A Messy Investigation"],
        ["CLEAR_CHAPTER6", "That Was Close!"],
        ["CLEAR_CHAPTER8", "The Bottom Drops Out"],
        ["CLEAR_CHAPTER10", "Secrets Revealed"],
        ["CLEAR_CHAPTER12", "Cold Betrayal"],
        ["CLEAR_CHAPTER_ALL", "Hero of a Nation"],
        ["CLEAR_EX_HARD", "Legend of an Era"],
        ["WIN_ZETUGI_100", "Showoff"],
    ];

    assert.strictEqual(names.length, 10, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
