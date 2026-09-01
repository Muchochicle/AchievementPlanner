import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deadlink.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1676130 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("deadlink");

test("getPlannerData('deadlink') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for deadlink");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Deadlink achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Deadlink achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 74 Deadlink achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Actually, it does", "Defeat the Femto CEO."],
        ["Air superiority", "Kill 6 enemies in a row without touching the ground."],
        ["Alexandria", "Unlock all Codex entries."],
        ["Amish paradise", "Destroy the Trinary Iskra without using any implant."],
        ["An honest man", "Die to self-damage."],
        ["Apex twin", "Kill the Phoenix Apex without using any implant."],
        ["Arachnophobe", "Kill the Torantula without using any implant."],
        ["Backwards longjump", "Complete a full run in under 30 minutes on Deep Dive difficulty."],
        ["Baseline", "Complete the tutorial."],
        ["Better than sex", "Insert a Legendary Implant into Implant Matrix."],
        ["Big Freeze", "Survive 50 waves in Extant Existence mode."],
        ["Big Iron", "Kill 500 enemies with headshots using the Peacekeeper."],
        ["Black Hole Sun", "Survive 20 waves in Extant Existence mode."],
        ["Blow your load", "Break armor with Matter Converter salvo 200 times."],
        ["Butlerian Jihad", "Kill 50 robotic enemies with EM Charges."],
        ["Call Of The Void", "In the Interport section (before the third boss), jump over the walkway railing into the bottomless pit and die."],
        ["Capitalism, hoe!", "Buy all 'Deep Pockets' Deadlink upgrades."],
        ["Close call", "Complete a full run with 5 or less HP."],
        ["College dropout", "Skip the tutorial."],
        ["Demolition Man", "Destroy 5 objects with a single grenade."],
        ["Dissociative violence", "Kill 200 enemies with unattached Tarball Launcher grenades."],
        ["Duck Hunt", "Kill 500 enemies at point-blank range with the Scrapper Shotgun."],
        ["Erecting a sentry", "Buy all Engineer shell upgrades."],
        ["Evolutionary Dead-End", "Defeat  the Phoenix Apex."],
        ["Excellent!", "Kill 3 enemies with a single shot from the Particle Accelerator."],
        ["Exodus 10:1", "Kill 50 enemies with toxic puddles left by the Locust Swarm."],
        ["Eyes Wide Shut", "Find the secret Sex Club room in Tora territory (the first area of the game)."],
        ["Fat Man", "Defeat the Torantula."],
        ["Fire in the hole!", "Kill 3 enemies with a single grenade."],
        ["Flame War", "Kill 50 enemies with Flame Assault grenades that bounced off surfaces."],
        ["Followed a guide", "Max out 3 Implants during a single run."],
        ["Games Done Quick", "Complete a full run in under 40 minutes on Neuromancy difficulty."],
        ["Go no farther.", "Complete a full run on Deep Dive difficulty."],
        ["Gruby Damage", "Buy all 'Damage vs Marked' Deadlink upgrades."],
        ["Half o-pressed", "Complete a full run in under 20 minutes on VR Orientation difficulty."],
        ["Hard Lesson", "Get killed in the tutorial twice."],
        ["Headhunter", "Destroy all head sculptures."],
        ["Hercules", "Complete a full run using the Juggernaut Combat Shell."],
        ["Hisashi OSHA", "Die to every type of elemental explosive barrel."],
        ["I cast FIST!", "One shot an enemy with a melee attack."],
        ["I read Plato", "Beat the story campaign."],
        ["I'm the Juggernaut, bitch!", "Buy all Juggernaut shell upgrades."],
        ["Iconoclasm", "Defeat the Trinary Iskra."],
        ["Imagine my shock", "Zap 5 enemies with single link from Stormblight Cascade activation."],
        ["It werfers flammens", "Kill the Torantula with fire damage."],
        ["It's just a fucking laser!", "Keep firing the Electrolaser for at least 15 seconds."],
        ["Johnny Neurotic", "Complete a full run on Neuromancy difficulty."],
        ["Little Boy", "Reach Tora streets."],
        ["Longinus Podbipięta", "Score 3 headshots with a single shot from the ARC Cannon."],
        ["Man of integrity", "Buy all 'Shell Integrity' Deadlink upgrades."],
        ["Mars", "Complete a full run using the Soldier Combat Shell."],
        ["Merciful", "Kill an enemy that is ignited, corroded, and recently got shocked."],
        ["Mike Conley", "Kill the Phoenix Apex with a melee attack."],
        ["Military Industrial Complex", "Buy all Soldier shell upgrades."],
        ["Min-max", "Max out 1 Implant during a single run."],
        ["Mujafedin", "Kill 200 enemies from at least 20 meters with the Bonegrinder Rocket Launcher"],
        ["Newt-owned", "Kill a heavy enemy with fall damage."],
        ["Nimrud", "Complete a full run using the Hunter Combat Shell."],
        ["Open Source", "Find all the secret Implants."],
        ["Proton Decay", "Survive 40 waves in Extant Existence mode."],
        ["Pussifist", "Beat a single combat arena without firing a single shot."],
        ["Shish kebab", "Ignite 3 enemies with a single Fire Ant round."],
        ["Sisyphus", "Complete a full run without spending a single Credit."],
        ["Size doesn't matter", "Reach Femto offices."],
        ["Speedrunner", "Stay airborne for 15 seconds."],
        ["The Big Crunch", "Survive 100 waves in Extant Existence mode."],
        ["The Black Rider", "Buy all Hunter shell upgrades."],
        ["Toxic attitude\t", "Kill 300 enemies with Prox Mines."],
        ["Trivial information", "Complete a full run on VR Orientation difficulty."],
        ["Vishnu", "Complete a full run using the Engineer Combat Shell."],
        ["Wage Slavery", "Reach Interport warehouses."],
        ["Watt's Up Doc?", "Reach Watts-Rucker labs."],
        ["What a riot", "Buy all 'Shield Boost' Deadlink upgrades."],
        ["You are locked in here with me", "In a Survival Event arena, defeat every enemy that spawns before the timer reaches zero."],
    ];

    assert.strictEqual(officialAchievements.length, 74, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
