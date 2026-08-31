import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/60-seconds.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 368360 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("60-seconds");

test("getPlannerData('60-seconds') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for 60-seconds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every 60 Seconds! achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every 60 Seconds! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 60 Seconds! achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2-1-6", "Collect 10 water bottles from your house."],
        ["A gift", "Receive a gift."],
        ["A New Hope", "Ally with other wastelanders."],
        ["All thumbs", "Break or use something in your fallout shelter."],
        ["Atomic drill", "Complete the government endorsed fallout drill."],
        ["Be Prepared", "Don't forget to stock your shelter."],
        ["Bughunter", "Show those mutant roaches who is in charge."],
        ["Cat Lady", "Learn to serve and obey the new masters."],
        ["Challenger", "Complete one challenge."],
        ["Cuckoo's nest", "Turn your fallout shelter into a madhouse."],
        ["Danger zone", "Break or use everything possible in your shelter."],
        ["Dawkins Residence", "Find Deedee's apartment."],
        ["Dead Hand", "Win a game in every mode on Tsar Bomba difficulty."],
        ["Disco Roach", "Make them dance."],
        ["Duck and cover!", "Survival is overrated. Stay to see the fireworks!"],
        ["Enigma", "Reconnect with old friends."],
        ["Enola Gay", "Win a game in every mode on Little Boy difficulty."],
        ["Fair Exchange", "Perform 30 successful trades."],
        ["Family guy", "Rescue the whole family."],
        ["Feline Domination", "Look at me. I'm the captain, meow."],
        ["Friend in need", "Find a new friend."],
        ["Girl Power", "Live through the nuclear blast as Dolores."],
        ["Gotta get 'em all", "Scavenge each item at least once."],
        ["Holidays!", "Complete the Holidays! challenge."],
        ["Home, sweet home", "Get to the shelter before the bomb hits."],
        ["I will survive!", "Last for 10 days in your fallout shelter."],
        ["Konrad style!", "Beat the fallout shelter survival record."],
        ["Last man standing", "Stay alive in your fallout shelter for 40 days."],
        ["Liberation", "Rescue someone from the bandits."],
        ["Lumbersexual", "Trim Ted's beard the trendy way."],
        ["Mad Hatter", "Put on a stylish hat."],
        ["Manhattan Project", "Win a game in every mode on Fat Man difficulty."],
        ["Men in Black", "Find your way into the VIP bunker."],
        ["Miracle", "Listen to the voices from beyond."],
        ["Naysayer", "Always say NO and win."],
        ["New order", "Meet the local 'law-enforcement'."],
        ["New species", "Mutant!!!"],
        ["No stone unturned", "Fully explore your shelter."],
        ["Not Alone", "If you play it, they will come."],
        ["One way ticket", "Die in your fallout shelter."],
        ["Out of the Bag", "Find a new companion."],
        ["Pacifist", "Defend yourself without a weapon."],
        ["Prepper", "Survive 5 days in your fallout shelter."],
        ["Pro gamer", "In Apocalypse mode grab only what a real gamer needs."],
        ["Raining Cats and Dogs", "There can only be one."],
        ["Rescue time!", "Get rescued by the military."],
        ["Soup Can into Space", "Reach for the stars."],
        ["Souper!", "Collect 10 soup cans from your house."],
        ["Survivalist", "Stay in your fallout shelter for 20 days."],
        ["The Dark Side", "Show your evil self."],
        ["This is the end", "It's all over."],
        ["Tora! Tora! Tora!", "Ram 1337 obstacles in your house."],
        ["Unbreakable", "Defeat three bandit attacks in one game."],
        ["Unplugged", "Ram a toilet."],
        ["What goes around...", "Give and get back."],
        ["Yes Man", "Always say YES and win."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
