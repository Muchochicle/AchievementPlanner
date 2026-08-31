import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-rising-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 45740 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dead-rising-2");

test("getPlannerData('dead-rising-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-rising-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Dead Rising 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Dead Rising 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Dead Rising 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice Rising", "Reached level 25. Halfway there!"],
        ["Bartender", "Mixed a drink. Tasty stuff!"],
        ["Better With a Friend", "Solved all case files in Co-op. You're a great friend!"],
        ["Big Spender", "Spent $6,000,000 total in Fortune City. Where did you get all that money?"],
        ["Chuck Greene: Cross-Dresser?", "Changed into all the clothes in the game. Zombie invasion is no excuse for poor style."],
        ["Clean Record", "Completed The Facts. The End... or is it?"],
        ["Come on! Follow Me!", "Escorted 8 survivors at once. It's a party, everyone is invited!"],
        ["Curiously Inventive", "Collected all combo cards hidden in Fortune City. Inspiration is all around you."],
        ["Custom Finish", "Gave your bike a custom paint job. Sweet ride!"],
        ["Data Miner", "Filled all entries in the notebook and made some friends along the way."],
        ["Death From Afar", "Used every type of ranged weapon on a zombie. They can't bite you if they're already dead."],
        ["Don't You Die on Me!", "Revived another player in Co-op. He owes you one."],
        ["Duct Tape FTW", "Created all combo weapons. Now put them to use!"],
        ["Explosive Temper", "Used every type of explosive on a zombie. Kaboom!"],
        ["Fashion Aficionado", "Changed into 10 different pieces of clothing. Looking dapper, chap!"],
        ["Father of the Month", "Gave Katey a gift. It's good to spoil her sometimes."],
        ["Father of the Year", "Gave Katey every possible gift. Bribery is the fastest way to earn a child's love!"],
        ["Finally Full", "Ate all types of food in the game. That can't be healthy."],
        ["Full Deck", "Collected all combo cards. All 49. Seems odd, doesn't it?"],
        ["Half Deck", "Collected 25 combo cards. So many combinations, so little time."],
        ["Having a Gas", "Killed 1,000 gas zombies. As if zombies weren't bad enough..."],
        ["He Hasn't Covered Wars...", "Used every type of firearm on a zombie. Bang!"],
        ["Head Trauma", "Used every type of melee weapon on a zombie. Anything is deadly in the right hands."],
        ["Hero of Fortune City", "Saved 50 survivors. What a great guy!"],
        ["Improper Behavior", "Spray-painted all Zombrex posters. They didn't do much good in the first place."],
        ["Judge, Jury and Executioner", "Defeated 10 psychopaths. The world is a safer place."],
        ["Justice Served ", "Completed Overtime Mode. TK got what he deserved."],
        ["Life Saver", "Collected all combo cards from survivors. The gift of zombie killing!"],
        ["Look at All That Juice!", "Created and consumed all mixed drinks in the game. Just like Mom used to make."],
        ["Masquerade", "Had 10 zombies with masks on at once. You showed them who's boss!"],
        ["Needs More Chainsaw", "Created a combo weapon. Introduce it to the nearest zombie!"],
        ["Professional Rising", "Reached level 50. You're a machine!"],
        ["Rising Star", "Came in first place in a single TIR event. Victory tastes sweet!"],
        ["Saving the Day", "Saved 10 survivors. But more are still out there..."],
        ["Slaughter - S = Laughter!", "Used every type of novelty weapon on a zombie. Lighten up a bit!"],
        ["Smashy", "Smashed 100 zombies using the Smash skill move. Brains everywhere!"],
        ["Stick 'em up", "Covered a zombie in objects. That sure was funny!"],
        ["Tape It or DIE!", "Created the secret combo weapon, the Wingman - combine Nectar (mix two Orange Juices, or Orange Juice and Beer) with a Queen (dropped by certain zombies, available after giving Katey Zombrex on Day 2) in a Maintenance Room."],
        ["The Skill to Survive", "Tamed Snowflake. Keep some steak handy, just in case."],
        ["TK's Favorite", "Played and won in all 9 TIR events. A true American hero!"],
        ["Tough Guy", "Collected all combo cards from psychopaths. Pried from their cold, dead fingers."],
        ["Vigilante Justice", "Defeated 5 psychopaths. There's a new sheriff in town!"],
        ["Win Big!", "Finished in first place in a TIR episode. Don and Paul love watching you go!"],
        ["Window Shopper", "Entered all the stores in the game. Did you buy anything?"],
        ["Wrong Kind of \"Chopper\"", "Killed 1,000 zombies while riding a motorcycle. Chainsaws on the side make it easier."],
        ["Z-Genocider 2: Genocide Harder", "Killed 53,596 zombies. You left them all for dead!"],
        ["Zombie Destruction", "Killed 5,000 zombies. Is that all you've got?"],
        ["Zombie Fu", "Killed 1,000 zombies barehanded. Those were some killer moves!"],
        ["Zombie Genocide Master", "Killed 72,000 zombies. King of carnage!"],
        ["Zombie Slaughter", "Killed 500 zombies. Not a bad start."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
