import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dredge.json - 60 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1562430 (fetched through this app's own services/steamApi.js) - 41 of
// 60 ship a real, official Steam description. The 19 hidden
// achievements (4 relic-delivery achievements, both endings, all 7
// eldritch-relic-ability achievements, the shrine-completion
// achievement, and several achievements from each DLC) are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries sourced
// from the official DREDGE wiki's own achievements page
// (dredge.wiki.gg/wiki/Achievements). difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const dredge = getPlannerData("dredge");

test("getPlannerData('dredge') returns real planner data with 60 curated achievements", () => {

    assert.ok(dredge, "expected real planner data for dredge");
    assert.ok(Array.isArray(dredge.achievements));
    assert.strictEqual(dredge.achievements.length, 60);

});

test("every Dredge achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = dredge.achievements.map(a => a.id);
    const apinames = dredge.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Dredge achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of dredge.achievements) {

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

test("every one of the 41 officially-described Dredge achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 19 hidden achievements are excluded here - Steam never
    // exposes a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Lifted From the Deep", "Catch 250 fish using rods."],
        ["Tangled in This Web", "Catch 150 fish in trawl nets."],
        ["Trapped by These Walls", "Catch 100 crabs in crab pots."],
        ["Lives for Profit", "Sell a total of $2500 worth of fish."],
        ["Cash for Gold", "Sell a total of $1500 worth of trinkets."],
        ["Unwanted", "Discard 25 fish."],
        ["Careless Harvesting", "Deplete a total of 25 fishing spots."],
        ["Master Angler", "Catch all known species of fish."],
        ["The Key", "Deliver the Key."],
        ["Hull: Improved", "Upgrade to the 2nd tier hull."],
        ["Hull: Refined", "Upgrade to the 3rd tier hull."],
        ["Hull: Advanced", "Upgrade to the 4th tier hull."],
        ["Perfect Packing", "Have a full cargo."],
        ["Feeling Prepared", "Install equipment into every slot on your ship."],
        ["Aberration Attractor", "Catch all aberrations."],
        ["Providence", "Complete all side quests. One way or another."],
        ["Safe Havens", "Visit every dock in the game."],
        ["Researcher: Rods", "Research all rods."],
        ["Researcher: Nets", "Research all nets."],
        ["Researcher: Pots", "Research all pots."],
        ["Researcher: Engines", "Research all engines."],
        ["Swift Reaper", "Have a combined fishing speed of 200%."],
        ["No Time to Linger", "Have a combined engine speed of 75kn."],
        ["Light up the Night", "Have a combined light strength of 3000 lumens."],
        ["Introductions", "Complete the introduction quest."],
        ["From the Depths", "Obtain all other achievements."],
        ["Polar Angler", "Catch all known species of fish in The Pale Reach."],
        ["Cold Corruptions", "Catch all aberrations in The Pale Reach."],
        ["Under The Ice", "Finish the main quest in The Pale Reach."],
        ["Frozen Favors", "Finish all side quests in The Pale Reach."],
        ["Ancient Angler", "Catch all known species of fish in The Iron Rig."],
        ["Primordial Deviations", "Catch all aberrations in The Iron Rig (excluding exotics)."],
        ["Missing Shipment", "Deliver the missing shipment to the rig."],
        ["Rig Architect", "Build all levels of all buildings on the rig."],
        ["Remedial Apparatus", "Equip the Siphon Trawler."],
        ["Dark Custodian", "Collect a total of 10 Dark Canisters."],
        ["Hull: Industrial", "Upgrade to the 5th tier hull."],
        ["Exotic Exemplar", "Catch any exotic aberration."],
        ["Enhanced Abilities", "Upgrade all 3 basic abilities."],
        ["Shadowed Splashes", "Have 5 Dark Splashes in your inventory."],
        ["The Gleaming Goliath", "Evade that which stalks the disturbed sediment."]
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "The Secret", "The Bond", "The Chains", "The Moment", "Unshackled", "Sated",
        "From the Fog", "Prey Sighted", "Mixed Results", "Cruel Heat", "Dimensional Bypass",
        "Banisher", "Unsustainable Fishing", "Servant of the Shrines",
        "Feeding Time", "Icebreaker", "Fresh Fish", "From The Black Depths", "The Iron Ruin"
    ]);

    assert.strictEqual(hiddenNames.size, 19, "sanity check on this test's own hidden-name list");

    const dataPairs = dredge.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 19 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["COMPLETE_CHAPTER_2", "The Secret"],
        ["COMPLETE_CHAPTER_3", "The Bond"],
        ["COMPLETE_CHAPTER_4", "The Chains"],
        ["COMPLETE_CHAPTER_5", "The Moment"],
        ["ENDING", "Unshackled"],
        ["ENDING_ALT", "Sated"],
        ["ABILITY_FOGHORN", "From the Fog"],
        ["ABILITY_SPYGLASS", "Prey Sighted"],
        ["ABILITY_BAIT", "Mixed Results"],
        ["ABILITY_HASTE", "Cruel Heat"],
        ["ABILITY_MANIFEST", "Dimensional Bypass"],
        ["ABILITY_BANISH", "Banisher"],
        ["ABILITY_ATROPHY", "Unsustainable Fishing"],
        ["SOLVE_ALL_SHRINES", "Servant of the Shrines"],
        ["DLC_3_3", "Feeding Time"],
        ["DLC_3_6", "Icebreaker"],
        ["DLC_3_7", "Fresh Fish"],
        ["DLC_3_8", "From The Black Depths"],
        ["DLC_4_4", "The Iron Ruin"]
    ];

    assert.strictEqual(names.length, 19, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = dredge.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
