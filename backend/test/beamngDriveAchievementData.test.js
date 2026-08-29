import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/beamng-drive.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 284160 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 58 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("beamng-drive");

test("getPlannerData('beamng-drive') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for beamng-drive");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every BeamNG.drive achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every BeamNG.drive achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 BeamNG.drive achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Rocky Start", "Experience the start of the story"],
        ["AI Racer", "Earn at least one star in an AI Race Challenge."],
        ["Beginner's Racing License", "Complete the final \"Driver Training\" Challenge."],
        ["Bulk Delivery", "Deliver your first order of Bulk Materials."],
        ["Bus Driver", "Earn at least one star in a Bus Mode Challenge."],
        ["Car Jockey", "Deliver your first vehicle and complete the Car Jockey Introduction."],
        ["Challenge Complete!", "Complete a challenge and get three stars."],
        ["Chase Player", "Earn at least one star in a Chase Challenge."],
        ["Claim Filed", "Repair a damaged vehicle through an insurance claim in Career Mode."],
        ["Crawling", "Earn at least one star in a Crawl Challenge or complete a Freeroam Crawl Event."],
        ["Deal Maker", "Successfully negotiate a vehicle purchase for 80% or lower than the asking price."],
        ["Drag Racer", "Complete a drag strip run in 8.300s or less."],
        ["Extra Credit", "Complete the onboarding sequence, including optional objectives."],
        ["Filling up the Tank", "Refuel your vehicle using a gas station."],
        ["First Assignment", "Earn your first paycheck through challenges, deliveries or other activities."],
        ["First Challenge", "Complete a challenge and get at least one star."],
        ["First Delivery", "Deliver your first parcels and complete the Cargo Delivery Introduction."],
        ["First Paycheck", "Earn a total of $10,000 through challenges, deliveries or other activities."],
        ["First Rollout", "Complete the APM onboarding sequence and gain access to Career Mode."],
        ["Flip Profit", "Sell a vehicle for more than its original purchase cost through negotiation."],
        ["Freeform Delivery", "Earn at least one star in a Freeform Delivery Challenge."],
        ["Freeroam Basics", "Cover the fundamentals across the first three sections of the Freeroam Tutorial."],
        ["Freeroam Tutorial Completionist", "Complete all the lessons of the Freeroam Tutorial."],
        ["Good Deal", "Successfully negotiate a vehicle purchase below the listed asking price."],
        ["High End Performance", "Score 'Class X' on a performance evaulation on a vehicle in Career Mode."],
        ["Impressive Drift", "Get a score of 20,000 or more in a single drift."],
        ["Just a few Vehicles", "Add over 100 vehicles total to your freeroam sessions."],
        ["Keys to Success", "Purchase your first vehicle in Career Mode."],
        ["Long Way Around", "Drive a total distance of 1000km."],
        ["M1N3 N0W", "Personalize a vehicle's license plate in Career Mode."],
        ["New Territory", "Get access to new challenges by unlocking a new series in Career Mode."],
        ["On Schedule", "Complete a timed delivery before its deadline."],
        ["Outstanding Performance", "Complete the \"Hustle and Bustle\" Campaign."],
        ["Paid the Price", "Receive and pay a Career Mode fine or penalty."],
        ["Parking Enthusiast", "Earn at least one star in a Precision Parking Challenge."],
        ["Performance Review", "Evaluate the performance of a vehicle in Career Mode."],
        ["Picture Perfect", "Capture a moment in Photo Mode."],
        ["Policy Review", "Change the insurance provider, insurance policy or insured vehicle policy."],
        ["Quite a lot of Vehicles", "Add over 5000 vehicles total to your freeroam sessions."],
        ["Rally Driver", "Earn at least one star in a Rally Stage Challenge."],
        ["Rally Pro", "Earn at least one star in a Rally Loop Challenge."],
        ["Real Mileage", "Drive a total distance of 250km."],
        ["Rolling Around", "Roll your vehicle more than 100 times."],
        ["Save it for later", "Save a customized vehicle."],
        ["Senseless Destructor", "Complete the \"Senseless Destruction\" Campaign"],
        ["Serious Purchase", "Buy a vehicle with a price of over $100,000."],
        ["Sideways for Days", "Get a total drift score of 1,000,000 or more."],
        ["Six-Figure Club", "Earn a total of $100,000 through challenges, deliveries or other activties."],
        ["That was Expensive", "Pay at least $10,000 for a private repair on a vehicle."],
        ["This one's my Favourite", "Drive at least 1000km with vehicles of a single model."],
        ["Three-Car Garage", "Own a collection of at least 3 vehicles in Career Mode."],
        ["Time Trials Driver", "Earn at least one star in a Time Trials Challenge."],
        ["Too Late!", "A vehicle you were interested in has been sold before you could buy it."],
        ["Vehicle Customization", "Modify a vehicle by changing parts, tuning or paints."],
        ["Vehicle Explorer", "Get behind the wheel of 15 unique vehicle models and drive at least 10km in each."],
        ["Weightless in the Air", "Stay in the air during jumps for a total time of 10 minutes or more."],
        ["Welcome to APM", "Join the APM team as part of the onboarding sequence."],
        ["World Explorer", "Visit five different maps for 5 minutes or more."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
