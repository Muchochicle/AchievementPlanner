import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sengoku-dynasty.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1702010 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sengoku-dynasty");

test("getPlannerData('sengoku-dynasty') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for sengoku-dynasty");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Sengoku Dynasty achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Sengoku Dynasty achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Sengoku Dynasty achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 is a company, 3 is a crowd", "Have 3 non-player villagers in your Dynasty."],
        ["Bad dog!", "Kill a wolf"],
        ["Bearly Survived!", "Kill a bear."],
        ["Best Superpower", "Have 50,000 coins in your inventory."],
        ["Branching Out", "Have a child."],
        ["Breaking the Mold", "Establish a village outside the starting region."],
        ["Bronze Age", "Craft a bronze-tier weapon or tool."],
        ["Bushidō Mastery", "Unlock max level in all Way of the Warrior (non-background) perks."],
        ["Craftsmanship Mastery", "Unlock max level in all Way of the Craftsman (non-background) perks."],
        ["Daimyō", "Reach the max Dynasty Legend level."],
        ["Don't You Dare Chop It!", "Plant a tree and let it grow to full size."],
        ["Finally, the proper toys", "Craft an iron-tier weapon or tool."],
        ["Foothold situation", "Liberate any region."],
        ["For the sake of sake", "Drink sake."],
        ["From Drab to Fab", "Build any decoration."],
        ["Get my bearings", "Complete the \"Get Your Bearings\" quest."],
        ["Gotta Slay 'Em All", "Kill all types of animals and any human opponent."],
        ["Gourmet", "Consume any top-tier, excellent meal."],
        ["Guardian of Needs", "Have a positive production for all 8 types of needs simultaneously."],
        ["Hands Off My Gold!", "Kill any enemy."],
        ["Hot Springs and Chill", "Bathe in an Onsen."],
        ["I believed I could fly", "Die because of the fall damage."],
        ["It ain't much but it’s honest work", "Personally harvest crops from your farm field."],
        ["Look at this gem!", "Craft a masterwork-tier weapon or tool."],
        ["No More Couch Surfing!", "Build any house-type structure."],
        ["One Less Mouth to Feed!", "Have a villager leave your Dynasty for any reason."],
        ["Personal Enlightenment", "Unlock max level in all Warrior, Monk, and Craftsman (non-background) perks."],
        ["Questing: Not Just for Heroes", "Finish all neutral village side quests."],
        ["Spiritual Mastery", "Unlock max level in all Way of the Monk (non-background) perks."],
        ["Stop oinking!", "Kill a boar."],
        ["The Great Unifier", "Liberate all regions."],
        ["The Honorable Restoration", "Complete all Special Projects on the map."],
        ["There's nowhere to run!", "Kill a deer."],
        ["Thousand Gold Club", "Have 1,000 coins in your inventory."],
        ["Timberrrr!", "Cut down any full-size tree."],
        ["Unleashing the Power of Steel!", "Craft a steel-tier weapon or tool."],
        ["We live in a society", "Reach the max population at max Dynasty Level."],
        ["What Does the Fox Say?", "Kill a fox."],
        ["What's Up, Doc?", "Kill a hare."],
        ["Who smelt it dealt it", "Sticks and stones may break bones but copper will pierce hearts. Craft a copper-tier weapon or tool."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
