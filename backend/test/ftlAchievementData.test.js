import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ftl.json - 51 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 212680
// (fetched through this app's own services/steamApi.js) - 48 of 51 ship
// a real, official Steam description. Sweet Revenge, No Escape, and
// Clash of the Titans (all Crystal Cruiser achievements from the free
// Advanced Edition update) are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const ftl = getPlannerData("ftl");

test("getPlannerData('ftl') returns real planner data with 51 curated achievements", () => {

    assert.ok(ftl, "expected real planner data for ftl");
    assert.ok(Array.isArray(ftl.achievements));
    assert.strictEqual(ftl.achievements.length, 51);

});

test("every FTL achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = ftl.achievements.map(a => a.id);
    const apinames = ftl.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every FTL achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of ftl.achievements) {

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

test("every one of the 48 officially-described FTL achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 3 hidden achievements (all Crystal Cruiser) are excluded here -
    // Steam never exposes a public description for them - and covered by
    // their own dedicated test below instead.
    const officialAchievements = [
        ["Just Getting Started", "Get to sector 5."],
        ["Federation Base in Range", "Get to sector 8."],
        ["Federation Victory (Easy)", "Beat the boss on Easy."],
        ["Federation Victory (Normal)", "Beat the boss on Normal."],
        ["Your Own Fleet", "Unlock the Type A layout for every playable ship."],
        ["Rule Ten: Greed is Eternal", "Collect 10,000 scrap across all games."],
        ["Warlord", "Defeat 1000 ships across all playthroughs."],
        ["I don't need no stinkin' upgrades!", "Get to sector 5 with no system/reactor upgrades."],
        ["Coming in for my Pacifism run!", "Get to sector 5 without firing a shot, using an offensive drone, or teleporting."],
        ["On a Wing and a Prayer", "Get to sector 5 without repairing at a store."],
        ["Ballistophobia", "Get to sector 8 without using missiles/bombs."],
        ["Technophobia", "Get to sector 8 without using drones."],
        ["Living off the Land", "Get to sector 8 without buying at a store (Repairs are ok)."],
        ["No Redshirts Here", "Get to sector 8 without losing a crewmember."],
        ["Some people just like to watch ships burn", "Have every square of an enemy ship on fire simultaneously."],
        ["Astronomically Low Odds", "Fail to evade 5 shots in a row with a fully powered and upgraded engine."],
        ["They never saw it coming", "Use the Weapon Pre-Igniter augmentation to destroy an enemy ship in one volley before the enemy can get a single shot off."],
        ["BOARDING OBJECTIVE SUCCESSFUL", "Have a single boarding drone kill 4 crewmembers on one ship."],
        ["Trustworthy Auto-Pilot", "Defeat an enemy ship with all of your crew aboard it."],
        ["Slice and Dice", "Hit every room of a ship with at least one beam in under 5 seconds."],
        ["Victory through Asphyxiation", "Empty the oxygen (Net level less than 5 percent) of a non-automated, hostile enemy ship."],
        ["The United Federation", "Have six unique aliens on the Kestrel Cruiser simultaneously."],
        ["Full Arsenal", "Have 11 systems installed on the Kestrel Cruiser at one time."],
        ["Tough Little Ship", "As the Kestrel Cruiser, repair back to full health when it only has 1 HP remaining."],
        ["Shields Holding", "Destroy a ship before it gets through the Zoltan Shield."],
        ["Givin' her all she's got, Captain!", "With the Zoltan Cruiser, have 29 power in systems at the same time."],
        ["Manpower", "Get to sector 5 without upgrading your reactor in the Zoltan Cruiser."],
        ["Bird of Prey", "Destroy a ship at full health during a single cloak in the Stealth Cruiser."],
        ["Phase Shift", "With the Stealth Cruiser, avoid 9 points of damage during a single cloak."],
        ["Tactical Approach", "With the Stealth Cruiser, get to sector 8 without jumping to a beacon with an environmental danger."],
        ["Robotic Warfare", "With the Engi Cruiser, have 3 drones functioning at the same time."],
        ["I hardly lifted a finger", "With the Engi Cruiser, destroy an enemy ship using only drones (no weapons)."],
        ["The guns... They've stopped", "Have 4 enemy systems or subsystems ioned at the same time while using the Engi Cruiser."],
        ["Is it warm in here?", "Have your crew kill a burning enemy on their ship while using the Rock Cruiser."],
        ["Defense Drones Don't Do D'anything!", "While using the Rock Cruiser, destroy an enemy ship which has a defense drone deployed using only missiles."],
        ["Ancestry", "Find the secret sector with the Rock Cruiser."],
        ["Take no prisoners!", "Kill the crew of 20 ships by sector 6 in the Mantis Cruiser."],
        ["Avast, ye scurvy dogs!", "Kill 5 enemy crew in a fight without taking hull damage or losing a crewmember while using the Mantis Cruiser."],
        ["Battle Royale", "While using the Mantis Cruiser, kill the last enemy with your last crewmember on their ship."],
        ["We're in Position!", "While using the Slug Cruiser, have vision of every room of the enemy ship without functioning sensors."],
        ["Home Sweet Home", "Jump to 30 nebula locations before sector 8."],
        ["Disintegration Ray", "While using the Slug Cruiser, kill 3 enemy crewmembers with one shot from the Anti-Bio Beam."],
        ["Master of Patience", "Use only the Artillery Beam to destroy an enemy ship while taking no hull damage."],
        ["Diplomatic Immunity", "While using the Federation Cruiser, use your crew in 4 special blue event choices by sector 5."],
        ["Artillery Mastery", "Get to sector 5 in the Federation Cruiser without upgrading your Weapons system."],
        ["Advanced Mastery", "Have Hacking, Mind Control and the Battery active at once."],
        ["Scrap Hoarder", "Have at least 600 scrap in your ship storage."],
        ["Loss of Cabin Pressure", "Get to sector 8 without your ship's net oxygen levels exceeding 20 percent (starts after the first jump)."]
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Sweet Revenge", "No Escape", "Clash of the Titans"]);

    const dataPairs = ftl.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 3 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const shard = ftl.achievements.find(a => a.apiname === "ACH_CRYSTAL_SHARD");
    const lockdown = ftl.achievements.find(a => a.apiname === "ACH_CRYSTAL_LOCKDOWN");
    const clash = ftl.achievements.find(a => a.apiname === "ACH_CRYSTAL_CLASH");

    assert.ok(shard && shard.name === "Sweet Revenge" && shard.description.length > 0);
    assert.ok(lockdown && lockdown.name === "No Escape" && lockdown.description.length > 0);
    assert.ok(clash && clash.name === "Clash of the Titans" && clash.description.length > 0);

});
