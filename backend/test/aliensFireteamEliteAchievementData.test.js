import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/aliens-fireteam-elite.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1549970 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("aliens-fireteam-elite");

test("getPlannerData('aliens-fireteam-elite') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for aliens-fireteam-elite");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Aliens: Fireteam Elite achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Aliens: Fireteam Elite achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Aliens: Fireteam Elite achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Personal Friend of Mine", "Level a weapon to four stars."],
        ["A Stand Up Fight", "Finish a mission on Extreme Difficulty."],
        ["All My Personal Friends", "Level 30 weapons to four stars on a single character."],
        ["Anti-Mutation Station", "Eliminate 300 Pathogen."],
        ["Art Gallery", "Collect 40 decals on a single character."],
        ["Burn 'Em Out", "Kill 1000 enemies with fire."],
        ["CMISRS Asset", "Return 39 pieces of intel on a single character."],
        ["CMISRS Resource", "Return 48 pieces of intel on a single character."],
        ["Confidence Course", "Do a successful Challenge run."],
        ["Didn't Break a Sweat", "Finish a mission on Intense Difficulty."],
        ["Expeditionary Service Ribbon", "Finish all Campaigns on Standard Difficulty."],
        ["Express Yourself", "Collect 20 emotes on a single character."],
        ["Fashion Team", "Change your hat and outfit."],
        ["Fully Rigged", "Fill every slot in a perk board."],
        ["Giants in the Earth", "Finish the \"Giants in the Earth\" Campaign."],
        ["Glorified Toasters", "Eliminate 1000 Synthetics."],
        ["Got All I Need", "Complete a mission without using aid kits, ammo crates, or consumables."],
        ["High Voltage", "Kill 1000 enemies with electricity."],
        ["I Can't Lie About Your Chances", "Finish a mission on Hardcore 10 Difficulty."],
        ["I Think They Like Me", "Get grappled five times in the same mission."],
        ["Improvised Explosives", "Kill 50 enemies with explosive barrels or pods."],
        ["It's a Bug Hunt", "Eliminate 10000 Xenomorphs."],
        ["It's a Cover, Not a Hat", "Collect 20 hats on a single character."],
        ["It's Camouflage on Some Planet", "Collect 40 weapon colors on a single character."],
        ["Keen Eye", "Open 50 hidden caches."],
        ["Kitted Out", "Level five Kits to Rank 8 on a single character."],
        ["LV-895 Campaign Medal", "Finish all Campaigns on Extreme Difficulty."],
        ["LV-895 Service Ribbon", "Finish all Campaigns on Intense Difficulty."],
        ["My Kind of Crazy", "Finish a mission on Insane Difficulty."],
        ["Nukes, Knives, AND Sharp Sticks", "Equip three attachments on a single weapon."],
        ["Overwhelming Confidence", "Complete 25 successful Challenge runs."],
        ["Pod Popper", "Destroy 50 explosive spore pods with Weapons or Abilities."],
        ["Priority One", "Finish the \"Priority One\" Campaign."],
        ["Promise of a Flower", "Finish the \"Promise of a Flower\" Campaign."],
        ["Ready for Anything", "Collect 25 attachments on a single character."],
        ["Red Makes It Shoot Faster", "Equip a colorway and decal onto a gun."],
        ["Reticulum Theater Medal", "Finish all Campaigns on Insane Difficulty."],
        ["Specialist", "Level a Kit to Rank 8."],
        ["State of the Art Firepower", "Collect one attachment of every type on a single character."],
        ["Supportive Squad", "Complete 50 missions without anyone being downed."],
        ["Suturing Expert", "Heal your fireteam with an aid kit 100 times."],
        ["The Gift of Fire", "Finish the \"Gift of Fire\" Campaign."],
        ["The Only Way to be Sure", "Finish the \"Only Way to be Sure\" Campaign."],
        ["Those Things Were Huge", "Eliminate 2000 elite enemies."],
        ["Tower Defense", "Use 500 consumables."],
        ["Trigger Discipline", "Complete a mission on Intense Difficulty or above without anyone taking friendly fire damage."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
