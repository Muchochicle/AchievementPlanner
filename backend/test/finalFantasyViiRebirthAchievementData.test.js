import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-vii-rebirth.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2909400 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("final-fantasy-vii-rebirth");

test("getPlannerData('final-fantasy-vii-rebirth') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-vii-rebirth");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every FINAL FANTASY VII REBIRTH achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every FINAL FANTASY VII REBIRTH achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 FINAL FANTASY VII REBIRTH achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1-Star Startup", "Donate 10 items to the treasure trove at Johnny's Seaside Inn."],
        ["3-Star Hotel", "Donate 30 items to the treasure trove at Johnny's Seaside Inn."],
        ["5-Star Hotel", "Donate 60 items to the treasure trove at Johnny's Seaside Inn."],
        ["7-Star Hotel", "Tell Johnny you have donated every possible item to his treasure trove."],
        ["7th, Assemble!", "Recruit every Midgar 7th Infantry trooper for the parade in Junon during Chapter 3 (missable)."],
        ["A Materia World", "Level up an orb of materia."],
        ["Are You Not Entertained?", "Complete every bout in the Musclehead Colosseum."],
        ["Bladesman of Legend", "Defeat Gilgamesh, the endgame optional superboss unlocked after completing all six regional Protorelic questlines."],
        ["Break It Down", "Use a limit break."],
        ["Caching In", "Complete your search of a cache location."],
        ["Cactuar Crusher", "Obtain the protorelic in the Corel region."],
        ["Card Royalty", "Win the Queen's Blood tournament held aboard the Shinra-8."],
        ["Confluence of Worlds", "Complete Chapter 14."],
        ["Critically Acclaimed", "Earn a review of S or higher for your performance in the LOVELESS stage play at the Gold Saucer."],
        ["Crying Out", "Complete Chapter 9."],
        ["Cryptic Cameo", "Complete Chapter 5."],
        ["Director of Regional Intelligence", "Gather all pieces of world intel in a region."],
        ["Entering New Markets", "Complete a quest."],
        ["Expert Ex-kweh-vator", "Use a chocobo to find two treasures buried by rabbits."],
        ["Exploitative Practices", "Exploit an enemy's weakness."],
        ["Fledgling Summoner", "Invoke a summon."],
        ["Fort Condor Commander", "Obtain the protorelic in the Junon region (the Fort Condor questline)."],
        ["Founder's Bonus", "Obtain the protorelic in the Grasslands region by finishing its Protorelic questline."],
        ["Fun in the Sun", "Complete Chapter 6."],
        ["Grind It Out", "Attain level 70 with a character."],
        ["Hall of Famer", "Win every chocobo race."],
        ["Hearts Out, Dukes Up", "Complete Chapter 12."],
        ["Honorary Turk", "Obtain the protorelic in the Gongaga region."],
        ["I Brake for Chocobos", "Repair three chocobo stops."],
        ["I Got This", "Win a battle."],
        ["I'm Here for You", "Complete Chapter 13."],
        ["Intelligence Aide", "Gather world intel at five separate locations."],
        ["Intelligence Specialist", "Gather world intel at fifty separate locations."],
        ["Make Mine Black", "Complete Chapter 3."],
        ["Materia Completionist", "Develop all possible materia together with Chadley."],
        ["Moogle Lover", "Max out your moogle emporium merchant rank."],
        ["My Job Here Is Done", "Complete every side quest in the game."],
        ["Never Meet Your Heroes", "Complete Chapter 1."],
        ["New Blood", "Raise your Queen's Blood rank."],
        ["No \"I\" in \"Synergy\"", "Use a synergy ability."],
        ["Of Hardy Stock", "Complete all chapters on Hard difficulty."],
        ["Piano Virtuoso", "Play all six Piano Outreach Association songs well enough to receive remuneration."],
        ["Polygonal Prizefighter", "Defeat Sephiroth in the 3D Brawler minigame."],
        ["Professional Handler", "Obtain the protorelic in the Nibel region."],
        ["Staggered Learning", "Stagger an enemy."],
        ["Staggering Success", "Deal 300% or more damage to a staggered enemy."],
        ["Stars Fell from My Eyes", "Complete Chapter 10."],
        ["Stealing the Show", "Win the prize for an outstanding performance in the Junon Parade in Chapter 3 (missable)."],
        ["Swampy Situation", "Complete Chapter 2."],
        ["Team Player", "Use a synergy skill."],
        ["The Gambit Paid Off", "Obtain the protorelic in the Cosmo Canyon region."],
        ["The Planet's Hope", "Earn all FINAL FANTASY VII REBIRTH achievements."],
        ["The President's Commendation", "Complete Chapter 4."],
        ["The Price of Progress", "Complete Chapter 7."],
        ["Unfettered Friendship", "Free a bound ally."],
        ["Virtually Renowned", "Complete all of Chadley's combat simulations."],
        ["Weapons 101", "Max out a weapon ability's proficiency."],
        ["Well-Rounded", "Master all weapon abilities and limit breaks, including those found in folios."],
        ["Worth the Weight?", "Complete Chapter 8."],
        ["You Work for Me Now", "Defeat a summon in battle and obtain its materia."],
        ["You're Not Murasaki", "Complete Chapter 11."],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
