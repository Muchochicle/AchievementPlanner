import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/doom-eternal.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 782330 (fetched through this app's own services/steamApi.js).
// 34 of 50 ship a real, official Steam description, quoted
// verbatim below. The 16 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// PowerPyx / XboxAchievements and the DOOM/RE wikis, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("doom-eternal");

test("getPlannerData('doom-eternal') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for doom-eternal");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every DOOM Eternal achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every DOOM Eternal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 officially-described DOOM Eternal achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "NEW_ACHIEVEMENT_1_0",
        "NEW_ACHIEVEMENT_1_1",
        "NEW_ACHIEVEMENT_1_2",
        "NEW_ACHIEVEMENT_1_3",
        "NEW_ACHIEVEMENT_1_4",
        "NEW_ACHIEVEMENT_1_5",
        "NEW_ACHIEVEMENT_1_6",
        "NEW_ACHIEVEMENT_1_8",
        "NEW_ACHIEVEMENT_1_24",
        "NEW_ACHIEVEMENT_2_1",
        "NEW_ACHIEVEMENT_2_2",
        "NEW_ACHIEVEMENT_2_3",
        "NEW_ACHIEVEMENT_2_8",
        "NEW_ACHIEVEMENT_2_9",
        "NEW_ACHIEVEMENT_2_10",
        "NEW_ACHIEVEMENT_2_12",
    ]);

    assert.strictEqual(hiddenApinames.size, 16, "sanity check - DOOM Eternal has 16 hidden achievements");

    const officialAchievements = [
        ["1-Upsmanship", "Complete Extra Life Mode with 5 Extra Lives in your Inventory (Ancient Gods 1)"],
        ["Blood Bath", "Kill 200 opponents in BATTLEMODE"],
        ["Bonus Stage", "Complete a Slayer Gate"],
        ["Breaker of Gates", "Complete all Slayer Gates in a single save slot"],
        ["Critical Literature", "Collect all physical Codex pages in a single save slot (Ancient Gods 2)"],
        ["Crystal Craving", "Upgrade Health, Armor, or Ammo"],
        ["Darn It, They Keep BREAKING", "Perform 33 Unique Glory Kills in a single save slot"],
        ["Extra Extra Lives", "Pick up 20 Extra Lives Total in a single save slot"],
        ["Fight Like Hell", "Do 5000 damage as a Player Demon in BATTLEMODE"],
        ["Game Over", "Beat Horde Mode"],
        ["Gunpletionist", "Master all Weapon Mods in a single save slot"],
        ["Homemaykr", "Spend 8 Sentinel Batteries in the Fortress of Doom in a single save slot"],
        ["Hypersonic", "Complete all Secret Encounters in a single save slot (Ancient Gods 1)"],
        ["If Only I Could Read…", "Collect all physical Codex pages in a single save slot"],
        ["It's a Magic Number", "Kill 666 Demons (excluding Player Demons and Wolves)"],
        ["King of the Crystals", "Fully upgrade Health, Armor, or Ammo in a single save slot"],
        ["Let's Play", "Complete the first Horde Mode Mission"],
        ["Live Die Reload", "Complete Extra Life Mode with 5 Extra Lives in your Inventory (Ancient Gods 2)"],
        ["Lucky Charm Bracelet", "Acquire all Support Runes in a single save slot (Ancient Gods 1)"],
        ["Man vs Monsters", "Play 25 BATTLEMODE matches"],
        ["Master of Fasting", "Complete a Mission with only the Famine Mode cheat on"],
        ["Metal Head", "Complete the album collection in a single save slot"],
        ["Mix and Match", "Play as 5 different Player Demons in BATTLEMODE"],
        ["Playset Sold Separately", "Complete the toy collection in a single save slot"],
        ["Reforged the Genie Lamp", "Complete the cheat code collection in a single save slot"],
        ["Reinvent the Weapon Wheel", "Re-collect all of the weapons on the Weapon Wheel"],
        ["Required Reading", "Collect all physical Codex pages in a single save slot (Ancient Gods 1)"],
        ["Running Up the High Score", "Complete Extra Life Mode with 10 Extra Lives in your Inventory"],
        ["The Once and Future Slayer", "Complete the Campaign on any difficulty"],
        ["They're ALL My Favorite", "Purchase all Praetor Suit Perks in a single save slot"],
        ["This One's my Favorite", "Complete a Praetor Suit Perk category in a single save slot"],
        ["Tougher Than Nails", "Acquire all Sentinel Hammer upgrades (Ancient Gods 2)"],
        ["Truce between Demons", "Heal yourself or your teammate for 50000 health in BATTLEMODE"],
        ["Weapons Expert", "Kill a Player Demon with each of the 8 Slayer weapons in BATTLEMODE"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 16 hidden DOOM Eternal achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["NEW_ACHIEVEMENT_1_0", "Doomsday"],
        ["NEW_ACHIEVEMENT_1_1", "The Hunters Became the Hunted"],
        ["NEW_ACHIEVEMENT_1_2", "Interplanetary Fracking"],
        ["NEW_ACHIEVEMENT_1_3", "Thumbs Down"],
        ["NEW_ACHIEVEMENT_1_4", "Reforged and Refueled"],
        ["NEW_ACHIEVEMENT_1_5", "Nontraditionalist"],
        ["NEW_ACHIEVEMENT_1_6", "Iconoclast"],
        ["NEW_ACHIEVEMENT_1_8", "Treasure Hunter"],
        ["NEW_ACHIEVEMENT_1_24", "Meet Your Unmaykr"],
        ["NEW_ACHIEVEMENT_2_1", "Torrential Pain"],
        ["NEW_ACHIEVEMENT_2_2", "To Take a Life Sphere"],
        ["NEW_ACHIEVEMENT_2_3", "Regime Change"],
        ["NEW_ACHIEVEMENT_2_8", "Crystal Spelunker"],
        ["NEW_ACHIEVEMENT_2_9", "Cross the Threshold"],
        ["NEW_ACHIEVEMENT_2_10", "Siege the Day"],
        ["NEW_ACHIEVEMENT_2_12", "Rest Your Weary Fists"],
    ];

    assert.strictEqual(names.length, 16, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
