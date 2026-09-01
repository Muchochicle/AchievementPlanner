import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/medieval-dynasty.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1129580 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("medieval-dynasty");

test("getPlannerData('medieval-dynasty') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for medieval-dynasty");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Medieval Dynasty achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Medieval Dynasty achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Medieval Dynasty achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A helping hand", "Complete 100 side quests."],
        ["A new home", "Build your first house."],
        ["Camp", "Reach Camp development level."],
        ["Caveman", "Have mine built on every cave on the map."],
        ["City", "Reach City development level."],
        ["Closure", "Finish the main quest."],
        ["Dirty Henry", "Be 100% dirty."],
        ["Farm", "Reach Farm development level."],
        ["Firstborn", "Have an Heir."],
        ["Hamlet", "Reach Hamlet development level."],
        ["Happy wife, happy life", "Give your wife gifts for 2 following years."],
        ["Harvestin' season", "Harvest a field bigger than 6x6."],
        ["Hedgehog", "Impale an animal with 4 spears while it's still alive."],
        ["Hermitage", "Reach Hermitage development level."],
        ["Hunting Royale", "Kill every type of wild animal during one dynasty."],
        ["I may not be good at it after all...", "Get caught stealing 50 times during one dynasty."],
        ["I wasn't even looking", "Hit the archery target and get 100 or more points."],
        ["I will pay next month, I swear", "Have a tax debt of at least 5000 coins."],
        ["I wonder how many I can fit...", "Get 12 status effects at once."],
        ["I... am not... drunk", "Be drunk (100%)."],
        ["It wasn't me!", "Get caught stealing for the first time."],
        ["Let's break a stick!", "Get your first inhabitant."],
        ["Look at my mount", "Get a mount."],
        ["LumberJACKED", "Complete the 'Uniegost's Story IV' quest by delivering 1,000 logs (only available on The Valley map)."],
        ["M'Lady", "Have a Wife."],
        ["Master of Diplomacy", "Get level 10 in Diplomacy."],
        ["Master of Extraction", "Get level 10 in Extraction."],
        ["Master of Farming", "Get level 10 in Farming."],
        ["Master of Hunting", "Get level 10 in Hunting."],
        ["Master of Production", "Get level 10 in Production."],
        ["Master of Survival", "Get level 10 in Survival."],
        ["Must have been the wind", "Sell 50 of the stolen goods during one dynasty."],
        ["My Stumps", "Remove 100 stumps."],
        ["Oopsie daisy", "Die."],
        ["Settlement", "Reach Settlement development level."],
        ["Show me the money!", "Have 1000000 Coins."],
        ["Small Farm", "Reach Small Farm development level."],
        ["Strider", "Visit every village during one dynasty."],
        ["The Dynasty Continues", "Play as an Heir."],
        ["Town", "Reach Town development level."],
        ["Village", "Reach Village development level."],
        ["Village Manager", "Have at least 50 inhabitants."],
        ["Warm-blooded", "Survive winter with no clothes on."],
        ["Well earned rest", "Sleep in your bed every night for the entire year."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
