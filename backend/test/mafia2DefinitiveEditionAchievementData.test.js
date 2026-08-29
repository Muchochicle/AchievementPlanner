import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mafia-2-definitive-edition.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 50130 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 67 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mafia-2-definitive-edition");

test("getPlannerData('mafia-2-definitive-edition') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for mafia-2-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Mafia II: Definitive Edition achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Mafia II: Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Mafia II: Definitive Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Lesson in Manners", "Show you know how to talk to a hooker."],
        ["A Real Gentleman", "Help the woman fix her car in Home Sweet Home."],
        ["Arctic Grave", "Push the chief witness into the ice lake in \"Joe's Adventures.\""],
        ["Armament King", "Kill your enemies in \"Jimmy's Vendetta\" with every weapon available in the game."],
        ["Back in Business", "Do your first job for Mike Bruski."],
        ["Big Brother", "Protect Francesca."],
        ["Card Sharp", "Find all of the Wanted posters."],
        ["Carnapper", "Finish all Car Dealer missions in \"Jimmy's Vendetta.\""],
        ["Chasing the Dragon", "Complete Chapter 12."],
        ["Checking Out", "Complete Chapter 10."],
        ["Chop Chop!", "Complete Chapter 13."],
        ["Collector's Item", "Find at least one collectible in the game."],
        ["Cruise Control", "Keep any vehicle at 30mph or over for 5 or more minutes."],
        ["Dockyard Discord", "Finish the Connection level in \"Joe's Adventures.\""],
        ["Dream Handling", "Upgrade one of your cars to the maximum level."],
        ["Driftin' Daddy-O", "Reach 200 points for one Drift in \"Joe's Adventures.\""],
        ["End of the Rainbow", "Settle the score with Irish once and for all."],
        ["Explorer", "Drive a total of 1,000 miles in vehicles in \"Jimmy's Vendetta.\""],
        ["Exporter", "Sell 5 vehicles to Derek at the dock."],
        ["Faster than Light", "Achieve a 10x point multiplier in \"Jimmy's Vendetta.\""],
        ["Finish Him", "Finish what you started."],
        ["Firebug", "Destroy 100 vehicles in \"Jimmy’s Vendetta.\""],
        ["First Step", "Complete your first mission in \"Jimmy's Vendetta.\""],
        ["Five Finger Discount", "Finish the Supermarket level in \"Joe's Adventures.\""],
        ["Get Rich or Die Flyin'", "Keep a vehicle in the air for over 5 seconds"],
        ["Good Spirits", "Complete Chapter 5."],
        ["Hairdresser", "Kill 5 enemies in rapid succession with a headshot."],
        ["Hard to Kill", "The police want you dead.  Survive for 10 minutes!"],
        ["He Who Pays the Barber", "Improve the dockworkers' hair cuts."],
        ["Hey Joe", "Clean up after Joe."],
        ["Home Sweet Home", "Complete Chapter 2."],
        ["Hypersonic", "Reach 2000 points for one velocity run in \"Joe's Adventures.\""],
        ["Jack of all Trades", "Reach 10 different score actions in one mission in \"Joe's Adventures.\""],
        ["Jacked Jumper", "Reach 200 points for one Jump in \"Joe's Adventures.\""],
        ["Knucklehead", "Kill a total of 30 enemies using melee attacks."],
        ["Ladies Man", "Find all of the Playboy magazines."],
        ["Last Respects", "Complete Chapter 7."],
        ["Made Man", "Finish the story on Medium difficulty level or higher."],
        ["Mail Man", "Sell all the gas stamps before the time runs out."],
        ["Man of Honor", "Complete Chapter 9."],
        ["Massacre", "Kill 1,000 enemies in \"Jimmy's Vendetta.\""],
        ["Men at Work", "Complete Chapter 14."],
        ["Millionaire", "Earn 1,000,000 points in \"Jimmy's Vendetta.\""],
        ["Mind the Goods", "Finish the Cathouse level in \"Joe's Adventures.\""],
        ["Night Shift", "Complete Chapter 4."],
        ["One Careful Owner", "Travel a total of 50 miles in one vehicle."],
        ["Our Good Friend", "Complete Chapter 11."],
        ["Out for Justice", "Learn what it means to be a Scaletta."],
        ["Pedal to the Metal", "Travel at 125 mph."],
        ["Petrol Head", "Drive at least 30 different vehicles."],
        ["Proper Scrapper", "Sell 5 vehicles to Mike Bruski at the scrapyard."],
        ["Revenged", "Finish \"Jimmy's Vendetta\" on any difficulty level."],
        ["Same Shirt Different Day", "Finish Joe's Adventures on any difficulty."],
        ["Sharp Shooter", "Kill 100 enemies by headshots in \"Jimmy's Vendetta.\""],
        ["Sharp Suiter", "Buy your first luxury suit."],
        ["Stuck Up", "Rob 5 stores in under 5 minutes."],
        ["The Enforcer", "Kill 50 street gangsters."],
        ["The Mafia Never Forgets", "Pay a visit to an old friend."],
        ["The Price of Oil", "Complete Chapter 3."],
        ["The Professional", "Obtain the ration stamps without raising the alarm."],
        ["The Wild Ones", "Complete Chapter 8."],
        ["Time Well Spent", "Complete Chapter 6."],
        ["Tough Nut", "Finish the story on Hard difficulty level."],
        ["Tuned Ride", "Upgrade one of your cars one level."],
        ["Viva la Resistenza!", "Complete Chapter 1."],
        ["Wake Up Call", "Help Leo out of a tricky situation without getting caught."],
        ["What Witness?", "Finish the Witness level in \"Joe's Adventures.\""],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
