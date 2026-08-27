import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/slay-the-spire.json - 46 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 646570 (fetched through this app's own services/steamApi.js) -
// 33 of 46 ship a real, official Steam description. The Guardian, The
// Ghost, The Boss, The Automaton, The Collector, The Champion, The Crow,
// The Shapes, The Time Eater, Ruby+, Emerald+, Sapphire+, and The End?
// are hidden achievements Steam never describes publicly (confirmed via
// the same API call) - their descriptions here are curatorial summaries
// of their real, community-documented unlock conditions (cross-checked
// against multiple independent sources: defeating each named boss, and
// defeating the secret Corrupt Heart with each character).
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const slayTheSpire = getPlannerData("slay-the-spire");

test("getPlannerData('slay-the-spire') returns real planner data with 46 curated achievements", () => {

    assert.ok(slayTheSpire, "expected real planner data for slay-the-spire");
    assert.ok(Array.isArray(slayTheSpire.achievements));
    assert.strictEqual(slayTheSpire.achievements.length, 46);

});

test("every Slay the Spire achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = slayTheSpire.achievements.map(a => a.id);
    const apinames = slayTheSpire.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Slay the Spire achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of slayTheSpire.achievements) {

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

test("every one of the 33 officially-described Slay the Spire achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 13 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Shrug It Off", "Win a battle with 1 HP remaining."],
        ["Purity", "Have 3 or fewer cards in hand, draw, and discard pile combined."],
        ["Come At Me", "Win a combat without playing an Attack."],
        ["The Pact", "Exhaust 20 cards in a single combat."],
        ["Adrenaline", "Have 9 Energy during a single turn of combat."],
        ["Powerful", "Have 10 or more buffs during combat."],
        ["Jaxxed", "Have 50 or more Strength during combat."],
        ["Impervious", "Have 99 or more Block during combat."],
        ["Barricaded", "Have 999 Block during combat."],
        ["Catalyst", "Apply 99 or more Poison on a single enemy."],
        ["Plague", "Defeat 3 enemies with Poison in a single combat."],
        ["Ninja", "Play 10 Shivs in a single turn."],
        ["Infinity", "Play 25 cards in a single turn."],
        ["You Are Nothing", "Defeat a boss on turn 1."],
        ["Perfect", "Defeat a boss without taking any damage."],
        ["Ruby", "Beat the game with the Ironclad."],
        ["Emerald", "Beat the game with the Silent."],
        ["Who Needs Relics?", "Beat the game with a single relic."],
        ["Speed Climber", "Beat the game in under 20 minutes."],
        ["Minimalist", "Beat the game with a 5 card deck or smaller."],
        ["Ooh Donut!", "Finish Donu with a Feed."],
        ["Ascend 0", "Unlock Ascension mode."],
        ["Ascend 10", "Complete Ascension Level 10."],
        ["Sapphire", "Beat the game with the Defect."],
        ["Common Sense", "Beat the game with a deck containing no uncommons or rares."],
        ["Focused", "Have 25 or more Focus during combat."],
        ["Neon", "Channel 9 Plasma in a single turn."],
        ["My Lucky Day", "Win a Daily Climb."],
        ["The Transient", "Defeat the Transient before it fades away."],
        ["Ascend 20", "Complete Ascension Level 20."],
        ["Eternal One", "Obtain all other Achievements."],
        ["Amethyst", "Beat the game with the Watcher."],
        ["Amethyst+", "Complete the Ending with the Watcher."]
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "The Guardian", "The Ghost", "The Boss", "The Automaton", "The Collector",
        "The Champion", "The Crow", "The Shapes", "The Time Eater",
        "Ruby+", "Emerald+", "Sapphire+", "The End?"
    ]);

    const dataPairs = slayTheSpire.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 13 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const guardian = slayTheSpire.achievements.find(a => a.apiname === "GUARDIAN");
    const ghost = slayTheSpire.achievements.find(a => a.apiname === "GHOST_GUARDIAN");
    const boss = slayTheSpire.achievements.find(a => a.apiname === "SLIME_BOSS");
    const automaton = slayTheSpire.achievements.find(a => a.apiname === "AUTOMATON");
    const collector = slayTheSpire.achievements.find(a => a.apiname === "COLLECTOR");
    const champ = slayTheSpire.achievements.find(a => a.apiname === "CHAMP");
    const crow = slayTheSpire.achievements.find(a => a.apiname === "CROW");
    const shapes = slayTheSpire.achievements.find(a => a.apiname === "SHAPES");
    const timeEater = slayTheSpire.achievements.find(a => a.apiname === "TIME_EATER");
    const rubyPlus = slayTheSpire.achievements.find(a => a.apiname === "RUBY_PLUS");
    const emeraldPlus = slayTheSpire.achievements.find(a => a.apiname === "EMERALD_PLUS");
    const sapphirePlus = slayTheSpire.achievements.find(a => a.apiname === "SAPPHIRE_PLUS");
    const theEnding = slayTheSpire.achievements.find(a => a.apiname === "THE_ENDING");

    assert.ok(guardian && guardian.name === "The Guardian" && guardian.description.length > 0);
    assert.ok(ghost && ghost.name === "The Ghost" && ghost.description.length > 0);
    assert.ok(boss && boss.name === "The Boss" && boss.description.length > 0);
    assert.ok(automaton && automaton.name === "The Automaton" && automaton.description.length > 0);
    assert.ok(collector && collector.name === "The Collector" && collector.description.length > 0);
    assert.ok(champ && champ.name === "The Champion" && champ.description.length > 0);
    assert.ok(crow && crow.name === "The Crow" && crow.description.length > 0);
    assert.ok(shapes && shapes.name === "The Shapes" && shapes.description.length > 0);
    assert.ok(timeEater && timeEater.name === "The Time Eater" && timeEater.description.length > 0);
    assert.ok(rubyPlus && rubyPlus.name === "Ruby+" && rubyPlus.description.length > 0);
    assert.ok(emeraldPlus && emeraldPlus.name === "Emerald+" && emeraldPlus.description.length > 0);
    assert.ok(sapphirePlus && sapphirePlus.name === "Sapphire+" && sapphirePlus.description.length > 0);
    assert.ok(theEnding && theEnding.name === "The End?" && theEnding.description.length > 0);

});
