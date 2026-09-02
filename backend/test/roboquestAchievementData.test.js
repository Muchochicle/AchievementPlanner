import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/roboquest.json - 86 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 692890 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("roboquest");

test("getPlannerData('roboquest') returns real planner data with 86 curated achievements", () => {

    assert.ok(game, "expected real planner data for roboquest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 86);

});

test("every Roboquest achievement has a unique id from 1 to 86 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 86 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 86);
    assert.strictEqual(new Set(apinames).size, 86);

});

test("every Roboquest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 86 Roboquest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ammo Belt", "Reach +75% bonus Ammo in a run as the Guardian."],
        ["Bazaar Best Friend", "Have at least 15 Items equipped at once during a run."],
        ["Best Buddy Forever", "Finish the game with Buddybot equipped."],
        ["BOOSTER!", "Gain a Booster."],
        ["Booyakasha", "Finish the game as the Commando."],
        ["Boss Punisher (Bronze)", "Take down 5 Bosses."],
        ["Boss Punisher (Gold)", "Take down 15 Bosses."],
        ["Boss Punisher (Silver)", "Take down 10 Bosses."],
        ["Bot Skewer", "Deal more than 1,000 damage with a single Javelin."],
        ["Butlers Never Die", "Reboot the wrecked butler robot, Alfred Beauregard, at the Basecamp."],
        ["Captain Mc Slice", "Find and pick up the Sword."],
        ["Commando", "Unlock the Commando."],
        ["Confrérie du Croissant", "Change the game language to French."],
        ["Crystal Claimer (Bronze)", "Claim 1 Power Crystal."],
        ["Crystal Claimer (Gold)", "Claim 6 Power Crystals."],
        ["Crystal Claimer (Silver)", "Claim 3 Power Crystals."],
        ["Damage Dealer (Bronze)", "Deal 10,000 damage."],
        ["Damage Dealer (Gold)", "Deal 1,000,000 damage."],
        ["Damage Dealer (Silver)", "Deal 500,000 damage."],
        ["Easy Peasy", "Take down a boss without taking damage."],
        ["Elementalist", "Unlock the Elementalist."],
        ["Elementary", "Finish the game as the Elementalist."],
        ["Endless Journey", "Get knocked out in the Endless Mode."],
        ["Energy Wallet", "Spend at least 40 Powercells in a single run."],
        ["Engineer", "Unlock the Engineer."],
        ["Evolution", "Have 6 Singularities active simultaneously."],
        ["Fast and Furious", "Finish the game as the Recon."],
        ["Faster Than Light", "Reach the maximum Movement Speed bonus."],
        ["Field Mechanic", "Reboot your Brobot."],
        ["Final Flash", "Deal more than 1,000 damage with a single Comet."],
        ["For the Swarm!", "Have at least 5 friends deployed at once as the Engineer."],
        ["Gotta Catch' Em All", "Complete the Museum."],
        ["Hardened Guardian", "Finish the game on Guardian 4 difficulty."],
        ["Haven 8", "Complete Act 1 of a run."],
        ["Hero Landing", "Perform a Hero Landing as the Superbot."],
        ["Home Sweet Home", "Craft all Basecamp upgrades."],
        ["Inspector Gadget (Bronze)", "Unlock 1 Gadget."],
        ["Inspector Gadget (Gold)", "Unlock 11 Gadgets."],
        ["Inspector Gadget (Silver)", "Unlock 5 Gadgets."],
        ["Iron Maiden", "Reach the maximum Armor bonus."],
        ["It's Gonna be a Looong Journey", "Get knocked out in the Canyons."],
        ["Just in Time", "Defuse the bomb within the last second."],
        ["Legen... wait for it... dary!", "Equip a Fantastic weapon."],
        ["Log Collector (Bronze)", "Retrieve 1 Data-Log."],
        ["Log Collector (Gold)", "Retrieve 51 Data-Logs."],
        ["Log Collector (Silver)", "Retrieve 20 Data-Logs."],
        ["Mamma Mia", "Perform 5 Headbonks in a row without landing."],
        ["Master Gambler", "Win the Wonka Bar gamble."],
        ["Meet my Brobot", "Join a Brobot's game."],
        ["Moonwalker", "Complete Act 3 of a run (reach the Moon)."],
        ["Muscle +4000", "Reach level 15 in a run."],
        ["My Little Buddy", "Find and pick up Buddybot."],
        ["Nest of Corruption", "Discover a Corrupted level."],
        ["Oopsie...", "Trigger the boss Billy Boom's self-destruct - stand close to him, or damage the switch on his back once his health is low, to fill his charge meter."],
        ["Overperked", "Have 5 Perks active at once."],
        ["Party Bus", "Jump with the Hoverbus in the Loading Screen."],
        ["Perfect Run", "Finish the game with rank S average."],
        ["Pimp my Buddy", "Upgrade Buddybot to a Fantastic weapon."],
        ["Portal Online!", "Repair the Endless Mode portal."],
        ["Powercell Gatherer (Bronze)", "Gather 50 Powercells."],
        ["Powercell Gatherer (Gold)", "Gather 2,000 Powercells."],
        ["Powercell Gatherer (Silver)", "Gather 1,000 Powercells."],
        ["Ranger", "Unlock the Ranger."],
        ["Reboot", "Finish the game."],
        ["Recon", "Unlock the Recon."],
        ["Revenge", "Finish the game as the Superbot."],
        ["Robo-Regulator (Bronze)", "Take down 500 enemies."],
        ["Robo-Regulator (Gold)", "Take down 10,000 enemies."],
        ["Robo-Regulator (Silver)", "Take down 5,000 enemies."],
        ["Science Above All!", "Finish the game as the Engineer."],
        ["Shovel Knight", "Find and pick up The Shovel."],
        ["Spare Some Change?", "Give Powercells to Wallstreet Slim."],
        ["Special Delivery", "Take down at least 3 different enemies with a single Rocket."],
        ["Superbot", "Unlock the Superbot class."],
        ["Sushi Master", "Take down at least 3 different enemies in a single Dagger hit."],
        ["Taking it Back!", "Complete Act 2 of a run."],
        ["The Last Bastion", "Finish the game as the Guardian."],
        ["The Long Hunt", "Finish the game as the Ranger."],
        ["The Power of Friendship", "Finish the game with a Brobot."],
        ["Ultimate Guardian", "Finish the game on Guardian 4 difficulty with rank S average."],
        ["Waaaaarp Zone!", "Find and travel through the Portal."],
        ["Whack-A-Mole", "Take down Diggy Mole using the Bonk Hammer."],
        ["What's That Lever For?", "Activate the lever in the Excavation Site."],
        ["Wrench Picker (Bronze)", "Gather 50 Wrenches."],
        ["Wrench Picker (Gold)", "Gather 500 Wrenches."],
        ["Wrench Picker (Silver)", "Gather 250 Wrenches."],
    ];

    assert.strictEqual(officialAchievements.length, 86, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
