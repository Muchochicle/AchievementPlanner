import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mark-of-the-ninja.json - 38 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 214560 (fetched through this app's own services/steamApi.js) -
// all 38 ship a real, official Steam description. This game has no
// Steam-hidden achievements at all. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const markOfTheNinja = getPlannerData("mark-of-the-ninja");

test("getPlannerData('mark-of-the-ninja') returns real planner data with 38 curated achievements", () => {

    assert.ok(markOfTheNinja, "expected real planner data for mark-of-the-ninja");
    assert.ok(Array.isArray(markOfTheNinja.achievements));
    assert.strictEqual(markOfTheNinja.achievements.length, 38);

});

test("every Mark of the Ninja achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = markOfTheNinja.achievements.map(a => a.id);
    const apinames = markOfTheNinja.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Mark of the Ninja achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of markOfTheNinja.achievements) {

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

test("every one of the 38 Mark of the Ninja achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Hisomu's Heir", "Kill one guard."],
        ["Awakened", "Save Azai from the mercenaries."],
        ["The Mercenary", "Assassinate Kelly, the mercenary captain."],
        ["Karajan's Fate", "Assassinate Karajan."],
        ["Escape", "Escape from the Stronghold."],
        ["Fated", "Determine your fate."],
        ["True Ninja", "Complete the game in New Game Plus."],
        ["Descendent of Iga", "Earn three stars in every level."],
        ["Perfection", "Earn all the Seals in every level."],
        ["Haiku", "Find all three scrolls in every level."],
        ["Marked", "Earn all the upgrades."],
        ["Mercy", "Complete a level without killing any guards."],
        ["Masterful", "Complete a level without getting detected."],
        ["Ghost", "Complete a level without killing any guards and without being detected."],
        ["Of The Mind", "Complete all of the challenge rooms."],
        ["Oni", "Terrorize 10 guards."],
        ["Manipulator", "Distract 25 guards using your equipment."],
        ["Trickster", "Distract 25 guards using environmental objects."],
        ["Stealth Assassin", "Perform 25 successful stealth kills."],
        ["Crimson Haiku", "Perform five different types of stealth kills successfully in one level."],
        ["Inner Heaven", "Kill a guard from inside the box."],
        ["The Dark Project", "Get the Undetected honor bonus 10 times in one level."],
        ["Things Better Left Unseen", "Throw the body of one guard to terrorize another."],
        ["Tactical Espionage Action", "Within a single Focus, aim and throw three different types of items."],
        ["No One Lives Forever", "Stealth kill an elite guard after stunning him."],
        ["Deadly Shadows", "Stealth kill a guard from inside a dumpster."],
        ["The Worst Allies", "Kill a guard by getting other guards to shoot them."],
        ["Unstable Footing", "Terrify a guard and cause him to stumble to his death."],
        ["Gallows", "Terrify a guard using the result of a hanging stealth kill five times."],
        ["Snare", "Use a dead body to lure another guard and then stealth kill them."],
        ["Days Long Past", "Complete the new Special Edition level."],
        ["The Humble Moth", "Stun an elite guard with moths then dispatch him."],
        ["Behind the Curtain", "View any of the developer commentaries."],
        ["Back to Bed With You", "Knock out an enemy again that was revived from being knocked out."],
        ["What Could Have Been", "Complete one of the original Mark of the Ninja levels using the Path of Wisdom."],
        ["Cordyceps", "Dispatch two enemies at once using a body infected with Toxic Fungus."],
        ["Well, I Think It's Interesting", "Read one of the history lesson developer commentaries."],
        ["Couldn't Do That Before", "Disable a spotlight using the Dusk Moths."]
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list - Mark of the Ninja has no Steam-hidden achievements");

    const dataPairs = markOfTheNinja.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
