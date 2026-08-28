import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monster-hunter-world.json - 100 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 582010 (fetched through this app's own services/steamApi.js).
// 65 of 100 ship a real, official Steam description; the
// 35 hidden achievements ship no Steam description and
// their conditions are curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const monsterHunterWorld = getPlannerData("monster-hunter-world");

test("getPlannerData('monster-hunter-world') returns real planner data with 100 curated achievements", () => {

    assert.ok(monsterHunterWorld, "expected real planner data for monster-hunter-world");
    assert.ok(Array.isArray(monsterHunterWorld.achievements));
    assert.strictEqual(monsterHunterWorld.achievements.length, 100);

});

test("every Monster Hunter: World achievement has a unique id from 1 to 100 and a unique apiname", () => {

    const ids = monsterHunterWorld.achievements.map(a => a.id);
    const apinames = monsterHunterWorld.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 100);
    assert.strictEqual(new Set(apinames).size, 100);

});

test("every Monster Hunter: World achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of monsterHunterWorld.achievements) {

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

test("every one of the 65 officially-described Monster Hunter: World achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 35 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Conqueror of the New World", "Unlock all achievements for Monster Hunter: World."],
        ["The Hunters Life for Me", "Complete 50 optional quests."],
        ["An Inquisitive Mind", "Complete your first investigation."],
        ["The Franchise Hunter", "Complete 50 investigations."],
        ["Step into the Arena", "Complete your first arena quest."],
        ["Nowhere to Go but Up", "Complete 50 arena quests."],
        ["New World Settler", "Establish five camps."],
        ["The Art of Camouflage", "Escape the Jagras pack by hiding in some shrubs."],
        ["Angling for a Bite", "Catch your first fish."],
        ["Mmm, So Tasty!", "Cook your first well-done steak."],
        ["The Bigger They Are...", "Mount your first monster."],
        ["Commissioned Work", "Obtain 100,000 research points."],
        ["Bourgeois Hunter", "Possess 1,000,000 zenny."],
        ["Impregnable Defense", "Obtain five highly rare pieces of armor."],
        ["Power is Everything", "Obtain five highly rare weapons."],
        ["Movin On Up", "Move into an upgraded room."],
        ["First Friends", "Befriend your first Tailraider."],
        ["Bosom Buddies", "Raise the proficiency of any Palico Gadget to level 10."],
        ["Monster Ph.D.", "Max out the research level (up to high rank) for many monsters."],
        ["Miniature Crown", "Record your first miniature crown for monsters that appear from low or high rank."],
        ["Miniature Crown Collector", "Obtain a miniature crown for 10 or more monsters that appear from low or high rank."],
        ["Miniature Crown Master", "Obtain a miniature crown for many monsters in your hunting log."],
        ["Giant Crown", "Record your first silver crown or higher for monsters that appear from low or high rank."],
        ["Giant Crown Collector", "Obtain a gold crown for 10 or more monsters that appear from low or high rank."],
        ["Giant Crown Master", "Obtain a gold crown for many monsters in your hunting log."],
        ["Capture Novice", "Capture your first monster."],
        ["Capture Pro", "Capture 50 monsters."],
        ["Elderslayer", "Slay 50 elder dragons."],
        ["Monster Slayer", "Hunt 100 large monsters."],
        ["Monster Hunter", "Hunt 500 large monsters."],
        ["HELP!", "Fire an SOS flare for the first time."],
        ["I Am the Reinforcements", "Respond to an SOS flare, and help complete 10 quests."],
        ["Hunters United", "Complete a quest via multiplayer."],
        ["Hunters United Forever", "Complete 100 quests via multiplayer."],
        ["Spreading the Word", "Collect over 50 Guild Cards."],
        ["Established Hunter", "Reach hunter rank 100."],
        ["Conqueror of the Hinterlands", "Unlock all achievements for Monster Hunter World: Iceborne."],
        ["Master Explorer", "Establish all camps in the Hoarfrost Reach."],
        ["Source of Relaxation", "Spend some time in a natural hot spring."],
        ["Clutch Claw Neophyte", "Study the ways of the clutch claw."],
        ["Unwavering Defense", "Obtain five extremely rare pieces of armor."],
        ["Devastating Offense", "Obtain five extremely rare weapons."],
        ["First Ride", "Use your first Raider Ride."],
        ["Experienced Rider", "Use Raider Ride many times."],
        ["Fledgling Collector", "Find your first treasure."],
        ["Veteran Collector", "Find all treasure within a single locale."],
        ["Ultimate Collector", "Find all treasure."],
        ["Remodeler", "Change your room's interior for the first time."],
        ["Interior Decorator", "Have 50 different types of room decor to choose from."],
        ["Architectural Artist", "Have 120 different types of room decor to choose from."],
        ["Eager Engineer", "Help the Steamworks 20 times."],
        ["Skilled Steamworker", "Send the Steamworks into overdrive."],
        ["Another Miniature Crown", "Obtain your first miniature crown for capturing endemic life in master rank."],
        ["Another Giant Crown", "Obtain your first gold crown for capturing endemic life in master rank."],
        ["Fledgling Observer", "Complete your first request for the Lynian Researcher."],
        ["Outstanding Observer", "Complete many requests for the Lynian Researcher."],
        ["Helpful Hunter", "Aid a low rank or high rank hunter on 10 quests as a master rank hunter."],
        ["Master of Masters", "Reach master rank 200."],
        ["Monster Master", "Maximize the research level for almost all large monsters."],
        ["True Miniature Crown Collector", "Obtain a miniature crown for almost every monster in your hunting log."],
        ["True Large Crown Collector", "Obtain a gold crown for almost every monster in your hunting log."],
        ["The True Hunt Begins", "Hunt your first large monster in a master rank quest."],
        ["Hunter Prodigy", "Hunt 100 large monsters in master rank quests."],
        ["Master Capturer", "Capture 50 large monsters in master rank quests."],
        ["Master Slayer", "Slay 50 elder dragons in master rank quests."],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Achievement1",
        "Achievement2",
        "Achievement3",
        "Achievement4",
        "Achievement5",
        "Achievement6",
        "Achievement7",
        "Achievement8",
        "Achievement19",
        "Achievement20",
        "Achievement21",
        "Achievement22",
        "Achievement31",
        "Achievement32",
        "Achievement51",
        "Achievement52",
        "Achievement53",
        "Achievement54",
        "Achievement55",
        "Achievement56",
        "Achievement57",
        "Achievement58",
        "Achievement59",
        "Achievement60",
        "Achievement61",
        "Achievement65",
        "Achievement66",
        "Achievement67",
        "Achievement68",
        "Achievement69",
        "Achievement70",
        "Achievement71",
        "Achievement74",
        "Achievement98",
        "Achievement99",
    ]);

    assert.strictEqual(hiddenApinames.size, 35, "sanity check - Monster Hunter: World has 35 hidden achievements");

    const dataPairs = monsterHunterWorld.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 35 hidden Monster Hunter: World achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement1", "Welcome to the New World"],
        ["Achievement2", "Nothing Stops This Commission"],
        ["Achievement3", "Defender of Astera"],
        ["Achievement4", "Into the Deep"],
        ["Achievement5", "Death Begets Life"],
        ["Achievement6", "The Empress of the Highlands"],
        ["Achievement7", "One Shall Stand, One Shall Fall"],
        ["Achievement8", "The Sapphire Star"],
        ["Achievement19", "A Living Fossil"],
        ["Achievement20", "Snuggles for All"],
        ["Achievement21", "Bristles for All"],
        ["Achievement22", "Rainbow Bright"],
        ["Achievement31", "Temper Temper"],
        ["Achievement32", "Indomitable"],
        ["Achievement51", "The Beginning of a New Expedition"],
        ["Achievement52", "Time to Get Serious"],
        ["Achievement53", "The Elusive Elder Dragon"],
        ["Achievement54", "Indomitable Spirit"],
        ["Achievement55", "The Old Everwyrm"],
        ["Achievement56", "An End and a Beginning"],
        ["Achievement57", "To the Land of Discoveries"],
        ["Achievement58", "Evolving Ecology"],
        ["Achievement59", "In Search of Rare Materials"],
        ["Achievement60", "Insatiable Investigator"],
        ["Achievement61", "Fate's Conclusion"],
        ["Achievement65", "Golden Gleam"],
        ["Achievement66", "Friendly Pointer"],
        ["Achievement67", "Sweet Melody"],
        ["Achievement68", "Submerged Mystery"],
        ["Achievement69", "Celestial Illusion"],
        ["Achievement70", "Deft Digger"],
        ["Achievement71", "Creatures of the Earth"],
        ["Achievement74", "Personal Treasure"],
        ["Achievement98", "Confronting the Unknown"],
        ["Achievement99", "Seen It All"],
    ];

    assert.strictEqual(names.length, 35, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = monsterHunterWorld.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
