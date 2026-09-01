import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/return-to-monkey-island.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2060130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("return-to-monkey-island");

test("getPlannerData('return-to-monkey-island') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for return-to-monkey-island");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Return to Monkey Island achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Return to Monkey Island achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Return to Monkey Island achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ahoy There", "Sail to the adrift ship and select the 'Ahoy!' dialogue option with the paranoid pirates 20 times."],
        ["Bookworm", "Found All The Copies of ‘At The End Of The Plank’"],
        ["Bragging", "Told Everyone On Mêlée Island That You Are Looking For The Secret"],
        ["Card Collector", "Collected More Than Twenty Trivia Cards"],
        ["Cartography Nerd", "Thoroughly Examined All Of Wally’s Stock"],
        ["Cogg Island", "Find Cogg Island."],
        ["Dead Dead Dead", "Die for real."],
        ["Deep Sea Diver", "Dive from your ship using the anchor and a pufferfish repeatedly during Part 4 until you've explored every variant of the ocean floor."],
        ["Dental Samaritan", "Gave Stan His Toothbrush"],
        ["Fan Service", "Convinced Cobb To Tell You About LOOM"],
        ["Flag Facsimile", "Performed The Ole Switcheroo With The Replica Flag"],
        ["Free Wally", "Rescued Wally From Monkey Island"],
        ["Hey Wait!", "Freed Otis"],
        ["Hot Headed", "Brave the Scorched Alaska."],
        ["I Don’t Believe", "At the ending, instead of talking to Elaine, use Stan's keys on the church alley door and backtrack through the area."],
        ["Lucky Duck", "Shared Your Luck"],
        ["Mop Heist", "Attempt to steal the cook's mop while he's busy preparing a meal, then try to leave the bar."],
        ["Mop Top", "Get hired by Iron Rose at the end of Part 2 with all four possible mop heads (the Voodoo Head, the Sponge, the Pile of Rope, and the Stuffed Dog)."],
        ["Neat Freak", "Listed Every Mess On The First Swab’s Report"],
        ["Not Bitter", "Got To The Heart Of The Problem"],
        ["On The Lam", "Repeatedly re-enter the fish shop and let the Lumpsucker slowly crawl to the door and escape."],
        ["Part Five", "Started Part Five"],
        ["Part Four", "Started Part Four"],
        ["Part One", "Started Part One"],
        ["Part Three", "Started Part Three"],
        ["Part Two", "Started Part Two"],
        ["Patient Citizen", "Waited Patiently To See Carla"],
        ["Pegleg", "Fulfilled Your Restroom Obligations"],
        ["Promise Keeper", "Did Gullet A Favor"],
        ["Relief Pitcher", "On the ship in the very first room, mop up the fat - your 'boss' will spill it, offering a chance to donate to the earthquake relief."],
        ["Speed Runner", "Reached The End In 2 Hours Or Less"],
        ["Super Swabbie", "Swabbed The Hold Twenty Times"],
        ["Tight Ship", "Decked Out The Sea Monkey II With Spooky Skulls"],
        ["Trivia Go Getter", "Answered Ten Trivia Questions Correctly"],
        ["Trivia Grand Master", "Answered Fifty Trivia Questions Correctly"],
        ["Trivia Lord", "Answered Seventy-Five Trivia Questions Correctly"],
        ["Trivia Master", "Answered Twenty-Five Trivia Questions Correctly"],
        ["Trivia Overlord", "Answered One Hundred Trivia Questions Correctly"],
        ["Trophy Fisher", "Became A Prize Chum"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
