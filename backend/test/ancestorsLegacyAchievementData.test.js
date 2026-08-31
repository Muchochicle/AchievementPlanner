import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ancestors-legacy.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 620590 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ancestors-legacy");

test("getPlannerData('ancestors-legacy') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for ancestors-legacy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Ancestors Legacy achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Ancestors Legacy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Ancestors Legacy achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Ship That Doesn't Sink", "Find all the hidden secrets in Ulf Ironbeard's campaign."],
        ["All for Rurik", "Find all the hidden secrets in Rurik's campaign."],
        ["Assassinated", "Kill an enemy hero in a Multiplayer or Skirmish match with a Hassassin squad"],
        ["Blitzkrieg", "Finish the Battle of Lidzbark in less than 25 minutes"],
        ["Boleslav the Brave", "Complete Boleslav's campaign"],
        ["Boy Scouts", "Kill 5 enemy squads in 1 minute only using Grenadiers"],
        ["Church of misery", "Find out what happened to the villagers"],
        ["Commander Veteran", "Recruit each type of unit in the game at least once"],
        ["Conqueror", "Win a match in Multiplayer or against AI"],
        ["Deer hunter", "Don't let any of the enemy convoys pass through the outpost"],
        ["Destructive Stinger", "Destroy the enemy's Town Hall using Scorpions"],
        ["Divine Duty", "Win a match as the Saracens in Anihilation Mode"],
        ["Dunstan's Revenge", "Find all the hidden secrets in Harold's campaign."],
        ["Edward and Godwin", "Complete Edward's campaign"],
        ["Edward Needs Those", "Find all the hidden secrets in Edward's campaign."],
        ["Elite Marksman", "Defend Lubawa only using ranged units"],
        ["Elite Unit", "Reach maximum level with any squad"],
        ["Fallen Warrior", "Lose a match in Multiplayer or against AI"],
        ["Firestarter", "Start a match in Multiplayer or against AI"],
        ["Goodfella", "Get rid of all the bandits and save all the villagers in Pokarvis"],
        ["Hard To Kill", "Complete all the quests with only one Hassassins squad in Akka"],
        ["Harold's Guerilla Warriors", "Complete Harold's campaign"],
        ["Holy War", "Kill all the Christian preachers in the mission, 'Siege of Jerusalem'"],
        ["Indisputable", "Win a Multiplayer match or AI Skirmish in less than 8 minutes."],
        ["It's a TRAP!", "Detect and destroy five enemy traps"],
        ["It's a... trap.", "Make an enemy trigger a trap you built"],
        ["Konrad von Thierberg", "Complete Konrad's campaign"],
        ["Lindisfarne Riches", "Complete Ulf Ironbeard's campaign"],
        ["Lost Ones", "Replenish a squad ten times"],
        ["Mieszko", "Complete Mieszko's campaign"],
        ["NO LIFE IS WORTH SAVING...", "Kill 2000 peasants - the resource-gathering villagers with a name icon, not the peasant troop units - across your whole playtime."],
        ["No Pain, No Gain", "Claim all the villages and expand your base in 30 minutes in 'The Final Straw'"],
        ["Not on my watch!", "Destroy all enemy ships"],
        ["Off the Course", "Complete the basic training mission"],
        ["Panic", "Raise the alarm in your village"],
        ["Perfect Commander", "Don't lose any squads in the mission 'Battle of The Horns of Hattin'"],
        ["Protector", "Raise the defense level of your village"],
        ["Rebuilding Forces", "Complete the squad training mission"],
        ["Righteousness of the Faith", "Start Salah ad-Din Yusuf's campaign"],
        ["Rock-Solid", "Raise a squad's armor to its maximum level"],
        ["Rudolf of Habsburg", "Complete Rudolf's campaign"],
        ["Rurik's Reign", "Complete Rurik's campaign"],
        ["Salah ad-Din Yusuf", "Complete Salah ad-Din Yusuf's campaign"],
        ["Squad Proficiency", "Specialize ten squads"],
        ["Squad Veterancy", "Unlock a veterancy ten times"],
        ["Tanned", "Win a match on Desert and Wilderness, Crusade of Anarchy or Scorching Quarrel"],
        ["Teutonic Meticulousness", "Capture all the villages near Christburg"],
        ["The Knights of the Cross", "Start Konrad's campaign"],
        ["The Last Impediment", "Complete the base building training mission"],
        ["Through Defenses", "Destroy a village with Gold defense "],
        ["Time to Work", "Send peasants to work at a resource point 50 times"],
        ["Trap Sweeper", "Disarm all the traps without being detected in Natangia forest"],
        ["Uber Micro", "Win a match against an AI on Insane difficulty"],
        ["Under Mieszko's Banner", "Find all the hidden secrets in Mieszko's campaign."],
        ["Unexpected Allies", "Complete the economy training mission"],
        ["Untouchable", "Defeat an entire enemy squad with ranged attacks only"],
        ["Vienna's Finest Armor", "Find all the hidden secrets in Rudolf's campaign."],
        ["War Machine", "Destroy any building with a siege machine"],
        ["War Veteran", "Defeat each type of unit in the game at least once"],
        ["Waterkeeper", "Claim all the wells in the mission 'Impatient Vengeance'"],
        ["Whack a mole", "Don't let the enemy attack any of the catapults from your team"],
        ["Who is there?", "Sneak into the enemy base undetected"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
