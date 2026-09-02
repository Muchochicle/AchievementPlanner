import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-6.json - 99 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2369390 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("far-cry-6");

test("getPlannerData('far-cry-6') returns real planner data with 99 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 99);

});

test("every Far Cry 6 achievement has a unique id from 1 to 99 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 99 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 99);
    assert.strictEqual(new Set(apinames).size, 99);

});

test("every Far Cry 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 99 Far Cry 6 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["@CanYouPetTheCroc", "Pet Guapo"],
        ["A New Dawn", "Successfully escape Joseph's mind"],
        ["Accessorizing", "Unlock all weapons in Pagan's Armory (Solo Game only)"],
        ["Agua Mala", "Complete Special Operation: Maceo on Mastery 3 difficulty"],
        ["Alpha Guerrilla", "Successfully complete 5 Bandido Operations"],
        ["Armed to the Teeth", "Collect 49 Unique Weapons"],
        ["Back Home", "Escape the Encasement with Fai's help"],
        ["Backpacking", "Acquire every Supremo in Yara"],
        ["Beginner's Luck", "Win a Dominoes game"],
        ["Car Cry", "Collect all 4 Rides"],
        ["Check It Out", "Capture 10 Checkpoints (Solo Campaign only)"],
        ["Co-Dependent", "Capture an FND base with a Co-op partner"],
        ["Crocodile Tears", "Complete Special Operation: Cocodrilo on Mastery 3 difficulty"],
        ["Crusader", "Escape Joseph's mind with a score of at least 25,000"],
        ["Crystal Crusader", "Complete Color Combat without Dani's health falling to a critical level"],
        ["Cutting Foreign Ties", "Recruit the Legends of '67 and La Moral"],
        ["Dear Diary", "Collect all of Vaas' Diary Pages"],
        ["Death From Above", "Take out a soldier from 50m above them"],
        ["Definition of Insanity", "Escape Vaas' mind at Mind Level 5"],
        ["Demolitions Expert", "Blow up 30 Defense Units as Fai in Comandante Fai"],
        ["Didn't See That Coming!", "Use a Security Control Center to disable all cameras and alarms"],
        ["Do It Yourself", "Install every Mod on a single Resolver Weapon"],
        ["Early Drafts", "Collect all of Pagan's Diary Pages"],
        ["Enlightened Monarch", "Discover every location in Pagan's mind"],
        ["Everything Must Go", "Complete Special Operation: Los Tres Santos on Mastery 3 difficulty"],
        ["Extinction Level Event", "Complete Special Operation: Mesozoico on Mastery 3 difficulty"],
        ["False Idols", "Collect all of the Joseph Chibis"],
        ["Family History", "Collect all of Joseph's Diary Pages"],
        ["Fashionista", "Equip a full matching Gear Set"],
        ["Finders Keepers!", "Return 3 FND Resource vehicles in mint condition"],
        ["Flawless Clarity", "Complete a run in Lost Between Worlds in 15 minutes"],
        ["Freudian Field Day", "Unlock all weapons in Vaas' Armory (Solo Game only)"],
        ["Friendly Skies", "Blow up 16 Anti-Aircraft Cannons (Solo Campaign only)"],
        ["Fry Cry", "Purchase 15 Meals"],
        ["Furiously Fast", "Have 10 parts installed on a Ride"],
        ["Glamping", "Build one of each Camp Facility (Solo Campaign only)"],
        ["Glorious Leader", "Reach the Rank of Comandante"],
        ["Heated Conflict", "Take out 10 soldiers with active Heat"],
        ["Heavenly Father", "Unlock all of Joseph's traits in the Mirror"],
        ["Hidden Cash", "Locate a stash of hidden Moneda in any Special Operation"],
        ["Hidden In Plain Sight", "Find your way to Miami"],
        ["Hit 'n Run", "Run over 10 soldiers in a vehicle"],
        ["Hogar Dulce Hogar", "Fully upgrade one Camp Facility at any Guerrilla Camp (Solo Campaign only)"],
        ["I Rule This Kingdom", "Escape Vaas’ mind with a score of at least 25,000"],
        ["Intergalactic Mechanic", "Collect all 5 Vessel Shards"],
        ["Into the Void", "Take out 25 Defense Units with gadgets"],
        ["It's Raining Treasure!", "Intercept 10 Military Supply Drops (Solo Campaign Only)"],
        ["Jawson Brody", "Take out a shark with an explosion"],
        ["Liberty", "Capture all FND Bases (Solo Campaign only)"],
        ["Loyal Army", "Recruit 5 Amigos"],
        ["Mighty Minotaur", "Take out 10 Defense Units with melee attacks in one run of The Maze"],
        ["Min-Maxed", "Have 8 Power equipped at one time"],
        ["Mind Monarch", "Escape Pagan's mind with a score of at least 25,000"],
        ["Montero Justicia", "Recruit the Monteros"],
        ["Ninjerilla", "Capture an FND Base without being detected (Solo Campaign only)"],
        ["No, I Won", "Escape Vaas' mind"],
        ["Non-Profit", "Carry at least 8,000 Penance at one time"],
        ["Not So Special", "Take out 10 Special Forces soldiers"],
        ["Not So Tough", "Disable and hijack a tank using an EMP device"],
        ["Now You're Riftin'", "Complete 5 consecutive rifts without using glints to respawn"],
        ["Oh No You Don't!", "Take out 3 Insurgent Leaders"],
        ["Outdated Tech", "Take out a soldier by sabotaging an alarm"],
        ["Overheated", "Complete a Special Operation"],
        ["Parables", "Collect all of the Visions in Joseph's mind"],
        ["Pilgrimage", "Discover every location in Joseph's mind"],
        ["Pocket Money", "Carry at least 8,000 Respect at once"],
        ["Prepper", "Unlock all weapons in Joseph's Armory (Solo Game only)"],
        ["Puff, Puff, Vaas", "Collect all of the Vaas Chibis"],
        ["Queenslayer", "Complete Special Operation: Puerta del Edén on Mastery 3 difficulty"],
        ["Radio is More My Thing", "Collect all of the Visions in Pagan's mind"],
        ["Recrooster", "Find all Roosters"],
        ["Refracted Yara", "Enter the portal and complete Fractured Fortress"],
        ["Road Rage", "Perform a Vehicle Machete Kill from a horse"],
        ["Secret Weapon", "Distract 10 soldiers with Chorizo"],
        ["Self-Help", "Fully upgrade all Weapon Cases in Vaas' Armory (Solo Game only)"],
        ["Slip Sliding Away", "Slide 200m at once"],
        ["So Much For Poetics", "Collect all of the Visions in Vaas' mind"],
        ["Sophishticated", "Catch 10 fish"],
        ["Speed Racer", "Complete 3 Gran Premios"],
        ["Stay Cool", "Complete any Special Operation without exceeding 50% on the PG-240X's temperature meter"],
        ["Strutting His Stuff", "Equip Chicharrón with the Motherclucker Outfit"],
        ["Sun Striker", "Take out 20 Defense Units in one run of Death by Darkness"],
        ["Termination Phase", "Free 30 hostages during a Lola's Informants challenge in any Special Operation"],
        ["That's My Jam", "Find 15 USB Sticks"],
        ["That's Puzzling", "Unlock 15 Criptograma Chests"],
        ["The 1%", "Carry at least 8,000 Cash at one time"],
        ["This Is Your Brain", "Discover every location in Vaas' mind"],
        ["Top of the Pecking Order", "Win a Cockfighting match"],
        ["Toxic Influence", "Have poisoned soldiers kill 5 other enemies"],
        ["True End(ing)", "Escape Pagan's mind"],
        ["Ultimate Predator", "Hunt all Mythical Animals (Solo Campaign only)"],
        ["Undying Tradition", "Complete the Yaran Story \"Triada Blessings\""],
        ["Vanity Project", "Collect all of the Pagan Chibis"],
        ["Viva La Revolución", "Take back Yara"],
        ["Voz del Pueblo", "Recruit Máximas Matanzas"],
        ["Walking the Path", "Escape Joseph's mind at Mind Level 5"],
        ["What's a King to a God?", "Escape Pagan's mind at Mind Level 5"],
        ["Yaran National Scuba Team", "Swim to a depth of 185 meters in Sunken Esperanza"],
        ["Yo Soy Dani Rojas", "Select Dani's look (Solo Campaign only)"],
    ];

    assert.strictEqual(officialAchievements.length, 99, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
