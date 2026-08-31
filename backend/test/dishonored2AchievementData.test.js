import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dishonored-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 403640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dishonored-2");

test("getPlannerData('dishonored-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for dishonored-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Dishonored 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Dishonored 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Dishonored 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Night in 1849", "Complete the fifth mission, 'The Royal Conservatory'."],
        ["Acrobat", "Eliminate 10 enemies with Drop Assassination"],
        ["Alternative Approach", "Finish an entire mission with no casualties"],
        ["Art Collector", "Acquire all collectible paintings"],
        ["Black Market Burglar", "Rob a black market shop"],
        ["Circle of Life", "Cast Possession once, chaining between human, hound, rat, fish, and bloodfly"],
        ["Clean Hands", "Complete the game without killing anyone"],
        ["Clockwork Collector", "Obtain numbered plates for 3 Clockwork Soldiers"],
        ["Counter-serum", "Chat with Dr. Hypatia aboard the Dreadful Wale"],
        ["Dilapidation", "Find the hidden balcony passageway"],
        ["Down with the Duke", "Eliminate Duke Luca Abele (lethally or non-lethally) in 'The Grand Palace'."],
        ["Empire in Chaos", "Complete the game in high chaos"],
        ["Eureka", "Crack the Jindosh Lock without finding the solution elsewhere"],
        ["Faithful to the Abbey", "Side with the Overseers in the Dust District"],
        ["Familiarity Breeds Contempt", "Rob Galvani multiple times"],
        ["Fatal Redirect", "Kill an enemy with their own bullet"],
        ["Fearless Fall", "Drop from Addermire’s highest point and take out an enemy below"],
        ["Flesh and Steel", "Complete the game without supernatural powers"],
        ["Flooded Basement", "Drain the water to recover a Rune"],
        ["Freedom of Speech", "Save the Printer of the Dunwall Courier"],
        ["Gazebo", "Pay tribute to Jessamine one last time"],
        ["Ghostly", "Finish an entire mission without being spotted"],
        ["Heart Whispers", "Using the Heart, listen to the secrets of 40 different people"],
        ["Heartbeat Reaper", "Eliminate 6 enemies in less than 1.5 seconds"],
        ["Howlers ’til the End", "Side with the Howlers in the Dust District"],
        ["Imperial Seal", "Recover your signet ring during the first mission, 'A Long Day in Dunwall'."],
        ["In Good Conscience", "Complete the game in low chaos"],
        ["Jewel of the South", "Reach Karnaca - arrive on the dock at the start of the second mission, 'Edge of the World'."],
        ["Labyrinthine Mind", "Complete the fourth mission, 'The Clockwork Mansion'."],
        ["Morbid Theft", "Steal a corpse for Mindy Blanchard"],
        ["Occult Carver", "Craft 10 Bonecharms"],
        ["Oracular Echoes", "Listen to the voices of the Sisters of the Oracular Order"],
        ["Place of Three Deaths", "Kill Paolo three times"],
        ["Rogue", "Eliminate 20 unaware enemies"],
        ["Royal Spymaster", "Peruse all journals and audiographs by Meagan Foster and Anton Sokolov aboard the Dreadful Wale"],
        ["Shadow", "Finish the game without being spotted"],
        ["Silence", "Eliminate Jindosh without him ever knowing you were there"],
        ["Sliding Marksman", "Score a headshot while sliding"],
        ["Songs of Serkonos", "Find 3 musical duos across Karnaca, and listen to their songs"],
        ["Souvenirs", "Collect all the decorative objects for the Dreadful Wale"],
        ["Spirit Thief", "Take Delilah's soul - the non-lethal resolution of the final confrontation."],
        ["Stay of Execution", "Stop the Grand Guard from pushing someone into the Wall of Light"],
        ["The Beast Within", "Complete the third mission, 'The Good Doctor'."],
        ["The Empress", "Finish the game with Emily Kaldwin"],
        ["The Greatest Gift", "Reach the ending having saved your last known living family member."],
        ["The Lovers", "Link 2 characters with Domino just before one kills the other"],
        ["The Royal Protector", "Finish the game with Corvo Attano"],
        ["Under the Table", "Obtain Stilton’s Master Key from under the table, with the guards there conscious & unalerted"],
        ["Well Funded", "Find 60% of available loot"],
        ["Years Ago, Another Time", "Complete 'The Grand Palace' in low chaos, then listen to Meagan Foster's story aboard the Dreadful Wale before the final mission (or steal her key and read her journal)."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
