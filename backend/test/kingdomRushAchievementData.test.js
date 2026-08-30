import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-rush.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 246420 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("kingdom-rush");

test("getPlannerData('kingdom-rush') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-rush");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Kingdom Rush achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Kingdom Rush achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 74 Kingdom Rush achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["50 shots, 50 kills", "Snipe 50 enemies."],
        ["AC/DC", "Kill 300 enemies with electricity."],
        ["Arachnophobia", "Defeat Sarelgaz and its minions."],
        ["Are you not entertained?", "Have a single barbarian kill 10 enemies."],
        ["Armageddon", "Use Rain of Fire 5 times in a single stage."],
        ["Army of One", "Defeat 9 legions before they replicate."],
        ["Axe rain!", "Throw 500 or more axes."],
        ["Beam me up, Scotty", "Teleport 250 or more enemies."],
        ["Bloodlust", "Kill 500 enemies."],
        ["Cannon Fodder", "Send 1.000 soldiers to their deaths."],
        ["Champion of Linirea", "Train a hero up to level 5."],
        ["Clustered", "Drop 1.000 or more bomblets with the cluster bomb."],
        ["Constructor", "Build 30 towers."],
        ["Coolrunning", "Defeat 10 Troll Pathfinders while they're treading on ice."],
        ["Cowabunga", "Find the ninja master rat."],
        ["Daring", "Call 10 waves early."],
        ["Death from above", "Kill 100 enemies with meteor showers."],
        ["Die Hard", "Have your soldiers regenerate a total of 50.000 life."],
        ["Don't feed the troll", "Defeat Ulguk-Hai the Troll Warlord."],
        ["Dust to Dust!", "Disintegrate 50 or more enemies."],
        ["Elementalist", "Summon 5 rock elementals in any one stage."],
        ["Energy Network", "Build 4 Tesla towers in any stage."],
        ["Engineer", "Build 100 towers."],
        ["Entangled", "Hold 500 or more enemies with Wrath of the Forest."],
        ["Fearless", "Call all waves early in a single mission."],
        ["First Blood", "Kill one enemy."],
        ["Forest Diplomacy", "Recruit max elves at The Silveroak Outpost."],
        ["Free Fredo", "Help Fredo escape."],
        ["G.I. Joe", "Train 1.00 soldiers."],
        ["Game of Crowns", "Defeat Lord Blackburn to avoid war between kingdoms."],
        ["Great Defender", "Complete the campaign."],
        ["Hell-o!", "Defeat Moloch the Demon Overlord."],
        ["Heroic Defender", "Complete all heroic stages."],
        ["Holy Chorus", "Have your Paladins perform 100 Holy Strikes."],
        ["Home Improvement", "Upgrade all basic tower types to level3."],
        ["I'am the law", "Do not let The Kingpin escape."],
        ["Impatient", "Call a wave within 3 seconds of the icon showing up."],
        ["Imperial Saviour", "Have at least 3 Imperial Guards survive in the Citadel."],
        ["Indecisive", "Sell 5 towers in a single mission."],
        ["Iron Defender", "Complete all iron stages."],
        ["Is he dead yeti?", "Defeat J.T."],
        ["Legend of Linirea.", "Train a hero up to max level."],
        ["Like a Henderson", "Free the sasquatch on the Icewind Pass."],
        ["Lumberjack", "Defeat Greenmuck and its minions."],
        ["Medic!", "Have your Paladins heal a total of 7.000 life."],
        ["Nessie", "Discover the hidden monster under water."],
        ["Nevermore", "Capture the attention of the mysterious crow."],
        ["Nuts and Bolts", "Defeat The Juggernaut"],
        ["Orcs must die", "Defeat Gul'Thak and its minions."],
        ["Ovinophobia", "Kill 10 or more sheep with your hands."],
        ["Plants vs Trolls", "Find the 5 legendary lost ice-shrooms."],
        ["Ratatouille", "Kill 15 Wererats before they sicken any soldier."],
        ["Real Estate", "Sell 30 towers."],
        ["Rocketeer", "Shoot 100 missiles."],
        ["Scrat's Meal", "Find the elusive acorn."],
        ["Shepherd", "Polymorph 50 enemies into sheep."],
        ["Slayer", "Kill 2.500 enemies"],
        ["Specialist", "Build all 8 towers specializations."],
        ["Spore", "Kill 25 Shrooms without them poisoning your soldiers."],
        ["Starry", "Earn 15 stars."],
        ["Still counts as one", "Have your Elves deal 10000 points of damage."],
        ["Sunburner!", "Fire the Sunray 20 times."],
        ["Super Mario", "Earn 30 stars."],
        ["Super Mushroom", "Defeat Myconid, the Rotten Fungus."],
        ["Superstar", "Earn 45 stars."],
        ["Supreme Defender", "Complete the campaign in Veteran mode."],
        ["Tactician", "Change soldiers' rally point 200 times."],
        ["Terminator", "Kill 10.000 enemies."],
        ["The Architect", "Build 150 towers."],
        ["This is the end", "Defeat Vez'nan."],
        ["Toxicity", "Kill 50 enemies by poison damage."],
        ["Twin Rivers Angler", "Catch a fish."],
        ["We dine in hell!", "Have your soldiers survive the explosion of 300 demons."],
        ["What's that?", "Open 5 information cards."],
    ];

    assert.strictEqual(officialAchievements.length, 74, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
