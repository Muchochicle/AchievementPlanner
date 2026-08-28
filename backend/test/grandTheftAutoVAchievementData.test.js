import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grand-theft-auto-v.json - 77 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 271590 (fetched through this app's own services/steamApi.js) -
// 57 of 77 ship a real, official Steam description. The 20 hidden
// achievements are eleven story-mission markers plus GTA Online heist
// and Doomsday Heist completions; their descriptions here are
// curatorial, cross-checked against GamePressure, the GTA wiki, and
// Twinfinite. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field.
const grandTheftAutoV = getPlannerData("grand-theft-auto-v");

test("getPlannerData('grand-theft-auto-v') returns real planner data with 77 curated achievements", () => {

    assert.ok(grandTheftAutoV, "expected real planner data for grand-theft-auto-v");
    assert.ok(Array.isArray(grandTheftAutoV.achievements));
    assert.strictEqual(grandTheftAutoV.achievements.length, 77);

});

test("every Grand Theft Auto V achievement has a unique id from 1 to 77 and a unique apiname", () => {

    const ids = grandTheftAutoV.achievements.map(a => a.id);
    const apinames = grandTheftAutoV.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 77 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 77);
    assert.strictEqual(new Set(apinames).size, 77);

});

test("every Grand Theft Auto V achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of grandTheftAutoV.achievements) {

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

test("every one of the 57 officially-described Grand Theft Auto V achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 20 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Solid Gold, Baby!", "Earn 70 Gold Medals on Missions and Strangers and Freaks."],
        ["Career Criminal", "Attain 100% Game Completion."],
        ["San Andreas Sightseer", "Explore all of Los Santos and Blaine County."],
        ["All's Fare in Love and War", "Purchase Downtown Cab Co. and complete a private fare."],
        ["TP Industries Arms Race", "Purchase McKenzie Field Hangar and win the arms race."],
        ["Multi-Disciplined", "Attain a gold medal in all applicable hobbies and pastimes."],
        ["From Beyond the Stars", "Collect and return all spaceship parts."],
        ["A Mystery, Solved", "Solve the mystery of Leonora Johnson."],
        ["Waste Management ", "Purchase the old dock and collect all nuclear waste."],
        ["Red Mist", "Complete all Rampages."],
        ["Show Off", "Complete all Stunt Jumps. "],
        ["Kifflom!", "You completed the Epsilon program and achieved inner peace."],
        ["Three Man Army", "Survive 3 minutes on at least a 3 star Wanted Level with all three characters together off mission."],
        ["Out of Your Depth", "You're gonna need a bigger boat..."],
        ["Altruist Acolyte", "Deliver an unsuspecting victim to the Altruist Cult."],
        ["A Lot of Cheddar", "Spend a total of $200 million across all three characters."],
        ["Trading Pure Alpha", "Make a profit over your total investments in the stock market."],
        ["Pimp My Sidearm", "Fully mod a weapon."],
        ["Wanted: Alive Or Alive", "Deliver a bail bond target alive."],
        ["Los Santos Customs", "Fully mod a vehicle."],
        ["Close Shave", "Complete all Under the Bridge and Knife Flight challenges."],
        ["Off the Plane", "GTA Online: Complete the Introduction."],
        ["Three-Bit Gangster", "GTA Online: Reach Rank 25."],
        ["Making Moves", "GTA Online: Reach Rank 50."],
        ["Above the Law", "GTA Online: Reach Rank 100."],
        ["Numero Uno", "GTA Online: Obtain first place in all competitive game types."],
        ["The Midnight Club", "GTA Online: Use custom vehicles to win 5 Races."],
        ["Unnatural Selection", "GTA Online: Complete all 10 waves of a Survival."],
        ["Backseat Driver", "GTA Online: Direct a driver to 1st place as co-driver in Rally Mode."],
        ["Run Like The Wind", "GTA Online: Survive for a day with a Bounty on your head."],
        ["Clean Sweep", "GTA Online: Finish a Gang Attack without dying and kill at least 10 enemies."],
        ["Decorated", "GTA Online: Earn 30 Platinum Awards."],
        ["Stick Up Kid", "GTA Online: Hold up all 20 Stores."],
        ["Enjoy Your Stay", "GTA Online: Participate in everything Los Santos has to offer."],
        ["Crew Cut", "GTA Online: Complete a Job as a member of a Crew."],
        ["Full Refund", "GTA Online: Kill the thief that mugged you."],
        ["Dialling Digits", "GTA Online: Call for a Backup Helicopter for the first time."],
        ["American Dream", "GTA Online: Own an Apartment, Garage and an Insured Vehicle."],
        ["A New Perspective", "Play GTA V for 15 hours in first person mode."],
        ["Shot Caller", "GTA Online: Invest your hard earned cash to set up a Heist."],
        ["Four Way", "GTA Online: As Heist Leader set the Finale cut as 25% across all players."],
        ["Live a Little", "GTA Online: Spend a total of $8,000,000 purchasing vehicles included as part of The Heists Update."],
        ["Can't Touch This", "GTA Online: Complete a Heist Finale without taking any damage."],
        ["Mastermind", "GTA Online: Earn 25 platinum medals across Heist Setups and Finales."],
        ["Vinewood Visionary", "Create and export a video using the Rockstar Editor or enter Director Mode 5 times."],
        ["Majestic", "Create and export 10 videos using the Rockstar Editor or enter Director Mode 10 times."],
        ["Humans of Los Santos", "Unlock all Special Characters and entered Director Mode as an actor from this category."],
        ["First Time Director", "Enter Director Mode for the first time as an unlocked actor."],
        ["Animal Lover", "Enter Director Mode as an unlocked animal actor for the first time."],
        ["Ensemble Piece", "Unlock all Story Characters and enter Director Mode as an actor from this category."],
        ["Cult Movie", "Enter Director Mode as Cris Formage."],
        ["Location Scout", "Visit all Locations in Director Mode."],
        ["Method Actor", "Enter Director Mode using any of your own GTA Online characters."],
        ["Getting Started", "GTA Online: You set up the Doomsday Heist."],
        ["Orbital Obliteration", "GTA Online: You killed another player with the Orbital Cannon."],
        ["Elitist", "GTA Online: You completed all 3 Elite Challenges in The Doomsday Heist."],
        ["Masterminds", "GTA Online: You completed all 3 Criminal Mastermind Challenges in The Doomsday Heist."]
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH00",
        "ACH01",
        "ACH02",
        "ACH03",
        "ACH04",
        "ACH05",
        "ACH06",
        "ACH42",
        "ACH07",
        "ACH08",
        "ACH09",
        "ACHH1",
        "ACHH2",
        "ACHH3",
        "ACHH4",
        "ACHR10",
        "ACHGO2",
        "ACHGO3",
        "ACHGO4",
        "ACHGO5"
    ]);

    assert.strictEqual(hiddenApinames.size, 20, "sanity check - Grand Theft Auto V has 20 hidden achievements");

    const dataPairs = grandTheftAutoV.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 20 hidden Grand Theft Auto V achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH00", "Welcome to Los Santos"],
        ["ACH01", "A Friendship Resurrected"],
        ["ACH02", "A Fair Day's Pay"],
        ["ACH03", "The Moment of Truth"],
        ["ACH04", "To Live or Die in Los Santos"],
        ["ACH05", "Diamond Hard"],
        ["ACH06", "Subversive"],
        ["ACH42", "Blitzed"],
        ["ACH07", "Small Town, Big Job"],
        ["ACH08", "The Government Gimps"],
        ["ACH09", "The Big One!"],
        ["ACHH1", "Be Prepared"],
        ["ACHH2", "In the Name of Science"],
        ["ACHH3", "Dead Presidents"],
        ["ACHH4", "Parole Day"],
        ["ACHR10", "Cryptozoologist"],
        ["ACHGO2", "The Data Breaches"],
        ["ACHGO3", "The Bogdan Problem"],
        ["ACHGO4", "The Doomsday Scenario"],
        ["ACHGO5", "A World Worth Saving"]
    ];

    assert.strictEqual(names.length, 20, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = grandTheftAutoV.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
