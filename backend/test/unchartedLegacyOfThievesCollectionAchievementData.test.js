import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/uncharted-legacy-of-thieves-collection.json - 101 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1659420 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("uncharted-legacy-of-thieves-collection");

test("getPlannerData('uncharted-legacy-of-thieves-collection') returns real planner data with 101 curated achievements", () => {

    assert.ok(game, "expected real planner data for uncharted-legacy-of-thieves-collection");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 101);

});

test("every UNCHARTED: Legacy of Thieves Collection achievement has a unique id from 1 to 101 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 101 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 101);
    assert.strictEqual(new Set(apinames).size, 101);

});

test("every UNCHARTED: Legacy of Thieves Collection achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 101 UNCHARTED: Legacy of Thieves Collection achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["#nofilter", "Take a photo at 5 photo opportunities"],
        ["10 Up, 10 Down", "Defeat 10 enemies with headshots in a row"],
        ["4x4x4", "Defeat four enemies with the jeep within 20 seconds (The Lost Legacy)."],
        ["A Thief's Legacy", "Collect all the achievements"],
        ["Backseat Driver", "Commandeer 6 vehicles by jumping on them and kicking out the driver"],
        ["Best Driver in the Business", "Drive from the Ganesh mountain carving to the top of the waterfall at the Trident Fort and back in under 3 minutes"],
        ["Best Score!", "Score 3,500 or more in the Crash Bandicoot minigame in the epilogue (Uncharted 4)."],
        ["Boom County", "Defeat 4 enemies with the same explosion (all explosive items and weapons apply)"],
        ["Bring in the Big Guns", "Defeat 30 enemies with gold weapons (The Lost Legacy)."],
        ["Butterfingers", "Make 10 enemies drop their grenades"],
        ["C-Phoria", "Defeat 4 enemies with one C4 detonation"],
        ["Cannonball!", "Perform an impressive dive from the cliff near the old railroad tracks"],
        ["Casual Treasure Hunter", "Find 5 treasures"],
        ["Charted! - Crushing", "Complete the game in crushing mode"],
        ["Charted! - Explorer", "Complete the game in explorer mode"],
        ["Charted! - Hard", "Complete the game in hard mode"],
        ["Charted! - Light", "Complete the game in light mode"],
        ["Charted! - Moderate", "Complete the game in moderate mode"],
        ["Charted! - Speedrun", "Complete the game in 6 hours or less"],
        ["Cliffhanger", "Pull 20 enemies over when hanging from a ledge"],
        ["Collector of Antiquities", "Find all the treasures"],
        ["Combat Racing", "Ram 10 motorcycles"],
        ["Defeat 10 in 60 -- China Lake GL", "Defeat 10 enemies in 60 seconds with the China Lake Grenade Launcher"],
        ["Don't Feed the Animals", "In the Chapter 11 market, play with the lemur and let it take your apple (Uncharted 4)."],
        ["Don't Ruin The Moment", "Collect all the achievements in Uncharted™: The Lost Legacy"],
        ["Drop Me a Line", "Use all four ziplines to traverse the city, including the one after the yellow RX sign (The Lost Legacy)."],
        ["Fingersmith", "Pick a three-pin lock in under 15 seconds (The Lost Legacy)."],
        ["First Treasure", "Find a Treasure"],
        ["Five Finger Discount", "Open 5 lockboxes"],
        ["Flawless Gauntlet", "Get through all 3 Axe Fort trials without resetting any boards"],
        ["Frazer. Chloe Frazer.", "Defeat 5 consecutive enemies with the silenced pistol without being detected"],
        ["Getting to Know You", "Listen to all 17 optional conversations in The Lost Legacy."],
        ["Ghost in the Cemetery", "Get through Scotland cemetery combat encounter without killing or being seen"],
        ["Gift of Gab", "Unlock all 36 optional conversations in Uncharted 4."],
        ["Glamour Shot", "Take a photo of Sully with his phone in the Chapter 11 puzzle chamber (Uncharted 4)."],
        ["Hang Tough!", "Destroy 10 vehicles while being dragged from the rope"],
        ["Hangman's Bullet", "Perform 20 headshots from the rope"],
        ["Hardcore Treasure Hunter", "Find 35 treasures"],
        ["Head of the Class!", "Defeat 20 enemies with headshots"],
        ["Here, Catch!", "Destroy a vehicle in Chapter 9 with a thrown-back grenade (The Lost Legacy)."],
        ["Hitting a Brick Wall", "Defeat 5 armored enemies with melee only"],
        ["I Accidentally All the Guns", "Use every weapon available in Uncharted 4 (22 weapons)."],
        ["I Can See My House From Here!", "Climb to the spire of the clock tower in Chapter 11 (Uncharted 4)."],
        ["I Thought I Heard Something", "Perform 30 vertical stealth takedowns"],
        ["I Was Never Here", "Open a lockbox with enemies nearby without being detected (The Lost Legacy)."],
        ["Itchy Trigger Finger", "Defeat 20 enemies firing from-the-hip"],
        ["Jot This Down", "Find a Journal Entry"],
        ["Jungle Gym", "Perform 5 grapple swings in a row without touching the ground"],
        ["Just Floor It!", "Complete the Chapter 17 jeep ride with Elena without killing any enemies (Uncharted 4)."],
        ["Just the Wind", "Stealth take-down 15 enemies in a row"],
        ["Leapfrog", "Defeat 10 enemies in a row, alternating gunplay and hand-to-hand"],
        ["Legacy Found!", "Complete the Game"],
        ["Let's Not Get Caught", "Drive over the edge in the Western Ghats"],
        ["Lost Art of Journaling", "Find all Journal Entries"],
        ["Lost History", "Find All Journal Notes"],
        ["Ludonarrative Dissonance", "Defeat 1,000 enemies across Uncharted 4."],
        ["Make an Entrance", "Defeat enemies with the vehicle, long-gun, melee, and grenade, in that order, in 20 seconds"],
        ["Marco Po-No", "Swim around the pool at the top of the dam in Halebidu (The Lost Legacy)."],
        ["Marco Polo Returns!", "In Chapter 12: At Sea, swim near the sunken pirate ship and wait for Nate to call 'Marco' (Uncharted 4)."],
        ["Not a Cairn in the World", "Find and destroy all 16 rock cairns during the Chapter 10 stay in Madagascar (Uncharted 4)."],
        ["Now You See Me...", "Break stealth in a fight and then successfully re-enter stealth (The Lost Legacy)."],
        ["On Porpoise", "Get all three dolphins to follow your boat in Chapter 12 (Uncharted 4)."],
        ["On the Grid", "Mark 30 enemies"],
        ["Overkill", "Plant multiple C4 charges on the APC and destroy it with one detonation (The Lost Legacy)."],
        ["Peaceful Resolution", "Get from Chapter 13 through the Chapter 14 treasury without killing any mercenaries (Uncharted 4)."],
        ["Picks or It Didn't Happen", "Open every lockbox"],
        ["Pics or It Didn't Happen", "Take a photo at all the photo opportunities"],
        ["Progress Demands Sacrifice", "Complete the Game in Crushing mode"],
        ["Quiet as a Mouse", "After entering the Trident Fort, reach the door without being seen"],
        ["Relic Finder", "Find all three Strange Relics (in Chapters 9, 12 and 21 of Uncharted 4)."],
        ["Right Under Your Nose", "Destroy the helicopter without defeating any other enemies"],
        ["Royal Demolitionist", "Defeat 20 enemies with C4"],
        ["Run the Table", "Defeat enemies with a stealth attack, melee attack, headshot, and explosives, in that order, in 15 seconds"],
        ["Run-and-Gunner", "Defeat 50 enemies from-the-hip or blind-firing"],
        ["Rushing Roulette", "Defeat enemies with a pistol, machine gun, and grenade, in that order, in 15 seconds"],
        ["Shadow Theater", "Complete the Chapter 5 shadow puzzle in 10 moves or fewer (The Lost Legacy)."],
        ["Shake For Your Fortune", "Inspect the Strange Skull treasure and read the fortune on its base (The Lost Legacy)."],
        ["Sharpshooter", "Complete game with 70% or higher shot accuracy"],
        ["Shh Sleep Now", "Stealth take-down 30 enemies"],
        ["Si Vis Pacem Para Bellum", "Get a kill with every weapon in The Lost Legacy."],
        ["Stage Fright", "Stand perfectly still for 30 seconds just before the Chapter 11 city chase (Uncharted 4)."],
        ["Stay and Pray", "Defeat 20 enemies blind-firing from cover"],
        ["Stealth First Ask Questions Later", "Stealth take-down 5 enemies"],
        ["Still Got It!", "Destroy four targets in the attic with the toy gun at the start of Chapter 4 (Uncharted 4)."],
        ["Stunt It!", "Accumulate 30 seconds of total jeep air time in Chapter 4 (The Lost Legacy)."],
        ["Swordmaster", "Win the Chapter 22 sword duel with Rafe without taking a single hit (Uncharted 4)."],
        ["Take a Note", "Find a Journal Note"],
        ["The Sampler", "Defeat 5 enemies, each one taking damage from a handgun, long-gun, and melee"],
        ["The Way of the Warrior", "Reach the outskirts of Halebidu in Chapter 5 without firing a gun or using an explosive (The Lost Legacy)."],
        ["Tip of the Hat", "Stealth take-down 10 armored enemies with melee by first removing their helmets without being detected"],
        ["Token For Granted", "Find a Hoysala Token in the Chapter 4 open-world area (The Lost Legacy)."],
        ["Treasure Hunter", "Find 50 treasures"],
        ["Treasure Master", "Find all Treasures"],
        ["Trials and Tribulations", "Solve the pirate-cave puzzle in Chapter 9 within 10 attempts (Uncharted 4)."],
        ["Unstoppable!", "Defeat 100 enemies in a row without dying in combat"],
        ["Were You Counting?", "Defeat an enemy with the last bullet in your handgun magazine (The Lost Legacy)."],
        ["Wingman", "Perform 10 combo buddy takedowns"],
        ["Wingwoman", "Perform 10 combo partner takedowns"],
        ["Yas Queen", "Find all the Hoysala Tokens and obtain the Queen's Ruby (The Lost Legacy)."],
        ["You Have a Head for this Business", "Defeat 50 enemies with headshots"],
        ["Your Prize", "Appreciate the view at the top of the Hoysala Empire"],
    ];

    assert.strictEqual(officialAchievements.length, 101, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
