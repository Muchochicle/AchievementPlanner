import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/session-skate-sim.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 861650 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("session-skate-sim");

test("getPlannerData('session-skate-sim') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for session-skate-sim");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Session: Skate Sim achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Session: Skate Sim achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Session: Skate Sim achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Backpacker", "Visit all cities apartments (HUB)"],
        ["Bing Bong!", "Complete all the historical challenges in NYC (Includes Pyramid Ledges, Black Hubba, LES Coleman, Highline Bridge, Jerome Banks)"],
        ["Bottom ply killer", "Perform [500] Boardslides"],
        ["Commence the Hijinx!", "Complete all Beagle missions"],
        ["Cops called!", "Perform [500] 5-0 grinds"],
        ["Cross lock country", "Perform [500] 50-50"],
        ["Dipped!", "Perform [500] Smith grinds"],
        ["DIY Boss", "Completed all RIBS MAN missions"],
        ["Fashionista", "Buy [100] customised items at the shop"],
        ["Finally he zips it", "Complete all Donovan Strain missions"],
        ["Fulfilled the dream", "Reach Pro status"],
        ["G.O.A.T. status", "Complete all Daewon Song missions"],
        ["G'Day Mate!", "Complete all Dane Burman missions"],
        ["Globetrotter", "Complete all Annie Guglia missions"],
        ["Go with the Flow", "Reach Flow status"],
        ["Golden!", "Complete all the historical challenges in San Francisco"],
        ["Good vibes", "Complete all Mark Appleyard missions"],
        ["Hoarder", "Buy [50] DIY items from the shop"],
        ["Keep the dream alive", "Reach Am status - win the Brooklyn Banks Stair Jam best-trick contest at the end of the third chapter."],
        ["Keeping it classy", "Perform [1001] Kickflips"],
        ["Laid back", "Perform [500] Tailslides"],
        ["Lines for days", "Complete all Samaria Brevard missions"],
        ["Loves You Back", "Complete all the historical challenges in Philadelphia"],
        ["Manny Destroys All", "Complete all Manny Santiago missions"],
        ["Many plys later...", "Slide / Grind for a total of [42] Km"],
        ["NAHELL!", "Complete all Antiferg missions"],
        ["Pew-Pew", "Perform [500] Laser Flips"],
        ["Plastic Surgeon", "Perform [500] Nose grinds"],
        ["Prince of Philly", "Complete all Jahmir Brown missions"],
        ["Purple passion", "Complete all Nora Vasconcellos missions"],
        ["Renaissance man", "Complete all Torey Pudwill missions"],
        ["Skatepark hero", "Perform [500] Feebles"],
        ["Squad goals", "Complete all the pros challenges (All pro story arcs)"],
        ["Sup widdit big dog!", "Complete all Ryan Thompson missions"],
        ["Tank commander", "Complete all Louie Barletta missions"],
        ["That pinch!", "Perform [500] Crooked grinds"],
        ["That was wheelie fun", "Manual for a total of [21] km"],
        ["That's how it's done!", "Reach Pro status with “Manual” catch ON (From 1st quest to Pro)"],
        ["The finer things in life", "Perform [1001] Heelflips"],
        ["The flip trick crown jewel", "Perform [500] 360 Flips"],
        ["The hard way", "Perform [500] Hardflips"],
        ["Tight lipslides", "Perform [500] Lipslides"],
        ["Trick shot marksman", "Complete all Billy Marks missions"],
        ["Ultimate skate nerd", "Complete all historical challenges"],
        ["Upfront shredder", "Perform [500] Noseslides"],
        ["We get it, you're good", "Perform [500] Inward Heelflips"],
        ["Welcome to the family", "Reach Shop sponsored status"],
        ["You're free now!", "Complete the tutorial"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
