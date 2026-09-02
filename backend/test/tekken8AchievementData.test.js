import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tekken-8.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1778820 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tekken-8");

test("getPlannerData('tekken-8') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for tekken-8");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every TEKKEN 8 achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every TEKKEN 8 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 TEKKEN 8 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...", "Performed a Hard Floor Break. (Excluding offline player battles)"],
        ["(Initiating Analysis)", "Defeated 10 CPU Ghosts in Super Ghost Battle."],
        ["(That's how a true champion fights!)", "Dealt 20 Rage Arts. (Excluding offline player battles)"],
        ["(This one's in the bag!)", "Practiced with the tips on in Replays & Tips."],
        ["(You never learn.)", "Performed a Floor Blast. (Excluding offline player battles)"],
        ["A fight is about survival.", "Unlock every other achievement."],
        ["A new star rising in the world of TEKKEN!", "Win the away tournament match in Chapter 6 of Arcade Quest."],
        ["All is vanity.", "Defeated a player's Ghost."],
        ["Behold, the fruits of my labors.", "Dealt 70+ damage in an air combo. (Excluding offline player battles)"],
        ["Come on, just try and kill me.", "Performed a Hard Wall Break. (Excluding offline player battles)"],
        ["Come, humanity! Unleash the dogs of war! ", "Finished Chapter 1 of The Dark Awakens."],
        ["Congrats on the victory!", "Win the Gong Tournament in Arcade Quest."],
        ["Despair", "Finish Chapter 15 of The Dark Awakens with Kazuya's ending."],
        ["Do you want to learn Marshall Arts?", "Completed 5 Combo Challenges."],
        ["Excellent!", "Play a total of 10 online battles of any kind."],
        ["Fear my wrath.", "Dealt 20 Heat Smashes. (Excluding offline player battles)"],
        ["Get ready for the next battle!", "Clear the Champion Cup at Arcade Quest's final location."],
        ["Godfather", "Defeat the secret CPU Ghost Harada_TEKKEN in Super Ghost Battle."],
        ["Hope", "Finish Chapter 15 of The Dark Awakens with Jin's ending."],
        ["How do you take your coffee?", "Reached the lowest area of the Ortiz Farm stage. (Excluding offline player battles)"],
        ["I aspire to greater heights!", "Got promoted to Brawler."],
        ["I would do well to follow your example.", "Land a 30-hit chain during Chapter 10 of The Dark Awakens."],
        ["I'll give you a rematch anytime, guv.", "Won a Player Match."],
        ["I'll live on, together with my sins.", "Finish Chapter 12 of The Dark Awakens."],
        ["I'll put an end to this.", "Finished Arcade Battle."],
        ["I'm actually pretty strong.", "Got promoted to Warrior."],
        ["Just relax. You can do it.", "Won a Ranked Match."],
        ["Let the blistering sands consume you.", "Triggered 10 Tornados. (Excluding offline player battles)"],
        ["My moves are way faster than yours.", "Performed 20 Devilish hits in Tekken Ball. (Excluding offline player battles)"],
        ["No pain, no gain!", "Dealt 2000 damage in Practice mode."],
        ["Now it's time to destroy you.", "Dealt an overall total of 1000 damage while in rage mode. (Excluding offline player battles)"],
        ["Outstanding!", "Achieved a great victory. (Excluding offline player battles)"],
        ["Please don't tell my father.", "Won a Group Match."],
        ["Power isn't everything.", "Finished 10 Character Episode stories."],
        ["Resuming mission.", "Performed a Wall Blast. (Excluding offline player battles)"],
        ["Sorry for getting rough back there.", "Performed a Wall Bound. (Excluding offline player battles)"],
        ["That was too easy!", "Achieved a perfect victory. (Excluding offline player battles)"],
        ["The fists reveal the fighter.", "Fought against your own Ghost."],
        ["There's no way you can stop me.", "Got promoted to Vanquisher."],
        ["This should be fun.", "Finished 5 Character Episode stories."],
        ["Under the divine protection of Sirius.", "Healed an overall total of 500 damage in recoverable health. (Excluding offline player battles)"],
        ["What a rush!", "Performed 5 Heat Bursts. (Excluding offline player battles)"],
        ["You aren't alone anymore.", "Finish Chapter 7 of The Dark Awakens."],
        ["You think you can stop me?", "Performed 10 Heat Dashes. (Excluding offline player battles)"],
        ["You're in for it now!", "Saved a custom character in Character Customization."],
        ["Your fate is already decided.", "Activated Heat 5 times with a Heat Engager. (Excluding offline player battles)"],
        ["Your money is my money! ", "Obtained an overall total of 10,000,000G."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
