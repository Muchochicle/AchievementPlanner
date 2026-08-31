import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-rising.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 427190 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dead-rising");

test("getPlannerData('dead-rising') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-rising");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Dead Rising achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Dead Rising achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Dead Rising achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["∞ Mode", "Get the true ending. "],
        ["3 Day Survivor", "Survive for at least 72 hours. "],
        ["5 Day Survivor", "Survive for at least 5 days. "],
        ["7 Day Survivor", "Survive for at least 7 days. "],
        ["Bullet Point", "Fire at least 1,000 bullets. "],
        ["Carjacker", "Steal the convicts' vehicle. "],
        ["Census Taker", "Photograph at least 50 survivors. "],
        ["Clothes Horse", "Change into all costumes available in the mall. "],
        ["Costume Party", "Place novelty masks on at least 10 zombies. "],
        ["Frank the Pimp", "Simultaneously escort 8 female survivors. "],
        ["Freefall", "Drop from a height of at least 16 feet (5 meters). "],
        ["Full Set", "Collect all portraits in the NOTEBOOK. "],
        ["Gourmet", "Eat all types of food available in the mall. "],
        ["Group Photo", "Get 50 Target Markers with the camera. "],
        ["Hella Copter", "Successfully repel a helicopter."],
        ["Humanist", "Get at least 10 survivors out of the mall. "],
        ["Indoorsman", "Spend at least 24 hours indoors. "],
        ["Item Smasher", "Break at least 100 items."],
        ["Karate Champ", "Defeat at least 1,000 zombies barehanded. "],
        ["Legendary Soldier", "Defeat at least 10 Special Forces soldiers."],
        ["Level Max", "Reach Lv. 50. "],
        ["Life Saver", "Get at least 20 survivors out of the mall."],
        ["Marathon Runner", "Cover a distance of 26.2 miles (42.195 km). "],
        ["Outdoorsman", "Spend at least 24 hours outdoors. "],
        ["Overtime Mode", "Unveil all CASES and be at the heliport at noon. "],
        ["Peace Keeper", "Defeat at least 5 psychopaths. "],
        ["Perfect Gunner", "Don't miss with a machine gun. "],
        ["Photojournalist", "Score at least 1,500 PP from a single photo. "],
        ["Portraiture", "Photograph at least 10 survivors. "],
        ["PP Collector", "Photograph all PP Stickers. "],
        ["Psycho Collector", "Photograph at least 10 psychopaths. "],
        ["Psycho Photo", "Photograph at least 4 psychopaths. "],
        ["Punisher", "Defeat at least 10 psychopaths. "],
        ["Raining Zombies", "Knock at least 30 zombies aside with a parasol. "],
        ["Saint", "Get at least 50 survivors out of the mall."],
        ["Self Defense", "Defeat at least 1 psychopath. "],
        ["Sharp Dresser", "Change into at least 20 different costumes. "],
        ["Snuff Shot B", "Photograph the zombie form of Brad (a story spoiler)."],
        ["Snuff Shot J", "Photograph the zombie form of Jessie (a story spoiler)."],
        ["Strike!", "Send at least 10 zombies flying with bowling balls. "],
        ["Stunt Driver", "Jump a car at least 33 feet (10 meters). "],
        ["Stunt Rider", "Jump a motorcycle at least 33 feet (10 meters). "],
        ["The Artiste", "Score at least 3,000 PP from a single photo. "],
        ["Tour Guide", "Escort 8 survivors at once. "],
        ["Transmissionary", "Answer all calls from Otis. "],
        ["Unbreakable", "Get the true ending without being knocked out. "],
        ["Zombie Genocider", "Defeat at least 53,594 zombies. "],
        ["Zombie Hunter", "Defeat at least 1,000 zombies. "],
        ["Zombie Killer", "Defeat at least 10,000 zombies. "],
        ["Zombie Road", "Walk over 33 feet (10 meters) on the backs of zombies using the Zombie Ride. "],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
