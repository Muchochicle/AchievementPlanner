import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grid-autosport.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 255220 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("grid-autosport");

test("getPlannerData('grid-autosport') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for grid-autosport");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every GRID Autosport achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every GRID Autosport achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 GRID Autosport achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A good track record", "Unlock the \"International GP Championship\"."],
        ["A True Legend", "Win the \"GRID Legends Series\"."],
        ["An icon in the pit lane", "Advance a car to level 99 in Online."],
        ["Badge of Honour", "Earn a platinum medal in RaceNet Challenge."],
        ["Battled with the Best", "Complete a Street Racing championship with the Ravenwest team."],
        ["Been around the block", "Unlock the \"Pro GT World Masters\"."],
        ["Brand Awareness", "Satisfy all 6 sponsor objectives at least once in a Career season."],
        ["British Touring Legend", "Win the \"Touring Legends British Championship\"."],
        ["Done the Tour", "Reach level 10 in the Touring Car Career."],
        ["Downforce to be reckoned with", "Reach level 10 in Open Wheel Online."],
        ["Drag Queen", "Win the \"Funny Car World Championship\"."],
        ["Durable", "Reach level 10 in Endurance Online."],
        ["Endured with the Best", "Complete an Endurance Championship with the Ravenwest team."],
        ["European Touring Legend", "Win the \"Touring Legends European Championship\"."],
        ["Everyone's a winner", "Complete the \"GRID Legends Series\"."],
        ["Extra curricular", "Win a cup competition in your Career."],
        ["First of Many", "Win a race in your Career."],
        ["Flight of the Condors", "Win the \"Hotrod World Championship\"."],
        ["Flowed with the Best", "Complete a Tuner Competition with the Ravenwest team."],
        ["FTW", "Win 100 Online races."],
        ["Golden Coast", "Complete a run of California - Big Sur in under 2 minutes & 55 seconds."],
        ["Here are the keys", "Buy a car in Online."],
        ["Holeshot", "In Drag beat an opponent who had a faster \"Pass Time\" by having a faster \"Reaction Time\"."],
        ["I make this look good", "Finish the \"Super Modified World Masters\" in the top 3."],
        ["I've got what Rick Scott's got", "Win each discipline's most prestigious driver's championship for Ravenwest."],
        ["I've stopped counting", "Reach a total Online level of 250, all disciplines combined."],
        ["International Touring Legend", "Win the \"Touring Legends International Championship\"."],
        ["It's been a long road", "Finish the \"Ultimate Endurance Championship\" in the top 3."],
        ["Jack of all Trades", "Compete in all race types, including party modes."],
        ["Just the way I like it", "Complete a Custom Cup offline."],
        ["Just warming up", "Complete the first season of your Career."],
        ["King of the Hill", "Complete a run of Okutama Sprint - Mizu Mountain in under 3 minutes & 15 seconds."],
        ["King of the Streets", "Finish the \"Supercar World Masters\" in the top 3."],
        ["Leading them off", "Qualify for the front row of the grid."],
        ["Long-Haul Legend", "Win the driver's Cup in a 5 event Custom Cup offline."],
        ["Making your mark", "Unlock the \"Pro-Tuned World Masters\"."],
        ["Member of the Pack", "Reach level 10 in Touring Car Online."],
        ["Moving up in the world", "Unlock the \"International Endurance Championship\"."],
        ["Mr Consistent", "Reach level 10 in the Open Wheel Career."],
        ["Need some new tyres", "Reach level 10 in the Tuner Competition Career."],
        ["No longer afraid of the dark", "Reach level 10 in the Endurance Career."],
        ["No longer the rookie", "Unlock the \"International Touring Car Championship\"."],
        ["One for the cabinet", "Finish the \"Ultimate Touring Car Championship\" in the top 3."],
        ["Pearl of the Orient", "Complete a run of Hong Kong - Peak Road Descent in under 2 minutes & 50 seconds."],
        ["Pop the cork", "Finish the \"GP World Championship\" in the top 3."],
        ["Raced with the Best", "Complete an Open Wheel Championship with the Ravenwest team."],
        ["Riviera Runaway", "Complete a run of Cote d'Azur - Route d'Azur in under 3 minutes."],
        ["Side-splitting", "Win a 5 event Splitscreen competition."],
        ["Sign on the dotted line", "Accept your first Team Offer."],
        ["Sofa, so good", "Complete a Splitscreen race."],
        ["Street Cred", "Reach level 10 in the Street Racing Career."],
        ["Streetwise", "Reach level 10 in Street Racing Online."],
        ["Tek-Domination", "Install all the upgrades and tuning options on a car in Online."],
        ["The Journeyman", "Race a season with each of the 10 teams in the career."],
        ["Through the Hoops", "Fulfil both of your team's targets in the same season."],
        ["Top step", "Win a driver's championship in your Career."],
        ["Toured with the Best", "Complete a Touring Car Championship with the Ravenwest team."],
        ["Tuned In", "Reach level 10 in Tuner Competition Online."],
        ["Tweak to Peak", "Win a race with custom tuning set-up."],
        ["Well rounded education", "Complete a season in all 5 racing disciplines."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
