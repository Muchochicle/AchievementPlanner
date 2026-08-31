import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/painkiller-hell-and-damnation.json - 107 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 214870 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("painkiller-hell-and-damnation");

test("getPlannerData('painkiller-hell-and-damnation') returns real planner data with 107 curated achievements", () => {

    assert.ok(game, "expected real planner data for painkiller-hell-and-damnation");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 107);

});

test("every Painkiller Hell & Damnation achievement has a unique id from 1 to 107 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 107 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 107);
    assert.strictEqual(new Set(apinames).size, 107);

});

test("every Painkiller Hell & Damnation achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 107 Painkiller Hell & Damnation achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4x4", "Play with at least 4 other people and collect 4 frags more than any of your enemies"],
        ["Adventurer", "Solo Campaign: Find 25 secret areas"],
        ["Barrel hater", "Destroy 300 barrels"],
        ["Battle Robber", "Find all secrets on Bunker map(solo campaign)"],
        ["Beard Grill", "Kill 1000 enemies in Survival mode"],
        ["Best of the Best", "Win Team Deathmatch with the highest score in your team"],
        ["Bin Garner", "Kill final enemy on Babel"],
        ["Blessing", "Enclave: Kill Necrogiant in under 2:00  (Solo Campaign)"],
        ["Bridge Player", "Kill all enemies on Bridge map (solo campaign)"],
        ["Castle Break", "Kill all the castle guards."],
        ["Charged", "Use 5 electric sparks under 20 seconds during boss fight"],
        ["City Lights", "Make your way through the Town"],
        ["Collector", "Collect all available Black Tarrot cards"],
        ["Conclave", "Select your own Pope in Conclave level"],
        ["Dark Soul", "Opera: Find all secret areas  (Solo Campaign)"],
        ["Demon Kangaroo", "Spend 666 seconds on bunny-hopping"],
        ["Destroyer", "Destroy all objects on Ruins map (solo campaign)"],
        ["Dexterity", "Swamp: Kill SwampThing in under 4:00  (Solo Campaign)"],
        ["Divine Intervention", "Loonypark: Possess 25 enemies using Soul Catcher  (Solo Campaign)"],
        ["Doctor", "Beat the Fragenstein challenge in solo survival mode"],
        ["Double Haste", "Opera: Collect 100 souls  (Solo Campaign)"],
        ["Double Time Bonus", "Colloseum: Pick up every ammo box  (Solo Campaign)"],
        ["DYI", "Finish 3rd arena without using MonkTrap."],
        ["Employee of the month", "Win Survival killing at least 2 times more monsters than your rivals"],
        ["Endurance", "Cemetery: Beat the level (Solo Campaign)"],
        ["Evil Eggs", "Collect all Satan's Eggs on Easter level"],
        ["Evil's Orphans", "Solo Campaign: Finish 3rd chapter"],
        ["Factorize", "Beat the Factory challenge in solo survival mode"],
        ["Farmer", "Solo Campaign: Collect 2012 pieces of gold from fallen enemies"],
        ["Fireproof", "Avoid any burns on Fire Plate Puzzle"],
        ["Five Points", "Kill 5 enemies with one rocket"],
        ["Flipper", "Flip all 16 columns."],
        ["Forgiveness", "Factory: Kill 30 enemies in demon mode  (Solo Campaign)"],
        ["Frag'n'Stein", "Win Deathmatch match on Fragenstein"],
        ["Fury", "Loonypark: Kill 3 monsters in a row using saw blade  (Solo Campaign)"],
        ["Ghost", "Finish level without being hurt"],
        ["Gondolier", "Beat the City on Water challenge in solo survival mode."],
        ["Grave Digger", "Solo Campaign: Finish 1st chapter"],
        ["Greed", "Orphanage: Kill all monsters  (Solo Campaign)"],
        ["Halloween", "Finish special Halloween map and collect all lollipops for Lucipher"],
        ["Hamster", "Collect all ammo on Pentagon map  (solo campaign)"],
        ["Hard-bitten", "Win Survival match"],
        ["Haste", "Tutorial: Destroy all objects  (Solo Campaign)"],
        ["Holy Sheet", "Collect all holy items on Monastery map (solo campaign)"],
        ["Hygienic", "Keep the hit ratio above 90% in whole level"],
        ["I ain't afraid o' no ghost", "Discover how to summon Ghostship"],
        ["I have friends", "Play 10 different levels in cooperative mode"],
        ["Illuminati", "Win survival game on Illuminati"],
        ["Insolent", "Get 30 kills in 3 minutes in Deathmatch mode"],
        ["Iron Will", "Orphanage: Gib 50 frozen enemies  (Solo Campaign)"],
        ["Jumping Death", "Kill 256 enemies when bunnyhopping"],
        ["Last moment", "Win Capture The Flag by bringing the flag to your base in last 10 seconds of the game"],
        ["Malicious", "Don't let any of your enemies collect Quad Damage"],
        ["Mass Chopper", "Gib 500 enemies entirely with rockets"],
        ["Medical Supply", "Let them burn: Destroy all 3 ambulances"],
        ["Merciful", "Don't kill any zombies while solving the puzzles"],
        ["Mercy", "Shadowland: Kill Grim Reaper  (Solo Campaign)"],
        ["Militarist", "Collect 40 armors"],
        ["Miner", "Beat the Mines challenge in solo survival mode"],
        ["Mirror Effect", "Kill enemy at the same time he kills you"],
        ["Monk", "Beat the Atrium Complex challenge in solo survival mode."],
        ["Mountebank", "Kill 123 enemies with combo damage"],
        ["Mourner", "Beat the Inhumator challenge in solo survival mode"],
        ["Name of the Beast", "Kill 666 enemies with Soul Catcher"],
        ["Neighbor of the Beast", "Collect 667 souls of dismembered enemies"],
        ["Nightmare Lover", "Solo Campaign: Play whole game on Nightmare difficulty level"],
        ["Penthouse Down", "Finish 2nd chapter"],
        ["Pigsticker", "Beat the Meatless challenge in solo survival mode"],
        ["Plague", "Kill 6666 enemies with stakes"],
        ["Pope", "Beat the Chaos challenge in solo survival mode."],
        ["Pope Up", "Solve the pope puzzle."],
        ["Priest", "Beat the Unseen challenge in solo survival mode."],
        ["Prisoner", "Beat the Prison challenge in solo survival mode"],
        ["Psychiatrist", "Beat the Psycho challenge in solo survival mode"],
        ["Psycho", "Win deathmatch game on Psycho"],
        ["Rage", "Shadowland: Collect all Holy Items  (Solo Campaign)"],
        ["Railwayman", "Beat the Trainstation challenge in solo survival mode."],
        ["Replenish", "Colloseum: Morph into demon 3 times  (Solo Campaign)"],
        ["Robber", "Bring enemy flag to your base"],
        ["Satan Claus", "Defeat Satan Claus on special Christmas map"],
        ["Savant", "Beat the Illuminati challenge in solo survival mode."],
        ["Scavenger", "Kill 3 enemies with one shotgun blast"],
        ["Skewers", "Kill 3 enemies with one Boltgun shot"],
        ["Sniping Elite", "Solo Campaign: Finish the level using stakes only and don't miss any hit"],
        ["Snowman", "Beat the Snow Town challenge in solo survival mode"],
        ["Soul Catcher", "Trainstation: Cut limbs of 100 enemies using Soul Catcher  (Solo Campaign)"],
        ["Soul Keeper", "Atrium Complex: Finish level in under 7:00  (Solo Campaign)"],
        ["Soul Redeemer", "Oriental Castle: Collect all Holy Items  (Solo Campaign)"],
        ["Spammer", "Shoot 50000 times"],
        ["Speed", "Cathedral: Collect 330 pieces of gold dropped by enemies  (Solo Campaign)"],
        ["Sport Season", "Capture 3 flags playing as Eve in one game"],
        ["Squint", "Beat the Blink challenge in solo survival mode"],
        ["Stoned", "Defeat the Stone Golem on Angkor"],
        ["Surgeon", "Play cooperative level and don't let your partner die"],
        ["Sweet dreams", "Solo Campaign: Play whole game on Trauma difficulty level"],
        ["Tank Killer", "Beat the tank hordes on Pentagon"],
        ["Tenor", "Beat the Opera challenge in solo survival mode."],
        ["Time Bonus", "Oriental Castle: Gib 123 enemies  (Solo Campaign)"],
        ["Tornado", "Kill 333 enemies with explosive weapons"],
        ["Town Cleaner", "Finish Town map (solo campaign)"],
        ["Triple Haste", "Alastor: Kill Alastor in under 5:00  (Solo Campaign)"],
        ["Twister", "Kill 500 enemies with environmental explosions"],
        ["Undertaker", "Finish the Graveyard"],
        ["Untouched", "Don't die and win multiplayer game"],
        ["Upside Down Beast", "Kill 999 enemies with Shotgun"],
        ["Vitality", "Cathedral: Collect 500 gold  (Solo Campaign)"],
        ["Warehouseman", "Collect 500 ammo crates"],
    ];

    assert.strictEqual(officialAchievements.length, 107, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
