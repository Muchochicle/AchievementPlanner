import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/alan-wake.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 108710 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("alan-wake");

test("getPlannerData('alan-wake') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for alan-wake");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Alan Wake achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Alan Wake achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Alan Wake achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend in Need", "Special 1: Find someone to help you."],
        ["A Friend Indeed", "Special 1: Follow the signal to its conclusion."],
        ["Alan, Wake Up", "Complete the game on Nightmare difficulty."],
        ["An Idyllic Small Town", "Make it through ''Night Life in Bright Falls'' in one go without dying or restarting even once."],
        ["Back! Back, I Say!", "Save yourself with a flare."],
        ["Boob Tube", "See what's on TV."],
        ["Bright Falls Aficionado", "Absorb every bit of local history and culture."],
        ["Bright Falls' Finest", "Call for help."],
        ["Cardboard Companions", "Special 1: Discover all of the cardboard standees."],
        ["Carny", "Knock over five can pyramids."],
        ["Child of the Elder God", "Have a rock'n'roll moment without dropping to a low health state."],
        ["Collateral Carnage", "Defeat 20 Taken with indirect means."],
        ["Collector's Edition", "Find all of the manuscript pages in the game, including the ones in Nightmare mode."],
        ["Come One, Come All", "Kill four Taken with a single shot from the flaregun."],
        ["Couch Potato", "Watch every single TV show."],
        ["Creative Space", "Special 2: Discover the secret area."],
        ["Damn Good Cup of Coffee", "Discover 25 coffee thermoses."],
        ["Departure", "Complete the game on Normal difficulty."],
        ["Ding!", "Special 2: Complete the elevator ride."],
        ["Drink 'Em Both Up", "Put de lime in de coconut twice."],
        ["Energized!", "Use 100 batteries."],
        ["Every Nook and Cranny", "Discover all of the hidden chests."],
        ["Fast and Furious", "Special 1: Make it through the final battle in less than 1 minute and 30 seconds."],
        ["Finders Keepers", "Discover 5 hidden chests."],
        ["Float Like a Butterfly", "Perform a cinematic dodge."],
        ["Follow the Light", "Take a night course of light education."],
        ["Gatekeeper", "Cut the power to the transformer yard."],
        ["Go Gentle Into That Good Light", "Special 2: Make it through the approach to the lighthouse without firing a weapon."],
        ["Gunless Wonder", "Make it to Cauldron Lake without firing a single shot in ''On the Road to Cauldron Lake.''"],
        ["Hardboiled Writer", "Complete the game on Hard difficulty."],
        ["Heartbreaker", "Special 2: Have some poison poured in your ear."],
        ["Heavy Metal", "Survive the bulldozer attack."],
        ["Hypercaffeinated", "Discover all coffee thermoses."],
        ["If It Flies, It Burns", "Burn 1,000 birds."],
        ["Iron Horse", "Encounter a steam engine."],
        ["Iron Will", "Special 2: Survive the final encounter without being seriously hurt."],
        ["It's Not Just a Typewriter Brand", "Defeat 50 Taken with a shotgun."],
        ["KBF-FM", "Listen to all of the radio shows."],
        ["Kill Your Darlings", "Special 2: Defeat the final obstacle between you and your goal."],
        ["Let There Be Light", "Get a generator running."],
        ["License Revoked", "Special 1: Complete the episode without using a single vehicle."],
        ["Licensed Properties", "Special 2: Discover 10 Night Springs video games."],
        ["Medical Opinions", "Listen to Hartman's recordings."],
        ["Meet the Deadline", "In ''Mirror Peak,'' make it from the Coal Mine Museum to Cauldron Lake in 30 minutes."],
        ["Missed by a Mile", "Perform a cinematic dodge 20 times."],
        ["No Punctuation", "Special 2: Complete the episode without reloading the game or restarting a checkpoint."],
        ["Nordic Walking", "Take a walk through the logging area, meet one of the quirky locals."],
        ["Paging Mr. Wake", "Find 25 manuscript pages."],
        ["Park Ranger", "Enjoy the sounds and sights of Elderwood National Park."],
        ["Perchance to Dream", "Take a moment to reflect on past events."],
        ["Picking Up After Yourself", "Find all of the manuscript pages in Normal mode."],
        ["Right of Way", "Drive over 15 Taken."],
        ["Run-On Sentence", "Special 1: Complete the episode without reloading the game or restarting a checkpoint."],
        ["Sound and Fury", "Kill four Taken with a single flashbang."],
        ["Taken Season", "Defeat 50 Taken with the hunting rifle."],
        ["The Lady of the Light", "Discover the secret she guards."],
        ["The Six-Gun Scribe", "Defeat 100 Taken with the revolver."],
        ["They're Heeeeeere!", "Inanimate objects shouldn't move of their own accord. Put a stop to this affront, oh, say, 20 times."],
        ["Thunder and Lightning", "Defeat 50 Taken with flashbang grenades."],
        ["Tick Tock", "Special 1: Discover 10 hidden alarm clocks."],
        ["Tornado Wrangler", "Defeat the tornado."],
        ["Two For the Price of One", "Kill two Taken with a single shotgun blast."],
        ["Under a Thin Layer of Skin", "Defy the park ranger."],
        ["What Light Through Yonder Window", "Defeat 50 Taken with the flaregun, the way Shakespeare intended."],
        ["Wheels Within Wheels", "Meet the kidnapper."],
        ["Whirlwind", "Special 2: Make your way past the tornado in under 60 seconds."],
        ["Words Will Never Harm You", "Special 1: Trigger all of the furnaces in the basement."],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
