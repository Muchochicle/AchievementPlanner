import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rage.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 9200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rage");

test("getPlannerData('rage') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for rage");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every RAGE achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every RAGE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 RAGE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A True Legend", "Complete a Legend of the Wasteland on Nightmare difficulty"],
        ["Anthology", "Complete all Legends of the Wasteland"],
        ["Arts and Crafts", "Construct 10 Engineering Items"],
        ["Bringin' Home the Bacon", "Earn 750 Dollars in one episode of Bash TV in the Campaign"],
        ["Cavernous Stumble", "Complete Hagar Caves in The Scorchers job path"],
        ["Debunked", "Complete Shrouded Bunker in the Campaign"],
        ["Decapathon", "Get 10 Headshot kills with the Wingstick"],
        ["Decrypted", "Complete Jackal Canyon in the Campaign"],
        ["Deliverance", "Complete the final round of Strum"],
        ["Demolition Man", "Destroy 100 Enemy Cars"],
        ["Dev Graffiti", "Find the secret Developer Graffiti Room"],
        ["Fired Up!", "Complete Scorcher Base in the The Scorchers job path"],
        ["Foursome", "Win with a Four of a Kind in the Video Poker minigame"],
        ["Fresh Meat", "Complete a public Road RAGE match"],
        ["Ghost Buster", "Complete Ghost Hideout in the Campaign"],
        ["Gladiator", "Complete Mutant Bash TV in the Campaign"],
        ["Gotta Have 'Em All", "Collect all Playing Cards on one play-through"],
        ["Hardest Deck", "Beat Teague's hardest Deck"],
        ["Hat Trick", "Kill at least 3 Enemies with a single Mind Controlled Enemy"],
        ["Hey, not too rough", "Finish the Campaign on any difficulty"],
        ["Hurt me plenty", "Finish the Campaign on at least Normal difficulty"],
        ["It's Alive!", "Complete Dead City in the Campaign"],
        ["It's Good!", "Score each of the 3 Field Goals from the ATV"],
        ["JACKPOT!", "Roll 4 Targets in the first round of Tombstones"],
        ["Jail Break", "Complete Authority Prison in the Campaign"],
        ["Jetpacker", "Kill an Authority Enforcer during Jetpack descent"],
        ["Jumper", "Perform all 18 Vehicle Jumps"],
        ["Just a Flesh Wound", "Complete the final round of 5 Finger Filet"],
        ["Keep 'Em Coming", "Get 5 kills with one deployed Sentry Turret"],
        ["Lead Foot", "Win a Race in the Campaign"],
        ["Lucky  Charms", "Bet and win on Green in the Roly-Poly minigame"],
        ["Master Chef", "Collect all Recipes and Schematics in one play-through"],
        ["Mechanocide", "Kill 100 Enemies with Sentry Bots, Sentry Turrets, or RC Bomb Cars"],
        ["Minigamer", "Win all Minigames"],
        ["Mr. Oddjob", "Complete 5 Job Board Quests in one play-through"],
        ["Mutie Blues", "Complete Blue Line Station in the Campaign"],
        ["MVP", "Get first place in a public Road RAGE match"],
        ["Night Terrors", "Finish the Campaign on Ultra Nightmare difficulty"],
        ["No Room for Sidekicks", "Complete a Legend of the Wasteland without any player(s) becoming incapacitated"],
        ["Obsessive Compulsive", "Reach 100% Completion in the Campaign"],
        ["Open Minded", "Get 10 Headshot kills with the Sniper Rifle"],
        ["Passive Aggressive", "Get 3 kills with a single Sentry Bot"],
        ["Plans Refined", "Complete Refinery in The Scorchers job path"],
        ["Power Struggle", "Complete Power Plant in the Campaign"],
        ["Rage Cup", "Win all Races in the Campaign"],
        ["RAGE Nightmare", "Finish the Campaign on Nightmare difficulty"],
        ["Rebar Pie", "Pin an enemy to a surface with a Rebar ammo shot"],
        ["Rite of Passage", "Complete Wellspring Tunnels in The Scorchers job path"],
        ["Roadkill", "Run over 10 Mutants"],
        ["Silent But Deadly", "Stealth kill 10 Enemies with the Striker Crossbow"],
        ["The Legend Begins...", "Complete a Legend of the Wasteland"],
        ["Thrash Canyon", "Complete Bash Canyon in The Scorchers job path"],
        ["Three Birds, One Bomb Car", "Kill 3 Enemies with one RC Bomb Car"],
        ["Tinkerer", "Construct 50 Engineering Items"],
        ["Ultra-violence", "Finish the Campaign on at least Hard difficulty"],
        ["Vault Assault", "Complete Gearhead Vault in the Campaign"],
        ["Wall Hack", "Kill 2 enemies with one Railgun Slug shot through a wall"],
        ["Waste Management", "Complete Wasted Garage in the Campaign"],
        ["Wellness Plan", "Complete The Well in the Campaign"],
        ["ytiC daeD", "Complete Dead City Reverse in the Campaign"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
