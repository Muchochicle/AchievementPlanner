import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/brotato.json - 179 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1942280 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 179 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("brotato");

test("getPlannerData('brotato') returns real planner data with 179 curated achievements", () => {

    assert.ok(game, "expected real planner data for brotato");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 179);

});

test("every Brotato achievement has a unique id from 1 to 179 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 179 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 179);
    assert.strictEqual(new Set(apinames).size, 179);

});

test("every Brotato achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 179 Brotato achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Advanced Technology", "Reach 10 Ranged Damage and get 3 structures at the same time"],
        ["Agriculture", "Reach 200 Harvesting"],
        ["Apprentice - Crash Zone", "Win a run with Apprentice in Crash Zone"],
        ["Apprentice - The Abyss", "Win a run with Apprentice in The Abyss"],
        ["Arms Dealer - Crash Zone", "Win a run with Arms Dealer in Crash Zone"],
        ["Arms Dealer - The Abyss", "Win a run with Arms Dealer in The Abyss"],
        ["Artificer - Crash Zone", "Win a run with Artificer in Crash Zone"],
        ["Artificer - The Abyss", "Win a run with Artificer in The Abyss"],
        ["Baby - Crash Zone", "Win a run with Baby in Crash Zone"],
        ["Baby - The Abyss", "Win a run with Baby in The Abyss"],
        ["Baited", "Get 2 Bait during a run"],
        ["Barbecue", "Have at least 25 enemies burning at the same time"],
        ["Beast Master", "Win a run with Beast Master"],
        ["Blind Greed", "Reach 100 % Pickup Range"],
        ["Blood Drinker", "Reach 40 % Life Steal"],
        ["Bourgeoisie", "Get 3 tier IV weapons at once"],
        ["Brawler - Crash Zone", "Win a run with Brawler in Crash Zone"],
        ["Brawler - The Abyss", "Win a run with Brawler in The Abyss"],
        ["Buccaneer - Crash Zone", "Win a run with Buccaneer in Crash Zone"],
        ["Buccaneer - The Abyss", "Win a run with Buccaneer in The Abyss"],
        ["Builder - Crash Zone", "Win a run with Builder in Crash Zone"],
        ["Builder - The Abyss", "Win a run with Builder in The Abyss"],
        ["Bull - Crash Zone", "Win a run with Bull in Crash Zone"],
        ["Bull - The Abyss", "Win a run with Bull in The Abyss"],
        ["Captain - Crash Zone", "Win a run with Captain in Crash Zone"],
        ["Captain - The Abyss", "Win a run with Captain in The Abyss"],
        ["Cautious", "Kill 1000 enemies that are more than 700 range away from you"],
        ["Chef - Crash Zone", "Win a run with Chef in Crash Zone"],
        ["Chef - The Abyss", "Win a run with Chef in The Abyss"],
        ["Chunky - Crash Zone", "Win a run with Chunky in Crash Zone"],
        ["Chunky - The Abyss", "Win a run with Chunky in The Abyss"],
        ["Crazy - Crash Zone", "Win a run with Crazy in Crash Zone"],
        ["Crazy - The Abyss", "Win a run with Crazy in The Abyss"],
        ["Creature - Crash Zone", "Win a run with Creature in Crash Zone"],
        ["Creature - The Abyss", "Win a run with Creature in The Abyss"],
        ["Cryptid - Crash Zone", "Win a run with Cryptid in Crash Zone"],
        ["Cryptid - The Abyss", "Win a run with Cryptid in The Abyss"],
        ["Curious - Crash Zone", "Win a run with Curious in Crash Zone"],
        ["Curious - The Abyss", "Win a run with Curious in The Abyss"],
        ["Cyborg - Crash Zone", "Win a run with Cyborg in Crash Zone"],
        ["Cyborg - The Abyss", "Win a run with Cyborg in The Abyss"],
        ["Danger 0", "Win a run in Danger 0"],
        ["Danger 1", "Win a run in Danger 1"],
        ["Danger 2", "Win a run in Danger 2"],
        ["Danger 3", "Win a run in Danger 3"],
        ["Danger 4", "Win a run in Danger 4"],
        ["Danger 5", "Win a run in Danger 5"],
        ["Demon - Crash Zone", "Win a run with Demon in Crash Zone"],
        ["Demon - The Abyss", "Win a run with Demon in The Abyss"],
        ["Diver - Crash Zone", "Win a run with Diver in Crash Zone"],
        ["Diver - The Abyss", "Win a run with Diver in The Abyss"],
        ["Doctor - Crash Zone", "Win a run with Doctor in Crash Zone"],
        ["Doctor - The Abyss", "Win a run with Doctor in The Abyss"],
        ["Druid - Crash Zone", "Win a run with Druid in Crash Zone"],
        ["Druid - The Abyss", "Win a run with Druid in The Abyss"],
        ["Dwarf - Crash Zone", "Win a run with Dwarf in Crash Zone"],
        ["Dwarf - The Abyss", "Win a run with Dwarf in The Abyss"],
        ["Dying", "Reach -5 HP Regeneration"],
        ["Engineer - Crash Zone", "Win a run with Engineer in Crash Zone"],
        ["Engineer - The Abyss", "Win a run with Engineer in The Abyss"],
        ["Entrepreneur - Crash Zone", "Win a run with Entrepreneur in Crash Zone"],
        ["Entrepreneur - The Abyss", "Win a run with Entrepreneur in The Abyss"],
        ["Experimentation", "Have 6 different weapons at once"],
        ["Explorer - Crash Zone", "Win a run with Explorer in Crash Zone"],
        ["Explorer - The Abyss", "Win a run with Explorer in The Abyss"],
        ["Farmer - Crash Zone", "Win a run with Farmer in Crash Zone"],
        ["Farmer - The Abyss", "Win a run with Farmer in The Abyss"],
        ["Fast", "Reach 50 % Speed"],
        ["Fast Learner", "Reach level 10 before wave 6"],
        ["Fireworks", "Kill 15 enemies with a single explosion"],
        ["Fisherman - Crash Zone", "Win a run with Fisherman in Crash Zone"],
        ["Fisherman - The Abyss", "Win a run with Fisherman in The Abyss"],
        ["Forest", "Finish a wave with 10 or more living trees"],
        ["Gangster - Crash Zone", "Win a run with Gangster in Crash Zone"],
        ["Gangster - The Abyss", "Win a run with Gangster in The Abyss"],
        ["Gatherer 1", "Collect 300 materials"],
        ["Gatherer 2", "Collect 2000 materials"],
        ["Gatherer 3", "Collect 5000 materials"],
        ["Gatherer 4", "Collect 10000 materials"],
        ["Gatherer 5", "Collect 20000 materials"],
        ["Generalist - Crash Zone", "Win a run with Generalist in Crash Zone"],
        ["Generalist - The Abyss", "Win a run with Generalist in The Abyss"],
        ["Ghost - Crash Zone", "Win a run with Ghost in Crash Zone"],
        ["Ghost - The Abyss", "Win a run with Ghost in The Abyss"],
        ["Giant Slayer", "Kill a boss or an elite in less than 15 seconds"],
        ["Gladiator - Crash Zone", "Win a run with Gladiator in Crash Zone"],
        ["Gladiator - The Abyss", "Win a run with Gladiator in The Abyss"],
        ["Glutton - Crash Zone", "Win a run with Glutton in Crash Zone"],
        ["Glutton - The Abyss", "Win a run with Glutton in The Abyss"],
        ["Golem - Crash Zone", "Win a run with Golem in Crash Zone"],
        ["Golem - The Abyss", "Win a run with Golem in The Abyss"],
        ["Hallucination", "Reach 60 % Dodge"],
        ["Herbalist", "Collect 250 consumables by the end of wave 20"],
        ["Hiker - Crash Zone", "Win a run with Hiker in Crash Zone"],
        ["Hiker - The Abyss", "Win a run with Hiker in The Abyss"],
        ["Hoarder", "Hold 3000 materials"],
        ["Hungry", "Pick up 20 consumables during a run"],
        ["Hunter - Crash Zone", "Win a run with Hunter in Crash Zone"],
        ["Hunter - The Abyss", "Win a run with Hunter in The Abyss"],
        ["Industrialization", "Get 5 turrets on the map simultaneously"],
        ["Jack - Crash Zone", "Win a run with Jack in Crash Zone"],
        ["Jack - The Abyss", "Win a run with Jack in The Abyss"],
        ["King - Crash Zone", "Win a run with King in Crash Zone"],
        ["King - The Abyss", "Win a run with King in The Abyss"],
        ["Knight - Crash Zone", "Win a run with Knight in Crash Zone"],
        ["Knight - The Abyss", "Win a run with Knight in The Abyss"],
        ["Lich - Crash Zone", "Win a run with Lich in Crash Zone"],
        ["Lich - The Abyss", "Win a run with Lich in The Abyss"],
        ["Loud - Crash Zone", "Win a run with Loud in Crash Zone"],
        ["Loud - The Abyss", "Win a run with Loud in The Abyss"],
        ["Lucky - Crash Zone", "Win a run with Lucky in Crash Zone"],
        ["Lucky - The Abyss", "Win a run with Lucky in The Abyss"],
        ["Lumberjack", "Kill 50 trees"],
        ["Mage - Crash Zone", "Win a run with Mage in Crash Zone"],
        ["Mage - The Abyss", "Win a run with Mage in The Abyss"],
        ["Magic and Machinery", "Reach 10 Elemental Damage and get 3 structures at the same time"],
        ["Masochist - Crash Zone", "Win a run with Masochist in Crash Zone"],
        ["Masochist - The Abyss", "Win a run with Masochist in The Abyss"],
        ["Medicine", "Heal 200 HP in one wave"],
        ["Multitasker - Crash Zone", "Win a run with Multitasker in Crash Zone"],
        ["Multitasker - The Abyss", "Win a run with Multitasker in The Abyss"],
        ["Mutant - Crash Zone", "Win a run with Mutant in Crash Zone"],
        ["Mutant - The Abyss", "Win a run with Mutant in The Abyss"],
        ["Nightmare", "Win a run in Nightmare"],
        ["Ogre - Crash Zone", "Win a run with Ogre in Crash Zone"],
        ["Ogre - The Abyss", "Win a run with Ogre in The Abyss"],
        ["Old - Crash Zone", "Win a run with Old in Crash Zone"],
        ["Old - The Abyss", "Win a run with Old in The Abyss"],
        ["One-Armed - Crash Zone", "Win a run with One-Armed in Crash Zone"],
        ["One-Armed - The Abyss", "Win a run with One-Armed in The Abyss"],
        ["Overkill", "Deal 1000 damage to an enemy in a single hit"],
        ["Pacifist - Crash Zone", "Win a run with Pacifist in Crash Zone"],
        ["Pacifist - The Abyss", "Win a run with Pacifist in The Abyss"],
        ["Perfect Vision", "Reach 300 Range"],
        ["Ranger - Crash Zone", "Win a run with Ranger in Crash Zone"],
        ["Ranger - The Abyss", "Win a run with Ranger in The Abyss"],
        ["Reckless", "Finish a wave with 1 HP"],
        ["Recycling", "Recycle 12 weapons during a run"],
        ["Renegade - Crash Zone", "Win a run with Renegade in Crash Zone"],
        ["Renegade - The Abyss", "Win a run with Renegade in The Abyss"],
        ["Robust", "Reach 100 Max HP"],
        ["Romantic - Crash Zone", "Win a run with Romantic in Crash Zone"],
        ["Romantic - The Abyss", "Win a run with Romantic in The Abyss"],
        ["Rookie", "Die for the first time"],
        ["Sailor - Crash Zone", "Win a run with Sailor in Crash Zone"],
        ["Sailor - The Abyss", "Win a run with Sailor in The Abyss"],
        ["Saver - Crash Zone", "Win a run with Saver in Crash Zone"],
        ["Saver - The Abyss", "Win a run with Saver in The Abyss"],
        ["Scavenger", "Get 10 different tier I items during a run"],
        ["Sick - Crash Zone", "Win a run with Sick in Crash Zone"],
        ["Sick - The Abyss", "Win a run with Sick in The Abyss"],
        ["Slow", "Reach -20 % Speed"],
        ["Smelly Feet", "Walk a total of 20000 steps"],
        ["Soldier - Crash Zone", "Win a run with Soldier in Crash Zone"],
        ["Soldier - The Abyss", "Win a run with Soldier in The Abyss"],
        ["Speedy - Crash Zone", "Win a run with Speedy in Crash Zone"],
        ["Speedy - The Abyss", "Win a run with Speedy in The Abyss"],
        ["Streamer - Crash Zone", "Win a run with Streamer in Crash Zone"],
        ["Streamer - The Abyss", "Win a run with Streamer in The Abyss"],
        ["Student", "Reach level 20"],
        ["Survivor 1", "Kill 300 enemies"],
        ["Survivor 2", "Kill 2000 enemies"],
        ["Survivor 3", "Kill 5000 enemies"],
        ["Survivor 4", "Kill 10000 enemies"],
        ["Survivor 5", "Kill 20000 enemies"],
        ["Technomage - Crash Zone", "Win a run with Technomage in Crash Zone"],
        ["Technomage - The Abyss", "Win a run with Technomage in The Abyss"],
        ["Uncorrupted", "Finish a run with 0 Curse"],
        ["Unlucky", "Reroll 10 times in a single shop"],
        ["Unstoppable Force", "Hit at least 25 enemies with a single melee attack"],
        ["Vagabond - Crash Zone", "Win a run with Vagabond in Crash Zone"],
        ["Vagabond - The Abyss", "Win a run with Vagabond in The Abyss"],
        ["Vampire - Crash Zone", "Win a run with Vampire in Crash Zone"],
        ["Vampire - The Abyss", "Win a run with Vampire in The Abyss"],
        ["Well-Rounded - Crash Zone", "Win a run with Well-Rounded in Crash Zone"],
        ["Well-Rounded - The Abyss", "Win a run with Well-Rounded in The Abyss"],
        ["Wildling - Crash Zone", "Win a run with Wildling in Crash Zone"],
        ["Wildling - The Abyss", "Win a run with Wildling in The Abyss"],
        ["Wounded", "Win a run with Wounded"],
    ];

    assert.strictEqual(officialAchievements.length, 179, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
