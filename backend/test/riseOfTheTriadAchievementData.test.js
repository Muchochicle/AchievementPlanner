import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rise-of-the-triad.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 217140 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rise-of-the-triad");

test("getPlannerData('rise-of-the-triad') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for rise-of-the-triad");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Rise of the Triad achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Rise of the Triad achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Rise of the Triad achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1 On 1", "Beat General Darian in 3 Minutes"],
        ["Aaron the Porridge Baron", "Eat 3 Porridge Bowls in 5 Seconds"],
        ["Assault the Base", "Complete Episode 1 100%"],
        ["ATGM", "Kill an Enemy While Under the Effects of a Jump Pad"],
        ["Backfire", "Complete E4L3 100%"],
        ["Beaglefaaaace!", "Kill 3 Enemies at Once with the Barkblast"],
        ["Bonus Bonus", "Get 2000000 Points in One Level"],
        ["Breach the Castle", "Complete Episode 2 100%"],
        ["Buried in a Lunchbox", "Complete Episode 1"],
        ["Burned and Amazed", "Complete E1L2 100%"],
        ["Circles of Fire", "Complete E4L4 100%"],
        ["Clear and Present Dangers", "Complete E3L4 100%"],
        ["Collateral Damage", "Kill an Enemy with an Exploding Barrel"],
        ["Come at me World", "Submit a Score to the Leaderboard"],
        ["Consider This An Intervention", "Get Shrooms Mode for the First Time"],
        ["Cult Classic", "Complete Episode 4 100%"],
        ["Cult Following", "Complete Episode 4"],
        ["Dat Nostalgia", "Activate the Original Soundtrack"],
        ["Dead in 5 Seconds", "Complete E3L3 100%"],
        ["Deck the Hall", "Beat El Oscuro in 3 Minutes"],
        ["Do You Even Stand?", "Complete Episode 2"],
        ["Double Vision", "Kill 666 Enemies with the Split Missile"],
        ["Down and Over", "Complete E3L2 100%"],
        ["El Oscuro", "Complete E4L5 100%"],
        ["Enemosity", "Complete Episode 3"],
        ["Executioner", "Kill an Enemy While He's Begging for His Life"],
        ["Fire and Brimstone", "Complete E4L2 100%"],
        ["Fool Me Once", "Get Killed by an Enemy Who Was Previously Begging for His Life"],
        ["Four Way Chamber", "Complete E2L4 100%"],
        ["General Darian's Lair", "Complete E1L5 100%"],
        ["Gib Fest", "Gib 50 Enemies "],
        ["Global Warming", "Kill 666 Enemies with the Flamewall"],
        ["Grandma's Boy", "Disable Gore"],
        ["Head Hunter", "Find Scott's Mystical Head"],
        ["Holy Shit", "Run the Game on Maximum Ludicrous Settings"],
        ["Hot Blooded", "Kill 666 Enemies with the Heat Seeker"],
        ["I'm a Plumber By Trade", "Collect 10 Coins in 5 Seconds"],
        ["In the Thick of It", "Complete E1L1 100%"],
        ["Into the Castle", "Complete E2L1 100%"],
        ["It's Like DLC, But Free!", "Run the Game with a Custom Mod or Map Installed"],
        ["Judgement Day", "Kill 666 Enemies While in God Mode"],
        ["Juiced", "Kill 666 Enemies with the Excalibat"],
        ["Knife Party", "Kill 666 Enemies with Knives"],
        ["Know Thine NME", "Complete E3L5 100%"],
        ["Look Ma! No Legs!", "Complete E2L5 100%"],
        ["Ludicrosity", "Get \"Ludicrous gibs\" With All Weapons that are Capable of Gibbing"],
        ["Monky Business", "Complete E4L1 100%"],
        ["Munchies", "Eat 4 Health Pickups While in Shrooms Mode"],
        ["Nukem", "Kill 666 Enemies with the Firebomb"],
        ["Old School", "Beat the Game on Ludicrous difficulty"],
        ["Over Easy", "Beat the Game on Medium Difficulty"],
        ["Raining Blood", "Kill 5 People at Once with Explosives or Magical Weapons"],
        ["Robo Nono", "Beat NME in 5 Minutes"],
        ["Robotricks", "Complete E3L1 100%"],
        ["Rock-It Man", "Kill 666 Enemies with the Rocket Launcher"],
        ["Rocket Scientist", "Kill an Enemy During a Rocket Jump"],
        ["Sausage Fest", "Eat 50 Meals"],
        ["Seven Ten", "Gib 2 Enemies with the Split Missile"],
        ["Shit Faced", "Kill 666 Enemies with the Drunk Missile"],
        ["Shop Smart, Shop S Mart", "Pick up the Doomstick for the first time"],
        ["Slow Your Roll, Bro", "Finish the Game in 4 Hours or Less"],
        ["Spiraling In", "Complete E2L3 100%"],
        ["Spray and Pray", "Kill 666 Enemies with the MP40"],
        ["Spring Surprise", "Complete E1L4 100%"],
        ["Steppin' Razer", "Kill 50 Enemies by Using Their Own Traps Against Them"],
        ["Tequila", "Kill 666 Enemies with Pistols"],
        ["That's Dope", "Find the Dopefish"],
        ["This is my Doomstick!", "Kill 666 Enemies with the Doomstick"],
        ["Too Much Room", "Complete E1L3 100%"],
        ["Triple Triad", "Kill 3 Different Types of Triads with One Attack"],
        ["Tryhard", "Kill an Enforcer with a Single Pistol"],
        ["Walk in the Park", "Beat the Game on Easy Difficulty"],
        ["WARP ZONED", "Play Through All The Secret Levels"],
        ["Weak Legs", "Beat Krist in 3 Minutes"],
        ["What Lies Beneath", "Complete Episode 3 100%"],
        ["With a Vengeance!", "Beat the Game on Hard Difficulty"],
        ["You Shall Not Pass", "Kill 666 Enemies with the Dark Staff"],
        ["You Suck", "Get the Bad Ending"],
        ["You're Tearing Me Apart!", "Complete E2L2 100%"],
        ["You're The Dog Now, Man!", "Kill 666 Enemies While in Dog Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
