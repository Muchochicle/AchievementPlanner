import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mina-the-hollower.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1875580 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mina-the-hollower");

test("getPlannerData('mina-the-hollower') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for mina-the-hollower");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Mina the Hollower achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Mina the Hollower achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Mina the Hollower achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bashful", "Strike 3 enemies with one charge of the Drill Driver."],
        ["Beckoning Buddy", "Keep the Beckoning Collar creature active for most of a boss fight."],
        ["Below Zero", "Finish the game with -1% Collection or less."],
        ["Big Spender", "Spend a combined 50,000 Bones in shops."],
        ["Bone Keeper", "Complete the game without ever losing your Bones."],
        ["Bone Pincher", "Finish the game without spending any Bones in shops."],
        ["Bonestone Tycoon", "Convert over 20,000 in the Bone Sinterer in one go."],
        ["Boomerang Blade", "Kill 2 foes with a single Gyro Dagger, changing its direction with each strike."],
        ["Bounding Bonanza", "Kill an enemy with a Bounding Bomb explosion, after both orbs bounce 3 times."],
        ["Buster Bounce", "Defeat 3 enemies in a row with only double bank shots using the Battery Buster."],
        ["Combo Conductor", "While in combat, maintain max combo with the Chain Capacitor Trinket for 10 seconds."],
        ["Drag Race", "Ride the Iron Steed across 6 unique screens without doubling back."],
        ["Feat Accompli", "Earn all other Feats."],
        ["First Purchase", "Buy your first item."],
        ["Fishin' Reactor", "Acquire all trophies on the Fish Board."],
        ["Fogburst", "Eliminate 6 enemies using one continuous spray of the Fog Thrower."],
        ["Four-Point Hatchet", "Hit 4 enemies, one with each spark of a single Volt Hatchet."],
        ["Fully Equipped", "Unlock all Weapons, Trinkets, Cloaks, and Upgrades."],
        ["Hammerama", "Defeat a boss using only fully charged attacks from the Blaststrike Maul."],
        ["Hardifier", "Finish the game with 3 active Hard Modifiers."],
        ["Haunting Reach", "Hit a foe from 25 tiles away using the Gnawing Ghosts."],
        ["Hollow Victory", "Reach the conclusion of the game."],
        ["Hollowin' Again!", "Finish the game in New Game Plus."],
        ["Joule Junkie", "Kill a boss while at 1 HP, using only Sidearms and the Joule Syringe Trinket."],
        ["Light 'em Up", "Avoid a certain fate in the darkness by using the Dynamo Lantern."],
        ["Lopsided", "Raise one stat to 10 while keeping all others at 3 or below."],
        ["Masochist", "Defeat a boss while wearing exactly 3 Beastium Trinkets."],
        ["Minigame Master", "Master all Racing, Ring Dive, and Wrecker challenges."],
        ["Mist Glide", "Use the Mist Jar to phase through 3 enemies in one use."],
        ["Off the Grid", "Finish the game without ever entering the Underlab."],
        ["Opossum Impressem", "Show Lena that you can clear 10 tiles without touching the ground."],
        ["Pawned Off", "Sell the maximum number of items at Pawnty's Exchange."],
        ["Pendulum Master", "Parry 10 attacks without getting hit using the Dodging Pendulum Trinket."],
        ["Perfect Guard", "Parry 15 consecutive attacks with the Guardian Casket."],
        ["Pitfall Parasol", "Knock multiple enemies into a pit using a single Deflector Parasol."],
        ["Plasma Survivor", "Fill your reserve tank with the Plasma Jug Trinket while at 1 HP."],
        ["Renegade Roundup", "Defeat Armand, Maxi, Willis, the Dugin, and Evra."],
        ["Shock Tactician", "Defeat a boss using a spark from the Shock Flint Trinket."],
        ["Skippin' Stone", "Kill an enemy across 8 tiles of water using the Hollower's Rocks."],
        ["Sniper Dagger", "Kill a boss with Whisper and Vesper thrown from across the screen."],
        ["Sparks of Genius", "Restore half of the Spark Generators."],
        ["Speed Runner", "Complete the game in under 4 hours."],
        ["Steed Hopper", "Using the Iron Steed, hop on 3 enemies' heads without touching the ground."],
        ["Thorne Beater", "Defeat Thorne for the first time."],
        ["Tip Tapper", "Kill 10 enemies in a row using Nightstar's Dread Mace upgrade, hitting only with the tip."],
        ["Trash Juggler", "Knock the kids' can below the bottom of the bridge."],
        ["Traumatized", "Complete the hidden Poppit merchant side quest - buy from every hidden Poppit shop - and watch the disturbing Grinnsly dance scene."],
        ["Untouchable", "Defeat a Spark Generator boss without taking damage."],
        ["Weirdifier", "Finish the game with 3 active Weird Modifiers."],
        ["Wormhole", "Kill an enemy after warping from offscreen with the Recall Disc."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
