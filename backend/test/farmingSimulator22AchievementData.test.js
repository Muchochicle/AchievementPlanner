import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/farming-simulator-22.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1248130 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 45 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("farming-simulator-22");

test("getPlannerData('farming-simulator-22') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for farming-simulator-22");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Farming Simulator 22 achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Farming Simulator 22 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Farming Simulator 22 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["All out of Land", "Everything the light touches...is mine."],
        ["Allez hopp", "Oh, they can do THAT as well?"],
        ["Bringing in the Honey", "Well you've been one busy bee, haven't you?"],
        ["Cheese it", "Anybody up for some fondue?"],
        ["Clucky Streak", "Now that's a lot of Easter eggs."],
        ["Cowherd", "Bet you didn't think they'd be that much work, right?"],
        ["Field Trip", "One vehicle for all of your needs."],
        ["Fix me up", "Seriously, you should consider a membership card."],
        ["Fluffyness", "Building up my wool empire."],
        ["Game on", "I'm somewhat of a collector myself."],
        ["Giddy-up!", "I could get used to getting around like this…"],
        ["Gone but not for cotton", "Where would you even store them?!"],
        ["Hard work pays off", "You know you can also spend it, right?"],
        ["Help me to help you", "Sure, I can take care of that, neighbor."],
        ["Helper A does not stop … ever", "What do you mean \"take care of my own farm as well\"?"],
        ["Highly cultivated", "I'm a little proud of this one myself."],
        ["I like to switch it up", "We're slowly getting there."],
        ["I read Shakespeare and stuff", "The first step of any farmer."],
        ["I'm stumped", "If a tree falls in a forest and no one is around to hear it, does one hand clap?"],
        ["It just fell off", "It was only a matter of time…"],
        ["It's just the beginning", "I've never felt happier than here."],
        ["It's never too late to farm", "It feels good to be home."],
        ["It's sow easy", "Planting one bean will yield much green."],
        ["Just a sprinkle", "You have to think about the future."],
        ["Large-scale supplier", "These are the fruits of your labor."],
        ["Long haul", "In it for the long game, I see."],
        ["Olea europaea", "It's a fruit, not a vegetable!"],
        ["Original grain", "My horses are crazy for it."],
        ["Own use", "Reap what you sow."],
        ["Plant get enough", "A little help can go a long way."],
        ["Pretty colourful", "Childhood memories, brought back to your home."],
        ["Raisin the stakes", "It's Californian gold!"],
        ["Road Trip", "That thing wouldn't have fit onto the street anyway."],
        ["Rock on", "The path to success is paved with rocks."],
        ["That's a wrap", "What's in the bale?"],
        ["The plot thickens", "You won't rest until you've reached maximum efficiency."],
        ["This is just my weekend vehicle", "Yes, I need each and every one of these."],
        ["Thoroughbred!", "I'm a real cowboy, mom!"],
        ["Three little piggies…", "You'll be amazed how much food they need."],
        ["Ultimutt Pawesomeness", "Who's a good boy?"],
        ["Van Gogh", "Look at Mr. Fancypants over there."],
        ["Vehicle fleet", "Ok, I might have a problem…"],
        ["Well-Oiled Machine", "Hmm, we could franchise this…"],
        ["You are not a kangaroo", "Seriously, think of the poor animal!"],
        ["You wood not believe it", "Taking a leaf of absence."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
