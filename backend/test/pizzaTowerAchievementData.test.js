import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pizza-tower.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2231450 (fetched through this app's own services/steamApi.js) - 62 of
// 74 ship a real, official Steam description. The 12 hidden achievements
// (the five ACH_BOSS_* no-hit boss clears, the five ACH_PRANK_* per-World
// P Rank sets, and the two ACH_HALLOWEEN_* pumpkin achievements) are
// described publicly nowhere; their descriptions here are curatorial
// summaries of their real, community-documented unlock conditions, cross-
// checked against Steam Community 100% guides and the Pizza Tower Wiki.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const pizzaTower = getPlannerData("pizza-tower");

test("getPlannerData('pizza-tower') returns real planner data with 74 curated achievements", () => {

    assert.ok(pizzaTower, "expected real planner data for pizza-tower");
    assert.ok(Array.isArray(pizzaTower.achievements));
    assert.strictEqual(pizzaTower.achievements.length, 74);

});

test("every Pizza Tower achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = pizzaTower.achievements.map(a => a.id);
    const apinames = pizzaTower.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Pizza Tower achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of pizzaTower.achievements) {

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

test("every one of the 62 officially-described Pizza Tower achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 12 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["John Gutted", "Destroy all the dead john blocks in John Gutter."],
        ["Let's Make This Quick", "Finish John Gutter in under two minutes."],
        ["Primate Rage", "Get a combo of 99 or more in John Gutter."],
        ["Shining Armor", "Get to all the priests without bumping into a wall once in Pizzascape."],
        ["Spoonknight", "Parry ten Forknights in Pizzascape."],
        ["Spherical", "Kill another enemy while in the ball form in Pizzascape."],
        ["Thrill Seeker", "Finish Ancient Cheese without getting hurt by an explosion."],
        ["Volleybomb", "Kill a rat using a bomb dropped by an enemy in Ancient Cheese."],
        ["Delicacy", "Make more than forty one sets of cheese platforms crumble in Ancient Cheese."],
        ["Very Very Hot Sauce", "Finish Bloodsauce Dungeon without touching lava once."],
        ["Eruption Man", "During escape, go up with the superjump for more than two seconds in Bloodsauce Dungeon."],
        ["Unsliced Pizzaman", "Finish Bloodsauce Dungeon without getting hurt by a pizza cutter."],
        ["Peppino's Rain Dance", "Reactivate a totem by dancing with the mach dash in Oregano Desert."],
        ["Unnecessary Violence", "Kill all of the clerk sausages in the pizzamarts."],
        ["Alien Cow", "Dont get hit by a single cow in Oregano Desert."],
        ["Ghosted", "Avoid getting touched by the John Ghost in Wasteyard."],
        ["Pretend Ghost", "Kill 20 or more enemies as a ghost in Wasteyard."],
        ["Alive and Well", "Surf every corpse in Wasteyard."],
        ["No One Is Safe", "Kill three unreachable enemies at once with the supertaunt in Fun Farm."],
        ["Cube Menace", "Find and destroy the Mort Cube."],
        ["Good Egg", "Complete Fun Farm while avoiding getting hurt with Mort on you."],
        ["Non-Alcoholic", "Destroy nearly every beer bottle in Fastfood Saloon."],
        ["Already Pressed", "Activate each button only once in Fastfood Saloon."],
        ["Royal Flush", "Touch every single card in Fastfood Saloon."],
        ["Blowback", "Kill a cannon goblin with his own bomb in Crust Cove."],
        ["X", "Uncover all the treasure guys in Crust Cove."],
        ["Demolition Expert", "Complete Crust Cove without getting hit by an explosion."],
        ["Bee Nice", "Stand next to a bee and taunt in Gnome Forest."],
        ["Lumberjack", "Destroy every wood block in Gnome Forest."],
        ["Bullseye", "Kill a noise goblin with his own arrow in Gnome Forest."],
        ["Turbo Tunnel", "Avoid hitting the ceiling during the room right after the John Pillar in Deep Dish Nine."],
        ["Blast'Em Asteroids", "Destroy all asteroids in Deep Dish Nine."],
        ["Man Meteor", "Kill 5 UFOlives in a single bodyslam in Deep Dish Nine."],
        ["Primo Golfer", "Get the highest rank in the courses of Golf."],
        ["Nice Shot", "Kill three or more enemies in a single stroke in Golf."],
        ["Helpful Burger", "Get a burger enemy to hit the ball inside the goal in Golf."],
        ["Pan Fried", "Find the bacon room."],
        ["Strike!", "Kill three or more enemies with a single Brick ball in Pig City."],
        ["Say Oink!", "Take a photo with every Pig City citizen."],
        ["Can't Fool Me", "Avoid killing any pizzaboy cardboard in Oh Shit!"],
        ["Food Clan", "Kill ten ninjas by parrying them in Oh Shit!"],
        ["Penny Pincher", "Avoid getting grabbed by Mr Pinch during the escape sequence of Oh Shit!"],
        ["Unflattening", "Remove the boxxed form from each priest at least once in Peppibot Factory."],
        ["Whoop This!", "Survive the first secret of Peppibot Factory without getting hurt."],
        ["There Can Be Only One", "Destroy every Peppino robot in Peppibot Factory."],
        ["Frozen Nuggets", "Free all the frozen birds in Refrigerator-Refrigerador-Freezerator."],
        ["Season's Greetings", "Kill 5 fake santas in Refrigerator-Refrigerador-Freezerator ."],
        ["Ice Climber", "Complete Refrigerator-Refrigerador-Freezerator without falling in a pit."],
        ["Cross To Bare", "Kill thirty ghosts in Pizzascare."],
        ["Haunted Playground", "Avoid getting hurt by the King Ghost's traps in Pizzascare."],
        ["Skullsplitter", "Destroy every single skull block in Pizzascare."],
        ["And This... Is My Gun On A Stick!", "Kill every chasing monster in the escape section of Don't Make A Sound."],
        ["Let Them Sleep", "Activate the alarms in Don't Make A Sound less than six times before the escape sequence."],
        ["Jumpspared", "Avoid getting jumpscared in Don't Make A Sound."],
        ["Decorated Veteran", "Don't get hurt more than three times in WAR."],
        ["Sharpshooter", "Don't miss more than three shots in WAR."],
        ["Trip to the Warzone", "Finish WAR with more than a minute left."],
        ["S Ranked #1", "Get all S Ranks in World 1."],
        ["S Ranked #2", "Get all S Ranks in World 2."],
        ["S Ranked #3", "Get all S Ranks in World 3."],
        ["S Ranked #4", "Get all S Ranks in World 4."],
        ["S Ranked #5", "Get all S Ranks in World 5."]
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH_BOSS_1",
        "ACH_BOSS_2",
        "ACH_BOSS_3",
        "ACH_BOSS_4",
        "ACH_BOSS_5",
        "ACH_PRANK_1",
        "ACH_PRANK_2",
        "ACH_PRANK_3",
        "ACH_PRANK_4",
        "ACH_PRANK_5",
        "ACH_HALLOWEEN_1",
        "ACH_HALLOWEEN_2"
    ]);

    assert.strictEqual(hiddenApinames.size, 12, "sanity check - Pizza Tower has 12 hidden achievements");

    const dataPairs = pizzaTower.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 hidden Pizza Tower achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_BOSS_1", "The Critic"],
        ["ACH_BOSS_2", "The Ugly"],
        ["ACH_BOSS_3", "Denoise"],
        ["ACH_BOSS_4", "Faker"],
        ["ACH_BOSS_5", "Face Off"],
        ["ACH_PRANK_1", "P Ranked #1"],
        ["ACH_PRANK_2", "P Ranked #2"],
        ["ACH_PRANK_3", "P Ranked #3"],
        ["ACH_PRANK_4", "P Ranked #4"],
        ["ACH_PRANK_5", "P Ranked #5"],
        ["ACH_HALLOWEEN_1", "Pumpkin Munchkin"],
        ["ACH_HALLOWEEN_2", "Tricksy"]
    ];

    assert.strictEqual(names.length, 12, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = pizzaTower.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
