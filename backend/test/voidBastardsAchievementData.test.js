import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/void-bastards.json - 24 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 857980 (fetched through this app's own services/steamApi.js) -
// all 24 ship a real, official Steam description, including the
// developer's own trailing-comma typo in "Escape the nebula,".
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const voidBastards = getPlannerData("void-bastards");

test("getPlannerData('void-bastards') returns real planner data with 24 curated achievements", () => {

    assert.ok(voidBastards, "expected real planner data for void-bastards");
    assert.ok(Array.isArray(voidBastards.achievements));
    assert.strictEqual(voidBastards.achievements.length, 24);

});

test("every Void Bastards achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = voidBastards.achievements.map(a => a.id);
    const apinames = voidBastards.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Void Bastards achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of voidBastards.achievements) {

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

test("every one of the 24 Void Bastards achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Bodge Job", "Build an upgrade"],
        ["Specially Selected", "Get killed by pirates"],
        ["Tooled Up", "Upgrade the regulator"],
        ["Swanning Around", "Pilot S.T.E.V. to nebula depth two."],
        ["Staff Turnover", "Rehydrate a second client."],
        ["Sorted", "Escape the nebula,"],
        ["Cooking with Gas", "Escape the nebula on HARD."],
        ["Cor Blimey!", "Escape the nebula on HARD BASTARD."],
        ["Coffin Dodger", "Escape the nebula on NORMAL or HARD with no deaths."],
        ["Off the Hook", "Escape the nebula on HARD BASTARD with no deaths."],
        ["Brown Noser", "Build a Citizen Card."],
        ["Human Resource", "Build the HR Computer."],
        ["Chilled Out", "Build the Water Cooling unit."],
        ["Software Pirate", "Build the Transmitter."],
        ["Kippers for Breakfast", "Blow up a void whale."],
        ["Shiver Their Timbers", "Survive a pirate encounter."],
        ["Trainspotter", "Build every upgrade."],
        ["Mingin", "Catch a garbage collector."],
        ["Lombard", "Loot a pupbot."],
        ["Mahatma", "Escape the nebula on NORMAL with the UNARMED restriction."],
        ["Squaddie", "Escape the nebula on NORMAL with the ONLY FIREARMS restriction."],
        ["Guy Fawkes", "Escape the nebula on NORMAL with the ONLY INDIRECT restriction."],
        ["Clever Dick", "Escape the nebula on NORMAL with the ONLY DEVICES restriction."],
        ["Tight Arse", "Escape the nebula on NORMAL without building any non progress upgrades."]
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list - Void Bastards has no Steam-hidden achievements");

    const dataPairs = voidBastards.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
