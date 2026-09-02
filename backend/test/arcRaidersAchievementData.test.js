import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/arc-raiders.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1808500 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("arc-raiders");

test("getPlannerData('arc-raiders') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for arc-raiders");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every ARC Raiders achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every ARC Raiders achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 ARC Raiders achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Tale for the Ages", "Destroy the Queen."],
        ["A Vendetta Is Born", "Get knocked out while already standing inside a return point."],
        ["Back from the Brink", "Revive a squadmate ten times."],
        ["Behind Closed Doors", "Visit a locked room on Dam Battlegrounds, Buried City or Spaceport."],
        ["Bells and Whistles", "Have 4 weapon mods on a single weapon."],
        ["Blindsided", "Destroy a Sentinel with a Raider Tool."],
        ["Bringing Down the Big Guns", "Destroy a Rocketeer."],
        ["Comparative Study", "Use 4 different weapons to deal damage in the Practice Range."],
        ["Crossed the Threshold", "Knock out a Raider."],
        ["Death From Above", "Deal 50 damage to any enemy while standing on top of a downed Rocketeer."],
        ["Dedicated to the Craft", "Have five stations upgraded to level 3 or higher."],
        ["Enemy of My Enemy", "Get an encountered Raider downed by ARC enemies you summoned with a Snitch Scanner."],
        ["Escape Artist", "Safely return to Speranza 100 times."],
        ["Expert Weaponsmith", "Upgrade a weapon to Tier IV."],
        ["For Science!", "Get gas, stun, and burn statuses at the same time."],
        ["Getting Serious", "Upgrade a Workshop station to level 2."],
        ["Heart of Gold", "Be thanked 10 times in direct response to something you did."],
        ["Hook, Line, and Sinker", "Use a Lure Grenade to make a drone attack another drone."],
        ["Horseshoes and Hand Grenades", "Down an encountered Raider with a grenade."],
        ["In the Nick of Time", "Safely return to Speranza with less than 5 seconds left in the round."],
        ["In Your Element", "Reach level 10."],
        ["Into the Breach", "Destroy a Bastion."],
        ["Into Thin Air", "Safely return to Speranza through a Raider Hatch."],
        ["Just Dropping In", "Get hit by the parachute of a Supply Drop you called in."],
        ["Legend of Speranza", "Reach level 75."],
        ["Long Shot", "Hit a target over 250 meters away."],
        ["Mechanical Failure", "Shoot a thruster off a Wasp."],
        ["Most Durable Pants in Speranza", "Slide 80 meters without stopping."],
        ["No Going Back", "Be topside when the safe window closes (survive until the match timer hits 0:00)."],
        ["Not Over Till It's Over", "Safely return to Speranza while downed."],
        ["Practice Makes Perfect", "Visit the Practice Range."],
        ["Racking Them Up", "Destroy 50 ARC enemies."],
        ["Rite of Passage", "Safely return to Speranza for the first time."],
        ["Same Song, Same Verse", "Set off two car alarms in a single round."],
        ["Scavenger", "Search 50 loot containers."],
        ["See You Never", "Return safely to Speranza while leaving a squadmate behind."],
        ["Self-Sufficient", "Install a station in your Workshop."],
        ["Shots Fired", "Deal 1000 damage to ARC enemies."],
        ["Snitches get Stitches", "Destroy a Snitch with a Stitcher."],
        ["The Big Haul", "Return to Speranza with 50 000 worth of loot."],
        ["The Friends We Made Along The Way", "Return to Speranza together with an encountered Raider."],
        ["The Long Haul", "Reach a total lifetime loot value of 1 000 000."],
        ["Three Birds, One Stone", "Destroy 3 ARC enemies with a single Wolfpack grenade."],
        ["Today You, Tomorrow Me", "Revive an encountered Raider with a Defibrillator."],
        ["Top of the World", "Reach the top of the Launch Towers in Spaceport."],
        ["Trail of Destruction", "Destroy 100 ARC enemies."],
        ["Unyielding", "Knock out 10 Raiders."],
        ["Up Close and Personal", "Knock out a Raider with a Raider Tool."],
        ["Well-Armed", "Have two weapons of Tier II or higher equipped in a round."],
        ["Well-Traveled", "Safely return from Dam Battlegrounds, Buried City and Spaceport."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
