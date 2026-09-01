import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/superbrothers-sword-sworcery-ep.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 204060 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("superbrothers-sword-sworcery-ep");

test("getPlannerData('superbrothers-sword-sworcery-ep') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for superbrothers-sword-sworcery-ep");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Sword & Sworcery EP achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Sword & Sworcery EP achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Sword & Sworcery EP achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["#honest", "Complete the Scythian's woeful errand without cheating."],
        ["#moar", "It has been said that something lurks within the White Stag of Scythia, wherever/whenever/whatever that might be."],
        ["Assemble the Trigon Trifecta", "Complete the three trigons in The Dark Moon Rock Show."],
        ["Cheating Cheater", "Adjust your computer's date/time settings to access other moon phases & thus feel profound shame."],
        ["Monster Hunter", "Find & somehow slay at least 7 lagomorphs, you jerk."],
        ["Now We Are Cosmic Friends Forever", "Upload the Megatome at the summit of Mingi Taw & complete the Scythian's woeful errand."],
        ["The Ballad of the Space Babies", "Summon a slumbering sylvan sprite & send it skyward."],
        ["The Bright Moon Trigon", "Be awesome, get the Bright Moon Trigon from beneath an impossible island in the centre of a placid lake."],
        ["The Dark Moon Trigon", "Despite everything, tame the Dark Moon Trigon in a rain-soaked forest during a storm of thunder & lightning."],
        ["The Gold Trigon", "Tame the cosmic geometry of The Gold Trigon in a sunlit meadow where angry bird sculptures loom."],
        ["The Grizzled Boor", "Feel free to take this opportunity to secretly self-identify as a principled, loving individual or a violent psychopath."],
        ["The Moon Grotto", "Use the Grizzled Boor's key to open the locked door to you-know-where."],
        ["The Mushroom Kingdom", "Experience the strange insight offered by a divinatory mushroom."],
        ["We Got the Megatome", "Retrieve the burdensome book of sinister sworcery from the darkness beneath Mingi Taw."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
