import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-crew-motorfest.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2698940 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-crew-motorfest");

test("getPlannerData('the-crew-motorfest') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-crew-motorfest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every The Crew Motorfest achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every The Crew Motorfest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 The Crew Motorfest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...we don’t need roads", "Reach 88 MPH (142 Km/h) with the Delorean DMC-12 and use the rewind feature"],
        ["A e s t h e t i c", "Complete 20 Photo Ops"],
        ["Aloha e na hoa!", "Complete your Motorfest welcome for the first time"],
        ["Blink and you'll miss it", "Use the fast travel feature for the first time"],
        ["Built Different", "Own a vehicle in 10 different vehicle categories"],
        ["Can't dodge this challenger", "Complete 30 Challenges"],
        ["Cars, bikes, rides and good vibes", "Complete 6 Playlists"],
        ["Custo-Mine", "Fully customize one vehicle (Visual parts and Livery)"],
        ["Dai-go-go-go!", "Win by completing the event without hitting a wall, or track limits, driving in Ebisu Style"],
        ["Doghouse Days", "Transform into a monster truck twice in a single game of demolition royale"],
        ["English bunt", "Fly under 5 differents bridges in the same session"],
        ["Ensnare the Sun", "Fly as high as possible"],
        ["Everyone is a critic", "Vote for 5 cars in the Custom show in the same session"],
        ["Fan Favorite", "Reach maximum level on one vehicle"],
        ["Festival Fanfare", "Reach Level 15"],
        ["French Toast", "Perform a donut move in the Ubisoft logo"],
        ["Gearhead vs Collector", "Own 30 Vehicles"],
        ["Grand Ambitions", "Participate in a Grand Race event"],
        ["I've got a crash on you", "Participate in a Demolition Royale event"],
        ["Kāne Limits", "Try to leave Hawaii (boat or plane) by reaching the limit of the map"],
        ["Leagues Above", "Complete 5 events in Main Stage Mode in the same session"],
        ["Local Luxuries", "Stay still for 1 minute on the beach in front of the Royal Hawaiian Hotel"],
        ["Look at us go", "Drive or Fly 5 Km in formation with a Crew member, in the same session"],
        ["Luck is part of talent", "Find and open a Treasure"],
        ["Madcap", "Chain a 15 actions combo with Dynamic Freestyle"],
        ["Main Stage Headliner", "Complete all three timelines on the Motorfest Main Stage"],
        ["Mistakes were made…", "Use up the rewind feature fully 1 time"],
        ["MotorFeats Madness", "Perform 31 Different Motorfest Feats"],
        ["Not so lonely at the top", "Complete all activities of a Summit Contest"],
        ["Oahu Mindfulness", "Stay in a Car meet car for 10 seconds or more"],
        ["Oahu Sights", "Take 3 photos in the same session"],
        ["Pack Mentality", "Join, or form a Crew"],
        ["Parade lap", "Travel 40 Kilometers (25 miles) anywhere in Hawaii in the same session"],
        ["Passion Project", "Spend 1 Million Bucks in one purchase"],
        ["Pele Shout-out", "Reach the summit of the volcano with a ground vehicle"],
        ["Rear view mirror smile", "Overtake 12 players in the Grand Race in the same session"],
        ["Setting the Stage", "Complete a Playlist for the first time"],
        ["Shaken, not stirred", "Equip your avatar with the casual tuxedo and drive an Aston martin car"],
        ["Smooth sea ≠ skilled sailor", "Complete a Speedtrap instance with a boat"],
        ["Steal the show", "Submit 1 vehicle to the Custom show"],
        ["Sweet tooth", "Fly through the \"Rule the Streets\" inflatable donut with a plane"],
        ["Take the Wheel", "Win 5 custom events in the same session"],
        ["That Pono feeling", "Spend 24 Hours in The Crew Motorfest"],
        ["That'll Buff Right Out", "Destroy 3 vehicles in Demolition Royale in the same session"],
        ["The Ascent", "Complete a Summit Contest event"],
        ["The Big League", "Complete 15 Motorfest Events"],
        ["The Crew too!", "Complete a custom event with a Crew of 4 players"],
        ["Unholy Pizza", "Perform a donut move around the pineapple shop"],
        ["Walk of Fame", "Become a Motorfest Legend for the first time"],
        ["Where's down?", "Chain two bike backflips while in the air and use fast fav with a plane, before reaching the ground"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
