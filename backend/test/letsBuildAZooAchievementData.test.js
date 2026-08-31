import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lets-build-a-zoo.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1547890 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("lets-build-a-zoo");

test("getPlannerData('lets-build-a-zoo') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for lets-build-a-zoo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Let's Build a Zoo achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Let's Build a Zoo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Let's Build a Zoo achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Mammoth Discovery", "Complete the dig for the Mammoth."],
        ["Bad Hot Dog", " Sell a Hotdog at the worst possible quality."],
        ["Bernie And Friends", "Employ a Bernie mascot."],
        ["Big Birther", "Your breeding program must produce 100 babies (Nursery births only)."],
        ["Broken Teeth", "Break some teeth."],
        ["Captain Cola", "Convince Captain Cola to run a promotion at your zoo."],
        ["Cartographer", "Map your first Genome."],
        ["Cash King", "Earn at least $50000 in a single day."],
        ["Criminal Mastermind", "Have 200 evil points."],
        ["Dealer", "Sell 10 animals to the black market."],
        ["Death Metal Death", "Complete all Critical Choices for King Sapphire."],
        ["Decorator", " Get a Deco Rating of 100%."],
        ["Dino-Mite", "Discover all 51 Dinosaurs/Animals."],
        ["Dinosaur Rebirth", "Clone your first dinosaur."],
        ["Factory Boss", "Have at least 6 unique types of evil factory operating in your zoo."],
        ["Fired Up", "Fire an employee."],
        ["First Catch", "Get first fish from either boat"],
        ["Gonky", "Employ a Gonky mascot."],
        ["GORSD", "Hire 6 different types of mascots"],
        ["Green Machine", "Build your first Wind Turbine."],
        ["Have a baby!", "One of your animals must give birth."],
        ["He Sells Sanctuary", " Complete the Goth quests."],
        ["Hybrid Moments", "Create your first hybrid animal."],
        ["Land Owner", " Buy every plot of land in the starting zoo."],
        ["Lion City", "Complete the trade for the Lion in Singapore."],
        ["Map Master", "Map 56 standard animal Genomes."],
        ["Monster Matinee", "Complete all Kaiju Cosplay quests."],
        ["New Zoo", "Unlock a second zoo on the world map."],
        ["Pearlfect", "Build a Jeweller"],
        ["Pooped Out", "Build a Bio-waste Storage in Dinosaur Island."],
        ["Protest", "Have a visit from a protestor."],
        ["Researcher", "Research 20 things."],
        ["Route Planner", "Unlock 5 bus routes."],
        ["Sea Monster", "Create your first marine hybrid"],
        ["Seas the Day!", "Collect 50 Aquatic Animals"],
        ["Sky Writer", "Get a flying visit!"],
        ["Snitch", "Send a member of the black market to prison."],
        ["Super Trader", "Complete 10 trades with other zoos."],
        ["Superior Researcher", "Research 233 things."],
        ["Tastes Like Bacon", "Build a bacon factory."],
        ["The Saint", "Have 200 good points."],
        ["Ticket Master", "Sell a ticket for at least 100 dollars."],
        ["Trampoline", " Buy a trampoline for your zoo."],
        ["Transport Mogul", "Own at least 10 buses."],
        ["Whale Done", "Get a blue whale"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
