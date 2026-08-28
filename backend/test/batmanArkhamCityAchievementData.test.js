import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/batman-arkham-city.json - 64 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 200260 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 64 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("batman-arkham-city");

test("getPlannerData('batman-arkham-city') returns real planner data with 64 curated achievements", () => {

    assert.ok(game, "expected real planner data for batman-arkham-city");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 64);

});

test("every Batman: Arkham City achievement has a unique id from 1 to 64 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 64 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 64);
    assert.strictEqual(new Set(apinames).size, 64);

});

test("every Batman: Arkham City achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 64 Batman: Arkham City achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Few New Tricks", "Use 5 different Quickfire gadgets in one fight as Robin in Harley Quinn's Revenge"],
        ["Acid Bath", "Save the damsel, but is she in distress?"],
        ["Aggravated Assault", "Stop all assaults in Arkham City"],
        ["AR Knight", "Complete all augmented reality training exercises"],
        ["Arkham City Sirens", "Drop in on an old friend"],
        ["Bargaining Chip", "Reunite the separated couple"],
        ["Battering Ram", "Shield Bash 5 different thugs"],
        ["Bomb Squad", "Defuse all bombs in 3 minutes or less"],
        ["Brainteaser", "Rescue the fifth hostage from Riddler"],
        ["Breaking and Entering", "Find a way into the secret base"],
        ["Broken Toys", "Destroy it all"],
        ["Bronze Revenge", "Obtain 24 medals on the original Arkham City maps (as Batman)"],
        ["Campaign Bronze", "Obtain 36 medals on the original Arkham City campaigns (as Batman)"],
        ["Campaign Gold", "Obtain all 108 medals on the original Arkham City campaigns (as Batman)"],
        ["Campaign Kitty", "Obtain all 108 medals on the original Arkham City campaigns (as Catwoman)"],
        ["Campaign Nightwing", "Obtain 114 medals on the original Arkham City and Nightwing Bundle Pack campaigns (as Nightwing)"],
        ["Campaign Silver", "Obtain 72 medals on the original Arkham City campaigns (as Batman)"],
        ["Campaign Wonder", "Obtain 114 medals on the original Arkham City and Robin Bundle Pack campaigns (as Robin)"],
        ["Chimney Sweep", "There is only one way in"],
        ["Communication Breakdown", "Clear the airwaves"],
        ["Contract Terminated", "Stop the contract operative"],
        ["Conundrum", "Rescue the first hostage from Riddler"],
        ["Dial Z For Murder", "Stop the phone booth killer"],
        ["Exit Stage Right", "All the world is a stage"],
        ["Family Jewels", "Retrieve your stolen goods"],
        ["Feline Revenge", "Obtain all 72 medals on the original Arkham City maps (as Catwoman)"],
        ["Flawless Freeflow Fighter 2.0", "Complete one combat challenge without taking damage (any character)"],
        ["Freefall", "Don't look down"],
        ["Frequent Flyer", "Zip Kick 5 different thugs"],
        ["Fully Loaded", "Collect all of Batman's gadgets and upgrades"],
        ["Gadget Attack", "Use 5 different Quickfire gadgets in one fight  (any play mode)"],
        ["Genius", "Rescue all the hostages from Riddler"],
        ["Ghost Train", "Fight for survival"],
        ["Gladiator", "Last man standing"],
        ["Gold Revenge", "Obtain all 72 medals on the original Arkham City maps (as Batman)"],
        ["Hide And Seek", "A deadly game of hide and seek"],
        ["How's It Hanging?", "Clean up the Dry Docks"],
        ["I'm Batman", "Become the Bat"],
        ["Intellectual", "Rescue the fourth hostage from Riddler"],
        ["IQ Test", "Solve the first riddle"],
        ["Lost And Found", "Uncover the secret of Arkham City"],
        ["Lost Property", "No crimefighter should be without this"],
        ["Mastermind", "Rescue the second hostage from Riddler"],
        ["Mystery Stalker", "Reveal the mystery watcher"],
        ["Nightwing Revenge", "Obtain 78 medals on the original Arkham City and Nightwing Bundle Pack maps (as Nightwing)"],
        ["One-Armed Bandit", "Hammer the point home"],
        ["Party's Over", "Destroy all Harley Balloons"],
        ["Pay Your Respects", "A moment of remembrance"],
        ["Perfect Freeflow 2.0", "Perform a perfect combo including all of Batman's combat moves (any play mode)"],
        ["Perfect Knight - Day 2", "Complete every challenge in Arkham City - Main Story, Side Missions, Upgrades, Collectables, New Game Plus and Riddlers Revenge (as Batman)"],
        ["Pick Pocket", "Steal the score of a lifetime"],
        ["Puzzler", "Rescue the third hostage from Riddler"],
        ["Robin Revenge", "Obtain 78 medals on the original Arkham City and Robin Bundle Pack maps (as Robin)"],
        ["Sandstorm", "We are legion"],
        ["Savior", "Save the medical volunteers"],
        ["Serial Killer", "Track down the serial killer"],
        ["Silver Revenge", "Obtain 48 medals on the original Arkham City maps (as Batman)"],
        ["Snap To It", "Snap Flash an unarmed thug, an armed thug, an environmental object and a Titan"],
        ["Sphinx' Riddle", "Complete all 40 of the Catwoman Riddler grid items"],
        ["Stop the Clock", "Time is running out"],
        ["Storyteller", "Have 12 murderous dates with Calendar Man"],
        ["The Last Laugh", "The joke's on who?"],
        ["Twice Nightly", "Complete New Game Plus"],
        ["Wrecking Ball", "Stop the unstoppable"],
    ];

    assert.strictEqual(officialAchievements.length, 64, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
