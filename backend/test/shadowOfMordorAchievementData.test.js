import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shadow-of-mordor.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 241930 (fetched through this app's own services/steamApi.js).
// 63 of 74 ship a real, official Steam description, quoted
// verbatim below. The 11 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers kept
// spoiler-light), and feat conditions cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("shadow-of-mordor");

test("getPlannerData('shadow-of-mordor') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for shadow-of-mordor");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Middle-earth: Shadow of Mordor achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Middle-earth: Shadow of Mordor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 officially-described Middle-earth: Shadow of Mordor achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Bring_It_Down",
        "Flashback",
        "Lithariel",
        "Made_In_Mordor",
        "Ratbag",
        "The_Banishing",
        "The_Black_Hand",
        "The_Great_White",
        "The_Udun_Story",
        "The_Tower",
        "Betrayed",
    ]);

    assert.strictEqual(hiddenApinames.size, 11, "sanity check - Middle-earth: Shadow of Mordor has 11 hidden achievements");

    const officialAchievements = [
        ["A Graug's Heel", "Capitalize on a Warchief's Fear."],
        ["A Mighty Doom", "Acquire a level 25 Rune."],
        ["A New Master", "Brand a Captain while in combat."],
        ["A Short Introduction", "Begin a new hunt with Torvin."],
        ["And it Burns, Burns, Burns", "Use the Detonate ability to burn 50 uruks."],
        ["Battle Forged", "Maximize the power of the Ring by completing all of the One Ring missions."],
        ["Bearer of the Shining Lamp", "Collect 100% of the Ithildin."],
        ["Beyond Epic", "Get a Level 30 Rune in Test of the Ring."],
        ["Black Celebration", "Poison a Captain at his own Feast."],
        ["Burning Shadow", "Shadow Brand 20 Uruks."],
        ["Burning Vengeance", "Perform an Execution on a flaming Berserker."],
        ["Crowned with Living Light", "Collect 50% of the Ithildin."],
        ["Divide and Conquer", "Eliminate the bodyguards of two Warchiefs, then draw them out and kill them."],
        ["Dominion", "Wraith Flash Dominate 50 Uruks."],
        ["Eregion Reforged", "Build all the Forge Towers in Udun."],
        ["Fire of Justice", "Complete all Urfael Legend Missions."],
        ["Fly you fools!", "Make 20 uruks flee by dropping Morgai Fly nests."],
        ["From Shadow to Shadow", "Stealth Brand a Captain."],
        ["Ghûls Gone Wild", "Kill a Graug by dispatching your Ghûls on him."],
        ["Height of Despair", "Use Strike From Above while at least 60 feet above your target."],
        ["Hot Flashes", "Catch a Ghûl Matron on fire during the Lord of the Hunt campaign."],
        ["I Had To Put Him Down", "Kill a Caragath with an Execution."],
        ["Iron of Death", "Issue a Death Threat, and then successfully kill the target."],
        ["Jaws of Death", "Attract caragors with bait 5 times."],
        ["Jaws of Shadow", "Complete 25 Caragath Stealth Kills."],
        ["Legend of Shadow", "Complete a Dagger Mission and begin growing the legend of Acharn."],
        ["Legend of the Maker", "Complete a Bow Mission and begin growing the legend of Azkâr."],
        ["Legend of Vengeance", "Complete a Sword Mission and begin growing the legend of Urfael."],
        ["Liberator", "Complete all Outcast Rescue Missions."],
        ["Lord and Master", "Brand all 5 Warchiefs."],
        ["Lord of the Ring", "Complete all objectives in the Test of The Ring."],
        ["Master of the Wilds", "Complete all Hunting Challenges."],
        ["Memories of Eregion", "Activate all Forge Towers."],
        ["No Power in Numbers", "Help a Captain survive a Recruitment Power Struggle, and then kill him and all his new recruits."],
        ["Nom Nom Nom!", "Eat a captain with a Wretched Graug."],
        ["O Mother, Where Art Thou?", "Have 20 Branded Ghûls at one time."],
        ["Paid in Blood", "Unlock 4 Dagger Rune slots."],
        ["Paths of the Dead", "Collect 25% of the Artifacts."],
        ["Power Vacuum", "Kill all 5 Warchiefs before any uruk take their place."],
        ["Ranger of Ithilien", "Complete all Survivalist Challenges."],
        ["Rattle the Hive", "Bait 10 Ghûl mounds."],
        ["Repaid in Blood", "Complete a Vendetta Mission."],
        ["Rise and Fall", "After an uruk kills you to become a Captain, help him become a Warchief, then kill him."],
        ["Scout of the Morannon", "Successfully complete a Survivalist Challenge."],
        ["Shadows of the Ancient Past", "Collect 100% of the Artifacts and listen to their memories."],
        ["Stinking Rebels", "Brand 5 Bodyguards of a Warchief, turning them against him in combat."],
        ["Strike True", "Unlock 2 Bow Rune slots."],
        ["The Cold Light", "Unlock 3 Sword Rune slots."],
        ["The Collector", "Have a dominated Caragath, Wretched Graug and Spitter Ghûl simultaneously."],
        ["The Flames Make It Go Faster", "Activate the Blazing Steed."],
        ["The Free Folk", "Complete an Outcast Rescue Mission."],
        ["The Hunt is my Mistress", "Complete all objectives in the Test of the Wild."],
        ["The Last Shadow", "Complete all Acharn Legend Missions."],
        ["The Maker's Bow", "Complete all Azkâr Legend Missions."],
        ["The Most Dangerous Game", "Defeat all the Beastmaster Warchiefs."],
        ["The Scouring of Mordor", "Challenge the Dark Lord in Mordor."],
        ["The Silver Fist", "Brand 20 Uruks in 60 seconds."],
        ["The Spirit of Mordor", "Start a Riot by commanding a Warchief to attack another Warchief."],
        ["The White Rider", "Liberate 30 slaves in 180 seconds while riding a caragor."],
        ["Thrill of the Hunt", "Successfully complete 4 Hunting Challenges."],
        ["Unleashed", "Free 5 caragors from cages."],
        ["Wretched Retch", "Use a Wretched Graug's Projectile Vomit on an Uruk Captain or Warchief."],
        ["You Will Obey", "Make an uruk yours."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 11 hidden Middle-earth: Shadow of Mordor achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Bring_It_Down", "Gorthaur the Cruel"],
        ["Flashback", "The Bright Master"],
        ["Lithariel", "Beyond Hope"],
        ["Made_In_Mordor", "To Rule them All"],
        ["Ratbag", "Ratbag the Great and Powerful"],
        ["The_Banishing", "The White Wizard"],
        ["The_Black_Hand", "The Hand is Severed"],
        ["The_Great_White", "For My Brother"],
        ["The_Udun_Story", "The Hammer Falls"],
        ["The_Tower", "The Tower Crumbles"],
        ["Betrayed", "Betrayed"],
    ];

    assert.strictEqual(names.length, 11, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
