import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/red-faction-armageddon.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 55110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("red-faction-armageddon");

test("getPlannerData('red-faction-armageddon') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for red-faction-armageddon");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Red Faction: Armageddon achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Red Faction: Armageddon achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Red Faction: Armageddon achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Taste of their Own", "Eliminate 10 enemies using one of their own turrets. (Path to War DLC Only)"],
        ["Air Superiority", "Clear a safe path to the Terraformer for Hale. (Path to War DLC Only)."],
        ["All For One, One For All", "Finish a 4 player Infestation game beyond wave 9 without anyone bleeding out."],
        ["Armored Cavalry", "Rescue the pinned-down Red Faction soldiers. (Path to War DLC Only)"],
        ["Back At Ya!", "Make an enemy kill themselves while shooting at your Shell."],
        ["Bird of Prey", "Allow no Red Faction to survive your attacks on their mountain base. (Path to War DLC Only)"],
        ["Boom Goes The Dynamite", "Kill 2 other enemies with a single exploding Berserker."],
        ["Breathe Easy", "Put an end to the threat, once and for all."],
        ["Bug Hunt", "Finish at least one wave on each map in Infestation."],
        ["Catch!", "Use the Magnet Gun to fling debris BACK at a Tentacle."],
        ["Cheater!", "Buy a Cheat."],
        ["Chronicler", "Listen to 40 Audio Logs."],
        ["Commando", "Finish waves 1 through 20 on any map in Infestation."],
        ["Crack Shot", "Kill a Wraith before it re-stealths."],
        ["Crusader", "Kill 175 enemies while in the L.E.O. exoskeleton."],
        ["Exterminator", "Destroy 100 Pods while piloting the Mantis."],
        ["Family Business", "Defeat the Mantis."],
        ["Field Surgeon", "Perform Revival 25 times in Infestation."],
        ["Full of Malice", "Kill Mallus. (Path to War DLC Only)"],
        ["Haymaker", "Kill 5 enemies in one shot with Impact."],
        ["Hit 'N Run", "Kill an enemy by ramming them with the Inferno GX."],
        ["Hold Still", "Kill 6 enemies in one use of Shockwave."],
        ["Honorary Mason", "Finish waves 1 through 30 on any map in Infestation."],
        ["I Need A Nap", "Finish the Single Player game on Insane Difficulty."],
        ["I'm All You've Got", "Defend the Red Faction."],
        ["In. The. Face!", "Kill one of each enemy type with the Maul."],
        ["It's All In The Wrist", "Send an enemy at least 30 meters with Impact."],
        ["Knock, Knock", "Open up the secret entrance."],
        ["Liftoff", "Send an enemy at least 50 meters with the Magnet Gun."],
        ["Lock And Load", "Keep Berserk active for at least 21 seconds in one use."],
        ["Losses", "Make it through to the lair."],
        ["Martian Can Opener", "Buy every Upgrade."],
        ["Martian Drive-By", "Kill 100 enemies while in the Marauder Scout Walker."],
        ["Martian Matchmaker", "Fire an enemy into another enemy with the Magnet Gun."],
        ["Money Well Spent", "Buy out any one Upgrade ring."],
        ["Must Go Faster", "Travel to the Marauder homelands."],
        ["Nanergy!", "Gather 25,000 total salvage."],
        ["Nuke It from Orbit", "Wipe out the Cultist military camp. (Path to War DLC Only)"],
        ["Old Friends, Older Enemies", "Safely escort Winters through the depths."],
        ["One Big, Ugly Motha…", "Defeat the source of it all."],
        ["Ooooh Yeah!", "Kill 5 enemies with one L.E.O. shoulder bash."],
        ["Plan B", "Find out how to reach the lair."],
        ["Salvager", "Find 200 piles of salvage."],
        ["Secrets Long Buried", "Remove the Seal."],
        ["Soldier", "Finish waves 1 through 10 on any map in Infestation."],
        ["Stick Around", "Get 20 kills with the Sharpshooter. (Path to War DLC Only)"],
        ["Survival Of The Fittest", "Make it to the surface."],
        ["Swath of Destruction", "Reunite Sgt. Winters with the Red Faction. (Path to War DLC Only)"],
        ["That Coulda Gone Better", "Finish the Single Player game on Hard Difficulty."],
        ["Things Fall Apart", "Destroy the Water Filtration Plant."],
        ["Triple Threat", "End the three-way battle between yourself, the aliens, and the Cultists. (Path to War DLC Only)"],
        ["Unto The Breach", "Gain entry into the Terraformer."],
        ["Vanguard", "Escort the convoy."],
        ["We're Not Alone", "Make it back to civilization."],
        ["Weather The Storm", "Destroy the Jamming Devices."],
        ["What Is Best In Life?", "Perform melee finishers on 25 Creepers (single player only)."],
        ["Wrecking Ball", "Get 20 kills with the Shard Cannon. (Path to War DLC Only)"],
        ["Zero G War", "Kill 50 Shockwaved enemies before they hit the ground."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
