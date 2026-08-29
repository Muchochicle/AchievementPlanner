import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mad-max.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 234140 (fetched through this app's own services/steamApi.js).
// 44 of 49 ship a real, official Steam description, quoted
// verbatim below. The 5 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mad-max");

test("getPlannerData('mad-max') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for mad-max");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Mad Max achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Mad Max achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 officially-described Mad Max achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "TRP_THE_FERAL_MAN",
        "TRP_WASTELAND_OF_OPPORTUNITIES",
        "TRP_THE_SIEGE",
        "TRP_THE_BIG_CHIEF",
        "TRP_PAINT_MY_NAME_WITH_BLOOD",
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - Mad Max has 5 hidden achievements");

    const officialAchievements = [
        ["A Thousand Words", "Collect all History Relics"],
        ["Blockhead", "Own the best V6 and V8 Engines"],
        ["Bomb Specialist", "Clear all minefields"],
        ["Daddy Wants a New Grill", "Collect all hood ornaments"],
        ["Doing Gutgash a Big Favor", "Build two projects in Gutgash's Stronghold"],
        ["Doing Jeet a Big Favor", "Build two projects in Jeet's Stronghold"],
        ["Doing Pink Eye a Big Favor", "Build two projects in Pink Eye's Stronghold"],
        ["Explosions Are Not Enough", "Complete all optional objectives in all camps"],
        ["Fresh Air", "Drive the Magnum Opus off a Wasteland jump"],
        ["Golden Boy", "Reach a new legend rank"],
        ["Gutgash Thrives", "Reduce threat to 0 in the Parch Moon region around Gutgash's Stronghold"],
        ["Jeet Thrives", "Reduce threat to 0 in the Balefire Flatland region around Jeet's Stronghold"],
        ["Just Rewards", "Have 5,000 scrap in your inventory"],
        ["Just Walk Away", "Travel 650 car lengths on foot"],
        ["Keep Up the Good Work", "Clear all threat in Gutgash's territory"],
        ["Looked Everywhere", "Loot all Scavenging Locations"],
        ["Maximum", "Fully upgrade Max"],
        ["Maximum Air", "Be airborne in a vehicle for 4 seconds or more and land without dying"],
        ["No Brainer", "Destroy all scarecrows"],
        ["On the Road to Nowhere", "Travel 1300 car lengths in a vehicle"],
        ["Pink Eye Thrives", "Reduce threat to 0 in the Knit Sack region around Pink Eye's Stronghold"],
        ["Quench Their Thirst", "Give water to a wanderer"],
        ["Razing Legend", "Take down all Scrotus camps"],
        ["Road Warrior", "Reach Road Warrior legend rank"],
        ["Running Wild", "Complete at least one race at every Death Run Location"],
        ["Rust is the New Black", "Collect all body colors"],
        ["Scrap Collector", "Have 10,000 scrap in your inventory"],
        ["Slight Distraction", "Complete the Dinki-Di Wasteland Mission"],
        ["Sniper Suppressor", "Take out all Scrotus snipers"],
        ["Spreading the Word", "Clear all threat in Pink Eye's territory"],
        ["Start of Something Good", "Clear all threat in Jeet's territory"],
        ["Stop and Smell the Roses", "Complete all Wasteland Missions"],
        ["The Bigger they are…", "Take down a Top Dog camp"],
        ["The Constructionist", "Build all projects in all strongholds"],
        ["The Exiled", "Defeat an enemy vehicle with every Archangel"],
        ["The Guardian", "Successfully complete a Death Run with every Archangel"],
        ["The Messenger", "Complete a Death Run in legendary time with every Archangel"],
        ["The Quick Driver", "Complete a Time Bomb Death Run"],
        ["The Saint", "Complete a Death Run in an Archangel"],
        ["The Skilled Driver", "Complete a Barrel Bash Death Run"],
        ["The Smart Driver", "Complete a Scatter Death Run"],
        ["Up to the Task", "Complete all non-repeating challenges"],
        ["Up, Up and Away", "Fly the balloon at every Vantage Outpost"],
        ["Wasteland Chef", "Eat a meal of maggots"],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 5 hidden Mad Max achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["TRP_THE_FERAL_MAN", "Everything Lost Again"],
        ["TRP_WASTELAND_OF_OPPORTUNITIES", "Wasteland of Opportunities"],
        ["TRP_THE_SIEGE", "Digging a Deeper Hole"],
        ["TRP_THE_BIG_CHIEF", "Power in the Machine"],
        ["TRP_PAINT_MY_NAME_WITH_BLOOD", "Downward Spiral Reawakening"],
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
