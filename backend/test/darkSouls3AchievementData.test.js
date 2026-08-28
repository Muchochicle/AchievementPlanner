import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dark-souls-3.json - 43 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 374320 (fetched through this app's own services/steamApi.js) -
// 12 of 43 ship a real, official Steam description. The other 31 are
// hidden (FromSoftware house style: bosses, covenants, endings, hidden
// areas); their descriptions here follow the pattern the visible ones
// set, cross-checked against the Fextralife Dark Souls 3 wiki.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field.
const darkSouls3 = getPlannerData("dark-souls-3");

test("getPlannerData('dark-souls-3') returns real planner data with 43 curated achievements", () => {

    assert.ok(darkSouls3, "expected real planner data for dark-souls-3");
    assert.ok(Array.isArray(darkSouls3.achievements));
    assert.strictEqual(darkSouls3.achievements.length, 43);

});

test("every DARK SOULS III achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = darkSouls3.achievements.map(a => a.id);
    const apinames = darkSouls3.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every DARK SOULS III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of darkSouls3.achievements) {

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

test("every one of the 12 officially-described DARK SOULS III achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 31 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["The Dark Soul", "Complete all achievements."],
        ["Supreme Weapon Reinforcement", "Reinforce any weapon to the highest level."],
        ["Master of Infusion", "Perform all forms of infusion."],
        ["Master of Sorceries", "Acquire all sorceries."],
        ["Master of Pyromancies", "Acquire all pyromancies."],
        ["Master of Miracles", "Acquire all miracles."],
        ["Master of Rings", "Acquire all rings."],
        ["Master of Expression", "Learn all gestures."],
        ["Ultimate Bonfire", "Reinforce a bonfire to the highest level."],
        ["Ultimate Estus", "Reinforce the Estus Flask to the highest level."],
        ["Enkindle", "Light a bonfire flame for the first time."],
        ["Embrace the Flame", "Become a Host of Embers for the first time."]
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH01",
        "ACH02",
        "ACH03",
        "ACH04",
        "ACH05",
        "ACH06",
        "ACH07",
        "ACH17",
        "ACH18",
        "ACH19",
        "ACH20",
        "ACH21",
        "ACH22",
        "ACH23",
        "ACH24",
        "ACH25",
        "ACH26",
        "ACH27",
        "ACH28",
        "ACH29",
        "ACH30",
        "ACH31",
        "ACH32",
        "ACH33",
        "ACH34",
        "ACH35",
        "ACH36",
        "ACH37",
        "ACH38",
        "ACH39",
        "ACH40"
    ]);

    assert.strictEqual(hiddenApinames.size, 31, "sanity check - DARK SOULS III has 31 hidden achievements");

    const dataPairs = darkSouls3.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 31 hidden DARK SOULS III achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH01", "To Link the First Flame"],
        ["ACH02", "The End of Fire"],
        ["ACH03", "The Usurpation of Fire"],
        ["ACH04", "Lords of Cinder: Abyss Watchers"],
        ["ACH05", "Lord of Cinder: Yhorm the Giant"],
        ["ACH06", "Lord of Cinder: Aldrich, Devourer of Gods"],
        ["ACH07", "Lord of Cinder: Lothric, Younger Prince"],
        ["ACH17", "Covenant: Warrior of Sunlight"],
        ["ACH18", "Covenant: Way of Blue"],
        ["ACH19", "Covenant: Blue Sentinels"],
        ["ACH20", "Covenant: Blade of the Darkmoon"],
        ["ACH21", "Covenant: Rosaria's Fingers"],
        ["ACH22", "Covenant: Mound-makers"],
        ["ACH23", "Covenant: Watchdogs of Farron"],
        ["ACH24", "Covenant: Aldrich Faithful"],
        ["ACH25", "Untended Graves"],
        ["ACH26", "Archdragon Peak"],
        ["ACH27", "Iudex Gundyr"],
        ["ACH28", "Vordt of the Boreal Valley"],
        ["ACH29", "Curse-rotted Greatwood"],
        ["ACH30", "Crystal Sage"],
        ["ACH31", "Deacons of the Deep"],
        ["ACH32", "High Lord Wolnir"],
        ["ACH33", "Pontiff Sulyvahn"],
        ["ACH34", "Dancer of the Boreal Valley"],
        ["ACH35", "Dragonslayer Armour"],
        ["ACH36", "Old Demon King"],
        ["ACH37", "Oceiros, the Consumed King"],
        ["ACH38", "Champion Gundyr"],
        ["ACH39", "Ancient Wyvern"],
        ["ACH40", "The Nameless King"]
    ];

    assert.strictEqual(names.length, 31, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = darkSouls3.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
