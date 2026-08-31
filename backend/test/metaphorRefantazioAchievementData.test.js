import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metaphor-refantazio.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2679460 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("metaphor-refantazio");

test("getPlannerData('metaphor-refantazio') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for metaphor-refantazio");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Metaphor: ReFantazio achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Metaphor: ReFantazio achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Metaphor: ReFantazio achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All That Glitters", "Make all possible gold beetle item exchanges."],
        ["Allies United", "Meet your contact in the Northern Border Fort (story)."],
        ["Archetype Adept", "Master an Archetype."],
        ["Archetype Hero", "Master all the Archetypes with the protagonist."],
        ["At Your Own Risk", "Successfully challenge the test of courage at the highest difficulty."],
        ["Blessed Power", "Purify a piece of equipment."],
        ["Bookworm", "Finish reading all books."],
        ["Calamity Averted", "Complete the Regalith Grand Cathedral (story)."],
        ["Chef in Training", "Help cook a meal at the inn with Maria."],
        ["Closing the Book", "In New Game+, defeat the redscale dragon from the Book of Apocalypse."],
        ["Coliseum Champion", "Win 30 consecutive Gold Class battles at the coliseum."],
        ["Coronation of the King", "Beat the game and witness the ending - bringing about true peace."],
        ["Dark Truths", "Complete Kriegante Castle (story)."],
        ["Debate Me", "Win debates against all candidates."],
        ["Entrusted", "Complete all four Trial of the Dragon side quests, then defeat Louis."],
        ["For Science!", "Perform a Special Experiment."],
        ["Globetrotter", "Visit all towns."],
        ["Hearts as One", "Max all Follower ranks."],
        ["Help Anyone in Need", "Complete all quests."],
        ["Hey, Listen!", "Consult Gallica 100 times."],
        ["His Majesty", "Study and master the Prince (Royal) Archetype."],
        ["History Untold", "Complete the Dragon Temple (story)."],
        ["King of Cuisine", "Make all recipes."],
        ["Mission Accomplished", "Complete the Montario Opera House (story)."],
        ["Money is Power", "Spend a total of 100,000 reeve using skills that consume money."],
        ["Monster Hunter", "Subjugate a bounty."],
        ["No Mercy", "End 50 battles without taking damage."],
        ["On Knife's Edge", "Complete the Charadrius dungeon (story)."],
        ["Out of the Fire", "Complete the Nord Mines (story)."],
        ["Shake on It", "Obtain a Follower."],
        ["Shrewd Shopper", "Buy an item on discount."],
        ["Skybound Hope", "Complete the Skybound Avatar dungeon (story)."],
        ["Star Shatterer", "Defeat Destroyer Charadrius' secret form in the Tyrant's Star dungeon, reached by avoiding every Melancholia Crystal on each floor."],
        ["Stray Elements", "Defeat 10 Elmentas."],
        ["Stunning!", "Stun an enemy."],
        ["Summon Mask Time", "Create all summoning vessels and masks."],
        ["Sword Surfer", "Travel a significant distance by blade-riding."],
        ["Tactical Strike", "Inflict ambush damage against stunned enemies 100 times."],
        ["Teamwork Makes the Dream Work", "Use 50 different Synthesis skills."],
        ["The Traveller", "Acquire all achievements."],
        ["United Front", "Use a Synthesis skill for the first time."],
        ["Vista Viewer", "Collect all drawings of the journey."],
        ["What's Yours is Mine", "Steal an item from an enemy."],
        ["Worldly Wisdom", "Unlock the entire map."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
