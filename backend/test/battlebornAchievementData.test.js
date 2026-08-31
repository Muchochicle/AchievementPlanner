import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battleborn.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 394230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("battleborn");

test("getPlannerData('battleborn') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for battleborn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Battleborn achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Battleborn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Battleborn achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Booming Business", "Complete The Saboteur on any difficulty."],
        ["A Tyrant Undone", "Defeat Rendain."],
        ["Acres and Eras", "Complete all Miko lore challenges."],
        ["Anarchy Rules", "Complete all Attikus lore challenges."],
        ["Anxious, Angry, and Adorable", "Complete all Toby lore challenges."],
        ["Battleborn", "Play a match or mission after reaching Command Rank 100."],
        ["Behold My Death Lasers and Despair", "Activate a piece of Legendary Gear."],
        ["Berg Rush", "Complete Toby's Friendship Raid with at least 50 Ops Points."],
        ["Brotherhood of the Mikes", "Complete all Oscar Mike lore challenges."],
        ["Champion of the Pits", "Complete all Caldarius lore challenges."],
        ["Civil Ice", "Complete all Kelvin lore challenges."],
        ["Collect All 5!", "Complete all Kid Ultra lore challenges."],
        ["Commander and Collector", "Play at least one match or mission with all 25 Battleborn."],
        ["Decked Out", "Activate three pieces of Epic or better Gear in a single mission or match."],
        ["Desperate Measurements", "Complete The Experiment on any difficulty."],
        ["Divide by Zero Hour", "Complete The Algorithm on any difficulty."],
        ["Dressed for Success", "Complete any challenge that unlocks a Champion skin."],
        ["Duty is Only Skin Deep", "Complete all Beatrix lore challenges."],
        ["Elegance in Engineering", "Complete all Phoebe lore challenges."],
        ["First Among Heroes", "Complete a match or mission and reach rank 15 with a Battleborn."],
        ["Flyboy", "Complete all Benedict lore challenges."],
        ["Gotta Punch 'em All", "Participate in killing each Battleborn at least once."],
        ["Grow Forth and Conquer", "Activate a mutation in a match."],
        ["Hate Furnace at Maximum! :) ", "Complete all ISIC lore challenges."],
        ["It Was A Dark And Stormy Night", "Complete Attikus and the Thrall Rebellion with at least 50 Ops Points."],
        ["It's My Only Name, Chief", "Complete all Montana lore challenges."],
        ["Keeper of the Blades", "Complete all Rath lore challenges."],
        ["Lost Little Eldrid", "Complete all Mellka lore challenges."],
        ["Love and Fire, Death and Kisses", "Complete all Orendi lore challenges."],
        ["Magnum Gun Loud", "Complete Oscar Mike vs. the Battle School with at least 50 Ops points."],
        ["Me 'n' My Monster", "Complete all Shayne & Aurox lore challenges."],
        ["Mister Wolf's Wild Ride", "Complete The Void's Edge on any difficulty."],
        ["Mountains of Madness", "Complete Phoebe and the Heart of Ekkunar with at least 50 Ops points."],
        ["No Rest for the Wicked", "Win 30 Story missions or Versus matches."],
        ["Perfectionist", "Complete a Story mission without losing any Lives."],
        ["Priestess of the Sustaining Mother", "Complete all Ambra lore challenges."],
        ["Remnants of Codex", "Complete The Archive on any difficulty."],
        ["Rise of the Valkyrie", "Complete all Reyna lore challenges."],
        ["Sergeant Demobird", "Complete all Ernest lore challenges."],
        ["Shock the Trooper", "Complete The Renegade on any difficulty."],
        ["Sir Hon. Lord Baron Oscar Mike Jr IV, Esq.", "Collect 25 Titles from completing Challenges."],
        ["Solus Sentinel", "Achieve a Gold rating on any Story mission."],
        ["Solus War Hardcore Hero", "Complete all Story missions on Hardcore."],
        ["Solus War Hero Advanced", "Complete all Story missions on Advanced Difficulty."],
        ["The Bears and the Beers", "Complete all Boldur lore challenges."],
        ["The Blossom's Fury", "Complete all Thorn lore challenges."],
        ["The Bluemother Smiles", "Complete all Alani lore challenges."],
        ["The Captain", "Complete all Ghalt lore challenges."],
        ["The Curmudgeon", "Complete all Kleese lore challenges."],
        ["The Mike Who Lived", "Complete all Whiskey Foxtrot lore challenges."],
        ["The Ol' One-Two", "Get 5 double kills."],
        ["The Once and Future Champ", "Complete all El Dragón lore challenges."],
        ["The Spymistress", "Complete all Deande lore challenges."],
        ["The Wraith of Bliss", "Complete all Galilea lore challenges."],
        ["Titanium Dandy", "Complete all Marquis lore challenges."],
        ["Tooth, Nail, and Minigun", "Complete Montana and the Demon Bear with at least 50 Ops points."],
        ["Tour of Duty", "Win a match on each Versus map."],
        ["Traps and Treasure", "Complete The Sentinel on any difficulty."],
        ["Twice-Made Sneaker", "Complete all Pendles lore challenges."],
        ["When You Roll Up With the Squad Like", "Enter matchmaking with a full team of 5 players."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
