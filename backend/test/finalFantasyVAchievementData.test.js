import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-v.json - 96 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 382890 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-v");

test("getPlannerData('final-fantasy-v') returns real planner data with 96 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-v");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 96);

});

test("every FINAL FANTASY V achievement has a unique id from 1 to 96 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 96 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 96);
    assert.strictEqual(new Set(apinames).size, 96);

});

test("every FINAL FANTASY V achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 96 FINAL FANTASY V achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A One and a Two...", "All four characters mastered the dancer job."],
        ["A Promise to Return", "You raised Lenna to level 25."],
        ["Band of Thieves", "All four characters mastered the thief job."],
        ["Battle Master", "All four characters mastered the gladiator job."],
        ["Bestiary (192 Pages)", "You completed 60% of the Bestiary."],
        ["Bestiary (32 Pages)", "You completed 10% of the Bestiary."],
        ["Bestiary (323 Pages)", "You completed the entire Bestiary."],
        ["Bestiary (96 Pages)", "You completed 30% of the Bestiary."],
        ["Blistering Bombardment", "All four characters mastered the cannoneer job."],
        ["Bronze Hunter", "You defeated 100 enemies."],
        ["Careful Captain!", "You raised Faris to level 25."],
        ["Catch and Release", "All four characters mastered the beastmaster job."],
        ["Chancellor' Relief", "You raised Lenna to level 99."],
        ["Check Me Out!", "You raised Bartz to level 75."],
        ["Child of the Earth", "All four characters mastered the geomancer job."],
        ["Couldn't Tell", "You discovered Faris's true identity."],
        ["Customer Appreciation", "You played a new game."],
        ["Demon Dragon", "You defeated Shinryu."],
        ["Didn't Mean to Worry You", "You raised Lenna to level 50."],
        ["Dimensional Assassins", "\"You defeated Exdeath's servants--assassins from another dimension.\""],
        ["Don't Mess with Me", "You raised Bartz to level 99."],
        ["Don't Think, Feel!", "All four characters mastered the monk job."],
        ["Ebony and Ivory", "All four characters mastered the red mage job."],
        ["Enough of a Beating", "You defeated Gilgamesh."],
        ["Fallen Warrior", "You cleared the Cloister of the Dead."],
        ["Fear of Heights", "You obtained a wind drake."],
        ["FINAL FANTASY V Master", "You earned all achievements."],
        ["Flush with Gil", "You earned 200,000 gil."],
        ["Forget Something?", "You escaped from the final battle."],
        ["Four Samurai", "All four characters mastered the samurai job."],
        ["Galuf's World", "You arrived in Galuf's world."],
        ["Gil Cave Time!", "You earned 50,000 gil."],
        ["Gil to Burn", "You earned 500,000 gil."],
        ["Give Me Strength", "You raised Galuf to level 25."],
        ["Gold Hunter", "You defeated 1,000 enemies."],
        ["Gone Too Far!", "You raised Galuf to level 99."],
        ["Gotta Be Kidding", "You raised Galuf to level 75."],
        ["He's a She!", "You found out Faris is a woman."],
        ["In Your Debt", "You raised Lenna to level 75."],
        ["It'll Work Out!", "You raised Faris to level 75."],
        ["It's Not Over Yet", "You raised Bartz to level 25."],
        ["Job Master", "All four characters mastered every job."],
        ["Kupo!", "You met a moogle."],
        ["Lali-ho!", "You met the dwarves."],
        ["Learns from Monsters", "All four characters mastered the blue mage job."],
        ["Legendary Weapons", "You obtained the twelve legendary weapons."],
        ["Look at Me Now!", "You raised Faris to level 99."],
        ["Low Cash Flow", "You earned 10,000 gil."],
        ["Lupine Attack", "You mastered lupine attack."],
        ["Made It!", "You pinned your hopes on Gilgamesh."],
        ["Marksman", "All four characters mastered the ranger job."],
        ["Master Mimic", "You defeated the mime Gogo."],
        ["Master of Attack & Defense", "All four characters mastered the knight job."],
        ["Master of Black Magic", "All four characters mastered the black mage job."],
        ["Master of Mimicry", "All four characters mastered the mime job."],
        ["Master of Time and Space", "All four characters mastered the time mage job."],
        ["Master of White Magic", "All four characters mastered the white mage job."],
        ["Master Summoner", "All four characters mastered the summoner job."],
        ["Mechanical Warrior", "You defeated Omega."],
        ["Mechanical Warrior II", "You defeated Omega Mk.II."],
        ["Morphing Time!", "You defeated Gilgamesh again."],
        ["Mwa-hahahaha!", "You defeated Exdeath."],
        ["Neo Demon Dragon", "You defeated Neo Shinryu."],
        ["Ninja Legend", "All four characters mastered the ninja job."],
        ["Not Dead Yet!", "Krile inherited Galuf's power."],
        ["One Deadly Blow", "All four characters mastered the mystic knight job."],
        ["Our Only Hope", "You obtained a job from the fire crystal."],
        ["Piano Master", "You mastered the piano by playing all the pianos."],
        ["Platinum Hunter", "You defeated 2,000 enemies."],
        ["Prediction Machine", "All four characters mastered the oracle job."],
        ["Safe Journey!", "You raised Lenna to level 10."],
        ["Say Hello, Syldra!", "You obtained the pirate ship."],
        ["Scientific Genius", "You met Cid."],
        ["Silver Hunter", "You defeated 300 enemies."],
        ["Skull Buster", "All four characters mastered the berserker job."],
        ["Tablets in the Bag!", "\"You got the four tablets for unsealing the legendary weapons.\""],
        ["Thanks Everyone!", "You raised Galuf to level 50."],
        ["That Long Journey Smell", "You raised Faris to level 10."],
        ["The Music Man", "All four characters mastered the bard job."],
        ["The Real Letter", "\"You defeated Neo Exdeath without anyone in your party dying.\""],
        ["The Return", "You obtained a job from the earth crystal."],
        ["The Skies Are Yours!", "You obtained an airship."],
        ["The Void", "You defeated Enuo."],
        ["The Wind Calls", "You raised Bartz to level 10."],
        ["The Wind Won't Stop!", "You raised Bartz to level 50."],
        ["Time's a-Wasting!", "You raised Faris to level 50."],
        ["Too Late", "You obtained a job from the water crystal."],
        ["Treasure Hunter", "You opened all the treasure chests."],
        ["Trial and Error", "All four characters mastered the chemist job."],
        ["Turtle!", "You reunited with Ghido in the third world."],
        ["Undead Freak", "All four characters mastered the necromancer job."],
        ["Under the Sea", "You obtained a submarine."],
        ["Warriors of Light", "You defeated Neo Exdeath."],
        ["What!?", "You obtained a job from the wind crystal."],
        ["Where Am I?", "You raised Galuf to level 10."],
        ["Wind Rider", "All four characters mastered the dragoon job."],
    ];

    assert.strictEqual(officialAchievements.length, 96, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
