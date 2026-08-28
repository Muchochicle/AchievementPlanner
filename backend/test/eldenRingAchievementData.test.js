import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/elden-ring.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1245620 (fetched through this app's own services/steamApi.js) - 6 of
// 42 ship a real, official Steam description. The other 36 are hidden
// (FromSoftware's house style - almost every boss and ending
// achievement is hidden). Their descriptions here are curatorial and
// follow the pattern the six visible ones establish, cross-checked
// against the Fextralife/Fandom Elden Ring wikis and a Steam Community
// 100% guide. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field.
const eldenRing = getPlannerData("elden-ring");

test("getPlannerData('elden-ring') returns real planner data with 42 curated achievements", () => {

    assert.ok(eldenRing, "expected real planner data for elden-ring");
    assert.ok(Array.isArray(eldenRing.achievements));
    assert.strictEqual(eldenRing.achievements.length, 42);

});

test("every ELDEN RING achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = eldenRing.achievements.map(a => a.id);
    const apinames = eldenRing.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every ELDEN RING achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of eldenRing.achievements) {

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

test("every one of the 6 officially-described ELDEN RING achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 36 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Elden Ring", "Obtained all achievements"],
        ["God-Slaying Armament", "Upgraded any armament to its highest stage"],
        ["Legendary Armaments", "Acquired all legendary armaments"],
        ["Legendary Ashen Remains", "Acquired all legendary ashen remains"],
        ["Legendary Sorceries and Incantations", "Acquired all legendary sorceries and incantations"],
        ["Legendary Talismans", "Acquired all legendary talismans"]
    ];

    assert.strictEqual(officialAchievements.length, 6, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH01",
        "ACH02",
        "ACH03",
        "ACH04",
        "ACH05",
        "ACH06",
        "ACH07",
        "ACH08",
        "ACH09",
        "ACH10",
        "ACH11",
        "ACH12",
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
        "ACH40",
        "ACH41"
    ]);

    assert.strictEqual(hiddenApinames.size, 36, "sanity check - ELDEN RING has 36 hidden achievements");

    const dataPairs = eldenRing.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 36 hidden ELDEN RING achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH01", "Elden Lord"],
        ["ACH02", "Age of the Stars"],
        ["ACH03", "Lord of Frenzied Flame"],
        ["ACH04", "Shardbearer Godrick"],
        ["ACH05", "Shardbearer Radahn"],
        ["ACH06", "Shardbearer Morgott"],
        ["ACH07", "Shardbearer Rykard"],
        ["ACH08", "Shardbearer Malenia"],
        ["ACH09", "Shardbearer Mohg"],
        ["ACH10", "Maliketh the Black Blade"],
        ["ACH11", "Hoarah Loux, Warrior"],
        ["ACH12", "Dragonlord Placidusax"],
        ["ACH18", "Rennala, Queen of the Full Moon"],
        ["ACH19", "Lichdragon Fortissax"],
        ["ACH20", "Godskin Duo"],
        ["ACH21", "Fire Giant"],
        ["ACH22", "Dragonkin Soldier of Nokstella"],
        ["ACH23", "Regal Ancestor Spirit"],
        ["ACH24", "Valiant Gargoyles"],
        ["ACH25", "Margit, the Fell Omen"],
        ["ACH26", "Red Wolf of Radagon"],
        ["ACH27", "Godskin Noble"],
        ["ACH28", "Magma Wyrm Makar"],
        ["ACH29", "Godfrey, First Elden Lord"],
        ["ACH30", "Mohg, the Omen"],
        ["ACH31", "Mimic Tear"],
        ["ACH32", "Loretta, Knight of the Haligtree"],
        ["ACH33", "Astel, Naturalborn of the Void"],
        ["ACH34", "Leonine Misbegotten"],
        ["ACH35", "Royal Knight Loretta"],
        ["ACH36", "Elemer of the Briar"],
        ["ACH37", "Ancestor Spirit"],
        ["ACH38", "Commander Niall"],
        ["ACH39", "Roundtable Hold"],
        ["ACH40", "Great Rune"],
        ["ACH41", "Erdtree Aflame"]
    ];

    assert.strictEqual(names.length, 36, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = eldenRing.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
