import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/moving-out.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 996770 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("moving-out");

test("getPlannerData('moving-out') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for moving-out");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Moving Out achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Moving Out achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Moving Out achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["111% Effort", "Achieve 111% in the game"],
        ["An Eye for the Details", "Complete all bonus objectives in one level"],
        ["Animal Lover", "Deliver every pet"],
        ["Certified F.A.R.T", "Complete all Story levels."],
        ["Choo Choo", "Complete \"The Chase\""],
        ["Did I do that?", "Movers in Paradise DLC: hit a car on the overworld map until it flips and smokes, then hit it again."],
        ["Go Long!", "Throw 500 items"],
        ["Golden Mover", "Get a Gold Medal in one level"],
        ["Golden Paradise", "Movers in Paradise DLC: earn a Gold medal on every Movers in Paradise level."],
        ["Hot Tub Reward Machine", "Movers in Paradise DLC: put the pufferfish in the hot tub and deliver both."],
        ["Look left, then right...", "Get run over by 125 cars"],
        ["Massive Window Attack", "Smash 100 windows"],
        ["Masters in Moving", "Complete all levels with Gold medals"],
        ["Minute Mover", "Beat a level in under a minute"],
        ["Moving On Up", "Complete 10 story levels with Gold medals"],
        ["Nick of Time", "Beat a level in story mode with under 5 seconds left on the clock"],
        ["Not Landfill 2: Packmore Island's Revenge", "Movers in Paradise DLC: find and deliver all 13 hidden cassette tapes."],
        ["Objectives Complete II: The Completionist", "Movers in Paradise DLC: complete all 39 bonus objectives across the 13 levels."],
        ["Objectives Complete!", "Complete all level objectives in every level"],
        ["Oh the humanity", "Movers in Paradise DLC: explode all the hot air balloons on the Packmore Island map with geyser launches."],
        ["PHD In Moving", "Complete 20 story levels with Gold medals"],
        ["Quantity over quality", "Deliver 1337 items"],
        ["Rain, hail or shine.", "Slap every mailbox in the story levels"],
        ["Recertified", "Movers in Paradise DLC: complete 'Welcome to Packmore Resort'."],
        ["Remember The Time...", "Complete all memory levels"],
        ["SMASH!", "Movers in Paradise DLC: destroy 50 sandcastles."],
        ["That's Not Landfill!", "Deliver the hidden console from each story level"],
        ["The Bird", "Shoot a basketball hoop"],
        ["The Friendly Ghosts", "Complete all haunted levels without slapping any ghosts"],
        ["Totally Certified", "Complete Mandatory Training"],
        ["Weeeeeeeeeeeeee!", "Movers in Paradise DLC: break open a scuba tank and ride it as it shoots off."],
        ["Where to next?", "Movers in Paradise DLC: complete all 13 Movers in Paradise stages."],
        ["Where we're going we don't need thrones", "Sit on every toilet in the game"],
        ["Who lives here?", "Movers in Paradise DLC: find out who lives on Packmore Island."],
        ["Who's the Boss?", "Defeat the Rat King"],
        ["Winners Don't Move Rugs", "Complete all Arcade levels"],
        ["You Don't Got Mail!", "Smash the hidden letterbox with the truck"],
        ["Zip It Good", "Movers in Paradise DLC: ride all 8 ziplines on Packmore Island."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
