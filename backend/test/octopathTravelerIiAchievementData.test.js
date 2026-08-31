import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/octopath-traveler-ii.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1971650 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("octopath-traveler-ii");

test("getPlannerData('octopath-traveler-ii') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for octopath-traveler-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every OCTOPATH TRAVELER II achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every OCTOPATH TRAVELER II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 OCTOPATH TRAVELER II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 Out Cold", "Soothe or knock 100 townspeople unconscious (via the Bribe / Challenge path actions)."],
        ["A New Skill", "Learned a skill for the first time."],
        ["A Peaceful Little Forest", "Complete Castti and Ochette's Crossed Path story."],
        ["A Story All Your Own", "Unlocked all achievements."],
        ["Agnea the Star", "Completed Agnea's story."],
        ["An Answer, a Journey", "Completed Osvald's story."],
        ["Battle-Tested Gear", "Obtained all battle-tested equipment."],
        ["By the Light of the Heart", "Complete Agnea and Hikari's Crossed Path story."],
        ["Clear Skies", "Completed Hikari's story."],
        ["Dawn Breaks", "Reach the secret final chapter and return dawn to the world."],
        ["Eight Travelers", "Gathered all eight travelers."],
        ["Eir's Apothecaries", "Completed Castti's story."],
        ["EX Skill Master", "Learned all EX skills."],
        ["First Break", "Broke an enemy for the first time in battle."],
        ["Gate to the Netherworld", "Defeat the netherworldly superboss at the end of the secret final chapter."],
        ["Hard Hitter", "Dealt 9,999 or more damage."],
        ["Informed Adventurer", "Gleaned information from 100 townspeople."],
        ["Job Master", "Learned all secondary jobs."],
        ["Master of Solistia", "Traveled to every location on the map."],
        ["Master of Your Craft", "Learned a job's divine skill."],
        ["Max Boost", "Acted at maximum boost for the first time."],
        ["Mysteries of the Night Sky", "Complete Osvald and Partitio's Crossed Path story."],
        ["Octopath Traveler", "Approached the end of your journey."],
        ["Octopath Traveler...?", "Have four townspeople following you at once (via the Guide / Entreat path actions)."],
        ["Protector of the Island", "Completed Ochette's story."],
        ["Record Collector", "Obtain every music record."],
        ["Setting Sail", "Rode the ferry to a new land."],
        ["The Collar Removed", "Completed Throné's story."],
        ["The Detective and His Assistant", "Complete Temenos and Throné's Crossed Path story."],
        ["The Journey Begins", "Embarked on a journey."],
        ["The Road to Prosperity", "Completed Partitio's story."],
        ["The Truth Lies in the Flame", "Completed Temenos's story."],
        ["Worth the Detour", "Finished all side stories."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
