import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/megaquarium.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 600480 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("megaquarium");

test("getPlannerData('megaquarium') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for megaquarium");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Megaquarium achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Megaquarium achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Megaquarium achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Collector", "Buy 1000 animals."],
        ["Complete 1. Sunnyside", "Complete all objectives in level 1. Sunnyside."],
        ["Complete 10. Megalopolis", "Complete all objectives in level 10. Megalopolis."],
        ["Complete 2. North Woods", "Complete all objectives in level 2. North Woods."],
        ["Complete 3. Elmshorn", "Complete all objectives in level 3. Elmshorn."],
        ["Complete 4. Valberg", "Complete all objectives in level 4. Valberg."],
        ["Complete 5. Napalos", "Complete all objectives in level 5. Napalos."],
        ["Complete 6. Hartcliff", "Complete all objectives in level 6. Hartcliff."],
        ["Complete 7. Myra", "Complete all objectives in level 7. Myra."],
        ["Complete 8. Le Dufont", "Complete all objectives in level 8. Le Dufont."],
        ["Complete 9. Carbon City", "Complete all objectives in level 9. Carbon City."],
        ["Decorator", "Have 1500 Prestige income from decorations and paint."],
        ["Grower", "Grow 50 animals to full size."],
        ["Helpful", "Complete 30 side objectives."],
        ["Name an animal", "Name an animal by opening its window and double clicking its name."],
        ["Popular", "Have 1000 guests enter your aquariums."],
        ["Sandbox Trials - Completionist", "In Sandbox mode, unlock every animal using the Quick Start preset on hard difficulty or higher."],
        ["Sandbox Trials - Limited", "In Sandbox mode, reach rank 12 using the Limited Supply preset on normal difficulty or higher."],
        ["Sandbox Trials - Limited Veteran", "In Sandbox mode, have 80 different species of animals in your aquarium using the Limited Supply preset on hard difficulty or higher."],
        ["Sandbox Trials - Prestige time trial", "In Sandbox mode, accumulate 8000 Prestige before the end of Day 100, using the Quick Start preset on normal difficulty or higher."],
        ["Sandbox Trials - Quick Start Veteran", "In Sandbox mode, reach 10,000 Prestige using the Quick Start preset on hard difficulty or higher."],
        ["Sandbox Trials - Species time trial", "In Sandbox mode, have 70 different species in your aquarium before the end of Day 100, using the Limited Supply preset on normal difficulty or higher."],
        ["Sandbox Trials - Standard", "In Sandbox mode, reach rank 12 using the Standard preset on normal difficulty or higher."],
        ["Sell sell sell!", "4000 daily revenue from food, drink and gift shop sales."],
        ["Trader", "Complete 5 trades."],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
