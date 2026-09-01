import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/persona-5-strikers.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1382330 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("persona-5-strikers");

test("getPlannerData('persona-5-strikers') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for persona-5-strikers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Persona 5 Strikers achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Persona 5 Strikers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Persona 5 Strikers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Helping Hand", "Completed a request."],
        ["A Little Memento", "Obtained a souvenir for the camper."],
        ["A Newfound Heart", "Sophia finds strength of heart."],
        ["All That Glitters", "Defeated 10 Treasure Demons."],
        ["Back in Business", "Witnessed the Phantom Thieves' reunion."],
        ["Best Friend", "Maxed out a BOND skill level."],
        ["Best of the Best", "Trained all Phantom Thieves to level 70."],
        ["Cage of Arrogance Cracked", "Complete the Osaka Jail (the Cage of Arrogance)."],
        ["Cage of Desolation Condemned", "Complete the Okinawa Jail (the Cage of Desolation)."],
        ["Cage of Gluttony Torched", "Complete the Sapporo Jail (the Cage of Gluttony)."],
        ["Cage of Lust Closed", "Complete the Shibuya Jail (the Cage of Lust)."],
        ["Cage of Vanity Conquered", "Complete the Sendai Jail (the Cage of Vanity)."],
        ["Cage of Wrath Collapsed", "Complete the Kyoto Jail (the Cage of Wrath)."],
        ["Death Defied", "Defeated the Reaper."],
        ["Eternal Bonds", "Maxed out all BOND skill levels."],
        ["Eye for Talent", "Spent Persona Points to strengthen a Persona's stats."],
        ["Farewell to the Past", "Wolf awakens his Persona."],
        ["Fist of Justice", "Obtained all Master Arts for Queen."],
        ["Flame Dancer", "Obtained all Master Arts for Panther."],
        ["Gentleman Thief", "Obtained all Master Arts for Mona."],
        ["Humanity's Companion", "Complete the Jail of the Abyss."],
        ["Impulse Buyer", "Bought something during a limited time sale."],
        ["It's Showtime!", "Activated Showtime."],
        ["Item Sweeper", "Obtained a total 200 items from the Jails."],
        ["Jolly Roger", "Obtained all Master Arts for Skull."],
        ["Knife in the Dark", "Performed 50 ambushes."],
        ["Know Your Enemy", "Hit the enemy's weakness 300 times. "],
        ["Mask Connoisseur", "Completed the Inmate Registry."],
        ["Master Chef", "Cooked 12 types of food."],
        ["Master Thieves", "Obtained all Master Arts for all characters."],
        ["No Looking Back", "Reach the game's ending."],
        ["Peerless Blade", "Obtained all Master Arts for Fox."],
        ["Phantom Striker", "Defeated 200 enemies with a phantom dash."],
        ["Repentant Fang", "Obtained all Master Arts for Wolf."],
        ["Seeker of Power", "Used Incense."],
        ["Short Order Cook", "Cooked food for the first time."],
        ["Sophisticated Lady", "Obtained all Master Arts for Noir."],
        ["Technological Marvel", "Obtained all Master Arts for Sophie."],
        ["The Most Daring of All", "Defeated all Dire Shadows."],
        ["Those Who Heed the Call", "Completed 50 requests."],
        ["Treasure Hunter", "Opened 50 treasure chests."],
        ["True Phantom Thief", "Earned all Achievements."],
        ["Ultimate Trump Card", "Obtained all Master Arts for Joker."],
        ["Unshakeable Teamwork", "Performed an All-Out Attack 150 times."],
        ["Walk Your Own Path", "Complete the Tree of Knowledge."],
        ["What are Friends For?", "Cleared all special requests from the Phantom Thieves."],
        ["Who Dares Wins", "Defeated a Dire Shadow."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
