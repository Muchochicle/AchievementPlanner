import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cronos-the-new-dawn.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2101960 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("cronos-the-new-dawn");

test("getPlannerData('cronos-the-new-dawn') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for cronos-the-new-dawn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Cronos: The New Dawn achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Cronos: The New Dawn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Cronos: The New Dawn achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Flicker Of Hope", "Spare the Pathfinder's life."],
        ["Better Than One", "Defeat 25 enemies with a headshot."],
        ["Counter-Gravity Traversal", "Execute a Gravity Jump."],
        ["Do Travelers Dream Of Electric Sheep?", "Power up a device with the Conductor."],
        ["Don't Let Them Merge", "Burn 25 dead Orphans."],
        ["Down With The Sickness", "Defeat the Unmerged Terror."],
        ["Efficiency Discipline", "Defeat 2 enemies with a single Sword projectile."],
        ["Essence Aquired", "Extract Edward."],
        ["Fire. Spreading.", "Set 5 enemies on fire with a single burst of the Torch."],
        ["Fixing Things", "Discover the Warden's secret."],
        ["For Good And For Ill", "Extract Dr. Zybert."],
        ["Forged In Fire", "Fully upgrade the Traveler's Temporal Shell."],
        ["Free From All The Scars", "Save both Weronikas (New Game+ only)."],
        ["Hit Like A Train", "Defeat the Terror at Station B."],
        ["I Am Free", "Shoot the Pathfinder."],
        ["May It Serve You Fault-Free", "Fully upgrade a single weapon."],
        ["My Brother's Keeper", "Extract one of the brothers."],
        ["Public Transport", "Power up the tram to reach the Steelworks."],
        ["Punks Not Dead!", "Finish the game with Edward's Essence."],
        ["Raging Bull", "Defeat an enemy with a melee attack."],
        ["Rapid Oxidation", "Burn the Biomass."],
        ["Resources Are Scarce", "Fabricate an item."],
        ["Shell Not Compromised", "Finish the game in the Hard Mode."],
        ["Spacetime Oddity", "Activate a Time Oddity."],
        ["Such Is Our Calling", "Find the Predecessor."],
        ["Suppressed Recomposition", "Defeat the Unmerged One."],
        ["Temporal Destination Reached", "Execute a Dive for the first time."],
        ["The Annihilator", "Defeat 5 enemies with a single Arbalest round."],
        ["The Anvil Of The Collective", "Defeat 4 enemies with a single Hammer shot."],
        ["The Archivist", "Find all of the Travelogs."],
        ["The Ascendance", "Execute an Ascendance Sequence for the first time."],
        ["The Bigger They Are", "Defeat the Terror in the Steelworks."],
        ["The Boon Of The Relics", "Find all the weapons."],
        ["The Catfinder", "Pet all the cats."],
        ["The Contribution", "Sell 15 valuable items."],
        ["The Orthodox", "Finish the game using only the Essences appointed by the Collective."],
        ["The Pathfinder", "Get the Pathfinder to the tram."],
        ["The Praetorian", "Fully upgrade all weapons."],
        ["The Preserver", "Transfer the Essences from all fallen Travelers."],
        ["The Pyromaniac", "Burn Biomass with the Pyre."],
        ["The Sacrifice Of The Flesh", "Defeat Eliza."],
        ["To Bring Them Back", "Transfer an Essence from a fallen Traveler."],
        ["To Pave The Path", "Fabricate all item types."],
        ["Togetherness", "Hold the Essences of Lidia, Marcel and Krzysztof at the same time."],
        ["Unadulterated Joy", "Find all of the comic books."],
        ["Welcome To The Vocation", "Exit the REV-Capsule."],
        ["You Never Give Up", "Finish the game in the NG+."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
