import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/planet-zoo.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 703080 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 38 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("planet-zoo");

test("getPlannerData('planet-zoo') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for planet-zoo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Planet Zoo achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Planet Zoo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 officially-described Planet Zoo achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A superstar comes along", "Have an animal reach a 5 star Animal Rating"],
        ["An Elephant Never Forgets", "Adopt the retiring Indian Elephants in Scenario 7"],
        ["Animal Research", "Complete the research on one animal in Franchise mode"],
        ["Baby Boom", "Have 73 baby animals born"],
        ["Barrier Builder", "Build 10km of barrier"],
        ["Bronze Award", "Gain a bronze award in career mode"],
        ["Career Complete", "Complete all career levels to a bronze standard"],
        ["Circle of Life", "Have a Juvenile Lion be born in a Zoo containing at least 10 species"],
        ["Community", "Take part in a community challenge"],
        ["Diversity", "Open a zoo in every biome"],
        ["Enriched", "Place 25 different Enrichment Items"],
        ["Franchise Zoo", "Open your first Franchise zoo"],
        ["Ghost", "Have an albino breed"],
        ["Global Zoo", "Open 25 Franchise zoos"],
        ["Gold Award", "Gain a gold award in career mode"],
        ["Gold Career", "Complete all career levels to a gold standard"],
        ["Hard - Career Complete", "Complete all career levels to a bronze standard on hard difficulty"],
        ["Hard - Gold Career", "Complete all career levels to a gold standard on hard difficulty"],
        ["Hard - Silver Career", "Complete all career levels to a silver standard on hard difficulty"],
        ["Life finds a way ", "Have your first baby animal born in your zoo"],
        ["Loaner", "Repay $50,000 in loans"],
        ["Natural Selection", "Have an animal in your zoo with a genetic makeup of over 90% in all categories"],
        ["Nerd", "Achieve an Education Rating of 5 Stars in a Franchise zoo"],
        ["Oh My!", "Have a Lion, a Tiger and a Bear in your Zoo at any one time"],
        ["Planet Zoo", "Open a zoo on every continent"],
        ["Rebuilding", "Release 20 critically endangered animals to the wild"],
        ["Redecorating", "Enable all enrichment items in an exhibit"],
        ["Say Goodbye", "Release your first animal"],
        ["Silver Award", "Gain a silver award in career mode"],
        ["Silver Career", "Complete all career levels to a silver standard"],
        ["The Elephant in the Room", "Have two different breeds of Elephant born in your Zoo"],
        ["This one’s a Keeper", "Have at least 3 Keepers, each with a different work zone, in a Sandbox, Franchise or Challenge zoo"],
        ["Tour Guide", "Build 1km of a tracked ride"],
        ["Trainer", "Fully train a member of staff"],
        ["Welcome to Planet Zoo", "Create your avatar and place them on the globe"],
        ["Welcome to the Family", "Adopt your first animal"],
        ["Wow, that's a lot!", "Build a habitat with 30 animals in it that all have welfare over 75%"],
        ["Zoologist", "Complete the Zoopedia"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
