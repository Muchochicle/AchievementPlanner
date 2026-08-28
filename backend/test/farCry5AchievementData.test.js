import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-5.json - 72 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 552520 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 72 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("far-cry-5");

test("getPlannerData('far-cry-5') returns real planner data with 72 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 72);

});

test("every Far Cry 5 achievement has a unique id from 1 to 72 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 72 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 72);
    assert.strictEqual(new Set(apinames).size, 72);

});

test("every Far Cry 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 72 Far Cry 5 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["80s Hero", "Complete the game in Action Movie Mode."],
        ["A Wing And A Prayer", "Fly Nick's plane. Hopefully you're not afraid of heights (Solo Campaign only)."],
        ["Ace Killer", "Destroy 10 planes while driving any aerial vehicle (Campaign only)."],
        ["Ain't No Wallflower", "Who are these people? Speak to 50 citizens of Hope County (Solo Campaign only)."],
        ["ARCADE Competitor", "Win 10 featured maps in Multiplayer (Arcade only)."],
        ["ARCADE Enthusiast", "Successfully complete 10 featured Arcade maps in Solo or Co-op (Arcade only)."],
        ["ARCADE Hero", "Play the 'Arcade Hero' mode 5 times (Arcade only)."],
        ["ARCADE Hunter", "Kill 100 enemies in Arcade Multiplayer maps (Arcade only)."],
        ["ARCADE Player", "Reach level 20 in the Arcade (Arcade only)."],
        ["Been There, Done That", "Complete all Hunting & Fishing Challenges (Campaign only)."],
        ["Big Spender", "Spend $50000 in Vehicle Shops (Campaign only)."],
        ["Blissful", "Save the Marshal from the Bliss (Solo Campaign only)."],
        ["Close and Personal", "Perform 25 close combat Takedown Kills (Campaign only)."],
        ["Death From Above", "Drop a bomb from a plane and destroy or disable 4 vehicles at once (Campaign only)."],
        ["DLC Zombies: Blood Zragon", "Kill the Blood Dragon in Killer Climate."],
        ["DLC Zombies: DeceaZed to ExZist", "Kill 5000 total Gougers, Hot Heads, or Behemoths in any mode."],
        ["DLC Zombies: Early ExZit Denied", "Try to escape the bridge early in Burned Bridges."],
        ["DLC Zombies: FertiliZer", "Kill 10 Gougers or Hot Heads with the tractor in Fields of Terror."],
        ["DLC Zombies: Gold MedaliZt", "Get a gold medal in all 7 movie pitches in Score Attack."],
        ["DLC Zombies: Killer BeeZ", "Destroy all the Zom-bee nests in Laboratory of the Dead."],
        ["DLC Zombies: ReZolution", "Complete all 7 movie pitches."],
        ["DLC: Mars: Mars Second Amendment", "Buy 12 weapons."],
        ["DLC: Mars: Martian Journal", "Collect all of Larry's notes (Host Only)."],
        ["DLC: Mars: Nick's Story", "Complete the game (Host Only)."],
        ["DLC: Mars: Slimy Death", "Hit 10 Arachnids with Crabmones."],
        ["DLC: Mars: The Queen is Dead!", "Kill all the Queens (Host Only)."],
        ["DLC: Mars: Welcome to Mars", "Reboot the Terminal on top of the Control Center Antenna."],
        ["DLC: Mars:Bug Squasher", "Perform 10 takedowns on Arachnids using the Power Glove."],
        ["Explosive Surprise", "Sabotage 5 vehicles in a way that kills an enemy (Campaign only)."],
        ["Extra Crafty", "Craft 25 recipes (Campaign only)."],
        ["Fashion First", "Purchase $1000 in clothing (Campaign only)."],
        ["Fertilizing the Land", "Using a tractor, obliterate 5 enemies (Campaign only)."],
        ["Fish Market", "Sell 20 fish for cash (Campaign only)."],
        ["Ghost Kill", "Perform a Headshot kill with any bow or rifle on an enemy cultist more than 150m away (Campaign only)."],
        ["Hitting it Off", "Play 3 quests with a friend (Campaign only)."],
        ["Hope County Master Angler", "Acquire all 4 Fishing Rods (Campaign only)."],
        ["Ignoble Beasts", "Kill a bison using only melee weapons (Campaign only)."],
        ["Infamous", "Complete New Game+ with Infamous difficulty."],
        ["Kicking the Hornet's Nest", "Trigger the wrath of a Herald (Solo Campaign only)."],
        ["Leave no one behind", "Free the 3 US prisoner of war."],
        ["Liberator", "Liberate 5 locations from the Project at Eden's Gate (Campaign only)."],
        ["Like A Bird", "Use a wingsuit to travel more than 5000m (Campaign only)."],
        ["Locked and Loaded", "Fully customize your weapon (Campaign only)."],
        ["Make them count", "Kill a total of 25 enemies with airstrikes."],
        ["Only You", "Sucessfully complete the First Trial (Solo Campaign only)."],
        ["Opportunity Knocks", "Using rocks or cans, distract 15 enemies (Campaign only)."],
        ["Pack Rat", "Grab 1 of each collectible item. You never know when it will come in handy (Solo Campaign only)."],
        ["Peachy Keen", "Bait Peaches into going back home (Solo Campaign only)."],
        ["Road Gunner", "While driving or leaning out of a vehicle, kill 25 enemies (Campaign only)."],
        ["Roguelike", "Complete the game in Survivor Mode."],
        ["Saving Deputy Hudson", "Save Deputy Hudson (Solo Campaign only)."],
        ["Saving Deputy Pratt", "Save Deputy Pratt (Solo Campaign only)."],
        ["Saving Sheriff Whitehorse", "Save Sheriff Whitehorse (Solo Campaign only)."],
        ["Scavenger", "Follow the clues to the end of 3 treasure hunts (Solo Campaign only)."],
        ["Science Fact", "Put aside skepticism and help Larry (Solo Campaign only)."],
        ["Sewer Rat", "Destroy a cult water treatment pump and make them thirst for revenge (Solo Campaign only)."],
        ["Silent Death", "Perform 25 stealth kills while you have the 4 survival instinct tokens."],
        ["Special Delivery", "Ensure a baby's safe passage into this world (Solo Campaign only)."],
        ["Squash and Run", "Run over and kill 20 enemies (Campaign only)."],
        ["Stocked Garage", "Buy 3 vehicles to populate your garage (Campaign only)."],
        ["Survivalist", "Purchase half of all perks available (Campaign only)."],
        ["The Greatest SOB That Ever Lived", "Laugh in danger's face by executing a Clutch Nixon stunt in each region (Solo Campaign only)."],
        ["The Hurk Locker", "Truly bond with Hurk by destroying 15 vehicles together (Campaign only)."],
        ["The Spark", "Complete the game intro by liberating Dutch’s island (Solo Campaign only)."],
        ["Together Forever", "Get to the End (Solo Campaign only)."],
        ["Troublemaker", "Discover the joys of destroying cult property in every region (Solo Campaign only)."],
        ["Walk The Path", "Discover the Bliss (Solo Campaign only)."],
        ["Welcome to Nam", "Get back your gear at the helicopter crash site."],
        ["Wendell's Story", "Complete the game."],
        ["What Now?", "Complete 3 Side Missions in Hope County (Solo Campaign only)."],
        ["Where's the Beef?", "Tenderize a bull with your bare hands. To death (Campaign only)."],
        ["You Are Wrath", "Be deemed the Sin of Wrath (Solo Campaign only)."],
    ];

    assert.strictEqual(officialAchievements.length, 72, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
