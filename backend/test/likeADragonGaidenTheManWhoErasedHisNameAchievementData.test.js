import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/like-a-dragon-gaiden-the-man-who-erased-his-name.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2375550 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("like-a-dragon-gaiden-the-man-who-erased-his-name");

test("getPlannerData('like-a-dragon-gaiden-the-man-who-erased-his-name') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for like-a-dragon-gaiden-the-man-who-erased-his-name");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Like a Dragon Gaiden: The Man Who Erased His Name achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Like a Dragon Gaiden: The Man Who Erased His Name achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Like a Dragon Gaiden: The Man Who Erased His Name achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Always Prepared", "Obtained 10 types of equipment items."],
        ["Arcade Dweller", "Played 6 different games at the arcade."],
        ["At Your Service", "Completed 10 requests for Akame."],
        ["Bullseye", "Won a game of darts."],
        ["Castle on the Water", "Complete Chapter 2: Castle on the Water."],
        ["Castle VIP", "Completed all hostess missions at Castle Cabaret."],
        ["Drinkin' and Linkin'", "Bonded completely with Akame."],
        ["Extremely Heated", "Used Extreme Heat 30 times."],
        ["Fashion Scrub", "Obtained 15 types of outfit items."],
        ["Fashionista", "Obtained 30 types of outfit items."],
        ["Favored Fighter", "Reached 10,000 fans."],
        ["Ferocious Dragon", "Obtained 30 abilities through Upgrade Abilities."],
        ["First King Dethroned", "Defeat the first of the Castle Coliseum's Four Kings in Hell's arena."],
        ["Fledgling Dragon", "Obtained 10 abilities through Upgrade Abilities."],
        ["Fourth King Dethroned", "Defeat the fourth of the Castle Coliseum's Four Kings."],
        ["Go-To Guy", "Completed 15 requests for Akame."],
        ["Gold Tier", "Earned a Gold rank at the Castle."],
        ["Gotta Catch Some Balls!", "Obtained some Balls."],
        ["Heavenly VIP", "Completed all hostess missions at Club Heavenly."],
        ["Hell's Champion", "Completed all matches with a Platinum rank."],
        ["Hell's Keeper", "Completed all matches with a Silver rank."],
        ["Hell's Patron", "Completed all matches with a Gold rank."],
        ["Hidden Dragon", "Complete Chapter 1: Hidden Dragon."],
        ["Left in the Dust", "Won 3 Rival Matches in Pocket Circuit."],
        ["Legendary Dragon", "Obtained 50 abilities through Upgrade Abilities."],
        ["Like a Bee", "Activated the Hornet gadget during battle 100 times."],
        ["Like a Firefly", "Detonated the Firefly gadget during battle 50 times."],
        ["Like a Snake", "Activated the Serpent gadget during battle 50 times."],
        ["Like a Spider", "Activated the Spider gadget during battle 50 times."],
        ["Locked Up", "Obtained 30 items from coin lockers."],
        ["Neighborhood Defender", "Completed 30 Stroll n' Patrol missions."],
        ["Neighborhood Hero", "Completed 50 Stroll n' Patrol missions."],
        ["Neighborhood Watch", "Completed 10 Stroll n' Patrol missions."],
        ["Platinum Tier", "Earned a Platinum rank at the Castle."],
        ["Pocket Circuit Pro", "Unlocked the Masters Circuit in Pocket Circuit."],
        ["Prizefighter", "Reached 30,000 fans."],
        ["Respectable Dragon", "Obtained 20 abilities through Upgrade Abilities."],
        ["Retro Gamer", "Played 5 different games on the SEGA Master System."],
        ["Rising Superstar", "Went to karaoke with Akame and sang a duet."],
        ["Rookie Fighter", "Reached 1,000 fans."],
        ["Royal Gambler", "Played at the casino and gambling hall in the Castle."],
        ["Second King Dethroned", "Defeat the second of the Castle Coliseum's Four Kings."],
        ["Silver Tier", "Earned a Silver rank at the Castle."],
        ["Strength in Numbers", "Recruited 20 members to the Joryu Clan."],
        ["Surgical Precision", "Completed a 1-Shot Challenge on normal difficulty."],
        ["Taking Requests", "Completed 5 requests for Akame."],
        ["The Dragon of Dojima", "Obtained all achievements."],
        ["The Laughing Man", "Complete Chapter 4: The Laughing Man."],
        ["The Man Who Erased His Name", "Complete Chapter 5: The Man Who Erased His Name - the finale, described here spoiler-free."],
        ["The Man Who Had Too Many Hobbies", "Played 10 minigames."],
        ["The Man Who Knew Too Much", "Complete Chapter 3: The Man Who Knew Too Much."],
        ["The World's Strongest", "Defeat Amon, the hidden superboss, in the Castle Coliseum."],
        ["They Can't Stop Us All", "Recruited 30 members to the Joryu Clan."],
        ["Third King Dethroned", "Defeat the third of the Castle Coliseum's Four Kings."],
        ["To Train Beyond", "Bonded completely with 10 Joryu Clan members."],
        ["To Train in Death", "Bonded completely with 5 Joryu Clan members."],
        ["To Train in Life", "Bonded completely with a Joryu Clan member."],
        ["Trendsetter", "Obtained 50 types of outfit items."],
        ["Untouchable", "Used Ultimate Counter 5 times."],
        ["Up-and-Coming Fighter", "Reached 3,000 fans."],
        ["Welcome to the Family", "Recruited 10 members to the Joryu Clan."],
        ["Whip-Splash", "Threw an enemy into the river with the Spider gadget."],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
