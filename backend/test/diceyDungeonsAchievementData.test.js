import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dicey-dungeons.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 861540 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dicey-dungeons");

test("getPlannerData('dicey-dungeons') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for dicey-dungeons");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Dicey Dungeons achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Dicey Dungeons achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Dicey Dungeons achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 ones in a row", "Roll 10 ones in a row."],
        ["12 episodes", "Complete any 12 episodes."],
        ["20 damage with Dagger", "Do more than 20 damage in one turn with Dagger."],
        ["40 damage in a one attack", "Do more than 40 damage in a single attack."],
        ["6 episodes", "Complete any 6 episodes."],
        ["64 Max HP", "Have max health of 64 or higher."],
        ["9 episodes", "Complete any 9 episodes."],
        ["All episodes for one contestant", "Complete all six episodes for any one contestant."],
        ["All six bonus rounds", "Complete all six bonus round episodes."],
        ["Complete all 36 episodes", "Complete all 36 regular episodes."],
        ["Countdown", "Complete the episode named \"Countdown\"."],
        ["Curse of Greed", "Complete the episode named \"Curse of Greed\"."],
        ["Defeat a boss with 4 Battle Axes", "Defeat a boss with four or more battle axes equipped."],
        ["Defeat a boss with full health", "Defeat a boss with full health."],
        ["Defeat Lady Luck", "Defeat Lady Luck."],
        ["Do 12 damage with thrown dice", "Do 12 or more damage in one turn by throwing dice."],
        ["E G G", "Hatch an egg."],
        ["Elimination Round 1", "Complete any elimination round episode."],
        ["Elimination Round 2", "Complete any two elimination round episodes."],
        ["Elimination Round 3", "Complete any three elimination round episodes."],
        ["Elimination Round 4", "Complete any four elimination round episodes."],
        ["Elimination Round 5", "Complete any five elimination round episodes."],
        ["Elimination Round 6", "Complete all six elimination round episodes."],
        ["Finders Keepers", "Complete the episode named \"Finders Keepers\"."],
        ["Four Prepared Slots", "Complete an episode as Witch with four prepared slots."],
        ["Furry Dice", "Become a furry dice."],
        ["Hard Mode Bonus Round 1", "Complete any bonus round episode in hard mode."],
        ["Hard Mode Bonus Round 2", "Complete any two bonus round episodes in hard mode."],
        ["Hard Mode Bonus Round 3", "Complete any three bonus round episodes in hard mode."],
        ["Hard Mode Bonus Round 4", "Complete any four bonus round episodes in hard mode."],
        ["Hard Mode Bonus Round 5", "Complete any five bonus round episodes in hard mode."],
        ["Hard Mode Bonus Round 6", "Complete all six bonus round episodes in hard mode."],
        ["Inflict 10 Poison", "Stack 10 or more total Poison on an enemy at once."],
        ["Inflict 30 Poison", "Stack 30 or more total Poison on an enemy at once."],
        ["Inflict 5 Burn", "Inflict 5 or more Burn in a single turn."],
        ["Inflict 5 Freeze", "Inflict 5 or more Freeze in a single turn."],
        ["Inflict 5 Shock", "Inflict 5 or more Shock in a single turn."],
        ["Lock all dice", "Lock all enemy dice."],
        ["Losers, Weepers", "Complete the episode named \"Losers, Weepers\"."],
        ["Parallel Universe 1", "Complete any parallel universe episode."],
        ["Parallel Universe 2", "Complete any two parallel universe episodes."],
        ["Parallel Universe 3", "Complete any three parallel universe episodes."],
        ["Parallel Universe 4", "Complete any four parallel universe episodes."],
        ["Parallel Universe 5", "Complete any five parallel universe episodes."],
        ["Parallel Universe 6", "Complete all six parallel universe episodes."],
        ["The Inevitability of Rust", "Complete the episode named \"The Inevitability of Rust\"."],
        ["Triple Gadget", "Use the same gadget three times in one turn."],
        ["Unlock episodes", "Unlock episodes."],
        ["Use a Finale card", "Use a Finale card."],
        ["Use Dragon's Tooth", "Use the Dragon's Tooth."],
        ["Use limit break twice", "Use your limit break twice in one turn."],
        ["Win on your first turn", "Defeat an enemy on your first turn."],
        ["You Choose, You Lose", "Complete the episode named \"You Choose, You Lose\"."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
