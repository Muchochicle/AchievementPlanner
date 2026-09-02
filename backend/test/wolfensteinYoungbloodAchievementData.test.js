import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wolfenstein-youngblood.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1056960 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wolfenstein-youngblood");

test("getPlannerData('wolfenstein-youngblood') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for wolfenstein-youngblood");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Wolfenstein: Youngblood achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Wolfenstein: Youngblood achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Wolfenstein: Youngblood achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3-D", "Find all 3D glasses."],
        ["A better you", "Obtain 5 abilities."],
        ["A cloud of lead", "Achieve mastery level 10 with the Kugelgewehr."],
        ["A red mist", "Gore 150 enemies."],
        ["Airborne", "Kill 50 enemies while airborne."],
        ["Airship down", "Defeat Winkler."],
        ["American Football", "Kill 50 enemies with your Crush ability."],
        ["Among friends", "Link up with the resistance."],
        ["Audiophile", "Find all Cassette Tapes."],
        ["Banker", "Find 60,000 coins."],
        ["Bomber", "Kill 50 enemies using explosives."],
        ["Brother 1", "Defeat the Übergarde in Brother 1."],
        ["Brother 2", "Defeat the Übergarde in Brother 2."],
        ["Brother 3", "Defeat the Übergarde in Brother 3."],
        ["Chop and slice", "Achieve mastery level 10 with a melee weapon."],
        ["Chopper", "Achieve mastery level 10 with the Sturmgewehr."],
        ["Cinephile", "Find all UVK Covers."],
        ["Dark Days", "Enter all Undergrounds."],
        ["Demolition woman", "Achieve mastery level 10 with the Dieselkraftwerk."],
        ["Dust to dust", "Achieve mastery level 10 with the Laserkraftwerk."],
        ["Electric feel", "Achieve mastery level 10 with the Elektrokraftwerk."],
        ["Expert explorer", "Open all red supply crates."],
        ["Explorer", "Open 200 supply crates."],
        ["Extra everything", "Obtain 15 abilities."],
        ["Gear head", "Obtain all improved weapon upgrades."],
        ["Get the strap", "Achieve mastery level 10 with the Maschinenpistole."],
        ["God Key", "Obtain the God Key during the Lab X mission."],
        ["God mode", "Kill 50 enemies with their own bullets, reflected using the God Key power."],
        ["Gunslinger", "Achieve mastery level 10 with the Pistole."],
        ["Hacker", "Find all Floppy Disks."],
        ["Hammer time", "Achieve mastery level 10 with a Hammer weapon."],
        ["Hard boiled", "Kill 100 enemies while dual-wielding."],
        ["Heavy artillery", "Tuck a Hammer weapon away for later."],
        ["Immovable object", "Kill 10 charging Supersoldaten."],
        ["Intruder", "Get through 10 code locks."],
        ["Kitted out", "Obtain 10 weapon upgrades."],
        ["Librarian", "Find all Readables."],
        ["More human than human", "Obtain all abilities."],
        ["One woman army", "Achieve mastery level 10 with all weapons."],
        ["Partisan", "Complete all missions."],
        ["Plain sight", "Enter Lab X."],
        ["Predator", "Kill an enemy within 3 seconds of uncloaking 50 times"],
        ["Prepper", "Pick up 250 loot supplies."],
        ["Rasputin", "Revive or get revived 25 times."],
        ["Resistor", "Kill 500 enemies."],
        ["Right tool for the job", "Kill 75 enemies using the weapon type that's most effective against their shield type."],
        ["Ripper", "Kill 75 enemies using take-downs."],
        ["See my vest", "Obtain 5 power armor skins."],
        ["Spray and pray", "Achieve mastery level 10 with the Blitzgewehr."],
        ["Stealthy", "Stealthily kill 50 enemies."],
        ["Sting like a bee", "Stealth Kill 10 Supersoldaten."],
        ["Supportive", "Perform 100 pep signals."],
        ["Supreme ninja", "Kill 50 enemies using thrown weapons."],
        ["Swatter", "Kill 20 drones."],
        ["Tacticool", "Fully upgrade a weapon brand."],
        ["Teamwork", "Complete a mission with co-op player."],
        ["Tribute", "Obtain the souvenir from Dunwall."],
        ["Trigger happy", "Fire 100,000 shots."],
        ["Vive la révolution!", "Kill Lothar."],
        ["World's best Dad", "Meet up with your father."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
