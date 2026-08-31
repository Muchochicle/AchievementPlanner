import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/door-kickers.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 248610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("door-kickers");

test("getPlannerData('door-kickers') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for door-kickers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Door Kickers achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Door Kickers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Door Kickers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Against the Odds", "Fully complete campaign \"Suits and Ski-Masks\""],
        ["All around capability", "Unlock all playable classes"],
        ["All hell breaks loose", "Fire a total of 10000 rounds."],
        ["Better be Adamantium", "Unlock the Shield Class"],
        ["Blind as a bat", "Hit 5 enemies with the same Flashbang."],
        ["Cell Crusher", "Fully complete campaign \"The Cell\""],
        ["Community Server", "Fully complete campaign \"A Hard Day's Work\""],
        ["Counter Terrorists Win", "Defuse 100 bombs."],
        ["Door Kicker", "Breach 400 doors."],
        ["Drug Buster", "Fully complete campaign \"Drug Bust\""],
        ["Elite Task Force", "Get two stars in every Single Mission."],
        ["Enough for a Spark", "Get 13 stars"],
        ["Enough for a Union", "Get 50 stars"],
        ["Every life matters", "Save your first hostage"],
        ["First time is easy", "Defuse your first bomb"],
        ["Hands in the air", "Arrest 100 enemies."],
        ["Hardcore", "Win a campaign in Iron Man Mode."],
        ["He can do it", "Or maybe its a She that can do it. All are welcome in the Team. Just get your first One Man Army Medal"],
        ["Hunker down!", "Have a shield unit kill three enemies without moving."],
        ["I'm doing it", "Get your first No Pause Medal"],
        ["I'm getting good", "Complete 10 missions"],
        ["I've seen it all", "Level-up a trooper to maximum level."],
        ["Just one more", "Complete 150 missions."],
        ["Keep Walking", "Walk total 10000 meters."],
        ["Lifesavers", "Complete a mission arresting 6 or more bad guys and without killing any."],
        ["Lone Wolf", "Get 30 One Man Army Medals."],
        ["Lucky guy", "Handcuff your first bad guy"],
        ["Manhunt", "Kill 1000 enemies."],
        ["No door too strong", "Unlock the Breacher class"],
        ["Now I have a machinegun", "Unlock the Assaulter class"],
        ["Persistence is key", "Get a 3 star result as an \"improved result\" on a mission"],
        ["Quick Thinker", "Get 30 No Pause Medals."],
        ["Shipboarder", "Fully complete campaign \"Terror at Sea\""],
        ["Special Weapons and Tactics", "Get one star in every Single Mission."],
        ["Strategist", "Get 30 Perfect Plan Medals."],
        ["Swift and Deadly", "Kill 10 bad guys within 5 seconds, without letting them fire a shot."],
        ["Textbook Material", "Get three stars in all Single Missions."],
        ["The Daimaju", "Have your entire squad (at least 4 troopers) killed within about two seconds of a mission starting - use a plan that leaves lightly-armoured officers exposed to enemy fire on unpause."],
        ["They can do it", "Get your first Perfect Plan Medal"],
        ["Total Luck", "Defuse a bomb with less than 1 second left."],
        ["We know it all", "Level-up your squad to maximum level."],
        ["We unlocked it all", "Unlock all equipment / weapons."],
        ["We've seen it all", "Have a squad of fully leveled up troopers."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
