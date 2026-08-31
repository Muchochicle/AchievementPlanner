import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/project-winter.json - 78 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 774861 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("project-winter");

test("getPlannerData('project-winter') returns real planner data with 78 curated achievements", () => {

    assert.ok(game, "expected real planner data for project-winter");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 78);

});

test("every Project Winter achievement has a unique id from 1 to 78 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 78 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 78);
    assert.strictEqual(new Set(apinames).size, 78);

});

test("every Project Winter achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 78 Project Winter achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ambusher", "Successfully convert a survivor during the Blackout event"],
        ["Assassin", "Knock down 10 survivors as a traitor"],
        ["Baby Steps", "Complete Basic Practice"],
        ["Begone, Devil", "Use a Rosary to protect against a conversion"],
        ["Better Late than Never", "Escape within the last minute of the round"],
        ["Blacksmith", "Craft 20 items in one game"],
        ["Brave New World", "Explore the entire map in one game"],
        ["Breaking New Ground", "Complete a sabotage action in the single-player Practice mode."],
        ["Bunker Buster", "Sabotage 3 bunkers in a single game"],
        ["Clandestine", "Use 10 traitor airdrop abilities"],
        ["Clear Your Cache", "Open 10 traitor caches"],
        ["Close Quarters", "Do not pick up or craft any ranged weapons for one game "],
        ["Cooperation is Key", "Operate a co-op console 25 times"],
        ["Dark Chef", "Craft 20 poisoned pot pies"],
        ["Double Agent", "As a Survivor, kill a Traitor, swap clothes with their corpse, then kill the other Traitor."],
        ["Dynamic Duo", "Escape on a vehicle with one other survivor"],
        ["Et tu, Brute?", "Kill a survivor as a traitor"],
        ["Exquisite Chef", "Cook 30 items in one game"],
        ["Fool Me Once...", "Get ambushed by wolves in bunkers twice in one game"],
        ["Gatherer", "Harvest 200 berries"],
        ["Get to Da Choppa", "Escape on a helicopter"],
        ["Gold Star", "Complete 10 bonus objectives"],
        ["Gone to the Dark Side", "Complete your bonus objective and get a traitor win while playing as the Yeti"],
        ["Gunsmith", "Craft 20 firearms"],
        ["Hands-Off Killer", "As a Traitor, have no Survivors living without directly killing any of them"],
        ["Health Freak", "Eat 100 roots"],
        ["Hive Mind", "Convert 3 survivors in a single round as the Whisperer"],
        ["Home Run", "Kill an animal with a thrown item"],
        ["Hunter", "Kill 50 animals"],
        ["Hypocritic Oaf", "Damage a player by throwing a first aid kit at them."],
        ["I'm a Survivor", "Escape as a survivor"],
        ["Immune!", "Remove the poison effect using a first aid kit 5 times"],
        ["In Pursuit of Truth", "Help open the truth serum bunker 10 times"],
        ["Is There Anybody Out There?", "Call the rescue from the cabin radio"],
        ["Jumping on the Bandwagon", "Escape on the ground vehicle"],
        ["Last One Standing", "Be the only one left alive"],
        ["Leaving on a Jet Plane", "Escape on the escape pod"],
        ["Light in the Dark", "Use a flashbang during the Blackout event"],
        ["Little Red Hen", "As a survivor, hit the 'repair' button on both objectives, and call for the rescue"],
        ["Lumberjack", "Chop down 100 trees"],
        ["Master of Disguise", "Swap clothes with 20 corpses"],
        ["Meat is Murder", "Do not kill any animals for one game"],
        ["Miner", "Destroy 75 rocks"],
        ["No One Left Behind", "Escape on a vehicle with five other survivors"],
        ["On the Straight and Narrow Path", "Be the only survivor alive at the end of a round that has not been converted"],
        ["One is the Loneliest Number", "Escape on a vehicle by yourself"],
        ["Over-Achiever", "Complete 25 bonus objectives"],
        ["Pacifist", "Play 10 games without killing anyone"],
        ["Picking a Side", "Win a round with the survivors as the Yeti"],
        ["Poisoner", "Poison 10 interactable objects"],
        ["Practice Makes Perfect", "Escape in the single-player Practice mode."],
        ["Psychological Warfare", "Use the truth serum 3 times on a player while playing as a traitor"],
        ["Radio Silence", "Do not pick up a portable radio for one game"],
        ["Red October", "Escape on the submarine"],
        ["Saboteur", "Conduct 10 sabotage actions"],
        ["Super Traitor", "As a Traitor, kill the other Traitor."],
        ["Take a Hike", "Travel a long distance on foot in the single-player Practice mode."],
        ["Tell Our Story", "Be the only one to escape in a game"],
        ["Testing Physical Limits", "Stay outside for the entire duration of blizzard events for one game"],
        ["The Deceit is Real", "As a traitor, hit the 'repair' button on 10 survivor objectives"],
        ["The Elusive Cryptid", "Survive to the end of a round as the Yeti"],
        ["The Fallen Will Be Remembered", "Escape on a vehicle with four other survivors"],
        ["The Greatest Hunt", "Take down a wild animal during the Witching Hour event"],
        ["The Grey", "Kill 3 wolves with your bare hands in a single game"],
        ["The More the Merrier", "Escape on a vehicle with three other survivors"],
        ["The Possessed", "Convert 3 survivors in a single round as the Demon"],
        ["The Truth Shall Set You Free", "Use the truth serum 3 times on a player while playing as a survivor"],
        ["Third Wheel", "Escape on a vehicle with two other survivors"],
        ["Tight Schedule", "Escape within 15 minutes from the start of the game"],
        ["Tis' but a Flesh Wound", "Survive to the end and escape without using any healing items"],
        ["Unlock and Load", "Open bunkers in the single-player Practice mode."],
        ["Verticality", "Escape on the VTOL"],
        ["Vigilante Justice", "As a Survivor, kill two Traitors in a single game."],
        ["Well Done", "Complete 5 bonus objectives"],
        ["What's in the Box?", "Complete the traitor team goal without opening a single traitor cache"],
        ["Where Is Your God Now?", "Break a survivor's Rosary"],
        ["Women and Children First", "Be the last survivor to board an escape"],
        ["You Go First", "Escape on the second vehicle called from the cabin radio"],
    ];

    assert.strictEqual(officialAchievements.length, 78, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
