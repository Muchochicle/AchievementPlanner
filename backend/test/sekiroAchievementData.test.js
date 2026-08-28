import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sekiro.json - 34 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 814380
// (fetched through this app's own services/steamApi.js) - 11 of 34 ship
// a real, official Steam description. The other 23 are hidden
// (FromSoftware house style: bosses + endings); their descriptions here
// are curatorial, cross-checked against the Fextralife Sekiro wiki.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field.
const sekiro = getPlannerData("sekiro");

test("getPlannerData('sekiro') returns real planner data with 34 curated achievements", () => {

    assert.ok(sekiro, "expected real planner data for sekiro");
    assert.ok(Array.isArray(sekiro.achievements));
    assert.strictEqual(sekiro.achievements.length, 34);

});

test("every Sekiro: Shadows Die Twice achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = sekiro.achievements.map(a => a.id);
    const apinames = sekiro.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Sekiro: Shadows Die Twice achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of sekiro.achievements) {

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

test("every one of the 11 officially-described Sekiro: Shadows Die Twice achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 23 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Sekiro", "All achievements have been unlocked."],
        ["Ashina Traveler", "Traveled to all areas of the game"],
        ["Master of the Prosthetic", "Upgraded all Prosthetic Tools to their limit"],
        ["All Prosthetic Tools", "Acquired all Prosthetic Tools"],
        ["All Ninjutsu Techniques", "Acquired all Ninjutsu Techniques"],
        ["Peak Physical Strength", "Upgraded Vitality and Posture to their limit"],
        ["Ultimate Healing Gourd", "Fully upgraded the \"Healing Gourd\""],
        ["Revered Blade", "Received the \"Kusabimaru\" from Kuro"],
        ["Shinobi Prosthetic", "Acquired the Shinobi Prosthetic"],
        ["Memorial Mob", "Encountered the Memorial Mob"],
        ["Resurrection", "Returned from the dead using \"Resurrection\" for the first time"]
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH01",
        "ACH04",
        "ACH09",
        "ACH10",
        "ACH11",
        "ACH12",
        "ACH13",
        "ACH14",
        "ACH15",
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
        "ACH33"
    ]);

    assert.strictEqual(hiddenApinames.size, 23, "sanity check - Sekiro: Shadows Die Twice has 23 hidden achievements");

    const dataPairs = sekiro.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 23 hidden Sekiro achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH01", "Man Without Equal"],
        ["ACH04", "Height of Technique"],
        ["ACH09", "Immortal Severance"],
        ["ACH10", "Purification"],
        ["ACH11", "Dragon's Homecoming"],
        ["ACH12", "Shura"],
        ["ACH13", "Sword Saint, Isshin Ashina"],
        ["ACH14", "Master of the Arts"],
        ["ACH15", "Lazuline Upgrade"],
        ["ACH20", "Gyoubu Masataka Oniwa"],
        ["ACH21", "The Phantom Lady Butterfly"],
        ["ACH22", "Genichiro Ashina"],
        ["ACH23", "Guardian Ape"],
        ["ACH24", "Guardian Ape Immortality Severed"],
        ["ACH25", "Folding Screen Monkeys"],
        ["ACH26", "Great Shinobi - Owl"],
        ["ACH27", "Father Surpassed"],
        ["ACH28", "Corrupted Monk"],
        ["ACH29", "Gracious Gift of Tears"],
        ["ACH30", "Isshin Ashina"],
        ["ACH31", "Demon of Hatred"],
        ["ACH32", "Great Serpent"],
        ["ACH33", "Great Colored Carp"]
    ];

    assert.strictEqual(names.length, 23, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = sekiro.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
