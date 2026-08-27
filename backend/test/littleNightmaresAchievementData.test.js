import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/little-nightmares.json - 22 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 424840 (fetched through this app's own services/steamApi.js) -
// 12 of 22 ship a real, official Steam description. The schema's own
// `gameName` field for this appid incorrectly reads "ATLAS" (a stale
// value on Steam's side) - the achievement content itself and Steam's
// public storesearch API both confirm 424840 is genuinely Little
// Nightmares. Kitchen Hand, Highly Sprung, Rascal, Elusive, Six's Song,
// Fun & Games Ahead, Ashes in The Maw, " We'll Meet Again" (note the
// leading space, copied verbatim from Steam's own displayName),
// Ashes to Ashes, and I'm Losing You are hidden achievements Steam
// never describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const littleNightmares = getPlannerData("little-nightmares");

test("getPlannerData('little-nightmares') returns real planner data with 22 curated achievements", () => {

    assert.ok(littleNightmares, "expected real planner data for little-nightmares");
    assert.ok(Array.isArray(littleNightmares.achievements));
    assert.strictEqual(littleNightmares.achievements.length, 22);

});

test("every Little Nightmares achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = littleNightmares.achievements.map(a => a.id);
    const apinames = littleNightmares.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Little Nightmares achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of littleNightmares.achievements) {

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

test("every one of the 12 officially-described Little Nightmares achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 10 hidden achievements are excluded here - Steam never
    // exposes a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Little Lost Things", "Kindness will be your undoing!"],
        ["Light Up Your Life", "Not all lights can be trusted, but these should be quite safe!"],
        ["The Prison", "Look how the canary has flown its cage!"],
        ["The Lair", "Little lost things sometimes find their way home."],
        ["The Kitchen", "The Chefs will miss you!"],
        ["The Guest Area", "Little fox among hungry wolves!"],
        ["The Lady's Quarters", "A storm is coming. That coat should come in useful."],
        ["Hard to the Core", "What’s different about you? Why are you so brave?"],
        ["So Close", "You'll do better next time."],
        ["Not Alone", "What's new with you?"],
        ["End in Sight", "The final stretch will be largely uneventful."],
        ["Is Anybody Out There?", "I wish I could visit you there."]
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Kitchen Hand", "Highly Sprung", "Rascal", "Elusive", "Six's Song",
        "Fun & Games Ahead", "Ashes in The Maw", " We'll Meet Again", "Ashes to Ashes", "I'm Losing You"
    ]);

    const dataPairs = littleNightmares.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 10 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["KitchenHand", "Kitchen Hand"],
        ["HighlySprung", "Highly Sprung"],
        ["Rascal", "Rascal"],
        ["Elusive", "Elusive"],
        ["Glissando", "Six's Song"],
        ["FunAndGamesAhead", "Fun & Games Ahead"],
        ["AshesInTheMaw", "Ashes in The Maw"],
        ["WellMeetAgain", " We'll Meet Again"],
        ["AshesToAshes", "Ashes to Ashes"],
        ["ImLosingYou", "I'm Losing You"]
    ];

    assert.strictEqual(names.length, 10, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = littleNightmares.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named ${JSON.stringify(name)} with a non-empty curatorial description`);

    }

});
