import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dungeon-of-the-endless.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 249050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dungeon-of-the-endless");

test("getPlannerData('dungeon-of-the-endless') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for dungeon-of-the-endless");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Dungeon of the ENDLESS achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Dungeon of the ENDLESS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Dungeon of the ENDLESS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Basic Training", "Win a game with the Escape Pod."],
        ["Bookworm", "Win a game with the Library Pod."],
        ["Champions' League", "Win a game with each hero."],
        ["Dexterous", "Kill each type of mob 50 times."],
        ["Dust Hoarder", "Never lose Dust in a winning game."],
        ["Elevator Song", "After bringing the crystal to the exit, defend the elevator room for a full minute."],
        ["Endless Day", "On this day, Endless technology lights up and strange things appear..."],
        ["Endless Mining", "Reach the 24th floor with the Drill Pod."],
        ["Everybody Goes Home", "Never have a hero killed in a winning game."],
        ["Grab 'Em All", "Tamed all of the monsters, across any number of playthroughs."],
        ["Graduated Med School", "Win a game with the Infirmary Pod."],
        ["Guns 'n Glory", "Win a game with the Armory Pod."],
        ["HR Boss", "Own 4 heroes in the team for the first time."],
        ["Hurnacide", "Kill each type of Hurnas mobs 50 times."],
        ["I Could Quit If I Wanted To", "Open 10 000 doors."],
        ["Maxed Out", "Level up a hero to level 15 for the first time."],
        ["Medpack Addict", "Spend 1 000 Food by healing heroes in a single game."],
        ["Members Only", "Win a game with the Escape Pod without recruiting additional heroes."],
        ["Mr Cleaner", "Win a game with the Sanitary Pod."],
        ["Onward and Upward", "Complete the first floor for the first time in a multiplayer game."],
        ["Out of the Cold", "Win a game with the Refreezerator Pod."],
        ["Real Heroes Don't Pause", "Never use pause in a winning game."],
        ["Rocket Scientist", "Research all the modules (lvl 4)."],
        ["Science Fair Winner", "Research all the modules (lvl 1) in a winning game."],
        ["So much for the mission", "Win a game with all of the members of the Rescue Team."],
        ["Soiled with glue", "Win a game with the Organic Pod."],
        ["Team Builder", "Unlock a hero for the first time."],
        ["The Good, the Bad and the Ugly", "Escape the dungeon with a Guard, a Prisoner and a Native as your team."],
        ["The Other Great Escape", "Win a multiplayer game."],
        ["Too Much Is Not Enough", "Build 50 modules in a single floor."],
        ["Waste Not Want Not", "Stock 300 cumulated FIS."],
        ["What's Behind Every Door?", "Open each door in each floor in a winning game."],
        ["Yearbook Editor", "Complete the Album."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
