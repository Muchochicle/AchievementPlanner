import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/galactic-civilizations-3.json - 102 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 226860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("galactic-civilizations-3");

test("getPlannerData('galactic-civilizations-3') returns real planner data with 102 curated achievements", () => {

    assert.ok(game, "expected real planner data for galactic-civilizations-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 102);

});

test("every Galactic Civilizations III achievement has a unique id from 1 to 102 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 102 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 102);
    assert.strictEqual(new Set(apinames).size, 102);

});

test("every Galactic Civilizations III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 102 Galactic Civilizations III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Help From My Frenemies", "Complete the Mercenaries campaign"],
        ["A Universe Without Enemies", "Win by Diplomacy"],
        ["Aliens?!?!", "Meet your first Race in Galactic Civilizations III"],
        ["All Your Base", "Destroy an Enemy Faction"],
        ["Another Dimension Ruled", "Win as the Thalan"],
        ["Astral Agent", "Sell at least 30 resources at once"],
        ["Backup Plan", "Complete the Crusade Tutorial."],
        ["Beyond This Universe", "Ascension victory"],
        ["Boldly Go", "Use a Worm Hole"],
        ["Built From Nothing", "Win as a Custom Faction"],
        ["Conquerer", "Win by Conquest"],
        ["Cool Head(s)", "Assign a Crisis manager"],
        ["Crisis: Apophis", "Complete \"Apophis\" Crisis"],
        ["Crisis: Brain Parasites", "Complete \"Brain Parasites\" Crisis"],
        ["Crisis: Brain Trust", "Complete \"Brain Trust\" Crisis"],
        ["Crisis: Rogue General", "Complete \"Rogue General\" Crisis"],
        ["Crisis: Secession", "Complete \"Secession\" Crisis"],
        ["Crisis: Space Monster", "Complete \"Space Monster\" Crisis"],
        ["Crisis: The Revolution", "Complete \"The Revolution\" Crisis"],
        ["Crisis: The Simulation", "Complete \"The Simulation\" Crisis"],
        ["Crush the Resistance", "Conquer a planet defended by enemy Legions."],
        ["Crusher of Souls", "Win in Multiplayer"],
        ["Danger Zone", "Survey an anomaly in a dust cloud or nebula"],
        ["Drengin Supremacy", "Win as the Drengin"],
        ["Eco-Unfriendly", "Use Core Detonation invasion 10 times in one game"],
        ["Enlightenment Attained", "Win as the Altarian"],
        ["Exterminate", "Destroy the Iconian faction, as the Yor"],
        ["Feeling Powerful, eh?", "Use an Artifact Power"],
        ["Flying in Style", "Create your first ship design"],
        ["For Arcea", "Start the campaign"],
        ["Friends, for now...", "Ally with first other major faction"],
        ["From Earth to Distant Stars", "Win as the Terran"],
        ["From the Shadows", "Win as the Iconian"],
        ["Fulfilling the Prophecy", "Complete the Altarian Prophecy Campaign"],
        ["Glorious Paperwork", "Win as Measured"],
        ["Gloriously Gelatinous", "Win Game playing the Slyne."],
        ["Greedy", "Collect 15 Anomalies in a game"],
        ["Honorary Stardockian", "Play for 1000 Hours"],
        ["Human Resources", "Promote your first Specialist."],
        ["Hyper Hyper Hyper", "Build a hypergate"],
        ["Hyperdiculous Speed", "Build a hyperlane"],
        ["I Assume You Were Talking Back", "Declare war before you have Universal Translator"],
        ["Imperial March", "Win as Scryve"],
        ["Join the Resistance", "Win Game playing the Terran Resistance."],
        ["King Maker", "Unleash a custom Civilization on the Galaxy."],
        ["Market Leader", "Win as the Iridium"],
        ["Master Merchant", "Buy at least 30 resources at once"],
        ["Means To An End", "Unlock all the Malevolent ideology traits"],
        ["Merchant Empire", "Have 12 or more Trade Routes"],
        ["Micro-Manager", "Change your tax slider for one turn"],
        ["New Recruit", "Play for 5 hours across all games"],
        ["No Limits", "Build 20 hyperlanes in a single game"],
        ["No More Secrets", "Technology Victory"],
        ["One more dimension conquered ...", "Win as Xraki"],
        ["Our New Home", "Colonize your first planet"],
        ["Out of the Deep and to the Stars", "Win as Torians"],
        ["Overminds meet your Overlords", "Win as Free Trandals"],
        ["Pirate Scum!", "Destroy more than 7 Pirate bases"],
        ["Planetary Patron", "Buy at least 10 resources at once"],
        ["Power Hungry", "Use 20 Artifact Powers in a single game"],
        ["Precursor Legacy", "Control all Relics on the map"],
        ["Recruiter", "Train your first Citizen."],
        ["Regime Change", "Change your government type"],
        ["Results Outweigh Ideals", "Unlock all the Pragmatic ideology traits"],
        ["Revenge", "Recapture your homeworld"],
        ["Revenge is Ours", "Win as Snathi"],
        ["Rock Eater", "Win Game playing the Onyx Hive."],
        ["Served for dinner", "Win as Phamysht"],
        ["Shadow Masters", "Win as Korath"],
        ["Ships to Scrap", "Destroy more than 15 enemy ships in a battle"],
        ["Small-Time Seller", "Sell at least one resource on the marketplace"],
        ["So Sweaty to Beat You", "Win as the Tywom"],
        ["Space Dragons!", "Win as Drath"],
        ["Space Emperor", "Play for 100 hours across all games"],
        ["Spy Master", "Place a spy on a foreign colony."],
        ["Squik!", "Win as the Mu'Kay"],
        ["Stellar Seller", "Sell at least 10 resources at once"],
        ["Sticks and Stones", "Win the Retribution campaign"],
        ["Tax the wealthy (and everyone else)", "Raise your taxes to 100% for one turn"],
        ["Thanks be to Jeff", "Win as Mowlings"],
        ["The Return of the True Face of Fear", "Complete the Snathi Campaign"],
        ["There is a crusade coming", "Win the campaign"],
        ["There Is Only The Way", "Win as the Krynn"],
        ["They Grow Up So Fast", "Create a commonwealth"],
        ["They Really Love You", "Win an Election"],
        ["They Really REALLY Love You", "Win an Election with a landslide majority"],
        ["They Want To Be Us", "Win by Cultural Influence"],
        ["Together We Stand", "Form a government"],
        ["Trial by Fire", "Successfully complete a Crisis"],
        ["Trickle-Down Economics", "Lower your taxes to 0% for one turn"],
        ["Troublemaker", "Be at war with 5 different factions at the same time"],
        ["Trying to Prove Something", "Win on an Insane sized map"],
        ["Two-Bit Buyer", "Buy at least one resource on the marketplace"],
        ["Under Pressure", "Win a game in under 200 turns"],
        ["Vengence", "As the Iconians, take back Iconia (Yor's starting homeworld) from the Yor"],
        ["Vigilant Victory", "Win as Arceans"],
        ["Warrior", "Win a Battle"],
        ["We Care For The Least of Us", "Unlock all the Benevolent ideology traits"],
        ["Whatever happened to those Xendar?", "Complete the Rise of the Terrans campaign"],
        ["World Without Flesh", "Win as the Yor"],
        ["Worlds to Rule", "Own 30 planets"],
        ["You're a Bad Person", "Use the spore weapon"],
    ];

    assert.strictEqual(officialAchievements.length, 102, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
