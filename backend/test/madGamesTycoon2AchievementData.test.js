import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mad-games-tycoon-2.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1342330 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mad-games-tycoon-2");

test("getPlannerData('mad-games-tycoon-2') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for mad-games-tycoon-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Mad Games Tycoon 2 achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Mad Games Tycoon 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Mad Games Tycoon 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100%", "One of your games must receive an overall rating of at least 100%. [Difficulty: Legendary]"],
        ["80%", "One of your games must receive an overall rating of at least 80%."],
        ["90%", "One of your games must receive an overall rating of at least 90%."],
        ["A Great Soundtrack", "One of your games must get an award for the best sound."],
        ["Backstreet Fighter", "Create an fighting game with a rating of at least 70%."],
        ["Better Than a Book", "Create an visual novel with a rating of at least 70%."],
        ["Better Than the Original?", "Create a remaster of one of your games."],
        ["Bonus Payment", "Create a contract game."],
        ["BOOM", "Create an First-Person Shooter."],
        ["Born to Be a Programmer", "Create your own engine."],
        ["Bundles", "Create a game bundle."],
        ["California Cup", "Create an sports game with a rating of at least 70%."],
        ["Commander Yuri", "Create an Real-Time strategy game with a rating of at least 70%."],
        ["Complete Edition", "Publish an addon game bundle."],
        ["Console War", "Create your own stationary console."],
        ["Console war II", "Sell at least 10,000,000 units of your own console."],
        ["Contractors", "Sign an exclusive contract with a publisher."],
        ["Day Zombie", "Create an survival game with a rating of at least 70%."],
        ["Developer of the Year", "Win the Developer of the Year award."],
        ["Diamond", "Sell at least 50,000,000 units of a game. [Difficulty: Legendary]"],
        ["Discount", "Publish a budget game."],
        ["Dr. Lario", "Create an puzzle Game with a rating of at least 70%."],
        ["Dragon's Cave", "Create an interactive movie with a rating of at least 70%."],
        ["Dungeons and Masters", "Create an RPG Game with a rating of at least 70%."],
        ["Employer I", "Have at least 20 employees."],
        ["Employer II", "Have at least 50 employees."],
        ["Employer III", "Have at least 100 employees."],
        ["Everyone Likes Snakes", "Create a cell phone game."],
        ["Everyone Loves Me!", "Have at least 1,000,000 fans."],
        ["Eye Candy", "One of your games must get an award for the best graphics."],
        ["Game of the Year", "One of your games must be awarded Game of the Year."],
        ["Game Porting Made Easy", "Port a game to another platform."],
        ["Gold", "Sell at least 1,000,000 units of a game."],
        ["Hurrican", "Create an action game with a rating of at least 70%."],
        ["I Don't Like to Be Alone", "Start a multiplayer game with at least one friend."],
        ["I, II, III, IV", "Create a sequel to a game."],
        ["Insert Coin!", "Create a arcade machine."],
        ["Intellectual Property", "Maximize the popularity of an IP."],
        ["Is the Game Really Free?", "Create an F2P game."],
        ["Legendary Game Company", "Maximize your studio reputation. [Difficulty: Legendary]"],
        ["Mad Oil Tycoon", "Create an economic simulation with a rating of at least 70%."],
        ["Marble Maze", "Create an skill game with a rating of at least 70%."],
        ["Market Leader", "Sell at least 50,000,000 units of your own console. [Difficulty: Legendary]"],
        ["Masterful", "Have an employee with an experience of 100% at any skill."],
        ["Max Brain", "Create an Third-Person Shooter with a rating of at least 70%."],
        ["My Best Friend!", "Maximize the relationship with a publisher."],
        ["My Name Is Sid Maier", "Hire a developer legend."],
        ["Now I Will Become Rich", "Produce and distribute a game without a publisher."],
        ["Overhype!", "Create an overhype for one of your games."],
        ["Platin", "Sell at least 10,000,000 units of a game."],
        ["Pocket Money", "Have at least $50,000,000."],
        ["Publisher of the Year", "Win the Publisher of the Year award."],
        ["Publisher!", "Publish a game from an NPC company."],
        ["Retromania", "Create a retro game."],
        ["Shopping Tour I", "Buy an NPC developer or publisher."],
        ["Shopping Tour II", "Buy at least 10 NPC developers or publishers."],
        ["Shopping Tour III", "Buy at least 30 NPC developers or publishers. [Difficulty: Legendary]"],
        ["Simulation City: 1602", "Create an building game with a rating of at least 70%."],
        ["Spaceship: Elite", "Create an simulation game with a rating of at least 70%."],
        ["Spin Off", "Create a spin off."],
        ["Super Lario World", "Create an platformer with a rating of at least 70%."],
        ["That Is Not Enough!", "Have at least $500,000,000."],
        ["That Was a Lot of Jobs!", "Achieve a reputation with clients of 100%."],
        ["The Civilizations", "Create an strategy game with a rating of at least 70%."],
        ["The Island of Monkeys", "Create an adventure game with a rating of at least 70%."],
        ["The Test Drivers", "Create an racing game with a rating of at least 70%."],
        ["This Can't Be Right!", "One of your games must be voted the worst game of the year."],
        ["This Fits in My Pocket", "Create your own mobile console."],
        ["This Is My Team!", "Start a multiplayer game with four friends."],
        ["This Is the Future!", "Reach the year 2050 in the game."],
        ["Three Commas Club", "Have at least a billion dollars. [Difficulty: Legendary]"],
        ["Trendsetter", "One of your games should set a new trend."],
        ["World of Meridian", "Create an MMO game."],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
