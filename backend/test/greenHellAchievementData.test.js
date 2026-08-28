import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/green-hell.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 815370 (fetched through this app's own services/steamApi.js).
// 61 of 68 ship a real, official Steam description, quoted
// verbatim below. The 7 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against each game's wiki plus community 100% guides, and kept
// spoiler-light. difficulty/estimatedTime/missable remain curatorial.
const game = getPlannerData("green-hell");

test("getPlannerData('green-hell') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for green-hell");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Green Hell achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Green Hell achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 61 officially-described Green Hell achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACH_AYAHUASKA",
        "ACH_BAD_ENDING",
        "ACH_GOOD_ENDING",
        "ACH_WILLSON",
        "ACH_FIND_STORYCAVE",
        "ACH_SANITY_TRIBE",
        "ACH_CURE",
    ]);

    assert.strictEqual(hiddenApinames.size, 7, "sanity check - Green Hell has 7 hidden achievements");

    const officialAchievements = [
        ["A new friend", "Put an animal into Animal Pen"],
        ["Are we there yet?", "Reach the Yabahuaca village"],
        ["Babysitter", "Return 9 kids to safety"],
        ["Cage opener", "Free 9 Tribe Women"],
        ["Cartographer", "Unlock 60 places on the map"],
        ["Caveman", "Craft your first tool"],
        ["Circle of Life", "Breed an animal"],
        ["Cleaning volunteer", "Burn 10 Toxic Waste Piles"],
        ["Do you want to play with a snowman?", "Find a snowman package in 3 different locations"],
        ["Emotional support", "Pet an animal"],
        ["Fishing in troubled waters", "Help 5 Tribe Fishermen"],
        ["Fresh Water", "Drink safe water"],
        ["Gardener", "Cultivate 12 different plants"],
        ["Globetrotter", "Travel 64 km"],
        ["Going back home", "Make tortoise soup in it's shell"],
        ["Got to catch them all", "Experience 12 unique diseases and wounds"],
        ["Gotcha!", "Catch 9 aquatic animals"],
        ["Greedy", "Complete Story mode on any difficulty with gold sack in backpack"],
        ["Green Hell", "Finish the game on Green Hell difficulty level"],
        ["Habbacu Friend", "Gain 800 trust of the Habbacu tribe"],
        ["Handyman", "Rebuild 10 Tribe Totems"],
        ["Home Sweet Home", "Build your first shelter"],
        ["I don't need to sleep", "Get 5 stacks of insomnia"],
        ["I made fire!", "Start a fire"],
        ["I made it", "Survive 10 days on King of the Jungle difficulty or higher"],
        ["I'm not afraid of any work", "Complete 7 Challenges"],
        ["I'm saved", "Save your game in a shelter"],
        ["Improvise, adapt, survive", "Let maggots eat your infected wound"],
        ["Iron Man", "Create and wear a full metal armor set"],
        ["Keeper of the flame", "Keep a single fire burning for over 5 days on Welcome to the jungle difficulty or higher"],
        ["King of the jungle", "Hunt a Rattlesnake, Jaguar, Puma, Caiman and 3 types of arachnids"],
        ["Leeches, leeches everywhere", "Remove 50 leeches from your body"],
        ["Librarian", "Read 50 collectibles"],
        ["Making progress", "Reach Max at any skill"],
        ["Map Collector", "Find 5 maps"],
        ["Molineria-man", "Heal a Tribe Member"],
        ["Mr... I don't feel so good", "At the same time get leeches, worm, rash, fever, poison, food poisoning, parasites, insomnia, dirt and any wound"],
        ["Mu'agi Friend", "Gain 800 trust of the Mu'agi tribe"],
        ["Oyohua Habbacu", "Discover the Habbacu Village"],
        ["Oyohua Mu'agi", "Discover the Mu'agi Village"],
        ["Oyohua Un'garaca", "Discover the Un'garaca Village"],
        ["Pacifist", "Survive 10 days on King of the Jungle difficulty or higher without killing animals, humans, destroying bee nests and interacting with traps"],
        ["Pyromaniac", "Unlock 4 fire starting tools"],
        ["Rest in peace", "Burn 10 Tribe Members' corpses"],
        ["Self-defense", "Kill a tribesman"],
        ["Tastes like chicken...", "Eat human meat"],
        ["Thats the spirit!", "Complete all Spirits of Amazonia achievements"],
        ["The first step to greatness", "Die"],
        ["The Legends of Habbacu", "Complete all Habbacu Legends"],
        ["The Legends of Mu'agi", "Complete all Mu'agi Legends"],
        ["The Legends of Un'garaca", "Complete all Un'garaca Legends"],
        ["The Ritual of Habbacu", "Complete the Habbacu Trial"],
        ["The Ritual of Mu'agi", "Complete the Mu'agi Trial"],
        ["The Ritual of Un'garaca", "Complete the Un'garaca Trial"],
        ["This is how it began", "Complete the Spirits of Amazonia story"],
        ["This is Jake Higgins...", "Report back to base"],
        ["Un'garaca Friend", "Gain 800 trust of the Un'garaca tribe"],
        ["Vegan!", "Survive 25 days solely on mushroom and plant-based food on Welcome to the Jungle difficulty or higher"],
        ["Welcome to the jungle", "Survive 1 night in the jungle"],
        ["Work hard, play hard", "Complete the Yabahuaca Trial"],
        ["You are not prepared", "Finish the tutorial"],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 7 hidden Green Hell achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_AYAHUASKA", "Soul Vine"],
        ["ACH_BAD_ENDING", "It's all over, again"],
        ["ACH_GOOD_ENDING", "Just, wait for me…"],
        ["ACH_WILLSON", "Casted Far Away"],
        ["ACH_FIND_STORYCAVE", "It's all their fault"],
        ["ACH_SANITY_TRIBE", "Am I losing it?"],
        ["ACH_CURE", "I have it!"],
    ];

    assert.strictEqual(names.length, 7, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
