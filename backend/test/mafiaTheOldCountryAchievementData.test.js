import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mafia-the-old-country.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1941540 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mafia-the-old-country");

test("getPlannerData('mafia-the-old-country') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for mafia-the-old-country");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Mafia: The Old Country achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Mafia: The Old Country achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Mafia: The Old Country achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend of Ours", "Completed Man of Honor"],
        ["A Trip to the Coast", "Story progress - Enzo saved Isabella (completes Chapter 4)."],
        ["A Working Man", "Completed all of Salieri's Jobs"],
        ["Against All Odds", "Completed Man of Honor on Classic difficulty"],
        ["Bombas Away!", "Killed 10 enemies with explosives"],
        ["Bona Furtuna", "Found a Trinacria coin"],
        ["Classico", "Completed the story on Classic difficulty"],
        ["Cold-Blooded", "Performed 30 headshots"],
        ["Daredevil", "Jumped a car over 40 meters"],
        ["Deadly Assassin", "Completed all Assassinations, earning at least a medal in each."],
        ["Driving in Style", "Customized a car"],
        ["Everything you Deserve", "Story progress - Enzo killed the Spadaro holdouts (completes Chapter 13)."],
        ["Everything’s Golden", "Story progress - Enzo won the race (completes Chapter 7)."],
        ["Fantasma", "Infiltrate the villa in Chapter 5 without being spotted."],
        ["Fastest Man in Sicily", "Finish the Chapter 7 road race in under 8 minutes."],
        ["Firestarter", "Completed Playing with Fire"],
        ["Forza San Celeste", "Story progress - Enzo won the Palio (completes Chapter 2)."],
        ["Full Steam Ahead", "Beat the train during the Chapter 7 race."],
        ["Garden Rendezvous", "Meet Isabella in secret in the villa gardens during Chapter 3."],
        ["Getaway Driver", "Drove at 120 km/h for at least 15 seconds"],
        ["Good as New", "Fixed a broken vehicle by using the crank"],
        ["Guest of Honor", "Story progress - Enzo found a new home (completes Chapter 1)."],
        ["Lira for Lira", "Story progress - Enzo freed the counterfeiter (completes Chapter 6)."],
        ["Live by the Blade", "Performed all Special Actions 5 times with each knife"],
        ["Man of Honor", "Refuse Tino's order to kill a defenseless target in cold blood (Chapter 5)."],
        ["Most Dutiful Soldier", "Story progress - Enzo exacted revenge (completes Chapter 12)."],
        ["Mystery Fox Domination", "Find all 50 Mystery Fox collectibles across Sicily."],
        ["Neutral Ground", "Story progress - Enzo lost his mentor (completes Chapter 11)."],
        ["No More Running", "Story progress - Enzo killed his nemesis (completes Chapter 10)."],
        ["Not So Fast", "Kill Caccini before he reaches the Salt Flats in Chapter 13."],
        ["Only One Way Out", "Story progress - Enzo and Isabella's story came to an end (completes the final chapter)."],
        ["Protected", "Equipped a Charm"],
        ["Rare Weapons Expert: Lupara", "Killed 20 enemies with a Lupara"],
        ["Rare Weapons Expert: Modello", "Killed 20 enemies with a Modello C96"],
        ["Rare Weapons Expert: Praecisione", "Killed 20 enemies with a Praecisione"],
        ["Rare Weapons Expert: Pump-Action", "Killed 20 enemies with a Pump-Action Shotgun"],
        ["Rare Weapons Expert: Repeater", "Killed 20 enemies with a Repeater"],
        ["Rare Weapons Expert: Vendetti", "Killed 20 enemies with a Vendetti"],
        ["Read All About It", "Found a Newspaper"],
        ["Riding in Style", "Customized a horse"],
        ["Salvatore's Apprentice", "Cracked a safe without a combination"],
        ["Seasoned Hunter", "Completed all Standoffs, earning at least a medal in each."],
        ["Secret Assassin", "Killed 20 enemies with Knife Takedowns"],
        ["Silent Hunter", "Kill Mazzone in Chapter 13 without alerting his men."],
        ["Snapshot", "Enzo had his photograph taken by Isabella"],
        ["Speed Demon", "Completed all Races, earning at least a medal in each."],
        ["Stuntman", "Completed all the Stunt Jumps in Free Ride"],
        ["The Carusu", "Enzo escaped the mine"],
        ["The Challenger", "Completed all of Salieri's Challenges, earning at least a medal in each."],
        ["The Collector", "Completed the collection"],
        ["The Family Business", "Story progress - Enzo learned the ropes (completes Chapter 3)."],
        ["The Finer Things", "Bought all available cars from Pasquale"],
        ["The Old Country", "Completed the story on any difficulty"],
        ["The Old Ways", "Reach the foreman's office in Chapter 9 without alerting any enemies."],
        ["The Rat", "Story progress - Enzo and Cesare killed L'Ombra (completes Chapter 8)."],
        ["The Usual Suspects", "Collected all of the Wanted Posters"],
        ["This Thing of Ours", "Story progress - Enzo got made (completes Chapter 5)."],
        ["Total Shutdown", "Story progress - Enzo found the foreman (completes Chapter 9)."],
        ["Trail of Destruction", "Destroy 10 pursuing cars while escaping the Tonnara in Chapter 11."],
        ["True Soldato", "Completed the story on Hard difficulty"],
        ["Vulpi Misteriusa", "Find one of the 50 Mystery Fox collectibles."],
        ["Worthy Opponent", "Defeat Don Torrisi in the Chapter 14 knife fight without taking a single hit."],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
