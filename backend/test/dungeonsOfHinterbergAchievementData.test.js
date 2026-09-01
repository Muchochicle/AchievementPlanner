import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dungeons-of-hinterberg.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1983260 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dungeons-of-hinterberg");

test("getPlannerData('dungeons-of-hinterberg') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for dungeons-of-hinterberg");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Dungeons of Hinterberg achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Dungeons of Hinterberg achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Dungeons of Hinterberg achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All That Glitters", "Have 1,000,000 Hinterbucks."],
        ["Altruist", "Save Hannah's Shop."],
        ["Animal Lover", "Feed a cow."],
        ["Beginner Slayer", "Complete 5 dungeons."],
        ["Buddies", "Become \"Buddies\" with someone."],
        ["Charmed", "Completely fill your charm stack, with no gaps or empty spaces."],
        ["Collector", "Find all Commemorative Coins."],
        ["Completionist", "Complete every dungeon."],
        ["Conduit Collector", "Use 12 different Attack Conduits."],
        ["Dance of Death", "Unlock the Combo Counter."],
        ["Dazzling!", "Find 20 Commemorative Coins."],
        ["Detective", "Uncover Mayor Wagner's plan."],
        ["Double Trouble", "Complete 2 dungeons."],
        ["Dressed like a Pro", "Equip all Pro Slayer armor parts."],
        ["Efficiency", "Shrink a Charm down to one slot."],
        ["Enchanting", "Enchant three swords."],
        ["Environmentalist", "Sell 300 pieces of trash."],
        ["Fashionista", "Own 5 Outfits."],
        ["Friendly Overtures", "Reach \"Friends\" level with three people."],
        ["Furry Friend", "Get acquainted with a dog."],
        ["Generous Spirit", "Give someone a gift they really like."],
        ["Grove Trove", "Open all locked chests in Hinterwald."],
        ["Heart to Heart", "Complete a relationship with one person."],
        ["Hinterberg Hero", "Stop Mayor Wagner."],
        ["Honorary Monster", "Complete the Monster Club quest."],
        ["Intermediate Slayer", "Complete 10 dungeons."],
        ["Introvert", "Spend 3 evenings alone."],
        ["Just Chilling", "Spend the afternoon at three different Scenic Spots."],
        ["Night Owl", "Stay up late three times."],
        ["Relaxpert", "Reach 200 Relaxation."],
        ["Renowned Slayer", "Complete 20 dungeons."],
        ["Running on Fumes", "Finish a dungeon while tired."],
        ["Shimmery!", "Find 10 Commemorative Coins."],
        ["Shiny!", "Find a Commemorative Coin."],
        ["Slayer", "Slay 100 monsters."],
        ["Social Butterfly", "Meet everyone listed in Alex's notes."],
        ["Socialite", "Spend an evening at the Grand Hotel."],
        ["Something Rotten", "Complete the game's secret dungeon."],
        ["Sparkly!", "Find 5 Commemorative Coins."],
        ["Still Shaking", "Complete the Beginner Dungeon."],
        ["Style Icon", "Own 10 Outfits."],
        ["Super Strength", "Reach 300 Physical Attack."],
        ["Top Model", "Take a selfie in an Outfit."],
        ["Tough and Buff", "Upgrade one piece of every kind of armor."],
        ["Town Survivor", "Make it through the Monster Rampage."],
        ["Unlocking Potential", "Unlock the third Attack Conduit slot."],
        ["Utility Belt", "Equip 15 Charms at once."],
        ["Virtuoso", "Use 7 different Attack Conduits."],
        ["Water you looking for?", "In the Doberkogel/Lake area, walk through the waterfall directly behind the Jelly Tunnels dungeon entrance to find a locked chest - you don't need to open it, just find it."],
        ["We Are Amused", "Reach 200 Amusement."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
