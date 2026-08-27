import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-hat-in-time.json - 46 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 253230 (fetched through this app's own services/steamApi.js) -
// all 46 ship a real, official Steam description (A Hat in Time, like
// RiME, has zero hidden achievements). difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const aHatInTime = getPlannerData("a-hat-in-time");

test("getPlannerData('a-hat-in-time') returns real planner data with 46 curated achievements", () => {

    assert.ok(aHatInTime, "expected real planner data for a-hat-in-time");
    assert.ok(Array.isArray(aHatInTime.achievements));
    assert.strictEqual(aHatInTime.achievements.length, 46);

});

test("every A Hat in Time achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = aHatInTime.achievements.map(a => a.id);
    const apinames = aHatInTime.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every A Hat in Time achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of aHatInTime.achievements) {

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

test("every one of the 46 official A Hat in Time achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Like RiME, A Hat in Time has zero hidden achievements - the full
    // list is checked here in one pass.
    const officialAchievements = [
        ["Put a Badge On It", "Put on your first badge!"],
        ["Sequence Break", "No hand-holding for you, apparently!"],
        ["No Time To Explain", "Complete Train Rush without dying or time bonuses!"],
        ["Fan-tastic!", "Hook onto a ceiling fan with the hookshot!"],
        ["One Punch", "Defeat any boss with the 1-hit hero badge equipped!"],
        ["If I fit, I sit", "Sit in 3 different chairs!"],
        ["360 no-feet", "Do a 360 flip on the scooter!"],
        ["Mafia Town - All clear!", "Collect all Time Pieces in Mafia Town!"],
        ["Subcon Forest - All clear!", "Collect all Time Pieces in Subcon Forest!"],
        ["Battle of the Birds - All clear!", "Collect all Time Pieces in Battle of the Birds!"],
        ["Alpine Skyline - All clear!", "Collect all Time Pieces in Alpine Skyline!"],
        ["Secret Intruder", "Make it through Dead Bird Studio without being seen at all!"],
        ["True Detective", "Find all Murder on the Owl Express clues!"],
        ["False Detective", "Make it through Murder on the Owl Express without finding any clues (you suck)!"],
        ["Vacuum Vandal", "Ride the vacuum!"],
        ["Afraid of Water", "Don't fall into the rising water in Subcon Well!"],
        ["Slip 'n Slide", "Slide down a really long slope!"],
        ["The Floor is Lava", "Complete the Lava Cake peak without touching the lava at all!"],
        ["Encore!", "Complete The Big Parade without falling into the audience below!"],
        ["Take a Hike", "Climb to the top of Subcon Forest's big mushroom!"],
        ["Pillow Fort", "Find Your Secret Hideout!"],
        ["Badge Master", "Equip 3 badges!"],
        ["A Series of Unfortunate Accidents", "Knock off all the sitting Mafia in Mafia Town!"],
        ["Personally I Prefer the Air", "Do 5 homing attacks in a row, without touching the ground!"],
        ["Return Home", "Collect all Time Pieces!"],
        ["Fueling the Feud", "Get a total of 2000 points in Battle of the Birds!"],
        ["Let there be light", "Light up the spaceship!"],
        ["Why", "just... why... ?"],
        ["Unlimited Possibilities", "Play a mod from the Steam Workshop!"],
        ["Community Contributor", "Rate a Steam Workshop level!"],
        ["The Community Thanks You", "Collect 30 Mod Rift Tokens from Steam Workshop levels!"],
        ["Prepare to Die", "Clear All Objectives In a Single Death Wish!"],
        ["Punished Kid", "Obtain 50 Death Wish Stamps!"],
        ["I Refuse To Die!", "Obtain All Death Wish Stamps!"],
        ["Minimum Shippable", "Clear Ship Shape Without Upsetting The Captain!"],
        ["The Arctic Cruise - All clear!", "Collect all Time Pieces in The Arctic Cruise!"],
        ["Little Help From My Friends", "Collect 3 new Time Pieces In local Co-op!"],
        ["A Work of Art", "Put 10 different stickers on a single screenshot!"],
        ["Stickin' Star", "Collect 30 Stickers in Nyakuza Metro!"],
        ["Stick It To The Man", "Collect your first holographic sticker!"],
        ["Culinary Creativity", "Discover a secret food combination!"],
        ["Nyakuza Metro - All clear!", "Collect all Time Pieces in Nyakuza Metro!"],
        ["Life of the Party", "Clear an act in Online Party as the person in lead!"],
        ["Party Planner", "Participate in an Online Party with 10 or more total players!"],
        ["Party Animal", "Collect 10 Time Pieces in an active Online Party!"],
        ["Challenge Road", "Clear a Challenge Road!"]
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = aHatInTime.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
