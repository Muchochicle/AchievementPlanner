import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-callisto-protocol.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1544020 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-callisto-protocol");

test("getPlannerData('the-callisto-protocol') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-callisto-protocol");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every The Callisto Protocol achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every The Callisto Protocol achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 The Callisto Protocol achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Armed to the Teeth", "Purchase all weapons and upgrades"],
        ["Bear Trap", "Kill a Two-Head with a Hazard"],
        ["Big Game Hunter", "Complete Wave 50"],
        ["Big Spender", "Spend 20,000 Credits"],
        ["Chew 'Em Up", "Kill ten enemies with environmental hazards."],
        ["Crash Site", "Return to the crashed ship (Chapter 5)."],
        ["Desperate Times", "Elias gives Jacob a shiv (Chapter 2)."],
        ["Don't Let It Mellow", "Destroy all Hammer Crates on the Factory Floor"],
        ["Flesh Wound", "Remove both arms from a living enemy."],
        ["Float Like A Butterfly", "Perform a perfect dodge five times."],
        ["Full Circle", "Get thrown back into your original cell (Chapter 8)."],
        ["Get a Grip", "Grab 25 enemies with the GRP glove."],
        ["Giving Back", "Stab five blind enemies in the back"],
        ["Glutton for Punishment", "Finish Game in Contagion Mode"],
        ["Grim Reaper", "Harvest and read all 43 implant bios."],
        ["Hoard Mode", "Survive five consecutive waves without spending any Credits"],
        ["I am the Danger", "Dismember 100 limbs in Riot Mode"],
        ["I Do Belong Here", "Complete the story on any difficulty."],
        ["If the SHU Fits...", "Activate the SHU (Chapter 3)."],
        ["In Striking Distance", "Kill an enemy with a GRP-and-melee combo."],
        ["In the Pipe, Five by Five", "Reach the Hangar flight deck (Chapter 5)."],
        ["Information Overload", "Find all 8 Protocol Data Drives"],
        ["Instigator", "Complete Riot Mode for the first time"],
        ["It's Time", "Obtain the Kinetic Hammer"],
        ["Keep Fighting", "Killed your first Biobot!"],
        ["Lifer", "Finish Game in Hardcore Mode NG+"],
        ["Mugshot", "Take a photo using Photo Mode."],
        ["One Last Job", "Finish Final Transmission"],
        ["Paper Jams", "Print a weapon for the first time"],
        ["Parole Denied", "Finish New Game Plus Mode"],
        ["Power Up", "Restore power to the old facility (Chapter 6)."],
        ["Quick Pick", "Solve any Security Lock System in less than 7 seconds"],
        ["Recidivist", "Finish Game in Hardcore Mode"],
        ["Reforged", "Print a weapon upgrade"],
        ["Subject Alpha", "Use the Power-up 10 times"],
        ["Terminated", "Take down a Security Robot."],
        ["The Commonality", "Uncover the mystery of Kallipolis by finding the two key bios."],
        ["The Outer Way", "Find the Outer Way boarding craft (Chapter 1)."],
        ["The Protocol is About Life", "Beat the game on Maximum Security difficulty."],
        ["This Isn't About Escape", "Locate the Escape Pod"],
        ["Two Heads Are Better Than One", "Defeat the Two-Head boss."],
        ["What Lies Beneath", "Find the source (Chapter 7)."],
        ["Without A Paddle", "Survive the pipeslide (Chapter 4)."],
        ["Workplace Hazard", "Use the GRP to throw an enemy into a hazard."],
        ["You Belong Here", "Finish Game in Contagion Mode Without Dying"],
        ["You Need a Gun", "Fully upgrade one weapon."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
