import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/batman-arkham-asylum.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 35140 (fetched through this app's own services/steamApi.js). 0 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("batman-arkham-asylum");

test("getPlannerData('batman-arkham-asylum') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for batman-arkham-asylum");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Batman: Arkham Asylum achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Batman: Arkham Asylum achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Batman: Arkham Asylum achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Arkham Analyst", "Solve 5% of Riddler challenges"],
        ["Baneful Payback", "Defeat Bane"],
        ["Big Bang", "Deliver an explosive knock out blow to the Joker (Easy difficulty)"],
        ["Bigger Bang", "Deliver an explosive knock out blow to the Joker (Normal difficulty)"],
        ["Biggest Bang", "Deliver an explosive knock out blow to the Joker (Hard difficulty)"],
        ["Born Free", "Escape from Intensive Treatment to the island surface"],
        ["Breaking And Entering", "Gain access to Administration after it is locked down by the Joker"],
        ["Catch!", "Catch a Batarang (any play mode)"],
        ["Conundrum Cracker", "Solve 55% of Riddler challenges"],
        ["Crack The E Nigma", "Solve every riddle on the island"],
        ["Crocodile Tears", "Venture into Killer Croc's lair and come out alive"],
        ["Cryptic Investigator", "Solve 10% of Riddler challenges"],
        ["Daydreamer", "Survive the nightmare of the Scarecrow's fear gas"],
        ["Double Trouble", "Defeat two Titan Henchmen at once"],
        ["Flawless Freeflow Fighter", "Complete one combat challenge without taking damage"],
        ["Freak Show Rodeo", "Ride a Titan henchman and knock down 5 thugs (any play mode)"],
        ["Freeflow Bronze", "Achieve 8 medals on combat challenges"],
        ["Freeflow Combo 10", "Complete a combo of 10 moves (any play mode)"],
        ["Freeflow Combo 20", "Complete a combo of 20 moves (any play mode)"],
        ["Freeflow Combo 40", "Complete a combo of 40 moves (any play mode)"],
        ["Freeflow Combo 5", "Complete a combo of 5 moves (any play mode)"],
        ["Freeflow Gold", "Achieve 24 medals on combat challenges"],
        ["Freeflow Perfection", "Perform a perfect combo including all of Batman's combat moves (any play mode)"],
        ["Freeflow Silver", "Achieve 16 medals on combat challenges"],
        ["Invisible Predator", "Complete one predator challenge by using only Silent Takedowns and without being detected"],
        ["Just What The Doctors Ordered", "Save all the doctors in medical"],
        ["Lateral Thinker", "Solve 25% of Riddler challenges"],
        ["Leave No Man Behind", "Rescue the guards and henchman from the Joker toxin in Decontamination"],
        ["Malpractice Needs More Practice", "Survive the onslaught from the deformed Joker henchman"],
        ["Mano-a-mano", "Defeat Titan henchman without using Batarangs (any play mode)"],
        ["Mental Athlete", "Solve 70% of Riddler challenges"],
        ["Mystery Solver", "Solve 40% of Riddler challenges"],
        ["Night Glider", "Glide continuously for over 100m"],
        ["Party Pooper", "KO all the henchmen celebrating your arrival at the party"],
        ["Perfect Knight", "100% Complete"],
        ["Poisoned Ivy", "Defeat the giant Titan Ivy plant"],
        ["Predator Bronze", "Achieve 8 medals on predator challenges"],
        ["Predator Gold", "Achieve 24 medals on predator"],
        ["Predator Silver", "Achieve 16 medals on predator challenges"],
        ["Recurring Nightmare", "Face your biggest fears and keep your sanity"],
        ["Resist The Fear", "Conquer the effects of the Scarecrow's fear gas"],
        ["Riddle Resolver", "Solve 85% of Riddler challenges"],
        ["Rope-a-dope-a-dope", "String up one henchman and drop him to surprise a second (any play mode)"],
        ["Shocking Rescue", "Take down Zsasz in the Patient Pacification Chamber"],
        ["Solitary Confinement", "Capture and lock up Harley Quinn"],
        ["World's Greatest Detective", "Spirit of Amadeus Arkham revealed"],
        ["Zsasz Cut Down To Size", "Save Dr. Young from being killed by Victor Zsasz"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
