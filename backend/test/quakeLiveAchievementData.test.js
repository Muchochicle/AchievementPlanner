import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/quake-live.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 282440 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("quake-live");

test("getPlannerData('quake-live') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for quake-live");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Quake Live achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Quake Live achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Quake Live achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 in 2", "Accumulate 250 Excellent Medals."],
        ["Accelerate Adept", "Finish the second hall in the Accelerate training level."],
        ["Accelerate Beginner", "Finish the first hall in the Accelerate training level."],
        ["Accelerate Expert", "Finish the final hall in the Accelerate training level."],
        ["Aim Bot", "Win a match with 60% or greater accuracy."],
        ["Air Hammer", "Frag an opponent with Gauntlet while both of you are in the air."],
        ["Assassin", "Accumulate 250 Impressive Medals."],
        ["Bandit", "Deny Quad Damage from your opponent."],
        ["Big Time", "Complete 250 matches."],
        ["Brawler", "Record 5 Gauntlet frags in one match."],
        ["Camper", "Record 15 or more frags in a single match with the Rail Gun."],
        ["Clutch", "Win a Capture the Flag match by 1 capture, ending the match with your winning flag run."],
        ["Color Guard", "Accumulate 100 Capture Medals."],
        ["Crash Test", "Win the Crash Course match against our trainer."],
        ["Elevate Adept", "Finish the second hall in the Elevate training level."],
        ["Elevate Beginner", "Finish the first hall in the Elevate training level."],
        ["Elevate Expert", "Finish the final hall in the Elevate training level."],
        ["Evil Eye", "Accumulate 100 Revenge Medals."],
        ["Fear Me", "Accumulate 1000 Frags."],
        ["Fight Club", "Accumulate 50 Humiliation Medals."],
        ["First Frag", "Score the first kill in a match."],
        ["First Taste", "Accumulate 100 Frags."],
        ["Full House", "Earn at least 1 Capture, Defense, and Assist medal in a CTF match."],
        ["Guardian", "Accumulate 100 Defense Medals."],
        ["Hall Monitor", "Reach the end of the skill test hallway in the Crash Course."],
        ["Hat Trick", "Record 3 Excellent medals in 1 game."],
        ["Head Hunter", "Capture at least 3 skulls at once in Harvester."],
        ["Here Goes Nothing", "Frag your opponent with Gauntlet in a Duel."],
        ["Hooked", "Accumulate 500 Frags."],
        ["Jesse James", "Win a Duel without dying."],
        ["Killjoy", "Frag an opponent who has Quad Damage when you have no power-up."],
        ["Last Hope", "In Clan Arena, frag 3 or more opposing players to win the round, when you're the last alive."],
        ["Midair", "Get 25 frags using projectiles on opponents midair."],
        ["Miracle Maker", "Kill two enemy flag carriers moments before their cap in 1 game."],
        ["Missed Opportunity", "Kill the opposing team in Attack & Defend without touching the flag."],
        ["MVP", "Accumulate 1000 combined total Capture the Flag Medals (Capture, Assist, Defense)."],
        ["Nade Spam", "Win a CA round using the Grenade Launcher."],
        ["Ninja Cap", "Capture the flag in Attack & Defend without killing anyone on the team, minimum size 3."],
        ["Overkill", "Use the Rail Gun to frag an opponent with only 1 point of health."],
        ["Plus One", "Frag an opponent when you have only 1 health."],
        ["Point Denied", "Hold 3 Domination control points in an arena for at least 30 seconds."],
        ["Prize Fighter", "Complete 1000 matches."],
        ["Psychic", "Use a rocket to kill an opponent who is in the air."],
        ["Pull", "Record 5 Shotgun frags of opponents in the air in one match."],
        ["Punch Out", "Get the last frag in a CA round with gauntlet."],
        ["Raptor", "Frag an opponent while you are in the air."],
        ["Resource Hog", "Get Quad and Battle Suit in one match."],
        ["Rocket Man", "Accumulate 500 frags using the Rocket Launcher."],
        ["Sidekick", "Accumulate 100 Assist Medals."],
        ["Smack Down", "Accumulate 10 or more Quad Damage frags in 1 game."],
        ["Speed Kills", "Frag an enemy while moving at over 500 units per second."],
        ["Sucker Punch", "Use the Gauntlet to frag an opponent who has Quad Damage."],
        ["Testing One..Two..", "Complete 1 match."],
        ["Trifecta", "Earn 3 or more Capture, Defense, and Assist medals in a CTF match."],
        ["Vadri'gar", "Accumulate 10000 Frags."],
        ["Victory", "Win a match for the first time."],
        ["Wicked", "Record a final score of 666 in Capture the Flag."],
        ["WTF Was That", "Record your first frag with the Kamikaze Item."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
