import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/xcom-2.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 268500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("xcom-2");

test("getPlannerData('xcom-2') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for xcom-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every XCOM 2 achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every XCOM 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 88 XCOM 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Human Being", "Story: recover the Forge Item."],
        ["A Dark Doorway", "Story: recover the Psi Gate."],
        ["A Final Stand", "Story: create the Commander's Avatar and begin the final mission, Operation Leviathan."],
        ["A Forbidden Experiment", "Complete the Alien Hunters add-on narrative mission - investigate the Abandoned Research Facility ('The Nest')."],
        ["A God Falls", "Story: kill an Avatar."],
        ["A Grim Key", "Story: recover a Codex Brain."],
        ["A Horrible Truth", "Story: recover the Blacksite Data."],
        ["A Line Crossed", "Story: complete the Avatar Autopsy research."],
        ["A New Alliance", "Complete the Lost and Abandoned mission"],
        ["A Rival Silenced", "Permanently defeat one of the Chosen"],
        ["A Torch Passed", "Beat the Lost Towers mission"],
        ["Always be Shooting", "Hit three shots on a single turn with a SPARK unit after using its Overdrive ability"],
        ["Archon Annihilator", "Kill the Archon Ruler"],
        ["Axles to Axles, Bolts to Bolts", "Defeat a robotic enemy with a SPARK unit"],
        ["Beginner's Luck", "Beat a mission in June or later using only Rookies"],
        ["Bells and Whistles", "Outfit a SPARK unit with the highest tier weaponry and armor"],
        ["Berserker Breaker", "Kill the Berserker Ruler"],
        ["Born in the Darkness", "Get four kills from Shadow mode with a Reaper in a single mission"],
        ["Breathing Room", "Kill a Viper who is strangling a squadmate"],
        ["Bring It Down", "Sabotage an alien facility"],
        ["Brutal Collection", "Skulljack each different type of ADVENT soldier (does not have to be in same game)"],
        ["Bug Fisherman", "Complete the 'It Came From the Sea' legacy operation with a gold medal"],
        ["Campaign Microcosm", "Complete a random legacy operation"],
        ["Can't Stop the Fighting", "Perform three offensive actions against the same target with a Skirmisher in a single turn"],
        ["Car Wrecked", "Cause an enemy to die in a vehicle explosion"],
        ["Circle of Psi", "Raise a Templar to maximum Focus level, spend it all, and reach the max again in a single mission"],
        ["Codebreaker", "Story: build the Shadow Chamber."],
        ["Come Back To Me", "Kill a Sectoid who is currently mind controlling a squadmate"],
        ["Cyberlord", "Earn a second tier hack reward"],
        ["David and Goliath", "Kill a Berserker in melee combat"],
        ["Deadly Arsenal", "Purchase all of the final tier Hunter Weapons"],
        ["Defender of Humanity", "Overthrow the aliens on Commander difficulty"],
        ["Deja Vu All Over Again", "Complete the 'Blast From the Past' legacy operation with a gold medal"],
        ["Earth Avenged", "Overthrow the aliens at any difficulty level"],
        ["Enemy Adopted", "Use a ruler armor ability against an alien ruler"],
        ["Excalibur", "Completely upgrade a beam weapon with superior grade weapon upgrades"],
        ["Exquisite Timing", "Beat the game on Commander+ difficulty by July 1st (July 15th for War of the Chosen)"],
        ["First Blood", "Complete the tactical tutorial"],
        ["Fully Operational Battlestation", "Complete the 'Avenger Assemble' legacy operation with a gold medal"],
        ["Fully Operational Resistance", "Raise XCOM's influence with all three factions to High in a single game"],
        ["Global Resistance", "Get all of the continent bonuses available in a single campaign"],
        ["Harder, Better, Faster, Stronger", "Apply a PCS upgrade to a soldier"],
        ["Have a Nice Trip", "Cause an enemy to fall to its death"],
        ["Heavy Metal", "Kill an enemy with every heavy weapon in the game (Doesn't have to be in the same game)"],
        ["Heroes of the Resistance", "Beat a Retaliation mission with no more than 3 civilian deaths"],
        ["Honorary Level Designer", "Complete a Skirmish Mission"],
        ["Immortal Commander", "Overthrow the aliens on Legend difficulty"],
        ["It Takes Two", "Form a level 3 bond between two soldiers"],
        ["Just Like Dad Used To Make", "Build a SPARK unit"],
        ["Kingslayer", "Kill all alien rulers in a single game"],
        ["Like Clockwork", "Complete a successful ambush"],
        ["Locked and Loaded", "Upgrade a weapon"],
        ["Make ‘em go Boom", "Kill an enemy primed Derelict MEC before it can self-destruct"],
        ["Matter Over Mind", "Defeat an Avatar with a SPARK unit"],
        ["Meat Over Metal", "Kill a Sectopod on the same turn you encounter it"],
        ["Mechlord", "Hack and take control of a Sectopod"],
        ["Nick of Time", "Evacuate a soldier whose bleed-out timer is still running"],
        ["No One Left Behind", "Rescue a soldier who was captured by the Chosen"],
        ["Not Throwing Away My Shot", "Kill an alien ruler while it attempts to escape"],
        ["Now Am I Become Death", "Kill 3 enemies in a single turn, with a single soldier, without explosives"],
        ["Now I Am The Master", "Use all ruler armor abilities in a single mission"],
        ["Our New Overlords", "Promote a SPARK unit to Champion rank"],
        ["Overpowered", "Beat a mission on Commander+ with a squad composed entirely of soldiers of the same class (but not Rookie)"],
        ["Pile 'Em Up", "Kill 500 aliens. (does not have to be in same game)"],
        ["Playing For Score", "Complete a Local Challenge"],
        ["Rebel Radio", "Story: build Resistance Comms."],
        ["Regicide", "Kill an alien ruler the first time you encounter it"],
        ["Rise of the Resistance", "Make contact with a region"],
        ["Rise of the Robots", "Complete a mission with three or more SPARK units in the squad"],
        ["Room to Grow", "Upgrade a facility"],
        ["Rumor Hunter", "Complete a Rumor"],
        ["Running on Fumes", "A SPARK unit survives a mission it started with less than half health"],
        ["Shadow Broker", "Sell goods worth 1000 supplies to the Black Market (Can span multiple games)"],
        ["Shen's Legacy", "Build a facility in every Avenger slot"],
        ["Stop Hitting Yourself", "Kill an enemy with a hacked turret"],
        ["The Few and the Proud", "Beat the game on Commander+ difficulty without buying a Squad Size upgrade"],
        ["The Gang's All Here", "Complete 'The Lazarus Project' legacy operation with a gold medal"],
        ["The Most Dangerous Game", "Win a multiplayer match."],
        ["The Sun Never Sets", "Build a radio relay on every continent"],
        ["The Untouchables", "Beat the game on Commander+ without losing a soldier"],
        ["There's A Future In The Past", "Complete a single player campaign with Tactical Legacy Pack content"],
        ["Tinker", "Build an experimental item in the Proving Grounds"],
        ["Valhalla", "Beat the game on Commander+ difficulty in Ironman mode"],
        ["Viper Vanquisher", "Kill the Viper Ruler"],
        ["Weary Warriors", "Complete a mission with all Tired soldiers and no casualties"],
        ["Who Needs Tygan?", "Beat the final mission using only conventional gear"],
        ["With Extreme Prejudice", "Skulljack an ADVENT Officer"],
        ["Zombies in a Barrel", "Get 15 Headshots against Lost in a single turn"],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
