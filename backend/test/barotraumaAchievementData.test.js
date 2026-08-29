import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/barotrauma.json - 76 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 602960 (fetched through this app's own services/steamApi.js).
// 73 of 76 ship a real, official Steam description, quoted
// verbatim below. The 3 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("barotrauma");

test("getPlannerData('barotrauma') returns real planner data with 76 curated achievements", () => {

    assert.ok(game, "expected real planner data for barotrauma");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 76);

});

test("every Barotrauma achievement has a unique id from 1 to 76 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 76 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 76);
    assert.strictEqual(new Set(apinames).size, 76);

});

test("every Barotrauma achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 officially-described Barotrauma achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "genocide",
        "killmantis",
        "whatsmirksbelow",
    ]);

    assert.strictEqual(hiddenApinames.size, 3, "sanity check - Barotrauma has 3 hidden achievements");

    const officialAchievements = [
        ["A Gaze into the Abyss", "Take the submarine down to crush depth and survive."],
        ["A Light in the Darkness", "Restore a run-down beacon station."],
        ["According to Ability and Judgment", "Complete a round as a Medical Doctor."],
        ["Aggressive Archaeology", "Complete a \"clear alien ruin\" mission."],
        ["Amateur Geologist", "Complete a mining mission."],
        ["Ancient Novelty", "Destroy an alien terminal using alien curio."],
        ["As Good As New", "Repair a broken device."],
        ["Ascension", "Become a perfect example of symbiotic harmony."],
        ["Bounty Hunter", "Complete an \"assassinate bandit leader\" mission."],
        ["Do What You Love", "Complete a round as an Assistant."],
        ["Don't Count Them Before They Hatch", "Complete a \"destroy monster nest\" mission."],
        ["Don't You Die on Me!", "Heal someone back from a critical state by performing CPR."],
        ["Europa's Finest", "Complete a campaign on permadeath or ironman mode in multiplayer."],
        ["Ever Increasing in Speed and Power", "Complete a round as an Electrical Engineer."],
        ["Experienced Seafarer", "Travel over 100 kilometers."],
        ["Extravehicular Activity", "Venture 500 meters away from the sub."],
        ["Fight the Power", "Defeat a Coalition submarine in a PvE submarine-vs-submarine mission."],
        ["For the Coalition", "Defeat the Separatists in a PvP submarine-vs-submarine mission."],
        ["Force for the Forceless", "Bolster your crew by hiring a steadfast Separatist leader."],
        ["Freighter", "Complete a cargo mission."],
        ["Get Out Alive", "Get through the entirety of the Cold Caverns without losing your character in permadeath mode"],
        ["Getting Clean", "Recover from an opiate addiction."],
        ["Gotta Go Fast", "Accelerate a submarine to over 50 km/h."],
        ["Heralds of the Tide", "Allow an enigmatic religious leader to assist your crew."],
        ["Here I Recognize No Superiors", "Complete a round as a Captain."],
        ["I Am Become Death", "Kill something with nuclear explosives."],
        ["I Am the Cure", "Cure a husk infection."],
        ["I am the Law", "Complete a round as a Security Officer."],
        ["Insurgency", "Successfully complete a traitor objective."],
        ["Kill It Before It Lays Eggs!", "Kill a crawler Broodmother."],
        ["Killed a Moloch", "Take down a Moloch."],
        ["King of the Hull", "Win a PvP King of the Hull mission"],
        ["Knight in Rusty Armor", "Complete a \"rescue hostages\" mission."],
        ["Last Man Standing", "Complete a round alone after everyone else in the crew has perished."],
        ["Naval Architect", "Spend 24 hours in the submarine editor in total."],
        ["No Fun Allowed", "Kill a clown."],
        ["Not On My Watch", "Take down a traitor before they manage to complete their objective."],
        ["Novice Seafarer", "Travel over 10 kilometers."],
        ["Nuclear Blast Survivor", "Complete a round after a nuclear meltdown."],
        ["Pest Control", "Complete a \"destroy monster-infested outpost\" mission."],
        ["Poisoner", "Kill something with morbusine."],
        ["Praise the Honkmother", "Obtain a full clown costume."],
        ["Resistance is Futile", "Defeat a Separatist submarine in a PvE submarine-vs-submarine mission."],
        ["Ruin Raider", "Complete a \"scan alien ruin\" mission."],
        ["Safety Not Guaranteed", "Complete an escort mission."],
        ["Smooth Sailing", "Complete a round without any casualties or damage to the submarine."],
        ["Some Men Just Want to Watch the World Burn", "Enlist the services of an elusive explosives expert."],
        ["Spinal Tapped", "Kill a giant spineling."],
        ["Stop the Hammertime", "Kill a Hammerhead."],
        ["The Abyss Beckons", "Lose a character permanently."],
        ["The Abyss Gazes Back", "Kill a Charybdis."],
        ["The Aphotic Plateau", "Discover the Aphotic Plateau"],
        ["The Bigger They Are, the Harder They Fall", "Kill an Endworm."],
        ["The Cold Caverns", "Discover the Cold Caverns."],
        ["The Cream of the Crop", "Employ the skills of a celebrity chef to your crew."],
        ["The End is the Beginning", "Finish the campaign."],
        ["The Europan Ridge", "Discover the Europan Ridge."],
        ["The Grandest of Jesters", "Learn to laugh at the Grand Joke of the Universe."],
        ["The Great Sea", "Discover the Great Sea."],
        ["The Hydrothermal Wastes", "Discover the Hydrothermal Wastes."],
        ["The King of Cling", "Kill a latcher."],
        ["The Lone Sailor", "Complete a round alone from start to finish."],
        ["The Teacher of Nothing", "Accept the offer of a senior humorist to join your crew."],
        ["This is Fine.", "Face a complete and utter disaster."],
        ["Top Brass", "Reinforce your crew with an eminent Coalition leader."],
        ["Truth in Simplicity", "Complete a round as a Mechanic."],
        ["Underwater Coffin", "Complete a wreck salvage mission."],
        ["Unwanted Guests", "Complete a \"destroy bandit outpost\" mission."],
        ["Viva la Revolution", "Defeat the Coalition crew in a PvP submarine-vs-submarine mission."],
        ["Whatever Works", "Kill something with a plasma cutter, welding tool or a wrench."],
        ["Where No Man Has Gone Before", "Descend below 5000 meters."],
        ["Xenoarchaeologist", "Complete an artifact mission."],
        ["Xenocide", "Kill 100 creatures."],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Barotrauma achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["genocide", "Genocide"],
        ["killmantis", "Hide And Seek"],
        ["whatsmirksbelow", "What Smirks Below"],
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
