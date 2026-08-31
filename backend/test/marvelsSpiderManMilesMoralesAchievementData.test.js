import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvel-s-spider-man-miles-morales.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1817190 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("marvel-s-spider-man-miles-morales");

test("getPlannerData('marvel-s-spider-man-miles-morales') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvel-s-spider-man-miles-morales");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Spider-Man: Miles Morales achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Spider-Man: Miles Morales achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Spider-Man: Miles Morales achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100x Combo!!!", "Perform a 100x Combo"],
        ["A Gift From Pete", "Receive the Gift Suit from Peter Parker."],
        ["A New Home", "100% complete all districts"],
        ["Be Yourself", "Collect all Achievements"],
        ["Best Fries in Town", "Pay your respects to a legend in the Upper West Side"],
        ["Climbing the Walls", "Perform 25 Wall Takedowns"],
        ["Come at the King", "Unravel the Harlem criminal conspiracy by completing the 'We've Got a Lead' side mission (unlocks after the three Harlem crime/FEAST missions)."],
        ["Competitive Spirit", "Beat Phin at the rocket-launch mini-game."],
        ["Crime Master", "Complete all Bonus Objectives for every crime type"],
        ["Deep Cuts", "Collect all 9 sound samples and recreate the Davis Brothers mix."],
        ["Dodging Light", "Get a Spectacular+ rating in a Spider-Training stealth challenge."],
        ["Exploding Bulldozer", "Defeat Roxxon Rhino (boss)."],
        ["Family Drama", "Defeat the Prowler (boss)."],
        ["Five Star Review", "Complete all FNSM app requests"],
        ["From Downtown", "Use Venom Dash to throw an enemy into a group of three or more"],
        ["From the Rafters", "Perform 25 Ceiling Takedowns"],
        ["Hanging by a Thread", "Keep the bridge together during its story sequence."],
        ["I'm on a Boat", "Ride the derelict boat in southern Chinatown"],
        ["Invisible Spider", "Defeat 50 enemies while Camouflaged"],
        ["JJJ Would Be Proud", "Apply a sticker and customise lighting while in Photo Mode"],
        ["Just the Beginning", "Unlock all Skills"],
        ["Kitbash", "Craft 10 Upgrades"],
        ["Launch, Swing and Dive", "Get a Spectacular+ rating in a Spider-Training traversal challenge."],
        ["Like a Rhino in a China Shop", "Smash into 15 breakable objects while steering Rhino through the shopping mall"],
        ["Look with Better Eyes", "Craft a Visor Mod"],
        ["Memory Lane", "Collect all Postcards"],
        ["Mod that Suit", "Craft a Suit Mod"],
        ["Never Give Up", "Pay respects at Jefferson Davis' grave in Harlem"],
        ["Never Saw It Coming", "Complete an Enemy Base without being detected"],
        ["Nowhere to Hide", "Perform 100 Stealth Takedowns"],
        ["Overcharge", "Defeat 100 enemies with Venom attacks"],
        ["Pete's First Villain", "Complete 'The Final Test' story mission."],
        ["Plus Plus", "Complete the game on New Game+"],
        ["Punching Pixels", "Get a Spectacular+ rating in a Spider-Training combat challenge."],
        ["Ready for Anything", "Purchase all suits"],
        ["Rhino Rodeo", "Ride Rhino through the shopping mall (story)."],
        ["Salvager", "Open all Underground Caches"],
        ["Shared History", "Walk through Miles and Phin's shared past (story)."],
        ["Socially Acceptable", "Scroll through the entire Social Feed at the end of the story"],
        ["Spider-Training: Complete", "Complete every Spider-Training challenge at least once."],
        ["The Core of the Problem", "Investigate Roxxon's underground lab (story)."],
        ["The Harlem Express", "Get the subway trains running again (story)."],
        ["Trapped", "Defeat 50 enemies with the Remote Mine gadget"],
        ["True Deception", "Complete the vault sequence in the 'Underground Undercover' story mission."],
        ["Ultimate Sacrifice", "Save Harlem - earned during the final story sequence."],
        ["Under Their Noses", "Shut down all Roxxon Labs."],
        ["Underground Undone", "Shut down all Underground hideouts."],
        ["Up and Over", "Perform a Venom Jump, then a Venom Dash on a single enemy"],
        ["Urban Explorers", "Collect all Time Capsules"],
        ["Veloci-Skates", "Chase the Tinkerer through the city (story)."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
