import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/from-the-depths.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 268650 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("from-the-depths");

test("getPlannerData('from-the-depths') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for from-the-depths");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every From the Depths achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every From the Depths achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 From the Depths achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["... the harder they fall", "Defeat 5 large (>30k volume) godlies in (fixed difficulty) campaigns, missions or adventures on built-in planets using standard game constants"],
        ["...and the lord gifteth away", "Gift a total of 1 million commodities to your forces  in a (fixed difficulty) campaign on a built-in planet."],
        ["Alpha strike", "Kill 500 volume per second in a campaign battle (on fixed-difficulty built-in campaigns with standard game constants). Measured when the battle ends."],
        ["An explosive combination", "Build a  1 million damage explosive combo in the campaigns/missions/adventures of built in planets (using standard game constants)"],
        ["Battle master", "Score 5 battle merits in a single (preset difficulty) campaign battle. You'll need to attack a force approximately 10 times your volume and win with 60% of your volume undestroyed to achieve this."],
        ["DWG Easy", "Destroy the Davy Jones Outpost in Quest for Neter on Easy difficulty or above"],
        ["DWG Godly", "Destroy the Davy Jones Outpost in Quest for Neter on Godly difficulty"],
        ["DWG Hard", "Destroy the Davy Jones Outpost in Quest for Neter on Hard difficulty or above"],
        ["DWG Medium", "Destroy the Davy Jones Outpost in Quest for Neter on Medium difficulty or above"],
        ["Espionage", "Get a unit that provides the maximum strategic radar range in a campaign"],
        ["Et tu, Brute?", "Declare war on an ally in a (fixed difficulty) built-in campaign"],
        ["Eyrie survivors' club", "Defeat an Eyrie in fixed difficulty campaign/mission/adventures of Neter."],
        ["Fast Learner!", "Completed the first tutorial"],
        ["GT Easy", "Destroy the Raven's Nest in Quest for Neter on Easy difficulty or above"],
        ["GT Godly", "Destroy the Raven's Nest in Quest for Neter on Godly difficulty"],
        ["GT Hard", "Destroy the Raven's Nest in Quest for Neter on Hard difficulty or above"],
        ["GT Medium", "Destroy the Raven's Nest in Quest for Neter on Medium difficulty or above"],
        ["Heavy weapons", "Save a sub-object that costs more than 50,000 materials"],
        ["Hey, I glow in the dark", "Use more than 15 RTGs on a vehicle you've made yourself. Unlocked in designer."],
        ["LH Easy", "Destroy the Quartz Stone in Quest for Neter on Easy difficulty or above"],
        ["LH Godly", "Destroy the Quartz Stone in Quest for Neter on Godly difficulty "],
        ["LH Hard", "Destroy the Quartz Stone in Quest for Neter on Hard difficulty or above"],
        ["LH Medium", "Destroy the Quartz Stone in Quest for Neter on Medium difficulty or above"],
        ["OW Easy", "Destroy the Onyx Throne in Quest for Neter on Easy difficulty or above"],
        ["OW Godly", "Destroy the Onyx Throne in Quest for Neter on Godly difficulty"],
        ["OW Hard", "Destroy the Onyx Throne in Quest for Neter on Hard difficulty or above"],
        ["OW Medium", "Destroy the Onyx Throne in Quest for Neter on Medium difficulty or above"],
        ["Peak performance", "Get one of your own designs  beyond version 100"],
        ["Petty squabbles", "Take part in a campaign battle with 3 or more teams involved in it (including you). Fixed-difficulty built-in campaigns only."],
        ["Planetary defence force", "Kill 50 Scarlet Dawn units in Neter's (fixed-difficulty) campaigns, missions or adventures (standard game constants)."],
        ["SD Easy", "Destroy the Scarlet Dawn in Quest for Neter on Easy difficulty or above"],
        ["SD Godly", "Destroy the Scarlet Dawn in Quest for Neter on Godly difficulty or above"],
        ["SD Hard", "Destroy the Scarlet Dawn in Quest for Neter on Hard difficulty or above"],
        ["SD Medium", "Destroy the Scarlet Dawn in Quest for Neter on Medium difficulty or above"],
        ["Speed demon", "Achieve a sustained speed of 150m/s below 500m altitude in designer with a vehicle you've made yourself. Neter standard physics."],
        ["SS Easy", "Destroy the Damascus in Quest for Neter on Easy difficulty or above"],
        ["SS Godly", "Destroy the Damascus in Quest for Neter on Godly difficulty"],
        ["SS Hard", "Destroy the Damascus in Quest for Neter on Hard difficulty or above"],
        ["SS Medium", "Destroy the Damascus in Quest for Neter on Medium difficulty or above"],
        ["TG Easy", "Destroy Eris in Quest for Neter on Easy difficulty or above"],
        ["TG Godly", "Destroy Eris in Quest for Neter on Godly difficulty or above"],
        ["TG Hard", "Destroy Eris in Quest for Neter on Hard difficulty or above"],
        ["TG Medium", "Destroy Eris in Quest for Neter on Medium difficulty or above"],
        ["The assassin", "Defeat a unit in the campaigns/adventures/missions of built-in planets whilst it still has 99% of its blocks alive"],
        ["The bigger they are...", "Defeat 5 small (<30k volume) godlies in (fixed difficulty) campaigns, missions, or adventures on built in planets using standard game constants"],
        ["The lord taketh...", "Make a total of 1 million commodities for your team in (fixed difficulty) campaigns of built-in planets"],
        ["WF Easy", "Destroy the Gorgon in Quest for Neter on Easy difficulty or above"],
        ["WF Godly", "Destroy the Gorgon in Quest for Neter on Godly difficulty"],
        ["WF Hard", "Destroy the Gorgon in Quest for Neter on Hard difficulty or above"],
        ["WF Medium", "Destroy the Gorgon in Quest for Neter on Medium difficulty or above"],
        ["What missiles?", "Destroy 1000 missiles in the campaigns/missions/adventures of built in planets (using standard game constants)"],
        ["Wing clipper", "Kill 20 planes in campaign, story mission or adventure"],
        ["Worm hole addict", "Reach level 100 in adventure mode on Neter using standard game constants"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
