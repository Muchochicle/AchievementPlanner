import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nightmare-reaper.json - 149 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1051690 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nightmare-reaper");

test("getPlannerData('nightmare-reaper') returns real planner data with 149 curated achievements", () => {

    assert.ok(game, "expected real planner data for nightmare-reaper");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 149);

});

test("every Nightmare Reaper achievement has a unique id from 1 to 149 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 149 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 149);
    assert.strictEqual(new Set(apinames).size, 149);

});

test("every Nightmare Reaper achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 149 Nightmare Reaper achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A real weapon", "Obtain a level 2 weapon"],
        ["Addict", "Complete 135 levels with pills"],
        ["Art of the deal", "Sell a weapon for 1000000"],
        ["Aspen", "Buy 75 skills from the tree"],
        ["Asteroid", "Break 10000 clutter objects"],
        ["Avocado", "Obtain 240000 jade"],
        ["Bank robbery", "Obtain 20 nightmare reapers"],
        ["Barbecue", "Complete The flesh pits"],
        ["Belongs in the trash", "Change a stat to blood ammo"],
        ["Bi", "Buy 100 jade upgrades"],
        ["Big hands", "Buy all skills from world 5"],
        ["Birch", "Buy a skill from the tree"],
        ["Blood donator", "Complete gibbs medical center"],
        ["Blood is fuel", "Lose 2000 life as blood ammo"],
        ["Bloody hands", "Kill 30 enemies"],
        ["Bold and brash", "Change a stat to +2 attack"],
        ["Brain fetish", "Obtain 10000 headshot kills"],
        ["Breaking good", "Complete 250 levels with pills"],
        ["Breaststroke", "Buy all skills from world 6"],
        ["Brimstone", "Complete the descent"],
        ["Bring", "Obtain 150000 gold"],
        ["Bull", "Break 100 clutter objects"],
        ["Bunny hopper", "Reach bunnyhop max speed"],
        ["Burning soles", "Do 20 rocket jumps"],
        ["Cara loft", "Complete Buried ruins"],
        ["Cemetary man", "Buy all skills from world 3"],
        ["Cheetah", "Obtain 500 horse waters"],
        ["Cholinesterase", "Complete boulder penitentiary"],
        ["Claustrophobia", "Complete hollow stone"],
        ["Clear!", "Find everything in the hospital"],
        ["Climate change", "Buy all skills from world 8"],
        ["Completionist", "Get all bonuses in a level"],
        ["Condemnation", "Get the control ending"],
        ["Contraband", "Complete murky docks"],
        ["Convenience store", "Sell 25 weapons"],
        ["Courage", "Reach round 50 in an arena"],
        ["Court", "Unlock 2 arenas"],
        ["Dead evil", "Complete drudge village"],
        ["Department store", "Sell 50 weapons"],
        ["Dirt digger", "Buy all skills from world 1"],
        ["Disrespect", "Kick a boss"],
        ["Does not", "Obtain 50000 gold"],
        ["End up", "Obtain 1000 treasures"],
        ["Epic", "Obtain a level 3 weapon"],
        ["Extraterrestrial", "Complete Moon terror"],
        ["Factory worker", "Buy all skills from world 7"],
        ["Field", "Unlock 5 arenas"],
        ["Fir", "Buy 100 skills from the tree"],
        ["Flame trap", "Complete 15 random events"],
        ["Foolishness", "Reach round 75 in an arena"],
        ["Game of chance", "Accept 5 merchant offers"],
        ["Garage sale", "Sell 10 weapons"],
        ["Ghost head", "Complete 75 random events"],
        ["Glass", "Obtain 5 reflections"],
        ["Gold", "Obtain 20 reflections"],
        ["Good doggy", "Have a pet with 2 skills"],
        ["Grape", "Obtain 20000 jade"],
        ["Greyhound", "Obtain 20 horse waters"],
        ["Hallowbrook", "Complete Sorcerer's mansion"],
        ["Happiness", "Obtain 1000000 gold"],
        ["Hardcore pat", "Start a level with no weapon"],
        ["Hare", "Obtain horse water"],
        ["Headshot", "Obtain 20 headshot kills"],
        ["Heavy traffic", "Complete carnage way"],
        ["Hold up", "Obtain 5 nightmare reapers"],
        ["Hold your breath", "Complete Crushing depths"],
        ["Horse", "Obtain 5 horse waters"],
        ["Hurt me plenty", "Reach New game+ 2"],
        ["I hate mondays", "Complete tower of toil"],
        ["Ice climber", "Buy all skills from world 2"],
        ["Industrial revolution", "Complete rust works"],
        ["It won't come out", "Kill 100 enemies"],
        ["Its", "Complete putrid sewers"],
        ["Just a dream", "Wake up prematurely"],
        ["Kebab", "Kill 3 enemies with one bullet"],
        ["Kennel", "Unlock all pets"],
        ["Killer", "Obtain a 25x combo"],
        ["Last laugh", "Pickup a weapon after death"],
        ["Lead", "Complete a level with 20 toxicity"],
        ["Lime", "Obtain 60000 jade"],
        ["Lis", "Buy 180 jade upgrades"],
        ["Loot", "Obtain an uncommon weapon"],
        ["Loot slime", "Complete 5 random events"],
        ["Mac", "Buy 10 jade upgrades"],
        ["Maple", "Buy 10 skills from the tree"],
        ["Mercury", "Complete a level with 100 toxicity"],
        ["Mirror", "Obtain 500 reflections"],
        ["Mixed bag", "Complete The wasteland"],
        ["Money", "Obtain 10000 gold"],
        ["Monster", "Get all kills in a level"],
        ["Not too rough", "Reach New game+ 1"],
        ["Oak", "Buy 25 skills from the tree"],
        ["Offender", "Obtain a 5x combo"],
        ["Old man", "Obtain V"],
        ["On the roof", "Complete disavowed town"],
        ["Overconfidence", "Have a carried barrel explode"],
        ["Overlook hotel", "Complete gloom mansion"],
        ["Owning you", "Obtain 10000 treasures"],
        ["Painkiller", "Complete 5 levels with pills"],
        ["Patient", "Complete 15 levels with pills"],
        ["Perseverance", "Reach round 10 in an arena"],
        ["Pet training", "Unlock all pet skills"],
        ["Pine", "Buy 50 skills from the tree"],
        ["Pleasant bath", "Kill 5000 enemies"],
        ["Poison ivy", "Complete gardens of woe"],
        ["Private savings", "Complete Fields of death"],
        ["Problematic", "Complete 45 levels with pills"],
        ["Psychedelic", "Complete spore pit"],
        ["Raider", "Get all treasures in a level"],
        ["Raining cats and dogs", "Have 2 pets"],
        ["Red gold", "Complete sulfuric mines"],
        ["Refreshing", "Douse yourself 50 times"],
        ["Repeat offender", "Obtain a 15x combo"],
        ["River", "Obtain reflection"],
        ["Rusty bucket", "Complete vermilion princess"],
        ["Salvation", "Get the sacrifice ending"],
        ["Schamalayan", "Complete forsaken village"],
        ["Shiny", "Obtain a rare weapon"],
        ["Slot machine", "Complete 250 random events"],
        ["Sloth", "Obtain 20 Vs"],
        ["Snail", "Obtain 500 Vs"],
        ["Sniper", "Obtain 100 headshot kills"],
        ["Soccer", "Kick 50 enemies to death"],
        ["Spruce", "Buy 125 skills from the tree"],
        ["Stadium", "Unlock 8 arenas"],
        ["Storm ice and fire", "Burn freeze and shock an enemy"],
        ["Street fight", "Obtain nightmare reaper"],
        ["Sulfur", "Complete Blood and brimstone"],
        ["Surgeon", "Obtain 1000 headshot kills"],
        ["Ta", "Buy 50 jade upgrades"],
        ["The hunter", "Complete immemorial woods"],
        ["The things", "Obtain 20 treasures"],
        ["Ticket please", "Complete void beneath"],
        ["Tornado", "Break 250 clutter objects"],
        ["Turtle", "Obtain 5 Vs"],
        ["Ultra-violence", "Reach New game+ 3"],
        ["Unstoppable", "Obtain a 35x combo"],
        ["Uranium", "Complete a level with 250 toxicity"],
        ["Valley of the gods", "Buy all skills from world 4"],
        ["Volcano", "Break 2500 clutter objects"],
        ["Wait for it", "Obtain a legendary weapon"],
        ["Wall hugger", "Get all secrets in a level"],
        ["War", "Obtain 500 nightmare reapers"],
        ["Wardrobe change", "Kill 500 enemies"],
        ["Watch your step", "50 high falls into water"],
        ["Watermelon", "Obtain 1000000 jade"],
        ["Where am I?", "Complete The empty"],
        ["Worldwide chain", "Sell 500 weapons"],
        ["You own", "Obtain 100 treasures"],
    ];

    assert.strictEqual(officialAchievements.length, 149, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
