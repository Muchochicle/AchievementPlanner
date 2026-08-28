import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-3.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 220240 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 44 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("far-cry-3");

test("getPlannerData('far-cry-3') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Far Cry 3 achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Far Cry 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Far Cry 3 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Aftermarket Junkie", "Buy all attachments and paint jobs for one weapon."],
        ["Archeology 101", "Gather a total of 60 relics."],
        ["Artsy Craftsy", "Craft 5 upgrades for your equipment."],
        ["Bagged and Tagged", "Complete a Path of the Hunter quest."],
        ["Dead Letters", "Gather all \"Letters of the Lost\"."],
        ["Deep Cover", "Don’t blow cover during the interrogation."],
        ["Fearless or Stupid", "Dive more than 60m (Single Player only)."],
        ["First Blood", "Escape the pirates and survive in the wilderness."],
        ["Free Fall", "Freefall more than 100m and live (Single Player only)."],
        ["Full Bars", "Activate 9 radio towers."],
        ["Fully Inked", "Earn every tattoo by learning all the skills."],
        ["Hands Off My Stoner", "Rescue your friend before he is sold as a slave."],
        ["Have I Told You?", "Discover the definition of insanity."],
        ["Heartless Pyro", "Kill 50 enemies with the flamethrower (Single Player only)."],
        ["Higher Than a Kite", "Reach the South Island alive. "],
        ["Hunter Hunted", "Lure and kill a predator."],
        ["Improper Use", "Kill an enemy with the Repair Tool (Single Player only)."],
        ["In Cold Blood", "Complete a WANTED Dead quest."],
        ["Inked Up", "Earn 5 skill tattoos."],
        ["Island Liberator", "Liberate all outposts."],
        ["Island Paparazzi", "Tag 25 enemies using the camera (Single Player only)."],
        ["Jungle Journal", "Unlock 50 entries in the Survival Guide."],
        ["Let the Trials Begin", "Beat any Trials of the Rakyat score."],
        ["Love the Boom", "Kill 4 enemies simultaneously with one explosion (Single Player only)."],
        ["Magic Mushroom", "Return to the doctor with the cave mushrooms."],
        ["Memory to Spare", "Gather all the memory cards."],
        ["Money to Burn", "Spend $5000 at the shop."],
        ["Needle Exchange", "Craft 25 syringes."],
        ["Never Saw it Coming", "Kill an enemy with a takedown from above from a glider, zipline or parachute (Single Player only)."],
        ["One of Us", "Complete the Rakyat initiation."],
        ["Poacher", "Hunt and skin a rare animal."],
        ["Poker Bully", "Win $1500 playing poker."],
        ["Poker Night", "Win the poker game."],
        ["Rebel With a Cause", "Liberate 3 outposts."],
        ["Retake Wall Street", "Rescue your friend from torture."],
        ["Road Trip", "Complete a Supply Drop quest."],
        ["Rock Always Wins", "Fully distract 25 enemies with rocks (Single Player only)."],
        ["Say Hi to the Internet", "Find the lost Hollywood star."],
        ["Taken for Granted", "Survive Vaas’s attack in the compound."],
        ["The Good Stuff", "Craft a Special syringe."],
        ["Toxophilite", "Kill a target from 70m or more with the bow (Single Player only)."],
        ["Unheard", "Liberate an outpost without triggering an alarm."],
        ["What a Trip", "Attend the final ceremony."],
        ["Worst Date Ever", "Escape the burning hotel."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
