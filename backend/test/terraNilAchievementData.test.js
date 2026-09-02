import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/terra-nil.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1593030 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("terra-nil");

test("getPlannerData('terra-nil') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for terra-nil");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Terra Nil achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Terra Nil achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Terra Nil achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abundant Life", "In the tropical region, fully restore all biomes and climate conditions and have 3 gold photos per mission"],
        ["Aerial View", "Use screenshot mode to take a full map screenshot"],
        ["Antarctic Oasis", "Restore the Volcanic Glacier while still having at least 15 lava tiles"],
        ["Beneath the Snow", "In the polar region, fully restore all biomes and climate conditions and have 3 gold photos per mission"],
        ["Better than 4k", "Take a photo worth 5000 or more"],
        ["Call of the Void", "Use a rock hopper to fire a rock over the canyon"],
        ["Caught in the Act", "Take a photo of an animal mid-animation (for example, a lion stretching)."],
        ["Coral Renewal", "Restore the Desolate Island"],
        ["Everything the Light Touches", "Vistas update: fully restore all Arid biomes and climate conditions with 3 gold photos per mission."],
        ["Fauna Utopia", "Complete a mission with all the animal groups ideally satisfied"],
        ["Feeling Frosty", "Restore the Volcanic Glacier"],
        ["Final Countdown", "Restore the Flooded City"],
        ["Flooded Isles", "Restore the Archipelago map (unlocked after the main campaign)."],
        ["Global Rejuvenation", "Completely restore the planet"],
        ["Goldilocks", "Have 3 different groups of bears that are fully satisfied in the River Valley"],
        ["Grand Canyon", "Vistas update: restore the Arid Canyon map."],
        ["Great Migration", "Create a bird migration between sanctuaries that is more than 60 tiles long"],
        ["Green Energy", "Vistas update: restore the Arid Swamp map."],
        ["Greenleaf Vale", "Restore the Hill and Dale"],
        ["I Would Drive 500 Tiles", "Drive 500 tiles with ERW1N"],
        ["Marine Haven", "Restore the tropical archipelago with at least 40% of the map being underwater"],
        ["Minecraft Rocks!", "Push a lava flow into the sea, then lower the temperature until it snows so the lava cools into stone."],
        ["Nature Finds a Way", "Restore the Tropical Caldera map."],
        ["Northern Glaciation", "Restore the Polluted Fjord map (unlocked after the main campaign)."],
        ["Okavango Delta", "Vistas update: restore the Arid Delta map."],
        ["Open-cast Reclamation", "Restore the Abandoned Quarry map (unlocked after the main campaign)."],
        ["Oryx and Crake", "In the continental region, fully restore all biomes and climate conditions and have 3 gold photos per mission"],
        ["Perfect Location", "Construct an Animal Observatory at the intersection of 4 different tier 2 biomes"],
        ["Perfectly Pleasant", "In the temperate region, fully restore all biomes and climate conditions and have 3 gold photos per mission"],
        ["Reduce Reuse Recycle", "Restore the Continental Outskirts"],
        ["Riverside Restoration", "Restore the temperate Bay map."],
        ["Rock and Stone", "Restore the Subpolar River map."],
        ["Screensaver", "Appreciate the beauty of nature for at least 60 seconds"],
        ["Urban Renewal", "Restore the Irradiated Sprawl map (unlocked after the main campaign)."],
        ["Valley of the Wind", "Restore the River Valley"],
        ["Wildfire", "Burn down 25 buildings with a single fire"],
        ["Wildlife Safari", "Take a photo of ERW1N and at least 3 different animal species"],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
