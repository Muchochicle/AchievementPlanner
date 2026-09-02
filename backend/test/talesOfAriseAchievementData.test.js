import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tales-of-arise.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 740130 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tales-of-arise");

test("getPlannerData('tales-of-arise') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for tales-of-arise");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Tales of ARISE achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Tales of ARISE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Tales of ARISE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Modest Dream", "Forge a strong bond with Kisara by completing her character sub-quests."],
        ["Always on Her Mind", "Beyond the Dawn DLC: collect all of Nazamil's picture memories."],
        ["An Honest Mage", "Forge a strong bond with Rinwell by completing her character sub-quests."],
        ["Arms Master", "Craft 6 weapon types using ryugola core fragments in the Tales of Arise™ additional story."],
        ["Arms Stockpiler", "Forge 100 types of weapons in the Tales of Arise™ main game story."],
        ["Big Game Hunter", "Slay 20 gigants in the Tales of Arise™ main game story."],
        ["Billowing Cyclone", "Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free."],
        ["Ceaseless Chatterbox", "View 300 skits in the Tales of Arise™ main game story."],
        ["Comrades in Freedom", "Story progress marker - reached at a specific point in the main story, described here spoiler-free."],
        ["Curious Hobbyist", "Obtain 20 types of non-DLC artifacts in the Tales of Arise™ main game story."],
        ["Departure", "Beyond the Dawn DLC story marker - 'Departure', the DLC finale, described here spoiler-free."],
        ["Destined Liberator", "Completed the main story, described here spoiler-free."],
        ["Dilettante", "Obtain your first non-DLC artifact in the Tales of Arise™ main game story."],
        ["Diligent Counterattacker", "Perform 100 Counter Edges in the Tales of Arise™ main game story."],
        ["Drink 'til You Drop", "Forge a strong bond with Dohalim by completing his character sub-quests."],
        ["Elite Vanguard", "Clear Ultimate level of group training ground fights in the Tales of Arise™ main game story."],
        ["Elite Vanguard, Again", "Clear Ultimate level of group training ground fights in the Tales of Arise™ additional story."],
        ["Emissary of Liberation", "Story progress marker - reached at a specific point in the main story, described here spoiler-free."],
        ["Encyclopedia Zeuglica", "Encounter 120 types of non-DLC enemies in the Tales of Arise™ main game story."],
        ["Globetrotting Foodie", "Acquire 30 kinds of non-DLC recipes in the Tales of Arise™ main game story."],
        ["Godly Angler", "Catch every fish type and show the Notes to the Expert in the Tales of Arise™ main game story."],
        ["Hero of the Summit", "Beyond the Dawn DLC: take the leap from the mountain summit."],
        ["High Roller", "Spend 400000 gald in the Tales of Arise™ main game story."],
        ["Hundred-Hit Smackdown", "Get over 100 hits in a combo in the Tales of Arise™ main game story."],
        ["Individual Growth", "Clear 12 character sub-quests in the Tales of Arise™ additional story."],
        ["Intertwining Hearts", "Forge a strong bond with Shionne by completing her character sub-quests."],
        ["Invasion Averted", "Story progress marker - reached late in the main story, described here spoiler-free."],
        ["Jeweler", "Craft 30 accessories in the Tales of Arise™ main game story."],
        ["Liberator of Dahna", "Story progress marker - reached at a specific point in the main story, described here spoiler-free."],
        ["Myriad Monikers", "Learn 400 non-DLC title skills in the Tales of Arise™ main game story."],
        ["Night Blossom", "Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free."],
        ["Novice Rancher", "Collect your first harvest on the ranch in the Tales of Arise™ main game story."],
        ["One-Hit Wonder", "Deal 10000 or more damage in one hit in the Tales of Arise™ main game story."],
        ["Otherworldly Survivor", "Clear the post-game bonus dungeon."],
        ["Owl Homecoming", "Find and report all of the hidden owls."],
        ["Owl Scouter", "Find and report 32 owls. The forest is now starting to teem with hordes of hooting owls galore."],
        ["Owl Spotter", "Find and report 13 owls. The lonely forest is beginning to show signs of feathered life."],
        ["Peak Strength", "Reach level 100 in the Tales of Arise™ main game story."],
        ["Problem Solver", "Clear 70 sub-quests in the Tales of Arise™ main game story."],
        ["Putting the Past in its Place", "Clear the post-game Battle Rush boss gauntlet."],
        ["Quaking Continent", "Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free."],
        ["Raging Current", "Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free."],
        ["Rebellious Spark", "Clear your first sub-quest in the Tales of Arise™ main game story."],
        ["Resolution", "Beyond the Dawn DLC story marker - 'Resolution', described here spoiler-free."],
        ["Retired Avenger", "Story progress marker - reached at a specific point in the main story, described here spoiler-free."],
        ["Role Model", "Forge a strong bond with Law by completing his character sub-quests."],
        ["Skilled Angler", "Catch your first fish in the Tales of Arise™ main game story."],
        ["Speedy Chef", "Cook your first meal in the Tales of Arise™ main game story."],
        ["The First Seal", "Beyond the Dawn DLC story marker - 'The First Seal', described here spoiler-free."],
        ["The Second Seal", "Beyond the Dawn DLC story marker - 'The Second Seal', described here spoiler-free."],
        ["The Truth", "Story progress marker - reached near the end of the main story, described here spoiler-free."],
        ["True Freedom", "Beyond the Dawn DLC story marker - 'True Freedom', described here spoiler-free."],
        ["Unparalleled Problem Solver", "Clear 40 sub-quests in the Tales of Arise™ additional story."],
        ["Unrelenting Blaze", "Defeat the Lord of a Renan realm - a main-story boss, described here spoiler-free."],
        ["Vanquishers of Darkness", "Story progress marker - reached at a specific point in the main story, described here spoiler-free."],
        ["Veteran Rancher", "Collect 50 harvests on the ranch in the Tales of Arise™ main game story."],
        ["Wall Smasher", "Clear every sub-quest in the base game."],
        ["What's in a Name?", "Learn your first non-DLC title skill in the Tales of Arise™ main game story."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
