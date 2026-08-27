import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/va11-hall-a.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 447530 (fetched through this app's own services/steamApi.js) - 33 of
// 34 ship a real, official Steam description. Did you miss me? is the
// one hidden achievement Steam never describes publicly (confirmed via
// the same API call) - its description here is a curatorial summary of
// its real, community-documented unlock condition. difficulty/
// estimatedTime remain curatorial judgments, same convention as every
// other planner difficulty/time field in this catalog.
const va11halla = getPlannerData("va11-hall-a");

test("getPlannerData('va11-hall-a') returns real planner data with 34 curated achievements", () => {

    assert.ok(va11halla, "expected real planner data for va11-hall-a");
    assert.ok(Array.isArray(va11halla.achievements));
    assert.strictEqual(va11halla.achievements.length, 34);

});

test("every VA-11 Hall-A achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = va11halla.achievements.map(a => a.id);
    const apinames = va11halla.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every VA-11 Hall-A achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of va11halla.achievements) {

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

test("every one of the 33 officially-described VA-11 Hall-A achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // "Did you miss me?" is excluded here - Steam never exposes a public
    // description for it - and covered by its own dedicated test below
    // instead.
    const officialAchievements = [
        ["Welcome to Valhalla!", "What can I get you?"],
        ["G'evening", "The chapter's name means \"First\""],
        ["Coming right up", "This chapter's name means \"Bitter\""],
        ["Time to mix drinks and change lives", "And this one means \"Sweet\". Ain't that sweet?"],
        ["Please come again", "And thank you for playing"],
        ["Welcome back!", "Here for another round?"],
        ["Caci… que?", "It's not everyday a client gives you a gift"],
        ["An old friend", "A certain drink might bring Dana's old friend to the bar."],
        ["A different breed of cat", "Serving certain drink to one cat might bring another cat to the bar"],
        ["On a hacking pilgrimage", "Serving a certain drink to a hacker will bring another hacker to the bar"],
        ["Deep breaths", "Chat behind the bar with a bandaged girl"],
        ["Don't call me Becky!", "Chat with Becky behind the bar"],
        ["I feel like an adult", "Make sure Jill pays all of her bills"],
        ["Focus!", "Make sure Jill doesn't get distracted even once"],
        ["Cozy hell", "Get the \"Bad\" ending"],
        ["Dorothinquisition!", "Get Dorothy's ending"],
        ["Tim's Curry", "Help a guy open his curry stand"],
        ["Listen to my song!", "Attend a concert"],
        ["Sisterly bonding", "Get Alma's ending"],
        ["And now, for something completely different…", "Get to the good ending"],
        ["Cyberfunk", "Decorate Jill's room in the most flamboyant way possible"],
        ["Hey Jules", "Play a video game"],
        ["In the name of beauty!", "Win a video game"],
        ["Underappreciated drink", "There's a drink nobody asks for..."],
        ["I know what I said", "Sometimes a wrong drink can be the right thing"],
        ["Flawless Service", "Get a flawless service bonus"],
        ["Employee of the month", "Get ALL the flawless service bonuses"],
        ["(´・ω・`) ", "You don't need to be in a stream to see the audience react"],
        ["I like it, okay?", "Fill your playlist (ALL of it) with a song you like"],
        ["So unnecessary", "Fill the room with all the clutter"],
        ["Living with style", "Unlock all the decoration options"],
        ["Hit the jukebox", "Unlock all the songs"],
        ["Jill of all trades", "Get all achievements"]
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Did you miss me?"]);

    const dataPairs = va11halla.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 1 Steam-silent hidden achievement still has its own real name and a non-empty curatorial description", () => {

    const anna = va11halla.achievements.find(a => a.apiname === "ANNA_TROPHY");

    assert.ok(anna && anna.name === "Did you miss me?" && anna.description.length > 0);

});
