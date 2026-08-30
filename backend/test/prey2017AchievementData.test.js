import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/prey-2017.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 480490 (fetched through this app's own services/steamApi.js). 23 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("prey-2017");

test("getPlannerData('prey-2017') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for prey-2017");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Prey achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Prey achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Prey achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Different Side of Yu", "You scanned your Phantom Shift duplicate with the Psychoscope."],
        ["A Friend in Need", "Find Mikhaila injured in the Power Plant and give her a medkit."],
        ["Abandon Ship", "Flee Talos I aboard Alex's escape pod before completing your mission."],
        ["Adrift", "Answer Dr. Igwe's distress call and save him in time after he is stranded outside the station."],
        ["Apex Predator", "In Mooncrash, defeat a Moon Shark."],
        ["Awkward Ride Home", "Escape Talos I aboard Walther Dahl's shuttle with only Dahl as your companion."],
        ["Ball Lightning", "You used Electrostatic Burst to drop two or more Operators at once."],
        ["Best Served Cold", "Kill Luka to avenge Abby."],
        ["Black Market", "Find all of the smuggler's hidden dead drops on Talos I."],
        ["Brain Trust", "Bring Igwe, January, and Mikhaila together to meet in your office."],
        ["Coffee Break", "Find Dr. Calvino's secret coffee stash."],
        ["Cold Dead Hands", "You fully upgraded a weapon."],
        ["Contract Fulfilled", "In Mooncrash, complete all KASMA Orders."],
        ["Cryptomancer", "In Mooncrash, finish the game with a surplus of 50,000 sim points or more."],
        ["Dead Calm", "You killed an enemy while using Combat Focus."],
        ["Dear Future Self", "Find and listen to all of the messages you left for your future self."],
        ["Deprogramming", "You used Mindjack to free a mind-controlled Human."],
        ["Do No Harm", "You completed the game without killing any Humans."],
        ["Engineer", "You repaired (20) objects on and around Talos I."],
        ["Escape Velocity", "You blasted yourself as an object for at least 20 meters while in normal gravity."],
        ["Facsimile", "Meet the Operator January for the first time."],
        ["Galaxy Brain", "In Mooncrash, install every neuromod power for every character."],
        ["Gift to the World", "Recover Gustav Leitner's connectome for Dr. Igwe."],
        ["I and It", "You killed every Human on and around Talos I."],
        ["I and Thou", "Complete the game with maximum empathy by helping and saving everyone you can rather than ignoring or harming them."],
        ["I’m Your Biggest Fan", "In Mooncrash, you read all of the second Starbender series and still no regrets."],
        ["Intrinsic Value", "Recycle yourself using a Recycler Charge."],
        ["It's Alive!", "You created a Phantom using Phantom Genesis."],
        ["Know Thine Enemy", "You acquired a Typhon power."],
        ["Know Thy Self", "You acquired a Human ability."],
        ["Makeup Exam", "Retake the Neuromod Division's aptitude test and pass all three sections using Kinetic Blast, Mimic Matter, and Remote Manipulation in turn."],
        ["Mimesis", "You mimicked a Mimic."],
        ["Mimic Massacre", "You killed (5) Mimics in 5 seconds."],
        ["Missing Persons", "You located all employees on Talos I."],
        ["No Needles", "You completed the game without ever acquiring any Typhon power or Human ability."],
        ["No One Left Behind", "In Mooncrash, escape the simulation with all five playable characters in a single run."],
        ["No Show", "Die to the helicopter blades on your very first day at TranStar."],
        ["Open Says She", "Use Danielle Sho's voice samples to gain access to Deep Storage."],
        ["Operator", "You hacked at least (20) hackable objects on and around Talos I."],
        ["Press Sneak", "You read all the e-mails on Talos I."],
        ["Prism Master", "Find and read all six books of the Starbender Cycle series."],
        ["Psychometry", "You found and listened to all TranScribe recordings."],
        ["Psychostatic Efficiency", "In Mooncrash, damage 3 enemies with a single Psychostatic Cutter projectile."],
        ["Push the Fat Guy", "Kill Alex Yu."],
        ["Quantum Leap", "In Mooncrash, complete all Story Objectives."],
        ["Reduce, Reuse, Recycle", "You used a single Recycler Charge to recycle at least 20 objects."],
        ["Self-Incriminating", "Discover the truth of what happened to Mikhaila's father and tell her."],
        ["Shapeshifter", "You mimicked (20) or more unique objects."],
        ["Split Affinity", "You completed the game once acquiring only Typhon Powers and again acquiring only Human abilities."],
        ["Squad Goals", "In Mooncrash, unlock all 5 playable characters."],
        ["Suicide by Proxy", "Kill January."],
        ["Tee One Up", "You killed an enemy while they were Lifted."],
        ["The Gates of Hell", "Complete the Shipping and Receiving objective without any human casualties."],
        ["This Never Happened", "Perform an apto-regressive neurotomy on Walther Dahl, erasing his memory."],
        ["Thoughts Can Kill", "You used Psychoshock on a Human."],
        ["Three-Body Problem", "In Mooncrash, GLOO 3 enemies with a single GLOO charge."],
        ["TranStar Gourmand", "You consumed one of every type of food and drink on Talos I."],
        ["You Rang?", "Use the Psychotronics satellite to summon or dismiss the Typhon Nightmare."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
