import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/persona-4-golden.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1113000 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("persona-4-golden");

test("getPlannerData('persona-4-golden') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for persona-4-golden");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Persona 4 Golden achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Persona 4 Golden achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Persona 4 Golden achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Favor for Marie", "Register a Skill Card."],
        ["A New Quiz King", "Win the Miracle Quiz Finals."],
        ["A Prince Appears", "Rescue Yukiko Amagi (finish her dungeon)."],
        ["A Special Lady", "Enter a special relationship with someone."],
        ["A True Bond", "Max out a Social Link."],
        ["A True Man's Stand", "Rescue Kanji Tatsumi (finish his dungeon)."],
        ["Advantage Mine", "Enter a battle with Player Advantage."],
        ["An Acquired Taste", "Drink the coffee at Chagall Café."],
        ["Big Bro is Worried", "Visit Nanako in the hospital three times on the specific dates after she is admitted."],
        ["Boarded-Up Lab", "Rescue Naoto Shirogane (finish her dungeon)."],
        ["Bond Maniac", "Max out 10 Social Links."],
        ["Breaking Through the Fog", "Pursue the true ending of the game (make the correct late-game choices)."],
        ["Bug Hunter", "Swing the net with perfect timing."],
        ["Card Collector", "Register 100 Skill Cards."],
        ["Compulsive Reader", "Read all books."],
        ["Cooking With Gas", "Make 5 perfect boxed lunches."],
        ["Displaying Adaptability", "Switch Personas 5 times in 1 battle."],
        ["Fashion Plate", "Fight a battle in costume."],
        ["Fill Your Hand", "Get 50 Sweep Bonuses."],
        ["Fishing Master", "Catch the Sea Guardian."],
        ["Food Fighter", "Finish Aiya's special dish."],
        ["Fusion Expert", "Perform 50 Persona fusions."],
        ["Game Over", "Apprehend Mitsuo Kubo."],
        ["Going Nova", "Deal over 999 damage in 1 attack."],
        ["Golden Completed", "Earn all achievements"],
        ["Granter of Your Desires", "Buy 5 things from Tanaka's Amazing Commodities."],
        ["Grasping at Greed", "Defeat a Golden Hand."],
        ["Hardcore Risette Fan", "Hear 250 of Rise's navigation lines."],
        ["Head of the Class", "Rank #1 in your class on an exam."],
        ["It's Working Today", "Buy an item from the Capsule Machine."],
        ["Legend of Inaba", "Max out all Social Links."],
        ["Lucky Me!", "Win a prize from the vending machine."],
        ["Moderate Bookkeeper", "Register over 50% of the Compendium."],
        ["Movie Buff", "Go to 3 movies at 30 Frame."],
        ["Mr. Perfect", "Max out all social qualities."],
        ["One Who Has Proven Their Power", "Challenge Margaret to a fight and win (requires max Empress Social Link - New Game Plus only)."],
        ["Persona Shopper", "Buy a Persona from the Compendium."],
        ["Seize the Moment", "Buy a special croquette from Sozai Daigaku."],
        ["Skilled Commander", "Perform 50 All-Out Attacks."],
        ["Special Fusion Expert", "Perform a special fusion using four or more Personas at once."],
        ["Tactical Fighter", "Exploit enemy weaknesses 100 times."],
        ["The Lounge Is Closed", "Rescue Rise Kujikawa (finish her dungeon)."],
        ["The Nose Doesn't Always Know", "Experience a fusion accident."],
        ["The Other Self", "Obtain the Persona Izanagi."],
        ["The Power of Truth", "Fuse Izanagi-no-Okami (New Game Plus only)."],
        ["The Reaper Becomes the Reaped", "Open 20 treasure chests, then agree to open the final one and defeat the Reaper."],
        ["The Return of the Angels", "Rescue Nanako Dojima."],
        ["The Truth In Your Hands", "Defeat Izanami (the true final boss)."],
        ["Thorough Bookkeeper", "Complete the Persona Compendium."],
        ["Welcome Back", "Finish the Hollow Forest dungeon."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
