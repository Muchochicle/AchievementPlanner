import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/promise-mascot-agency.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2585830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("promise-mascot-agency");

test("getPlannerData('promise-mascot-agency') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for promise-mascot-agency");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Promise Mascot Agency achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Promise Mascot Agency achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Promise Mascot Agency achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Hero of Justice!", "Meet Captain Sign"],
        ["A High Performance Vehicle", "Acquire a truck upgrade"],
        ["A Human Shaped Missile", "See inside Shiori's mind"],
        ["A New Family", "Recruit 2 mascots"],
        ["A Pinky Pledge", "Get Pinky elected as mayor"],
        ["A Promising Agency", "Purchase one agency upgrade"],
        ["A Satisfying Life", "Complete 5 life satisfaction quests"],
        ["A Sin Free Town is a Happy Town", "Cleanse 50% of the katashiro"],
        ["Anime Otaku", "Return all of Miss. Wambui's DVDs"],
        ["Boosting Into Your Heart", "Boost for a total of ten minutes"],
        ["Build A New Society", "Smash 50% of signs featuring a crusty old geezer"],
        ["Burning Passions For Idols", "Understand the burning passion that idols spark within a person"],
        ["Business Growth", "Expand into the subcontractor business"],
        ["Community Minded", "Purchase one town renovation from Mr. Sato"],
        ["Crush the Old Order", "Smash 5 signs featuring a crusty old geezer"],
        ["Cultist", "Near the Fruit Farm (closest fast-travel point: Old Town), take the path south from the phone booth, go left at the fork, then head right instead of toward the shrine when it comes into view - interact with the ritual you find to witness it."],
        ["Dark Kaso-Machi", "From the Mountain Summit fast-travel point, drive the winding mountain road and go off-road after the first bend, continuing until you reach a cliff overlooking the lake and statue - interact with the door you find there."],
        ["Double Tap", "Perform a trick shot"],
        ["Empire Building", "Reach Agency Fame Level 30"],
        ["Expansion, Expansion, Expansion", "Assign subcontractor mascots to all location slots"],
        ["Fail at Mindfulness", "Contemplate kickflips"],
        ["Feeling Strangely Safe", "Behold the power of safety"],
        ["Fish Preparation", "Return all of Sumire's knives"],
        ["Fought Your Fate", "Fight Michi's fate in a cursed town"],
        ["From Zero to Hero", "Fully upgrade a hero card"],
        ["Get Rich or Die in Kaso Machi", "Earn at least 10,000,000 yen"],
        ["Gettin' Air", "Be in the air for a total of 5 minutes"],
        ["Good Business Practice", "Get a 3 star rating at a delivery location"],
        ["Hard Worker", "Send mascots on 10 jobs"],
        ["How Convenient!", "Buy something from a vending machine"],
        ["Kaso-Machi Explorer", "Drive 100km"],
        ["Kyushu Rejuvenation Fund", "Fully upgrade the town"],
        ["Mascots Never Die", "Successfully help a mascot 5 times"],
        ["Occultism Rules!", "Return all of the occult notes to José"],
        ["Palatial Offices", "Fully upgrade the agency"],
        ["Pantheon of Heroes", "Acquire 10 or more hero cards"],
        ["Promising Future", "Begin your redemption"],
        ["Queen Of The Pirates", "Visit an island out at sea"],
        ["Relieve Some Sins", "Cleanse a sin"],
        ["Start Your Pilgrimage", "Clean a shrine"],
        ["The Best In Japan", "Rank at #1 in the Grand Prix"],
        ["The Investigator is Here", "Acquire the investigator's hero card"],
        ["The Pain Of A Game Designer", "Discover what happened to Princess"],
        ["The Promise Clan", "Recruit 20 mascots"],
        ["The Sound of Eurobeat", "Acquire every truck upgrade"],
        ["The Strays", "Return all of Tora's kittens"],
        ["Thirsty Work", "Visit establishments that provide liquid refreshment"],
        ["Thread The Needle", "Glide under the big bridge"],
        ["Truly Blessed", "Clean every shrine"],
        ["Unspeakable Horrors", "Defeat a dark spirit interrupting a mascot event"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
