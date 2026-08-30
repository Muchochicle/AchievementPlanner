import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/master-of-orion.json - 102 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 298050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("master-of-orion");

test("getPlannerData('master-of-orion') returns real planner data with 102 curated achievements", () => {

    assert.ok(game, "expected real planner data for master-of-orion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 102);

});

test("every Master of Orion achievement has a unique id from 1 to 102 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 102 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 102);
    assert.strictEqual(new Set(apinames).size, 102);

});

test("every Master of Orion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 102 Master of Orion achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"007\"", "Have 7 spies on 7 different races"],
        ["A Rose By Any Other Name", "Rename 100 Blueprints"],
        ["Alien Roommate", "Have a colony with at least 1 Population Unit of another race in a match"],
        ["Alkari Mastery", "Win all original victory types  with the Alkari"],
        ["Area 51", "Spy on the Humans as a Psilon"],
        ["Attila", "Invade 100 planets"],
        ["Backstabber", "Break 150 pacts"],
        ["Brazil", "Turn 20 planets into Tropical"],
        ["Bulrathi Mastery", "Win all original victory types with the  Bulrathi"],
        ["Business is Business", "Successful trade with another Race for the first time"],
        ["Can't Make Up Your Mind", "Scrap 600 Blueprints"],
        ["Cave-dweller", "Turn 20 planets into Cavernous"],
        ["Classified", "Build your first Spy Center"],
        ["Collector", "Colonize a planet in each possible biome in a match"],
        ["Conqueror", "Invade 10 colonies in a match"],
        ["Crunch Time", "Research 8 Technologies before turn 50"],
        ["Curious George", "Spy on all races during a match"],
        ["Dangerous Minds", "Completely research the Tech Tree and win by Conquest"],
        ["Darlok Mastery", "Win all original victory types with the Darlok"],
        ["Dinner’s ready!", "Win a match in less than 100 turns"],
        ["Duty Calls", "Build 2 Marine Barracks"],
        ["Exodus", "Use at least 15 Civilian Transports in a match"],
        ["eXpand", "Colonize every planet in 5 systems"],
        ["eXplore", "Visit all systems in the galaxy during a match"],
        ["Feline Paradise", "Turn 20 planets into Grassland"],
        ["First Among Equals", "Win a multiplayer match"],
        ["Flower Power", "Win the game without building a single military ship"],
        ["Galactus", "Destroy 100 Planets"],
        ["Get Off My Lawn", "Deport 5 spies"],
        ["Get Smart", "Successfully gather information on 5 Colonies in a match via espionage"],
        ["Group Therapy", "Win by Diplomatic Victory with Silicoid"],
        ["Hell-O", "Turn 20 planets into Inferno"],
        ["Homeless", "Get your capital planet blown up in a super nova"],
        ["Human Mastery", "Win all original victory types with the Human"],
        ["Hungry Game", "Develop a Colony that yields 20 Food Points per turn"],
        ["I Am Become Death", "Destroy 20 planets with a Doomstar in a match"],
        ["I Like it Small", "Win by any victory with only 5 planets colonized including your homeworld"],
        ["In a Hurry", "Colonize the first planet your Colony Ship visits in a match"],
        ["Iran-Contra", "Incite Revolt in 3 different opponents' colonies "],
        ["Ironman", "Win the game with all races at least once in Hard difficulty"],
        ["It is me, Your Brother! ", "Win by Diplomatic Victory with Meklar"],
        ["Itch to Scratch", "Win by Technological Victory with Mrrshan"],
        ["Jumper", "Use your Jump Gates 100 times during a match"],
        ["Kill many, and you're a conqueror", "Win by Conquest Victory for the first time"],
        ["Klackon Mastery", "Win all original victory types with the Klackon"],
        ["Manifest Destiny", "Win by Economic Victory with Humans"],
        ["Marxist Dystopia", "Win by Economic Victory with Klackon"],
        ["Master of Orion", "Win all victory types with all races"],
        ["Master of The Universe", "Have at least 1 colony on 20 different stars"],
        ["Megalomaniac", "Build 20 Ships before turn 100"],
        ["Meklar Mastery", "Win all original victory types with the Meklar"],
        ["Moby Dick", "Destroy 5000 ships"],
        ["Monster Hunter", "Eliminate all Space Monsters in a match"],
        ["Mrrshan Mastery", "Win all original victory types with the Mrrshan"],
        ["No Vacancy", "Have 2 planets fully populated"],
        ["None Like It Hot", "Colonize at least 5 Volcanic planets in a match"],
        ["Obsession", "Play 10000 turns"],
        ["Off With Their Heads", "Kill 5 spies"],
        ["Old Grudge", "Eliminate the Alkari first while playing as Mrrshan"],
        ["One more turn!", "Play 1000 turns"],
        ["One Small Step", "Colonize your first planet"],
        ["Peronism", "Don’t have strikes in any of your colonies for 80 turns"],
        ["Populous", "Reach 15 Population Units before turn 35"],
        ["Psilon Mastery", "Win all original victory types with the Psilon"],
        ["Real Time Commander", "Command and win your first  Tactical Battle"],
        ["Reptilians!", "Win by Technological Victory with Sakkra"],
        ["Resource Maniac", "Build 10 Asteroid mines inside your empire"],
        ["Right in the Heart", "Successfully Incite Revolt on a Darlok Colony"],
        ["Royal Navy", "Destroy 15 Pirate ships"],
        ["Rule of the Many", "Win by Diplomatic Victory with Sakkra"],
        ["Rush", "Defeat Orion's Guardian before turn 150"],
        ["Sakkra Mastery", "Win all original victory types with the Sakkra"],
        ["Scavenger", "Discover 3 Anomalies and Bombard 2 Pirate bases in a match"],
        ["Science!", "Complete the entire tech tree for the first time"],
        ["Secrets of the Earth", "Win by Technological Victory with the Bulrathi"],
        ["Shopaholic", "Buy 1000 structures or ships"],
        ["Silicoid Mastery", "Win all original victory types with the Silicoid"],
        ["So Say We All", "Establish 100 colonies"],
        ["Still here", "Play 5000 turns"],
        ["Terminus", "Have a Colony yielding 70 Research Points "],
        ["Terror from the Deep", "Colonize at least 5 Oceanic planets in a match"],
        ["That's no star", "Destroy an opponent's Homeworld using the Doomstar"],
        ["The Creator", "Convert 10 Asteroid Fields / Gas Giants into Inhabitable Planets"],
        ["The More the Merrier", "Engage in combat using a fleet of 20 or more ships"],
        ["The Nash Ultimatum", "Win by Economic victory with Psilon "],
        ["This Ain't Cheap", "Have a fleet that costs more than 30 Command Points"],
        ["This Is Just the Beginning", "Win by all Victory types with any race"],
        ["Top of the Class", "Win by Excellence Victory for the first time"],
        ["Trade Winds", "Win by Economic Victory with the Alkari"],
        ["Transcendental", "Win by Technological Victory for the first time"],
        ["Turns are Relative", "Buy 30 ships in a match"],
        ["Unscathed", "Win by Conquest without losing a single colony"],
        ["Unseen Blade", "Win by Military Victory with the Darlok"],
        ["War Never Changes", "Declare War for the first time"],
        ["Warren Buffet", "Win by Economic Victory with 80% or more of the outstanding GMF Shares."],
        ["Where Credit is Due", "Watch the credits in full"],
        ["Where we're going, we don't need Starlanes.", "Build 15 Jumpgates in a match"],
        ["Wild, Wild West", "Colonize at least 5 Desert planets in a match"],
        ["With Quill and Word", "Win by Diplomatic Victory for the first time"],
        ["Wolf of the Galaxy", "Win by Economic Victory for the first time"],
        ["You Shall not Pass", "Block all warp points to your home planet before turn 20 "],
        ["Your Neutrality", "Ally with all Races"],
    ];

    assert.strictEqual(officialAchievements.length, 102, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
