import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/streets-of-rage-4.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 985890 (fetched through this app's own services/steamApi.js).
// 8 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("streets-of-rage-4");

test("getPlannerData('streets-of-rage-4') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for streets-of-rage-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Streets of Rage 4 achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Streets of Rage 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Streets of Rage 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 Yen", "Clear the Arcade mode on Hard difficulty or higher."],
        ["All Clear: Adam", "Clear all stages in single-player mode as Adam."],
        ["All Clear: Axel", "Clear all stages in single-player mode as Axel."],
        ["All Clear: Blaze", "Clear all stages in single-player mode as Blaze."],
        ["All Clear: Cherry", "Clear all stages in single-player mode as Cherry."],
        ["All Clear: Estel", "Clear all stages in single-player mode as Estel."],
        ["All Clear: Floyd", "Clear all stages in single-player mode as Floyd."],
        ["All Clear: Max", "Clear all stages in single-player mode as Max."],
        ["All Clear: Shiva", "Clear all stages in single-player mode as Shiva."],
        ["All Clear: SOR1", "Clear all stages in single-player mode with a \"SOR1\" character."],
        ["All Clear: SOR2", "Clear all stages in single-player mode with a \"SOR2\" character."],
        ["All Clear: SOR3", "Clear all stages in single-player mode with a \"SOR3\" character."],
        ["All Too Easy", "Complete a stage on Mania difficulty."],
        ["An Elegant Death", "Use a chandelier to kill an enemy."],
        ["Birth of the Cool", "Catch a weapon in the air."],
        ["Bleeding Knuckles", "Reach a lifetime score of 5,000,000."],
        ["Broke My Toy", "Break a spear."],
        ["Clown Wars", "Unlock the hidden character Roo (hold Up and the special-attack button together at the main menu). Playing as Roo, collect 3 Star power-ups and use his Star special move 3 times in quick succession to have 3 clown allies fighting alongside you at once."],
        ["Collateral Damage", "Use a barrel or a grenade explosion to kill 3 enemies at the same time."],
        ["Combo Expert", "Achieve an \"Amazing!!\" combo."],
        ["Combo Master", "Achieve an \"Out of this world!!!\" combo."],
        ["Combo Pro", "Achieve a \"Super!\" combo."],
        ["Demolition Man", "Use a wrecking ball to kill an enemy."],
        ["Dojo Master", "Defeat Shiva in his boss encounter during the campaign."],
        ["Dude, My Car!", "Break the car in The Streets."],
        ["Eating off the Ground", "Consume a healing item."],
        ["Family Reunion", "In Stage 8's art gallery room, clear out the enemies, then attack the pedestal holding the Golden Chicken to knock it loose. Carry the chicken (do not attack with it, or it breaks) all the way to the end of the level - easiest in co-op with one player escorting the chicken while the other clears enemies."],
        ["I Am the One", "Reach level 30 in survival mode."],
        ["It's Chilly in Here", "Break both elevator window panes."],
        ["Life's a Struggle", "Free yourself from a grab."],
        ["Maniac", "Get an S-Rank on all stages on Hard difficulty or higher."],
        ["Miss Me?", "Meet Adam during the campaign - a story-reveal moment that happens naturally as you progress."],
        ["Old-Schooled", "Defeat Mr. and Ms. Y, the game's final campaign bosses."],
        ["Oops", "Hit an ally."],
        ["Perfect", "Complete a stage without taking damage."],
        ["Phantom in the Hull", "Reach level 18 in survival mode."],
        ["Snap Out of It", "Defeat the possessed version of Max during the campaign."],
        ["Somebody Call the Cops!", "Play as an SOR1-style character (Axel/Blaze/Adam's original-game moveset, which has no specials or Star moves). Collect a Star power-up, then use the special-move button anyway - instead of the usual Star attack, an SOR1 character calls in a police car that fires a rocket launcher at the surrounding area."],
        ["Stage Mastery", "Get an S-Rank on any stage."],
        ["The Possibilities Are Endless", "Unlock all alternate moves."],
        ["THIS IS WOOD OAK CITY!!!", "Kill an enemy by tossing them in a hole."],
        ["Throwback", "Find one of the game's 4 hidden Retro Levels by locating a hidden Arcade Machine on a stage and attacking it. Simply entering the retro level pops the achievement - you do not need to clear it."],
        ["Ultimate Warrior", "Unlock all alternate moves for one character."],
        ["Walk on Foot", "Destroy all motorcycles."],
        ["Wasted Wine", "Break a wine bottle."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 8 hidden Streets of Rage 4 achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Throwback", "Miss Me?", "Dojo Master", "Snap Out of It", "Old-Schooled", "Family Reunion", "Somebody Call the Cops!", "Clown Wars"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
