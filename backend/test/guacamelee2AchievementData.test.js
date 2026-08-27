import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/guacamelee-2.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 534550 (fetched through this app's own services/steamApi.js) - 44 of
// 49 ship a real, official Steam description. Severed 2, PERFECT, You
// Survived, Talk to the Hend, and Moves Like Jaguar are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const guacamelee2 = getPlannerData("guacamelee-2");

test("getPlannerData('guacamelee-2') returns real planner data with 49 curated achievements", () => {

    assert.ok(guacamelee2, "expected real planner data for guacamelee-2");
    assert.ok(Array.isArray(guacamelee2.achievements));
    assert.strictEqual(guacamelee2.achievements.length, 49);

});

test("every Guacamelee! 2 achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = guacamelee2.achievements.map(a => a.id);
    const apinames = guacamelee2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Guacamelee! 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of guacamelee2.achievements) {

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

test("every one of the 44 officially-described Guacamelee! 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Guacamastery", "Obtain every achievement in the game"],
        ["I Remember That Being Harder", "Defeat Calaca"],
        ["Re-Resurrección", "Regain the mask"],
        ["Show's Over, Go Home", "Defeat El Muñeco"],
        ["Severed", "Defeat Uay Pek"],
        ["Prickly Pair", "Defeat Cactuardo and Zope"],
        ["Questionable Plumbing", "Discover the Pollo Illuminati's headquarters"],
        ["Santa Golpiza!", "Reach 150 on your hit-meter"],
        ["Grapple Expert", "Use all four of Coscorrona's special throws"],
        ["Juan Punch Man", "One-shot an enemy with a fully upgraded super move"],
        ["I Was Told There'd Be Candy", "Defeat a Piñataface"],
        ["Cluckstorm", "Kill 50 enemies as chicken"],
        ["The Floor Is...", "Eagle Boost from 10 different hook points without touching the ground"],
        ["6-Piece Combo", "Juggle an enemy with 6 Chicken Shots or Slides before it touches the ground."],
        ["He Looks Portable", "Find Juan and Lupita in the Darkest Timeline"],
        ["Talented Player", "Dodge 10 enemies' attacks by rolling"],
        ["One Born Every Minute", "Open a loot box"],
        ["King of the Hill", "Defeat El Trio de la Montaña"],
        ["Special Delivery!", "Feed the hungry guard"],
        ["Combo Machine", "Complete all of Flame Face's challenges"],
        ["These Are Not Fertilized", "Lay a dozen eggs"],
        ["Temple Raider", "Find 100% of the hidden items in a temple"],
        ["y cant guacamelee crawl", "Complete a Pollo challenge dungeon"],
        ["I Have Nothing Left to Teach You", "Fully purchase one trainer's skill tree"],
        ["One Down...", "Complete a secret Chicken Key Challenge"],
        ["Very Special", "Open the Golden Door"],
        ["Luchonarrative Resonance", "Kill 1000 mean, nasty skeletons without families"],
        ["El Técnico Táctico", "Purchase all of the upgrades"],
        ["Mr. Worldwide", "Achieve 100% completion in all areas"],
        ["Even Darkester", "Beat the game on Hard mode"],
        ["Nacho Libre", "Defeat Salvador"],
        ["Legend of the Timelines", "Reach the good ending (collect all keys)"],
        ["+ Cool Cat Counter Attack ('Enemigos' Character Pack)", "Dodge then Hit 15 Enemies as Jaguar"],
        ["+ Steal the Show ('Enemigos' Character Pack)", "Perform with the Dead Band at the Mariachi Club as El Muñeco"],
        ["+ Body Builder ('Enemigos' Character Pack)", "Defeat a Giant Skeleton as Uay Pek's Head"],
        ["+ Welcome to MY World ('Enemigos' Character Pack)", "Defeat 25 Enemies in the Living World as Uay Pek"],
        ["+ Jaguar's Redemption ('Enemigos' Character Pack)", "Defeat Salvador as Jaguar"],
        ["++ Slippery Snake (The Proving Grounds)", "Complete the Snakes in the Grass Challenge without taking damage"],
        ["++ Explosion Therapy (The Proving Grounds)", "Kill 20 Exploders using Wall Fly while completing the Exploder Elimination Challenge"],
        ["++ Snake Temple Throwdown (The Proving Grounds)", "Grab and Throw 50 Enemies as Coscorrona in the Snake Temple"],
        ["++ Salvador’s Sister Act (The Proving Grounds)", "Visit the Mother Superior in Isla Bonita as Salvador"],
        ["++ Bronze Champion (The Proving Grounds)", "Achieve a Bronze Medal for all of Tiempochtli’s Challenges"],
        ["++ Silver Champion (The Proving Grounds)", "Achieve a Silver Medal for all of Tiempochtli’s Challenges"],
        ["++ Let Sleeping Gods Lie (The Proving Grounds)", "Wake up Tiempochtli"]
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Severed 2", "PERFECT", "You Survived", "Talk to the Hend", "Moves Like Jaguar"
    ]);

    const dataPairs = guacamelee2.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const severed2 = guacamelee2.achievements.find(a => a.apiname === "EAwards_6");
    const perfect = guacamelee2.achievements.find(a => a.apiname === "EAwards_16");
    const survived = guacamelee2.achievements.find(a => a.apiname === "EAwards_18");
    const hend = guacamelee2.achievements.find(a => a.apiname === "EAwards_29");
    const jaguar = guacamelee2.achievements.find(a => a.apiname === "EAwards_30");

    assert.ok(severed2 && severed2.name === "Severed 2" && severed2.description.length > 0);
    assert.ok(perfect && perfect.name === "PERFECT" && perfect.description.length > 0);
    assert.ok(survived && survived.name === "You Survived" && survived.description.length > 0);
    assert.ok(hend && hend.name === "Talk to the Hend" && hend.description.length > 0);
    assert.ok(jaguar && jaguar.name === "Moves Like Jaguar" && jaguar.description.length > 0);

});
