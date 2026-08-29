import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/persona-5-royal.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1687950 (fetched through this app's own services/steamApi.js).
// 43 of 53 ship a real, official Steam description, quoted
// verbatim below. The 10 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers kept
// spoiler-light), and boss/feat conditions cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("persona-5-royal");

test("getPlannerData('persona-5-royal') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for persona-5-royal");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Persona 5 Royal achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Persona 5 Royal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 officially-described Persona 5 Royal achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "TrophyTitle_01_fiber_Steam",
        "TrophyTitle_02_fiber_Steam",
        "TrophyTitle_03_fiber_Steam",
        "TrophyTitle_04_fiber_Steam",
        "TrophyTitle_05_fiber_Steam",
        "TrophyTitle_06_fiber_Steam",
        "TrophyTitle_07_fiber_Steam",
        "TrophyTitle_08_fiber_Steam",
        "TrophyTitle_09_fiber_Steam",
        "TrophyTitle_10_fiber_Steam",
    ]);

    assert.strictEqual(hiddenApinames.size, 10, "sanity check - Persona 5 Royal has 10 hidden achievements");

    const officialAchievements = [
        ["A Deadly Debut", "Performed a Guillotine execution."],
        ["A Grand Experiment", "Performed an Electric Chair execution."],
        ["A Hustler's Journey", "Played a game of billiards."],
        ["A Most Studious Disguise", "Scored the highest on your exams."],
        ["A Night in Kichijoji", "Attended the jazz club."],
        ["A Serene Experience", "Visited a temple."],
        ["Accident-Prone", "Performed an execution during a Fusion Alarm."],
        ["Angler's Debut", "Passed time at the fishing pond."],
        ["Awakening the Phantom Thieves", "Evolved a party member's Persona."],
        ["Batter Up!", "Scored a hit at the batting cages."],
        ["Dartslinger", "Played a game of darts."],
        ["Easy Money", "Won the lottery."],
        ["Efficient Executioner", "Performed a Group Guillotine execution."],
        ["Getting the Vapors", "Couldn't take the heat in the bathhouse."],
        ["Going Against the Crane", "Scored a prize in the crane game."],
        ["I am Thou...", "Obtained a Persona through negotiation."],
        ["Intensive Training", "Used Incense on a Persona in Lockdown."],
        ["It's Showtime!", "Performed a Showtime attack."],
        ["Jose's Favorite Customer", "Traded in flowers while in Mementos."],
        ["Leblanc Buffer", "Cleaned up in Leblanc."],
        ["Let's Blow It Up", "Defeated enemies via Disaster Shadow explosion."],
        ["Master of Akihabara", "Ordered from the special menu at the maid café."],
        ["My Closest Partner", "Entered a special relationship."],
        ["One Step at a Time", "Completed a Mementos request."],
        ["Phantom Thieves: Assemble!", "Established your own squad of thieves."],
        ["Professional Modification", "Customized a gun."],
        ["Punch That Clock!", "Worked a part-time job."],
        ["Pure Perfection", "Maxed out all social stats."],
        ["Spirit of Rebellion", "Obtained Arsène."],
        ["Success Built on Sacrifice", "Performed a Gallows execution."],
        ["Tactical Teamwork", "Performed a Baton Pass."],
        ["Talent Thief", "Obtained a Skill Accessory from a Palace ruler."],
        ["Technician", "Triggered a Technical."],
        ["The Deviated Cognition", "Encountered a deviation in Mementos."],
        ["The Phantom Philatelist", "Traded in stamps while in Mementos."],
        ["The Phenomenal Phantom Thief", "Unlocked all achievements."],
        ["The Purpose of a Thief", "Obtained a Treasure Demon."],
        ["The Search for Power", "Completely changed the cognition of Mementos."],
        ["Tokyo Tourist", "Went to a hangout spot with someone."],
        ["Trash Into Treasure", "Sold old clothing at Furugi no Neuchi."],
        ["True Confidence", "Maxed out one of your Confidants."],
        ["Unsurpassed Rebel", "Conquered the Reaper."],
        ["You'd Better Hang On!", "Used the grappling hook."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 10 hidden Persona 5 Royal achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["TrophyTitle_01_fiber_Steam", "Castle of Lust: Seized"],
        ["TrophyTitle_02_fiber_Steam", "Museum of Vanity: Repossessed"],
        ["TrophyTitle_03_fiber_Steam", "Bank of Gluttony: Cleaned Out"],
        ["TrophyTitle_04_fiber_Steam", "Pyramid of Wrath: Plundered"],
        ["TrophyTitle_05_fiber_Steam", "Spaceport of Greed: Obliterated"],
        ["TrophyTitle_06_fiber_Steam", "Casino of Jealousy: Bankrupted"],
        ["TrophyTitle_07_fiber_Steam", "Cruiser of Pride: Capsized"],
        ["TrophyTitle_08_fiber_Steam", "The Thorough Trickster"],
        ["TrophyTitle_09_fiber_Steam", "Take Back the Future"],
        ["TrophyTitle_10_fiber_Steam", "The Path Chosen"],
    ];

    assert.strictEqual(names.length, 10, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
