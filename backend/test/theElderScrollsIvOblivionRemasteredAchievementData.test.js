import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-elder-scrolls-iv-oblivion-remastered.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2623190 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-elder-scrolls-iv-oblivion-remastered");

test("getPlannerData('the-elder-scrolls-iv-oblivion-remastered') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-elder-scrolls-iv-oblivion-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every The Elder Scrolls IV: Oblivion Remastered achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every The Elder Scrolls IV: Oblivion Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 The Elder Scrolls IV: Oblivion Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice, Fighters Guild", "Reached Apprentice rank in the Fighters Guild"],
        ["Apprentice, Mages Guild", "Reached Apprentice rank in the Mages Guild"],
        ["Arch-Mage, Mages Guild", "Completed the Mages Guild Questline"],
        ["Aspirant, Shivering Isles", "Reached Aspirant Rank in the Court of Madness"],
        ["Assassin, Dark Brotherhood", "Reached Assassin rank in the Dark Brotherhood"],
        ["Associate, Fighters Guild", "Joined the Fighters Guild"],
        ["Associate, Mages Guild", "Joined the Mages Guild"],
        ["Bandit, Thieves Guild", "Reached Bandit rank in the Thieves Guild"],
        ["Bloodletter, Arena", "Reached Bloodletter rank in the Arena"],
        ["Brawler, Arena", "Reached Brawler rank in the Arena"],
        ["Cat Burglar, Thieves Guild", "Reached Cat Burglar rank in the Thieves Guild"],
        ["Champion of Cyrodiil", "Completed the Main Questline"],
        ["Champion, Arena", "Reached Champion rank in the Arena"],
        ["Champion, Fighters Guild", "Reached Champion rank in the Fighters Guild"],
        ["Citizen, Shivering Isles", "Reached Citizen Rank in the Court of Madness"],
        ["Closed an Oblivion Gate", "Closed an Oblivion Gate, Main Quest"],
        ["Conjurer, Mages Guild", "Reached Conjurer rank in the Mages Guild"],
        ["Defender, Fighters Guild", "Reached Defender rank in the Fighters Guild"],
        ["Defender, Shivering Isles", "Reached Defender of the Realm Rank in the Court of Madness"],
        ["Delivered Daedric Artifact", "Delivered Daedric Artifact, Main Quest"],
        ["Destroyed the Great Gate", "Destroyed the Great Gate, Main Quest"],
        ["Duke Dementia, Shivering Isles", "Reached Duke of Dementia Rank in the Court of Madness"],
        ["Duke Mania, Shivering Isles", "Reached Duke of Mania Rank in the Court of Madness"],
        ["Eliminator, Dark Brotherhood", "Reached Eliminator rank in the Dark Brotherhood"],
        ["Escaped the Imperial Sewers", "Escaped the Imperial Sewers, Main Quest Beginning"],
        ["Evoker, Mages Guild", "Reached Evoker rank in the Mages Guild"],
        ["Footpad, Thieves Guild", "Reached Footpad rank in the Thieves Guild"],
        ["Gladiator, Arena", "Reached Gladiator rank in the Arena"],
        ["Grand Champion, Arena", "Completed the Arena Questline"],
        ["Guardian, Fighters Guild", "Reached Guardian rank in the Fighters Guild"],
        ["Guildmaster, Thieves Guild", "Completed the Thieves Guild Questline"],
        ["Hero, Arena", "Reached Hero rank in the Arena"],
        ["Honored Madman, Shivering Isles", "Reached Honored Madman Rank in the Court of Madness"],
        ["Journeyman, Fighters Guild", "Reached Journeyman rank in the Fighters Guild"],
        ["Journeyman, Mages Guild", "Reached Journeyman rank in the Mages Guild"],
        ["Listener, Dark Brotherhood", "Completed the Dark Brotherhood Questline"],
        ["Located the Shrine of Dagon", "Located the Shrine of Dagon, Main Quest"],
        ["Madgod, Shivering Isles", "Stopped the Greymarch"],
        ["Madman, Shivering Isles", "Reached Madman Rank in the Court of Madness"],
        ["Magician, Mages Guild", "Reached Magician rank in the Mages Guild"],
        ["Master Thief, Thieves Guild", "Reached Master Thief rank in the Thieves Guild"],
        ["Master-Wizard, Mages Guild", "Reached Master-Wizard rank in the Mages Guild"],
        ["Master, Fighters Guild", "Completed the Fighters Guild Questline"],
        ["Murderer, Dark Brotherhood", "Join the Dark Brotherhood"],
        ["Myrmidon, Arena", "Reached Myrmidon rank in the Arena"],
        ["Pickpocket, Thieves Guild", "Joined the Thieves Guild"],
        ["Pit Dog, Arena", "Joined the Arena in the Imperial City"],
        ["Protector, Fighters Guild", "Reached Protector rank in the Fighters Guild"],
        ["Prowler, Thieves Guild", "Reached Prowler rank in the Thieves Guild"],
        ["Regent, Shivering Isles", "Reached Regent Rank in the Court of Madness"],
        ["Shadowfoot, Thieves Guild", "Reached Shadowfoot rank in the Thieves Guild"],
        ["Silencer, Dark Brotherhood", "Reached Silencer rank in the Dark Brotherhood"],
        ["Slayer, Dark Brotherhood", "Reached Slayer rank in the Dark Brotherhood"],
        ["Speaker, Dark Brotherhood", "Reached Speaker rank in the Dark Brotherhood"],
        ["Swordsman, Fighters Guild", "Reached Swordsman rank in the Fighters Guild"],
        ["Tourist, Shivering Isles", "Entered the Shivering Isles"],
        ["Warder, Fighters Guild", "Reached Warder rank in the Fighters Guild"],
        ["Warlock, Mages Guild", "Reached Warlock rank in the Mages Guild"],
        ["Warrior, Arena", "Reached Warrior rank in the Arena"],
        ["Wizard, Mages Guild", "Reached Wizard rank in the Mages Guild"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
