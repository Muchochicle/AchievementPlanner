import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/eiyuden-chronicle-hundred-heroes.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1658280 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("eiyuden-chronicle-hundred-heroes");

test("getPlannerData('eiyuden-chronicle-hundred-heroes') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for eiyuden-chronicle-hundred-heroes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Eiyuden Chronicle: Hundred Heroes achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Eiyuden Chronicle: Hundred Heroes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 Eiyuden Chronicle: Hundred Heroes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Big Bag and a Big Sack", "Maxed out stowpack and resource bag levels."],
        ["A Day in the Life of the Watch", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["A Distinguished Theater", "Received an ’S’ rating at the theater."],
        ["A Place for Heroes to Return", "Maxed out the Headquarters level."],
        ["Ace Forager", "Foraged items 250 times."],
        ["Are You Working Hard?", "Went to check out allies on a mission."],
        ["Art Is Explosive!", "Created 10 different kinds of objects in the workshop."],
        ["Beigoma Collector", "Collected all beigoma."],
        ["Bidding Father Farewell", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Binge Shopping Hero", "Spent 1 million baqua."],
        ["Bond of Heroes", "Attacked an enemy with a hero combo for the first time."],
        ["Card Collector", "Collected all cards."],
        ["Card Game Champ", "Defeated all heroes at cards."],
        ["Conquering the Proving Grounds", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Eggfoot Breeder", "Bred eggfoots 10 times."],
        ["Eggfoot Race Hero", "Won all races."],
        ["Epic Success!", "Achieved “Epic Success” in a mission task."],
        ["Eve of the Battle", "Story progress marker - reached near the end of the campaign, described here spoiler-free."],
        ["Expert Appraiser", "Appraised items 10 times at the Appraiser’s Shop."],
        ["Gourmand Hero", "Cooked all dishes at the restaurant."],
        ["Guild Founder", "Dispatched allies from the mission guild for the first time."],
        ["Hero Beyond Time and Space", "Pass every trial at the Proving Grounds (clear all 26 floors of Normal mode)."],
        ["Hero Combo Master", "Activate 20 different Hero Combos."],
        ["Hero of Commerce", "Earned 1 million baqua through trading."],
        ["Hero of Destruction", "Deal over 3,000 damage to an enemy in a single turn."],
        ["Hero’s Victory", "Cleared the game and watched the ending."],
        ["Hishahn is Defended", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Hometown on Fire", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Honorable Statue", "Constructed a hero’s statue at the Headquarters."],
        ["Hot Spring Enthusiast", "Trigger 40 different hot spring events."],
        ["Hot Spring Revelry", "Used a hot spring item to bathe in the hot springs."],
        ["I Like Runeshards!", "Collected all runeshards."],
        ["I Love Animals!", "Talked to animals 10 times."],
        ["I Love Weapons!", "Upgraded all allies’ weapons to the highest level."],
        ["I Will Reclaim This Place", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Invincible Hero", "Raised Nowa’s level to 99."],
        ["Know Thy Enemy, Know Thyself", "Completed the Encyclopedia of Enemies."],
        ["Last One to Appear", "Collect all 120 heroes."],
        ["Legendary Hero", "Unlock every other achievement."],
        ["Monument Builder", "Built a landmark."],
        ["Polished Partner", "Max out a weapon's level for the first time."],
        ["Raising the Flag of Resistance", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Skilled in War", "Cleared all mock battles."],
        ["Songs of Valor on the Great Sandy Sea", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Sweet Taste of Victory", "Story progress marker - reached late in the campaign, described here spoiler-free."],
        ["Take a Proper Rest", "Stayed at inns 10 times."],
        ["The Hero Who Fished the World", "Caught all types of fish."],
        ["The Hero Whom the Runes Smile On", "Collected all runes."],
        ["The Primal Lens", "Find the Primal Lens in the Runebarrows."],
        ["Town Building Beginner", "Raised the Headquarters level for the first time."],
        ["Town-Building Hero", "Unlock every development panel in the Drafting Studio (town building)."],
        ["Treasure Hunter", "Opened all treasure chests."],
        ["Trusted Hero", "Story progress marker - reached near the end of the campaign, described here spoiler-free."],
        ["Valorous Finned Hero", "Took first place in all shi’arcraft race classes."],
        ["Valorous Shi’arcs", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Whirled Peace", "Defeated all beigoma trainers."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
