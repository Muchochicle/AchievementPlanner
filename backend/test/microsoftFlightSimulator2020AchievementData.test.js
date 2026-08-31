import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/microsoft-flight-simulator-2020.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1250410 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("microsoft-flight-simulator-2020");

test("getPlannerData('microsoft-flight-simulator-2020') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for microsoft-flight-simulator-2020");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Microsoft Flight Simulator (2020) achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Microsoft Flight Simulator (2020) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Microsoft Flight Simulator (2020) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Few Bumps", "Land at an airport where windspeeds are in excess of 15 knots, without using any assistance."],
        ["Anemoi", "Complete the Balkans Bush Trip, without using any navigation assistance."],
        ["Back-Up Plan", "Utilize pre-flight Pushback Service to move aircraft, for a total distance of 1 mile."],
        ["By the Book", "Request landing clearance from ATC at a towered airport, without using ATC assistance."],
        ["Century Club", "Accumulate 100 hours of flight time in a single pilot profile."],
        ["Challenge Accepted", "Complete any activity."],
        ["Completionist", "Complete every activity."],
        ["Deadstick Landing", "After receiving landing clearance, switch off engines and successfully land on the runway."],
        ["Decathlon", "Complete 10 weekly activities."],
        ["Fill 'er Up!", "Refuel at any ground fuel station."],
        ["Fire and Ice", "Complete the Patagonia Bush Trip, without using any navigation assistance."],
        ["Flights of Fancy", "Complete flights of at least 300 miles using a prop, jet and airliner."],
        ["Frequent Flyer Miles", "Fly from LFBD airport near Asobo Studio to KSEA airport near Microsoft HQ."],
        ["Goldrush", "Complete the Nevada Bush Trip, without using any navigation assistance."],
        ["Greased", "Complete every Landing Challenge."],
        ["Hydroplaning", "Accumulate 50 hours of flight time in rainy weather."],
        ["In The Wild", "Use the Smart Cam to view animals for 3 seconds, from a distance of 550 yards or less."],
        ["Instrumental", "Accumulate 50 hours of IFR flight time, including at least one take-off and landing."],
        ["Jack of All Planes", "Complete a 300+ mile flight with every aircraft in the standard edition of Flight Simulator."],
        ["Job Shadowing", "Create a flight plan based on a Live Traffic aircraft, then fly the route without assistance."],
        ["Journeyman", "Accumulate 500 hours of flight time in a single pilot profile."],
        ["Landmarks the Spot", "Use the Smart Cam to view 100 star landmarks, from a distance of 550 yards or less."],
        ["Light Chop", "Land at an airport where windspeeds are in excess of 5 knots, without using any assistance."],
        ["Look Ma, No Hands!", "Utilize autopilot for a total of 600 miles."],
        ["Mother Nature", "Adjust the weather during a flight."],
        ["My Way", "Complete a non-stop 300+ mile flight from parking to parking spot, without assistance."],
        ["Night Owl", "Accumulate 50 hours of flight time at night."],
        ["On the Green", "Land on a grass runway, without using any assistance."],
        ["Pilot Program", "Accumulate 50 hours of flight time in a single pilot profile."],
        ["Road Trip", "Taxi aircraft for a total distance of 100 miles."],
        ["Rubberneck", "Use the Smart Cam to view a star landmark for 3 seconds, from a distance of 550 yards or less."],
        ["Saddle Sore", "Complete a flight of at least 8 hours with a propeller or turbo-prop aircraft."],
        ["Service with a Smile", "Request each type of pre-flight Ground Service while at an appropriate airport gate."],
        ["Short Stuff", "Land on a runway shorter than 2,000 feet, without using any assistance or bypassing any travel."],
        ["SIDs and STARs", "Land at every star airport shown on the World Map."],
        ["Start Me Up", "Manually start the Airbus A320neo's engines, without using Assistance."],
        ["Stay on Target", "Use the Instrument Landing System (ILS) to complete a landing."],
        ["Tour Guide", "Use the Smart Cam to view 25 star landmarks, from a distance of 550 yards or less."],
        ["Uphill Climb", "Land on a runway that has at least a 12 degree incline, without using any assistance."],
        ["Wheels Up, Wheels Down", "Complete a non-stop flight of at least 300 miles from take-off to landing."],
        ["Wing Commander", "Accumulate 1,000 hours of flight time in a single pilot profile."],
        ["Working for the Weekend", "Complete a weekly activity."],
        ["World Traveler", "Land successfully at 500 different airports."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
