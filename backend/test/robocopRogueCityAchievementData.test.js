import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/robocop-rogue-city.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1681430 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("robocop-rogue-city");

test("getPlannerData('robocop-rogue-city') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for robocop-rogue-city");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every RoboCop: Rogue City achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every RoboCop: Rogue City achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 RoboCop: Rogue City achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Nice shooting, son\"", "Complete the game on any difficulty level."],
        ["\"This Guy Is Really Good\"", "Score 200 points at the shooting range."],
        ["A Real Hero", "Save a cat from the Burning Hotel."],
        ["All Adds Up", "Equip Auto-9's PCB with any chip."],
        ["Book Him!", "Complete Ghosts from The Past quest."],
        ["Cashing Out", "Complete The Man Himself quest."],
        ["Dead or Alive", "Complete Soot's Final Encore quest."],
        ["Dead-On", "Score 150 points at the shooting range."],
        ["Don't Mess With the Money!", "Complete Bank Heist quest."],
        ["Good eyes, Murphy!", "Find a PCB for Auto-9 in a secret area of Steel Mill."],
        ["Hard Boiled", "Help officers Kurtz and O'Neal solve a murder case."],
        ["I'd Buy That For a Dollar!", "Find an OCP skill disk."],
        ["Let's Talk", "Complete Wendell’s Confession quest."],
        ["Live by the bike...", "Shoot the gas tank of a moving motorcycle."],
        ["May Be Used Against You", "Hack an enemy turret."],
        ["Night Has Just Begun", "Complete Breaking News quest."],
        ["No stone unturned", "Find a secret area in the Arcade."],
        ["Not Arresting You Anymore", "Complete No Way Out quest."],
        ["Nukem!", "Eliminate 3 enemies with 1 explosive."],
        ["Officer of the month", "Score \"A\" on any evaluation."],
        ["Practice Makes Perfect", "Fully develop any skill."],
        ["Strikeout!", "Eliminate an enemy using a throwable object."],
        ["SuperCop", "Score 250 points at the shooting range."],
        ["There Can Only Be One", "Destroy all UEDs during a Shady Meeting in under 10 minutes."],
        ["Twenty Seconds to Comply", "Complete Street Vulture's Turf quest."],
        ["Uphold the Law", "Issue a ticket."],
        ["Zip This Up", "Shoot an enemy in a sensitive spot."],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
