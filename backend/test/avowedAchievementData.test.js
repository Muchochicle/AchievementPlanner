import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/avowed.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2457220 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("avowed");

test("getPlannerData('avowed') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for avowed");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Avowed achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Avowed achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Avowed achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Cistern Warning", "Confront your assassin in the Cistern."],
        ["A Little Power Goes a Long Way", "Unlock all of Giatta's abilities."],
        ["A Proper Introduction", "Uncover the secret of Naku Tedek."],
        ["A Test of Your Reflexes", "Complete Avowed on the difficulty Path of the Damned."],
        ["A Well Overflowing", "Max out an attribute."],
        ["Allochory", "Free Sapadal at the climax of 'The Heart of the Living Lands'."],
        ["Alpha Strike Protocol", "Kill 15 enemies using stealth attacks."],
        ["Avowed", "Complete Avowed on any difficulty."],
        ["Big Iron On Your Hip", "Equip a fully upgraded weapon."],
        ["Bounty Hunter", "Complete all Bounties from all regions."],
        ["Bullseye", "Unlock all of Marius's abilities."],
        ["Can't We All Get Along?", "Resolve a potential conflict peacefully 5 times."],
        ["Cooking By The Book", "Cook every recipe at your Party Camp."],
        ["Dream Fungi Rotation", "Try Aiko's drugs with your companions during 'The Wasteland Courier'."],
        ["Dungeon Siege", "Enter every dungeon across all regions."],
        ["Everyone Disliked That", "Have every companion leave your party after siding with the Steel Garrote."],
        ["Explorer", "Complete Sanza's map of the Living Lands."],
        ["Fior Extinguisher", "Save Fior mes Ivèrno from the Steel Garrote's wrath."],
        ["Get in the Statue, Envoy", "Find the spot to 'contemplate death'."],
        ["Gotta Cache 'Em All", "Find and open all Pargrunen Caches across the Living Lands."],
        ["Grounded", "Slay 10 Spiders and 10 Beetles."],
        ["Hawkeye", "Find the hidden room in Fort Northreach."],
        ["Historian", "Collect all volumes of the History of the Living Lands in the Eothasian Temple."],
        ["It'll Cost Ya", "Confront Kostya in the Lava Tubes of Solace Keep."],
        ["Jingle, Jangle, Jingle", "Equip a fully upgraded set of armor."],
        ["Kith Lord", "Discover all Party Camps across the Living Lands."],
        ["Luckier Than They Know", "Unlock all of Kai's abilities."],
        ["Now Riposte!", "Parry an enemy's attacks 25 times."],
        ["Pantheon Purist", "Collect and place all of the God Shrine Totems & Fragments."],
        ["Pants on Fire", "Lie 15 times."],
        ["Parasitoid", "Destroy Sapadal and absorb their power at the climax of 'The Heart of the Living Lands'."],
        ["Pathfinder", "Find all items from Treasure Maps."],
        ["Peak Performance", "Reach max level."],
        ["Pentiment", "Complete every side quest."],
        ["Pillars of Eternity", "Cleanse all the Strangled Adra across all regions."],
        ["Play Dead", "Wear Necropants and a Revenant Bell Collar at the same time."],
        ["Retirement Plan", "Sell your future corpse to Elia."],
        ["Reverse Card", "Kill Captain Ngunu with his own poison."],
        ["Skeyt Digger", "Demand payment for your services 5 times."],
        ["Slay!", "Unlock all of Yatzli's abilities."],
        ["Spectral Evidence", "Complete the Trials of the Tebaru Sanakis."],
        ["That Sign Can't Stop Me Because I Can't Read", "Ignore the warning note and pull the lever in the Sand Sea Ruins."],
        ["The Outer Worlds", "Unlock all Fast Travel beacons."],
        ["Tired Of Being Nice", "Resort to violence in a conversation 10 times."],
        ["Training Arc", "Complete all training sessions with companions."],
        ["Two Bears High-Fiving", "Summon a bear to fight another bear."],
        ["Tyranny", "Be knighted as a member of the Steel Garrote."],
        ["We Remember", "Complete all Ancient Memories."],
        ["We're All In This Together", "Complete every companion moment in the Garden."],
        ["You've Got It From Here", "Sail to Paradis from Fort Northreach."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
