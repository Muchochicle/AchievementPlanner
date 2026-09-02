import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/please-touch-the-artwork.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1097100 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("please-touch-the-artwork");

test("getPlannerData('please-touch-the-artwork') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for please-touch-the-artwork");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Please, Touch The Artwork achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Please, Touch The Artwork achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Please, Touch The Artwork achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Back To Reality", "Solve the 'Back To Reality' puzzle in the New York City gallery."],
        ["Betrayal", "Solve the 'Betrayal' puzzle in the Boogie Woogie gallery."],
        ["Boogie Woogie : The End", "Complete every puzzle in the Boogie Woogie gallery."],
        ["Broadway", "Solve the 'Broadway' puzzle in the Boogie Woogie gallery."],
        ["Changing Perspectives", "Solve the 'Changing Perspectives' puzzle in the New York City gallery."],
        ["Counter Composition", "Solve the 'Counter Composition' puzzle in The Style gallery."],
        ["Crossing Borders", "Solve the 'Crossing Borders' puzzle in the New York City gallery."],
        ["Family", "Solve the 'Family' puzzle in the Boogie Woogie gallery."],
        ["Home No Longer", "Solve the 'Home No Longer' puzzle in the New York City gallery."],
        ["I Love The Rain", "Solve the 'I Love The Rain' puzzle in the New York City gallery."],
        ["New York City : The End", "Complete every puzzle in the New York City gallery."],
        ["Night", "Solve the 'Night' puzzle in the Boogie Woogie gallery."],
        ["Nightmare", "Solve the 'Nightmare' puzzle in the Boogie Woogie gallery."],
        ["Plazas & Buildings", "Solve the 'Plazas & Buildings' puzzle in the Boogie Woogie gallery."],
        ["Red Squares", "Solve the 'Red Squares' puzzle in the Boogie Woogie gallery."],
        ["Silence", "Solve the 'Silence' puzzle in the New York City gallery."],
        ["The Diamond", "Solve 'The Diamond' puzzle in The Style gallery."],
        ["The Fifth Day", "Solve 'The Fifth Day' puzzle in The Style gallery."],
        ["The First Day", "Solve 'The First Day' puzzle in The Style gallery."],
        ["The Fourth Day", "Solve 'The Fourth Day' puzzle in The Style gallery."],
        ["The Second Day", "Solve 'The Second Day' puzzle in The Style gallery."],
        ["The Seventh Day", "Solve 'The Seventh Day' puzzle in The Style gallery."],
        ["The Sixth Day", "Solve 'The Sixth Day' puzzle in The Style gallery."],
        ["The Split", "Solve 'The Split' puzzle in The Style gallery."],
        ["The Style : The End", "Complete every puzzle in The Style gallery."],
        ["The Third Day", "Solve 'The Third Day' puzzle in The Style gallery."],
        ["Tunnels", "Solve the 'Tunnels' puzzle in the Boogie Woogie gallery."],
        ["Victory", "Solve the 'Victory' puzzle in the Boogie Woogie gallery."],
        ["Visit The Boogie Woogie Gallery", "Visit the Boogie Woogie gallery."],
        ["Visit The New York City Gallery", "Visit the New York City gallery."],
        ["Visit The Style Gallery", "Visit The Style gallery (the Composition-with-Red-Blue-Yellow puzzle mode)."],
        ["White Squares", "Solve the 'White Squares' puzzle in the Boogie Woogie gallery."],
        ["Winter Is Coming", "Solve the 'Winter Is Coming' puzzle in the New York City gallery."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
