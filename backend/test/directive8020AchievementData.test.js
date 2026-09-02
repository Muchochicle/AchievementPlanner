import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/directive-8020.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2255370 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("directive-8020");

test("getPlannerData('directive-8020') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for directive-8020");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Directive 8020 achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Directive 8020 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Directive 8020 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Possible Futures", "Unlock every Character Destiny."],
        ["Always Wear a Seatbelt", "Ensure Stafford survives the crash in Episode 3."],
        ["Cat's Out the Bag", "Persuaded Williams to reveal the truth about the mission"],
        ["Cycle Complete", "Completed all 8 episodes"],
        ["Dear Mum...", "Find all 10 of the Sleep Technician's video logs to her mother."],
        ["Home Free", "Charted a course for Earth without any intruders on board"],
        ["Human After All", "All crew members passed safely through the scanner"],
        ["Humanitarian", "Reach the end of Episode 8 with all six core characters alive and have Eisele stop the cycle."],
        ["Is This Decaf?", "Trigger a specific coffee-related interaction in the crew areas."],
        ["Live with the Consequences", "Completed the story on Survivor Playstyle"],
        ["Lost and Found", "Find Carter's Utility Strap."],
        ["Message in a Bottle", "Young sent an SOS to the Andromeda"],
        ["NDA Breaker", "Reach the post-credits scene where Eisele exposes the cloning program."],
        ["No Stone Left Unturned", "Find every Secret in the game."],
        ["Not Today, Boss", "Escape Williams as Cernan without being caught."],
        ["O Death", "Find all 5 of the Curator's O Death collectibles (most only accessible via Turning Points after a first playthrough)."],
        ["Organic Waste Disposal", "Lure the Duplicate into the incinerator in Waste Management as Eisele."],
        ["Paint The Walls", "Killed the whole crew"],
        ["Password1", "Anders hacked into Williams' computer"],
        ["Personality Manifest", "Unlock a Character Destiny."],
        ["Right to Bear Arms", "Approve the use of the gun."],
        ["Social Butterfly", "Message every crew member using the communicator."],
        ["Stealth 100", "Returned to Bridge Ops without losing any characters"],
        ["Suspect Acquitted", "Follow the correct evidence chain so suspicion shifts away from the accused crew member."],
        ["This is Not a Place of Honor", "Young sent a warning to the Andromeda"],
        ["This Steak's Raw", "Mitchell and Anders survived the experiment unharmed"],
        ["Thumb on the Last Page", "Use a Turning Point to change your path."],
        ["Total Party Kill", "The standoff at the scanner turned into a death spiral"],
        ["Wake-Up Crew", "Completed Episode 1"],
        ["We Have Reserves", "Sent a second team down to redirect the fuel"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
