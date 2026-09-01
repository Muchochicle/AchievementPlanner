import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ratchet-and-clank-rift-apart.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1895880 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ratchet-and-clank-rift-apart");

test("getPlannerData('ratchet-and-clank-rift-apart') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for ratchet-and-clank-rift-apart");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Ratchet & Clank: Rift Apart achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Ratchet & Clank: Rift Apart achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Ratchet & Clank: Rift Apart achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 Fuzz 2 Nefarious", "Defeat Doctor Nefarious and Emperor Nefarious at the end of the story."],
        ["Aim to Misbehave", "Acquire the RYNO"],
        ["Alert the Sponsors", "Perform Five Trick Jumps on a Grind Rail"],
        ["BOING!", "Bounce on Big Al, Clank, and Qwark's Parade Balloons"],
        ["Can't Stop Me", "Complete a Gold Cup Battleplex Challenge"],
        ["Does This Make My Tail Look Big?", "Acquire and Equip Head, Torso, and Leg Armor"],
        ["Don't You Walk Away From Me", "Reach 'The Archives', the large walking robot on Savali."],
        ["Emotional Support Robot", "Meet the Fixer after finishing the main objectives on Torren IV."],
        ["Extinction Event", "Kill Five Grunthors"],
        ["Extreme Gardening", "Defeat 30 Enemies While They are Topiary'd"],
        ["Feeding Friendsy", "Collect 10 Zurpstones for Trudi"],
        ["Full Rack", "Fill a Weapon Wheel"],
        ["Fully Stacked", "Purchase All Weapons"],
        ["Glitch, Uh, Finds a Way", "Complete all five Glitch challenges found throughout the game."],
        ["Hey Lombax DJ", "Play three different songs on Zurkie's jukebox in the bar on Scarstu Debris Field."],
        ["Hide 'N Seekerpede", "Defeat the Seekerpede boss at the end of the second planet, Sargasso."],
        ["Hole Puncher", "Get 20 Headshots with the Headhunter"],
        ["I'm the Warden Now", "Break in and out of prison after finishing Viceron."],
        ["Icebreaker", "Melee Five Frozen Enemies"],
        ["It's Loose!", "Set Juice free in the forge area near the end of Cordelion."],
        ["It's So Fluffy!", "Find a CraiggerBear"],
        ["Just Stay Down", "Defeat 30 Ejected Nefarious Trooper Heads"],
        ["Life of the Party", "Deploy 50 Mr. Fungis"],
        ["Lombax and Chill", "Turn on the TV in Rivet's Hideout (after defeating the Seekerpede boss)."],
        ["Masters of the Multiverse", "Collect all Achievements"],
        ["Max Relax", "Find the Nefarious Citizens by the Hot Springs"],
        ["Might've Broken Something", "Collect Three Lorbs"],
        ["More Than Lint", "Enter any hidden Pocket Dimension (marked by purple shard icons on the map)."],
        ["Must Go Faster", "Do a Trick Jump While Going at Max Speed with the Hoverboots"],
        ["No Bones About It", "Retrieve the Dimensional Map during your second visit to Savali."],
        ["No Need for Multiball", "Kill Two Enemies With a Single Ricochet Round"],
        ["Nooks and Crannies", "Collect Five Gold Bolts"],
        ["Planning Some Destruction", "Collect a Spybot"],
        ["Quantum Mechanic", "Repair a Dimensional Anomaly"],
        ["Rated Aaarrr!", "Feed Bubbles after completing the main objectives on Ardolis."],
        ["Return Policy", "Kill 10 Enemies by Returning Shots with the Void Reactor"],
        ["Return to Sender", "Shoot down the Mothership during your second story visit to Sargasso."],
        ["Rift Apart", "Get separated in Nefarious City (reach the market area on the first planet, Corson V)."],
        ["Sartorial Steel", "Acquire a Piece of Armor"],
        ["Shifty Character", "Hit Every Blizon Crystal on Blizar and Cordelion"],
        ["Shiny!", "Collect a Gold Bolt"],
        ["Sweet, Sweet Victory", "Collect Honey for Chef Tulio"],
        ["There's Even a Cupholder", "Fully Upgrade a Weapon"],
        ["They Blow Up So Fast", "Get a Weapon to Level Five"],
        ["This Crystal Is My Things", "Acquire the Phase Quartz after completing the main objectives on Blizar Prime."],
        ["UnBEARably Awesome", "Find all CraiggerBears"],
        ["Victory!", "Complete a Battleplex Challenge"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
