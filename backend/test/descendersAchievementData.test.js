import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/descenders.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 681280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("descenders");

test("getPlannerData('descenders') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for descenders");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Descenders achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Descenders achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Descenders achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A True Descender", "Finish a session from highlands to peaks"],
        ["Ain't No Scrub", "Get 250.000 REP"],
        ["Bring A Friend", "Finish a level together with someone else"],
        ["Carving a Path", "Get 10.000 REP"],
        ["Dialed in", "Unlock a shortcut"],
        ["Every Axis", "Land a 360 frontflip"],
        ["Flipping Heck", "Land a double frontflip"],
        ["Flying Finish", "Cross a level's finish line after bailing (crashing)."],
        ["Found Your Flow", "Get 50.000 REP"],
        ["Gap in the Market", "Complete 10 mini-bosses"],
        ["Get Some Gear", "Unlock 10 items"],
        ["Get The Gang Together", "Finish a session with 3 different crew members"],
        ["Getting Dizzy", "Land a 720 double backflip"],
        ["Go The Extra Mile", "Complete all bonus worlds"],
        ["Hotshot", "Complete the boss jump in the Volcano."],
        ["Into The Woods", "Reach the forest"],
        ["It Begins", "Get sponsored by a team"],
        ["It's Getting Cluttered in Here", "Unlock 25 items"],
        ["It's Getting Hot In Here", "Reach the Volcano bonus world."],
        ["Liquicity Amateur Tour", "Complete all of the missions in the Liquicity Amateur Tour"],
        ["Liquicity Pro Tour", "Complete all of the missions in the Liquicity Pro Tour"],
        ["Made It", "Complete boss jump in peaks"],
        ["No More Robots Amateur Tour", "Complete all of the missions in the No More Robots Amateur Tour"],
        ["No More Robots Pro Tour", "Complete all of the missions in the No More Robots Pro Tour"],
        ["Power Up Audio Amateur Tour", "Complete all of the missions in the Power Up Audio Amateur Tour"],
        ["Power Up Audio Pro Tour", "Complete all of the missions in the Power Up Audio Pro Tour"],
        ["Pull My Finger", "Use the whoopee cushion 200 times."],
        ["Quite a Collection", "Unlock 50 items"],
        ["RageSquid Amateur Tour", "Complete all of the missions in the RageSquid Amateur Tour"],
        ["RageSquid Pro Tour", "Complete all of the missions in the RageSquid Pro Tour"],
        ["Represent your style", "Complete a team node"],
        ["Show em who's Boss", "Survive a boss jump"],
        ["Speed Demon", "Reach 100kmh/62mph"],
        ["The Final Challenge", "Reach the peaks"],
        ["The Golden Run", "Finish a session from highlands to peaks without bailing a single time"],
        ["The Rampage Begins", "Reach the canyon"],
        ["The Ring Of Fire", "Complete the Volcano's fire-ring boss jump."],
        ["The training was worth it", "Jump over the train"],
        ["Veteran", "Complete a sponsorship"],
        ["What A Legend", "Finish Career+ in one session"],
        ["Wipeout", "Get REKT"],
        ["You're Still Here?", "Finish the credits"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
