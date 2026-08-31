import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metro-last-light-redux.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 287390 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("metro-last-light-redux");

test("getPlannerData('metro-last-light-redux') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for metro-last-light-redux");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Metro: Last Light Redux achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Metro: Last Light Redux achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Metro: Last Light Redux achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Air!", "Spend 30 minutes' worth of Filters."],
        ["Antibiotic", "Kill 100 Mutants."],
        ["Back to the Past", "See all Visions in the Dead City."],
        ["Big Momma", "Kill the Rhino."],
        ["C'est la vie", "Reach the 'Ranger' ending - the default outcome when Artyom finishes the game with too many negative or too few positive moral points."],
        ["Cheers!", "Drink at every occasion."],
        ["Clean Escape", "Escape the chasing Nazis on the REICH level without being caught once."],
        ["Commando", "Rescue the Women and Children on the BANDITS level without raising alarm."],
        ["Derailed", "Kill all armed enemies on the REVOLUTION level, including all reinforcements."],
        ["Developer", "Spend 1 hour on the DEVELOPER level."],
        ["Edison", "Turn off 40 Lights without breaking them."],
        ["Engineer", "Use 10 Lever Switches."],
        ["Ever Vigilant", "Disarm 10 Traps."],
        ["Forest Guardian", "Save the Bear from the Watchmen after the fight."],
        ["Freedom!", "Free the Prisoners."],
        ["Hail Reich!", "Complete the HEAVY SQUAD level."],
        ["Heads Up!", "Complete the PAVEL level."],
        ["Invisible Intruder", "Complete the SEPARATION level without killing or raising alarm."],
        ["Invisible Savior", "Complete the FACILITY level without killing or raising alarm."],
        ["Invisible Soldier", "Complete the REVOLUTION level without killing and raising an alarm."],
        ["Kshatriya", "Complete the KSHATRIYA level."],
        ["Master Thief", "Open 10 locked safe boxes."],
        ["Mouse", "Complete the ECHOES level undetected by the Watchmen."],
        ["No shooting allowed", "Kill 10 enemies in a row with Throwing Knives."],
        ["No Way Out", "Complete the KHAN level."],
        ["Not A Rabbit", "Finish the ASHES level without taking a hit."],
        ["Patron of the Arts", "Watch the entire Theater Show."],
        ["Published", "Complete all 43 of Artyom's hidden Diary pages."],
        ["Pyromaniac", "Burn 50 Cobwebs."],
        ["Rabbit", "Complete training sequence."],
        ["Rain Man", "Complete the BRIDGE level without a kill."],
        ["Redemption", "Reach the 'Redemption' ending by accumulating enough positive moral points over the course of the game."],
        ["Reunion", "Find and return the crying child's Teddy Bear."],
        ["Revelation", "Reveal Secretary Moskvin's true plans during the level POLIS."],
        ["Revenge", "Let Pavel die on the RED SQUARE level - do not help him when hands drag him under during the Vision."],
        ["Saboteur", "Complete the SNIPER TEAM level."],
        ["Savior", "On the CONTAGION level, take off your gas mask when Lesnitsky demands it instead of shooting."],
        ["Scram", "Kill the Watchmen attacking the Railcar without taking any damage."],
        ["Secret", "Complete the level DEPOT on any difficulty - the Little Dark One reveals the Reds' plans in a cutscene."],
        ["Shadow", "Stealthily kill 15 Enemies."],
        ["Soldier", "Kill 100 Human Enemies."],
        ["Spartan 2034", "Complete the game in Spartan Mode."],
        ["Survivor 2034", "Complete the game in Survival Mode."],
        ["Test Complete", "Complete the TOWER level."],
        ["The Sunset of Hope", "Complete the ANNA level."],
        ["Through the Fire", "Complete the SPIDER LAIR level."],
        ["Tortoise", "Make 10 Spiders flip belly-up."],
        ["Veteran", "Choose three primary weapons that use different ammo."],
        ["Within a Hair of Death", "Escape from the Red Line."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
