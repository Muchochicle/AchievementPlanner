import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stronghold-crusader-definitive-edition.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3024040 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("stronghold-crusader-definitive-edition");

test("getPlannerData('stronghold-crusader-definitive-edition') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for stronghold-crusader-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every Stronghold: Crusader - Definitive Edition achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every Stronghold: Crusader - Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 Stronghold: Crusader - Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A King's Ransom", "Complete Historical Campaign, \"The Seventh Crusade\""],
        ["Almost Impressive", "Win a skirmish game against 7 opponents"],
        ["Almost There", "Complete any Sands of Time mission with a 'Champion' ranking"],
        ["Apex Predator", "Complete The Trail of the Eagle within the Target Time"],
        ["Are you not entertained?!", "Win at least one match against all 20 different Lords & Ladies"],
        ["Banned from the Circus", "Kill 1000 Lions"],
        ["Bone Collector", "Complete The Trail of the Vulture within the Target Time"],
        ["Bully", "Kill 100,000 Units"],
        ["Calm down, Rambo!", "Store 1,000 weapons in a single game"],
        ["Dog Breeder", "Complete The Trail of the Jackal within the Target Time"],
        ["Falconer", "Complete The Trail of the Falcon within the Target Time"],
        ["Genuinely Impressive", "Win a skirmish game against a team of 7 opponents"],
        ["Goat Herder", "Complete The Trail of the Goat within the Target Time"],
        ["Iron Banner", "Complete Historical Campaign, \"Saladin's Conquest\""],
        ["King of the Sandcastle", "Complete Historical Campaign, \"The Kings' Crusade\""],
        ["Lord v. Food", "Store 1,000 food in a single game"],
        ["Lounging About The Levant", "Complete Historical Campaign, \"Crusader States\""],
        ["Meanie", "Kill 10,000 Units"],
        ["Mick Dundee", "Complete Economic Campaign, \"The Realm of the Crocodile\""],
        ["More Than Words", "Complete the Crusader Extreme Skirmish Trail"],
        ["Muhammad al-Idrisi", "Make a map and upload it to the Steam Workshop"],
        ["Nailed It!", "Complete any Sands of Time mission with a 'Prince of the Sands' ranking"],
        ["New Kids On The Block", "Win a skirmish match against a team of The Jewel, Sentinel, Nomad & Kāhinah"],
        ["No More Wood Needed", "Store 10,000 wood in a single game"],
        ["No Sleep 'til Ascalon", "Complete Historical Campaign, \"The Barons' Crusade\""],
        ["Perseverance Pays Off", "Complete the \"Warchest\" Skirmish Trail"],
        ["Rally the Troops!", "Complete Historical Campaign, \"The Call to Arms\""],
        ["Right In The Childhood", "Complete the \"First Edition\" Skirmish Trail"],
        ["Room for Improvement", "Complete any Sands of Time mission with a 'Warrior' ranking"],
        ["Sheep Farmer", "Complete The Trail of the Lamb within the Target Time"],
        ["Snake Charmer", "Complete The Trail of the Cobra within the Target Time"],
        ["Sprawling Metropolis", "Get a population of 300"],
        ["Stay Back!", "Win a skirmish match while only recruiting ranged units"],
        ["Subscribe to play as The Scribe", "Sign up to the Firefly newsletter to unlock The Scribe lord skin "],
        ["The Midas Touch", "Amass 50,000 gold in a single game"],
        ["Top of the Class", "Complete the Tutorial"],
        ["Tyrant", "Kill 1,000,000 Units"],
        ["Up Close & Personal", "Win a skirmish match without recruiting any ranged units"],
        ["Welcome, Lord Bessy!", "Place 30 Dairy Farms"],
        ["Wow. Like I'm Really Impressed!?", "Win a skirmish game"],
        ["Zoo Keeper", "Complete The Trail of the Leopard within the Target Time"],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
