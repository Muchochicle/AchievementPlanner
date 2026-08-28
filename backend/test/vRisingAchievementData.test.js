import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/v-rising.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1604030 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 49 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("v-rising");

test("getPlannerData('v-rising') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for v-rising");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every V Rising achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every V Rising achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 V Rising achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        [" Symphony of the Night", "Interact with a music box."],
        ["A Creature of Many Forms", "Use your Vampire powers to shapeshift into another form."],
        ["A First Taste", "Feed from a living creature."],
        ["A Fox in the Hen House", "Venture into the Dunley Farmlands area."],
        ["A Perfect Test Subject", "Feed a prisoner with Irradiant Gruel and have them reach 100% blood quality as a result."],
        ["A Vampire with a Hobby", "Plant a seed in a planter."],
        ["A Weapon From a More Civilized Age", "Reforge a shattered weapon at the Ancestral Forge."],
        ["A Whole New World", "Venture into the Farbane Woods area."],
        ["An Eye for Quality", "Successfully charm a human that has 100% blood quality."],
        ["Blood Donor", "Extract blood from a prisoner."],
        ["Brutal Slayer of the Immortal King", "Defeat Dracula, The Immortal King, on Brutal Difficulty."],
        ["Collector of Forgotten Lore I", "Interact with a Research Desk that has all technologies unlocked."],
        ["Collector of Forgotten Lore II", "Interact with a Study that has all technologies unlocked."],
        ["Collector of Forgotten Lore III", "Interact with an Athenaeum that has all technologies unlocked."],
        ["Completed Act 1", "Defeat Quincey the Bandit King and complete Act I."],
        ["Completed Act 1 on Brutal Difficulty", "Defeat Quincey the Bandit King and complete Act I on Brutal Difficulty."],
        ["Completed Act 2", "Defeat Octavian the Militia Leader and complete Act II."],
        ["Completed Act 2 on Brutal Difficulty", "Defeat Octavian the Militia Leader and complete Act II on Brutal Difficulty."],
        ["Completed Act 3", "Defeat Cyril the Cursed Smith and complete Act III."],
        ["Completed Act 3 on Brutal Difficulty", "Defeat Cyril the Cursed Smith and complete Act III on Brutal Difficulty."],
        ["Completed Act 4", "Defeat Solarus the Immaculate and complete Act IV."],
        ["Completed Act 4 on Brutal Difficulty", "Defeat Solarus the Immaculate and complete Act IV on Brutal Difficulty."],
        ["Don't Drink the Water", "Venture into the Gloomrot South area."],
        ["Dressed to Impress", "Equip an item in a Cosmetic Slot."],
        ["Every Corner of the World", "Venture to all major regions."],
        ["Exquisite Blood", "Drink blood from a 100% blood quality source."],
        ["First of Many", "Drink the blood of a V Blood."],
        ["Footsteps in the Snow", "Venture into the Hallowed Mountains area."],
        ["Forbidden Footsteps", "Venture into the Cursed Forest area."],
        ["Godless Intrusion", "Venture into the Silverlight area."],
        ["Gone Fishing", "Catch a fish using a fishing rod."],
        ["Instant Gratification", "Teleport using a Vampire Waygate."],
        ["It's a Tight Squeeze", "Use Rat Form and traverse through a small hole."],
        ["Larger Pockets!", "Equip a bag."],
        ["Lord of the Land", "Place a Castle Heart and claim an unoccupied territory."],
        ["March of the Machines", "Venture into the Gloomrot North area."],
        ["Master of All", "Defeat and drink the blood of every V Blood."],
        ["Master of Disguise", "Trade with a merchant as a very ordinary human."],
        ["Oh No!", "Eat the wrong mushroom."],
        ["Riftslayer", "Participate in closing a rift to the Shadow Realm."],
        ["Slayer of the Immortal King", "Defeat Dracula, The Immortal King."],
        ["The Allure of Coin", "Trade with a Shady Merchant in the Farbane Woods."],
        ["The Forgotten Reaches", "Venture into the Ruins of Mortium area."],
        ["To the Skies", "Find a way to fly."],
        ["Ultimate Power", "Cast an ultimate ability."],
        ["Upon a Pale Horse", "Ride a horse."],
        ["Vampire Rising", "Place a staircase."],
        ["Work Smart, Not Hard", "Interact with a work station that has the room and floor bonus active."],
        ["Your Number One Fan", "Fully equip a servant."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
