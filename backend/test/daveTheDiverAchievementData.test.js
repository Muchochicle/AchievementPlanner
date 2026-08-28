import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dave-the-diver.json - 43 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1868140 (fetched through this app's own services/steamApi.js) -
// 39 of 43 ship a real, official Steam description. The four hidden
// achievements (Ration Eater, Dev Killer, Creature Hunter, God of
// Lightning) are described publicly nowhere; their descriptions here are
// curatorial summaries of their real unlock conditions, cross-checked
// against a Steam Community 100% guide and the DAVE THE DIVER wiki.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const daveTheDiver = getPlannerData("dave-the-diver");

test("getPlannerData('dave-the-diver') returns real planner data with 43 curated achievements", () => {

    assert.ok(daveTheDiver, "expected real planner data for dave-the-diver");
    assert.ok(Array.isArray(daveTheDiver.achievements));
    assert.strictEqual(daveTheDiver.achievements.length, 43);

});

test("every DAVE THE DIVER achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = daveTheDiver.achievements.map(a => a.id);
    const apinames = daveTheDiver.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every DAVE THE DIVER achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of daveTheDiver.achievements) {

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

test("every one of the 39 officially-described DAVE THE DIVER achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 4 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Bancho Sushi is Back!", "Fixed the Sushi Restaurant."],
        ["Undersea Gunslinger", "Completed the gun tutorial."],
        ["New Undersea Friend", "Completed the Dolphin's request."],
        ["Better Equipment", "Made first equipment upgrade."],
        ["Undersea Civilization!", "Discovered the under-sea village."],
        ["Deep-sea Diver", "Entered the Deep Sea for the first time."],
        ["Culinary Researcher", "Researched 5 new dishes at Bancho Sushi."],
        ["Culinary Master", "Enhanced 5 dishes at Bancho Sushi."],
        ["Shop's Lookin' Good!", "Bought First Interior Item."],
        ["Influencer", "Reached Bronze Level in Cooksta."],
        ["Scrap Metal Collector", "Picked up 100 items at the Blue Hole."],
        ["Angry Shark!", "Caught first shark."],
        ["Dave the Sniper", "Caught 10 fish with a Sniper Rifle."],
        ["Mister Melee", "Caught 20 fish with melee weapons."],
        ["Saved Dave!", "First time bringing Dave back from the brink of death."],
        ["A Dark and Cold Place", "Discovered the Glacial Passage."],
        ["Momo's Secret", "Got to know Momo a little better."],
        ["Achoo!", "Entered the Glacial Area for the first time."],
        ["A Peaceful Blue Hole", "Watched the ending credits."],
        ["Dumplings in the Water", "Mima's restaurant opened."],
        ["The Seaweed is Growing!", "Gumo's seaweed farm opened."],
        ["Feeble Blacksmith", "Duwa's workshop opened."],
        ["Weapon Collector", "Collected all the blueprints."],
        ["Arms Craftsman", "Enhanced gun 3 times."],
        ["Sea People Historian", "Captured all of the Sea People murals."],
        ["Predator of the Blue Hole", "Caught 300 fish at the Blue Hole."],
        ["Catman", "Fed cat 20 times."],
        ["Blacksmith Helper", "Sold 200 items at workshop."],
        ["Professional Farmer", "Installed sprinklers in the garden."],
        ["GYAO! Master", "Raised 5 GYAO!s."],
        ["Photographer", "Took 10 photos at Photo Spots in the Blue Hole."],
        ["Strange Fish", "Captured 5 FishMon."],
        ["My Wonderful Rice Field!", "Rice field expanded to maximum."],
        ["My Wonderful Field!", "Vegetable farm expanded to maximum."],
        ["A Bancho Sushi Regular", "Achieved Platinum rank in Cooksta."],
        ["Leadership", "Trained an employee to level 20."],
        ["Cooksta Influencer", "Achieved Diamond rank in Cooksta."],
        ["Artisan's Flame", "Researched 30 new dishes at Bancho Sushi."],
        ["Manager", "Bancho Sushi formed a branch restaurant."]
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Achievement_14130029",
        "Achievement_14130037",
        "Achievement_14130038",
        "Achievement_14130041"
    ]);

    assert.strictEqual(hiddenApinames.size, 4, "sanity check - DAVE THE DIVER has 4 hidden achievements");

    const dataPairs = daveTheDiver.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the four hidden DAVE THE DIVER achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement_14130029", "Ration Eater"],
        ["Achievement_14130037", "Dev Killer"],
        ["Achievement_14130038", "Creature Hunter"],
        ["Achievement_14130041", "God of Lightning"]
    ];

    assert.strictEqual(names.length, 4, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = daveTheDiver.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
