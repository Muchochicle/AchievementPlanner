import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/factorio.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 427520 (fetched through this app's own services/steamApi.js).
// 87 of 88 ship a real, official Steam description, quoted
// verbatim below; 1 ships only a blank description and is given a
// curatorial one (cross-checked against the Factorio Wiki).
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("factorio");

test("getPlannerData('factorio') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for factorio");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Factorio achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Factorio achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 87 officially-described Factorio achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Arachnophilia", "Build a spidertron."],
        ["Art of siege", "Destroy an enemy structure using artillery."],
        ["Automate this!", "Build an assembling machine."],
        ["Automated cleanup", "Deconstruct 100 objects with the construction robots."],
        ["Automated construction", "Construct 100 machines using robots."],
        ["Circuit veteran 1", "Produce 1.0k advanced circuits per hour."],
        ["Circuit veteran 2", "Produce 10k advanced circuits per hour."],
        ["Circuit veteran 3", "Produce 25k advanced circuits per hour."],
        ["Computer age 1", "Produce 500 processing units per hour."],
        ["Computer age 2", "Produce 1.0k processing units per hour."],
        ["Computer age 3", "Produce 5k processing units per hour."],
        ["Crafting with efficiency", "Craft an efficiency module 3."],
        ["Crafting with productivity", "Craft a productivity module 3."],
        ["Crafting with quality", "Craft a quality module 3."],
        ["Crafting with speed", "Craft a speed module 3."],
        ["Delivery service", "Supply the character with 10k items delivered by logistic robots."],
        ["Eco unfriendly", "Research oil processing."],
        ["Express delivery", "Finish the game within 40 hours."],
        ["Fusion power", "Start producing electric power by fusion powerplant."],
        ["Get off my lawn", "Disturb a demolisher by building on its territory."],
        ["Getting on track", "Build a locomotive."],
        ["Getting on track like a pro", "Build a locomotive within the first 90 minutes of the game."],
        ["Going to shattered planet 1", "Travel 10 000 km towards the shattered planet."],
        ["Going to shattered planet 2", "Travel 30 000 km towards the shattered planet."],
        ["Going to shattered planet 3", "Travel 60 000 km towards the shattered planet."],
        ["Golem", "Survive a hit of 500 damage or more."],
        ["I am the destroyer of worlds", "Use an atomic bomb."],
        ["If it bleeds, we can kill it", "Kill a small demolisher."],
        ["Iron throne 1", "Produce 20k iron plates per hour."],
        ["Iron throne 2", "Produce 200k iron plates per hour."],
        ["Iron throne 3", "Produce 400k iron plates per hour."],
        ["It stinks and they do like it", "Attract a group of pentapods using spores."],
        ["It stinks and they don't like it", "Trigger an alien attack by pollution."],
        ["Keeping your hands clean", "Destroy your first enemy structure using artillery."],
        ["Lazy bastard", "Launch a rocket to space while manually crafting no more than 111 items."],
        ["Logistic network embargo", "Finish research with space science pack for the base game or any planetary science pack for Space Age without building any active provider, buffer, or requester chests."],
        ["Look at my shiny rare armor", "Equip rare or better quality of power armor MK2 or mech armor."],
        ["Make it better", "Manually insert a quality module into a module slot."],
        ["Mass production 1", "Produce 10k electronic circuits."],
        ["Mass production 2", "Produce 1M electronic circuits."],
        ["Mass production 3", "Produce 20M electronic circuits."],
        ["Mining with determination", "Completely deplete a resource patch."],
        ["Minions", "Have 100 combat robots or more following you."],
        ["My modules are legendary", "Craft a legendary quality module 3."],
        ["No room for more", "Fill every tile of legendary mech armor with legendary equipment."],
        ["No time for chitchat", "Launch a rocket to space within 15 hours."],
        ["Nuclear power", "Start producing electric power by nuclear powerplant."],
        ["Pest control", "Destroy a biter spawner."],
        ["Pyromaniac", "Destroy 10k trees with fire."],
        ["Raining bullets", "Launch a rocket to space without building any laser turrets."],
        ["Reach for the stars", "Create a space platform."],
        ["Research with agriculture", "Research a technology using agricultural science packs."],
        ["Research with automation", "Research a technology using automation science packs."],
        ["Research with chemicals", "Research a technology using chemical science packs."],
        ["Research with cryogenics", "Research a technology using cryogenic science packs."],
        ["Research with electromagnetics", "Research a technology using electromagnetic science packs."],
        ["Research with logistics", "Research a technology using logistic science packs."],
        ["Research with metallurgics", "Research a technology using metallurgic science packs."],
        ["Research with military", "Research a technology using military science packs."],
        ["Research with production", "Research a technology using production science packs."],
        ["Research with promethium", "Research a technology using promethium science packs."],
        ["Research with space", "Research a technology using space science packs."],
        ["Research with utility", "Research a technology using utility science packs."],
        ["Run Forrest, run", "Destroy 100 trees by impact."],
        ["Rush to space", "Research a technology using another planet's science pack before unlocking production or utility science packs."],
        ["Second star to the right and straight on till morning", "Finish the game."],
        ["Size doesn't matter", "Kill a big demolisher."],
        ["Smoke me a kipper, I'll be back for breakfast", "Launch a rocket to space."],
        ["Solar power", "Start producing electric power by solar panels."],
        ["Solaris", "Produce more than 10 GJ per hour using only solar panels."],
        ["Steam all the way", "Launch a rocket to space without building any solar panels."],
        ["Steam power", "Start producing electric power by steam engine."],
        ["Steamrolled", "Destroy 10 spawners by impact."],
        ["Tech maniac", "Research all technologies."],
        ["Terraformer", "Destroy a cliff."],
        ["There is no spoon", "Launch a rocket to space within 8 hours."],
        ["Today's fish is trout a la creme", "Eat a legendary fish."],
        ["Trans-Factorio express", "Have a train plan a path 1,000 tiles or longer."],
        ["Visit Aquilo", "Travel to planet Aquilo."],
        ["Visit Fulgora", "Travel to planet Fulgora."],
        ["Visit Gleba", "Travel to planet Gleba."],
        ["Visit Vulcanus", "Travel to planet Vulcanus."],
        ["Watch your step", "Get killed by a moving locomotive."],
        ["We need bigger guns", "Kill a medium demolisher."],
        ["Work around the clock", "Finish the game within 100 hours."],
        ["You are doing it right", "Construct more machines using robots than manually."],
        ["You've got a package", "Supply the character by logistic robot."],
    ];

    assert.strictEqual(officialAchievements.length, 87, "sanity check on this test's own reference list");

    const excluded = new Set([
        "so-long-and-thanks-for-all-the-fish",
    ]);

    const dataPairs = game.achievements
        .filter(a => !excluded.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 1 Factorio achievement(s) that ship a blank Steam description keep their real name and a curatorial description", () => {

    const names = [
        ["so-long-and-thanks-for-all-the-fish", "So long and thanks for all the fish"],
    ];

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.trim().length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
