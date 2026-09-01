import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sea-of-stars.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1244090 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sea-of-stars");

test("getPlannerData('sea-of-stars') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for sea-of-stars");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Sea of Stars achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Sea of Stars achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Sea of Stars achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And stay down, too!", "Defeat the Acolytes."],
        ["Better off dead", "Defeat the Gun Goddess."],
        ["Boss Slugged", "Defeat the Forbidden Cavern's boss."],
        ["Bouncy", "Bounce a Moonerang 25 times in a row"],
        ["Carnival Culinarian", "Cook each of the five Horloge recipes at least once"],
        ["Chin up!", "Defeat Meduso."],
        ["Clockwork Champion", "Defeat the Watchmaker in a game of Wheels."],
        ["Clockworkn't", "Defeat the Dweller of Scourge (Throes of the Watchmaker DLC)."],
        ["Conch Master", "Bring all Conches to Mirna in Docarri Village"],
        ["Detritus Fallen", "Defeat the Leaf Monster."],
        ["Down Low", "Try all high-five combinations"],
        ["Dweller of Dread", "Defeat the Dweller of Dread."],
        ["Dweller of Strife", "Fight the Dweller of Strife."],
        ["Dweller of Torment", "Defeat the Dweller of Torment."],
        ["Dweller of Woe", "Defeat the Dweller of Woe."],
        ["Elder Dissed", "Defeat Elder Mist a second time."],
        ["Enter the Artificer", "Meet Arty."],
        ["Featherweight", "Defeat the Triumvirate of Eminence."],
        ["Fight fire with lunar", "Defeat the Toadcano."],
        ["Fishing Trip", "Catch at least one fish with each character"],
        ["Free from serviduke", "Free Duke Aventry's soul."],
        ["Glassdiator", "Defeat Croustalion."],
        ["Gustative Completion", "Cook every recipe at least once"],
        ["Hey, that's a reskin!", "Defeat the Sea Slug."],
        ["Home Neat Home", "Build a Spa, an Inn, a shop and a Fishing Hut in Mirth."],
        ["Home sweet home", "Build your own town."],
        ["I'm walking here!", "In the Cloud Kingdom, stand a character under each of the bridge giant's feet (needs a second controller)."],
        ["Lieupedant", "Defeat Elysan'darelle."],
        ["Living Encyclopedia", "Achieve pro rank in every Quiz Question pack."],
        ["Lock's Myth", "Break a total 50 locks in battle"],
        ["Marquee Star", "Unlock all skills and combos for circus classes"],
        ["Master Angler", "Catch every fish species at least once"],
        ["Me day", "Use the spa in Mirth with all six playable characters."],
        ["Measure Hunter", "Find every single treasure"],
        ["New Garl +", "Fulfill the ultimate wish (the true ending)."],
        ["No God of mine", "Defeat the Fleshmancer."],
        ["No, wait!", "Get sent to Sleeper Island."],
        ["Now give me that!", "Defeat Romaya."],
        ["Solstice Power", "Find the Solstice Amulet."],
        ["Stretch Quest", "Defeat the Chromatic Apparition."],
        ["Team Power", "Do a team Timed Hit or Block"],
        ["The Warrior Cook", "Attend the ceremony."],
        ["To the teeth", "Unlock all combos"],
        ["Turtle Power", "Do a team Timed Block with three players"],
        ["Unrivaled Wonder", "Earn top rank in all three of Horloge's minigames"],
        ["Verifying Glass", "Reveal a lock by either breaking it or using a special move with the scan function"],
        ["Warlocked", "Beat all of Horloge's Wheels champions"],
        ["Well read (to)", "Listen to all of the campfire stories"],
        ["What a technique!", "Defeat 10 bosses with the Artful Gambit relic active."],
        ["What doth it meanst?", "Bear witness to the secret vision (Throes of the Watchmaker DLC)."],
        ["Who would have thought?", "Learn Captain Klee'shae's true identity."],
        ["Who would have thought? Part 2", "Learn Serai's true identity."],
        ["Wholesome Food", "Have dinner at the Golden Pelican."],
        ["Yo, Ho!", "Defeat the Stormcaller."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
