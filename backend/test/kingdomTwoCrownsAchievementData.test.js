import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-two-crowns.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 701160 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 46 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("kingdom-two-crowns");

test("getPlannerData('kingdom-two-crowns') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-two-crowns");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Kingdom Two Crowns achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Kingdom Two Crowns achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Kingdom Two Crowns achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Journey Is Better Shared", "Sail to another land in Coop 30 times"],
        ["A New Heir", "Lose your crown, but not your legacy."],
        ["Above and Beyond", "Defeat the Greed on all 6 Lands"],
        ["Answer the Call of Olympus", "Sail away from Oracle Island"],
        ["Arm the Homeless", "Convert a Beggar Camp into a Citizen House"],
        ["Beginning of a legend", "Defeat the Greed on one land"],
        ["Bigger on the Inside", "Unlock the pouch upgrade"],
        ["Blessings from the Gods", "Collect all four divine Artifacts"],
        ["By the Eighth Day", "You forged a new Crown"],
        ["By the Fifth Day", "You didn't kill anything."],
        ["By the Fourth Day", "You hunted 40 or more critters."],
        ["By the Tenth Day", "You destroyed a portal."],
        ["Cracked the Skull", "Overcome the Greed on Skull Island"],
        ["Easter Island", "Clear all trees from a single land."],
        ["End of an Odyssey", "Conquer Mount Olympus"],
        ["Gift of Prometheus", "Set 300 Greed on fire"],
        ["Go Fish", "Collect all fish"],
        ["Here Kitty Kitty Kitty", "Recruit a Cat"],
        ["Hero of Olympus", "Conquer Mount Olympus in a single reign"],
        ["I am an Equestrian", "Ride 4 different steeds on the same land"],
        ["I HAVE THE POWER!", "Unlock all Items of Power (Solve All Puzzles)"],
        ["I HAVE THE TOWER!", "I have 20 max-level towers on a single land"],
        ["Igavania!", "Ride the Gamigin."],
        ["Is a Hermit still a Hermit if they have friends?", "Put 4 hermits on the same boat"],
        ["Legends Will Be Passed Down", "Defeat the Greed on four lands"],
        ["Master of the Sea", "Sail away before day 6!"],
        ["Mediterranean Vacation", "Beat all portals on all ten lands"],
        ["Never Gives Up", "Retrieve your crown 300 times"],
        ["On the First Day", "Recruited eight archers"],
        ["On the Ninth Day", "You held a Gem"],
        ["On the Second Day", "You got free walls."],
        ["On the Seventh Day", "You cleared an acre of land."],
        ["On the Sixth Day", "You had more gold than you could carry."],
        ["On the Third Day", "You started your camp."],
        ["Oracle Hotline", "Receive 10 prophecies from the Oracle"],
        ["Playing with goo", "Escape the cave with your crown in tact"],
        ["Pyrotechnics", "Set fire to 20 greed with one flame barrel"],
        ["Safe Passage", "Have lighthouses on all 5 lands"],
        ["Songs Will Be Written", "Defeat the Greed on three lands"],
        ["Stories Have Begun", "Defeat the Greed on two lands"],
        ["That's Not Very Gneiss", "Petrify 20 subjects"],
        ["The Four Horsemen", "Summoned the four monarchs to the land of the dead."],
        ["The Student Becomes the Teacher", "Beat a portal with a squire"],
        ["Their Savior", "Revive a Land after 200 days of decay"],
        ["There Is No Greater Ruler Than Thou", "Defeat the Greed from all five lands in a single reign"],
        ["You have Sealed Your Reign In History", "Defeat the Greed on all five lands"],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
