import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-evil-within-2.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 601430 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-evil-within-2");

test("getPlannerData('the-evil-within-2') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-evil-within-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every The Evil Within 2 achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every The Evil Within 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 The Evil Within 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Extra Kick to it", "Upgraded one of your Warden Crossbow bolts to max level."],
        ["Against All Odds", "Completed the game on Nightmare difficulty or higher."],
        ["All in the Family", "Collected all of the Mysterious Objects."],
        ["Another Ally", "Story achievement - find another ally in Union."],
        ["Backup Ain't Coming", "Completed the \"Rogue Signal\" side mission."],
        ["Bootable Offense", "Stomped and killed 15 fallen enemies."],
        ["Caffeine Addict", "Used every Coffee Maker at least once."],
        ["Chatting With Kidman", "Talked to Kidman about all of the photographic slides."],
        ["Clearing a Path", "Killed 60 enemies."],
        ["Crossing to the Other Side", "Story achievement - provide a Harbinger sweet release (defeat the Harbinger)."],
        ["Death From Above", "Killed 2 or more enemies at once using a hanging lamp. (Ch. 9)"],
        ["Diligent Reader", "Collected all files."],
        ["DIY", "Crafted something for the first time."],
        ["Doing Some Detecting", "Collected 20 files."],
        ["Echoes Within STEM", "Observed all Residual Memories."],
        ["Everything Comes Crumbling Down", "Story achievement - reach the very end of the world."],
        ["Finally Free", "Experienced every traumatic encounter and made peace with your inner demons."],
        ["Fire Walk With Me", "Story achievement - make it inside the enemy's stronghold (Theodore's base)."],
        ["Good to See You Again", "Acquired the Warden Crossbow."],
        ["Half the Stash", "Opened 16 lockers."],
        ["Handyman", "Crafted every type of item at least once."],
        ["I Am The Night", "Killed 10 enemies using Sneak Kills."],
        ["I'll Take You Down Myself", "Brought your own equipment to the barbecue this time. (Ch. 14)"],
        ["Kick, Shoot, Burn", "Killed 2 or more enemies at once using oil on the ground."],
        ["Locksmith", "Opened all lockers."],
        ["Making Things a Little Easier", "Used your first High-Grade Weapon Parts."],
        ["Melancholy Memories", "Reminisced about every moment from your past. (Ch. 12)"],
        ["No More Playing With Fire", "Stopped a true believer from playing with his favorite toy. (Ch. 11)"],
        ["Not Running This Time", "Fight and kill the Guardian outside Union City Hall (Chapter 5)."],
        ["Now You're Playing with Power", "Upgraded a weapon to Level 3."],
        ["Overcome the Past", "Story achievement - your trauma is no more (overcome the final trauma)."],
        ["Powerhouse", "Acquired all standard weapons."],
        ["Premature Finale", "Story achievement - shut down a bloody performance (Stefano's theater)."],
        ["Rookie", "Completed the game on Casual difficulty or higher."],
        ["Shock Therapy", "Stunned an enemy standing in water using a Shock Bolt."],
        ["Smoke Assassin", "Killed 3 enemies using upgraded Smoke Bolts."],
        ["Sometimes Fighting Isn't the Answer", "Avoided unnecessary bloodshed outside City Hall. (Ch. 5)"],
        ["Spiritual Awakening", "Story achievement - come to terms with your past and present."],
        ["Stick it in My Veins", "Completely upgraded all abilities."],
        ["Survivor", "Completed the game on Survival difficulty or higher."],
        ["Sykes Out", "Completed the \"The Last Step\" side mission."],
        ["Taken", "Story achievement - see a chilling vision."],
        ["That Cinematic Feel...", "Enable the Letterbox setting (Options -> HUD Display Settings) and start a game."],
        ["The Team Psychologist", "Story achievement - find a potential ally in the Marrow."],
        ["They Never Even Stood A Chance", "Completely upgraded all weapons."],
        ["Thinning Them Out", "Killed 30 enemies."],
        ["Unfortunate Consequence", "Story achievement - do what needed to be done to save your daughter."],
        ["Wait For It...", "Killed an enemy using an Ambush."],
        ["Welcome to Union", "Story achievement - take the plunge back into STEM (arrive in Union)."],
        ["You Asked For It... Again", "Complete the game in Classic Mode."],
        ["You Got Red in You", "Used your first Red Gel."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
