import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crypt-of-the-necrodancer.json - 61 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 247080 (fetched through this app's own
// services/steamApi.js) - all 61 ship a real, official Steam
// description. Roughly two thirds are gated behind the paid AMPLIFIED
// and SYNCHRONY DLC and say so verbatim in their own descriptions;
// they are all genuine Steam achievement text, quoted as-is. Crypt of
// the NecroDancer has no Steam-hidden achievements at all.
// difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const cryptOfTheNecrodancer = getPlannerData("crypt-of-the-necrodancer");

test("getPlannerData('crypt-of-the-necrodancer') returns real planner data with 61 curated achievements", () => {

    assert.ok(cryptOfTheNecrodancer, "expected real planner data for crypt-of-the-necrodancer");
    assert.ok(Array.isArray(cryptOfTheNecrodancer.achievements));
    assert.strictEqual(cryptOfTheNecrodancer.achievements.length, 61);

});

test("every Crypt of the NecroDancer achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = cryptOfTheNecrodancer.achievements.map(a => a.id);
    const apinames = cryptOfTheNecrodancer.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Crypt of the NecroDancer achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of cryptOfTheNecrodancer.achievements) {

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

test("every one of the 61 official Crypt of the NecroDancer achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Bat Trick", "Kill three green bats"],
        ["Merchanticide", "Kill the shopkeeper"],
        ["Heartthrob", "Have 10 heart containers at the same time"],
        ["I love gooooooold!", "Have 6000 coins in a single run"],
        ["In The Zone", "Complete zone 1 with solo Cadence!"],
        ["In The Zone (2)", "Complete zone 2 with solo Cadence!"],
        ["In The Zone (3)", "Complete zone 3 with solo Cadence!"],
        ["So Hardcore!", "Complete \"All Zones Mode\" with solo Cadence"],
        ["You Don't Miss a Beat, Do You?", "Complete \"All Zones Mode\" with solo Aria"],
        ["A Beatless Beatdown", "Complete \"All Zones Mode\" with solo Bard"],
        ["Tachycardia", "Complete \"All Zones Mode\" with solo Bolt"],
        ["Two Can Tango!", "Complete \"All Zones Mode\" while playing Co-op"],
        ["Vow down!", "Complete \"All Zones Mode\" with solo Monk"],
        ["Carpe Diem", "Complete a Daily Challenge"],
        ["Speed Demon", "Complete \"All Zones Mode\" with solo Cadence in under 15 minutes"],
        ["Flawless Victory!", "Aria Low%. Complete \"All Zones Mode\" with solo Aria without picking up any items or using any shrines. (Picking up gold is permitted.)"],
        ["Peace Out", "Complete \"All Zones Mode\" with solo Dove"],
        ["Bombs Away!", "Complete \"All Zones Mode\" with solo Eli"],
        ["Lute that Loot", "Complete \"All Zones Mode\" with solo Melody"],
        ["Leaps and Bounds", "Complete \"All Zones Mode\" with solo Dorian"],
        ["Impossible, Right?", "Complete \"All Zones Mode\" with solo Coda"],
        ["Mostly Harmless", "Get killed by a green slime"],
        ["8Ball", "Kill 8 enemies with a single bomb"],
        ["Friendly Fire", "Use a red dragon's fireball to kill another miniboss"],
        ["Undeadly", "Get 10 wins in a row in Cadence \"Deathless Mode\""],
        ["Polyamorous", "Complete an \"All Chars\" run"],
        ["Lowest of the Low", "\"All Chars\" low%. Complete an \"All Chars\" run without picking up any items or using any shrines. (Picking up gold is permitted.)"],
        ["In The Zone (4)", "Complete zone 4 with solo Cadence!"],
        ["Bat to the Bone", "Complete \"All Zones Mode\" with solo Nocturna (AMPLIFIED DLC required)"],
        ["In The Zone (5)", "Complete zone 5! (AMPLIFIED DLC required)"],
        ["No I Won't Back Down", "Complete \"No Return Mode\" with solo Cadence (AMPLIFIED DLC required)"],
        ["Hard Act to Follow", "Complete \"Hard Mode\" with solo Nocturna (AMPLIFIED DLC required)"],
        ["A Haunting Performance", "Complete \"Phasing Mode\" with any character (AMPLIFIED DLC required)"],
        ["Mix Master", "Complete \"Randomizer Mode\" with any character (AMPLIFIED DLC required)"],
        ["What Just Happened?", "Complete \"Mystery Mode\" with any character (AMPLIFIED DLC required)"],
        ["Mode Master", "Complete \"Story Mode\", \"Hard Mode\", \"Phasing Mode\", \"No Return Mode\", \"Randomizer Mode\", and \"Mystery Mode\" with any character (AMPLIFIED DLC required)"],
        ["A Cut Above", "Complete \"All Zones Mode\" with solo Diamond (AMPLIFIED DLC required)"],
        ["I Love Ewe", "Complete \"All Zones Mode\" with solo Mary (AMPLIFIED DLC required)"],
        ["Keeps on Ticking", "Complete \"All Zones Mode\" with solo Tempo (AMPLIFIED DLC required)"],
        ["Storybook Ending", "Complete \"Story Mode\" (AMPLIFIED DLC required)"],
        ["Like a Bat Out of Hell", "Complete \"All Zones Mode\" with solo Nocturna in under 15 minutes (AMPLIFIED DLC required)"],
        ["Golden Loot", "Have 8000 coins in a single run with solo Nocturna (AMPLIFIED DLC required)"],
        ["ElecTrick", "Kill 8 enemies at once with electricity (AMPLIFIED DLC required)"],
        ["Very Polyamorous", "Complete an \"All chars (including DLC)\" run (AMPLIFIED DLC required)"],
        ["Klari Clear", "Complete \"All Zones Mode\" with solo Klarinetta (SYNCHRONY DLC required)"],
        ["Enchantée, Chaunter", "Complete \"All Zones Mode\" with solo Chaunter (SYNCHRONY DLC required)"],
        ["Suzuper", "Complete \"All Zones Mode\" with solo Suzu (SYNCHRONY DLC required)"],
        ["Smitemaster", "Kill 4 enemies in one swing as Klarinetta (SYNCHRONY DLC required)"],
        ["Doppelgänger", "Kill a miniboss while possessing one of the same kind as Chaunter (SYNCHRONY DLC required)"],
        ["Pandaemonium", "Complete \"All Zones Mode\" in under 10 minutes with solo Suzu (12 minutes when playing with AMPLIFIED content) (SYNCHRONY DLC required)"],
        ["Étude", "Complete \"No-Beat Mode\" as Aria (SYNCHRONY DLC required)"],
        ["En Passant", "Get captured by a Pawn while trying to leap past its attack (SYNCHRONY DLC required)"],
        ["Virtuosoul", "Complete \"All Zones Mode\" with solo Reaper (SYNCHRONY DLC required)"],
        ["Tachyarrhythmia", "Complete Zone 1 in \"Double Tempo Mode\" with solo Bolt (SYNCHRONY DLC required)"],
        ["Fully Loaded", "Equip an item in every possible slot (SYNCHRONY DLC required)"],
        ["Family Trip", "Complete \"All Zones Mode\" as Cadence, Melody, Aria and Dorian in co-op mode (SYNCHRONY DLC required)"],
        ["Fool's Mate", "Checkmate Deep Blues without harming another piece (SYNCHRONY DLC required)"],
        ["Destructive Interference", "Kill Dead Ringer with his own attack (SYNCHRONY DLC required)"],
        ["Ghost in the Pot", "Take control of Teh Urn (SYNCHRONY DLC required)"],
        ["Sunk Cost", "Sell your belongings to the Pawnbroker (SYNCHRONY DLC required)"],
        ["Polyphonic", "Complete an \"Ensemble Mode\" run (solo or co-op) (SYNCHRONY DLC required)"]
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = cryptOfTheNecrodancer.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
