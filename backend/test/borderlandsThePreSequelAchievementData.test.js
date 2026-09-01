import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/borderlands-the-pre-sequel.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 261640 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("borderlands-the-pre-sequel");

test("getPlannerData('borderlands-the-pre-sequel') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for borderlands-the-pre-sequel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Borderlands: The Pre-Sequel achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Borderlands: The Pre-Sequel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Borderlands: The Pre-Sequel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["360 No Scope", "While airborne, spun 360 degrees then got a kill with a Sniper Rifle without using the scope."],
        ["A House Divided", "Completed the mission 'Eye to Eye'."],
        ["Air Supremacy", "Killed 100 enemies with Wolf."],
        ["Beam Me Up", "Discovered all named locations aboard the Helios Space Station."],
        ["Brain Drain", "Completed the mission 'Science and Violence'."],
        ["Challenger", "Completed level 1 of all challenges with a single character."],
        ["Collateral Damage", "Had a Lost Legion Eternal kill 3 of his friends."],
        ["Cosmic Completionist", "Discovered all named locations."],
        ["Dejamminated", "Completed the mission 'Systems Jammed'."],
        ["Digitize Me!", "(Claptastic Voyage) Digitize into Claptrap's brain."],
        ["Do Shoot the Messenger", "Delivered Zarpedon's message."],
        ["Drakensburg, Schmakensburg", "Completed the mission 'Intelligences of the Artificial Persuasion'."],
        ["Elementalist", "Had an enemy frozen, corroded, ignited, and electrocuted at the same time."],
        ["Eridian Explorer", "Discovered all named locations in Outlands Canyon, Outlands Spur and Vorago Solitude."],
        ["Executioner", "Killed 10 enemies in a single activation of Showdown."],
        ["Expensive Taste", "Used the Grinder to create a Legendary item."],
        ["Grind 'n' Bear It", "Used the Grinder to create an item."],
        ["Guardian Guardian", "Saved the Guardians from the Scav poachers."],
        ["Helios Rising", "Completed the mission 'Home Sweet Home'."],
        ["High Fashion", "Unlocked 10 Customization Items."],
        ["I Come From The Land Up Over", "Discovered all named locations in Serenity's Waste, Triton Flats and Stanton's Liver."],
        ["I Shot The Meriff", "Completed the mission 'A New Direction'."],
        ["I Welcome Your Attack, Fool", "Completed the Badass Round without going into Fight For Your Life."],
        ["Ice To Meet You", "Shattered 3 frozen enemies with a single slam attack."],
        ["Invaders Must Die", "Completed the mission 'Lost Legion Invasion'."],
        ["It's Raining Cats and Hotdogs", "(Claptastic Voyage) Complete a round using the Mutator."],
        ["Lunar Lieutenant", "Reached level 10."],
        ["Lunar Looter", "Looted 10 Moonstone Chests."],
        ["Modern Fart", "Completed the mission 'To Arms!'."],
        ["Moon Master", "Reached level 25."],
        ["Moon Mission Meister", "Completed all of the side missions."],
        ["Mouth To Mouth", "Revived 10 players with Oxygen."],
        ["Moxxi's Sampler", "Tried all the Moxxtails in the Up Over Bar in Concordia."],
        ["Multi Face-eted", "Defeated the Empyrean Sentinel."],
        ["No Photographs, Please!", "Killed 10 SpyBugs before they took your photo."],
        ["No, I'm Athena!", "Killed 100 enemies with the Aspis."],
        ["Once More With Feeling", "Completed the mission 'Return of Captain Chef'."],
        ["Pancake Parlor", "Pancaked an enemy in the Stingray."],
        ["Rocketeer", "Launched 4 rockets from Elpis."],
        ["Shadow of Your Former Self", "(Claptastic Voyage) Defeat 5H4D0W-TP."],
        ["Shadow Play", "(Claptastic Voyage) Give the H-Source to Jack."],
        ["Side Quest Student", "Completed 30 side missions."],
        ["Smash and Not Grab", "(Claptastic Voyage) Destroy the Tassiter Proxy."],
        ["Smash the System", "Completed all 5 rounds of The Holodome."],
        ["Sociopathic Networker", "(Claptastic Voyage) Talk to all of Claptrap's Holographic Projections."],
        ["Space Lord", "Reached level 50."],
        ["Space Rookie", "Reached level 5."],
        ["Stronger! Smarter!", "Completed the Badass Round of The Holodome."],
        ["Super Secret Stash", "Opened Zarpedon's Chest."],
        ["That Helped, Right?", "Experienced all Vault Hunter Modes using VaultHunter.EXE."],
        ["That Tasted Purple!", "Had purple-rated gear or better equipped in every slot."],
        ["The Bigger They Are", "Defeated the Invincible Empyrean Sentinel raid boss."],
        ["The Duelist", "Won a duel."],
        ["The Gift that Keeps on Giving", "(Claptastic Voyage) Experience all 9 game modes and all 9 modifiers of the Mutator."],
        ["The Gun In The Stone", "Removed Excalibastard from the stone."],
        ["The Guts Of Helios", "Completed the mission 'Watch Your Step'."],
        ["Totally Recalled", "(Claptastic Voyage) Recover the Override Key."],
        ["Vault Hunter Superior", "Defeated the Opha Superior."],
        ["Welcome To The Rock", "Completed the mission 'Marooned'."],
        ["Wheely Fast", "(Claptastic Voyage) Outrun the Wheel in the Temple of Boom."],
        ["Who Constructs The Constructor?", "Completed the mission 'Let's Build A Robot Army'."],
        ["Who Needs Air?", "Suffocated for 5 continuous minutes without dying."],
        ["Who You Gonna Call?", "Completed the 'Sub-Level 13' missions with 3 other players."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
