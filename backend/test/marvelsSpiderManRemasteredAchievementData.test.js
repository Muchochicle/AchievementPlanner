import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvels-spider-man-remastered.json - 78 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1817070 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("marvels-spider-man-remastered");

test("getPlannerData('marvels-spider-man-remastered') returns real planner data with 78 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvels-spider-man-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 78);

});

test("every Marvel's Spider-Man Remastered achievement has a unique id from 1 to 78 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 78 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 78);
    assert.strictEqual(new Set(apinames).size, 78);

});

test("every Marvel's Spider-Man Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 78 Marvel's Spider-Man Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bit of a Fixer-Upper", "Complete all optional projects in the lab (the circuit and spectrograph puzzles)."],
        ["A Suit For All Seasons", "Purchase all Suits"],
        ["Ace the Base", "Complete all objectives in a base"],
        ["All the King's Men", "Take down every Fisk Hideout."],
        ["Amazing Coverage", "All Surveillance Towers activated"],
        ["And Stay Down!", "Complete a level 1 Combat Benchmark"],
        ["Arachnophobia", "Perform 75 Stealth Takedowns"],
        ["Back in the Slammer", "Take down every Prisoner Camp."],
        ["Backpacker", "Collect all Backpacks"],
        ["Born to Ride", "Ride the Subway 5 times"],
        ["Bye Felicia", "Complete the 'Follow the Money' mission (The Heist DLC)."],
        ["Cat Prints", "Track down Black Cat"],
        ["Cat's Out of the Bag", "Collect a Black Cat collectible"],
        ["Challenge Finder", "Complete every Taskmaster Challenge in the city at least once."],
        ["Crossing the Thin Blue Line", "Complete the 'Lockup' mission (Turf Wars DLC)."],
        ["Demons Emerge", "Complete Act 1."],
        ["Disorganised Crime", "Complete all Crimes in a district"],
        ["End Game", "Complete Act 3."],
        ["Fists of Fury", "Get Spectacular or better in a Taskmaster Combat Challenge."],
        ["Frenemies", "Complete the 'Old Friends' mission (Silver Lining DLC)."],
        ["Friendly Neighbourhood Spider-Man", "Complete all Side Missions"],
        ["Full Arsenal", "Max out all Gadgets"],
        ["Grinding All the Way", "Max out one Benchmark type"],
        ["Grounded", "Defeat Electro and Vulture."],
        ["Here Kitty-Kitty", "Complete the Black Cat chase (The Heist DLC)."],
        ["Hero for Higher", "Perch atop Avengers Tower"],
        ["Hug It Out", "Knock together 10 pairs of enemies with Trip Mines."],
        ["I Heart Manhattan", "100% complete all districts"],
        ["Inner Sanctuary", "Take down every Demon Warehouse."],
        ["King of Swing", "Complete a level 1 Traversal Benchmark"],
        ["Knocking Down Kingpin", "Defeat Wilson Fisk (Kingpin)."],
        ["Lost and Found", "Collect 5 Backpacks"],
        ["Master of Masters", "Defeat Taskmaster."],
        ["Master's Education", "Achieve Ultimate on a Taskmaster Challenge"],
        ["Mercenary Tactics", "Take down every Sable Outpost."],
        ["Neighbourhood Watch", "Complete all Faction Crimes in a district"],
        ["Ninja", "Get Spectacular or better in a Taskmaster Stealth Challenge."],
        ["One More Time", "Complete a New Game+ playthrough"],
        ["Overdrive", "Complete 10 Vehicle Takedowns"],
        ["Pigeon Hunter", "Catch all of Howard's pigeons."],
        ["Power and Responsibility", "Complete a playthrough on Ultimate difficulty"],
        ["Prohibition", "Take down every Hammerhead Front (Turf Wars DLC)."],
        ["Pulling the Trigger", "Complete the 'Blindsided' mission (Turf Wars DLC)."],
        ["R&D", "Complete all Research Stations"],
        ["Schooled", "Complete all of the Corrupted Student missions."],
        ["Science FTW!", "Craft 15 Upgrades"],
        ["Screwballed", "Get Spectacular or better in all Screwball Challenges"],
        ["Screwy", "Get Spectacular or better in all Screwball Challenges"],
        ["Seduced by the City", "100% Complete CTNS: The Heist"],
        ["Shock and Awe", "Defeat Shocker."],
        ["Short Fuse", "Get Spectacular or better in a Taskmaster Bomb Challenge."],
        ["Sightseeing", "Photograph all Landmarks on the Map"],
        ["Snappy Dresser", "Wear 5 new Spider-Suits."],
        ["So Many Hits...", "Achieve a combo of 100"],
        ["Spider-Man About Town", "Greet 10 citizens"],
        ["Spider-Sensible", "Perfect Dodge 10 attacks"],
        ["Spy Hunter", "Get Spectacular or better in a Taskmaster Drone Challenge."],
        ["Staying Positive", "Defeat Martin Li (Mister Negative)."],
        ["Steel Skull, Glass Jaw", "Complete the 'Bring the Hammer Down' mission (Turf Wars DLC)."],
        ["Sticky and Tricky", "Chain 4 unique tricks before landing"],
        ["Sting and Smash", "Defeat Scorpion and Rhino."],
        ["Superior Spider-Man", "Unlock all Skills"],
        ["Terminated", "Complete the 'One Plus One Equals Win' mission (Silver Lining DLC)."],
        ["The Cat Came Back", "Complete the 'The Maria' mission (The Heist DLC)."],
        ["The City is My Family", "100% complete CTNS: Turf Wars"],
        ["The City Sleeps", "100% Complete CTNS: Silver Lining"],
        ["The Gang War", "Complete all Crimes in a district"],
        ["The Long Con", "Complete the 'Like a Fiddle' mission (The Heist DLC)."],
        ["The Scientific Method", "Craft your first Upgrade"],
        ["The Six Assemble", "Complete Act 2."],
        ["The Untouchable Spider-Man", "Complete any Enemy Base without taking damage"],
        ["The Wages of War", "Complete the 'Aiding a Human' mission (Silver Lining DLC)."],
        ["Tombstone Takedown", "Defeat Tombstone."],
        ["Turning the Screw", "Get Spectacular or better in all Screwball Challenges"],
        ["Unacceptable", "Complete the \"Scales of Justice\" mission"],
        ["Unplugged", "Complete the Screwball chase (Silver Lining DLC)."],
        ["Wing It", "Scare 500 groups of pigeons while web-swinging across the city rooftops."],
        ["With Great Power...", "Pay respects at Ben Parker's grave (in the graveyard at the north-west corner of the map)."],
    ];

    assert.strictEqual(officialAchievements.length, 78, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
