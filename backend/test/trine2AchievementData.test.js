import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trine-2.json - 97 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 35720 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trine-2");

test("getPlannerData('trine-2') returns real planner data with 97 curated achievements", () => {

    assert.ok(game, "expected real planner data for trine-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 97);

});

test("every Trine 2 achievement has a unique id from 1 to 97 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 97 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 97);
    assert.strictEqual(new Set(apinames).size, 97);

});

test("every Trine 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 97 Trine 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Floral Feast", "Feed carnivorous plants with three or more different kinds of treats"],
        ["A Hail of Arrows", "Shoot 3 arrows in the air and catch them all with the Knight's shield"],
        ["All Too Easy!", "Finish a level without taking any damage (Not the Tutorial)"],
        ["Alone and Mighty", "Complete a level with only Pontius"],
        ["Belly of the Beast Collector", "Collect all level experience in Belly of the Beast"],
        ["Bouncy Bouncy", "Stand on a conjured box bouncing on any bouncy surface for 10 seconds"],
        ["Brackenridge Rise Collector", "Collect all level experience in Brackenridge Rise"],
        ["Cannonball Rebound", "Kill a grenadier goblin with its own cannonball"],
        ["Catch This!", "Kill an enemy with an airborne object tossed with the Knight's charge "],
        ["Challenge is My Middle Name", "Complete any level with hardcore mode on and difficulty set to hard"],
        ["Cirque de Zoya", "Using grapple, swing around an object and reattach grapple again without touching any surface"],
        ["Cloudy Isles Collector", "Collect all level experience in Cloudy Isles"],
        ["Deadly Dustland Collector", "Collect all level experience in Deadly Dustland"],
        ["Dirty Tactics", "Get at least 10 enemies killed by other enemies' actions in a single level"],
        ["Easy as Pie", "Complete the Goblin Menace expansion on hard using hardcore mode"],
        ["Eldritch Passages Collector", "Collect all experience pickups in Eldritch Passages"],
        ["Flying Solo", "Complete a whole level playing one character only"],
        ["Forlorn Wilderness Collector", "Collect all experience pickups in Forlorn Wilderness"],
        ["Funs with Fungi", "Complete Mushroom Caves"],
        ["Goblin Menace Collector", "Collect all level experience in the Goblin Menace expansion"],
        ["Grand Collector", "Collect all experience pickups in both the main game and the Goblin Menace expansion"],
        ["Grand Theft Aviation", "Complete Brackenridge Rise"],
        ["Hammer Havoc", "Kill an enemy with a thrown hammer bouncing at least once before kill"],
        ["Happy Reunion", "Complete Goblin Machinations"],
        ["High Rise", "Construct a tower made of eight objects and stand on top of it"],
        ["Hostile Gardening", "Complete Hushing Grove"],
        ["Hot and Cold", "Complete Icewarden Keep"],
        ["Hushing Grove Collector", "Collect all experience pickups in Hushing Grove"],
        ["I Didn't Do It", "Make goblins die of three different environmental hazards in a single level"],
        ["I want more!", "Complete the game"],
        ["I'm Walking in the Air", "Complete Cloudy Isles"],
        ["Icebreaker", "Shatter three frozen enemies within one second"],
        ["Icewarden Keep Collector", "Collect all experience pickups in Icewarden Keep"],
        ["Indigestion", "Complete Belly of the Beast"],
        ["Into the Story", "Complete The Story Begins"],
        ["Like a Shadow", "Complete a level with only Zoya"],
        ["Lost and Found", "Find all chests in the game"],
        ["March Through the Marsh", "Complete Mosslight Marsh"],
        ["Master Collector", "Collect all experience pickups in the game"],
        ["Mosslight Marsh Collector", "Collect all experience pickups in Mosslight Marsh"],
        ["Mudproof Hero", "Complete Mudwater Dale"],
        ["Mudwater Dale Collector", "Collect all experience pickups in Mudwater Dale"],
        ["Mushroom Caves Collector", "Collect all experience pickups in Mushroom Caves"],
        ["Mushroom Murk Collector", "Collect all experience pickups in Mushroom Murk"],
        ["Mutually Assured Destruction", "Make a sandworm kill another sandworm"],
        ["No More Lizard Soup", "Complete Shadowed Halls"],
        ["No Time to Change Clothes", "Complete The Heroes Return"],
        ["O Solo Mio", "Complete a level with only Amadeus"],
        ["Off You Go", "Capture a goblin in a Monster Prison and then launch it with a catapult"],
        ["Pearl Diver", "Complete Searock Castle"],
        ["Petrified Tree Collector", "Collect all experience pickups in Petrified Tree"],
        ["Play Catch", "Throw a box with Pontius' magnetic shield and catch it or have another player catch it"],
        ["Pontius Baseball", "Launch an object with Knight's magnetic shield and break it with hammer before the object touches the ground"],
        ["Pontius Transportation Company", "Glide for five seconds with Kitesail Shield while having an object or character on top of the shield"],
        ["Rafting", "Create a makeshift raft of three separate parts and have a goblin sail it for five seconds"],
        ["Rise to the Challenge", "Complete any level of the Goblin Menace expansion with hardcore mode on and difficulty set to hard"],
        ["Rosabel's Secrets", "Find all chests in The Final Chapter"],
        ["Searock Castle Collector", "Collect all experience pickups in Searock Castle"],
        ["Secrets of Belly of the Beast", "Find all secret chests in Belly of the Beast"],
        ["Secrets of Brackenridge Rise", "Find all secret chests in Brackenridge Rise"],
        ["Secrets of Cloudy Isles", "Find all secret chests in Cloudy Isles"],
        ["Secrets of Deadly Dustland", "Find all secret chests in Deadly Dustland"],
        ["Secrets of Eldritch Passages", "Find all chests in Eldritch Passages"],
        ["Secrets of Forlorn Wilderness", "Find all chests in Forlorn Wilderness"],
        ["Secrets of Hushing Grove", "Find all chests in Hushing Grove"],
        ["Secrets of Icewarden Keep", "Find all chests in Icewarden Keep"],
        ["Secrets of Mosslight Marsh", "Find all chests in Mosslight Marsh"],
        ["Secrets of Mudwater Dale", "Find all chests in Mudwater Dale"],
        ["Secrets of Mushroom Caves", "Find all chests in Mushroom Caves"],
        ["Secrets of Mushroom Murk", "Find all chests in Mushroom Murk"],
        ["Secrets of Petrified Tree", "Find all chests in Petrified Tree"],
        ["Secrets of Searock Castle", "Find all chests in Searock Castle"],
        ["Secrets of Shadowed Halls", "Find all chests in Shadowed Halls"],
        ["Secrets of the Heroes Return", "Find all secret chests in The Heroes Return"],
        ["Shadowed Halls Collector", "Collect all experience pickups in Shadowed Halls"],
        ["Sharp-Eyed", "Collect all experience pickups in any level"],
        ["Sharpeyed II (Goblin Menace Expansion)", "Find all level experience in any level in the expansion"],
        ["Shrooms and Glooms", "Complete Mushroom Murk"],
        ["Sinister Plumbing", "Complete Eldritch Passages"],
        ["Snowman", "Freeze two enemies and stack them on top of each other"],
        ["Sunstroke", "Complete Deadly Dustland"],
        ["Surfboard Master", "Stand on a plank floating on a single airflow for four seconds"],
        ["The Heroes Return Collector", "Collect all level experience in The Heroes Return"],
        ["The Leaning Tower of Pontius", "Build a three-piece or three-character tower where lowest part is Pontius and his shield, tower must stand at least five seconds"],
        ["The Story Begins Collector", "Collect all experience pickups in The Story Begins"],
        ["The Treasurer", "Find all chests in the Goblin Menace expansion"],
        ["This is Trine!", "Kick five enemies of the same kind into a bottomless pit with the Thief's grappling hook kick or the Knight's Kitesail Shield glide kick"],
        ["This Wasn't the Plan", "Make a bubble sink for three seconds"],
        ["Through Dangers Untold", "Complete The Final Chapter"],
        ["Treehouse Adventure", "Complete Petrified Tree"],
        ["Trine 2 hard", "Earn all (original) Achievements in Trine 2"],
        ["Trine 2 Hard II (Goblin Menace Expansion)", "Earn all Achievements in Trine 2: The Goblin Menace"],
        ["Trine Kaput For Good?", "Complete each expansion level using only one character"],
        ["Trine Kaput?", "Complete a level with only Amadeus, a level with only Zoya and a level with only Pontius"],
        ["Walk in the Park", "Complete the game on hard using hardcore mode"],
        ["Wicked Collection", "Capture three different types of enemies inside boxes and stack them on top of another"],
        ["Wild in Wilderness", "Complete Forlorn Wilderness"],
    ];

    assert.strictEqual(officialAchievements.length, 97, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
