import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/devour.json - 131 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1274570 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 131 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("devour");

test("getPlannerData('devour') returns real planner data with 131 curated achievements", () => {

    assert.ok(game, "expected real planner data for devour");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 131);

});

test("every DEVOUR achievement has a unique id from 1 to 131 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 131 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 131);
    assert.strictEqual(new Set(apinames).size, 131);

});

test("every DEVOUR achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 131 officially-described DEVOUR achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Hundred Yards Of Prime Rib", "Won a single player game in Hard mode (The Slaughterhouse)"],
        ["​​Ain’t Got Time To Bleed", "Won a game in single player mode (The Farmhouse)"],
        ["​​All Work And No Play", "Found all of Anna’s diary pages (The Farmhouse)"],
        ["An Excellent Day For An Exorcism", "Won a single player game in Nightmare mode (The Inn)"],
        ["Arachnophobia", "Staggered Zara 20 times (The Inn)"],
        ["Better The Devil You Know", "Won a single player game in Hard mode (The Inn)"],
        ["Blood Bond", "Won a co-op game in Nightmare mode (The Slaughterhouse)"],
        ["Bone Collector", "Freed 100 corpses from their suffering (The Slaughterhouse)"],
        ["Carried", "Won a co-op game but you were the only player knocked out"],
        ["Cast Him Into The Darkness", "Won a game in single player mode (The Asylum)"],
        ["Cleansing", "Cleaned the Onsen water 20 times (The Inn)"],
        ["Come To Mamma", "Lured 20 rats with rotten food (The Asylum)"],
        ["Crispy", "Fried a rat (The Asylum)"],
        ["Curse Breakers", "Won a game in co-op mode (The Inn)"],
        ["Cursed", "Cursed 100 books at pentagrams (The Town)"],
        ["Demon Tamer (Anna)", "Won a game in Nightmare mode as Anna"],
        ["Demon Tamer (April)", "Won a game in Nightmare mode as April"],
        ["Demon Tamer (Cultist)", "Won a game in Nightmare mode as Cultist"],
        ["Demon Tamer (Frank)", "Won a game in Nightmare mode as Frank"],
        ["Demon Tamer (Kai)", "Won a game in Nightmare mode as Kai"],
        ["Demon Tamer (Molly)", "Won a game in Nightmare mode as Molly"],
        ["Demon Tamer (Nathan)", "Won a game in Nightmare mode as Nathan"],
        ["Demon Tamer (Sam)", "Won a game in Nightmare mode as Sam"],
        ["Demon Tamer (Zara)", "Won a game in Nightmare mode as Zara"],
        ["​​Demonology", "Got knocked out by a demon (The Farmhouse)"],
        ["Destroyer Of Words", "Burned 666 books (The Town)"],
        ["Down, Pig!", "Staggered Nathan 20 times (The Slaughterhouse)"],
        ["Eggcellent", "Destroyed 666 eggs at shrines (The Inn)"],
        ["Escape Artist", "Won a single player game in Hard mode (The Carnival)"],
        ["Feeling Lucky?", "7 goats burned in a single game (The Farmhouse)"],
        ["Flight Risk", "Banished 666 crows (The Manor)"],
        ["Fortunate", "Spent 100 coins (The Carnival)"],
        ["​​G.O.A.T", "Won the game 5 times in Nightmare mode"],
        ["Glow Up", "Cleaned 20 heads (The Manor)"],
        ["Goat Curry", "Burnt 666 goats (The Farmhouse)"],
        ["Goblins Be Thine", "Won a co-op game in Nightmare mode (The Inn)"],
        ["Gravedigger", "Buried 666 heads (The Manor)"],
        ["​​Halfway There", "5 goats burned in a single game (The Farmhouse)"],
        ["Heartbreaker", "Won a single player game in Hard mode (The Manor)"],
        ["Here, Piggy!", "Lured 20 pigs with bones (The Slaughterhouse)"],
        ["Hide And Seek", "Released goats from cage (The Farmhouse)"],
        ["Huntsman", "Won a game in single player mode (The Inn)"],
        ["Hurt Me Plenty", "Got knocked out 20 times"],
        ["​​I Think I’m Getting The Hang Of This", "Won the game 5 times"],
        ["Icon of Sin", "Won a single player game in Hard mode (The Asylum)"],
        ["If The Shoe Fits", "Found all the horseshoes (The Town)"],
        ["In Your Prime", "Won a single player game in Nightmare mode (The Asylum)"],
        ["Interrupted", "Staggered Molly 20 times (The Asylum)"],
        ["Jilted", "Staggered April 20 times (The Manor)"],
        ["KABOOM!", "Blew up 20 dolls with music boxes (The Carnival)"],
        ["​​KO", "Got knocked out by Anna (The Farmhouse)"],
        ["Last Laugh", "Won a co-op game in Hard mode (The Carnival)"],
        ["Leave No One Behind", "Won a co-op game without a single knockout"],
        ["​​Left For Dead", "Lost a game"],
        ["Let Them Eat Cake", "Lured 20 heads with cake (The Manor)"],
        ["Little Squealers", "Won a co-op game in Hard mode (The Slaughterhouse)"],
        ["Lone Wolf", "Won a game in single player mode (The Town)"],
        ["May Queen", "Found all the patches (The Asylum)"],
        ["Medic", "Revived 20 teammates"],
        ["Medium Rare", "Burned a goat (The Farmhouse)"],
        ["Mercy Killing", "Banished 666 doll heads (The Carnival)"],
        ["Minced Meat", "Dunked 666 pigs (The Slaughterhouse)"],
        ["Monkeying Around", "Banished 666 monkeys (The Carnival)"],
        ["Moonwalk", "Won a single player game in Nightmare mode (The Farmhouse)"],
        ["MVP", "Won a co-op game without being knocked out yourself"],
        ["Nerves Of Steel (Anna)", "Won a game in Hard mode as Anna"],
        ["Nerves Of Steel (April)", "Won a game in Hard mode as April"],
        ["Nerves Of Steel (Cultist)", "Won a game in Hard mode as Cultist"],
        ["Nerves Of Steel (Frank)", "Won a game in Hard mode as Frank"],
        ["Nerves Of Steel (Kai)", "Won a game in Hard mode as Kai"],
        ["Nerves Of Steel (Molly)", "Won a game in Hard mode as Molly"],
        ["Nerves Of Steel (Nathan)", "Won a game in Hard mode as Nathan"],
        ["Nerves Of Steel (Sam)", "Won a game in Hard mode as Sam"],
        ["Nerves Of Steel (Zara)", "Won a game in Hard mode as Zara"],
        ["Nikola", "100 fuses used (The Asylum)"],
        ["No Mercy", "Won a co-op game in Nightmare mode (The Town)"],
        ["No More Room In Hell", "Won a co-op game in Nightmare mode (The Farmhouse)"],
        ["No Rest For The Wicked", "Won a single player game in Hard mode (The Farmhouse)"],
        ["Not Today, Satan!", "Won a game in co-op mode (The Asylum)"],
        ["Old Fashioned Romantic", "Found all the roses (The Farmhouse)"],
        ["Open Casket", "Won a co-op game in Hard mode (The Manor)"],
        ["Open Sesame", "Released goats from attic cage (The Farmhouse)"],
        ["Out Of The Cuckoo's Nest", "Won a co-op game in Nightmare mode (The Asylum)"],
        ["Pacifier", "Got Anna to calm down 10 times (The Farmhouse)"],
        ["Peek-A-Boo!", "Got knocked out while in a hiding spot"],
        ["Piece O' Cake", "Won a co-op game in Hard mode (The Farmhouse)"],
        ["Pollination", "Found all the cherry blossoms (The Inn)"],
        ["Posse Up", "Won a game in co-op mode (The Town)"],
        ["Ratatouille", "Electrocuted 666 rats (The Asylum)"],
        ["Ratched", "Banished 100 inmates (The Asylum)"],
        ["Reach For The Sky", "Won a single player game in Hard mode (The Town)"],
        ["Ringleader", "Won a single player game in Nightmare mode (The Carnival)"],
        ["Rodeo", "Staggered Sam 20 times (The Town)"],
        ["Running On Empty (Hard)", "Won a game on Hard mode without batteries"],
        ["Running On Empty (Nightmare)", "Won a game on Nightmare mode without batteries"],
        ["Running On Empty (Normal)", "Won a game on Normal mode without batteries"],
        ["Send in the Clowns", "Won a game in single player mode (The Carnival)"],
        ["Shhh", "Got Anna to calm down (The Farmhouse)"],
        ["Slapstick", "Staggered Kai 20 times (The Carnival)"],
        ["Slice And Dice", "Won a game in single player mode (The Slaughterhouse)"],
        ["Spectre", "Won a single player game in Nightmare mode (The Manor)"],
        ["Step Right Up", "Found all the tickets (The Carnival)"],
        ["Sting Like A Bee", "Staggered Anna 20 times (The Farmhouse)"],
        ["​​Survivors", "Won a game in co-op mode (The Farmhouse)"],
        ["Team Spirit", "Won a game in co-op mode (The Slaughterhouse)"],
        ["Tetanus Shot", "Found all the barbed wires (The Slaughterhouse)"],
        ["That Is One Big Pile Of Shit", "Searched 20 piles of poop (The Slaughterhouse)"],
        ["That's A Lot Of Legs", "Banished 666 spiders (The Inn)"],
        ["That's The Spirit", "Banished 666 ghosts (The Town)"],
        ["The Butcher", "Won a single player game in Nightmare mode (The Slaughterhouse)"],
        ["The Doctor Will See You Now", "Read all clipboards (The Asylum)"],
        ["The Trashman", "Kicked over 20 trash cans (The Asylum)"],
        ["This Is Starting To Get Boaring", "Banished 666 boars (The Slaughterhouse)"],
        ["This Town Ain't Big Enough", "Won a single player game in Nightmare mode (The Town)"],
        ["Three’s A Crowd", "3 goats burned in a single game (The Farmhouse)"],
        ["Through The Looking Glass", "Won a game in single player mode (The Manor)"],
        ["Ticklish", "Found all the feathers (The Manor)"],
        ["Tranquillised", "Got Molly to calm down 10 times (The Asylum)"],
        ["​​Twenty’s Plenty", "Lured 20 goats with hay (The Farmhouse)"],
        ["Twisted Firestarter!", "Lit altar 100 times (The Farmhouse)"],
        ["Unharmed (Hard)", "Won a co-op game on Hard mode without medkits"],
        ["Unharmed (Nightmare)", "Won a co-op game on Nightmare mode without medkits"],
        ["Unharmed (Normal)", "Won a co-op game on Normal mode without medkits"],
        ["Unholy Communion", "Won a co-op game in Hard mode (The Town)"],
        ["Venomous", "Won a co-op game in Hard mode (The Inn)"],
        ["Wedding Crashers", "Won a co-op game in Nightmare mode (The Manor)"],
        ["Who You Gonna Call?", "Won a game in co-op mode (The Manor)"],
        ["​​Wouldst Thou Like To Live Deliciously?", "Banished 20 demons (The Farmhouse)"],
        ["You Must Be This Tall To Ride", "Won a game in co-op mode (The Carnival)"],
        ["You'll Float Too", "Won a co-op game in Nightmare mode (The Carnival)"],
        ["You've Got Red On You", "Won a co-op game in Hard mode (The Asylum)"],
    ];

    assert.strictEqual(officialAchievements.length, 131, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
