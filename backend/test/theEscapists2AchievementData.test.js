import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-escapists-2.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 641990 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-escapists-2");

test("getPlannerData('the-escapists-2') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-escapists-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every The Escapists 2 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every The Escapists 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 The Escapists 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["‘Tis But A Scratch", "Complete the unique single player escape."],
        ["A Camp Departure", "Escape the K.A.P.O.W Camp prison."],
        ["A Grave Affair", "Complete the unique single player escape."],
        ["All Mod Cons", "Use a customised character in-game."],
        ["Almost Haunted", "Complete the ‘Bump in the night’ quest."],
        ["Are You Lonesome Tonight?", "Spend 3 days total time in solitary over multiple prisons/sessions."],
        ["Are You Not Entertained?!", "Escape Big Top Breakout by any means."],
        ["Artful Dodger", "Craft an item."],
        ["Artisan", "Craft 50 unique items."],
        ["Bad Intentions", "Knock out 100 inmates."],
        ["Bad Intentions Part 2", "Knock out 50 guards."],
        ["Call Of Snooty", "Escape H.M.P. Offshore on Snooty the Dolphin."],
        ["Chilled Out", "Escape the Fort Tundra prison."],
        ["Clowning Around", "Complete the ‘No Laughing Matter’ quest."],
        ["Coffin Dodger", "Complete the ‘What it does in the shadows…’ quest."],
        ["Criminal Mastermind", "Max out the Intellect statistic."],
        ["Crook Of All Trades", "Complete the quota once for each of the jobs over multiple prisons/sessions."],
        ["Dr. Love", "Get whisked away by a hunky medic."],
        ["Drying Out", "Escape the H.M.P Offshore prison."],
        ["Escaping Is My Forte", "Escape the Rattlesnake Springs prison."],
        ["Good Intentions", "Go 3 consecutive days without raising your Guard Heat above 0 in a single session."],
        ["Holiday Blues", "Escape the Centre Perks 2.0 prison."],
        ["I ain’t afraid of no Ghost ", "Witness the ghost perform an otherworldly feat…"],
        ["I Am Your Father...", "Fight another player in the U.S.S Anomaly, when you are both armed with energy swords."],
        ["I want to Believe", "Escape the Area 17 prison."],
        ["I'm The Daddy", "Knock out every inmate at least once in a single prison."],
        ["I've Got A Cunning Plan", "Perform 7 unique escapes across the Classic prisons."],
        ["It’s A Long Shot", "Complete the unique single player escape."],
        ["It’s An Illusion, Not A Trick", "Complete the ‘Smoke and Mirrors’ Quest."],
        ["Keep It Clean!", "Tag 200 places throughout any prison."],
        ["Man's Best Friend", "Gain a high enough opinion from a dog."],
        ["Man's Worst Friend", "Get mauled by a guard dog."],
        ["Monster Mash ", "Complete the unique multiplayer escape."],
        ["Music Maestro", "Play on the instruments for 1 hour of in-game time."],
        ["Naked Lunch", "Attend dinner whilst being naked."],
        ["Oh What A Knight!", "Escape Dungeons and Duct Tape by any means."],
        ["One Pixellated Step...", "Escape the U.S.S Anomaly prison."],
        ["Online Enforcer", "Win 10 Online Versus Games."],
        ["Open Prison", "Play a Classic Game Online."],
        ["Pour Us A Brew Will Yer, Love?", "Make a cup of tea and gift it to another inmate or guard."],
        ["Riot Act", "Play a Versus Game Online."],
        ["Ripped on the Inside", "Max out the Strength statistic."],
        ["Royal Flush", "Use the Royal throne."],
        ["Scared Stiff", "Escape Wicked Ward by any means."],
        ["Siege The Day ", "Complete the unique multiplayer escape."],
        ["Soap On A Rope", "Spend 3 days total time in the showers over multiple prisons/sessions."],
        ["Stage Fright", "Avoid going to the Show Time routine for 3 days in a row."],
        ["Statistician", "Max out all 3 character statistics."],
        ["Tell Me What's Your Favour", "Complete 100 favours."],
        ["The Cake Is A Lie?", "Attack a guard with a cake."],
        ["The Great Escape", "Escape all Classic prisons."],
        ["The Mobile Escapist", "Escape from all 3 of the base game transport prisons"],
        ["The Naked Chef", "Complete a quota of the Kitchen job whilst being naked."],
        ["The Olympian", "Max out the Fitness statistic."],
        ["To Antiquity And Beyond", "Complete the ‘Eternally Grateful’ Quest."],
        ["To Me, To You", "Enter a multiplayer only area."],
        ["Wind Up Merchant", "Complete the unique multiplayer escape."],
        ["Yo Dawg, I heard you like Exhibits", "Complete the ‘It Belongs In A Museum’ quest."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
