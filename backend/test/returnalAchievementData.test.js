import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/returnal.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1649240 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("returnal");

test("getPlannerData('returnal') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for returnal");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Returnal achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Returnal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Returnal achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Shadow in the Fog", "Defeat Phrike, the Overgrown Ruins boss."],
        ["Adapting to Circumstance", "Achieve Weapon Proficiency level 30"],
        ["Adrenaline Spike", "Achieve maximum Adrenaline Level"],
        ["Alternate Fates", "Retrieve 10 Scout Logs"],
        ["Ascending the Mountain", "Complete the Crimson Wastes survey (collect all of that biome's collectibles)."],
        ["Ascension", "Defeat Ixion, the Crimson Wastes boss."],
        ["Atropian Survival", "Learn the basics of survival on Atropos"],
        ["Broken, Restored, Empty", "Complete the first Hospital sequence (Ascension update)."],
        ["Cryptic Messages", "Scan a Xenoglyph"],
        ["Cryptic Translations", "Unlock all translation tiers of a Xenoglyph"],
        ["Destroyer", "Kill 100 hostiles with Disgorgers (Tower of Sisyphus consumables)."],
        ["Echoes of the Past", "Complete the Echoing Ruins survey."],
        ["Empty Embrace", "Unlock the Hospital ending - after collecting all six poppies, completing every Hospital sequence and defeating Algos' final form, go through the opened Hospital door."],
        ["Eternal Ascent", "Die and return in the Tower of Sisyphus (Ascension update)."],
        ["Eternal Return", "Die for the first time."],
        ["Eyes Closed", "Defeat Algos' final form."],
        ["Failed Escape", "Complete Act 1 (after defeating Nemesis)."],
        ["Find Release", "Trigger the final Hospital cutscene by interacting with the bed after 'Empty Embrace'."],
        ["Frozen in Time", "Complete the Fractured Wastes survey."],
        ["Hardened Shell", "Achieve 200% Max Integrity"],
        ["Helios", "Collect all main Achievements"],
        ["In-Field Training", "Complete a daily challenge in Simulation Mode"],
        ["Inner Darkness", "Defeat Ophion, the Abyssal Scar boss (the final boss)."],
        ["Irreversibly Contaminated", "Have 5 Parasites simultaneously"],
        ["Last Drive", "Complete Act 2 (after defeating Ophion)."],
        ["Past the Ruins", "Finish Overgrown Ruins Survey"],
        ["Risk Assessment", "Finish Calculated Risk"],
        ["Second Chance", "Die while carrying the Astronaut Figurine artifact (and revive on the spot)."],
        ["Silence the Song", "Defeat Hyperion, the Echoing Ruins boss."],
        ["Sins of the Mother", "Complete all six House sequences."],
        ["Submerged in Memories", "Complete the Abyssal Scar survey."],
        ["Surgical Precision", "Perform 5 successful Overloads in a row"],
        ["The Watcher", "Defeat Algos' first form (the Tower of Sisyphus boss)."],
        ["Through the Forgotten City", "Complete the Derelict Citadel survey."],
        ["Trial by Judgement", "Defeat Nemesis, the Derelict Citadel boss."],
        ["Visions of the Past", "Complete a Xeno-archive set (excluding Tower of Sisyphus)"],
        ["Welcome Home", "Complete the first House sequence."],
        ["White Shadow", "Collect all six Sunface Fragments and complete Act 3."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
