import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/forager.json - 103 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 751780 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("forager");

test("getPlannerData('forager') returns real planner data with 103 curated achievements", () => {

    assert.ok(game, "expected real planner data for forager");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 103);

});

test("every Forager achievement has a unique id from 1 to 103 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 103 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 103);
    assert.strictEqual(new Set(apinames).size, 103);

});

test("every Forager achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 103 Forager achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accessory Collector", "Collect every accessory"],
        ["Acrobat", "Dodge 10 attacks"],
        ["Addicted", "Play the game for 3 hours"],
        ["Ancient Astronomer", "Solve the Ancient Galaxy puzzle"],
        ["Angler", "Catch 50 fish"],
        ["Artifact Collector", "Collect every artifact"],
        ["Artisan", "Craft 10,000 items"],
        ["Big Hoarder", "Have 5,000 items in your inventory"],
        ["Billionaire", "Have 1,000,000,000 coins"],
        ["Bomberman", "Have 3 bombs active at once"],
        ["Bone Regicide", "Defeat the Skeleton King"],
        ["Bug Catcher", "Bottle 100 critters"],
        ["Champion", "Open a skull chest"],
        ["Coin Collector", "Make 1 million coins using banks"],
        ["Completionist", "Achieve every other feat"],
        ["Constructor", "Build 200 structures"],
        ["Curator", "Complete every museum bundle"],
        ["Daredevil", "Dodge a lethal attack"],
        ["Demon Hunter", "Complete the Fire Temple"],
        ["Destroyer", "Kill 100 enemies"],
        ["Digger", "Dig up 50 items"],
        ["Diligent", "Complete every NPC quest"],
        ["Disgusting", "Have 100 poop in your inventory"],
        ["Druid Helper", "Help the Druid"],
        ["Duelist", "Win the ice wizard challenge"],
        ["Engineer Helper", "Help the Engineer"],
        ["Enlightened", "Find every secret room"],
        ["Expansionist", "Own 5 lands"],
        ["Extrovert", "Talk to every NPC"],
        ["Fairy Helper", "Help the Fairy Queen"],
        ["Fire Astronomer", "Solve the Fire Galaxy puzzle"],
        ["Fox Helper", "Help the Fox"],
        ["Frozen Astronomer", "Solve the Frozen Galaxy puzzle"],
        ["Galactic", "Get a Cosmic gear item"],
        ["Gemologist", "Have one of each gem in your inventory"],
        ["Ghost Helper", "Help the Ghost"],
        ["Goblin Helper", "Help the Goblin"],
        ["Gourmand", "Eat a gem"],
        ["Greedy", "Kill a magic deer"],
        ["Harvester", "Plant 100 seeds"],
        ["Hoarder", "Have 1,000 items in your inventory"],
        ["Hopeless", "Die 10 times"],
        ["Ice Breaker", "Complete the Crystal Cave"],
        ["Illuminator", "Light all torches in the Skull Maze"],
        ["Imperialist", "Buy every land"],
        ["Irrigator", "Water 100 seeds"],
        ["Jealous", "Have 100 jelly in your inventory"],
        ["Jester", "Fail miserably at a trivia minigame"],
        ["Mad Scientist", "Upgrade a structure to use nuclear power"],
        ["Marksman", "Shoot 100 arrows"],
        ["Mason", "Build 20 structures"],
        ["Master Alchemist", "Complete the museum Alchemy bundle"],
        ["Master Archaeologist", "Complete the museum Archaeology bundle"],
        ["Master Builder", "Complete the museum Building bundle"],
        ["Master Chef", "Complete the museum Cooking bundle"],
        ["Master Farmer", "Complete the museum Farming bundle"],
        ["Master Forager", "Complete the museum Foraging bundle"],
        ["Master Miner", "Complete the museum Mining bundle"],
        ["Master Trapper", "Complete the museum Trapping bundle"],
        ["Millonaire", "Have 1,000,000 coins"],
        ["Miner", "Mine the giant crystal"],
        ["Mint", "Craft 2,000 coins"],
        ["Monster", "Kill all giant beets"],
        ["Not A Monster", "Defeat the Dark Beet"],
        ["Occult", "Perform a challenging blood ritual"],
        ["Old People Helper", "Help the Old Man"],
        ["Other Worldly", "Get a Void gear item"],
        ["Pathfinder", "Complete the Skull Maze"],
        ["Pillager", "Destroy 100 gravestones"],
        ["Princess Helper", "Help the Princess"],
        ["Production Master", "Own 100 nuclear structures at once"],
        ["Radioactive", "Obtain a Nuclear tier item"],
        ["Rainbuddy", "Use a bottled rainbow"],
        ["Robotic", "Activate a droid"],
        ["Royal", "Gather royal steel or royal clothing"],
        ["Seal Collector", "Collect every seal"],
        ["Secret Finder", "Find 3 secret rooms"],
        ["Sharpshooter", "Kill an enemy with a single arrow shot"],
        ["Skillful", "Learn every skill"],
        ["Skull Astronomer", "Solve the Skull Galaxy puzzle"],
        ["Slime Regicide", "Defeat the Slime King"],
        ["Smelter", "Craft 500 furnace items"],
        ["Spelunker", "Dig up an archaeology item"],
        ["Summoner", "Obtain a sigil"],
        ["Swordmaster", "Kill 3 enemies or more with a single sword slash"],
        ["Tomb Raider", "Complete the Ancient Tomb"],
        ["Tool Collector", "Collect every tool and weapon"],
        ["Tough", "Have 10 max health"],
        ["Toxic Vanquisher", "Defeat the Toxic Guardian"],
        ["Treasure Hunter", "Open 20 big treasure chests"],
        ["Treasure Master", "Open all big treasure chests"],
        ["Trillionaire", "Have 1,000,000,000,000 coins"],
        ["Tycoon", "Own 10 lands and 5,000 coins"],
        ["Unlimited Power", "Upgrade all rods"],
        ["Unscarred", "Complete a dungeon without taking damage"],
        ["Void Champion", "Reach Void level 20"],
        ["Void Explorer", "Reach Void level 10"],
        ["Void Master", "Reach Void level 30"],
        ["Void Scout", "Reach Void level 5"],
        ["Waterproof", "Build on top of every water tile"],
        ["Wealthy", "Have 100,000 coins"],
        ["Winner", "Win the jackpot at a slot machine"],
        ["Wizard Helper", "Help the Wizard"],
    ];

    assert.strictEqual(officialAchievements.length, 103, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
