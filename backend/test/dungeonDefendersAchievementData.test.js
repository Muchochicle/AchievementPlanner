import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dungeon-defenders.json - 118 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 65800 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dungeon-defenders");

test("getPlannerData('dungeon-defenders') returns real planner data with 118 curated achievements", () => {

    assert.ok(game, "expected real planner data for dungeon-defenders");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 118);

});

test("every Dungeon Defenders achievement has a unique id from 1 to 118 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 118 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 118);
    assert.strictEqual(new Set(apinames).size, 118);

});

test("every Dungeon Defenders achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 118 Dungeon Defenders achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["88 Core", "Completed Warping Core on at least Medium Difficulty"],
        ["A Challenger Approaches", "Completed All Challenges on INSANE Difficulty!"],
        ["A Matter of Perspective", "Saw all four Hero endings"],
        ["A Taste of Victory", "Completed all Area 3 levels on any difficulty setting"],
        ["And This Is My Weapon", "You upgraded an Equipment to its maximum potential!"],
        ["Anniversary Defender", "You defended your Tavern against the horde!"],
        ["Boss Crusher", "You completed the Boss Rush Challenge!"],
        ["Brute Force", "Earned the Gunslinger Award on all Missions"],
        ["Catch 'em All", "Stored all Pet types in your Item Box or on your Heroes"],
        ["Core Cardio", "Completed Moving Core on at least Medium Difficulty"],
        ["Core Destroyer", "Completed Assault on at least Medium Difficulty"],
        ["Crystalline Resurgence", "You did battle once more in the mysterious lands where you once rescued the Legendary Huntress, Monk, and Apprentice!"],
        ["Dancing in the Rain", "Completed Raining Goblins on Insane Difficulty"],
        ["Daredevil", "Earned Skin of Your Teeth Award on 6 Missions"],
        ["Defender of Etheria", "Reached Hero Level 70"],
        ["Defense Is the Best Offense", "Reached Wave 10 on all levels in Pure Strategy on at least Medium Difficulty"],
        ["Divine Intention", "Picked up a Godly Weapon"],
        ["Djinn Recruiter", "You assembled an army to win the 'War of the Djinn' Challenge!"],
        ["Dungeon Crawler", "Completed all levels on any difficulty setting"],
        ["Dungeon Defender", "Completed all levels on Insane! Congratulations Brave Dungeon Defender!"],
        ["Dungeon Raider", "Completed all levels on Hard"],
        ["Dungeon Raider", "You completed every mission in the Assault Mission Pack!"],
        ["Ella, Ella", "Completed Raining Goblins on at least Medium Difficulty"],
        ["Eternia Shard Recovered: Blue", "You retrieved the Blue Lost Eternia Shard from the scorching sands of Moraggo!"],
        ["Eternia Shard Recovered: Purple", "You retrieved the Purple Lost Eternia Shard from the depths of Mistymire Forest!"],
        ["Eternia Shard Recovered: Red", "You retrieved the Red Lost Eternia Shard from the billowing clouds of Sky City!"],
        ["Eternia Shard Recovered: Yellow", "You retrieved the Yellow Lost Eternia Shard from the cold waters of Aquanos!"],
        ["EV Reprogrammer", "You assaulted the Lab and eliminated the squad of corrupted EV's!"],
        ["Friends Forever", "Completed Unlikely Allies on at least Medium Difficulty"],
        ["From Fire with Brimstone", "Completed all Area 1 levels on Insane"],
        ["From The Depths", "Completed all Area 1 levels on any difficulty setting"],
        ["Gold Blitz", "Completed Treasure Hunt on Insane Difficulty"],
        ["Gold Rush", "Completed Treasure Hunt on at least Medium Difficulty"],
        ["Good Student", "Completed the Tutorial. You deserve a cookie!"],
        ["Greater Turkey Hunter", "You purged the ruins of Karathiki of all Turkey interlopers!"],
        ["Group Hug", "Raised a Hero of each type to Level 70"],
        ["Hardcore Mythical Defender", "You completed every mission in the original campaign on Nightmare difficulty without dying. You are a god."],
        ["Hero of Water", "You journeyed deep into the ocean and reclaimed the legendary Temple of Water from the horde of monsters!"],
        ["Heroes to the Rescue", "You journeyed to the Crystalline Dimension, rescued the Legendary Heroes, and defeated an ultimate evil!"],
        ["I've Got Monsters in My Pocket", "You collected every Pet in all Etheria in your Item Box!"],
        ["In A Fowl Mood", "Completed Chicken on at least Medium Difficulty"],
        ["Iron Man", "Reached Survival Wave 10 on Insane Difficulty"],
        ["Jingled All the Way", "Delivered all the presents, and saved Santa Tavernkeep from the vile clutches of Mega-Snowman in the 'Etherian Holiday Extravaganza Challenge Mission'!"],
        ["Kobold Exterminator", "Completed Zippy Terror on Insane Difficulty"],
        ["Legendary Defender", "You have earned every Dungeon Defenders Accomplishment! Trendy salutes you!"],
        ["Master Banker", "Stored 15,000,000 Mana in your Mana Bank"],
        ["Mastermind", "Earned the Master Strategist Award on all Missions"],
        ["Monster Madness", "Completed Death From Above on Insane Difficulty"],
        ["Monster Mania", "Completed Death From Above on at least Medium Difficulty"],
        ["Mythical Defender", "You completed every mission in the original Campaign on Nightmare difficulty! Are you a god?"],
        ["Mythical Dungeon Raider", "You completed every mission in the Assault Mission Pack on Nightmare Difficulty!"],
        ["Mythical Real Time Strategist", "Completed the Campaign and 3 Eternia Shards Missions only using summoned minions and Overlord mode for your entire team, except for the Final Wave... on Nightmare!"],
        ["Nightmare A Very Misty Christmas", "You returned to Mistymire for a very special celebration... on Nightmare!"],
        ["Nightmare Anniversary Defender", "You defended your Tavern against the horde... on Nightmare!"],
        ["Nightmare Boss Crusher", "You completed the Boss Rush Challenge... on Nightmare!"],
        ["Nightmare Crystalline Resurgence", "You did battle once more in the mysterious lands where you once rescued the Legendary Huntress, Monk, and Apprentice... on Nightmare!"],
        ["Nightmare Djinn Recruiter", "You assembled an army to win the 'War of the Djinn' Challenge... on Nightmare!"],
        ["Nightmare Eternia Shard Recovered: Blue", "You retrieved the Blue Lost Eternia Shard from the scorching sands of Moraggo... on Nightmare!"],
        ["Nightmare Eternia Shard Recovered: Purple", "You retrieved the Purple Lost Eternia Shard from the depths of Mistymire Forest... on Nightmare!"],
        ["Nightmare Eternia Shard Recovered: Red", "You retrieved the Red Lost Eternia Shard from the billowing clouds of Sky City... on Nightmare!"],
        ["Nightmare Eternia Shard Recovered: Yellow", "You retrieved the Yellow Lost Eternia Shard from the cold waters of Aquanos... on Nightmare!"],
        ["Nightmare EV Reprogrammer", "You assaulted the Lab and eliminated the squad of corrupted EV's... on Nightmare!"],
        ["Nightmare Exterminator", "You ventured deep into the infested ruins and drove out the monstrous infestation of wasps... on Nightmare!"],
        ["Nightmare Greater Turkey Hunter", "You purged the ruins of Karathiki of all Turkey interlopers... on Nightmare!"],
        ["Nightmare Hero of Water", "You journeyed deep into the ocean and reclaimed the legendary Temple of Water from the horde of monsters... on Nightmare!"],
        ["Nightmare Heroes to the Rescue", "You journeyed to the Crystalline Dimension, rescued the Legendary Heroes, and defeated an ultimate evil... on Nightmare!"],
        ["Nightmare Not So Silent Night", "You delivered Santa's goodies... and then took on the big man himself... on Nightmare!"],
        ["Nightmare Out Of This World", "You saved the moonbase from the enemy onslaught... on Nightmare!"],
        ["Nightmare Playin' Anticupid", "You successfully prevented hordes of mob matches in the Temple O' Love... on Nightmare!"],
        ["Nightmare Portal Protector", "You defended the portal against the rampaging Spider horde... on Nightmare!"],
        ["Nightmare Puzzle Solver", "You solved the 'Riddle of the Deep' Challenge... on Nightmare!"],
        ["Nightmare Slayer of Omenak", "You defended the ancient Omenak Cathedral from the goblin hordes and their Flying Mech... on Nightmare!"],
        ["Nightmare Swashbuckler", "You successfully defended Buccaneer Bay... on Nightmare!"],
        ["Nightmare Tinkerer's Defender", "You Defended the Tinkerer's Lab and cleared the way for EV's upgrade... on Nightmare!"],
        ["Nightmare Tomb of Etheria", "You dared to raid the Tomb of Etheria, and lived to tell the tale... on Nightmare!"],
        ["Nightmare Trial by Fire and Lightning", "You ventured into the heart of Embermount,  grounded the Harbingers and extinguished the flame of the mighty Phoenix... on Nightmare!"],
        ["Nightmare Winter Wonderland", "You survived the onslaught of the Holiday Guardians... on Nightmare!"],
        ["Not So Silent Night", "You delivered Santa's goodies... and then took on the big man himself!"],
        ["O Mighty Smiter!", "Wore a full set of Godly Items"],
        ["Obedience Training", "You raised a Pet to its maximum potential!"],
        ["Ogre Block Party", "Completed Ogre Crush on Insane Difficulty"],
        ["Out Of This World", "You saved the moonbase from the enemy onslaught!"],
        ["Perfectionist", "Earned the Flawless Victory Award on all Missions on at least Medium Difficulty"],
        ["Playin' Anticupid", "You successfully prevented hordes of mob matches in the Temple O' Love!"],
        ["Playin' Cupid", "You played matchmaker for the gender mobs on the Sky O' Love challenge, and defeated Mega Cupid!"],
        ["Playin' Mythical Cupid", "You played matchmaker for the gender mobs on the Sky O' Love challenge, and defeated Mega Cupid... on Nightmare!"],
        ["Portal Protector", "You defended the portal against the rampaging Spider horde!"],
        ["Pumpkin Party", "You completed the Halloween Spooktacular 2 Challenge!"],
        ["Pumpkin Party Nightmare", "You completed the Halloween Spooktacular 2 Challenge... on Nightmare!"],
        ["Pupil", "Reached Hero Level 10"],
        ["Puzzle Solver", "You solved the 'Riddle of the Deep' Challenge!"],
        ["Real Time Strategist", "Completed the Campaign and 3 Eternia Shards Missions using only summoned minions and Overlord mode for your entire team, except for the Final Wave."],
        ["Smithy", "You upgraded your first equipment. Keep it up!"],
        ["Speed Freak", "Completed Zippy Terror on at least Medium Difficulty"],
        ["Survivalist", "Reached Survival Wave 15 on Medium Difficulty"],
        ["Swashbuckler", "You successfully defended Buccaneer Bay!"],
        ["Team Effort", "Completed all levels with 4 active players on at least Medium Difficulty"],
        ["The Belly of the Beast", "Completed all Area 1 levels on Hard"],
        ["The Body of the Beast", "Completed all Area 2 levels on Hard"],
        ["The Crown of the Beast", "Completed all Area 3 levels on Hard"],
        ["Thick Skin", "Reached Survival Wave 20 on Medium Difficulty"],
        ["Through The Crowded Keep", "Completed all Area 2 levels on Insane"],
        ["Tinkerer's Defender", "You Defended the Tinker's Lab and cleared the way for EV's upgrade!"],
        ["To The Limit", "Wore a complete set of maximum level Equipments"],
        ["To The Lofty Summit", "Completed all Area 3 levels on Insane"],
        ["To The Rooftops", "Completed all Area 2 levels on any difficulty setting"],
        ["Tough Guy", "Reached Survival Wave 15 on Hard Difficulty"],
        ["Transcendent Challenge Champion", "You completed every original Challenge on Nightmare Hardcore difficulty. The gods weep before your awesome might!"],
        ["Transcendent Survivalist", "You achieved Nightmare Survival Victory on every Campaign mission, and are thus rewarded!"],
        ["Trial by Fire and Lightning", "You ventured into the heart of Embermount,  grounded the Harbingers and extinguished the flame of the mighty Phoenix."],
        ["True Nobility", "Earned the Lord Award on at least Medium Difficulty"],
        ["Ultimate Defender", "You earned every Dungeon Defenders Accomplishment through the Eternia Shards Campaign! Trendy bows before your might!"],
        ["Veteran", "Reached Hero Level 30"],
        ["Weapon Master", "Completed No Towers Allowed on Insane Difficulty"],
        ["Where's the Blueprints?", "Completed No Towers Allowed on at least Medium Difficulty"],
        ["Winter Wonderland", "You survived the onslaught of the Holiday Guardians!"],
        ["Wizard Hunter", "Completed Wizardry on at least Medium Difficulty"],
        ["You No Take Mushroom", "Completed Ogre Crush on at least Medium Difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 118, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
