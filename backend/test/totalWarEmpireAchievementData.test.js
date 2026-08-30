import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-empire.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 10500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-empire");

test("getPlannerData('total-war-empire') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-empire");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Total War: EMPIRE achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Total War: EMPIRE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Total War: EMPIRE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Rome", "Demonstrate outstanding ability, and capture one hundred regions."],
        ["Accomplished Strategist", "Complete the main campaign game on the easy difficulty setting."],
        ["Affairs of Honour", "Use your duellists to kill twenty men on the \"field of honour\""],
        ["American Hero", "Complete the Road to Independence campaigns freeing the American colonists from British rule!"],
        ["Assassin!", "Use your assassins to kill, in unlooked-for fashion, twenty men who hinder your plans."],
        ["Blooded", "Demonstrate your sense of duty and honour: complete ten multi-player battles."],
        ["Bloody Madman", "Carve a bloody path to victory: kill a hundred thousand enemies!"],
        ["Command of the Ocean", "As a commanding admiral, win ten multi-player naval battles."],
        ["Conqueror of All", "Be hailed as a true conqueror: kill a million enemies!"],
        ["Drumbeat to Victory", "Draw the sword and march onwards: complete one quick battle."],
        ["Emperor of Europe", "Subdue and hold all the provinces and regions in Europe at the same time."],
        ["Expansionist Power", "Capture ten regions, anywhere in the world."],
        ["Founding Father", "Take one region by conquest, somewhere in the world."],
        ["Grand Tactician", "Win ten classic multi-player battles."],
        ["Into the Breach!", "Attack! Attack! Attack! Win ten multi-player siege battles when commanding a besieging army."],
        ["l337 Guard", "Achieve victory in ten multiplayer battles, cutting a bloody path to greatness through your enemies' plans."],
        ["Maharajah of the Indies", "Have mastery over all the provinces and regions in India at the same time."],
        ["Marshal's Baton", "Achieve victory in fifty multiplayer battles, dashing your enemies' hopes in pieces in the process!"],
        ["Master of the Americas", "Conquer or control all the provinces and regions in the Americas at the same time."],
        ["Observe Diplomatic Niceties", "Use diplomatic threats to good effect by making gains from five separate negotiations."],
        ["Only Obeying Orders", "Ensure that thirty missions, regardless of detail or type, are successfully brought to a conclusion."],
        ["Perfidious Beast", "Use treachery to best effect by turning against at least five allied nations and attacking them."],
        ["Polymath", "Have your natural philosophers and scientists research all the technologies available to your nation."],
        ["Raw Recruit", "War sir, is a terrifying experience! Take part in a multiplayer battle."],
        ["Strategic Genius", "Complete the main campaign game on the hard difficulty setting."],
        ["The \"Chevaux de Frise\"", "Defend, sir, defend! Win ten multi-player siege battles when commanding  the defenders of a fortress. "],
        ["The Efforts of Others", "Successfully steal five technologies researched by other nations."],
        ["Tyrant and Ogre", "Bring terror to the hearts of men: kill half a million enemies!"],
        ["Veteran Strategist", "Complete the main campaign game on the medium difficulty setting."],
        ["Whiff of Grapeshot", "Gain some experience of combat: complete one ranked battle."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
