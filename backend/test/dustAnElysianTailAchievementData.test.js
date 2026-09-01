import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dust-an-elysian-tail.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 236090 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dust-an-elysian-tail");

test("getPlannerData('dust-an-elysian-tail') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for dust-an-elysian-tail");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Dust: An Elysian Tail achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Dust: An Elysian Tail achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Dust: An Elysian Tail achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...And the Dust Settles", "Defeat General Gaius"],
        ["A Decent Start...", "Successfully complete a 200+ hit combo"],
        ["Above and Beyond the Call", "Complete the Game on Tough or Hardcore setting"],
        ["An Impressive Display", "Earn a Four-Star Rating in any Challenge Arena"],
        ["Bad Therapist", "Bug Matti"],
        ["Baker's Dozen", "Hang out with Twelve Friends in the Sanctuary"],
        ["Blue Bomber", "Simultaneously Kill 6 Enemies with a Single Bomb"],
        ["Bringer of Death", "Kill 500 Enemies"],
        ["Cutting It Close", "Successfully Parry with less than 10% health remaining"],
        ["Defused", "Defeat Fuse"],
        ["Distant Thunder", "Use the DUST STORM on Fidget's Projectiles"],
        ["Friend of Falana", "Complete 5 Sidequests"],
        ["Hero of Falana", "Complete 10 Sidequests"],
        ["High Spirits", "Defeat Baron Kane"],
        ["One Last Wish", "Fulfill Bopo’s wish for snow"],
        ["Opposite of Fail", "Complete all Fale Quests"],
        ["Paragon", "Opt out of putting poison ivy into Gianni's laundry"],
        ["Push and Turn", "Unlock a Treasure Chest"],
        ["Renegade", "Reign chaos by putting poison ivy into Gianni's laundry"],
        ["Sad Way to Go", "Kill an enemy with the slide attack"],
        ["Savior of Falana", "Complete 20 Sidequests"],
        ["Silence Those Guns", "Destroy every enemy Cannon"],
        ["That's More Like It", "Successfully complete a 1000+ hit combo"],
        ["The Blacksmith of Archers' Pass", "Meet Haley"],
        ["The Stuff of Legends", "Earn a Four-Star Rating in EVERY Challenge Arena"],
        ["Tinkerer", "Craft an item from a blueprint"],
        ["Wait, aren't you...?", "Unlock a Cage and Rescue a Friend"],
        ["Waters of Life", "Defeat Lady Tethys"],
        ["Well on your Way", "Pick Up an Ability Orb"],
        ["With Great Power...", "Level Up by Assigning Skill Gems"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
