import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/judgment.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2058180 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("judgment");

test("getPlannerData('judgment') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for judgment");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Judgment achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Judgment achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Judgment achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friendly Guy", "Made 10 friends."],
        ["A Guy Everybody Knows", "Made 50 friends."],
        ["A Popular Guy", "Made 30 friends."],
        ["Blowing the Lid Off", "Completed Chapter 8."],
        ["Detective of Legend", "Completed the game on LEGEND difficulty."],
        ["Drone Champion", "Win first place in every D-League drone race."],
        ["Drone Enthusiast", "Obtained all drone parts."],
        ["Electronic Perspective", "Flew the drone in first person mode for 60 seconds."],
        ["Enemies of My Enemies", "Completed Chapter 10."],
        ["Going Steady", "A girl revealed her true feelings."],
        ["Got to the Bottom of It", "Cleared all of the side cases."],
        ["He Just Doesn't Quit", "Defeat Shin Amon in the final side case 'A Final Request', which unlocks after clearing every other side case."],
        ["Hung Jury", "Save Sugiura with less than 10 seconds left on the timer in Chapter 10."],
        ["I'll Make it Double", "Double your chips at the casino, starting from 300, in blackjack or poker (available around Chapter 2)."],
        ["KamuroGo Guide", "Completed all KamuroGo City Missions."],
        ["KamuroGo Local", "Completed 30 KamuroGo City Missions."],
        ["KamuroGo Master", "Achieved 100% completion of KamuroGo. Wow!"],
        ["KamuroGo Shopper", "Completed five stores in KamuroGo's Shop Missions."],
        ["KamuroGo Socialite", "Completed all of KamuroGo's Shop Missions."],
        ["KamuroGo Tourist", "Completed 10 KamuroGo City Missions."],
        ["KamuroGo Trendsetter", "Completed 10 stores in KamuroGo's Shop Missions."],
        ["Ladies, Please", "Two girls revealed their true feelings."],
        ["Local Detective", "Cleared 30 side cases."],
        ["Now You're Just Bragging", "Four girls revealed their true feelings."],
        ["Oh Look, a Cat!", "Found all the stray cats while in search mode during the main story."],
        ["On the Case", "Cleared 10 side cases."],
        ["Pawn Star", "Sold 100 items to Ebisu Pawn."],
        ["Pay Your Rent, Yagami", "Befriend the agency landlady Tomioka and eat every one of her home-cooked meals to max her friendship."],
        ["Politics of Justice", "Completed Chapter 12."],
        ["Professional Password Presenter", "Give the correct passphrases on the first attempt to enter the Champion District underground gambling hall in Chapter 8."],
        ["Retail Therapy", "Shopped 100 times."],
        ["Skeletons in the Closet", "Completed Chapter 4."],
        ["Skill Dabbler", "Obtained 30 skills."],
        ["Skill Master", "Obtained all skills."],
        ["Skill Pro", "Obtained 60 skills."],
        ["Thank You!", "Completed all of the main story."],
        ["The Art of Conversation", "Give the exact answers 'Three Times', 'Can I talk to Moon' and 'Chateaubriand, Blue' during a Chapter 6 conversation."],
        ["The Bird's the Word", "Controlled the drone for over an hour."],
        ["The Final Nail", "Present the correct evidence to the judge on the first try during the finale court session."],
        ["The Game is Afoot", "Retrieved the money from the Horseplayer Detective."],
        ["The Gamer Life", "Played every arcade game."],
        ["The Greatest Detective", "Obtain all other achievements."],
        ["The Kansai Factor", "Completed Chapter 6."],
        ["Trust Issues", "Completed Chapter 2."],
        ["Way Too Thorough!", "Fully investigate Terasawa during the Chapter 4 search sequence."],
        ["Yagami Party", "Complete every Dice & Cube board-game course and rule set at Paradise VR."],
        ["Zombie Apocalypse Survivor", "Obtained 50 pickups in Kamuro of the Dead."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
