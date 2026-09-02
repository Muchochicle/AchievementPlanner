import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/millennia.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1268590 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("millennia");

test("getPlannerData('millennia') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for millennia");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Millennia achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Millennia achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Millennia achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abundance", "Have a Farm on a Lush Wheat tile."],
        ["Age of Aether", "Take the timeline into the Age of Aether."],
        ["Age of Alchemy", "Take the timeline into the Age of Alchemy."],
        ["Age of Archangels", "Win a game via the Age of Archangels."],
        ["Age of Atom", "Take the timeline into the Age of Atom."],
        ["Age of Blood", "Take the timeline into the Age of Blood."],
        ["Age of Conquest", "Win a game via the Age of Conquest."],
        ["Age of Departure", "Win a game via the Age of Departure."],
        ["Age of Discovery", "Take the timeline into the Age of Discovery."],
        ["Age of Dystopia", "Take the timeline into the Age of Dystopia."],
        ["Age of Ecology", "Take the timeline into the Age of Ecology."],
        ["Age of Generals", "Win a game via the Age of Generals."],
        ["Age of Harmony", "Win a game via the Age of Harmony."],
        ["Age of Heresy", "Take the timeline into the Age of Heresy."],
        ["Age of Heroes", "Take the timeline into the Age of Heroes."],
        ["Age of Ignorance", "Take the timeline into the Age of Ignorance."],
        ["Age of Intolerance", "Take the timeline into the Age of Intolerance."],
        ["Age of Monuments", "Take the timeline into the Age of Monuments."],
        ["Age of Old Ones", "Take the timeline into the hidden Age of Old Ones, a variant Crisis Age."],
        ["Age of Plague", "Take the timeline into the Age of Plague."],
        ["Age of the Singularity", "Win a game via the Age of the Singularity"],
        ["Age of Transcendence", "Win a game via the Age of Transcendence."],
        ["Age of Utopia", "Take the timeline into the Age of Utopia."],
        ["Age of Visitors", "Take the timeline into the Age of Visitors."],
        ["Age of Wasteland", "Take the timeline into the Age of Wasteland."],
        ["Age of Wasteland (Victory)", "Win a game via the Age of Wasteland."],
        ["Better Luck Next Time", "Lose a game."],
        ["Customizer", "Create a Custom Nation."],
        ["Doomsday Machine", "Use a Retaliatory Strike."],
        ["Dr. Livingstone, I Presume?", "Complete an Expedition."],
        ["Fast Times", "Win a game by turn 200."],
        ["Give Peace A Chance", "Host a Peace Convention."],
        ["Glitch #1", "Reveal the first Glitch (Calibration) - part of the hidden Project ATLAS anomaly chain the community is still mapping."],
        ["Glitch #2", "Reveal the second Glitch (Purpose) in the hidden Project ATLAS anomaly chain."],
        ["Glitch #3", "Reveal the third Glitch in the hidden Project ATLAS anomaly chain."],
        ["Glitch #4", "Reveal the fourth Glitch (Darkness) in the hidden Project ATLAS anomaly chain."],
        ["Glitch #5", "Reveal the fifth Glitch (Truth) in the hidden Project ATLAS anomaly chain."],
        ["Glitch #6", "Reveal the sixth Glitch (Project ATLAS) in the hidden anomaly chain."],
        ["Hard Time", "Win a game against at least 3 Master AIs."],
        ["I Am Become Death", "Complete the Manhattan Project."],
        ["Mainline Timeline", "Reach the Age of Information with only Standard Ages in the timeline."],
        ["Network Coverage", "Have 4 Tambos."],
        ["O.G.", "Start a Faction."],
        ["Out of Time", "Win a game by reaching the turn limit."],
        ["Petting Zoo", "Control both a Mastodon and Smilodon simultaneously."],
        ["Seeds of Faith", "Start a religion."],
        ["Time To Die", "Win a game by being the last remaining Nation."],
        ["True Ending", "Win a game via the hidden 'True Ending' victory, reached by completing the Project ATLAS Glitch anomaly chain."],
        ["Undeterred", "Launch an ICBM while in Age of Wasteland."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
