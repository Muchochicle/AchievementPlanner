import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/party-animals.json - 116 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1260320 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 116 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("party-animals");

test("getPlannerData('party-animals') returns real planner data with 116 curated achievements", () => {

    assert.ok(game, "expected real planner data for party-animals");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 116);

});

test("every Party Animals achievement has a unique id from 1 to 116 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 116 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 116);
    assert.strictEqual(new Set(apinames).size, 116);

});

test("every Party Animals achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 116 Party Animals achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["10 Quick Match Wins", "Win 10 Quick Match games"],
        ["666", "In Buzz Ball, single-handedly accumulate all points for your team and win (Quick Match)"],
        ["Airline VIP", "In Trebuchet, ride in launched trebuchet 10 times in one game (Quick Match)"],
        ["An Able Bodied Crew", "Complete the Black Sails duo mode on hard or beast difficulty"],
        ["Animal Unlock: 20", "Unlock 20 Characters"],
        ["Arthur's Dream", "In Blackhole Lab, knock out 1 opponent while afloat in mid-air (Quick Match)"],
        ["Avatar Master", "Unlock 15 avatars"],
        ["Aye aye, Captain!", "Finish the Black Sails solo mode"],
        ["Ball Weapon", "In Beast Football, long pass and knock out opponent (Quick Match)"],
        ["Balloon Runner", "In Safely Afloat, achieve a score within the initial 30 seconds of the game (Quick Match)"],
        ["Band Of Brothers", "Team up and win 10 Quick Match games alongside friends"],
        ["Beast of Mount Akina", "In Nemo Kart – Shanghai, perform 34 drift boosts in a single race (Quick Match)"],
        ["Big Brains", "In the Lab, get to know 4 great scientists' names"],
        ["Biofuels", "In Fluffy Redemption, throw opponents into the firebox for 10 times in one game (Quick Match)"],
        ["Bowling Alley Cat", "In Beast Hockey, strike the puck, knock out over 2 players and notch a score (Quick Match)"],
        ["Captain Nemo", "Earn a 3-star rating in Black Sails solo mode"],
        ["Case Closed", "In Typhoon, eliminate one opponent by throwing it into the missile hatch (Quick Match)"],
        ["Chill In The Wind", "In Wind Tunnel, win one round without grabbing levers and gates (Quick Match)"],
        ["Currahee", "Team up and win 1 Quick Match game alongside friends"],
        ["Diamond Merchant", "In Into The Game, win one game and score 20 diamonds on your own(Quick Match)"],
        ["Die Hard", "In Broken Arrow, win 5 Quick Match Classic games"],
        ["Dog Behind The Door", "In Wind Tunnel, survive for over 45 seconds without being blown by the wind (Quick Match)"],
        ["Dog In The Wind", "In Wind Tunnel, win 5 Quick Match Classic games"],
        ["Drink up, me hearties, yo ho!", "Complete the Black Sails duo mode on beast difficulty"],
        ["Dutch's Plan", "In Fluffy Redemption, experience a complete team wipeout (Quick Match)"],
        ["Escape the Gator", "In Gator Valley, win 5 Quick Match Classic games"],
        ["Fashionista", "Unlock 30 Outfits"],
        ["Fast and Furry", "In Nemo Kart – Shanghai, finish a race within 2:38.00 (Quick Match)"],
        ["Fight Everywhere", "Win 20 Custom Games in different maps (require more than 6 human players when game ends)"],
        ["Fireworks", "In Typhoon, hold onto the missile for at least one second for 3 times in one round (Quick Match)"],
        ["First Strike", "Win 1 Quick Match game"],
        ["Fly Me To The Moon", "In Safely Afloat, win 5 Quick Match Classic games"],
        ["Friends", "Get 10 new in-game friends"],
        ["Fur Weight Champion", "In Ring of Garfat, win 5 Quick Match Classic games"],
        ["G-Man", "In Blackhole Lab, win 5 Classic Quick Match games"],
        ["Give Me Five", "Team up and finish 10 Quick Match games alongside friends"],
        ["Gold Rusher", "In Into The Game, win one game and score 50 coins on your own (Quick Match)"],
        ["Hat Trick", "In Beast Soccer, score 3 goals in one game (Quick Match)"],
        ["Hey, Wilson", "In Cast Away, find and pick up the Wilson volleyball"],
        ["Hooray! The Earth's Strongest Animal", "In Ichiban, win 5 Quick Match Classic games"],
        ["Hot Dog", "In Winter Is Coming, win one round without getting frozen (Quick Match)"],
        ["Hot Shot", "Win 5 consecutive games in Quick Match"],
        ["I Have A Friend", "Team up and finish 1 Quick Match game alongside friends"],
        ["I'm Back", "In Lollipop Factory, climb out of the submission gate (Quick Match)"],
        ["I'm Enlightened", "In the Lab, stand in front of the signboard at the Monolith room for 5 seconds"],
        ["I'm Sorry, Dave", "Win 5 games as a Killer in Space Crisis"],
        ["Ice Block", "In Ichiban, win a round by freezing yourself to evade elimination by the poison cloud (Quick Match)"],
        ["Ice Dog", "In Ice Breaker, win 5 Quick Match Classic games"],
        ["Immortal Kombat", "In Into The Game, knock out opponent playing arcade for 3 times in one game (Quick Match)"],
        ["Infinity And Beyond", "Win 20 games in Space Crisis"],
        ["Iron Mike", "In Ring of Garfat, win a round within 91 seconds (Quick Match)"],
        ["Jack And Rose", "In Ice Breaker, win one round by staying alive with teammate (Quick Match)"],
        ["Justice Rains From Above", "In Ichiban, leap from a central pillar and knock out one player (Quick Match)"],
        ["Keep Breathing", "Finish Cast Away"],
        ["Keep On Keeping On", "Successfully finish all weekly challenges for 3 weeks in a row"],
        ["L'arrivée d'un train", "In Fluffy Redemption, win 5 Quick Match Classic games"],
        ["Less is More", "In Lollipop Factory, win the game by only submitting little gummies (Quick Match)"],
        ["Level 100", "Reach Animal Level 100"],
        ["Level 50", "Reach Animal Level 50"],
        ["Madness from the Sea", "Win 3 games as a Neutral role in Factory Crisis"],
        ["Man vs. Wild", "In Winter Is Coming, fall into the frozen lake's hole and return to a bonfire (Quick Match)"],
        ["Match Point", "Win Last Stand Classic in exactly 9 rounds (Quick Match)"],
        ["Mine Cart Carnage", "In Safely Afloat, propel the mine cart over the cliff's edge (Quick Match)"],
        ["Mission: Impossible", "In Blackhole Lab, win one round prior to the 2nd black hole's generation (Quick Match)"],
        ["My Rules", "Complete 1 Custom Game with modified settings"],
        ["Navy OTTERs", "In Typhoon, win 5 Quick Match Classic games"],
        ["Nemo For Speed", "Earn a 3-star rating in the Lab"],
        ["New Dawn", "Win 15 games as a Goodie in Space Crisis"],
        ["Nimble As A Cat", "In Ring of Garfat, win any round without encountering any falling rocks or flames (Quick Match)"],
        ["Not Like Pat Roach", "In Broken Arrow, hold a propeller, spin a lap, and survive (Quick Match)"],
        ["OHHHHHH", "Win 1 Quick Match game without a single knockout"],
        ["Outfit Unlocked: 20", "Unlock 20 Outfits"],
        ["Patte d'Or", "In Beast Soccer, win 5 Quick Match Classic games"],
        ["Peace Elite", "In Beat-Up Bridge, win one round without hitting anyone else (Quick Match)"],
        ["Perfect Guard", "In Beast Hockey, parry the puck using a shield thrice in a match (Quick Match)"],
        ["Piece of Cake", "Win Last Stand Classic in exactly 3 rounds (Quick Match)"],
        ["Platinum Animal", "Unlock 92 achievements"],
        ["Punch In", "Successfully finish 4 weekly challenges within a single week"],
        ["Ready Player One", "In Into The Game, win 5 Quick Match Classic games"],
        ["Reservoir Dogs", "In Gator Valley, win one round with teammate while both of you are in the water (Quick Match)"],
        ["Roy Makaay", "In Beast Soccer, score a goal within the initial 10 seconds of the round (Quick Match)"],
        ["Run Forrest Run", "In Beast Football, score a touchdown within the initial 15 seconds of the round (Quick Match)"],
        ["Safely First", "Win 1 Nemo Kart games (Quick Match)"],
        ["Sayonara", "In Ichiban, eliminate an opponent by striking them out of the playing field (Quick Match)"],
        ["Shock Damage", "In Buzz Ball, trigger the buzz ball blast 10 times in one game (Quick Match)"],
        ["Smooth Operator", "In Ice Breaker, win one round without falling into the water (Quick Match)"],
        ["Sportsmanship", "Knock out 1 player at the podium"],
        ["Still Waters", "In Gator Valley, win one round prior to the onset of the 3rd wave (Quick Match)"],
        ["Super Bowl", "In Beast Football, win 5 Quick Match Classic games"],
        ["Superdry", "In Typhoon, win one round without falling into the water (Quick Match)"],
        ["Surfer Dogs", "In Gator Valley, win one round with teammate without falling off the floating bridge (Quick Match)"],
        ["Survivor", "In Winter Is Coming, win 5 Classic Quick Match games"],
        ["Tale of the Inspector", "Win 15 games as a Goodie in Factory Crisis"],
        ["Tarzan", "In Beat-Up Bridge, endure for 20 seconds after main-rope snap and win the round (Quick Match)"],
        ["The Call", "Win 20 games in Factory Crisis"],
        ["The Dream Team", "Team up and win 5 consecutive Quick Match games alongside friends"],
        ["The Horror in Clay", "Win 5 games as a Killer in Factory Crisis"],
        ["The Hurt Locker", "In Trebuchet, successfully defuse 10 incoming barrel bombs in a single game (Quick Match)"],
        ["The Klaw", "In Buzz Ball, single-handedly notch a score in the final 10 seconds of the 11th round (Quick Match)"],
        ["The Mighty Ducks", "In Beast Hockey, win 5 Quick Match Classic games"],
        ["The Monolith", "Win 3 games as a Neutral role in Space Crisis"],
        ["The Vortigaunts", "In Blackhole Lab, survive from the 4th black hole without using the chain (Quick Match)"],
        ["This is my island!", "Earn a 3-star rating in Cast Away"],
        ["Thunderbolt", "In Buzz Ball, win 5 Quick Match Classic games"],
        ["Total War", "In Trebuchet, win 5 Quick Match Classic games"],
        ["Touch Down", "In Broken Arrow, sustain survival for more than 2 min 30 sec in one round (Quick Match)"],
        ["Twice The Fun", "Finish 2 Custom Games with multiple local players(splitscreen)"],
        ["Up", "In Safely Afloat, grasp a balloon and stay aloft for 60 seconds in a game (Quick Match)"],
        ["Waterloo Bridge", "In Beat-Up Bridge, win 5 Classic Quick Match games"],
        ["Welcome To The Party", "Finish the Lab"],
        ["Who Did That", "Throw item and knock out 5 opponents as spectator (require more than 6 human players when game ends)"],
        ["Who's Laughing Now", "Be the sole player who hasn't been knocked out at the photo-taking moment"],
        ["Willy Wonka", "In Lollipop Factory, win 5 Quick Match Classic games"],
        ["Working Dog", "In Fluffy Redemption, throw 10 coal pieces into the firebox without being eliminated (Quick Match)"],
        ["Wreck-It Ralph", "In Wind Tunnel, survive even after all levers have been broken (Quick Match)"],
        ["Yo Man", "Get 1 new in-game friend"],
    ];

    assert.strictEqual(officialAchievements.length, 116, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
