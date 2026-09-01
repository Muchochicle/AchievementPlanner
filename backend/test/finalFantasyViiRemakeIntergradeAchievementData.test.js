import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-vii-remake-intergrade.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1462040 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("final-fantasy-vii-remake-intergrade");

test("getPlannerData('final-fantasy-vii-remake-intergrade') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-vii-remake-intergrade");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Final Fantasy VII Remake Intergrade achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Final Fantasy VII Remake Intergrade achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Final Fantasy VII Remake Intergrade achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Best in the Business", "Complete all quests."],
        ["Biker Boy", "Get praised by Jessie at the end of the motorcycle mini-game."],
        ["Bonds of Friendship", "Free a bound ally."],
        ["Broken Dreams", "Complete Chapter 13: A Broken World."],
        ["Building Character", "Attain level 50 with a character."],
        ["Cleanup Crew", "Obtain the Chocobo & Moogle materia."],
        ["Condor Queen", "Defeat all Fort Condor opponents again on Hard difficulty."],
        ["Corrupter of the Immaculate", "Defeat Weiss in the main game's Chapter 17 Combat Simulator (with Cloud, Tifa and Aerith)."],
        ["Crate Annihilator", "Complete all Normal difficulty Whack-a-Box challenges."],
        ["Dancing Queen", "Receive a gift from Andrea for being a dance superstar (top marks in the Wall Market dance minigame)."],
        ["Destiny's Crossroads", "Complete Chapter 18: Destiny's Crossroads (finish the main story)."],
        ["Disc Jockey", "Collect all music discs."],
        ["Divine Gratitude", "Receive a letter from an angel (a thank-you letter earned by completing side quests)."],
        ["Dressed to the Nines", "Obtain all nine bridal candidate outfits."],
        ["Emerging from Chaos", "Complete Chapter 17: Deliverance from Chaos."],
        ["Escape Artist", "Complete Chapter 2: Fateful Encounters."],
        ["Game, Set, Master", "Defeat all seven Fort Condor opponents to become grandmaster."],
        ["Gotta Start Somewhere", "Complete a quest."],
        ["Hardened Veteran", "Complete all chapters of the main story on Hard difficulty."],
        ["Heavenly Dart Player", "Rise to the top of the Seventh Heaven darts leaderboard."],
        ["In Lockstep", "Bypass the delta-level security lock in Mako Reactor 5."],
        ["Intelligence Agent", "Complete all battle intel reports."],
        ["Lights Out", "Complete Chapter 6: Light the Way."],
        ["Master of Fate", "Earn all FINAL FANTASY VII REMAKE achievements."],
        ["Master of Mimicry", "Learn all enemy skills."],
        ["Materia for Beginners", "Level up an orb of materia."],
        ["Materia Maven", "Obtain all materia from the Shinra Box Buster challenges in INTERmission."],
        ["Mercenary Endeavors", "Complete Chapter 3: Home Sweet Slum."],
        ["Music Collector", "Collect 3 music discs."],
        ["My First Ability", "Max out a weapon's proficiency."],
        ["My First Summon", "Invoke a summon."],
        ["Never the Bride", "Complete Chapter 9: The Town That Never Sleeps."],
        ["Night on the Town", "Complete Chapter 4: Mad Dash."],
        ["No Appointment Needed", "Complete Chapter 16: The Belly of the Beast."],
        ["Onetime Gig", "Complete Chapter 1: The Destruction of Mako Reactor 1."],
        ["Out of Darkness's Clutches", "Complete INTERmission Chapter 2 (finish the DLC)."],
        ["Paranormal Investigator", "Complete Chapter 11: Haunted."],
        ["Peeress of Pull-Ups", "Complete all pull-up challenges."],
        ["Picking Up the Pieces", "Complete Chapter 14: In Search of Hope."],
        ["Plan E", "Complete Chapter 5: Dogged Pursuit."],
        ["Returning Champion", "Emerge victorious from a colosseum sparring session."],
        ["Reunited", "Complete Chapter 8: Budding Bodyguard."],
        ["Say It with Flowers", "Decorate the Leaf House with a floral arrangement (using flowers bought from Aerith)."],
        ["Sewer Survivor", "Complete Chapter 10: Rough Waters."],
        ["Snappy Dresser", "Obtain three bridal candidate outfits."],
        ["Staggering Feat", "Deal 300% damage to a staggered enemy."],
        ["Staggering Start", "Stagger an enemy."],
        ["Sultan of Squat", "Complete all squat challenges."],
        ["Summon Slayer", "Defeat a summon in battle."],
        ["Takes Two IDs to Tango", "Complete INTERmission (Yuffie DLC) Chapter 1."],
        ["That's the Smell", "Defeat a Malboro."],
        ["The Collapse", "Complete Chapter 12: Fight for Survival."],
        ["The Johnny Experience", "Witness all Johnny-related events across the story."],
        ["The Pizza in the Sky", "Complete Chapter 15: The Day Midgar Stood Still."],
        ["The Road to Revenge", "Complete both chapters of INTERmission on Hard difficulty."],
        ["Trapped like Sewer Rats", "Complete Chapter 7: A Trap Is Sprung."],
        ["Turtle-tastic", "Collect all six Happy Turtle flyers in INTERmission."],
        ["Ultimate Weapon", "Defeat the Pride and Joy Prototype in the Shinra Combat Simulator."],
        ["Ultimate Weapon 2.0", "Defeat Pride and Joy Mk 0.5 in INTERmission's 'Yuffie & Sonon vs. Top Secrets' Combat Simulator challenge."],
        ["Warming Up", "Win a battle."],
        ["Weakened Resolve", "Exploit an enemy's weakness."],
        ["Weapons Expert", "Learn all weapon abilities for Cloud, Barret, Tifa, and Aerith."],
        ["Whack-a-Box Wunderkind", "Complete all Hard difficulty Whack-a-Box challenges."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
