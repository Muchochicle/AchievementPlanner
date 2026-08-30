import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grand-theft-auto-iv.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 12210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("grand-theft-auto-iv");

test("getPlannerData('grand-theft-auto-iv') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for grand-theft-auto-iv");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Grand Theft Auto IV achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Grand Theft Auto IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Grand Theft Auto IV achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Assassin's Greed", "Complete all 9 assassin missions."],
        ["Chain Reaction", "You must blow up 10 vehicles in 10 seconds."],
        ["Cleaned The Mean Streets", "Capture 20 criminals through the police computer."],
        ["Courier Service", "Complete all 10 package delivery jobs."],
        ["Dare Devil", "Complete 100% of the unique stunt jumps."],
        ["Dial B For Bomb", "Unlock the special ability of phoning for a bomb to be placed."],
        ["Driving Mr. Bellic", "Unlock the special ability of taxi."],
        ["Endangered Species", "Collect every hidden package in the game."],
        ["Fed The Fish", "Complete the mission \"Uncle Vlad\"."],
        ["Finish Him", "Complete 10 melee counters in 4 minutes."],
        ["Full Exploration", "Unlock all the islands."],
        ["Genetically Superior", "Come first in 20 singleplayer street races."],
        ["Gobble Gobble", "Score 3 strikes in a row, a turkey, in 10-pin bowling."],
        ["Gracefully Taken", "Complete mission \"I'll Take Her\"."],
        ["Half Million", "Reach a balance of $500,000."],
        ["Impossible Trinity", "Complete mission \"Museum Piece\"."],
        ["It'll Cost Ya", "Complete a taxi ride without skipping from one island to another."],
        ["Key To The City", "Achieve 100% in \"Game progress\" statistic."],
        ["King of QUB3D", "Beat the High Score in QUB3D."],
        ["Liberty City (5)", "After meeting all possible friends, the ones left alive all like you above 90%."],
        ["Liberty City Minute", "Complete the story missions in less than 30 hours."],
        ["Lowest Point", "Complete mission \"Roman's Sorrow\"."],
        ["Manhunt", "Complete the most wanted side missions from the police computer."],
        ["No More Strangers", "Meet all random characters."],
        ["Off The Boat", "Complete the first mission."],
        ["One Hundred And Eighty", "In a darts game score 180 with 3 darts."],
        ["One Man Army", "Survive 5 minutes on 6 star wanted level."],
        ["Order Fulfilled", "Complete all 10 Exotic Export orders."],
        ["Pool Shark", "Beat a friend at pool."],
        ["Retail Therapy", "Unlock the special ability of buying guns from a friend."],
        ["Rolled Over", "Do 5 car rolls in a row from one crash."],
        ["Sightseer", "Fly on all helicopter tours of Liberty City."],
        ["TBoGT: Adrenaline Junkie", "Freefall for the longest possible time. (The Ballad of Gay Tony)"],
        ["TBoGT: Bear Fight", "Win the L.C. Cage Fighters championship. (The Ballad of Gay Tony)"],
        ["TBoGT: Catch the Bus", "Dance perfectly in both Tony's nightclubs. (The Ballad of Gay Tony)"],
        ["TBoGT: Diamonds Forever", "Complete the Trinity. (The Ballad of Gay Tony)"],
        ["TBoGT: Four Play", "Hit a flag with a golf ball four times. (The Ballad of Gay Tony)"],
        ["TBoGT: Gold Star", "Score 100% in all missions. (The Ballad of Gay Tony)"],
        ["TBoGT: Gone Down", "Complete all base jumps. (The Ballad of Gay Tony)"],
        ["TBoGT: Maestro", "Finish the Ballad. (The Ballad of Gay Tony)"],
        ["TBoGT: Past the Velvet Rope", "Score 80% or above in all missions. (The Ballad of Gay Tony)"],
        ["TBoGT: Snow Queen", "Complete 25 drug wars. (The Ballad of Gay Tony)"],
        ["That Special Someone", "Complete mission \"That Special Someone\"."],
        ["That's How We Roll!", "Unlock the special ability of helicopter."],
        ["TLAD: Easy Rider ", "Finish the story. (The Lost and Damned)"],
        ["TLAD: Full Chat", "Build Terry and Clay's toughness to 100%. (The Lost and Damned)"],
        ["TLAD: Get Good Wood", "In the bike races, whack off 69 bikers with a bat. (The Lost and Damned)"],
        ["TLAD: One Percenter", "Help Billy get his bike back. (The Lost and Damned)"],
        ["TLAD: The Lost Boy", "Become leader of The Lost. (The Lost and Damned)"],
        ["Under The Radar", "Fly underneath the main bridges in the game that cross water with a helicopter."],
        ["Walk Free", "Lose a 4 star wanted rating by outrunning the cops."],
        ["Warm Coffee", "Successfully date a girl to be invited into her house."],
        ["Wheelie Rider", "Do a wheelie lasting at least 500 feet on a motorbike."],
        ["You Got The Message", "Deliver all 30 cars ordered through text message."],
        ["You Won!", "Complete the final mission."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
