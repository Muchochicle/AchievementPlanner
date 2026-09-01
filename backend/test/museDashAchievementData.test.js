import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/muse-dash.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 774171 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("muse-dash");

test("getPlannerData('muse-dash') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for muse-dash");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Muse Dash achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Muse Dash achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Muse Dash achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["300 Combo!", "Reach 300 Combo in a stage"],
        ["Accurate Positioning", "Select a song through Music Index, Difficulty Filter or Search and play it"],
        ["APP Logo Found!", "Clear a Lights of Muse stage at any difficulty level"],
        ["Blue Notes Hunter", "Totally collect 500 Notes"],
        ["Conquering the Newbie Zone", "Finish the tutorial April Fool's Day ver"],
        ["Full Combo Master", "Get Full Combo in 30 different stages"],
        ["Full Combo!!", "Get Full Combo in a stage"],
        ["GENTLEMAN", "Hit the mascot on the ENTER (title) screen more than 10 times in a row."],
        ["Give Up Treatment", "Clear a Lv.4 or Lv.4+ stage without collecting any Red Hearts."],
        ["Hands of God", "Achieve 100% accuracy on a Lv.6 or Lv.6+ stage."],
        ["Have a Try?", "Play a Lv.11 stage"],
        ["I don't care about Christmas though", "Clear a stage of I don’t care about Christmas though at any difficulty level"],
        ["Illustration Collection", "Totally collect 20 illustrations"],
        ["Inner World", "Play any hidden sheet (accessed via the Music Index; songs marked with a music-note-plus symbol - you only need to complete about 50% of the stage)."],
        ["Is That OK? ", "Clear a stage without knocking back any enemies."],
        ["Is the Order a Lovely Girl? ~ I started from scratch and did everything I could to become a Muse master with 14 lovely girls. However, when I looked forward to a happy life in this exotic world, I was suddenly thrown into a \"scene of carnage\" of gears and hanging hammers. There must be something wrong with my Lovely Girl Monogatari~ For these girls’ bright future, I must successfully play Lv.12 songs!", "Totally unlock 14 characters"],
        ["Love Actually", "Totally collect 300 Red Hearts"],
        ["Melee Fight", "Totally knock back 100 BOSS's melee attacks"],
        ["Mujinku", "Achieve an 'S' grade on 'Mujinku-Vacuum Track#ADD8E6' on Hard or Master mode."],
        ["Muse Master", "Obtain every non-hidden achievement."],
        ["Musemon Master", "Totally collect 8 elfins"],
        ["NewType", "Achieve grade \"S\" in a Lv.7 or Lv.7+ stage"],
        ["One More Needed", "Finish a Lv.7 or Lv.7+ stage with only one 'Miss' judgement."],
        ["Playing along Both Lines", "Totally knock back 100 enemies or BOSS's remote attacks while playing a Sheet (hold note)"],
        ["S", "Achieve grade \"S\" in a stage"],
        ["Sancheck", "Clear a Mopemope stage at any difficulty level"],
        ["Stream of Consciousness", "Totally knock back 300 Ghosts"],
        ["The First Time", "Clear a stage"],
        ["THE MUSEM@STER", "Obtain all achievements."],
        ["The Strongest among the Weak", "Clear 20 stages"],
        ["Tower of Strength", "Clear 20 Hard Mode stages"],
        ["Trick or treat?", "Clear an umpopoff stage at difficulty level \"?\""],
        ["Tutorial", "Achieve a 'Silver S' grade on 'Heart-Pounding Flight' on Hard mode."],
        ["Uh-oh, a Rear-end Collision…", "Clear a Blackest Luxury Car stage at any difficulty level"],
        ["Walk on the Tip of a Blade", "Clear a song with Little Devil Marija"],
        ["Welcome to Muse Dash", "Complete the tutorial stage"],
        ["You Have a Great", "Clear a stage with only one \"Great\""],
        ["You Peak at It", "Achieve a 'Silver S' grade on any Lv.7 or Lv.7+ stage."],
        ["You’ve Conquered It!", "Clear 10 Master Mode stages"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
