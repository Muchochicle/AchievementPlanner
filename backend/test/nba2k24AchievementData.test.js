import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nba-2k24.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2338770 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nba-2k24");

test("getPlannerData('nba-2k24') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for nba-2k24");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every NBA 2K24 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every NBA 2K24 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 NBA 2K24 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Taste Of Their Own Medicine", "Commit 5 fouls while defeating the ‘88-'89 Detroit Pistons Virtual Rivals team"],
        ["All Rise", "Record a triple-double in a MyCAREER NBA game"],
        ["All-Star", "Win an NBA All-Star game"],
        ["Anything You Can Do", "Assist or finish 5 alley-oops while defeating the ‘13-'14 Los Angeles Clippers Virtual Rivals team"],
        ["Bartering Up", "Make a trade in MyGM"],
        ["Best Friends Forever", "Get 3 assists in a MyCAREER NBA game"],
        ["Block Party", "Get 5 blocks in a MyCAREER NBA game"],
        ["Board Man Gets Paid", "Get 5 defensive rebounds in a MyCAREER NBA game"],
        ["Cap Space", "Win a game in Salary Cap mode in MyTEAM"],
        ["Clutch", "Score 30 points in a MyCAREER NBA game"],
        ["Collector", "Complete any Collection in MyTEAM"],
        ["Common Dominator", "Complete Merry Misfit’s Virtual Rivals questline"],
        ["Direct To You", "Buy a Card from the Player Market in MyTEAM"],
        ["Double Trouble", "Record a double-double in a MyCAREER NBA game"],
        ["Enhanced", "Add or improve a Badge and apply a Shoe Card to the same Graded Player in MyTEAM"],
        ["Everybody Makes The First Jump", "Complete the Virtual Rivals tutorial"],
        ["Five Finger Discount", "Get 3 steals in a MyCAREER NBA game"],
        ["Follow Me On...", "Get 1 million fans in MyCAREER"],
        ["Full Mamba", "Earn 21 stars in Mamba Moments"],
        ["Go Ahead And Jump", "Create a jump shot in MyCAREER"],
        ["Got'em", "In MyTEAM, create a Diamond Shoe in the MT Show Lab"],
        ["Green Light", "Make 1 green release shot in a MyCAREER NBA game"],
        ["In It To Win It", "Go to the playoffs in MyLEAGUE"],
        ["Jigsaw", "Complete a Shattered Prize in MyTEAM"],
        ["Make A Wish", "Pick up the Daily Prize"],
        ["Mini Mamba", "Earn 12 stars in Mamba Moments"],
        ["Must Go Faster!", "Complete Siegbert’s Virtual Rivals questline"],
        ["MyCHAMPION!", "Win a championship in MyLEAGUE"],
        ["NBA Historian", "Complete Tomás’s Virtual Rivals questline"],
        ["New With Tags", "In MyTEAM, apply a Diamond Shoe Card to any Player Card"],
        ["Not Too Shabby", "Score 10 points in a MyCAREER NBA game"],
        ["Omnipotent", "Play a game in MyGM"],
        ["On My Way", "Win a PLAY NOW ONLINE game"],
        ["Repping Humans Over AI", "Score every point for your team while winning a Virtual Rivals match"],
        ["Scoreboard Queens", "Score 90 points as a team in a WNBA Season game"],
        ["Second Opinion", "Regrade an already graded MyTEAM card a second time"],
        ["She's Got Game", "Win a PLAY WNBA game"],
        ["Social Distancer", "Equip a vehicle in MyCAREER"],
        ["Super Shiny", "Play a MyTEAM game where your complete 13-man lineup is all Holo Cards"],
        ["Superstar", "Win a QUICK PLAY game"],
        ["Theater Hopping", "Get 3 steals while defeating the Three PG13s Virtual Rivals team"],
        ["They’re On To You", "Complete Janitor’s Virtual Rivals questline"],
        ["Thunderstruck", "Beat a Team in Domination by 73 points in MyTEAM"],
        ["Timing Is Everything", "Make 10 green release shots in a MyCAREER NBA game"],
        ["Tour Of The NBA", "Complete all divisional Virtual Rivals questlines"],
        ["Tre' Bomber", "Make 5 three-pointers in a MyCAREER NBA game"],
        ["True Gamer", "Earn a Prize from each mini game in MyTEAM"],
        ["Virtual Rivals Completionist", "Defeat every Virtual Rivals team"],
        ["Yelling At Clouds", "Complete Roger Roger’s Virtual Rivals questline"],
        ["You're A Star", "Win an NBA TODAY game"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
