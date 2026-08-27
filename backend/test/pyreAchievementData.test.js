import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pyre.json - 51 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 462770
// (fetched through this app's own services/steamApi.js) - 38 of 51 ship
// a real, official Steam description. The six "deal 200 Pyre Damage"
// achievements for Mae, Ti'zo, Gilman, Pamitha, Bertrude, and Volfred
// are hidden achievements Steam never describes publicly (confirmed via
// the same API call), but follow the exact same template as the 6
// already-public damage achievements for Rukey, Hedwyn, and Jodariel,
// just naming a different exile. New Alliance, Sky Explorer, Scourge of
// the Skies, and the four faction-themed Versus Mode achievements are
// also hidden - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions (cross-checked
// against independent achievement-guide sites). difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const pyre = getPlannerData("pyre");

test("getPlannerData('pyre') returns real planner data with 51 curated achievements", () => {

    assert.ok(pyre, "expected real planner data for pyre");
    assert.ok(Array.isArray(pyre.achievements));
    assert.strictEqual(pyre.achievements.length, 51);

});

test("every Pyre achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = pyre.achievements.map(a => a.id);
    const apinames = pyre.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Pyre achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of pyre.achievements) {

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

test("every one of the 38 officially-described Pyre achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 13 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["The Reader", "Begin your quest for freedom (Campaign)"],
        ["The Fast Talker", "Using Rukey, deal 200 Pyre Damage (Campaign)"],
        ["The Free Spirit", "Using Hedwyn, deal 200 Pyre Damage (Campaign)"],
        ["The Fallen Soldier", "Using Jodariel, deal 200 Pyre Damage (Campaign)"],
        ["Gather the Band", "Find an exile for each of the different masks (Campaign)"],
        ["Home Free", "Prevail in a Liberation Rite  (Campaign)"],
        ["Mercy Shown", "Suffer defeat in a Liberation Rite  (Campaign)"],
        ["Master of the Rites", "Achieve Rank 5 with any exile (Campaign)"],
        ["Cover to Cover", "Unlock every chapter in the Book of Rites (Campaign)"],
        ["Book Worm", "Check 50 different pages in the Book of Rites (Campaign)"],
        ["Found Your Calling", "Do Vocations 10 times (Campaign)"],
        ["Start Duster", "Upgrade a Talisman to Rank 20 (Campaign)"],
        ["Crowd Pleaser", "Complete three Feats of Glory (Campaign)"],
        ["Scribes' Chosen", "Prevail in a Rite with three or more Titan Stars active (Campaign, standard difficulty or greater)"],
        ["Scribes' Guardian", "Prevail in a Rite with six or more Titan Stars active (Campaign, standard difficulty or greater)"],
        ["Scribes' Champion", "Prevail in a Rite with 12 Titan Stars active (Campaign, standard difficulty or greater)"],
        ["Sandra's Disciple", "Complete two Scribe Trials in the Beyonder Crystal (Campaign)"],
        ["Sandra's Favorite", "Complete five Scribe Trials in the Beyonder Crystal (Campaign)"],
        ["Mystic Training", "Complete a Practice Rite in the Beyonder Crystal (Campaign)"],
        ["There For Them", "Initiate 20 different conversations in the blackwagon (Campaign)"],
        ["True Freedom", "Complete your quest for freedom (Campaign)"],
        ["Big Spender", "Spend 1,000 Sol in the Slugmarket (Campaign)"],
        ["Returned to Glory", "Liberate any three exiles from your party (Campaign)"],
        ["First Ceremony", "Complete a Rite against another mortal (Versus Mode)"],
        ["The Will of the Scribes", "Complete a Rite against a CPU opponent (Versus Mode)"],
        ["Lick of Flame", "Prevail in a Rite against a CPU opponent while you have less than 10 Pyre Health (Versus Mode with default Masteries, Talismans, Pyre Health)"],
        ["First Whiff", "Use Scribe Snuff to reset an exile's Masteries (Campaign)"],
        ["The White Lute", "Use the White Lute to play a tune (Campaign)"],
        ["Downside Pilgrim", "Prevail in a Rite at each of the Celestial Landmarks (Campaign)"],
        ["Favored to Prevail", "Prevail in a Rite against each of the other triumvirates (Campaign)"],
        ["Untouched Flame", "Prevail in a Rite without your Pyre taking damage (Campaign)"],
        ["Enlightened", "Prevail in a Rite against a Master-level CPU opponent (Versus Mode, default Talismans and Masteries)"],
        ["Banished One and All", "During a Rite, banish three adversaries with a single Aura Cast (Campaign)"],
        ["Flame Quencher", "Prevail in a Rite in no more than three dousings (Campaign)"],
        ["Fear Not the Flame", "During a Rite, douse the adversary's Pyre by 40 health or more (Campaign)"],
        ["Star Struck", "During a Rite, fling the Orb at an adversary, then banish them within two sec. (Campaign)"],
        ["Master Conductor", "Prevail against a Master CPU opponent with six or more Titan Stars active (Versus Mode with default Masteries, Talismans, Pyre Health)"],
        ["True Nightwing", "Complete your quest for freedom (Campaign, True Nightwing difficulty)"]
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "The Faithful Drifter", "The Little Watcher", "The Honor Seeker", "The Guilty Sister", "The Serpent Queen", "The Plan Maker",
        "New Alliance", "Sky Explorer", "Scourge of the Skies",
        "Home-field Heroes", "Classic Nightwings", "Sons of Jomuer", "Dames of the Downside"
    ]);

    const dataPairs = pyre.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 13 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden = [
        ["AchMaeDamage", "The Faithful Drifter"],
        ["AchTizoDamage", "The Little Watcher"],
        ["AchGilmanDamage", "The Honor Seeker"],
        ["AchPamithaDamage", "The Guilty Sister"],
        ["AchBertrudeDamage", "The Serpent Queen"],
        ["AchVolfredDamage", "The Plan Maker"],
        ["AchJodiPamithaWin", "New Alliance"],
        ["AchPointsOfInterest10", "Sky Explorer"],
        ["AchRivalCaravans5", "Scourge of the Skies"],
        ["AchVersusImps", "Home-field Heroes"],
        ["AchVersusTrueNW", "Classic Nightwings"],
        ["AchVersusCurs", "Sons of Jomuer"],
        ["AchVersusWitches", "Dames of the Downside"]
    ];

    for (const [apiname, name] of hidden) {

        const achievement = pyre.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `${apiname} (${name}) should have a real curatorial description`);

    }

});
