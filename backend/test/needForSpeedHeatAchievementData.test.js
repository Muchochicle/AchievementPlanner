import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/need-for-speed-heat.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1222680 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("need-for-speed-heat");

test("getPlannerData('need-for-speed-heat') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for need-for-speed-heat");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Need for Speed Heat achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Need for Speed Heat achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Need for Speed Heat achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bit Of Paradise", "Smash your way through all the Billboards"],
        ["All For One", "Reach max Crew Level with your Crew"],
        ["Around The World", "Win the Discovery Event"],
        ["At The Last Second", "Repair critical damage at a Gas Station at night"],
        ["Be The Very Best", "Get all Collectibles and 3 stars on all Activities"],
        ["Benefits Are Nice", "Complete 25 events online with other players"],
        ["Blame The Vain", "Win a race with all vehicle effects slots equipped"],
        ["Carving Turns", "Complete the Drift driving story."],
        ["Cashing In", "Earn and bank 1 000 000 REP during one night"],
        ["Change My Name", "Change the text on the License Plate"],
        ["Comeback Kid", "Go from last to first place during the final lap of a race and win"],
        ["Component Parts", "Win a race with handling parts for maximum road traction equipped"],
        ["Consider Yourself Noticed", "Complete Chapter 1."],
        ["Danger Zone", "Complete all Speed Traps"],
        ["Don't Quit Your Day Job", "Complete your first Daily Challenge"],
        ["Drift, Drift, Drift", "Complete all Drift Zones"],
        ["Eleven - Fifty Six", "Take down 100 Cop Vehicles"],
        ["Friends Reunited", "Complete the Race driving story."],
        ["Full Send", "Complete all Long Jumps"],
        ["Get Shrimpin'", "Collect all the flamingos."],
        ["Graffer", "Collect all Street Art"],
        ["Hear Me Roar", "Win a race in a vehicle with tuned exhaust sound"],
        ["Home from Home", "Complete Chapter 3."],
        ["Humble Beginnings", "Reach REP Level 2"],
        ["I Said Right Now!", "Win a race with a car at 399 Performance Rating"],
        ["Merciless", "Complete Chapter 4."],
        ["Notorious", "Reach REP Level 50"],
        ["Off the Grid", "Complete the Off-road driving story."],
        ["Redline", "Win a race with handling parts for maximum race equipped"],
        ["Sideways Style", "Win a race with handling parts for maximum drift equipped"],
        ["Swappin'", "Win a race in a vehicle with an engine swap"],
        ["Techin'", "Win a race with parts equipped in both auxiliary part slots"],
        ["The Brightest Stars", "Get a 3 Star Rating on all the Activities in the game"],
        ["The Hackney Dream", "Win a race with handling parts for maximum off-road traction equipped"],
        ["The Most Wanted", "Win a High Heat 5 race and return to garage safely"],
        ["Travis, Who?", "Escape 100 Cop Chases"],
        ["Two Racers, One Event", "Beat your first Crew Time Trial"],
        ["Warp Speed", "Reach 240 mph with any car."],
        ["Welcome to Palm City", "Take your first ride."],
        ["Worlds Collide", "Complete Chapter 2."],
        ["Wrap It Up!", "Customize a vehicle with a wrap"],
        ["You have friends?", "Complete 5 events online with other players"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
