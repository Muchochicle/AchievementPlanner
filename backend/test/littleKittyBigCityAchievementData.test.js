import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/little-kitty-big-city.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1177980 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("little-kitty-big-city");

test("getPlannerData('little-kitty-big-city') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for little-kitty-big-city");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Little Kitty, Big City achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Little Kitty, Big City achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Little Kitty, Big City achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And Stay Out!", "Get kicked out of a store"],
        ["Back Of The Net", "Score every soccer goal"],
        ["Big Kitty, Little City", "Destroy the model city in the Gecko Shop."],
        ["Bird Botherer", "Catch (and release!) 20 birds"],
        ["Can't Stop The Feelings", "Use an emote"],
        ["Capped Crusader", "Collect all the hats"],
        ["Cat Napper", "Sleep in all the cozy nap spots"],
        ["Cat-Like Reflexes", "Capture a bird in flight"],
        ["Checkmate!", "Remove all the chess pieces from the board"],
        ["Cult Of Purr-sonality", "Get petted 10 times"],
        ["Decluttering", "Smash 10 items"],
        ["Dumpster Diving", "Investigate 10 trash cans"],
        ["Fat Cat", "Find 200 Shinies"],
        ["Fin-tastic!", "Eat all the yummy fish"],
        ["Fruit Fall", "Put a banana on the ground and make a human slip on it (at the Fruit Market)."],
        ["Give A Dog A Bone", "Bring bones to all the dogs"],
        ["Hello Everyone!", "Meet all the animals"],
        ["Home Sweet Home!", "Find your way back home"],
        ["If I Fits, I Sits", "Enjoy 5 cardboard boxes"],
        ["Industrial Artist", "Leave your pawprints in the wet concrete"],
        ["Killer Kitty", "Grab a dangerous item (scissors from the Fruit Market or Gecko Shop) and sprint at a human."],
        ["Litter Picker", "Recycle 100 items"],
        ["Local Celebrity", "Get photographed 20 times"],
        ["Neighborhood Hero", "Complete all items on your To-Do list"],
        ["No Parking!", "Get paint on the red sports car (near the playground - swat elevated paint onto it)."],
        ["Papa-cat-zi", "Take 20 photos with your camera"],
        ["Quack Troops!", "Collect all the ducklings"],
        ["Rub-A-Dub-Dub!", "Take four rubber ducks and place them in the pond by Duck Dad."],
        ["Smash Hit", "Break 100 objects"],
        ["Snack Time!", "Get your first yummy fish"],
        ["Snap Happy!", "Get your very own camera"],
        ["Splish!", "Take a phone (from a knocked-over human) and drop it in the porta-potty near the construction site."],
        ["Sticky Business", "Bust all the old birds' nests"],
        ["Surprise!", "Knock a human over by jumping on them"],
        ["To Me, To You!", "Get a human to kick a ball to you"],
        ["Trip Hazard", "Make 20 humans stumble"],
        ["What Sweet Music", "Meow ten times in a row."],
        ["Who Needs Cash?", "Use your noggin on the soda machine"],
        ["World Traveler", "Open all Tanuki's portals"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
