import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nba-2k23.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1919590 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nba-2k23");

test("getPlannerData('nba-2k23') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for nba-2k23");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every NBA 2K23 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every NBA 2K23 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 NBA 2K23 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4 For 4", "In MyTEAM, make 4 4-point shots in a single game"],
        ["All Rise", "Record a triple-double in a MyCAREER NBA game"],
        ["All-Star", "Win an NBA All-Star game"],
        ["At The Buzzer!", "Win a Clutch Time game in MyTEAM"],
        ["Badge Collector", "Earn a Leadership badge by participating in MyCAREER Flashback games"],
        ["Bartering Up", "Make a trade in MyGM"],
        ["Best Friends Forever", "Get 3 assists in a MyCAREER NBA game"],
        ["Block Party", "Get 5 blocks in a MyCAREER NBA game"],
        ["Board Man Gets Paid", "Get 5 defensive rebounds in a MyCAREER NBA game"],
        ["Clutch", "Score 30 points in a MyCAREER NBA game"],
        ["Déjà Vu", "Earn the Grand Prize in MyTEAM Unlimited Prestige."],
        ["Dirty Work", "Get more rebounds, blocks, and assists than your opponent"],
        ["Double Trouble", "Record a double-double in a MyCAREER NBA game"],
        ["Finding Treasure", "Pick up the Daily Prize"],
        ["Five Finger Discount", "Get 3 steals in a MyCAREER NBA game"],
        ["Follow Me On...", "Get 1 million fans in MyCAREER"],
        ["Go Ahead And Jump", "Create a jump shot in MyCAREER"],
        ["Green Light", "Make 1 green release shot in a MyCAREER NBA game"],
        ["In It To Win It", "Go to the playoffs in MyLEAGUE"],
        ["It's Free Real Estate", "Make 10 free throws in a MyCAREER NBA game"],
        ["Legend In The Making", "Earn 15 stars in the JORDAN CHALLENGE"],
        ["Let Doc Do His Thing", "Change your look in the Barber Shop"],
        ["Level Up", "Make it to Level 40 in a single MyTEAM Season"],
        ["Locked In!", "In MyTEAM, complete a game in a player locked position (minimum 12 minutes)"],
        ["Lottery Redux", "Draft a Diamond or better player in MyTEAM Draft"],
        ["Money Talks", "Talk to ship owner Tomas"],
        ["MyCHAMPION!", "Win a championship in MyLEAGUE"],
        ["New With Tags", "In MyTEAM, apply a Diamond Shoe Card to any Player Card"],
        ["No Contest", "Take a 20 point lead into halftime in a MyCAREER NBA game"],
        ["Not Too Shabby", "Score 10 points in a MyCAREER NBA game"],
        ["Omnipotent", "Play a game in MyGM"],
        ["On My Way", "Win a PLAY NOW ONLINE game"],
        ["Play With Me", "In MyTEAM, play a game of Triple Threat Online: Co-Op"],
        ["Popping Off", "Play a game of Mini-Basketball"],
        ["Rival Pride", "Talk to rival Sam"],
        ["Second Chance", "Get 5 offensive rebounds in a MyCAREER NBA game"],
        ["She's Got Game", "Win a PLAY WNBA game"],
        ["Slabbed", "Grade any MyTEAM Player Card"],
        ["Social Distancer", "Equip a vehicle in MyCAREER"],
        ["Squeaky Clean", "Turn the ball over 10 fewer times than your opponent in a MyCAREER game"],
        ["Superstar", "Win a QUICK PLAY game"],
        ["Threepio!", "Earn the Grand Prize in MyTEAM Unlimited League."],
        ["Timing Is Everything", "Make 10 green release shots in a MyCAREER NBA game"],
        ["Top Of The World", "Win a college championship in the MyCAREER Flashback games."],
        ["Tre' Bomber", "Make 5 three-pointers in a MyCAREER NBA game"],
        ["Turning Point", "Outscore your opponent by 10 points in a single quarter"],
        ["Wet From Three", "Make 10 three-pointers in a MyCAREER NBA game"],
        ["What's For Dinner", "Complete a full practice in the Team Practice Facility"],
        ["Yes, Your Airness", "Earn 45 stars in the JORDAN CHALLENGE"],
        ["You're A Star", "Win an NBA TODAY game"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
