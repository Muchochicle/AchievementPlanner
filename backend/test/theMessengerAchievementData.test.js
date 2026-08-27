import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-messenger.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 764790 (fetched through this app's own services/steamApi.js) - all 48
// ship a real, official Steam description. The Messenger, like The
// Stanley Parable, RiME, A Hat in Time, and Rogue Legacy, has zero hidden
// achievements, so the full list is checked here in one pass.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const theMessenger = getPlannerData("the-messenger");

test("getPlannerData('the-messenger') returns real planner data with 48 curated achievements", () => {

    assert.ok(theMessenger, "expected real planner data for the-messenger");
    assert.ok(Array.isArray(theMessenger.achievements));
    assert.strictEqual(theMessenger.achievements.length, 48);

});

test("every The Messenger achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = theMessenger.achievements.map(a => a.id);
    const apinames = theMessenger.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every The Messenger achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of theMessenger.achievements) {

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

test("every one of the 48 official The Messenger achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Nothing To Fear", "Rescue all Phobekins"],
        ["Enter The Ninja", "Beat the intro without dying"],
        ["Dungeon Brawler", "Defeat the Necromancer"],
        ["Deposit At The River Bank", "Jump down the big waterfall in Bamboo Creek"],
        ["My Bad!", "Defeat the Emerald Golem"],
        ["I Quill Survive", "Defeat the Queen of Quills"],
        ["Leg Day", "Defeat Colos & Suses"],
        ["Glacial Peaked", "Get to the top of the mountain"],
        ["Did The Thing", "Defeat the Arcane Golem"],
        ["Sweet 16!", "Time travel to the future"],
        ["Was That A Dragon?", "Defeat the Sky Serpent"],
        ["More Like 'Dumb In General'", "Defeat the Demon General"],
        ["Man's Best Fred", "Ride Manfred around the world back to where it all started"],
        ["Hear Today, Gone Tomorrow", "Make it out of the underwater labyrinth"],
        ["Tumble Hijinx", "Bump on a few flowers in Rivière Turquoise"],
        ["The Lava Is Floor", "Run on lava"],
        ["Not With THAT Altitude", "Defeat the Demon King"],
        ["More like EleMENTAL Skylands", "Complete the Elemental Skylands scenario"],
        ["Well, That Was Unsightly", "Survive the Corrupted Future chase"],
        ["Sun And Moon", "Receive the Key of Love"],
        ["It Sounds Better On Vinyl", "Complete the Melody"],
        ["I'm Your Biggest Phan", "Defeat Phantom"],
        ["The Fake Ending Was Better", "Beat the game"],
        ["Losing Weight, Gaining Ground", "Buy five upgrades in the shop"],
        ["Be Lootful And Multiply", "Destroy a Big Time Shard"],
        ["Walking On Air", "Execute 15 Cloudsteps without landing or clinging to a wall"],
        ["I Swear It's My First Time", "Make it through Dark Cave without the 'Power of True Sight'"],
        ["Challenge Expected", "Destroy your first Power Seal"],
        ["Wheelin' And Sealin'", "Destroy all Power Seals"],
        ["Started From The Bottom", "Buy all upgrades from the shop"],
        ["I've Been Around", "Enter all areas of the world"],
        ["Eye Of The Shareholder", "Meet Quarble"],
        ["Fine, I Won't Open It", "Be lectured on happiness"],
        ["Bait Taken", "Be lectured on the power of stories"],
        ["You Said This Was A Platformer", "Be lectured on the inner child"],
        ["Hope This Phelps", "Buy the Swim Dash upgrade from the shop"],
        ["One Hit Wonder", "Kill a green demon in a single hit"],
        ["Welco Metot Henex Tlevel", "Keep a windmill shuriken going for 15 seconds"],
        ["No Argument Here", "Make it from the beginning of the game to beating the Queen of Quills with zero deaths"],
        ["How Ninja Is That?", "Attack your first enemy projectile"],
        ["Rocked Opus", "Defeat Octo"],
        ["Voodoo Told'em", "Defeat the Voodoo Totem"],
        ["Now THAT'S a finale!", "Defeat the Demon General... again"],
        ["Star Messenger", "Win the race with a perfect score"],
        ["Betcha can't buy just one", "Make your first purchase at the Craftman's Corner"],
        ["Thanks I hate it", "Meet the voodoo mask"],
        ["Sunk Cost", "Unclog the Money Sink"],
        ["All in", "Accept 'THE DEAL'"]
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = theMessenger.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
