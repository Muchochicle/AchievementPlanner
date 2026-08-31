import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-rogue.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 311560 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-rogue");

test("getPlannerData('assassins-creed-rogue') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-rogue");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Assassin's Creed Rogue achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Assassin's Creed Rogue achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Assassin's Creed Rogue achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A worthy cause", "Complete Present 3"],
        ["Achieve full synchronization", "Achieve 100% synchronization in all main missions"],
        ["Ancient Hero", "Get the Native Armor"],
        ["Brotherhood broken", "Complete sequence 6"],
        ["Camper", "Loot [20] supply camps"],
        ["Capture all Gang HQs", "Capture All Gang HQs"],
        ["Cartographer", "Visit every location in the game"],
        ["Dedicated Employee", "Complete [35] Abstergo Challenges"],
        ["Defence First", "Survive a Reverse-Boarding"],
        ["Denied", "Counter [15] air surprise attacks"],
        ["Did I do that?", "Complete Present 1"],
        ["Do not want", "Counter [20] smoke bombs successfully using a gas mask"],
        ["For the Empire!", "Capture all Forts"],
        ["Freedom Fighter", "Free 300 British PoW's"],
        ["Globe Trotter", "Complete 17 story missions in the Naval Campaign"],
        ["Halcyon days", "Complete sequence 1"],
        ["He's not dead, is he?", "Complete Present 2"],
        ["Hunt the hunted", "Sink 10 ships in North Atlantic without dying while only the HUNTED cheat is active."],
        ["I ENDURE", "Sink 10 ships in North Atlantic without dying while only the ENDURANCE cheat is active."],
        ["I'll take that", "Capture all settlements"],
        ["Ice Breaker", "Break through 500 meters of Ice Sheets"],
        ["Instant Vikings", "Hit 5 enemies with the berserk grenade (at the same time)"],
        ["Killing machine", "Kill 30 guards without dying while only the ENDURANCE cheat is active."],
        ["King of the Hill", "Complete all Native hills and Ice Caves"],
        ["Knight of Yore", "Get the Templar Armor"],
        ["Making new friends", "Complete sequence 3"],
        ["Master of the North Atlantic", "All legendary Battles Completed"],
        ["Memory collector", "Collect all Animus fragments"],
        ["Nap Time", "Put 5 enemies to sleep with the sleep grenade (at the same time)"],
        ["Ninja", "Complete an Outpost without getting detected"],
        ["No page unturned", "Complete the final glitched memory."],
        ["One legend dies, and one is born", "Complete sequence 5"],
        ["Owned", "Complete every activity in a single location."],
        ["Phantom Queen", "Fully Upgrade the Morrigan"],
        ["Picking teams", "Complete sequence 4"],
        ["Property Tycoon", "Complete all renovations"],
        ["Repairman", "Repair all computers in Abstergo Entertainment"],
        ["Sending a message", "Complete Present 4"],
        ["Smashing", "Destroy 100 Ice Bergs"],
        ["Stalker killer", "Counter-Kill [30] Stalkers"],
        ["Supplier", "Take over 10 large supply camps while only the VETERANS cheat is active."],
        ["Templar then; Templar now", "Complete the game"],
        ["The end of youth", "Complete sequence 2"],
        ["This war of mine", "Complete all assassin interceptions"],
        ["Unicorn Slayer", "Harpoon a Narwhal"],
        ["What's yours is mine", "Loot [20] ship convoys"],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
