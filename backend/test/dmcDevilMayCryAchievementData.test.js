import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dmc-devil-may-cry.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 220440 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dmc-devil-may-cry");

test("getPlannerData('dmc-devil-may-cry') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for dmc-devil-may-cry");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every DmC: Devil May Cry achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every DmC: Devil May Cry achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 DmC: Devil May Cry achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A man with guts and honor", "Reach the end of the descent on Mission 6 having killed all of the enemies"],
        ["Absolutely crazy about it", "Spend 50,000 Red Orbs"],
        ["And welcome to Hell!", "Complete all missions on the Hell and Hell difficulty"],
        ["And you are set free", "Free half of the Lost Souls"],
        ["Bring it on!", "Slay 1,000 Demons"],
        ["Cleaning up his Dad's mess", "Defeat Mundus"],
        ["Come on Puppy. Let's go!", "Defeat your pursuer"],
        ["Devils never cry", "Complete all missions on the Dante Must Die difficulty"],
        ["Dude, the show's over!", "Find all of the Keys"],
        ["Every hero has a weakness", "Complete Furnace of Souls without taking damage from the furnace"],
        ["Fill your dark soul with light", "Free all of the Lost Souls"],
        ["Flock off, feather-face!", "Survive the encounter with the Tyrant"],
        ["For Tony Redgrave", "Kill 50 enemies using nothing but firearms"],
        ["He's a demon too", "Help Phineas retrieve his eye"],
        ["I need more power!", "Complete Vergil's downfall on Son of Sparda difficulty"],
        ["I'll try it your way for once", "Complete all missions in Vergil's downfall on the Nephilim difficulty with a SSS rank"],
        ["I've come to retrieve my power", "Acquire all of Vergil's health, Devil trigger and combat upgrades"],
        ["Impressive", "Slay 100 Demons"],
        ["In the name of my father", "Kill 100 enemies using nothing but Demon weapons"],
        ["It's got to stay in the family", "Acquire Arbiter"],
        ["It's only the rain", "Kill 10 enemies by pushing them into the Hurricane ride on Mission 1"],
        ["It's showtime. Come on!", "Earn 1,500 Style Bonuses"],
        ["It's time to finish this! ", "Help Vergil open the Vault"],
        ["Jackpot!", "Complete all missions on the Nephilim difficulty with a SSS rank"],
        ["Keeps getting better and better", "Gain a 100% completion rank on all missions (difficulty doesn't matter)"],
        ["Let's rock, baby!", "Upgrade Dante's health to maximum"],
        ["Let's welcome chaos!", "Open all of the Secret Doors"],
        ["Looks like it's your lucky day", "Complete a level without taking any damage"],
        ["Looks like we have a winner", "Slay 5,000 Demons"],
        ["Might controls everything", "Gain a 100% completion rank on all missions in Vergil's downfall (difficulty doesn't matter)"],
        ["More than just a few sparks", "Acquire Revenant"],
        ["No talking!", "Acquire Aquila"],
        ["Now I'm a little motivated!", "Complete Vergil's downfall on Heaven or Hell difficulty"],
        ["Now my coat's all charred", "Navigate the Sky Bridge on Mission 16 without hitting the lasers"],
        ["One hell of a party!", "Complete all of the Secret Missions"],
        ["Only kind of gift worth giving", "Acquire the Angel Boost ability"],
        ["Our souls are at odds brother", "Complete Vergil's downfall"],
        ["Power... Give me more power!", "Purchase all of Dante's combat upgrades"],
        ["Sensational!", "Gain a SSS Style Rank during combat"],
        ["Stylish!", "Complete a mission with a SSS rank"],
        ["The end? Don't bet on it", "Complete the final mission on Human, Devil Hunter or Nephilim difficulty"],
        ["Thing drives me crazy", "Acquire Osiris"],
        ["This baby sure can pack a punch", "Acquire Eryx"],
        ["This is my kind of rain", "Spend 10,000 Red Orbs"],
        ["This is the power of Sparda!", "Complete Vergil's downfall on Vergil Must Die difficulty"],
        ["This is what I live for!", "Complete all missions on the Heaven or Hell difficulty"],
        ["This party's just getting crazy!", "Complete 10 Secret Missions"],
        ["Time to go to work guys!", "Purchase your first upgrade"],
        ["Too easy!", "Complete all missions on the Son of Sparda difficulty"],
        ["We have an uninvited guest", "Defeat a Wisp"],
        ["Whatever, Lady", "Defeat Mundus' spawn"],
        ["Where does the time go?", "Complete a level with 2 minutes or less on the clock"],
        ["You are not a Human, are you?", "Acquire the Devil Trigger ability"],
        ["You can't handle it", "Upgrade Dante's Devil Trigger to maximum"],
        ["You don't belong here", "Defeat an Imprisoner"],
        ["You'll never have her fire", "Kill 100 enemies using nothing but Angel weapons"],
        ["You're not going to shoot me", "Acquire Kablooey"],
        ["You're not worthy as my opponent", "Complete Vergil's downfall on Hell and Hell difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
