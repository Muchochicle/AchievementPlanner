import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pillars-of-eternity.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 291650 (fetched through this app's own services/steamApi.js).
// None are hidden. Every achievement's description is Steam's own real text, quoted verbatim.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("pillars-of-eternity");

test("getPlannerData('pillars-of-eternity') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for pillars-of-eternity");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Pillars of Eternity achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Pillars of Eternity achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Pillars of Eternity achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["5 Upgrades in Stronghold", "Complete at least 5 upgrades in the stronghold."],
        ["A Voice from the Deep", "Reach the reliquary in the Abbey of the Fallen Moon."],
        ["Alchemist", "Create 3 or more different potions."],
        ["All Upgrades in Stronghold", "Complete all of the upgrades in the stronghold."],
        ["Among the Moss and Peat", "Defeat the menace of Mowrghek Îen."],
        ["Appease All of the Gods", "Complete all of the god appeasement quests."],
        ["Bounty Hunter", "Complete at least four bounties offered at the Warden's Lodge or Stalwart."],
        ["Called to their Labor", "Stop the threat you saw in your dreams."],
        ["Chef", "Create 5 or more different food items."],
        ["Completed Act I", "You have completed Act I."],
        ["Completed Act II", "You have completed Act II."],
        ["Completed Act III", "You have completed Act III."],
        ["Disposition", "Attain rank 3 in at least three Dispositions."],
        ["Enchanter", "Apply 5 or more different enchantments."],
        ["Expert", "Complete the game on Expert mode."],
        ["Explorer", "Visit every map (excluding those in The White March)."],
        ["First 5 Levels of Od Nua", "Complete the first 5 levels of the Endless Paths of Od Nua."],
        ["Fish Guts and Murder", "Recruit Zahua and the Devil of Caroc as companions."],
        ["From the Clouds to the Depths", "Kill the sky dragon and adra dragon."],
        ["Frozen Crown", "Complete the White March and Pillars of Eternity on Expert, Trial of Iron, and Path of the Damned modes."],
        ["Frozen Crown Solo", "Complete the White March and Pillars of Eternity on Expert, Trial of Iron, and Path of the Damned modes without taking any companions after Cilant Lîs."],
        ["Herald of the Old Flame", "Restart the fabled White Forge."],
        ["Kickstarter Backer", "Thanks for all of your support!"],
        ["Last 5 Levels of Od Nua", "Complete the last 5 levels of the Endless Paths of Od Nua."],
        ["Legendary Enchanter", "Place the Legendary enchantment on one weapon or shield and one armor."],
        ["Make an Adventurer", "Create and hire an adventurer from the Adventurer's Hall."],
        ["Middle 5 Levels of Od Nua", "Complete the middle 5 levels of the Endless Paths of Od Nua."],
        ["No Rest for the Pro", "Complete the game with fewer than 10 rests."],
        ["Path of the Damned", "Complete the game on Path of the Damned mode."],
        ["Relative Pacifism", "Complete the game killing fewer than 175 creatures and NPCs."],
        ["Scribe", "Create 3 or more different scrolls."],
        ["Solo", "Complete the game without taking any companions after Cilant Lis."],
        ["Soulbinder", "Unlock all the powers of a soulbound weapon."],
        ["Super Murderer", "Complete the game killing 1200 or more creatures and NPCs."],
        ["Terror of the White March", "Defeat the dragon that dwells in the White March."],
        ["The Giftbearer", "Recruit Maneha as a companion."],
        ["The Heir of Caed Nua", "Defend your position as the master of Caed Nua."],
        ["The Siege of Crägholdt", "Complete the Siege of Crägholdt quest."],
        ["The Storied Adventurer", "Complete a Minor, Average, Major, Grand, and Legendary stronghold adventure."],
        ["The Ultimate", "Complete the White March and Pillars of Eternity, defeat all dragons, all bounties, and both archmages on Expert, Trial of Iron, and Path of the Damned modes without taking any companions after Cilant Lîs."],
        ["The Watcher With Eight Friends", "Recruit all companions (excluding those in The White March)."],
        ["Trappy", "Place 5 or more trap items."],
        ["Trial of Iron", "Complete the game on Trial of Iron mode."],
        ["Triple Crown", "Complete the game on Expert, Trial of Iron, and Path of the Damned modes."],
        ["Triple Crown SOLO", "Complete the game on Expert, Trial of Iron, and Path of the Damned modes without taking any companions after Cilant Lis."],
        ["Watcher at the Breach", "Open the sealed doors of Durgan's Battery."],
        ["Won the Game!!!", "Congratulations! You have completed the game."],
        ["Zero Knockouts", "Complete the game without any party members hitting 0 Endurance."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
