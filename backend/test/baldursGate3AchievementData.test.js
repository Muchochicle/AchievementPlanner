import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/baldurs-gate-3.json - 54 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1086940 (fetched through this app's own services/steamApi.js) -
// 25 of 54 ship a real, official Steam description. The other 29 are
// hidden; their descriptions here are curatorial, cross-checked against
// Game Rant's hidden-achievement guide and a Steam Community 100%
// guide. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field.
const baldursGate3 = getPlannerData("baldurs-gate-3");

test("getPlannerData('baldurs-gate-3') returns real planner data with 54 curated achievements", () => {

    assert.ok(baldursGate3, "expected real planner data for baldurs-gate-3");
    assert.ok(Array.isArray(baldursGate3.achievements));
    assert.strictEqual(baldursGate3.achievements.length, 54);

});

test("every Baldur's Gate 3 achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = baldursGate3.achievements.map(a => a.id);
    const apinames = baldursGate3.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Baldur's Gate 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of baldursGate3.achievements) {

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

test("every one of the 25 officially-described Baldur's Gate 3 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 29 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Descent From Avernus", "Take control of the nautiloid and escape the Hells."],
        ["Roleplayer", "Complete ten background goals in a single playthrough - you are one with your character."],
        ["Bedrolls and Breakfast", "Take four full Long Rests in a single playthrough - adventuring's tiring work."],
        ["Dig for Victory", "Dig up five buried chests in a single playthrough - treasure! "],
        ["No Penny Required", "Successfully use Detect Thoughts to pry into someone's thoughts. "],
        ["Escapologist", "Break out of prison after being arrested - aren't you daring?"],
        ["Outsourcing", "Recruit a hireling. You can befriend them or use them as cannon-fodder - we won't judge."],
        ["Jack-of-all-Trades", "Multiclass into every class in one playthrough without asking Withers to change your character."],
        ["Homebrewer", "Create three unique alchemical solutions in a single playthrough - bottoms up! "],
        ["Kill Two Birds With One Gnome", "Use one enemy as an improvised weapon against another. "],
        ["Busker", "Earn a hundred gold from playing sweet, sweet music in a single playthrough. "],
        ["Action Surge", "Perform five attacks in one turn. Your enemies won't know what hit them (literally)."],
        ["Fists of Fury", "Kill a character with an Unarmed Strike."],
        ["Devil's in the Details ", "Defeat Commander Zhalk on the nautiloid."],
        ["Non-Invasive Procedure", "Kill the Surgeon before he performs surgery on you in combat."],
        ["Penny Pincher", "Defeat the Toll Collector without her using gold against you - excellent budgeting. "],
        ["Fancy Footwork", "Defeat Gortash in Wyrm's Rock without activating any traps."],
        ["Crash Landing", "In the Wyrmway, wait until the dragon is mid-flight, then knock it out of the sky - KAPOW."],
        ["Bottoms Up", "Long Rest using only alcohol - a time-honoured dwarven tradition. "],
        ["Shove Off", "Kill a creature with falling damage."],
        ["Bookworm", "Read 100 different books in a single playthrough. Adventuring isn't just daring quests, you know."],
        ["Punch Drunk", "Defeat twenty opponents while drunk - down them."],
        ["Fetch Quest", "Play fetch with Scratch - the best boy in the Realms."],
        ["Critical Hit", "Complete the game in Tactician mode."],
        ["Foehammer", "Complete the game in Honour mode."]
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "BG3_Quest02",
        "BG3_Quest03",
        "BG3_Quest04",
        "BG3_Quest05",
        "BG3_Quest06",
        "BG3_Quest07",
        "BG3_Quest08",
        "BG3_Quest11",
        "BG3_Quest18",
        "BG3_Quest19",
        "BG3_Quest20",
        "BG3_Quest21",
        "BG3_Quest22",
        "BG3_Quest23",
        "BG3_Quest24",
        "BG3_Quest25",
        "BG3_Quest26",
        "BG3_Quest32",
        "BG3_Quest33",
        "BG3_Quest36",
        "BG3_Quest38",
        "BG3_Quest39",
        "BG3_Quest46",
        "BG3_Quest47",
        "BG3_Quest48",
        "BG3_Quest49",
        "BG3_Quest50",
        "BG3_Quest51",
        "BG3_Quest52"
    ]);

    assert.strictEqual(hiddenApinames.size, 29, "sanity check - Baldur's Gate 3 has 29 hidden achievements");

    const dataPairs = baldursGate3.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 29 hidden Baldur's Gate 3 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["BG3_Quest02", "The Plot Thickens"],
        ["BG3_Quest03", "The City Awaits"],
        ["BG3_Quest04", "All's Well That Ends Well"],
        ["BG3_Quest05", "Absolute Power Corrupts"],
        ["BG3_Quest06", "Hero of the Forgotten Realms"],
        ["BG3_Quest07", "Sins of the Father"],
        ["BG3_Quest08", "Ceremorphosis"],
        ["BG3_Quest11", "Expand Your Mind"],
        ["BG3_Quest18", "You Have Two Hands for a Reason"],
        ["BG3_Quest19", "Rude, Crude, and Full of Attitude"],
        ["BG3_Quest20", "Forged in Blood and Fire"],
        ["BG3_Quest21", "Under Lock and Key"],
        ["BG3_Quest22", "She Cannot Be Caged!"],
        ["BG3_Quest23", "Taking Blood"],
        ["BG3_Quest24", "Leave No One Behind"],
        ["BG3_Quest25", "Murder in Baldur's Gate"],
        ["BG3_Quest26", "Mind Blown"],
        ["BG3_Quest32", "Pest Control"],
        ["BG3_Quest33", "A Grym Fate"],
        ["BG3_Quest36", "No Free Lunches"],
        ["BG3_Quest38", "First Blood"],
        ["BG3_Quest39", "Interfectorem Draconis"],
        ["BG3_Quest46", "Repairing the Weave"],
        ["BG3_Quest47", "The Lich-Queen's Wrath"],
        ["BG3_Quest48", "To Bloom in Darkest Night"],
        ["BG3_Quest49", "Hot Date"],
        ["BG3_Quest50", "Just a Nibble"],
        ["BG3_Quest51", "Loophole"],
        ["BG3_Quest52", "Embrace Your Urge"]
    ];

    assert.strictEqual(names.length, 29, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = baldursGate3.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
