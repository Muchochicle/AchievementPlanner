import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lorelei-and-the-laser-eyes.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2008920 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lorelei-and-the-laser-eyes");

test("getPlannerData('lorelei-and-the-laser-eyes') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for lorelei-and-the-laser-eyes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Lorelei and the Laser Eyes achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Lorelei and the Laser Eyes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Lorelei and the Laser Eyes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Augenwaldburg Race Winner", "Awarded to the winner of the yearly running race at Augenwaldburg."],
        ["Coat Rack Connoisseur of the Year Award (Honorable Mention)", "Awarded for outstanding devotion within the field of discarding personal overwear."],
        ["Cutter of the Week", "Awarded for great perseverance and proficiency within the field of division."],
        ["Entomologist of the Year", "Awarded for remarkable contributions in mapping the taxonomy of bugs."],
        ["Euterpe Prize of the Year", "Awarded for notable contributions in spreading the gift of music."],
        ["Herzmuller’s Computing Prize", "Awarded for significant usage of computational devices."],
        ["Ilona Zevon & Milton Foley Grand Prize", "Awarded for commendable comradery and masterful navigation of relationships."],
        ["JW Arkitektkontor Employee of the Month", "Awarded for excellence within the field of charting."],
        ["Miss Knowledgeable of the Year", "Awarded for correctly answering all brothers’ questions, all while retaining grace and femininity."],
        ["Nobelle Prize in Anthropology or Sociology", "Awarded for outstanding communication with friends and family."],
        ["S.C. Bolt’s Genius Award", "Awarded for great achievements in the field of solving number related riddles."],
        ["Simogo Consumer of the Year Award", "Awarded for exceptional collections of polystyrene."],
        ["Strigiformes Award for Best Listener", "Awarded for striking enthusiasm for stories and fables."],
        ["Super Gamer of the Month", "Awarded for significant passion for game collecting."],
        ["Tail Wagging Society Prize", "Awarded for showing remarkable care for our canine friends."],
        ["The Black Arts Coffee Club Member of the Month", "Awarded for plentiful use of our services."],
        ["The True American Award", "Awarded for outstanding belief in The American Dream."],
        ["Theseus Award", "Awarded for exemplary dexterity and skillful traversal of mazes."],
        ["Totte Ahla Sanningén Prize", "Awarded for endeavors in revealing conditions that the public was previously unaware of."],
        ["Tropaeum Ex Fraternitate Oculi", "Awarded to the righteous who seek knowledge beyond human comprehension."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
