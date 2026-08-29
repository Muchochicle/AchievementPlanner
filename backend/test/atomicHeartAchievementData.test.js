import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/atomic-heart.json - 82 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 668580 (fetched through this app's own services/steamApi.js).
// 81 of 82 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("atomic-heart");

test("getPlannerData('atomic-heart') returns real planner data with 82 curated achievements", () => {

    assert.ok(game, "expected real planner data for atomic-heart");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 82);

});

test("every Atomic Heart achievement has a unique id from 1 to 82 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 82 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 82);
    assert.strictEqual(new Set(apinames).size, 82);

});

test("every Atomic Heart achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 81 officially-described Atomic Heart achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "overKill",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Atomic Heart has 1 hidden achievement");

    const officialAchievements = [
        ["A Girl's Best Friend", "Send all BEA-Ds to NORA's brain"],
        ["Alcoholics Anonymous", "Get drunk with vodka and kill 5 enemies"],
        ["And now—CHAR-les", "Complete the story DLC"],
        ["Apple Pie", "Pick all apples in Limbo"],
        ["Apple Pie 3826", "Collect 3,826 apples in the Trapped in Limbo DLC"],
        ["Artisan", "Create a weapon in a crafting machine"],
        ["Assimilation Procedure Interrupted", "Don't let a sprout grow into a mutant"],
        ["Atomic Heart", "Complete the game on Armageddon"],
        ["Avatar", "Kill 10 burning enemies, 10 electrified enemies, and 10 frozen enemies"],
        ["Beast Friend", "Find all talking dead animals"],
        ["Below Zero", "Freeze a Vova mid-air"],
        ["Better Late Than Never", "Find the dolphin figurine in the secret room"],
        ["Bull's Eye!", "Use Telekinesis to throw an object and knock down an Owl"],
        ["Burning Ears", "Find all Chirpers"],
        ["Chemist", "Craft consumables of all types"],
        ["Chop Chop Chop", "Kill Belyash with a melee weapon"],
        ["Clean in Two", "Defeat the Second Twin"],
        ["Clean-up", "Complete all testing grounds"],
        ["Conqueror of Annapurna", "Complete the Tower of Memory without dying"],
        ["Conqueror of Chomolungma", "Complete the Cliff of Perseverance without dying"],
        ["Conservationist", "Get a gold coin without shooting the Pchela"],
        ["Crystal Platinum", "Collect all of the figurines hidden in the complex"],
        ["Curtain", "Finish a theater performance"],
        ["Daring as a Bullet is Sharp", "Complete the Avenue of Speed without dying"],
        ["Demonstration of Violence", "Destroy the Robogirl at Chelomey"],
        ["Dew Point", "Kill Dewdrop"],
        ["Divide et Impera", "Separate several combined BEA-Ds with one shot from the Secateur"],
        ["Don't Mess With the Major", "Complete the Trapped in Limbo DLC without dying"],
        ["Explorer", "Find a testing ground"],
        ["Farewell, Old Friend", "Beat CHAR-les"],
        ["Final Burn-down", "Destroy all of the infected plants on the submarine"],
        ["Fluffy Easter Egg", "Find the secret room with the fluffball"],
        ["For Chief's a Jolly Good Fellow", "Save Sechenov"],
        ["Freedom Reflex", "Explore Pavlov"],
        ["Gold Rush", "Collect 76 gold coins"],
        ["Hands on the Hood", "Hit 20 enemies by a car"],
        ["Happy Polymerization Day!", "Fly out of Chelomey"],
        ["Hic Sunt Dracones", "Swim beyond the underwater world's borders, ignoring warnings"],
        ["Hothead", "Get 25 kills with headshots using the PM"],
        ["How Can I Help You?", "Use a phone booth at Chelomey"],
        ["I'm here if you need to talk", "Talk to Terentiy"],
        ["John Silver's Crew", "Kill 3 M4D-5 robots in a row while they're hopping on one foot"],
        ["Kommunism 2.0", "Find out the AoC's secret"],
        ["Lefthand Mastery", "Fully upgrade one skill tree"],
        ["Let's Shake on It!", "Exterminate the RACCOON boss"],
        ["Lord of the Flies", "Use a Strekoza for the first time"],
        ["Lord of War", "Collect all weapons"],
        ["Make It Go Round", "Kill Hedgie"],
        ["Marco... Polo!", "Fall in the water at Wave and get killed by Morays"],
        ["Master of Survival", "Find all the Hunter's stashes"],
        ["Maximum Strength", "Upgrade the Klusha and Secateur to max"],
        ["Medical Checkup", "Get to a hospital"],
        ["Medium Rare", "Kill Belyash"],
        ["Moby Dick", "While standing by the window, listen to a chirper narrating the story of the mysterious tune"],
        ["More Than Profit", "Find all Lootyagins"],
        ["Murderous Beauty", "Kill Twins"],
        ["Pistils and Stamens", "Get out of Vavilov"],
        ["Plyusch Rush", "Kill Plyusch"],
        ["Polymerization", "Collect 100 jelly"],
        ["Quite an Achievement", "Clear the VDNH complex"],
        ["Return to Utopia", "Complete the Annihilation Instinct DLC"],
        ["Scanner", "Scan all mobs"],
        ["Secret Meeting", "Open the secret room with observers"],
        ["Show's Over", "Kill Natasha"],
        ["Slashing Through the Limbo Waves", "Complete the Plateau of Responsibility without dying"],
        ["Strike", "Kill Hedgie without making a single shot / destroy all statues"],
        ["Terminator's Death", "Use an industrial press to destroy robots"],
        ["The Casino Isn't Always in the Black", "Get ALL items from the slot machine"],
        ["The Great Inventor", "Upgrade a weapon to the maximum level"],
        ["The Motherland Does Not Forget its Heroes", "Unlock all achievements"],
        ["The Necromancer", "Talk to every dead"],
        ["This Is the End", "Complete the story DLC"],
        ["Tickets, Please!", "Take a train at the Lesnaya Maglev train station"],
        ["Time in a Bottle", "Kill 3 enemies while using technostasis"],
        ["Triple Penetration", "Kill 3 or more enemies with a single Railgun shot"],
        ["Ultimate Storm", "Destroy 15 enemies using the neuropolymeric launch module"],
        ["Validol's Our Bro", "Complete Validol's mission peacefully"],
        ["Water Sports", "Toss the ball back and forth with the dolphin three times"],
        ["Weapon Master", "Create five types of weapons"],
        ["Weird Science", "Get into the ORB lab"],
        ["You've Read the Manual!", "Pull yourself close to your enemy with the Whip"],
    ];

    assert.strictEqual(officialAchievements.length, 81, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Atomic Heart achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["overKill", "Overkill"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
