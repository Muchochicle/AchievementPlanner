import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/borderlands-game-of-the-year.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 8980 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("borderlands-game-of-the-year");

test("getPlannerData('borderlands-game-of-the-year') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for borderlands-game-of-the-year");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Borderlands GOTY achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Borderlands GOTY achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Borderlands GOTY achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1.21 Gigawatts", "Killed 25 enemies with shock weapons"],
        ["12 Days of Pandora", "Complete the '12 Days of Pandora' weapon-mastery challenge - kills with twelve different weapon types and methods (combat rifle, pistol, shotgun, SMG, sniper, melee, critical, explosive, shock, incendiary, corrosive and grenade)."],
        ["And They'll Tell Two Friends", "Gamed with fame"],
        ["Athena, Out", "Rescued Athena"],
        ["Big Tournament", "Reached the end of each of the 3 larger challenges with one character"],
        ["Bobble-trap", "Collected 15 claptrap bobbleheads"],
        ["Braaaaaaaaaaaaains!", "Completed the \"Braaaaaaaaaaaaains!\" mission"],
        ["Can't We Get BEYOND Thunderdome?", "Emerged victorious from an arena match"],
        ["Careful, He Bites", "Killed 15 enemies with the Hunter's action skill"],
        ["Completionist", "Completed all missions in Secret Armory"],
        ["Depot Demolition", "Destroyed the Lance Depot"],
        ["Destroyed the Destroyer", "Story: destroy the Destroyer - completes the main campaign."],
        ["Destroyed the Hive", "Story: destroy the Rakk Hive."],
        ["Ding! Champion", "Earned level 50"],
        ["Ding! Expert", "Earned level 20"],
        ["Ding! Hardcore", "Earned level 30"],
        ["Ding! Newbie", "Earned level 5"],
        ["Ding! Novice", "Earned level 10"],
        ["Ding! Overleveled", "Reached Level 51"],
        ["Ding! Overleveled to 11", "Reached Level 61"],
        ["Ding! Sleepless", "Earned level 40"],
        ["Discovered Crimson Lance Enclave", "Discovered Crimson Lance Enclave"],
        ["Discovered Eridian Promontory", "Discovered Eridian Promontory"],
        ["Discovered Headstone Mine", "Discovered Headstone Mine"],
        ["Discovered Krom's Canyon", "Discovered Krom's Canyon"],
        ["Discovered Skag Gully", "Discovered Skag Gully"],
        ["Discovered Sledge's Safe House", "Discovered Sledge's Safe House"],
        ["Discovered The Scrapyard", "Discovered The Scrapyard"],
        ["Discovered Trash Coast", "Discovered Trash Coast"],
        ["Down in Front!", "Killed 15 enemies with the Soldier's action skill"],
        ["Duel-icious", "Won a duel against another player"],
        ["Duelinator", "Won a duel without taking damage"],
        ["Facemelter", "Killed 25 enemies with corrosive weapons"],
        ["Fence", "Sold 50 guns to a shop"],
        ["Fully Loaded", "Rescued enough Claptraps to earn 42 inventory slots"],
        ["Get A Little Blood on the Tires", "Killed 25 enemies by ramming them with any vehicle"],
        ["Group LF Healer", "Rescued a groupmate from death in a co-op game"],
        ["Hell-Burbia", "Reached the end of the larger challenge in the Hell-Burbia coliseum"],
        ["House of the Ned", "Completed the \"House of the Ned\" mission"],
        ["It's so realistic!", "Collected 5 3D glasses"],
        ["Jakobs Fodder", "Completed the \"Jakobs Fodder\" mission"],
        ["Knoxx-Trap", "In Claptrap's New Robot Revolution, kill General Knoxx-Trap (he appears in Sanders Gorge and again in Wayward Pass)."],
        ["Made in Fyrestone", "Completed all missions in the Arid Badlands"],
        ["Made in New Haven", "Completed all missions in the Rust Commons"],
        ["Making a Monster", "Built the New Car: Monster"],
        ["Master Exploder", "Killed 25 enemies with explosive weapons"],
        ["Muerte la robo-lución", "Defeated the Interplanetary Ninja Assassin Claptrap"],
        ["My Brother is an Italian Plumber", "Killed an enemy plumber-style"],
        ["Ned-Trap", "In Claptrap's New Robot Revolution, kill Dr. Ned-Trap."],
        ["Ned's Undead, Baby", "Kill Dr. Ned for good, completing the Zombie Island of Dr. Ned add-on."],
        ["Night of the Living Ned", "Kill Ned the first time, in the Zombie Island of Dr. Ned add-on."],
        ["Paid in Fyrestone", "Completed 5 missions in the Arid Badlands"],
        ["Paid in New Haven", "Completed 5 missions in the Rust Commons"],
        ["Pandora-dog Millionaire", "Earned $1,000,000"],
        ["Pyro", "Killed 25 enemies with incendiary weapons"],
        ["Reckless Abandon", "Killed 15 enemies with the Berserker's action skill"],
        ["Rootinest, Tootinest, Shootinest", "Killed 5 Rakk in under 10 seconds"],
        ["Small Tournament", "Completed the Prove Yourself mission"],
        ["Sneaky Little Buggers", "Killed each of the loot midgets"],
        ["Speed Kills", "Destroyed a Lancer while in a Racer"],
        ["Speedy McSpeederton", "Raced around the Ludicrous Speedway in record time"],
        ["Steele-Trap", "In Claptrap's New Robot Revolution, kill Commandant Steele-Trap."],
        ["Sucker born every minute", "In The Secret Armory of General Knoxx add-on, pay $8,000,000 for the tour of the World's Largest Bullet."],
        ["The Angelic Ruins", "Reached the end of the larger challenge in The Angelic Ruins coliseum"],
        ["The Collector", "Completed Tannis' crazy request"],
        ["The Gully", "Reached the end of the larger challenge in The Gully coliseum"],
        ["The Lubricator", "Found 25 claptrap oil cans"],
        ["There are some who call me...Tim", "Equipped a class mod for your character"],
        ["There's No \"I\" In \"Team\"", "Completed 15 missions in co-op"],
        ["Tourist", "Read all 6 claptrap statue placards"],
        ["Truly Outrageous", "Killed an enemy with the Siren's action skill"],
        ["United We Stand", "In a co-op game, defeat the Rakk Hive, the Vault boss, Sledge, Krom or Flynt."],
        ["Vincible", "Killed Crawmerax the Invincible"],
        ["Wanted: Flynt", "Story: kill Flynt."],
        ["Wanted: Krom", "Story: kill Krom."],
        ["Wanted: Sledge", "Story: kill Sledge."],
        ["Weapon Aficionado", "Reached proficiency level 10 with any weapon type"],
        ["What a party!", "Collected 3 panties, 5 fish in a bag, and 15 pizzas"],
        ["You call this archaeology?", "Applied an elemental artifact"],
        ["You're on a boat!", "Reach the hidden jetty with a boat in Treacher's Landing."],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
