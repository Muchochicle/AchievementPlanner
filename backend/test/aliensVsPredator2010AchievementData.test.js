import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/aliens-vs-predator-2010.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 10680 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("aliens-vs-predator-2010");

test("getPlannerData('aliens-vs-predator-2010') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for aliens-vs-predator-2010");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Aliens vs. Predator (2010) achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Aliens vs. Predator (2010) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Aliens vs. Predator (2010) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...That's A Promise", "Get Tequila to surgery"],
        ["Ain't Got Time to Bleed", "Heal or regenerate 30 blocks of health in Survivor"],
        ["Alien vs Predator", "Create a new species"],
        ["Breaking and Entering", "Find a way into the Research Lab"],
        ["Breaking Quarantine", "Escape from the Research Lab"],
        ["Club Hopper", "Survive The 'Party' at The Club"],
        ["Come to Mama", "Liberate the Matriarch"],
        ["Elite Sniper", "Kill 10 enemies with head shots from the scoped rifle"],
        ["Exit Strategy", "Escape from C-Block"],
        ["Extinction Agenda", "Destroy the Abomination"],
        ["Eyes of The Demon", "Retrieve the ancient mask"],
        ["Fallen Comrade", "Find the Youngbloods in the Jungle"],
        ["Fortune and Glory", "Find all 45 Predator trophy belts"],
        ["Game Over, Man!", "Complete all three Campaigns"],
        ["Get to The Chopper!", "Recover Weyland's datapad"],
        ["Grim Reaper", "Harvest all available civilians in the Alien Campaign"],
        ["Grunt Hunt", "Wipe out all of the Marines in the Colony"],
        ["Gunslinger", "Kill 30 enemies with the pistol"],
        ["Harsh Language", "Discover all 67 Audio Diaries"],
        ["I Admire its Purity", "Complete Alien Campaign on Hard difficulty setting"],
        ["I Like to Keep This Handy", "Kill 2 enemies with one shot with the shotgun"],
        ["I LOVE the Corps!", "Complete Marine Campaign on Nightmare difficulty setting"],
        ["I Will Never Leave You...", "Locate Tequila"],
        ["It Ain't No Man", "Complete Predator Campaign on Hard difficulty setting"],
        ["It Uses The Jungle", "Find a way through Gateway"],
        ["Killer Instinct", "Win your first Ranked Match in standard Deathmatch mode"],
        ["Let's Rock!", "Kill 5 enemies with one burst from the smartgun"],
        ["Magnificent, Isn't It?", "Complete Alien Campaign on Nightmare difficulty setting"],
        ["Matter of Honor", "Discover the Elite Predator's fate"],
        ["Not Bad for A Human", "Get all the Aliens vs Predator achievements"],
        ["One Big Bug", "Defeat the Praetorian"],
        ["One Ugly Mother", "Complete Predator Campaign on Nightmare difficulty setting"],
        ["Persecution Complex", "Achieve Persecutor status more than once in any Ranked Match"],
        ["Quite A Specimen", "Destroy all 50 Royal Jelly Containers"],
        ["Real Nasty Habit", "Get 18060 XP in Ranked Matches"],
        ["Reclaimer", "Retrieve the second artifact"],
        ["Regicide", "Defeat the Matriarch"],
        ["Scatter Shot", "As a team, kill 20 enemies in under 60 seconds in a Survivor match."],
        ["Serial Killer", "Win 10 Ranked Matches in any Deathmatch mode"],
        ["Spin Doctor", "Kill two enemies with one throw of the Battle Disc"],
        ["Stay Frosty", "Complete Marine Campaign on Hard difficulty setting"],
        ["Stick Around", "Kill 20 enemies with the Combi Stick"],
        ["The Six Pack", "Play with six friends in a Ranked Match"],
        ["The Uninfected", "Finish a Ranked Infestation match as the only remaining prey"],
        ["Under Pressure", "Solve the riddle of the Ruins"],
        ["Very Tough Hombre", "Kill 10 enemies in a row without dying in a Ranked Match"],
        ["Welcome to The Party", "Get 6000 XP in Ranked Matches"],
        ["Welcome to The War", "Play and complete your first Ranked Match in standard Deathmatch mode"],
        ["World of Hurt", "Survive trial by combat"],
        ["You Have My Sympathies", "Help Van Zandt"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
