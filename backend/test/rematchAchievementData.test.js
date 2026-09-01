import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rematch.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2138720 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rematch");

test("getPlannerData('rematch') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for rematch");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every REMATCH achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every REMATCH achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 REMATCH achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acrobat", "Score a goal with an acrobatic volley shoot."],
        ["Alley-oop", "Deliver an assist with a rebound on a wall."],
        ["Back on track", "Complete your first workshop."],
        ["Can't lose", "Win 3 matches in a row."],
        ["Clean sheet", "Win a match without conceding any goals."],
        ["Competitor", "Win your first ranked match."],
        ["Expert", "Reach level 30."],
        ["Eyes closed", "Deliver an assist with a no look pass."],
        ["Fashion victim", "Collect 15 items."],
        ["Goal!", "Score your first goal."],
        ["Golden boots", "Score 100 goals."],
        ["Golden gloves", "As goalkeeper, perform 100 saves."],
        ["Guardian angel", "As goalkeeper, save a shot on target in overtime."],
        ["Hats off", "Score a hat trick."],
        ["It's just a game", "Complete the prologue tutorial."],
        ["Maestro", "Deliver 100 assists."],
        ["Make them shine", "Deliver an assist leading to an equalizer."],
        ["Making History", "The beginning of an amazing career."],
        ["Marathon runner", "Run 42,195 km."],
        ["Mr Fundamentals", "Complete 5 workshops with bronze medals minimum."],
        ["New look", "Customize an outfit slot on a character."],
        ["No pain no gain", "Complete 5 workshops with gold medals."],
        ["Not in my house!", "As goalkeeper, perform a save."],
        ["Pinball", "Score a goal off the woodwork."],
        ["Post to post", "Deliver an assist as goalkeeper."],
        ["Power of friendship", "Play a match with at least one Steam friend in your squad."],
        ["Pro", "Reach level 10."],
        ["Rampart", "As goalkeeper, perform 30 saves."],
        ["Serial scorer", "Score 30 goals."],
        ["Shopping", "Acquire your first item."],
        ["Starting blocks", "Win your first match."],
        ["Team first!", "Deliver your first assist."],
        ["The Special One", "Win the MVP award for the first time."],
        ["Ultra Trail", "Run 170 km."],
        ["Versatile", "Deliver an assist, score a goal and perform a save in the same match."],
        ["Vista", "Deliver 30 assists."],
        ["Winner", "Win 30 matches in any game mode."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
