import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/turbo-overkill.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1328350 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("turbo-overkill");

test("getPlannerData('turbo-overkill') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for turbo-overkill");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Turbo Overkill achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Turbo Overkill achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Turbo Overkill achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Hope", "Complete Terminal Eclipse"],
        ["Always Bet On Black", "Complete Sunset Synthetica"],
        ["Army of Darkness", "Complete Episode 2."],
        ["Better Things To Do", "Kill Artifact-Zero in less than a minute"],
        ["Buddy, I Think You're Slime", "Kill Jazz with toxic slime"],
        ["Can I Play, Daddy?", "Finish every level on Virgin Blood or higher"],
        ["Chenis", "Get taunted by Maw at the secret splice terminal in Terminal Eclipse"],
        ["Commando", "Complete Outskirts"],
        ["Consider That A Divorce", "Complete Pressure Point"],
        ["Dodge This", "Kill up to 25 enemies while in Turbo-Time"],
        ["Don't Scratch My Ride", "Finish Infestation without taking a hit while driving the car"],
        ["Endgame", "Complete Final Purge."],
        ["Endless Pro 1", "Get beyond wave 20 on Endless on default settings"],
        ["Endless Pro 2", "Get beyond wave 40 on Endless on default settings"],
        ["Event Horizon", "Defeat The Monstrosity"],
        ["Fat Wads", "Have over 100,000 Zhen in your current account"],
        ["First Blood", "Complete Syn"],
        ["Free Your Mind", "Stay off the ground for 30 seconds or more"],
        ["Fully Evolved", "Acquire all augments on a single save slot"],
        ["Fury Road", "Complete Exodus"],
        ["Gotta Go Fast", "Complete Vector-4 in under 12 minutes"],
        ["Groovy", "Get all weapons and upgrades on a single save slot"],
        ["Halfpipe", "Kill all enemies in the skate arena in Syn by only using your Chainsaw leg"],
        ["Hard Boiled", "Complete Battle Alley"],
        ["Hasta La Vista, Baby", "Complete Episode 3"],
        ["I AM THE LAW", "Complete Ascension"],
        ["I Will Have My Vengeance", "Complete Episode 1."],
        ["I'll Be Back", "Complete Infestation"],
        ["Ion Furious", "Kill 15 or more enemies with 1 Ion Blaster beam"],
        ["Jimmy Eat You", "Get eaten by Jimmy the worm in Outskirts"],
        ["Keen Hunter", "Find all Tech-Chips and Cassette Tapes"],
        ["Kill 'Em All", "Get 100% kills on every level"],
        ["Lethal Weapons", "Complete The Wastes"],
        ["Mace Windon't", "Kill a Rammer with their own Mace"],
        ["Malfunction. Need Input", "Complete Teratek Factory"],
        ["Metropolis", "Complete Vector-4."],
        ["No Maw", "Defeat Maw on Napalm Blitz without taking a single hit or reloading"],
        ["No More Games", "Destroy the arcade cabinet in Scrapyard"],
        ["No More Splicing", "Destroy the haunted machine on Sunset Synthetica"],
        ["No Time To Die", "Complete Scrapyard"],
        ["No Way Home", "Complete Paradise Lost"],
        ["Overkilled", "Finish every level on Murder Machine"],
        ["Overqualified", "Get denied entry to the No Chainsaws club in Battle Alley"],
        ["Pacifist, Minus Chainsaws", "Finish Exodus without firing your hoverbikes minigun or lasers"],
        ["Paradise Pile-up", "Kill up to 8 enemies with 1 Waster explosive shot"],
        ["Pink Mist", "Fire a rocket, grab it with the plasma gun, and kill 5 or more enemies with it"],
        ["Point Break", "Complete Emergence"],
        ["Police Story", "Complete Open Season"],
        ["Predator", "Complete Dead Plaza"],
        ["Rip and Tear", "Defeat Ripper in under 5 minutes without dying or reloading"],
        ["RoboShark", "Get eaten by a shark in Emergence"],
        ["Rocket Man", "Kill 10 or more enemies with 1 Launcher rocket"],
        ["Run The Gauntlet", "Finish The Wastes on Serve Me Pain or higher without dying or reloading"],
        ["Runaway Train", "Complete Artifact-Zero"],
        ["Silent Running", "Complete Night Ride"],
        ["Skill Issue", "Kill Maw and his minions in the final arena of Night Ride with chainsaws only"],
        ["Taking Out The Trash", "Finish every level on Street Cleaner or higher"],
        ["That's Dope", "Kill all Dopefish in Open Season"],
        ["The Good, the Bad and the Ugly", "Complete Teratek Showdown."],
        ["The Need for Speed", "Complete Rooftops"],
        ["The Wild Bunch", "Complete Toxin Refinery"],
        ["Total Recall", "Finish Turbo Overkill."],
        ["Ultra Violence", "Finish every level on Serve Me Pain or higher"],
        ["We Can Rebuild Him", "Complete Refactor"],
        ["Yippee-Ki-Yay", "Complete Napalm Blitz"],
        ["You Look Like A Good Joe", "Finish every level on Regular Joe or higher"],
        ["You're A Disease And I'm The Cure", "Defeat the Bounty Hunters"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
