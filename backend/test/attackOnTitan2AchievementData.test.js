import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/attack-on-titan-2.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 601050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("attack-on-titan-2");

test("getPlannerData('attack-on-titan-2') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for attack-on-titan-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Attack on Titan 2 achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Attack on Titan 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Attack on Titan 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["As long as we keep fighting, we've still got a chance.", "Used 1,000 Wings of Freedom."],
        ["Avoid unfavorable battles.", "Built 100 bases in battle."],
        ["Devote your heart!", "Unlocked all characters in Attack on Titan 2 / A.O.T. 2."],
        ["Don't be stupid. I've always been talkative.", "Leveled one character to max friendship in Attack on Titan 2 / A.O.T. 2."],
        ["Don't worry... Just keep training.", "Got selected as the top performer during training in Episode 1 of the Story Mode prologue."],
        ["He was a soldier who fought to the very end.", "Completed the final chapter in Story Mode."],
        ["Hmm... Not bad...", "Leveled the protagonist to max level in Attack on Titan 2 / A.O.T. 2."],
        ["I know we can win this if we work together!", "Used a Buddy Action."],
        ["I was able to control myself perfectly.", "Avoided 100 Titan attacks."],
        ["I'll be the one to hunt those Titans to extinction!", "Completed all Scout Missions in Attack on Titan 2 / A.O.T. 2."],
        ["I'll wrap that around you as many times as you want.", "Completed Story Mode Chapter 5."],
        ["I'm gonna destroy them! Every last one that's on this earth!", "Completed all Story Mode Dire Eliminations."],
        ["I'm just glad it didn't turn out any worse...", "Saved 100 or more comrades."],
        ["I'm the deliverer of death! ", "Eliminated a Titan with the Hook Drive."],
        ["If you don't fight, you can't win.", "Achieved a Battle Rating of S in all Story Mode episodes."],
        ["If you don't know about something, you just have to learn it.", "Reached 50% gallery completion in Attack on Titan 2 / A.O.T. 2."],
        ["It's great to have something you could put your life on the line for...", "Completed 100 Side Missions."],
        ["It's huge! What the heck is it?", "Completed your first Dire Elimination."],
        ["It's not so bad, being a goddess and all.", "Leveled all characters to max friendship in Attack on Titan 2 / A.O.T. 2."],
        ["Just shut your mouths and invest everything in me!", "Used more than 100,000 RegimC40ent Funds in total."],
        ["Live a life that you can be proud of.", "Completed Story Mode Chapter 4."],
        ["More... Must kill more...", "Eliminated a total of 1,000 enemies."],
        ["My specialty is tearing through flesh.", "Got 2,000 total body part destructions."],
        ["No matter what you train in, it will serve humanity some day.", "Maxed out all training levels in Attack on Titan 2 / A.O.T. 2."],
        ["No need to hold back.", "Increased friendship rank."],
        ["Sorry, buddy, but I'm just a natural.", "Leveled one character to max rank in Attack on Titan 2 / A.O.T. 2."],
        ["The outside world must be a hundred times bigger than inside the Walls!", "ched 100% gallery completion in Attack on Titan 2 / A.O.T. 2."],
        ["There's still so much I need to find out about the world.", "Completed 25% or more of the Scout Missions in Attack on Titan 2 / A.O.T. 2."],
        ["This attack will be the final blow!", "Successfully completed a Sneak Attack."],
        ["This first step will be a big one for the human race.", "Completed Story Mode Chapter 1."],
        ["This is a true salute!", "Had over 100 allies join."],
        ["This world has always been a living hell.", "Had over 100 allies die."],
        ["We'll make a breakthrough eventually... And see what truth these Walls are hiding.", "Acquired all trophies."],
        ["We're always at an information disadvantage against the Titans.", "Reached 25% gallery completion in Attack on Titan 2 / A.O.T. 2."],
        ["We've got a talented one here.", "Achieved a Battle Rating of S in any episode."],
        ["Well, you see... It's just seething with rage!", "Maxed out the Titan Research Room level in Attack on Titan 2 / A.O.T. 2."],
        ["What do you expect? The world is a cruel place.", "Completed Story Mode Chapter 3."],
        ["What is it that you see?", "Completed Story Mode Chapter 2."],
        ["What must be done.", "Completed 50% or more of the Scout Missions in Attack on Titan 2 / A.O.T. 2."],
        ["You mind if I take that?", "Sent 50 gifts."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
