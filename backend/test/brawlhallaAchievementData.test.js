import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/brawlhalla.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 291550 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("brawlhalla");

test("getPlannerData('brawlhalla') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for brawlhalla");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every Brawlhalla achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every Brawlhalla achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 65 Brawlhalla achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All I Do Is Win", "Win 250 matchmaking games."],
        ["And the Crowd Goes Wild!", "Win a Ranked 1v1 game with red damage on your last stock 5 times (Tie Breaker wins do not count)."],
        ["Big Hunk of Metal", "Reach level 10 with a Greatsword Legend"],
        ["BOMBHALLA!!", "Hit multiple opponents with a single Bouncy Bomb in a matchmaking game"],
        ["Brawling 25/8", "Reach level 25 with Legends using 8 different Weapons. "],
        ["Calm Before the Storm", "Play 3 games in the Ranked 1v1 matchmaking queue."],
        ["Can't Touch This", "Win a Ranked 1v1 game without losing any lives 3 times."],
        ["Cannon Fodder", "Reach level 10 with a Cannon Legend"],
        ["Carry the Team", " Get 6 KOs in a single Ranked 2v2 or Friendly 2v2 game"],
        ["Cash Money", "Earn a total of 25,000 Gold."],
        ["Check Out My Fresh Kicks", "Reach level 10 with a Battle Boots Legend."],
        ["Cutting Edge", "Reach level 10 with a Sword Legend. "],
        ["Deep Pockets", "Earn a total of 50,000 Gold."],
        ["Download Complete", "Win 10 best-of-3 series in matchmaking. "],
        ["Dribbling off Your Face", "Hit opponents with the same Spike Ball 4 times in a matchmaking game."],
        ["Established Main", "Reach level 40 with a Legend."],
        ["Falling with Style", "KO 10 opponents with Slide-Charged Signature Attacks in matchmaking games"],
        ["Feels Like the First Time", "Reach account level 40. "],
        ["Four's a Party", "Play 3 games in the Free-for-All matchmaking queue."],
        ["Gardening with a Black Thumb", "Reach level 10 with a Scythe Legend."],
        ["Getting to the Point", "Reach level 10 with a Spear Legend."],
        ["Go Long!", "KO an opponent with a thrown item 30 times in matchmaking games."],
        ["Halfway There! Right!?", "Reach account level 50."],
        ["High Stakes Hot Potato", "Catch 15 Bouncy Bombs in a row in Catch Bombs Training without frame-stepping."],
        ["Hit for the Cycle", "Hit opponents with all 6 of a Legend's Signature Attacks in 10 different matchmaking games."],
        ["Home Run King", "KO 500 opponents in matchmaking games."],
        ["I Believe You Can Fly", "KO 1,000 opponents in matchmaking games."],
        ["I'd Rather Be SHINAYYY", "Buy a Goldforged item from the store. "],
        ["It Slices, It Dices", "Reach level 10 with a Katars Legend."],
        ["It's Hammer Time", "Reach level 10 with a Grapple Hammer Legend."],
        ["Jack of All Trades", "Reach level 5 with 50 Legends"],
        ["Just Getting Started", "Win 10 matchmaking games."],
        ["Just One More Game!", "Reach account level 10."],
        ["Kill Them with Kindness", "Press the \"Say: GG!\" button after 66 different matchmaking games."],
        ["Knuckle Sandwich", "Reach level 10 with a Gauntlets Legend."],
        ["Launched into Orb-it", "Reach level 10 with an Orb Legend"],
        ["Let's Do This Again Next Week", "Play 3 games in the Brawl of the Week matchmaking queue."],
        ["Lighter than Air", "KO 50 opponents with Gravity-Canceled Light Attacks."],
        ["Making Your Foes Quiver", "Reach level 10 with a Bow Legend."],
        ["Matchmaker, Make Me a Match", "Play 30 matchmaking games."],
        ["No Spam Zone", "KO 10 opponents in Ranked 1v1 matches using only Light Attacks."],
        ["Not an Axe-ident", "Reach level 10 with an Axe Legend."],
        ["Now I Can Use Black in Strikeout", "Reach level 25 with 3 Legends"],
        ["Our Powers Combined", "Play 3 games in the Friendly 2v2 matchmaking queue."],
        ["Pew Pew Pew", "Reach level 10 with a Blasters Legend."],
        ["Practice Makes Perfect", "Reach level 5 with 2 Legends."],
        ["Putting in Work", "Reach level 10 with 10 Legends."],
        ["Sandbagger", "Lose a Ranked 1v1 match, opt into a rematch, change Legend, and win the rematch."],
        ["See Ya", "KO 25 opponents in matchmaking games."],
        ["Sir Lances-a-lot", "Reach level 10 with a Rocket Lance Legend. "],
        ["Sweep ALL the Legs", "Hit 3 opponents with a single Signature Attack 10 times. "],
        ["The Big 2-0", "Reach account level 20."],
        ["The Midas Touch", "Earn a total of 100,000 Gold. "],
        ["The Split Difference", "Reach level 10 with a Chakram Legend."],
        ["The Surpri-saac Newton", "KO an opponent with a Gravity-Canceled Heavy Attack 10 times in matchmaking games. "],
        ["They Grow Up So Fast", "Reach level 10 with 5 Legends."],
        ["Thrice as Nice", "Get 5 Triple KOs."],
        ["Til KO Do Us Part", "Play 3 games in the Ranked 2v2 matchmaking queue."],
        ["Time Flies When You're Having Fun", "Reach account level 30."],
        ["To Hell and Back", "Reach Wave 26 in Horde mode with Damage set to 100% or lower"],
        ["Twice as Nice", " Get 10 Double KOs in matchmaking games."],
        ["Wall Cleaner", "KO 25 opponents by dash-jumping into a Ground Pound Attack in matchmaking games"],
        ["Welcome to Brawlhalla!", "Play a matchmaking game. "],
        ["Witness Me!", "Win 100 matchmaking games."],
        ["You're Telling Me the Sky Forged This?", "Buy a Skyforged item from the store."],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
