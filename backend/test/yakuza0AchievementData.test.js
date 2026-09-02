import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yakuza-0.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2988580 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("yakuza-0");

test("getPlannerData('yakuza-0') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for yakuza-0");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Yakuza 0 achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Yakuza 0 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Yakuza 0 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...I Did It for the Achievement", "Watch a sexy video."],
        ["A Familiar Name", "Reached at a specific point in the main story."],
        ["A Host of Hostesses", "Get started with Cabaret Club Czar."],
        ["A Matter of Life or Death", "Reached at a specific point in the main story."],
        ["A Wise Investment", "Purchase ten or more abilities."],
        ["Amon Defeated", "Defeat the optional superboss Amon."],
        ["Awakened and Unleashed", "Reached at a specific point in the main story."],
        ["Best Served Cold?", "Reached at a specific point in the main story."],
        ["Big Hair in the Crosshairs", "Reached at a specific point in the main story."],
        ["Business Etiquette 101", "Reached at a specific point in the main story."],
        ["Call Me", "Go on a date with a girl you met at the telephone club."],
        ["Cat Scratch Fever", "Win ten bets on three-round tournaments at JCC."],
        ["Eye of the Dragon and Tiger", "Obtain all equipment parts."],
        ["Generosity of Strangers", "Reached at a specific point in the main story."],
        ["Half the Battle", "Get over 50% on your Completion List."],
        ["Hero of the Story", "Complete 40 substories."],
        ["High Roller", "Spend one billion yen."],
        ["Hitting the Bottle", "Reached at a specific point in the main story."],
        ["It Takes Two", "Reached at a specific point in the main story."],
        ["Just Beat It", "Reached at a specific point in the main story."],
        ["Lamb in the Lion's Den", "Reached at a specific point in the main story."],
        ["Lucky Star", "Get a top-grade item from a Dream Machine."],
        ["Make It Rain", "Throw away money on the street."],
        ["Master of Style", "Obtain all abilities for every style."],
        ["Mr. Shakedown Takedown", "Defeat Mr. Shakedown for the first time."],
        ["New Allies, New Foes", "Reached at a specific point in the main story."],
        ["Nostalgic for the 80s", "Reached at a specific point in the main story."],
        ["Painful Reunion", "Reached at a specific point in the main story."],
        ["Perfectionist", "Get 100% on your Completion List."],
        ["President Kiryu", "Get started with Real Estate Royale."],
        ["Prizefighter", "Defeat 30 or more opponents in Endless Rout."],
        ["Rich Taste", "Reached at a specific point in the main story."],
        ["Say You Wanna Dance", "Complete every disco song on any difficulty."],
        ["Smooth Criminal", "Reached at a specific point in the main story."],
        ["Story of My Life", "Complete all substories."],
        ["Stuff of Legend", "Complete the main story on Legend difficulty."],
        ["Talk of the Town", "Get over 1,000 fans in any area."],
        ["Tell Me a Story", "Complete 10 substories."],
        ["The Big Reveal", "Reached at a specific point in the main story."],
        ["The Dragon of Pocket Circuit", "Win all Pocket Circuit races."],
        ["The Glamorous Life", "Purchase the most expensive property."],
        ["The Promised Land", "Get 100% share in any area."],
        ["They Won't Mind", "Reached at a specific point in the main story."],
        ["Time to Say Goodbye", "Reached at a specific point in the main story."],
        ["Training in Style", "Complete one training mission with each master."],
        ["Walking On Sunshine", "Reached at a specific point in the main story."],
        ["We Built This City", "Reached at a specific point in the main story."],
        ["Welcome to the Jungle", "Get the best weapon search results report."],
        ["What a Player", "Play every minigame."],
        ["When It All Goes Wrong", "Reached at a specific point in the main story."],
        ["Where It All Began", "Obtain all other achievements."],
        ["Whip It Good", "Get five or more play bonuses fighting a single enemy."],
        ["Who Ya Gonna Call?", "Pick up a telephone card."],
        ["Worked Hard for the Money", "Throw away a total of five million yen."],
        ["You're Still Number One", "Max out the level of a platinum hostess."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
