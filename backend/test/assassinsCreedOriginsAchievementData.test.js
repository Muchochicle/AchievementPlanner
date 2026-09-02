import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-origins.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 582160 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("assassins-creed-origins");

test("getPlannerData('assassins-creed-origins') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-origins");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Assassin's Creed Origins achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Assassin's Creed Origins achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Assassin's Creed Origins achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Almost There", "Complete the main quest 'The Final Weighing'."],
        ["Archeologist", "Complete all tours in the Daily Life category"],
        ["Archer of the Month", "Headshot kill an enemy with the bow while in the air."],
        ["Ben-Hur", "Win the first Hippodrome tournament."],
        ["BOOM!", "Kill 30 enemies by shooting a fire arrow at oil jars."],
        ["Circle of Life", "Feed a predator with a corpse."],
        ["Dark Horse", "Acquire Eternal Maw for use outside the Afterlifes (The Curse of the Pharaohs)"],
        ["Defy Authority", "Defeat a Phylakes."],
        ["Elementary, My Dear Bayek", "Solve a papyrus mystery."],
        ["Fatality!", "Finish an arena boss with an Overpower Attack."],
        ["First Steps", "Complete the Prologue."],
        ["First Visit", "Complete one tour"],
        ["For Those About to Die…", "Complete all arena events in the Krokodilopolis Arena."],
        ["Free as a Bird", "Use Senu the eagle for a total of 30 minutes."],
        ["Handy Man", "Craft 20 items."],
        ["Higher Power", "Reach level 55 (The Curse of the Pharaohs)"],
        ["I Can See My House From Here!", "Reach the \"Top of the World\" in the Black Desert territory."],
        ["I Know My Land", "Defog the whole map."],
        ["I'm a Legend", "Be equipped with only Legendary equipment."],
        ["I'm Done Learning", "Activate a Master ability."],
        ["I'm Just Getting Started", "Complete the main quest 'Aya'."],
        ["Lift the Curse", "Defeat Tutankhamun in the Duat near the end of the story (The Curse of the Pharaohs DLC)."],
        ["Master Diver", "Complete 15 underwater locations."],
        ["Namaste", "Use the Dawn & Dusk ability to fast-forward time 30 times."],
        ["New Recruits", "Complete The Hidden Ones DLC side quests 'Rise of Shaqilat' and 'Shadows of the Scarab'."],
        ["Old Habits", "Complete all locations."],
        ["Overdesign", "Kill a poisoned level 35+ enemy with the torch in less than 30 seconds."],
        ["Overheating", "Witness raining bugs in the desert."],
        ["Polymorph", "Complete tours with at least 5 different characters"],
        ["Prison Break", "Free 20 Rebels (The Hidden Ones)"],
        ["Project Comet", "Craft an upgrade using Shards of a Star (The Curse of the Pharaohs)"],
        ["Pyromaniac", "Kill a Mummy by setting it on fire (The Curse of the Pharaohs)"],
        ["Raider of the Lost Tomb", "Complete a tomb."],
        ["Reduce, Reuse, Recycle", "Sell 100 trinkets at once."],
        ["Reporter", "Take 1 photo in 5 different territories."],
        ["Rider's Licence", "Use all types of vehicle at least once."],
        ["Road Rage", "Destroy an opponent in a Hippodrome race."],
        ["Roooaaarrrrr!", "Tame a lion."],
        ["Run For Your Life!", "Run away from three fights with a hippopotamus."],
        ["Set-up Date", "Bring a tamed lion to a crocodile."],
        ["Seven Farmers", "Complete the side quest 'Seven Farmers' in Uab Nome."],
        ["Shadow of Egypt", "Kill 10 enemies in a row without being detected."],
        ["Slasher", "Kill 3 enemies with one hit."],
        ["Smash!", "Destroy 100 breakable objects."],
        ["Stargazer", "Complete all 12 Stone Circles."],
        ["Sting in the Tale", "Complete the 5 Serqet locations (The Curse of the Pharaohs)"],
        ["Surgical Strikes", "Assassinate the Order targets Tacito, Ptahmose and Ampelius (The Hidden Ones DLC)."],
        ["Team Play", "Kill an enemy with a headshot while they are being harassed by Senu (The Hidden Ones)"],
        ["The Arrow Whisperer", "Kill an enemy with the predator bow from more than 60 meters while controlling the arrow."],
        ["The Crocodile", "Complete the main quest 'The Crocodile's Jaws'."],
        ["The End", "Complete the final main quest, 'The Birth of the Creed'."],
        ["The Festival", "Complete the side quest 'Lady of Slaughter'."],
        ["The Greater Good", "Complete the main quest 'The Greater Good' (The Hidden Ones DLC)."],
        ["The Harder They Fall", "Defeat the war elephants Qetesh & Resheph."],
        ["The Hyena", "Complete the main quest 'The Hyena'."],
        ["The Lizard", "Complete the main quest 'The Lizard's Face'."],
        ["The Scarab", "Complete the main quest 'The Scarab's Lies'."],
        ["The Sea", "Complete the main quest 'Pompeius Magnus'."],
        ["The Siege", "Complete the main quest 'The Aftermath'."],
        ["Triathlete", "Swim 1,500m, ride 40km on a mount and run 10km on foot (cumulative)."],
        ["Wake Up!", "Complete the main-quest dream sequence."],
        ["Walls of the Ruler", "Complete the Walls-of-the-Ruler citadel (The Hidden Ones)"],
        ["What Time is It?", "Perform a leap of faith from Arsinoe's sundial obelisk between 10 am and noon (The Hidden Ones)"],
        ["Where's My Black Flag?", "Defeat eight ship captains in naval combat."],
        ["Words of Wisdom", "Complete all hermit locations."],
        ["You still need 8880...", "Reach level 20."],
        ["Zip it Off", "Perform 3 Assassinations from a zipline (The Hidden Ones)"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
