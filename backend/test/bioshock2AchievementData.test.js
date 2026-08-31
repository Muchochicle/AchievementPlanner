import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bioshock-2.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 8850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bioshock-2");

test("getPlannerData('bioshock-2') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for bioshock-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every BioShock 2 achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every BioShock 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 BioShock 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Mr. Bubbles-- No!\"", "Took down your first Big Daddy in a non-private match."],
        ["9-Irony", "Paid your respects to the founder of Rapture."],
        ["Acid Test", "Earned 18 stars in the Protector Trials"],
        ["ADAM Addict", "Resolved all the Little Sisters in Minerva's Den"],
        ["Adopted a Little Sister", "Adopted a new Little Sister for the first time."],
        ["Against All Odds", "Finished the game on the hardest difficulty level."],
        ["All Plasmids", "Found or purchased all 11 basic Plasmid types."],
        ["All Weapon Upgrades", "Found every Power to the People weapon upgrade in the game."],
        ["Aqua Incognita", "Played at least one non-private match on each downloadable content map."],
        ["Big Brass Balls", "Finished the game without using Vita-Chambers."],
        ["Big Spender", "Spent 2000 dollars at Vending Machines."],
        ["Bought a Slot", "Bought one Plasmid or Tonic Slot at a Gatherer's Garden."],
        ["Choose the Impossible", "Achieved Rank 40."],
        ["Confronted Grace", "Confronted Lamb's lieutenant in Pauper's Drop."],
        ["Counterattack", "Killed an enemy with its own projectile."],
        ["Daddy's Home", "Found your way back into the ruins of Rapture."],
        ["Dealt with Every Little Sister", "Dealt with every Little Sister."],
        ["Defeated the Preacher", "Defeated the Preacher."],
        ["Disgusting Frankenstein", "Became a Big Daddy for the first time in a non-private match."],
        ["Distance Hacker", "Used the Hack Tool to hack an object at a distance."],
        ["Enemy of the Family", "Earned an A rank in all Protector Trials"],
        ["Escape", "Escaped Rapture."],
        ["First Research", "Researched a Splicer with the Research Camera."],
        ["Found Lamb's Hideout", "Gained access to Lamb's stronghold."],
        ["Fully Upgraded a Plasmid", "Fully upgraded one Plasmid to the Level 3 version."],
        ["Fully Upgraded a Weapon", "Installed the third upgrade to a weapon."],
        ["Garbage Collection", "Destroyed all 10 Vacuum Bots in Minerva's Den"],
        ["Get a Bigger Bucket", "Collected 50% of the ADAM available in all Protector Trials"],
        ["Grand Daddy", "Defeated 3 Big Daddies without dying during the fight."],
        ["Guardian Angel", "Completed all bonus Protector Trials"],
        ["Heading to the Surface", "Headed to the surface on the side of Sinclair's escape pod."],
        ["High Score", "Got 9999 points in one game of Spitfire"],
        ["Lancer Killer", "Killed a Lancer Big Daddy"],
        ["Litmus Test", "Earned 6 stars in the Protector Trials"],
        ["Little Moth", "Achieved Rank 20."],
        ["Login", "Reached Rapture Central Computing Operations"],
        ["Logout", "Escaped Minerva's Den"],
        ["Look at You, Hacker", "Killed 50 enemies using only hacked Security."],
        ["Man About Town", "Played at least one non-private match on each multiplayer map."],
        ["Master Gatherer", "Gathered 600 ADAM with Little Sisters."],
        ["Master Hacker", "Hacked 30 machines at a distance with the Hack Tool."],
        ["Master Protector", "Got through a Gather with no damage and no one getting to the Little Sister."],
        ["Max Plasmid Slots", "Fully upgraded to the maximum number of Plasmid Slots."],
        ["Mother Goose", "Saved your first Little Sister in a non-private match."],
        ["Nose for News", "Uncovered the secret of Dionysus Park."],
        ["One Research Track", "Maxed out one Research Track."],
        ["Parasite", "Achieved Rank 10."],
        ["Perfect Protector", "Collected 100% of the ADAM in a single Protector Trial"],
        ["Prolific Hacker", "Hacked one of each kind of machine."],
        ["Protector", "Defended yourself against Lamb's assault in the train station."],
        ["Proving Grounds", "Won your first non-private match."],
        ["Rapture Historian", "Found 100 audio diaries."],
        ["Reincarnation", "Used Rebirth to start again!"],
        ["Research Master", "Completed all research on every subject in Rapture."],
        ["Reunion", "Reunited with your original Little Sister."],
        ["Root Access Granted", "Reached Computer Core Access"],
        ["Savior", "Saved every Little Sister and spared Grace, Stanley and Gil."],
        ["Sinclair's Solution", "Joined forces with Sinclair in Ryan Amusements."],
        ["Skin Job", "Achieved Rank 30."],
        ["SUDO", "Wrested control of the Thinker from Reed Wahl"],
        ["Territorial", "Won a non-private match in each of the 6 new maps."],
        ["Trap Master", "Killed 30 enemies using only Traps."],
        ["Trial By Fire", "Earned 36 stars in the Protector Trials"],
        ["Two-Bit Heroics", "Completed your first trial in a non-private match."],
        ["Unbreakable", "Defended yourself against the Big Sister without dying."],
        ["Unnatural Selection", "Scored your first kill in a non-private match."],
        ["Upgraded a Weapon", "Upgraded a weapon at a Power to the People Station."],
        ["Welcome to Rapture", "Completed your first non-private match."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
