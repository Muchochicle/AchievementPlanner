import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/clair-obscur-expedition-33.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1903340 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("clair-obscur-expedition-33");

test("getPlannerData('clair-obscur-expedition-33') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for clair-obscur-expedition-33");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Clair Obscur: Expedition 33 achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Clair Obscur: Expedition 33 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Clair Obscur: Expedition 33 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["“Endless”", "Complete all 33 fights of the Endless Tower."],
        ["À On", "Defeat the Serpenphare world boss (the 'A On' encounter)."],
        ["A Peculiar Encounter", "Defeat the Mime in Lumière."],
        ["Aiding the Enemy", "Complete all ten Nevron ('Sad Monster') quests scattered across the world map."],
        ["Ancient Sanctuary", "Find your way through Ancient Sanctuary (story progress)."],
        ["Back to Lumière", "Return to Lumiere during Act 2."],
        ["Carreau Parfait", "Defeat the Chromatic Petank boss ('Carreau Parfait')."],
        ["Chroma Proficiency", "Use a level 3 Gradient Attack."],
        ["Clea", "Defeat Clea, an optional superboss."],
        ["Connoisseur", "Find all 33 music records."],
        ["Curious", "Witness an optional scene at camp."],
        ["Esquie", "Reach relationship level 7 with Esquie."],
        ["Esquie's Nest", "Find your way through Esquie's Nest (story progress)."],
        ["Expedition 33", "Unlock all playable characters."],
        ["Expeditioner", "Reach level 33."],
        ["Feet Collection", "Acquire all 45 of Monoco's Bestial Wheel skills ('Feet Collection')."],
        ["First Axon", "Defeat the first Axon boss."],
        ["Flying Waters", "Find your way through Flying Waters (story progress)."],
        ["Follow The Trail", "Find all of the journals from prior expeditions."],
        ["Forgotten Battlefield", "Find your way through the Forgotten Battlefield (story progress)."],
        ["Gestral Games", "Win all five of the Gestral Beach minigames."],
        ["Gestral Village", "Find your way through the Gestral Village (story progress)."],
        ["Legend", "Unlock Esquie as a playable party member ('Legend')."],
        ["Lost Gestrals", "Find all nine Lost Gestrals."],
        ["Lumière", "Embark on the Expedition."],
        ["Lumina", "Consume a Lumina point."],
        ["Lune", "Reach relationship level 7 with Lune."],
        ["Maelle", "Reach relationship level 7 with Maelle - requires choosing the '(Truth)' dialogue option during her level 7 scene."],
        ["Maximisation", "As Sciel, consume 20 Foretell on a single target during Twilight ('Maximisation')."],
        ["Monoco", "Reach relationship level 7 with Monoco."],
        ["Monoco's Station", "Find your way through Monoco's Station (story progress)."],
        ["Monolith", "Reach the Monolith."],
        ["Noir et Blanc", "Complete the Painting Workshop area ('Noir et Blanc')."],
        ["Old Lumière", "Find your way through Old Lumiere (story progress)."],
        ["Overcharge", "With Gustave, use a fully charged Overcharge that Breaks an enemy."],
        ["Paint Cage", "Break a Paint Cage."],
        ["Paintress", "Defeat the Paintress."],
        ["Peace At Last", "Defeat Simon, an optional endgame superboss."],
        ["Perfect Flow", "As Lune, consume Stains on four consecutive turns ('Perfect Flow')."],
        ["Perfection", "Reach Rank S as Verso ('Perfection')."],
        ["Plane, Train, and Submarine", "Unlock all five of Esquie's world-map traversal abilities (swim, fly, dive, and the rest)."],
        ["Professional", "Defeat a boss without taking any damage."],
        ["Sciel", "Reach relationship level 7 with Sciel."],
        ["Second Axon", "Defeat the second Axon boss."],
        ["Spring Meadows", "Find your way through Spring Meadows (story progress)."],
        ["Sprong", "Defeat the Sprong world boss."],
        ["Stone Wave Cliffs", "Find your way through Stone Wave Cliffs (story progress)."],
        ["Survivor", "Reach level 99."],
        ["Synergy", "As Maelle, use Percee on a marked enemy while in Virtuose Stance ('Synergy')."],
        ["The End", "Defeat the final boss at the end of Act 3."],
        ["Time to Spill Some Ink", "Break an enemy."],
        ["Trailbreaker", "Reach level 66."],
        ["Weapon Mastery", "Fully upgrade a weapon."],
        ["Weapon Upgrade", "Upgrade a weapon once."],
        ["Wheel Control", "As Monoco, cast an upgraded Bestial Wheel skill on four consecutive turns ('Wheel Control')."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
