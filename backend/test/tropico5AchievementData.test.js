import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tropico-5.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 245620 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tropico-5");

test("getPlannerData('tropico-5') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for tropico-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Tropico 5 achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Tropico 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Tropico 5 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["... But To Take Part", "Issue the \"Host the Olympics\" edict"],
        ["A Barrel Of Monkeys", "Earn $50 000 yearly revenue from Entertainment buildings"],
        ["A New Dawn", "Complete campaign mission 1."],
        ["Agricultural Community", "Have more than 20 Plantations, Hydroponic Farms, Factory Farms and Ranches in a single game"],
        ["Antiutopia", "Have Ministry of Information, Dungeon and 10 Security Checkpoint"],
        ["Architerissimo", "Win a multiplayer game by construction"],
        ["Back to the Past", "Complete campaign mission 3."],
        ["Big Brother", "Have 5 Police Blimps"],
        ["Booked Solid", "Have Slob, Family, Cultural, Eco and Wealthy tourists at the same time on the island"],
        ["Bureaucrat", "Issue 20 edicts in a single game"],
        ["Catch me a Spy", "Deal with 10 foreign spies in a single game"],
        ["Cause of Death", "Execute a Rebel Leader"],
        ["Claustrophilia", "Win a Sandbox game on a Tiny island"],
        ["Day 0", "Complete campaign mission 2."],
        ["Dictatorship 101", "Finish all tutorials"],
        ["Do not press!", "Fire missiles from a Nuclear Submarine during a battle against another player"],
        ["Everlasting Colony", "Rule for 100 months as a colonial governor"],
        ["Extraordinary Popular Delusions", "Have all happiness values above 50"],
        ["For Science!", "Research all technologies at least once before the year 2005 in a single game"],
        ["Friends With Benefits", "Have relations higher than 90 with all factions in the Modern Era"],
        ["From Tropico with love", "Have 13 loyal spies at the same time"],
        ["Fundamental Principles", "Amend the Constitution 6 times in a single game"],
        ["Globalist", "Have 5 foreign powers in your Embassies at the same time"],
        ["Good Sportsmanship", "Finish a multiplayer game"],
        ["Greasing Palms", "Bribe a Faction Leader"],
        ["Heir And Now", "Recognize a new heir"],
        ["Herbivore", "Defeat Captain Plant in the final battle"],
        ["History Will Absolve Me", "Survive a rebel attack against the Palace"],
        ["Hope", "Complete campaign mission 5 (the final campaign mission)."],
        ["In Seventh Heaven", "Reach overall happiness of 77 "],
        ["Infrastructor", "Build more than 2 000 meters of roads in a single game"],
        ["It Prints Money!", "Win a multiplayer game by money"],
        ["Kill all Humans", "Eliminate 20 undesirable citizens with drones"],
        ["Leon Must Die!", "Complete campaign mission 4."],
        ["Let Them Eat Cake", "Survive an uprising"],
        ["Made In Tropico", "Export 100 000 Luxury Goods"],
        ["Middle Manager Of The Revolution", "Have managers in more than 15 buildings in a single game"],
        ["Mine! All Mine!", "Mine 100 000 ores and coal in a single game"],
        ["Mirror, Mirror On The Wall", "Change the looks of a dynasty member"],
        ["My Precious", "Finish the Waterborne campaign with the Black Pearl in your possession"],
        ["Naughty Docks", "Connect a dock with that of another player"],
        ["Offshore Haven", "Have 5 superpowers in Offshore Offices"],
        ["Overqualified", "Have a dynasty member with a level 5 skill"],
        ["Pension Plan", "Earn over $$200 000 Swiss bank account"],
        ["Presidente 007", "Complete Espionage campaign"],
        ["Presidente's Seven", "Have 7 Dynasty members"],
        ["Project Beale", "Win a multiplayer game by points"],
        ["Putsch and Judy", "Survive a Military Coup"],
        ["Retro-futurism", "Advance to the Modern Era before the year 1960"],
        ["Seasteading", "Have 1 of each waterborne buildings in a single playthrough"],
        ["Sheep For Wood", "Have a fleet of 12 trade ships"],
        ["Surfin' Tropico!", "Complete Waterborne campaign"],
        ["Thanks for all the fish!", "Have a fleet of 3 Fishing Trawlers"],
        ["The Bay Of Pigs", "Survive an invasion from the USA"],
        ["The Black Pearl", "Complete \"Treasure Hunt\""],
        ["The China Card", "Successfully complete 5 trade routes with China in a single game"],
        ["The Great Mogul", "Have 10 different industry buildings in a single game"],
        ["The Greybar Hotel", "Have 20 prisoners in Dungeons and Supermax Prisons"],
        ["The King of Pearls", "Have 3 Oyster Farms and a Jewelry Workshop"],
        ["The Madness Of Crowds", "Have more than 500 citizens in a single game"],
        ["The Maltese Toucan", "Complete mission 1"],
        ["The Silent Front", "Complete a Sabotage action in multiplayer"],
        ["The Town Of Cityville", "Build 150 buildings in a single game"],
        ["Think Tanks", "Have 5 Army Bases in a single game"],
        ["To Live In Interesting Times", "Win a Sandbox game on an island with Relentless Disasters"],
        ["Tower Defense", "Have 20 Guard Towers in a single game"],
        ["Tropicoleaks", "Expose secrets of 2 different superpowers in a single game"],
        ["United States of Tropico", "Finish a game with relations of 100 with the US"],
        ["Waterworld", "Have 10 Floating Apartments and no residential buildings on land (excluding shacks)"],
        ["What Energy Crisis?", "Produce and share 1 000 MW of power with another player"],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
