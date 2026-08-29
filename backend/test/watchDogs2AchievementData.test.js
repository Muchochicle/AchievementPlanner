import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/watch-dogs-2.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 447040 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 55 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("watch-dogs-2");

test("getPlannerData('watch-dogs-2') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for watch-dogs-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Watch Dogs 2 achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Watch Dogs 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Watch Dogs 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["100% Legit", "Finish Operation: $911"],
        ["A Ride to Remember", "Drive one of the Unique Vehicles"],
        ["Ain't No Stopping", "Do a bike race"],
        ["App'ing Around", "Buy all the apps in the App Shop"],
        ["Baby, I Got Your Money", "Finish Operation: False Profits"],
        ["Bad Boys", "Hijack a boat"],
        ["DedSec-A-Roni", "Ride a cable car"],
        ["Doggyland", "Pet 10 dogs"],
        ["Earn your Sea Legs", "Do a sailboat race"],
        ["Feeding Frenzy", "Use the \"Call the cops\" hack on the donut-disguised man in Haight-Ashbury"],
        ["Got The Shutterbug", "Take 25 ScoutX location pictures"],
        ["Hack the World", "Trigger the hack of the century"],
        ["Hold My Hair", "Take a picture of someone vomiting"],
        ["Hold My Hand", "Successfully complete an online Co-op Operation"],
        ["Hypnotize", "Finish Operation: W4tched"],
        ["I Get Around", "Do a drone race"],
        ["In Style", "Buy the Gatorfeet Whine Country footwear"],
        ["Informer", "Finish Operation: Limp Nudle"],
        ["It's the Final Showd0wn", "Reach the maximum win streak bonus in Showd0wn"],
        ["Joined the Mile High Club", "Finish Operation: Hack teh World"],
        ["Jump Around", "Do a 140 meters long jump while driving a vehicle"],
        ["Knight Ridden", "Finish Operation: Cyber Driver"],
        ["Knock You Out", "Do a stealth takedown on 30 enemies"],
        ["Leaks and Leaks", "Finish Operation: Ubistolen"],
        ["Let Me Ride", "Travel 200 meters on top of a car by hacking it"],
        ["Make Every Voice Count", "Finish Operation: Power to the Sheeple"],
        ["Menace", "Buy a two handed weapon at the 3D printer"],
        ["Miniroadtrip!", "Drive 4 km in the world while driving the Merengue from Elek Motors"],
        ["Nanotriumph", "Finish Operation: Caustic Progress"],
        ["Natural Born Killer", "Neutralize 1 Hunter in Bounty Hunter mode"],
        ["No Place Like Haum", "Finish Operation: Haum Sweet Haum"],
        ["Not the Pizza Guy", "Finish Operation: Bad Medicine"],
        ["Old School Justice", "Finish Operation: Eye for An Eye"],
        ["One of the Gang", "Complete 5 DedSec Events"],
        ["One-Man Garage", "Buy 25 cars in car dealerships"],
        ["Only God Can Judge Me", "Buy a shirt in the Nudle vending machine"],
        ["Photobombed!", "Get photobombed in a selfie"],
        ["Picking Up the Pieces", "Finish Operation: Looking Glass"],
        ["Pimp My eKart", "Get all the eKart upgrades"],
        ["Please Marcus, Don't Hurt Them", "Successfully neutralize 5 fugitives in Bounty Hunter"],
        ["Prize Catch", "Finish Operation: Off the Hook"],
        ["Put Your Damn Pants On", "Buy some pants after the party"],
        ["Researcher", "Collect all the Key Data hidden in the world"],
        ["Roboteer", "Hack a robot"],
        ["Sabotage", "Finish Operation: Hacker War"],
        ["Smooth Felon", "Escape a Level 5 felony"],
        ["Something To Ride", "Hijack a bus"],
        ["That Escalated Quickly", "Finish Operation: Moscow Gambit"],
        ["The Fox", "Finish Operation: Shadow"],
        ["The Itsy Bitsy Spider", "Finish Operation: Robot Wars"],
        ["The Score of Your Life", "Finish Operation: Automata"],
        ["Third Time's the Charm", "Make 3 jumps in a row aboard a vehicle"],
        ["Troll'r", "Successfully invade another hacker"],
        ["Who Am I", "Erase your past identity in the Blume servers"],
        ["You're On A Boat!", "Finish Operation: Shanghaied"],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
