import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ixion.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1113120 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ixion");

test("getPlannerData('ixion') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for ixion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every IXION achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every IXION achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 IXION achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["... in a finite world", "Unlock all sectors"],
        ["A Hunk of Junk", "Have the Tiqqun's hull integrity erode below 5% and survive"],
        ["A Junker's Dream", "Reach tier 2 of the Recycling specialization in a sector"],
        ["A Thousand Strong", "Reach 1000 population"],
        ["Access Granted", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Ain't Nobody Got Time for That", "Skip a transmission within one second of it starting."],
        ["All in Good Health", "Build a Health Center"],
        ["Better Him Than Me", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Beyond Time and Space", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["BRAWL!", "Build an Exo-fighting Dome"],
        ["Breaking Protocol", "Discover Outer Hope during the prologue (you need a probe launcher)."],
        ["Catastrophe Avoided", "Story progress marker - a prologue event, described here spoiler-free."],
        ["Crunch Culture", "Have every single sector in a work status of at least \"Overwork\""],
        ["Delivery!", "Research every single upgrade for the Drone Bay"],
        ["Drill-dozer", "Have 5 Mining Ships active at the same time"],
        ["Exceeding Capacity", "Reach 3079 population"],
        ["From the Past", "Finish Chapter 2"],
        ["Fully Recycled", "Convert waste into alloy, electronics or polymer"],
        ["Gregor Spinoza", "Story progress marker - a prologue event, described here spoiler-free."],
        ["Guy de Borderlands", "Story progress marker - a prologue event, described here spoiler-free."],
        ["Help of the Forgotten Member", "Implement the (grey) NAOMI Protocol at least once in each of three different chapters."],
        ["Hope Seeker", "Finish Chapter 1"],
        ["I Give You The Stars", "Complete Challenge mode"],
        ["In Dolos We Trust", "Restore the crew's trust after reaching 1%"],
        ["Infinite growth...", "Unlock a sector"],
        ["Man's Best Friend", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Monotrack Drifter", "Have a Train Station in each of the six sectors"],
        ["Mutual Loyalty", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Necessary Enhancement", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Oats", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Pedal to the Metal", "Transfer 300 resources between sectors in a single cycle"],
        ["Permanent Redesigns", "Destroy 200 buildings in a single playthrough"],
        ["Please Make it Stop!", "Have 5 accidents within a single cycle"],
        ["Power Outage", "Experience a blackout for the tenth time"],
        ["Praise the Hull!", "Build a Hull Temple"],
        ["Pulsar Disciple", "Finish Chapter 4"],
        ["Ready for a New World", "Train your first colonists"],
        ["Remember the Dead", "Build a memorial in each of the six sectors"],
        ["Scenic View", "Have an Observatory in each of the six sectors"],
        ["Scientifically Accurate", "Reduce all audio sliders to 0 in the settings menu"],
        ["Sightseeing", "Visit 15 planets"],
        ["Soylent Green", "Have a Water Treatment Center in a sector with the Body Recycling decree in effect"],
        ["Space Greenhouse", "Reach tier 2 of the Food specialization in a sector"],
        ["Space Society", "Implement a new decree"],
        ["Sputnik 2049", "Find two large resource deposits using a single probe"],
        ["Suburban Perfection", "Reach tier 2 of the Population specialization in a sector"],
        ["Sustainable Energy", "Build all solar panels"],
        ["The Ship of Theseus", "Replace the last original piece of hull through EVA repairs"],
        ["This is Fine", "Have fires in 20 buildings at the same time"],
        ["Tiqqun Contender", "Story/choice marker - reached at a specific point in the story, described here spoiler-free."],
        ["Tiqqun Unchained", "Story progress marker - a prologue event, described here spoiler-free."],
        ["Wakey Wakey", "Awaken a human from cryogenic sleep"],
        ["What the Ruins Teach Us", "Finish Chapter 3"],
        ["What They Hide From Us", "Story/choice marker - reached near the end of the story, described here spoiler-free."],
        ["Without Breaking Some Eggs...", "Finish the prologue"],
        ["Work Harder", "Reach tier 2 of the Industry specialization in a sector"],
        ["You Had One Job...", "Fail to survive the prologue."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
