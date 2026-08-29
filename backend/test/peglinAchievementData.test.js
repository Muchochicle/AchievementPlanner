import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/peglin.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1296610 (fetched through this app's own services/steamApi.js).
// 49 of 52 ship a real, official Steam description, quoted
// verbatim below. The 3 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers/endings kept
// spoiler-light), and secret-boss feats cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("peglin");

test("getPlannerData('peglin') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for peglin");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Peglin achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Peglin achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 officially-described Peglin achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "DEFEAT_ORBSERVER",
        "END_FIRST_ORBSERVER_PHASE_EARLY",
        "APPLY_YOLK_TO_ORBSERVER",
    ]);

    assert.strictEqual(hiddenApinames.size, 3, "sanity check - Peglin has 3 hidden achievements");

    const officialAchievements = [
        ["A Full Sweep", "Battle the Ballista Militia until all its minions have spawned"],
        ["All for One", "Win a run with only your class relic"],
        ["All In All", "Defeat the Demon Wall"],
        ["Art Connoisseur", "Defeat the Pigment of Imagination without destroying any paintings"],
        ["At the End of the Rainbow", "Defeat a Rainbow Slime"],
        ["Ballwark in a China Shop", "Win a battle with 100+ Ballwark remaining"],
        ["Critical Thinking", "Achieve a 5x crit multiplier with the Critsomallos Fleece"],
        ["Cruciball Captain", "Complete Cruciball Level 10"],
        ["Cruciball Commander", "Complete Cruciball Level 15"],
        ["Cruciball Conqueror", "Complete Cruciball Level 20"],
        ["Cruciball Courier", "Complete Cruciball Level 5"],
        ["Don't Make Us Say It", "Deal more than 9000 damage in one shot"],
        ["Eggstravaganza", "Win a run with two eggs in your satchel"],
        ["End Of The Slime", "Defeat the Slime Boss"],
        ["Enthralled", "Win a run after accepting the vampire's deal but skipping the infernal ingot."],
        ["First Come, First Served", "Defeat any boss on the first turn"],
        ["Fragile Delivery", "Bring an Egg to the peglin chef"],
        ["From Whence You Came", "Send a summoned demon squirrel into a black hole"],
        ["Heartburn", "Throw a Rigged Bomb after being eaten by the Slime Boss"],
        ["Holey Moley", "Defeat Avogadro, the Mole Boss"],
        ["I Said Punny, Not Puny", "Deal exactly one damage"],
        ["In a Prickle", "Get three Bramballs stuck in Leshy's vines at the same time"],
        ["Is this a card game?", "Collect your first monster trading card"],
        ["It Was Not Your Time", "Leave an enemy with just one health point"],
        ["Master Burglar", "Defeat Thesaurosus with no coins remaining in the pegboard"],
        ["Masterpieces In Pieces", "Defeat the Pigment of Imagination"],
        ["Math Is My Passion", "Deal the exact damage needed to defeat an enemy"],
        ["Minion to Winion", "Deal 1000 damage to the Super Sapper in one battle by detonating adjacent Sappers"],
        ["Multiballer", "\nUsing the Matryorbshka, have 16 multiballs on screen at once"],
        ["New Leshy on Life", "Defeat Betsy the Leshy"],
        ["Not a Dull Wall at All", "Convert or Destroy 3 dull pegs while fighting the Demon Wall"],
        ["One for All", "Win a run with only level 1 orbs"],
        ["Poison IV", "Inflict 40+ Spinfection onto a single enemy"],
        ["Red Slime Green Slime", "Keep an enemy Tangled for 6 turns"],
        ["Sapper Sweeper", "Defeat the Super Sapper"],
        ["Scholorb", "Completely fill one entry in the Encirclepedia's Bestiary"],
        ["Siege No More", "Defeat the Ballista Militia"],
        ["Slime After Slime", "Have an orb bounce between slimed pegs 7 times without touching anything else"],
        ["Some Assembly Required", "Fully assemble the Assemball"],
        ["Spring Cleaning", "Fully clear a pegboard"],
        ["Sticks And Stones", "Die during an event scenario"],
        ["Surprised the Ruins", "Defeat all 4 Qaballistic Ruins in the same turn"],
        ["Taste the Painbow", "Defeat the Painbow (slime)"],
        ["The Treasurer Doesn't Measure Up", "Vanquish Thesaurosus the Avaricious Dragon"],
        ["Walking On Pegshells", "Hit 1000 pegs or more in one shot"],
        ["Where's my membership card?!", "Buy every item and relic, and remove an orb at Haglin's Shop at Cruciball Level 10 or higher"],
        ["Won't Get Ruined Again", "Defeat the Qaballistic Ruins"],
        ["Wood you kindly?", "Defeat Avogadro's Tree before entering the Castle"],
        ["You did it?", "Die while defeating the Mines' boss"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Peglin achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["DEFEAT_ORBSERVER", "All Eye On You"],
        ["END_FIRST_ORBSERVER_PHASE_EARLY", "Phase Breaker"],
        ["APPLY_YOLK_TO_ORBSERVER", "Egg On Your Face"],
    ];

    assert.strictEqual(names.length, 3, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
