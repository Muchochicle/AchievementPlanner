import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hades-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1145350 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hades-2");

test("getPlannerData('hades-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for hades-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Hades II achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Hades II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Hades II achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Ambrosia for Two", "Take one of your comrades to the Taverna"],
        ["Animal Whisperer", "Recruit all Animal Familiars"],
        ["Arcana of the Ages", "Fulfill the Prophecy 'Arcana of the Ages'"],
        ["Bearing Dark Gifts", "Fulfill the Prophecy 'Bearing Dark Gifts'"],
        ["Beast Master", "Fully upgrade all Animal Familiars"],
        ["Behold Night's Champion", "Earn the first Gift of the Veil"],
        ["Born to Win", "Fulfill the Prophecy 'Born to Win'"],
        ["Breadth of Knowledge", "Fulfill the Prophecy 'Breadth of Knowledge'"],
        ["Breaking Up the Band", "Use Night Bloom to raise a Siren"],
        ["Catch of the Night", "Take one of your comrades to the Fishing Pier"],
        ["Chaos in Hell", "Clear the 'Great Chaos Below' Trial"],
        ["Close Comrades", "Forge a bond with 10 comrades"],
        ["Death to Chronos", "Complete the lifelong task of the Princess of the Underworld"],
        ["Denizens of the Depths", "Fulfill the Prophecy 'Denizens of the Depths'"],
        ["Dressed to Kill", "Reach the final confrontation in an Arachne outfit"],
        ["Elysian Glory", "Prevail in the Contest of Champions"],
        ["Fair Fight", "Earn 1,000 Gold competing against Nemesis"],
        ["Familiar Confidant", "Fulfill the Prophecy 'Familiar Confidant'"],
        ["Giving Back", "Earn 10,000 Kudos"],
        ["Goddess of Nightmares", "Earn all other Achievements"],
        ["Golden Age", "Reach the epilogue of the story"],
        ["Hand of the Fates", "Fulfill 60 Minor Prophecies"],
        ["Haunted by the Past", "Fulfill the Prophecy 'Haunted by the Past'"],
        ["Improbable Outcomes", "Fulfill the Prophecy 'Improbable Outcomes'"],
        ["Infinite Possibility", "Clear 20 Chaos Trials"],
        ["Mercy, Night's Executioner", "Earn the second Gift of the Veil"],
        ["Mind for Magick", "Gain 30 Grasp at the Altar of Ashes"],
        ["Natural Talent", "Fulfill the Prophecy 'Natural Talent'"],
        ["Sentimental Value", "Collect every Keepsake"],
        ["Sheep's Clothing", "Slay a Sister of the Dead while afflicted with Twilight Curse"],
        ["Silk and Spitefulness", "Fulfill the Prophecy 'Silk and Spitefulness'"],
        ["So Mote It Be", "Cast 50 Incantations at the Crossroads Cauldron"],
        ["Soothing Soak", "Take one of your comrades to the Hot Springs"],
        ["Soundest of Sleepers", "Fulfill the Prophecy 'Soundest of Sleepers'"],
        ["Sword of the Night", "Fulfill the Prophecy 'Sword of the Night'"],
        ["The Arms of Night", "Fulfill the Prophecy 'The Arms of Night'"],
        ["The Unseen Sentinel", "Fulfill the Prophecy 'The Unseen Sentinel'"],
        ["Unassailable Insight", "Fully upgrade all Arcana"],
        ["Unfamiliar Forms", "Alter the appearance of each Animal Familiar"],
        ["Unfinished Business", "Fulfill the Prophecy 'Unfinished Business'"],
        ["Unrivaled Prowess", "Fulfill the Prophecy 'Unrivaled Prowess'"],
        ["Voice and Vanity", "Fulfill the Prophecy 'Voice and Vanity'"],
        ["Witch of the Abyss", "Clear Tartarus"],
        ["Witch of the Clouds", "Clear the Summit"],
        ["Witch of the Depths", "Clear Oceanus"],
        ["Witch of the Mountains", "Clear Mount Olympus"],
        ["Witch of the Outskirts", "Clear the City of Ephyra"],
        ["Witch of the Plains", "Clear the Fields of Mourning"],
        ["Witch of the Waters", "Clear the Rift of Thessaly"],
        ["Witch of the Woods", "Clear Erebus"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
