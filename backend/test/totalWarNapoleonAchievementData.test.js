import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-napoleon.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 34030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-napoleon");

test("getPlannerData('total-war-napoleon') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-napoleon");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every Total War: NAPOLEON achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every Total War: NAPOLEON achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 71 Total War: NAPOLEON achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bella Ragazza Locket", "Win a MP Italian Campaign as France "],
        ["Bronze Star on Red Ribbon", "Play a MP Campaign "],
        ["Bronze Tower of Pisa", "Win Italian Campaign in easy "],
        ["Conquistador Medal", "Capture a region in the Peninsular Campaign"],
        ["Defender's Cross of Honour", "Win a battle using only Light Infantry and Artillery "],
        ["Diplomat's Pin", "Make all major nations like you (very friendly)"],
        ["Distinguished Service Medal", "Win a match against a player with double your skill rating"],
        ["Duke of Ciudad Rodrigo", "Win the Peninsular Campaign as Spain"],
        ["Duke of the Victory", "As Britain, ensure that all regions in Spain are liberated back to Spanish control"],
        ["Fighting Giants Commemorative Medallion", "Other player's faction is last to die "],
        ["Golden Obelisk of the Pharaos", "Win Egypt Campaign in hard"],
        ["Grand General Star", "Win Silver in 5 Historic Battles"],
        ["Hardened Veteran's Badge", "Win 15 SP Campaign land battles"],
        ["Hero of Arcole Commemorative Medal", "Win Italian Campaign in hard"],
        ["Historians' College Acknowledgement Badge", "Play a historical land battle "],
        ["Imperial Fencing Academy Master's Needle ", "Win 10 sword duels"],
        ["Marksman Brooch", "Win 10 pistol duels"],
        ["Marquis of Torres Vedras", "Win the Peninsular Campaign as Britain"],
        ["Medal of the Unrelenting Storm", "Win a match having spent half as many funds as your opponent "],
        ["Mercenary Coin", "Play a MP land battle with every faction "],
        ["Nautic Star Emblem", "Win ten SP Campaign naval battles"],
        ["Nice City Key", "Win a MP Italian Campaign as Austria "],
        ["Officer's Achievement Medal", "Win 10 land battles "],
        ["Palace Guard Pendant", "Play the game for 30 hours total"],
        ["Pendant of the Seven Winds", "Win 6 MP Naval Battles in a row"],
        ["Platinum Star of Glory", "Win Gold in all Historic Battles"],
        ["Poseidon's Carriage in Gold", "Play 100 multiplayer naval battes"],
        ["Quadriga in Prussian Silver", "Win Europe Campaign in medium within historic time"],
        ["Quadriga with Iron Cross", "Win Europe Campaign as Prussia"],
        ["Raging Bear Star", "Win Europe Campaign as Russia "],
        ["Revolutionary Cocarde", "Start any campaign, battle or historical battle  "],
        ["Royal Navy Glorious Fleet Badge", "Win Europe Campaign as England "],
        ["Russian Doll on Green Ribbon", "Win Europe Campaign in easy"],
        ["Sailor's Medal", "Play a MP naval battle with every faction"],
        ["Sangria Bottle of Friendship", "Start the Peninsular Campaign in multiplayer"],
        ["Shield of the Protector", "Have 10 protectorates at one time"],
        ["Skull and Sabres on Iron Chain", "Board 5 ships in a single battle "],
        ["St. Martin's Medal", "Win campaign having given enemy player 50000 gold "],
        ["The Bronze Armchair of Comfort", "Win any campaign by auto-resolving battles"],
        ["The Bronze Date", "Win Egypt Campaign in easy"],
        ["The Charging Guard Regiment Emblem", "Win 10 MP Land Battles in a row "],
        ["The Crossed Sabres and Crescent", "Win Egypt Campaign as Ottomans "],
        ["The Explorers' Society Badge", "Cover 50,000 sea or land miles with your armies and fleets"],
        ["The Eye of the Ever Watchful General", "Play the game for 50 hours total "],
        ["The Golden Lightning", "Take other player's capital within 20 turns "],
        ["The Golden Swallow", "Win a match without any ships of the line "],
        ["The Hand-and-Dagger on Black Chain", "Assassinate 15 people"],
        ["The Hero's Skull Badge ", "100000 soldiers die in battles with you, friend and foe"],
        ["The Horse-and-Cannon", "Win a match without any infantry "],
        ["The Imperatorial Double Eagle", "Win Europe Campaign as Austria "],
        ["The Imperial Crown on Brocade Band", "Win Europe Campaign in hard"],
        ["The Imperial Laurels ", "Win European MP Campaign as France"],
        ["The Imperial School of Strategy Crest", "Have three generals with full skill level in one campaign"],
        ["The Imperial Wreath", "Conquer all of Europe"],
        ["The Leaden Seahorse", "Win a MP naval battle"],
        ["The Lion and Sabers Medal", "Win any campaign without a single autoresolve"],
        ["The Medallion of Secular Enlightenment", "As France, attain over 50% pro-French sentiment in 10 of your regions"],
        ["The Medallion of the Imperial Psychopath", "Declare war on all nations the first turn, never negotiate peace, and win the game"],
        ["The Merchant's Navy Medal of Gratitude ", "Gain 8000 per turn in trade revenue"],
        ["The Navy Cross", "Win 10 decisive victories "],
        ["The People's Crown", "Have a 100% approval rating"],
        ["The Ribbon of the Promising Strategist ", "Capture 10 regions"],
        ["The Seal of the Grand Coalition", "Have 6 allies simultaneously"],
        ["The Silver Dromedairy Legionaire", "Win Egypt Campaign in medium within historic time"],
        ["The Silver Olive Chaplet", "Win Italian Campaign in medium within historic time"],
        ["The Silver Sun", "Win a MP Egypt Campaign as France "],
        ["The Spanish Crown", "Win the Peninsular Campaign as France"],
        ["The Star of the Fearless Buccaneer", "Win a match against someone with double your skill rating"],
        ["The Tireless Watchman Brooch", "Play the game for 10 hours total"],
        ["Treasure Galleon Pendant", "Win a match with only first rates "],
        ["Veteran's Badge of Service", "Win 50MP Land Battles"],
    ];

    assert.strictEqual(officialAchievements.length, 71, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
