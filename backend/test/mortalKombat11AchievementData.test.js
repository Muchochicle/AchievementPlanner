import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mortal-kombat-11.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 976310 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 58 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mortal-kombat-11");

test("getPlannerData('mortal-kombat-11') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for mortal-kombat-11");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Mortal Kombat 11 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Mortal Kombat 11 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Mortal Kombat 11 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Balanced", "Perform 2 different FATALITIES with Cetrion"],
        ["Blood Bath", "Perform 2 different FATALITIES with Skarlet"],
        ["Blood In The Water", "Spill 10,000 pints of blood"],
        ["Bonzer Bog", "Perform 2 different FATALITIES with Kano"],
        ["Brutal End", "Perform 25 BRUTALITIES"],
        ["Bugging Out", "Perform 2 different FATALITIES with D'Vorah"],
        ["Caged", "Perform 2 different FATALITIES with Johnny Cage"],
        ["Cyber Initiative", "Perform 2 different FATALITIES with Frost"],
        ["Deadly Encounter", "Perform 15 different FATALITIES"],
        ["Disco's Not Dead", "Flip Stance 50 times during a match"],
        ["Double Dose Of Deadly", "Perform 2 different FATALITIES with Noob"],
        ["Enough Already", "Hit the Gong in the Krypt"],
        ["Family Values", "Perform 2 different FATALITIES with Cassie Cage"],
        ["Get Over Here", "Spear 50 hanging bodies in the Krypt"],
        ["Get Some", "Perform 2 different FATALITIES with Jax"],
        ["Gimme Dat Money", "Spend 50,000 koins in the Naknadan shrine"],
        ["Grave Robber", "Open 200 Krypt chests"],
        ["Half Way There", "Komplete 50% of Story Mode"],
        ["Hat Trick", "Perform 2 different FATALITIES with Kung Lao"],
        ["Have We Met", "Equip 5 different character intros"],
        ["Hit The Dojo", "Komplete all Basics Tutorials"],
        ["I Want It All", "Komplete the Novice, Warrior, or Champion Klassic Towers with 10 different kharacters"],
        ["Ka-Ballin", "Perform 2 different FATALITIES with Kabal"],
        ["Klassic", "Komplete a Novice, Warrior, or Champion Klassic Tower once"],
        ["Kollected", "Perform 2 different FATALITIES with Kollector"],
        ["Kollecting Bounties", "Perform 2 different FATALITIES with Erron Black"],
        ["Kompetitor", "Play 50 Kasual Versus matches"],
        ["Konsumed", "Use 100 konsumables"],
        ["Master of Time", "Komplete 250 Towers"],
        ["More Power", "Use 50 Konsumables"],
        ["MURDER!!!", "Perform 30 different FATALITIES"],
        ["My AI Can Do It", "Play 10 AI Battle Simulator sets"],
        ["My Magic Shoes", "Run 5 miles in the Krypt"],
        ["Never Ends", "Perform 2 different FATALITIES with Scorpion"],
        ["No Bad Match Ups", "Komplete all Strategy Tutorials"],
        ["No Bag Boy", "Perform 2 different FATALITIES with Liu Kang"],
        ["Not Dead Yet", "Show MERCY 10 times"],
        ["Oh My Days", "Duck 100 times during a match"],
        ["On Ice", "Perform 2 different FATALITIES with Sub-Zero"],
        ["Pound Town", "Perform 2 different FATALITIES with Jacqui Briggs"],
        ["Princess Power", "Perform 2 different FATALITIES with Kitana"],
        ["Psychopath", "Perform 100 BRUTALITIES"],
        ["Puppet Master", "Play 25 AI Battle Simulator sets"],
        ["R-E-S-P-E-C-T", "Pay 100 total respect points in King of the Hill"],
        ["Ready To Kompete", "Komplete all Advanced Tutorials"],
        ["Royal Guard", "Perform 2 different FATALITIES with Jade"],
        ["Sacrifice", "Perform 2 different FATALITIES with Kotal Kahn"],
        ["Skull Kabob", "Impale a head in the warrior shrine"],
        ["Struck Down", "Perform 2 different FATALITIES with Raiden"],
        ["Target Eliminated", "Perform 2 different FATALITIES with Sonya"],
        ["Teamwork", "Play a Group Battle with 2 other players"],
        ["Thank You For Being A Fan", "Reach The Kredits"],
        ["Thrashed", "Perform 2 different FATALITIES with Baraka"],
        ["Total Disrespect", "Defeat an opponent as Bug-Vorah"],
        ["Tower Champion", "Komplete 125 Towers"],
        ["Turn Back Time", "Perform 2 different FATALITIES with Geras"],
        ["Victorious", "Equip 5 different character victories"],
        ["What's Next?", "Komplete Story Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
