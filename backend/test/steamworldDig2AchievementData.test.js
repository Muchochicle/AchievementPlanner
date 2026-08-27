import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/steamworld-dig-2.json - 34 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 571310 (fetched through this app's own services/steamApi.js) -
// 28 of 34 ship a real, official Steam description. The Guiding Light,
// A Mysterious Garden, A Shining City, The Enlightened, Ghost of the
// Machine, and A New Frontier are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented story-milestone triggers (cross-checked against
// the official SteamWorld Wiki and independent achievement-guide
// sites). difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const steamworldDig2 = getPlannerData("steamworld-dig-2");

test("getPlannerData('steamworld-dig-2') returns real planner data with 34 curated achievements", () => {

    assert.ok(steamworldDig2, "expected real planner data for steamworld-dig-2");
    assert.ok(Array.isArray(steamworldDig2.achievements));
    assert.strictEqual(steamworldDig2.achievements.length, 34);

});

test("every SteamWorld Dig 2 achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = steamworldDig2.achievements.map(a => a.id);
    const apinames = steamworldDig2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every SteamWorld Dig 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of steamworldDig2.achievements) {

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

test("every one of the 28 officially-described SteamWorld Dig 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Speedrunner", "Finish the game with a gold star in the Time category. How fast is that, exactly? It’s up to you to find out!"],
        ["Hardcore", "Finish the game with a gold star in the Deaths category. You can’t even die once, buddy!"],
        ["Gold Farmer", "Finish the game with a gold star in the Wealth category. Get filthy rich!"],
        ["Explorer", "Finish the game with a gold star in the Secrets category."],
        ["The Impossible Dream", "Finish the game with a gold star in every category."],
        ["Barnacle’s BFF", "Sell $10,000 worth of resources."],
        ["It Makes the World Go Round", "Sell $2,500 worth of resources."],
        ["Hobbyist Collector", "Collect 10 artifacts."],
        ["Skilled Collector", "Collect 25 artifacts."],
        ["Master Collector", "Collect 42 artifacts."],
        ["O Brother, Where Art Thou?", "Find all missing Yonker brothers."],
        ["My Very Own Sun", "Upgrade your lamp to the highest level possible."],
        ["Solid Sneak", "Do not trigger the alarm in Vectron more than twice."],
        ["Two Birds, One Stone", "Kill two enemies with one crushing rock."],
        ["Right Back At Ya!", "Kill an enemy with its own projectile."],
        ["Lazy Person", "Travel a distance of 100 tiles horizontally without touching the controls."],
        ["At Least It’s Shiny", "Collect 10 Silver ore resources."],
        ["Is It Even a Pickaxe Anymore?", "Upgrade your pickaxe to the highest level possible."],
        ["Hard Carry", "Upgrade your backpack to the highest level possible."],
        ["That’s Armor-e", "Upgrade your armor to the highest level possible."],
        ["Maximum Potential", "Reach experience level 14."],
        ["Hook, Line and Sinker", "Collect 15 resources with your Hook Shot."],
        ["Cave Diver", "Complete 5 caves."],
        ["Splendiferous Spelunker", "Complete 20 challenge caves."],
        ["Hopeless Gearhead", "Buy all upgrades available at the workbench."],
        ["Friendly Neighborhood Spider-Bot", "Hit 15 flyers with your Hook Shot."],
        ["Sequence Breaker", "Destroy all devices without entering Vectron."],
        ["To Hell and Back", "Survive the Ultimate Trial."]
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "The Guiding Light", "A Mysterious Garden", "A Shining City", "The Enlightened", "Ghost of the Machine", "A New Frontier"
    ]);

    const dataPairs = steamworldDig2.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const totem = steamworldDig2.achievements.find(a => a.apiname === "ach_defeat_totem");
    const yarrow = steamworldDig2.achievements.find(a => a.apiname === "ach_find_yarrow");
    const hub = steamworldDig2.achievements.find(a => a.apiname === "ach_find_hub");
    const priest = steamworldDig2.achievements.find(a => a.apiname === "ach_defeat_priest");
    const vectron = steamworldDig2.achievements.find(a => a.apiname === "ach_escape_vectron");
    const finish = steamworldDig2.achievements.find(a => a.apiname === "ach_finish_game");

    assert.ok(totem && totem.name === "The Guiding Light" && totem.description.length > 0);
    assert.ok(yarrow && yarrow.name === "A Mysterious Garden" && yarrow.description.length > 0);
    assert.ok(hub && hub.name === "A Shining City" && hub.description.length > 0);
    assert.ok(priest && priest.name === "The Enlightened" && priest.description.length > 0);
    assert.ok(vectron && vectron.name === "Ghost of the Machine" && vectron.description.length > 0);
    assert.ok(finish && finish.name === "A New Frontier" && finish.description.length > 0);

});
