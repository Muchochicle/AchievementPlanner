import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/civilization-vii.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1295660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("civilization-vii");

test("getPlannerData('civilization-vii') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for civilization-vii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Civilization VII achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Civilization VII achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Civilization VII achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beyond the Horizon.", "Complete 3 Major Expansionist Triumphs in a single Exploration Age."],
        ["Book Smart.", "Complete 3 Major Scientific Triumphs in a single Antiquity Age."],
        ["Budding Buddhist.", "Win the modern age as Ashoka, World Renouncer."],
        ["Can't Touch This.", "Win the modern age as Jose Rizal."],
        ["Coin Toss.", "Complete 3 Major Economic Triumphs in a single Exploration Age."],
        ["Deep Friedrich.", "Win the modern age as Friedrich, Baroque."],
        ["Eat, Inca, and be Merry.", "Win the modern age as Pachacuti."],
        ["Enlightened Rule.", "Win the modern age as Himiko, High Shaman."],
        ["Ground Breaker/Freedom Fighter.", "Win the modern age as Harriet Tubman."],
        ["Had the last Lafayette.", "Win the modern age as Lafayette."],
        ["Hit Mach 10.", "Win the modern age as Machiavelli."],
        ["Inquisitor Queen", "Win the modern age as Isabella."],
        ["Lived up to the Name.", "Win the modern age as Catherine the Great."],
        ["Magne Squeeze.", "Win the modern age as Charlemagne."],
        ["On the Fritz.", "Win the modern age as Friedrich, Oblique."],
        ["One Hit Wonder.", "Complete 3 Major Cultural Triumphs in a single Antiquity Age."],
        ["Paint the Map.", "Complete 3 Major Expansionist Triumphs in a single Antiquity Age."],
        ["Pax a Wallop.", "Complete 3 Major Military Triumphs in a single Antiquity Age."],
        ["Playing God.", "Win a game on Deity difficulty."],
        ["Postmaster and Commander.", "Win the modern age as Ben Franklin."],
        ["Proverbial Wisdom.", "Win the modern age as Confucius."],
        ["Radiance of the Sun.", "Win the modern age as Himiko, Queen of Wa."],
        ["Relic Hunter.", "Complete 3 Major Cultural Triumphs in a single Exploration Age."],
        ["Roman of the Hour.", "Win the modern age as Augustus."],
        ["Sailed the Seven Xerxes.", "Win the modern age as Xerxes, King of kings."],
        ["Science in the Suburbs.", "Complete 3 Major Scientific Triumphs in a single Exploration Age."],
        ["Settled the Score.", "Complete 3 Major Military Triumphs in a single Exploration Age."],
        ["Shawnee Deep in Victory.", "Win the modern age as Tecumseh."],
        ["Sisters Before Misters.", "Win the modern age as Trung Trac."],
        ["Son of a Duck.", "Win the modern age as Ibn Battuta."],
        ["Sorry Not Sorrow.", "Win the modern age as Ashoka, World Conqueror."],
        ["Suted for Battle.", "Win the modern age as Hatshepsut."],
        ["Talk of the Towns.", "Complete 3 Major Diplomatic Triumphs in a single Antiquity Age."],
        ["Trade Secret.", "Complete 3 Major Economic Triumphs in a single Antiquity Age."],
        ["Velvet Glove.", "Complete 3 Major Diplomatic Triumphs in a single Exploration Age."],
        ["Woman-o-war.", "Win the modern age as Amina."],
        ["Xerxing Red.", "Win the modern age as Xerxes, the Achaemenid."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
