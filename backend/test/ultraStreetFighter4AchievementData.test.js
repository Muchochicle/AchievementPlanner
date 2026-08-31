import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ultra-street-fighter-4.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 45760 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ultra-street-fighter-4");

test("getPlannerData('ultra-street-fighter-4') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for ultra-street-fighter-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Ultra Street Fighter IV achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Ultra Street Fighter IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Ultra Street Fighter IV achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A dish best served cold", "Follow your anger by clearing Arcade Mode on Medium or higher without using a continue with Decapre."],
        ["Absolute Perfection", "Lauren's waiting, so how about you finish your fights quickly and get 30 Perfects. Sound good?"],
        ["All Clear", "To get strong takes lots of fighting! Clear Arcade Mode on Medium or higher with all characters!"],
        ["All For One", "Strength in numbers! Gather a team of four and defeat another in any Team Battle!"],
        ["Barrel of Laughs", "No need for barrels without oil! Score 110,000 points or more in the Barrel Buster bonus stage!"],
        ["Battle Master", "Only winners can attain such beauty. Win 30 Multiplayer Battle matches and I may share my beauty secrets."],
        ["Birth of the Oni", "To surpass the power of Oni, you must defeat him in Arcade Mode on the hardest setting."],
        ["Bring it on!", "No comrade, this will not do! We must become stronger, for our fans! Fight 100 Multiplayer Battle matches!"],
        ["Clear Headed", "Hey! Got time to kill? Try to clear Arcade Mode on Medium or higher! That's all you gotta do!"],
        ["Dan the Man", "Mastery of the Saikyo arts requires mastery of the Personal Action! Collect 'em all, punk!"],
        ["Double Feature", "Initiative is everything! Surprise the enemy by using both Ultra Combos in a single Ranked Match!"],
        ["Endless Lobbyist", "It's only natural for warriors to seek fights! Create 30 Endless Battle lobbies!"],
        ["Endless Ten", "Throw away your fears and focus on the fight! Win 10 fights in a row in Endless Battle!"],
        ["Entitled", "A Title does not tell all of a man, sir, but if I were to see one Title, I'd want them all..."],
        ["EXtra! EXtra!", "Battle requires courage! Train by using your EX Gauge to successfully land 100 EX Moves!"],
        ["Fashion Plate", "Even a top rate fighter needs to coordinate properly! You gotta get all of the Colors first!"],
        ["First Timer", "I'll never forget my first time for Ryu's sake! Win one Ranked Match! Gotta aim for the top!"],
        ["Fivepeat", "This is your real power, child? Show me it's not luck by winning 5 Ranked Matches in a row!"],
        ["For the Utopia!", "Assert leadership and clear Arcade Mode on Medium or higher without using a continue with Rolento."],
        ["From C to Shining C", "You think you're good, don't you? Prove it by ranking up all characters to C Rank!"],
        ["Giant Attack", "Reach the league's top and clear Arcade Mode on Medium or higher without using a continue with Hugo."],
        ["Good old times", "A strong fighter has no fear of change! Defeat your Street Fighter IV self on the Hardest difficulty!"],
        ["Good Start", "All of nature must withstand a trial. You must clear 10 trials in Trial mode to succeed."],
        ["Hard Times", "To escape death is to beat the strongest of the strong. Finish Arcade Mode on Hardest, kid!"],
        ["Herculean Effort", "Can you finish Arcade Mode on Medium or higher without using a continue? Show me you can!"],
        ["Iconoclast", "Oh my gosh, those Icons are so adorable! I gotta find Don-chan and catch 'em all!"],
        ["It Begins", "The fight starts here! Set your Title and Icon, and begin fighting on Multiplayer Battle!"],
        ["It Takes Focus", "Your mission, should you wish to join Delta Red, is to connect with 100 Focus Attacks! "],
        ["Just Enough!", "Dude, just clear Arcade Mode on Medium or higher without using a continue with Yun!  Piece of cake!"],
        ["Keep on Truckin'", "If you want to focus on nothing but the fight, entering an Endless Battle is for you!"],
        ["Legendary Fighter", "I shall make you the right hand of Shadaloo if you can win 100 Multiplayer Battle matches!"],
        ["Long Time No See", "Do you wish for defeat? If so, complete Arcade Mode on Hardest difficulty and beat Gouken!"],
        ["Moving On Up", "Ya need to do anything to reach the top of the food chain! Let's see a Rank Up via Ranked Match!"],
        ["New Threads", "Use a new Title and Icon, and fight in one Multiplayer Battle match. Right on!"],
        ["Now You C Me...", "I wrestle only the strong! You shall rank up to C Rank if you wanna face me, comrade!"],
        ["Oh! My Car!", "Hee hee, destruction is so much fun! Score 80,000 points or more in the Car Crusher bonus stage!"],
        ["Overachiever", "Attain all the Achievements! The path of the warrior demands this from those who walk on it!"],
        ["Overwhelming Power", "If you seek power, clear Arcade Mode on Medium or higher without using a continue with Evil Ryu."],
        ["Prep Time", "You need study materials to make your battle plan. Follow one player in the Leaderboards."],
        ["Quarter Up", "Fight 30 opponents via Arcade Fight Request. It'd be easy with the right bait, he he."],
        ["Replayer", "Watch 30 Replays via the Replay Channel! Isn't it fun watching people go at it tooth and nail!?"],
        ["Rival Schooled", "See your future by clearing every Rival Battle on Medium or higher with every character."],
        ["Road to Victory", "You wanna get that fight money? You're gonna have to win 10 Multiplayer Battle matches first, sucka!"],
        ["Special Movement", "Do a Special Move 100 times! If you're a true student of the Rindo-kan dojo, it's your duty!"],
        ["Speed Freak", "Finish each round in Arcade Mode on Medium or higher in 20 seconds or less. Too easy."],
        ["Sunspotter", "Amigo, perform 365 Super or Ultra Combo finishes against your opponents! The dawn is coming!"],
        ["Super, Man!", "To battle is to win a fight with overwhelming strength! Show me you can do 100 Super Combos!"],
        ["Superior Super", "Trust your instincts and winning will come easy. Let's begin with 50 Super Combo finishes!"],
        ["Team Lobbyist", "Hey mon, battlin' is fun, no? Go out and create 30 Team Battle lobbies and enjoy the rhythm!"],
        ["Team Mate", "Win 1 Team Battle match, and you will learn that teamwork can help you become stronger!"],
        ["Team Player", "A 1-on-1 fight is fun, but it's more fun with friends! Try fighting in a Team Battle!"],
        ["Teamworker", "A pro can win with any team. Win 10 Team Battles but don't forget, you have to win too!"],
        ["Tenpeat", "Don't hold back your true potential! Win 10 Ranked Matches in a row!"],
        ["The Awakening", "As if you could ever defeat Evil Ryu in Arcade Mode on the hardest difficulty.  See for yourself!"],
        ["The world is my stage", "Dance with everyone! Clear Arcade Mode on Medium or higher without using a continue with Elena!"],
        ["This is Madness!", "Fighting is fun, huh? Well then, let's aim for 300 Multiplayer Battle matches fought, OK buddy?"],
        ["Three For The Road", "In the pursuit of strength, one must have a goal! In Endless Battle win 3 matches in a row."],
        ["Threepeat", "You think being this good is easy? Let's see you win 3 Ranked Matches in a row, champ!"],
        ["Toxic Beauty", "No more mocking! Clear Arcade Mode on Medium or higher without using a continue with Poison."],
        ["Trail of Trials", "There is no shortcut in the art of Yoga. Aim to clear any character's Trial mode!"],
        ["Transcendent", "Ascend beyond oneself by clearing Arcade Mode on Medium or higher without using a continue with Oni."],
        ["Trial Athlete", "I shall assimilate all and be all-powerful! Clear all Trial challenges, and so can you!"],
        ["Ultimate Ultra", "Candy always says you gotta win with style, so go out there and perform 50 Ultra Combo finishes!"],
        ["Ultra Effective", "New adventures await! Win a Ranked Match with a character added in Ultra Street Fighter IV!"],
        ["Ultra, Man!", "If yer gonna fight, give it your all, pal. Performing 100 Ultra Combos oughta do it, eh?"],
        ["Up to Snuff", "Clear Arcade Mode on Medium or higher without using a continue with Yang. It's simple!"],
        ["Worldly Warrior", "Let's do this, amigo! Fight 50 Multiplayer Battle matches, because that's the only way to become strong!"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
