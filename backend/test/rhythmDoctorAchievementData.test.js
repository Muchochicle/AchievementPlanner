import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rhythm-doctor.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 774181 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rhythm-doctor");

test("getPlannerData('rhythm-doctor') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for rhythm-doctor");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Rhythm Doctor achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Rhythm Doctor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Rhythm Doctor achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Usual Day Around Here", "Complete Act 3."],
        ["Beats To Travel To", "Earn an S-Rank on Level 4-1N."],
        ["Conductor", "Earn an S-Rank on Level 4-1."],
        ["Doctor’s Orders", "Complete Act 6."],
        ["Eavesdropping", "Hear all of the dialogue in Level 5-3."],
        ["Feel The Burn", "Earn an A-Rank on Level 5-2N."],
        ["First Date", "Earn an S-Rank on Level 1-2."],
        ["First Day On The Job", "Complete Act 1."],
        ["Focused", "Earn an S-Rank on Level 1-XN."],
        ["Greenhouse", "Earn an S-Rank on Level 3-1."],
        ["Hey, I Wasn’t Ready Yet!", "Fail the Beans Hopper bonus level right at the start."],
        ["I’m Dizzy", "Give Dr. Edega a headache by holding left or right in the Level Select to scroll the screen very fast for a while."],
        ["Insomnia Cure", "Earn an S-Rank on Level 1-X."],
        ["Maybe Try Decaf?", "Earn an S-Rank on Level 2-2."],
        ["Nimble", "Earn an S-Rank in Beans Hopper."],
        ["No Items, Final Destination", "Earn an S-Rank on Level 2-3N."],
        ["One Slip, Too Late, S+, For Me", "Earn an S-Rank on Level 5-1N."],
        ["One Step At A Time", "Complete Act 2."],
        ["Overworked, Underpaid", "Earn an S-Rank on Level 3-X."],
        ["Perfect Finale", "Earn an S-Rank on the finale."],
        ["Perfect Matchmaker", "Earn an S-Rank on Level 6-1."],
        ["Rush Hour", "Earn an S-Rank on Level 2-3."],
        ["Sing From The Heart", "Earn an S-Rank on Level 2-X."],
        ["The Coach of Middlesea", "Complete Act 5."],
        ["The Donut Trilogy", "Complete the Muse Dash Collaboration."],
        ["The Future of Middlesea", "Complete the finale."],
        ["Two-Handed", "Complete any level in 2-Player Mode."],
        ["We’re All Part Of The Team", "Watch the game’s credits."],
        ["Whole-hearted Performance", "Earn an S-Rank."],
        ["Woof", "Enter the 'Rhythm Dogtor' code - at a level in the Level Select, press the arrows R L R R L R L L R L R R L R L L instead of starting the level."],
        ["Working Remotely", "Complete Act 4."],
        ["World Champion", "Complete Level 12 of Rhythm Weightlifter."],
        ["Worth a Shot", "Get scolded by Dr. Edega by repeatedly trying to enter a locked level in the Level Select."],
        ["Wow!", "Earn an S-Rank on Level 5-1 in 2-Player Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
