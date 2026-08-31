import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/earth-defense-force-4-1.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 410320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("earth-defense-force-4-1");

test("getPlannerData('earth-defense-force-4-1') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for earth-defense-force-4-1");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every EARTH DEFENSE FORCE 4.1 achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every EARTH DEFENSE FORCE 4.1 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 EARTH DEFENSE FORCE 4.1 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Walk in the Park", "Cleared all stages on Normal difficulty as a Ranger."],
        ["Achilles Approves", "Destroyed 900 Hectors."],
        ["Air to the Throne", "Cleared all stages on Hardest difficulty as an Air Raider."],
        ["Ant Repellant", "Defeated 20,000 ant-type bugs."],
        ["Breathe Deeply", "Air Raider's health has reached 1000."],
        ["Call a Taxidermist, I Have an Idea", "Destroyed 30 Erginuses."],
        ["Carrier Harrier", "Destroyed 500 carriers."],
        ["Certified Diver", "Wing Diver's health has reached 550."],
        ["Clearing the Air", "Cleared all stages on Normal difficulty as an Air Raider."],
        ["Countless Screaming Argonauts", "Destroyed 20 Argos."],
        ["Dent-ified Flying Objects", "Destroyed 2000 flying vehicles."],
        ["Deroys Destroyed", "Defeated 200 Deroys."],
        ["Do You Have a Permit for That?", "Obtained 50% of all available weapons."],
        ["Does Whatever a Spider Can't", "Defeated 12,000 spider-type bugs."],
        ["Dragon Fall", "Defeated 2400 Dragons."],
        ["Drones Pwned", "Destroyed 5000 flying drones."],
        ["Fencing Free Scholar", "Cleared all stages on Hard difficulty as a Fencer."],
        ["Fencing Master", "Cleared all stages on Inferno difficulty as a Fencer."],
        ["Fencing Provost", "Cleared all stages on Hardest difficulty as a Fencer."],
        ["Fencing Scholar", "Cleared all stages on Normal difficulty as a Fencer."],
        ["Got the Bees! Got the Bees!", "Defeated 4000 flying-type bugs."],
        ["Higher and Higher", "Reached a height of 200 meters."],
        ["I Got a Permit For This One", "Obtained all available weapons."],
        ["I Just Really Hate Tunnels", "Destroyed 200 underground tunnel exits."],
        ["Incoming Trophy", "Cleared all stages on Inferno difficulty as an Air Raider."],
        ["Jumping Ship", "Destroyed 200 large transport ships."],
        ["Just Doing My Job", "Rescued 50 other players in co-op play."],
        ["Kings are Dropping Like Flies", "Defeated 40 king spiders."],
        ["Let Them Eat Cake", "Defeated 24 queens."],
        ["Lord of the Wings", "Cleared all stages on Inferno difficulty as a Wing Diver."],
        ["More Like Dead Queens", "Defeated 24 death queens."],
        ["Net Loss", "Defeated 360 Retiarii."],
        ["Professional Hero", "Rescued 5 other players in co-op play."],
        ["Quadrupeds Quelled", "Destroyed 12 quadruped fortresses."],
        ["Ranger Danger", "Cleared all stages on Hard difficulty as a Ranger."],
        ["Ranger Power", "Cleared all stages on Hardest difficulty as a Ranger."],
        ["Ranger Regimen", "Ranger's health has reached 1000."],
        ["Rangers Lead the Way", "Cleared all stages on Inferno difficulty as a Ranger."],
        ["Ravager-Proof Fencer", "Fencer's health has reached 1250."],
        ["Reaving the Nest", "Destroyed 6 flying-type bug nests."],
        ["Red Dead Robotics", "Destroyed 150 red drones."],
        ["Shields Yield", "Defeated 120 shield bearers."],
        ["The Air Up There", "Cleared all stages on Hard difficulty as an Air Raider."],
        ["The Brains in Pain Fall Mainly for Your Gain", "Destroyed 6 Brains."],
        ["This is My Rifle, This is My Gun", "Obtained 10% of all available weapons."],
        ["Thou Hast Done Well", "Defeated 20 Greater Wild Dragons."],
        ["Wait Till Your Fathership Gets Home", "Destroyed 6 motherships."],
        ["Wing of Truth", "Cleared all stages on Hard difficulty as a Wing Diver."],
        ["Winging It", "Cleared all stages on Normal difficulty as a Wing Diver."],
        ["Wingmaster", "Cleared all stages on Hardest difficulty as a Wing Diver."],
        ["You're Gonna Be Okay, Son", "Healed another player in co-op play."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
