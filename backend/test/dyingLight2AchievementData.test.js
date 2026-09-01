import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dying-light-2.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 534380 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dying-light-2");

test("getPlannerData('dying-light-2') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for dying-light-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every Dying Light 2 achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every Dying Light 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 65 Dying Light 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend in Need...", "Help 50 survivors in Encounters."],
        ["After the Fall", "Fall from a combined height of at least 10,994 meters."],
        ["Archivist", "Find all Collectible Notes."],
        ["Audiophile", "Find all Collectible Recordings."],
        ["Ban Hammer", "Clear all Bandit Camps."],
        ["Being All Social", "Join a co-op session."],
        ["Bing Bang Boom!", "Perform an Air Kick after a Double Wall Run."],
        ["Boot Licker", "Reach City Alignment 7 for any faction."],
        ["Brush with Death", "Complete Main Quest 19: 'Veronika'."],
        ["Can't Touch This!", "Kill 20 enemies in a row with melee weapons without taking damage."],
        ["Can't You Read the Signs?", "Collect all Inhibitors hidden in GRE Quarantines."],
        ["Combat Master", "Achieve maximum Combat Proficiency."],
        ["Connoisseur", "Find all Carnage Hall collectables."],
        ["Death From Afar", "Kill a Spitter using a ranged weapon."],
        ["Debris and Ashes", "During Main Quest 19: 'Veronika', reach the objective 'Enter the Observatory'."],
        ["Don Quixote", "Activate all Windmills."],
        ["Don't Look Up", "Perform Smash on at least 50 enemies."],
        ["Enter the Hall", "Reach Carnage Hall"],
        ["Family First", "During Main Quest 22: 'X13', complete the objective 'Find Waltz'."],
        ["Find Anything Interesting?", "Open all Airdrops."],
        ["First Shot", "Use an Inhibitor for the first time."],
        ["Fit as a Fiddle", "Max out your Health."],
        ["Flag Burning", "Clear your first Bandit Camp."],
        ["Get Outta My House!", "Complete Main Quest 11: 'A Place To Call Home'."],
        ["Get the Point?", "Kill 50 enemies with a Spear."],
        ["Going Down", "During Main Quest 22: 'X13', complete the objective 'Get to X13'."],
        ["Good Night & Good Luck", "Survive your first night."],
        ["Herzlich Wilkommen!", "Enter the Bazaar."],
        ["Into the Unknown", "Reach Villedor."],
        ["Ironheart", "Max out your Stamina."],
        ["It Wasn't That Hard, Was It?", "Defeat your first GRE Anomaly."],
        ["Known Associate", "Complete Main Quest 18 ('Nightrunners' for Survivors / 'Empire' for Peacekeepers)."],
        ["Light in the Darkness", "Activate your first Electrical Substation."],
        ["Lightning Reflexes", "Perform a Perfect Block 10 times in a row without taking damage."],
        ["Man On a Mission", "Meet all your Sparker love interests."],
        ["Modder", "Modify your weapons at least 50 times."],
        ["Municipal Services", "Assign all Facilities."],
        ["My Friend, Ciro", "(Bloody Ties DLC) Reach the story beat with Ciro."],
        ["Nemesis", "Meet Skullface"],
        ["Night Hunter", "Kill a Volatile."],
        ["Night of Terrors", "(Bloody Ties DLC) Survive the Night of Terrors during the mission 'Fame or Infamy'."],
        ["Oh, So This Is How It Works!", "Modify your weapon for the first time."],
        ["On the Trail of the Enemy", "Complete Main Quest 9 ('Revolution' for Survivors / 'Into the Dark' for Peacekeepers)."],
        ["Parkour Master", "Achieve maximum Parkour Proficiency."],
        ["Revenants", "Defeat all GRE Anomalies."],
        ["Sancho Panza", "Activate your first Windmill."],
        ["Skullcrusher", "(Bloody Ties DLC) Meet Skullface (after the fight in the empty pool)."],
        ["Slowpoke!", "Lose the maximum level of Chase."],
        ["Street Art Aficionado", "Discover all Graffiti Tag Collectibles."],
        ["Tanning Salon", "Use the UV Flashlight to kill a Viral."],
        ["Terminal Headache", "Perform 50 headshots with a ranged weapon."],
        ["That's Teamwork!", "Kill 100 enemies while playing with at least 2 other players."],
        ["The Madman of Villedor", "Earn a gold medal in all 'Madmen of Villedor' trials."],
        ["Tickets, Please!", "Use a Metro Station to Fast Travel."],
        ["True Champion", "Earn a gold medal in all Carnage Hall shows."],
        ["True Nightrunner", "Complete all Nightrunner Trials."],
        ["Tube Map", "Activate all Metro Stations."],
        ["Tunnel Entrance", "Activate your first Metro Station."],
        ["Ultramarathon", "Travel at least 960km."],
        ["Under Pressure", "Activate your first Water Tower."],
        ["We Will Be Heard!", "Complete Main Quest 16: 'Broadcast' (activate the rooftop transmitter)."],
        ["Who Wants To Be a...", "Collect 1,000,000 in Old World Money."],
        ["You Never Forget Your First...", "Craft your first item."],
        ["You're Going Down!", "Perform 50 takedowns."],
        ["Your World, Your Rules", "Complete the game with any ending."],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
