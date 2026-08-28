import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-little-to-the-left.json - 65 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 1629520 (fetched through this app's own
// services/steamApi.js) - all 65 ship a real, official Steam
// description, including the deliberately cryptic "unique" puzzle ones
// ("Where are your manners?", "What a mess") which are quoted as-is.
// A Little to the Left has no Steam-hidden achievements; 30 of the 65
// belong to the paid Cupboards & Drawers and Seeing Stars DLC.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const aLittleToTheLeft = getPlannerData("a-little-to-the-left");

test("getPlannerData('a-little-to-the-left') returns real planner data with 65 curated achievements", () => {

    assert.ok(aLittleToTheLeft, "expected real planner data for a-little-to-the-left");
    assert.ok(Array.isArray(aLittleToTheLeft.achievements));
    assert.strictEqual(aLittleToTheLeft.achievements.length, 65);

});

test("every A Little to the Left achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = aLittleToTheLeft.achievements.map(a => a.id);
    const apinames = aLittleToTheLeft.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every A Little to the Left achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of aLittleToTheLeft.achievements) {

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

test("every one of the 65 official A Little to the Left achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Home Sweet Home", "Chapter 1 Complete"],
        ["Lost Recipe", "Chapter 2 Complete"],
        ["Nitty Gritty", "Chapter 3 Complete"],
        ["Inner Nature", "Chapter 4 Complete"],
        ["Near Earth Organizer", "Chapter 5 Complete"],
        ["A Cozy Completion", "Complete the Campaign"],
        ["Guests Coming Over", "Chapter 1 100% Completion"],
        ["Clean Kitchen", "Chapter 2 100% Completion"],
        ["Spring Cleaning", "Chapter 3 100% Completion"],
        ["One With Nature", "Chapter 4 100% Completion"],
        ["Encounters of the Tidy Kind", "Chapter 5 100% Completion"],
        ["Tidy Triumph", "Find all solutions in A Little to the Left (100% Completion)"],
        ["Seeing In A New Light", "Solve a puzzle multiple ways"],
        ["Triple Digit Tidier", "Tidy 100 Items"],
        ["Today's Tidy", "Complete your first Daily Tidy"],
        ["Tidy Toddler", "Complete 3 Daily Tidy's"],
        ["Let It Be", "Skip a level with \"Let It Be\""],
        ["Helpful Hints", "Take a hint"],
        ["Hint Hunter", "Reveal 10 hints"],
        ["Categorization Cadet", "Tidy 250 Items"],
        ["Adept Aligner", "Tidy 500 Items"],
        ["Extraordinary Organizer", "Tidy 1000 Items"],
        ["No Squint Hint", "Complete the game without taking any hints (Requires clean playthrough)"],
        ["One Clean Page", "Fully reveal a hint"],
        ["What Is Will Be", "Skip 10 levels with \"Let it Be\""],
        ["No Mess Left Behind", "Finish the campaign without skipping a single level (Requires clean playthrough)"],
        ["My Lucky Number", "Complete 7 Daily Tidy's"],
        ["Neat As A Pin", "Complete 14 Daily Tidy's"],
        ["Flip the Calendar", "Complete 30 Daily Tidy's"],
        ["Halfway There", "Complete 50 Daily Tidy's"],
        ["Three-Quarter Sorter", "Complete 75 Daily Tidy's"],
        ["Sqweeky Clean", "Complete 7 consecutive Daily Tidy's"],
        ["Two-week Sweep", "Complete 14 consecutive Daily Tidy's"],
        ["Calendar Collector", "Complete 30 consecutive Daily Tidy's"],
        ["Highly Decorated", "Achieve all Daily Tidy badge ranks"],
        ["Fun for Humans Too", "Having a ball with a ball inside a ball"],
        ["Bad Kitty", "Where are your manners?"],
        ["Keep Away", "Quick like a cat"],
        ["Exacting Eggs", "Balance the carton in minimum number of moves"],
        ["Draw Me A Rainbow", "Looks like we're missing a colour?"],
        ["Harmonized Purr", "Purr-fect rhythm"],
        ["Rainbow To The Moon", "Complete the tower continuing the starting colour sequence"],
        ["Unstable Stacker", "Complete the tower by using every available spot"],
        ["Be The Chaos", "Bat every name (first or last) and job title in the credits"],
        ["Triple Threat", "Solve a puzzle three ways"],
        ["Path of Destruction", "What a mess"],
        ["Sweep Them On The Floor", "We'll worry about these bits later"],
        ["The Other Side", "Complete the Cupboard & Drawers DLC"],
        ["Everything Put Away", "Find all solutions in the Cupboards & Drawers DLC (100% Completion)"],
        ["Where Is My Cap?", "Every cap has a new owner, but no two owners traded their caps (Cupboards & Drawers DLC)"],
        ["Can Do Altitude", "That's one epic stack (Cupboards & Drawers DLC)"],
        ["A Balanced Meal", "All you can eat (Cupboards & Drawers DLC)"],
        ["In No Rush", "Sit with the cat for a while (Cupboards & Drawers DLC)"],
        ["Now You’re Playing With Power", "A blast to the past (Cupboards & Drawers DLC)"],
        ["Show Off", "Be proud of your accomplishments (Cupboards & Drawers DLC)"],
        ["Shooting Star", "Complete the Seeing Stars DLC main campaign"],
        ["Nine Lives", "Complete the bonus finale in the Seeing Stars DLC"],
        ["Full Orbit", "Find all 100 solutions in the Seeing Stars DLC (100% Completion)"],
        ["Sticky Wand", "Introducing our newest flavour (Seeing Stars DLC)"],
        ["I'll Take My Water Neat", "I like my drinks lukewarm (Seeing Stars DLC)"],
        ["Whatcha Lookin' At?", "I'll go left, you go right (Seeing Stars DLC)"],
        ["Keeping Count", "Solve the Music Box with the Counter set to the hidden number (Seeing Stars DLC)"],
        ["Dead End Boss Gems", "That doesn't look like anything (Seeing Stars DLC)"],
        ["Top Heavy Slice", "All for one (Seeing Stars DLC)"],
        ["Grabbed the Wrong End", "Ouch, that's sharp (Seeing Stars DLC)"]
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = aLittleToTheLeft.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
