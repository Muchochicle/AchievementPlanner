import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mafia-definitive-edition.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1030840 (fetched through this app's own services/steamApi.js).
// 42 of 43 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mafia-definitive-edition");

test("getPlannerData('mafia-definitive-edition') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for mafia-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Mafia: Definitive Edition achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Mafia: Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 officially-described Mafia: Definitive Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_41",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Mafia: Definitive Edition has 1 hidden achievement");

    const officialAchievements = [
        ["A Chase through the Night", "Completed \"An Offer You Can't Refuse\""],
        ["A Life of Crime", "Completed the game on Easy, Medium, or Hard difficulty"],
        ["A View from the Top", "Completed \"Election Campaign\""],
        ["Best Laid Plans", "Completed \"Great Deal\""],
        ["Blood on Beech Hill", "Completed \"Visiting Rich People\""],
        ["Car Enthusiast", "Lockpicked 5 cars on the streets of Lost Heaven and environs"],
        ["Car Thief Number One", "Found all of the hidden cars"],
        ["Comic Violence", "Found a copy of Gangsters Monthly"],
        ["Death on the Water", "Completed \"Happy Birthday\""],
        ["Family History", "Found a 'Gangsters of the United States' cigarette card"],
        ["Friends and Family", "Completed \"The Death of Art\""],
        ["Full Set", "Found all 'Gangsters of the United States' cigarette cards"],
        ["Gangs of Lost Heaven", "Completed \"Ordinary Routine\""],
        ["Good Night for a Walk Anyways", "Completed \"Sarah\""],
        ["Heat from the Cops", "Lost the cops after accruing a five star police chase"],
        ["Into the Lion's Den", "Completed \"Just For Relaxation\""],
        ["Lending Library", "Found all Pulp Magazines"],
        ["Lined Pockets", "Paid a fine to the Lost Heaven Police Department"],
        ["Made Man", "Completed the game on Classic difficulty"],
        ["Motor Museum", "Collected 30 vehicles in the Garage"],
        ["Murder in the House of God", "Completed \"The Saint and the Sinner\""],
        ["Mystery Fox Discovered", "Found a Mystery Fox"],
        ["Mystery Fox Domination", "Found all Mystery Foxes"],
        ["Neighborhood Hero", "Completed \"Fair Play\""],
        ["Not Taken In", "Resisted arrest by the Lost Heaven Police Department"],
        ["On the Trail", "Found a hidden car"],
        ["Picture Book Connoisseur", "Found all copies of Gangsters Monthly"],
        ["Pulp Fiction", "Found a Pulp Magazine"],
        ["Quite the Collection", "Collected 15 vehicles in the Garage"],
        ["Rat in the House", "Completed \"Omerta\""],
        ["Storm Cloud over Chinatown", "Completed \"Better Get Used to It\""],
        ["Stunt Rider", "Performed a wheelie for 3 seconds"],
        ["Supercharged", "Won the race"],
        ["That Last Big Score", "Completed \"Moonlighting\""],
        ["That Motor can Move", "Reached 50mph while driving the Bolt Ace"],
        ["The Back Streets of Little Italy", "Completed \"Running Man\""],
        ["The Day the War Began", "Completed \"Bon Appétit\""],
        ["The Day the War Ended", "Completed \"Crème de la Crème\""],
        ["The Way this City Works", "Completed \"Molotov Party\""],
        ["The Whole Story", "Completed the Collection"],
        ["When God Stops Smiling", "Completed \"You Lucky ...\""],
        ["Your Canuck Cousins", "Completed \"A Trip to the Country\""],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Mafia: Definitive Edition achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_41", "Not Classy"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
