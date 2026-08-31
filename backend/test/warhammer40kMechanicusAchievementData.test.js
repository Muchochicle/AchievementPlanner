import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-40k-mechanicus.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 673880 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("warhammer-40k-mechanicus");

test("getPlannerData('warhammer-40k-mechanicus') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-40k-mechanicus");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Warhammer 40,000: Mechanicus achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Warhammer 40,000: Mechanicus achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Warhammer 40,000: Mechanicus achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AoE-phobia", "Complete the game with the setting \"AoE weapon\" disabled at the start of a game"],
        ["Architect Abortion", "Defeat Neftusk"],
        ["Battle Servitor", "Unlock Kataphron Breacher"],
        ["Celestial Cartography Catastrophe", "Defeat Ekropis"],
        ["Cohortus Maximus", "Reach a six Tech-Priest cohort"],
        ["Competent Cohort", "Reach a four Tech-Priest cohort"],
        ["Ding Dong Szaregon's Gone", "Defeat Szaregon"],
        ["False God", "Find and unlock a hidden moment"],
        ["Fleshy Disposal", "Defeat Ubjao"],
        ["Galvanic Rifle", "Unlock Skitarii Ranger"],
        ["Half a cog", "Reach 50% in the awakening gauge"],
        ["Hard", "Complete the game in hard mode"],
        ["Impatient destruction", "Defeat Szaregon before the final countdown"],
        ["Impossible", "Complete the game in Very Hard mode"],
        ["Knowledge is power", "Have a Tech-Priest unlock a full Discipline tree"],
        ["Legio Cybernetica", "Unlock Kastelan Robot"],
        ["Melee Machine", "Complete the game with the setting \"Melee Only\" selected at the start of a game"],
        ["Mother of Xenarites", "Side with Scaevola"],
        ["No aid from the Omnissiah", "Complete a mission without using any Canticles"],
        ["No Omnissian Guidance", "Complete the game with the setting \"Canticle number\" equals 0 at the start of a game"],
        ["Not the Men-of-Iron", "Complete the game with the \"Ironman\" mode activated"],
        ["One with the Machine", "Have a Tech-Priest unlock two full Discipline trees"],
        ["Perma-live", "Complete the game with the \"Permadeath\" mode activated"],
        ["Power Ranger", "Unlock Skitarii Ranger Alpha"],
        ["Purge the Heretek", "Complete the game with the Heretek DLC content enabled (turn it on in Additional Settings when starting a new game)."],
        ["Radium Ready", "Unlock Skitarii Vanguard"],
        ["Sensory overload", "Unlock the Sicarian Infiltrator - it can be earned as a mission reward from any mission."],
        ["Sterile Perfection", "Side with Videx"],
        ["Taser Goad", "Unlock Skitarii Vanguard Alpha"],
        ["This is only the beginning", "Survive the first mission"],
        ["Transonic Blur", "Unlock the Sicarian Ruststalker - it can be earned as a mission reward from any mission."],
        ["Vivisected Vizier", "Defeat Mhelob"],
        ["Watch them crumble", "Defeat Agrolekh"],
        ["Zero to Hero", "Complete the game after starting with 0 Blackstone"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
