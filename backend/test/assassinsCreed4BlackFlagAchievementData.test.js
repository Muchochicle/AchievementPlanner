import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-4-black-flag.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-4-black-flag");

test("getPlannerData('assassins-creed-4-black-flag') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-4-black-flag");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Assassin's Creed IV: Black Flag achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Assassin's Creed IV: Black Flag achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Assassin's Creed IV: Black Flag achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Hope", "Complete memory sequence 9."],
        ["A Pirate's Life For Me", "Complete memory sequence 3."],
        ["Adrift", "Complete memory sequence 8."],
        ["All Aboard!", "Board a ship without losing any crew members."],
        ["All Rounder", "Play on every game mode, and use every ability and ranged weapon once in Multiplayer."],
        ["Barfly", "Unlock all taverns."],
        ["Been Down So Long...", "Complete memory sequence 11."],
        ["Bunker Buddies", "Complete present day mission 4."],
        ["Business And Pleasure", "Earn 50,000 reales."],
        ["By The Book", "Complete 100% of all main mission constraints."],
        ["Cannon fodder", "Recruit 500 crew members."],
        ["Cartographer", "Visit every location of the game."],
        ["Committed To The Cause", "Reach level 55 in Multiplayer."],
        ["Death Of A Salesman", "Complete memory sequence 5."],
        ["Destroyer", "Fully upgrade the Jackdaw."],
        ["Devil Of The Caribbean", "Defeat all 4 legendary ships."],
        ["Elevator to the Gallows ", "Kill a player using a lift that has been trapped with Booby Trap."],
        ["Employee Of The Month", "Complete 25 Abstergo challenges."],
        ["Excavator", "Find a buried treasure."],
        ["Firepower", "Kill 5 guards at once with a blunderbuss."],
        ["FTFY", "Fully upgrade your hideout."],
        ["Getting Weird Around Here", "Complete present day mission 3."],
        ["Ghost In The Machine", "Hack 15 computers in Abstergo Entertainment."],
        ["Good While It Lasted", "Complete memory sequence 2."],
        ["Help A Brother Out", "Complete a Templar Hunt sequence."],
        ["Heroes Aren't Born", "Complete memory sequence 1."],
        ["His Full Attention", "Freedom Cry - Achieve 100% synchronization"],
        ["His Own Medicine", "Disarm the Gouverneur and kill him with the branding iron."],
        ["His Word Was “Perhaps”", "Freedom Cry - Complete all missions"],
        ["Hungover", "Wake up in a haystack."],
        ["It's All Good", "Complete present day mission 5."],
        ["Just Like Starting Over", "Complete memory sequence 12."],
        ["Killer Killer", "Harpoon a killer whale."],
        ["King Of The Castle", "Capture all forts."],
        ["Lab Technician", "Play and complete a game session of Game Lab in the Multiplayer Public playlist."],
        ["Liberation Day", "Free your first slave."],
        ["Master Of The Caribbean", "Complete the Discovery Mode of Wolfpack in Multiplayer."],
        ["Mer-man", "Swim a total of 1 nmi."],
        ["Mixing Up The Medicines", "Complete memory sequence 6."],
        ["My Elusive Fortune", "Complete memory sequence 10."],
        ["No Apologies", "Complete memory sequence 4."],
        ["Owned", "Complete every activity in a single location."],
        ["Personal Bag Of Tricks", "Finish a game session with an ability set that you customized in Multiplayer."],
        ["Preemptive Strike ", "Playing as The Orchid, block 10 abilities from opponents with Sabotage."],
        ["Queen Anne’s Revenge ", "Playing as Blackbeard, perform an acrobatic kill and a gun kill in less than 10 seconds."],
        ["Redingote Up!", "Craft the Hunter outfit."],
        ["Roped In", "Perform 5 air assassinations from a swinging rope."],
        ["Routine Hacking", "Complete present day mission 2."],
        ["Sacred Land", "Playing as The Jaguar, be the highest scoring player of a Domination game session."],
        ["Saw That One Coming...", "Complete memory sequence 13."],
        ["Sea Legs", "Complete all naval contracts."],
        ["Seeds of independence", "Liberate 500 slaves."],
        ["Seven Deadly Seas", "Explore all underwater shipwrecks."],
        ["Sharing Is Caring", "Share each type of discovery with friends once."],
        ["Silence, Fool!", "Kill a guard ringing a bell."],
        ["Siren Song", "Rescue pirate hostages by distracting enemies with \"dancers.\""],
        ["The Hammer Falls", "Complete memory sequence 7."],
        ["Thug Life", "Plunder 30 ships."],
        ["Vault Raider", "Unlock the secret door in Tulum."],
        ["Wild West Indies", "Kill 4 enemies in a row using multi-pistols."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
