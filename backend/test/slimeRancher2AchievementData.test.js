import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/slime-rancher-2.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1657630 (fetched through this app's own services/steamApi.js).
// 7 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("slime-rancher-2");

test("getPlannerData('slime-rancher-2') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for slime-rancher-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Slime Rancher 2 achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Slime Rancher 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Slime Rancher 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Real Goal-Getter", "Get a score of 120 on a Slimeball goal gadget within 1 minute."],
        ["A Real Hero", "Complete the game's endgame content: light the towers and ring the bells scattered across the map to activate the path to the Prismacore, then win the final boss fight there to help Gigi stabilize it and save Rainbow Island."],
        ["All That Glitters", "Have a Strange Diamond, Sun Sap, Royal Jelly, and Lightning Mote in your vac at the same time."],
        ["Bea-llionaire", "Earn 100000 newbucks from selling plorts."],
        ["Beam Me Up", "Craft and use a Return Home Portal."],
        ["Can't Make an Omelette", "Break a Yolky Slime egg."],
        ["Charged Up", "Get hit by a bolt of lightning."],
        ["Complete Conservatory", "Purchase 5 Ranch Expansions."],
        ["Core Breach", "Enter the Prismacore, found deep within the Grey Labyrinth."],
        ["Far Range Friends", "Use the Comm Station to receive a gift from Mochi, Viktor, Thora, Ogden, and BOb."],
        ["Fly like a Bea", "Fly for 5 seconds using the jetpack."],
        ["Into the Unknown", "Open one of the large sealed doors leading into the Grey Labyrinth."],
        ["Now You're Thinking With Plortals", "Fire a plort through a linked cannon, sending it to the plort market."],
        ["Plortonomics", "Sell 15 different types of plorts."],
        ["Polestar Pro", "Purchase 40 items in the Polestar Provisions shop."],
        ["Pop!", "Feed 3 Gordos to bursting."],
        ["Quantum Crafter", "Craft 5 Quantum Drones."],
        ["Rainbow Explorer", "Discover any three areas."],
        ["Rainbow Researcher", "Complete the Slimepedia."],
        ["Secret Behind the Waterfall", "Discover the entrance to Powderfall Bluffs, a hidden, frosty biome."],
        ["Shady Deals", "Make 3 purchases at the Night Market, a special vendor that only appears at a specific location around midnight."],
        ["Tarrnado", "Shoot a tarr into a tornado."],
        ["Tinker Tailor Science Slime", "Craft 8 unique player upgrades."],
        ["Tinkerer", "Place your first gadget."],
        ["Treasure Hunter", "Loot 50 treasure pods."],
        ["Turn the Dial", "Fill 10 Shadow Plort Collectors while exploring the Grey Labyrinth."],
        ["You Can Pet the Cat", "At the ProntoMart shop terminal, click the small cat icon on screen."],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 7 hidden Slime Rancher 2 achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Core Breach", "A Real Hero", "Shady Deals", "Secret Behind the Waterfall", "Into the Unknown", "Turn the Dial", "You Can Pet the Cat"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
