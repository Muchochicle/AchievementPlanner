import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/atom-rpg-trudograd.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1139940 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("atom-rpg-trudograd");

test("getPlannerData('atom-rpg-trudograd') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for atom-rpg-trudograd");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every ATOM RPG Trudograd achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every ATOM RPG Trudograd achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 ATOM RPG Trudograd achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Admiral", "Congratulations! You sank all the battleships!"],
        ["Albino Bloodsucker", "You tracked and killed the albino bloodsucker."],
        ["An Old Friend", "Your car from the Central Wasteland stands in the outskirts of Trudograd."],
        ["Atomic Soda", "You bought a glass of every Atom agent favorite drink!"],
        ["Baby Eater", "Yes, you really did eat a child. Or, at least, somebody thinks that you did…"],
        ["Bronzovka", "You learned something that you shouldn't have..."],
        ["Commando", "You got Big Jug at your disposal."],
        ["Death of the Author", "If the author is writing about you, then who is writing about the author?"],
        ["Escalation of Conflict", "You turned a simple arrest into a real street battle."],
        ["Fight Club", "You became the ruling champion of the factory arena!"],
        ["Freelance Police", "You're temping as a freelance police officer."],
        ["Fresh Prince of Trudograd", "The city welcomes you!"],
        ["Goodbye ATOM", "After completing your mission you left the ATOM organization."],
        ["Goose Sacrifice", "You actively and successfully use your Luck. The goose death wasn’t in vain!"],
        ["Holy Mountain", "You died from a lethal dose of The Truth™."],
        ["Household", "You’ve built your own base."],
        ["Human Antidote", "You survived the worst poisoning of your whole Atom career."],
        ["Incompetence", "You showed a surprising lack of competence in completing a rather easy task in the city docks."],
        ["KGB Bunker", "You’ve been contacted by the eponymous KGB bunker."],
        ["Lot 49", "You opened a mysterious chest on Kolotushkin Street."],
        ["Memoirs of a Nibbler", "You listened to all the haiku of a four-legged intellectual."],
        ["Mysterious Knife", "You solved the riddle of the stalker Igor knife."],
        ["Power of Simplicity", "You had faith in your luck and stood by your words..!"],
        ["Rising Star", "You won ten games of Bombagun, playing for money."],
        ["Second Thought", "You completed the cow mission, but then decided to bring her back."],
        ["Shadow over Trudograd", "You performed the ancient ritual and met guests from the depths…"],
        ["Sick Freak", "You performed such a heinous and convoluted act that… you deserve an achievement!"],
        ["Sixth Sense", "You exorcised all the restless spectres that you met on your path."],
        ["Terrorist", "You single-handedly signed Trudograd’s death warrant."],
        ["The Great and Powerful", "You’ve met Positronium in the flesh."],
        ["Viva La Revolution", "You became a part-time revolutionary."],
        ["Walking Fortress", "You maxed-out your special armor."],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
