import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/blood-and-bacon.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 434570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("blood-and-bacon");

test("getPlannerData('blood-and-bacon') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for blood-and-bacon");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Blood and Bacon achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Blood and Bacon achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Blood and Bacon achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acid Washed", "Get Puked on By Princess"],
        ["Always Sing Off Key", "Make The Farmer Sing A Western"],
        ["Become A Mile High Club Member", "Climb To The Highest Location On The Farm"],
        ["Birds Of A Feather ", "Make Everyone Wear The Same Hat In 4P"],
        ["Bite the Hand that Feeds You", "Shoot the Farmer's Face to Make Him Talk 10 Times"],
        ["Blinded By The Light", "Shine Your Flashlight in The Farmers Face"],
        ["Charcoal Crumbler", "Crumble 10 Creatures After Electrocution"],
        ["Chicken On The Farm", "Do Something That Is Cowardly"],
        ["Doctor Who", "Get Revived By 10 Strangers And Survive The Day"],
        ["FrankenBoar's Monsters", "Bring 10 Boars Back To Life In Single Player"],
        ["FreeFall ", "Fall down a pit and live"],
        ["Friended", "Play With A Stranger For An Entire Round"],
        ["Gas Guzzler", "Drink at a WaterPump Until it Runs Dry"],
        ["Graphics Whore", "Change Your Graphics Settings from Main Menu"],
        ["Heirlooms", "Examine 5 heirlooms from the tunnels, in great detail"],
        ["I Will Swallow You Whole", "Push 20 Whole Boars Into The Grinder"],
        ["I'm Ambidextrous", "Blow Off Both Your Arms With A Grenade"],
        ["It Was The Hindenburg", "Shoot Down The Toxic Blimp"],
        ["Kaboom Kaboom", "Make 10 Creatures Explode"],
        ["Life After Death", "Explore The Map In FreeRoam"],
        ["Mama Said Knock You Out", "Knockout 10 Creatures With a Melee Attack"],
        ["Mr Green", "Listen to the story of Mr. Green, and the 3 Skulls"],
        ["Needy Greedy", "Defeat The First Mini Boss on Day 10"],
        ["Optional Achievement", "Space Update : Honk Horn  5 Times"],
        ["Optional Achievement", "Space Update :  Run Over An Astronaut"],
        ["Optional Achievement", "Space Update : Save 3 Space Flowers"],
        ["Ride The Wave", "Ride Princess For A Minute"],
        ["Royalty Killer", "Defeat The First Big Boss Day 20"],
        ["Skidmarked", "Get Shit On by Princess"],
        ["That's The Way The Boar Bounces", "Bounce On A Running Boar"],
        ["The Chunk Kicker", "Kick a Body Part 50 Times"],
        ["The Longest Yard", "Throw A Grenade As High As You Can Using Milk"],
        ["The Mad Hatter", "Collect 5 Golden Keys"],
        ["The Red Sun", "Shoot 6 Red Sun Targets In One Session"],
        ["Watch The Show", "Shoot a Body Part In The Air More Than 7 Times In a Row"],
        ["Where Credits Due", "Watch The Credits All The Way Until The End"],
        ["While You're Down", "Kill 10 Creatures While You Are Bleeding Out"],
        ["You Are Hardened", "Defeat Day 30 On HardMode With 4 Players And No Cheats"],
        ["You Are The Champion", "Beat The Game"],
        ["You Have An Apt Pupil ", "Read The Keyboard Layout in Main Menu"],
        ["You Murderer", "Shoot 100 Creatures Dead"],
        ["You Wont Like Me When Im Angry", "Consume 5 Cans of Bulkify"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
