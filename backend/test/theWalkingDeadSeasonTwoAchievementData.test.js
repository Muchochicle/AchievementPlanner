import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-walking-dead-season-two.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 261030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-walking-dead-season-two");

test("getPlannerData('the-walking-dead-season-two') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-walking-dead-season-two");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every The Walking Dead: Season Two achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every The Walking Dead: Season Two achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 The Walking Dead: Season Two achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Heavy Burden", "Returned to the meeting place."],
        ["A Stranger", "Met someone on a bridge."],
        ["All Fall Down", "Survived the attack."],
        ["All the Dark Night", "Made it through to morning."],
        ["All The Dead Lie Down", "Completed Episode 5: \"No Going Back\""],
        ["Always the Quiet Ones", "Committed larceny."],
        ["Best Laid Plans", "Got separated from the group."],
        ["Beyond the Trees", "Completed Episode 4: \"Amid the Ruins\""],
        ["Blood and Iron", "Made it out alive."],
        ["Center Cannot Hold", "Reached the other side."],
        ["Come Hither", "Invited some friends into the compound."],
        ["Eye of the Storm", "Completed Episode 3: \"In Harm's Way\""],
        ["Fresh Fish", "Arrived at your new home."],
        ["Headed Out", "Headed out with the group."],
        ["History Lesson", "Reached the museum."],
        ["Kindly Stop for Me", "Found your way through."],
        ["Long Way Down", "Witnessed a murder."],
        ["Making an Observation", "Found the Observation Deck."],
        ["Miles To Go", "Took a breather."],
        ["Moving On", "Left the cabin."],
        ["New Morning", "Helped someone through a difficult time."],
        ["Not in Nottingham", "Got beaten down."],
        ["Now What?", "Arrived at the cabin."],
        ["Old Friends", "Made it to the ski lodge."],
        ["On Foot", "Got back on the road."],
        ["On the Path", "Met new people."],
        ["One Long Day", "Made it through your first day."],
        ["Over the Bridge", "Found a way across the water."],
        ["Past Midnight", "Settled things with a new friend."],
        ["Path Less Traveled", "Learned new survival skills."],
        ["Rehabilitated", "Gave what you got."],
        ["Reunion", "Completed Episode 2: \"A House Divided\""],
        ["Right of Frost", "Stopped for the night."],
        ["River Runs Cold", "Arrived at the shore."],
        ["Shelter", "Found a campsite."],
        ["Sneaky", "Got what you needed."],
        ["Split Decision", "Completed Episode 1: \"All That Remains\""],
        ["Still. Not. Bitten.", "Took care of yourself."],
        ["The Intruder", "Talked to a stranger."],
        ["We Slowly Drove", "Reached the terminus."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
