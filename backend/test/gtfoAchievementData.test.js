import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gtfo.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 493520 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("gtfo");

test("getPlannerData('gtfo') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for gtfo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every GTFO achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every GTFO achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 GTFO achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Additional Duty", "Complete all Secondary Sectors in all Rundowns"],
        ["Bare Minimum", "Complete a Main Sector"],
        ["Beyond Range", "Complete an Overload Sector"],
        ["Biotracker", "Complete any expedition having marked every enemy on the map using the Biotracker"],
        ["Breathing Room", "Complete any D-tier expedition without any doors being broken"],
        ["Cataloger", "Find 50 story logs in the Complex"],
        ["Chemically Improved", "Complete an expedition with at least one Booster activated"],
        ["Close Quarters", "Complete any D-tier expedition with everyone using shotguns equipped as main and secondary"],
        ["Contact", "Complete all Main Sectors in ALT://R4"],
        ["Controlled Response", "Complete any B-tier expedition alone with only pistols or revolvers equipped as main and secondary"],
        ["D-Lock Block Decipherer", "Find every story log in the Complex"],
        ["Defector", "Reach the end of R8 without starting the nuclear meltdown."],
        ["Demolitions Expert", "Kill a total of 20 enemies with one tripmine"],
        ["Destination", "Complete all Main Sectors in ALT://R6"],
        ["Detox", "Complete any E-tier expedition without using any boosters"],
        ["Deviation", "Complete all Main Sectors in ALT://R1"],
        ["Die Together", "Fail an expedition for the first time"],
        ["Dots and Dashes", "Discover Schaeffer's secret message."],
        ["Duality", "Complete all Main Sectors in R8"],
        ["Full Blooded", "Kill a Giant by yourself using only melee weapons"],
        ["Guardian Angel", "Kill a Snatcher that has captured a teammate"],
        ["In the Shadows", "Complete any B-tier expedition without anyone having turned on the flashlight"],
        ["Indirect Course", "Complete a Secondary Sector"],
        ["Infection", "Complete all Main Sectors in ALT://R2"],
        ["Invincible", "Complete an expedition without getting downed"],
        ["John", "Find Schaeffer's bucket."],
        ["Low Tech", "Complete any C-tier expedition without anyone using the active ability of their tools"],
        ["Loyalist", "Start the nuclear meltdown in R8."],
        ["Main Path", "Complete all Main Sectors"],
        ["Matter Wave Projector", "Teleport to another dimension for the first time."],
        ["Meet Schaeffer", "Come face to face with Schaeffer."],
        ["Mutual Insurance", "Kill a Tank without anyone on the team taking any damage"],
        ["Overload Operative", "Complete all Overload Sectors in all Rundowns"],
        ["Predator", "Kill a Scout with a melee attack without it detecting you"],
        ["Prisoner Deemed Fit", "Complete the Tutorial"],
        ["Prisoner Efficiency", "Achieve Prisoner Efficiency by completing the Main, Overload and Secondary Sectors of an expedition in one attempt"],
        ["Pure Will", "Complete R8D1 without using any health kits or disinfectants"],
        ["R4 Absolute", "Complete all Sectors in ALT://R4"],
        ["R5 Absolute", "Complete all Sectors in ALT://R5"],
        ["R6 Absolute", "Complete all Sectors in ALT://R6"],
        ["R7 Absolute", "Complete all Sectors in R7"],
        ["R8 Absolute", "Complete all Sectors in R8"],
        ["Rapid Response", "Kill a Mother without it having used its spawning ability"],
        ["Rebirth", "Complete all Main Sectors in ALT://R5"],
        ["Rise", "Complete all Main Sectors in R7"],
        ["Sum Total", "Complete all Sectors in all Rundowns"],
        ["Swift", "Kill a P-mother without taking any damage from baby strikers"],
        ["The Inner", "Descend a total of 100 kilometres into the Complex by elevator."],
        ["The Vessel", "Complete all Main Sectors in ALT://R3"],
        ["The Voice of Truth", "Hear a Voice of Truth broadcast for the first time in R2E1."],
        ["Theorist", "Find 5 story logs in the Complex"],
        ["Trigger Discipline", "Complete any A-tier expedition without using main or secondary weapons."],
        ["Ultimate Efficiency", "Achieve Prisoner Efficiency in all expeditions that have Secondary and Overload Sectors"],
        ["Unbroken", "Survive a class V or higher alarm without anyone taking any damage"],
        ["Unmasked", "Find all the character backstory logs in ALT://R5."],
        ["Versed", "Find 20 story logs in the Complex"],
        ["Work Together", "Complete an expedition with four player without anyone getting downed"],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
