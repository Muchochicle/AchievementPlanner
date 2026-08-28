import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cyberpunk-2077.json - 57 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1091500 (fetched through this app's own services/steamApi.js) -
// 36 of 57 ship a real, official Steam description. The other 21 are
// hidden (story milestones, endings, companion questline completions -
// seven require the Phantom Liberty DLC). Their descriptions here are
// curatorial, cross-checked against VULKK's base-game and Phantom
// Liberty achievement guides. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field.
const cyberpunk2077 = getPlannerData("cyberpunk-2077");

test("getPlannerData('cyberpunk-2077') returns real planner data with 57 curated achievements", () => {

    assert.ok(cyberpunk2077, "expected real planner data for cyberpunk-2077");
    assert.ok(Array.isArray(cyberpunk2077.achievements));
    assert.strictEqual(cyberpunk2077.achievements.length, 57);

});

test("every Cyberpunk 2077 achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = cyberpunk2077.achievements.map(a => a.id);
    const apinames = cyberpunk2077.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Cyberpunk 2077 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of cyberpunk2077.achievements) {

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

test("every one of the 36 officially-described Cyberpunk 2077 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 21 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["The World", "Complete the main storyline."],
        ["Breathtaking", "Collect all items that once belonged to Johnny Silverhand."],
        ["It's Elementary", "Complete all gigs and NCPD Scanner Hustles in Watson."],
        ["I Am The Law", "Complete all Cyberpsycho Sightings."],
        ["Greetings from Pacifica!", "Complete all gigs and NCPD Scanner Hustles in Pacifica."],
        ["The Wasteland", "Complete all gigs and NCPD Scanner Hustles in the Badlands."],
        ["Little Tokyo", "Complete all gigs and NCPD Scanner Hustles in Westbrook."],
        ["Mean Streets", "Complete all gigs and NCPD Scanner Hustles in Heywood."],
        ["The Jungle", "Complete all gigs and NCPD Scanner Hustles in Santo Domingo."],
        ["City Lights", "Complete all gigs and NCPD Scanner Hustles in City Center."],
        ["Full Body Conversion", "Install at least one implant in each system and body part."],
        ["Gun Fu", "Kill or incapacitate 3 enemies in quick succession with a revolver or pistol in close combat."],
        ["Christmas Tree Attack", "Complete a Breach Protocol with a minimum of 3 daemons uploaded."],
        ["Ten out of Ten", "Reach the max level in any skill."],
        ["Gunslinger", "Shoot an enemy grenade in midair with a revolver."],
        ["Two Heads, One Bullet", "Kill or incapacitate 2 enemies with the same sniper rifle shot."],
        ["Rough Landing", "While Berserk cyberware is active, perform a Superhero Landing to kill or incapacitate 2 enemies."],
        ["Stanislavski's Method", "Use a dialogue option related to V's life path 10 times."],
        ["Autojock", "Buy all vehicles available for purchase."],
        ["Master Crafter", "Craft 3 Legendary items."],
        ["Daemon In The Shell", "Kill or incapacitate 3 enemies with one \"Detonate Grenade\" quickhack."],
        ["The Quick and the Dead", "Kill or incapacitate 50 enemies while time is slowed."],
        ["Must Be Rats", "Perform the Distract Enemies quickhack 30 times without drawing attention to yourself."],
        ["V for Vendetta", "After reviving with Second Heart, kill or incapacitate the enemy who killed you within 5 seconds."],
        ["True Soldier", "Kill or incapacitate 300 enemies using ranged weapons."],
        ["True Warrior", "Kill or incapacitate 100 enemies using melee weapons."],
        ["Right Back At Ya", "Kill or incapacitate an enemy who threw a grenade at you."],
        ["The Wandering Fool", "Find all the tarot graffiti for the job Fool on the Hill."],
        ["Frequent Flyer", "Find all fast travel dataterms."],
        ["Legend of The Afterlife", "Reach max Street Cred."],
        ["All the President's Men", "Save President Myers."],
        ["Dirty Deeds", "Complete every Gig in Dogtown."],
        ["Judgement Day", "Eliminate three bosses from the \"Increased criminal activity\" category."],
        ["Easy Come, Easy Go", "Steal the Arasaka medical truck or deliver 10 vehicles to El Capitan."],
        ["Relic Ruler", "Unlock all Perks in the Relic Perk tree."],
        ["The APB is Not Enough", "Become Dogtown's most wanted criminal."]
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "TheFool",
        "TheLovers",
        "TheHermit",
        "TheWheelOfFortune",
        "TheHightPriestess",
        "TheDevil",
        "TheStar",
        "TheSun",
        "Temperance",
        "FollowingTheRiver",
        "BornToBeWild",
        "UnderPressure",
        "QueenOfTheHighway",
        "BushidoAndChill",
        "KingOfTheCups",
        "KingOfThePentacles",
        "KingOfTheWands",
        "KingOfTheSwords",
        "TheTower",
        "Kingmaker",
        "IHateSpider"
    ]);

    assert.strictEqual(hiddenApinames.size, 21, "sanity check - Cyberpunk 2077 has 21 hidden achievements");

    const dataPairs = cyberpunk2077.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 21 hidden Cyberpunk 2077 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["TheFool", "The Fool"],
        ["TheLovers", "The Lovers"],
        ["TheHermit", "The Hermit"],
        ["TheWheelOfFortune", "The Wheel of Fortune"],
        ["TheHightPriestess", "The High Priestess"],
        ["TheDevil", "The Devil"],
        ["TheStar", "The Star"],
        ["TheSun", "The Sun"],
        ["Temperance", "Temperance"],
        ["FollowingTheRiver", "To Protect and Serve"],
        ["BornToBeWild", "To Bad Decisions!"],
        ["UnderPressure", "Judy vs Night City"],
        ["QueenOfTheHighway", "Life of the Road"],
        ["BushidoAndChill", "Bushido and Chill"],
        ["KingOfTheCups", "King of Cups"],
        ["KingOfThePentacles", "King of Pentacles"],
        ["KingOfTheWands", "King of Wands"],
        ["KingOfTheSwords", "King of Swords"],
        ["TheTower", "The Tower"],
        ["Kingmaker", "Spin Doctor"],
        ["IHateSpider", "Arachnophobia"]
    ];

    assert.strictEqual(names.length, 21, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = cyberpunk2077.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
