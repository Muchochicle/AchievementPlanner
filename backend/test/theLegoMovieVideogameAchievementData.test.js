import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-lego-movie-videogame.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 267530 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-lego-movie-videogame");

test("getPlannerData('the-lego-movie-videogame') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-lego-movie-videogame");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every The LEGO Movie - Videogame achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every The LEGO Movie - Videogame achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 The LEGO Movie - Videogame achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A House Divided", "Played as Abraham Lincoln and Lady Liberty"],
        ["Ah! The Kragle!", "Kragelized 10 people with the Kragle Gun"],
        ["Always Read The Instructions!", "Completed all Instruction Builds in Story Mode"],
        ["Are You A DJ?", "Completed Level 3 - Flatbush Gulch"],
        ["Ayayaya!", "Defeated 20 Enemies As Sheriff Not-A-Robot"],
        ["Build Things Only You Can Build", "Collected all Golden Manuals"],
        ["Building Bad", "Attempted a Master Build-It with a Non-Master Builder"],
        ["Business Business Business", "Earned 1,000,000,000 studs"],
        ["Cover Your Butt!", "Completed Prologue - The Prophecy"],
        ["Darn Darn Darn Darny Darn!", "Completed Level 2 - Escape From Bricksburg"],
        ["END OF THE LINE!", "Shot Emmet with Robo Skeleton."],
        ["Every Man For Himself!", "Completed Level 7 - Attack on Cloud Cuckoo Land"],
        ["Everything Is Awesome!", "Achieved 100% Completion"],
        ["Firestarter", "Made a Fire"],
        ["First Try!", "Completed an Instruction Build without losing any studs"],
        ["Found Your Pants, Series Is Over", "Completed Level 12 - Broadcast News"],
        ["Freeze, Turkeys!", "Completed Level 4 - Flatbush Rooftops"],
        ["Glues Your Daddy?", "Used the Kragle Gun to shoot Ma and Pa Bad Cop in the Relic Room."],
        ["Grrrg!", "Smashed a chair as Bad Cop"],
        ["Honey, Where Are My Pants?", "Collected all pairs of Pants (Single Player)"],
        ["I Am A Master Builder!", "Completed Level 13 - Back From Reality"],
        ["I Am The Computer", "Collected all studs in a hacking mini-game"],
        ["I Could Sing This Song For Hours", "Scored 21 awesome dance moves in the Construction Site dance mini game."],
        ["I Super Hate You Right Now", "Played as Superman and Green Lantern"],
        ["Including, But Not Limited To", "Purchased All Master Builders"],
        ["It's Just Business", "Used Lord Business' Legs Machine"],
        ["Lets Get Craaazzzyyyy", "Completed Level 1 - Bricksburg Construction"],
        ["Midas Touch", "Completed all Golden Instruction Builds"],
        ["No Frowny Faces", "Completed Level 6 - Welcome to Cloud Cuckoo Land"],
        ["No Way, This Is My Jam.", "Scored 21 awesome dance moves in the Kragelizer dance mini game."],
        ["Pow Pow! Bullet Bullet! Gun!", "Defeated 30 Enemies as Emmet Cowboy"],
        ["Really hard? This be Impossible!", "Destroyed 50 Enemies as Metal Beard"],
        ["Release Every Micro Manager!", "Completed Level 14 - Bricksburg Under Attack"],
        ["Rest In Pieces", "Completed Level 5 - Escape From Flatbush"],
        ["See You Later Alligator", "Completed Level 11 - Put The Thing On The Thing"],
        ["SPACESHIP SPACESHIP!", "Completed all Master Builds in Server Room as Benny"],
        ["The Opposite Of Happiness", "Killed 20 Enemies as Rage Unikitty"],
        ["The Prophecy, I Made It Up!", "Switched from Vitruvius to Ghost Vitruvius"],
        ["The Special People In Your Life", "Purchased All Characters"],
        ["This Bedoubled Land Couch", "Completed Level 10 - Infiltrate The Octan Tower"],
        ["To The Invisible Jet!", "Found and destroyed the Invisible Jet"],
        ["Too Bad!", "Switched from Good Cop (Scribble Face) to Bad Cop."],
        ["Wear Clothes… Check!", "Customised your character."],
        ["Welcome To Bricksburg", "Collected all of the Red Bricks (Single Player)"],
        ["Why Are My Pants Cold and Wet?", "Completed Level 9 - The Depths"],
        ["You Are The Special", "Achieved The Special in every level (Single Player)"],
        ["You Can Still Change Everything", "Completed Level 15 - The Final Showdown"],
        ["You Can't Build 'Em All At Once", "Completed Level 8 - Escape from Cloud Cuckoo Land"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
