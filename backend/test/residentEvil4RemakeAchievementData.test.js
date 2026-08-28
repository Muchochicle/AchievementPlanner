import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-4-remake.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2050650 (fetched through this app's own services/steamApi.js).
// 33 of 46 ship a real, official Steam description, quoted
// verbatim below. The 13 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against PowerPyx, TrueAchievements/XboxAchievements and the Resident
// Evil Wiki, and kept spoiler-light (boss/act name only).
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-4-remake");

test("getPlannerData('resident-evil-4-remake') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-4-remake");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Resident Evil 4 (2023) achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Resident Evil 4 (2023) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 officially-described Resident Evil 4 (2023) achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "16",
        "32",
        "40",
        "41",
        "42",
        "45",
        "46",
    ]);

    assert.strictEqual(hiddenApinames.size, 13, "sanity check - Resident Evil 4 (2023) has 13 hidden achievements");

    const officialAchievements = [
        ["A Masterpiece", "Get the exclusive upgrade for a weapon."],
        ["Amateur Shooter", "Complete a game at the shooting range."],
        ["Astute Appraiser", "Sell a single treasure for at least 100000 ptas."],
        ["Bandit", "Obtain all treasures indicated on the village treasure map in a single playthrough."],
        ["Burglar", "Obtain all treasures indicated on the castle treasure map in a single playthrough."],
        ["Capable Operative", "Complete Separate Ways on Standard mode or higher."],
        ["Capacity Compliance", "Reach the top of the clock tower without the lift stopping once."],
        ["Frugalist", "Complete the main story without using a recovery item."],
        ["Gun Fanatic", "Obtain all weapons."],
        ["Hope You Like Thrill Rides!", "Make it through both minecart sections in the underground tunnel without taking any damage."],
        ["Jack of All Trades", "Complete all requests from the Merchant."],
        ["Knife Basics", "Parry an enemy with a knife."],
        ["Minimalist", "Complete the main story using only knives and handguns. (Excluding specific battles.)"],
        ["Mission Accomplished S+", "Complete the main story on Standard mode with an S+ rank."],
        ["My Preferred Piece", "Upgrade a weapon."],
        ["Never Heard It Coming", "Defeat a Garrador using only knives."],
        ["Nice One, Stranger!", "Complete a request for the Merchant."],
        ["Overkill", "Use a cannon to defeat a zealot."],
        ["Proficient Agent", "Complete the main story on Hardcore mode or higher."],
        ["Promising Agent", "Complete the main story on Standard mode or higher."],
        ["Raider", "Obtain all treasures indicated on the island treasure map in a single playthrough."],
        ["Real Deadeye", "Earn an S rank in all games at the shooting range."],
        ["Revolt Against the Revolting", "Destroy a Clockwork Castellan."],
        ["Revolution Wind-up", "Destroy all Clockwork Castellans."],
        ["S+ Rank Investigator", "Complete the main story on Hardcore mode with an S+ rank."],
        ["Shield Your Eyes", "Defeat 3 enemies at once with a flash grenade."],
        ["Silent Stranger", "Complete the main story without talking to the Merchant once."],
        ["Skilled Agent", "Complete Separate Ways on Hardcore mode or higher."],
        ["Smooth Escape", "Escape on the water scooter without taking any damage."],
        ["Sprinter", "Complete the main story within 8 hours."],
        ["Talk About Near-Death Experience!", "Rescue Ashley as she's being carried away by the enemy."],
        ["Trick Shot", "Shoot through and destroy 5 targets at the shooting range with a single shot."],
        ["Two Bugs, One Stone", "Kill 2 parasites inside a Regenerador with a single bullet."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 13 hidden Resident Evil 4 (2023) achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["7", "Harpoon Hurler"],
        ["8", "Grilled Big Cheese"],
        ["9", "Wave Goodbye, Right Hand"],
        ["10", "No Thanks, Bro!"],
        ["11", "You Used to Be a Good Guy"],
        ["12", "You're Small Time!"],
        ["16", "You Talk Too Much!"],
        ["32", "Peerless Agent"],
        ["40", "Giant Slayer"],
        ["41", "\"It\" Kept You Busy"],
        ["42", "Had Enough of Preachers"],
        ["45", "The Perfect Mission"],
        ["46", "Ada the \"S+\"py"],
    ];

    assert.strictEqual(names.length, 13, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
