import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/doom-2016.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 379720 (fetched through this app's own services/steamApi.js).
// 49 of 54 ship a real, official Steam description, quoted
// verbatim below. The 5 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// PowerPyx / XboxAchievements and the DOOM/RE wikis, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("doom-2016");

test("getPlannerData('doom-2016') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for doom-2016");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every DOOM (2016) achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every DOOM (2016) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 officially-described DOOM (2016) achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ach_1",
        "ach_2",
        "ach_3",
        "ach_5",
        "ach_30",
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - DOOM (2016) has 5 hidden achievements");

    const officialAchievements = [
        ["A Gift from Beyond", "Earn a Rune"],
        ["A Memorable Performance", "Earn a Gold Rating in a Multiplayer Match"],
        ["A Toe into Madness", "Complete The UAC on Ultra-Nightmare"],
        ["Arcade Stockpile", "Collect 20 bonus lives or relics in Arcade Mode"],
        ["Argent Fiend", "Fully upgrade Health, Armor, and Ammo capacity on a single campaign run."],
        ["Argent Overload", "Fully upgrade Health, Armor, or Ammo capacity"],
        ["Beauty is Pain", "Play a Multiplayer Match with a piece of Cyber-Demonic armor equipped"],
        ["Bowling for Gibs", "Perform a MultiKill with the Spectre demon in Multiplayer"],
        ["Butcher", "Perform 200 Glory Kills"],
        ["Combat tested, Doomguy approved", "Reach Level 5 in Multiplayer"],
        ["Computing with Style", "Play a Multiplayer Match with a piece of Robotic Armor equipped"],
        ["E1M1", "Complete the first mission of the campaign"],
        ["Eat Your Vitamins", "Kill 10 enemies with the Cacodemon in Multiplayer"],
        ["Entryway", "Complete the SnapMap Basic and Advanced Tutorials"],
        ["Every Nook and Cranny", "Find all Collectibles"],
        ["Fashion Fanatic", "Play a Multiplayer Match with a piece of Evil Cultist armor equipped"],
        ["Filling the Trophy Case", "Earn every medal type in Arcade Mode in one run"],
        ["Go for the Gold", "Earn a gold rating in Arcade Mode"],
        ["Head First", "Kill 10 enemies with the Spectre demon in Multiplayer"],
        ["Historian", "Find all Data Logs"],
        ["Hot Swapper", "Acquire all weapon mods"],
        ["IDDQD", "Upgrade all Runes"],
        ["IDKFA", "Earn the Masteries for all weapon mods"],
        ["Insult to Injury", "Use a taunt from Expansion 3 during a Multiplayer Match"],
        ["IPXSETUP.EXE", "Win a Multiplayer match"],
        ["Juicin' it up", "Kill 150 enemies while using Power Ups"],
        ["Knee-Deep in the Dead", "Complete the campaign on 'I'm Too Young to Die', 'Hurt Me Plenty', 'Ultra Violence', or 'Nightmare'."],
        ["Like Nobody is Watching", "Use a taunt from Expansion 2 during a Multiplayer Match"],
        ["Marked for Death", "Kill 10 enemies with the EMG Mark V Pistol in Multiplayer"],
        ["Momentum Shift", "Upgrade a Rune"],
        ["Motion in the Explosion", "Kill 5 enemies with the Kinetic Mine in Multiplayer"],
        ["No Rest for the Living", "Play 5 published SnapMaps"],
        ["On Track", "Complete a tracked challenge in a Multiplayer Match"],
        ["Overclocked", "Fully upgrade all Praetor Suit categories on a single campaign run."],
        ["Reaping all the Benefits", "Kill 10 enemies with the Reaper in Multiplayer"],
        ["Rip and Tear", "Glory Kill all common enemy types in the campaign."],
        ["Shareware", "Create and publish a SnapMap"],
        ["Sitting Duck", "Use a taunt from Expansion 1 during a Multiplayer Match"],
        ["Slotted for Success", "Unlock all Multiplayer Runes"],
        ["Specialist", "Earn the Mastery for a weapon mod"],
        ["Successful Launch", "Kill 10 enemies with the Grenade Launcher in Multiplayer"],
        ["Tenderizing the Crops", "Kill 10 enemies with the Harvester demon in Multiplayer"],
        ["The Circle is Complete", "Earn all Runes"],
        ["Thorough Shopper", "Complete all Challenges for a single mission."],
        ["Threat Assessment", "Detect 20 enemies using the Threat Pulse in Multiplayer"],
        ["Timing is Everything", "Use explosive barrels to kill 100 enemies"],
        ["Tinkering", "Fully upgrade a Praetor Suit category."],
        ["Up Close and Personal", "Kill 50 enemies using the Chainsaw"],
        ["What Else Ya Got?", "Complete all Mission Challenges"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 hidden DOOM (2016) achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ach_1", "Shoot it Until it Dies"],
        ["ach_2", "Outnumbered? No Problem"],
        ["ach_3", "Who's Next?"],
        ["ach_5", "Into the Unknown"],
        ["ach_30", "An Old Friend"],
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
