import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lego-jurassic-world.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 352400 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("lego-jurassic-world");

test("getPlannerData('lego-jurassic-world') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for lego-jurassic-world");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every LEGO Jurassic World achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every LEGO Jurassic World achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 LEGO Jurassic World achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["… Don't You Mean Extinct?", "Collect all Minikits in the game"],
        ["65 Million Bricks In The Making", "Complete All Story Levels"],
        ["A New Alpha", "Complete Under Attack"],
        ["All I Got Was This T-Shirt", "Create a custom character"],
        ["Anybody want a Soda?", "As Dennis Nedry, throw a soda can at another character"],
        ["Are You Following The Dinosaur?", "Complete Out Of Bounds"],
        ["Bingo! Dino DNA!", "Collect an Amber Brick"],
        ["Building Blocks Of Life", "Build a LEGO object using Mr. DNA"],
        ["Clever Goal", "As a Velociraptor, score a goal in the Jurassic World Petting Zoo"],
        ["Decided Not To Endorse Your Park", "Complete The Visitor Centre"],
        ["Do-You-Think-He-Saurus?", "Sneak past a Dinosaur using Camouflage"],
        ["Don't Go Into The Long Grass", "Complete The Hunted"],
        ["Family Reunion", "Complete Eric Kirby"],
        ["Full Jurassic World Experience", "Complete Gyrosphere Valley"],
        ["Going Home", "Complete The Bird Cage"],
        ["Hello John!", "Set both Free Play characters as John Hammond (or variant of him)"],
        ["Helping Hand", "Heal A Dinosaur"],
        ["Is This How You Make Dinosaurs?", "Complete Breeding Facility"],
        ["Just Follow The Screams", "Complete San Diego"],
        ["Mommy's Very Angry", "Complete InGen Arrival"],
        ["Must Go Faster", "Complete All Races"],
        ["Next Time It'll Be Flawless!", "Achieve 100% Completion"],
        ["Nobody Move A Muscle", "Complete The Spinosaurus"],
        ["Not Machine Compatible", "Try to use a hacker terminal as Alan Grant"],
        ["Not On InGen's List", "Complete Landing Site"],
        ["Objects In The Mirror", "Complete Park Shutdown"],
        ["Observe And Document", "Complete All Photographs"],
        ["One Big Pile Of Bricks", "Collect All Red Bricks"],
        ["Pack Hunter", "Set both Free Play characters as Raptors"],
        ["Reason To Fear Man", "Defeat 50 Compy Goons"],
        ["Remember To Wash Your Hands", "Complete a Dropping Rummage"],
        ["Send The Helicopters", "Rescue all Workers in Peril"],
        ["Something Has Survived", "Obtain ''True Survivor'' in any level"],
        ["Spared No Expense", "Collect 65,000,000 studs"],
        ["Survival Expert", "Collect ''True Survivor'' on all levels"],
        ["That's How It All Starts...", "Complete Isla Sorna"],
        ["The Calm Before The Storm", "Complete Welcome To Jurassic Park"],
        ["The Concept Of Attraction", "Enable Stud Magnet Red Brick"],
        ["The Human Piece Of Toast", "Give Timmy a shock"],
        ["The Legacy of John Hammond", "Collect All Amber Bricks"],
        ["The Park Is Open", "Complete Welcome To Jurassic World"],
        ["We Need More Teeth", "Complete Main Street Showdown"],
        ["We Want To Be Thrilled", "Place a custom Dinosaur in a Paddock"],
        ["We're Being Hunted", "Complete Restoring Power"],
        ["We're Out Of A Job…", "Collect all Minikits in any level"],
        ["Welcome To Jurassic Park", "Complete Prologue"],
        ["Went And Made A New Dinosaur", "Create a custom dinosaur"],
        ["What About The Others?", "Complete Communications Centre"],
        ["What Lysine Contingency?", "Heal all Dinosaurs"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
