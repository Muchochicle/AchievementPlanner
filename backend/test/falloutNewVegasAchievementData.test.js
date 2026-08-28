import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fallout-new-vegas.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 22380 (fetched through this app's own services/steamApi.js) - all 75 ship a real, official Steam description. Fallout: New
// Vegas has no Steam-hidden achievements.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const falloutNewVegas = getPlannerData("fallout-new-vegas");

test("getPlannerData('fallout-new-vegas') returns real planner data with 75 curated achievements", () => {

    assert.ok(falloutNewVegas, "expected real planner data for fallout-new-vegas");
    assert.ok(Array.isArray(falloutNewVegas.achievements));
    assert.strictEqual(falloutNewVegas.achievements.length, 75);

});

test("every Fallout: New Vegas achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = falloutNewVegas.achievements.map(a => a.id);
    const apinames = falloutNewVegas.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Fallout: New Vegas achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of falloutNewVegas.achievements) {

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

test("every one of the 75 official Fallout: New Vegas achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["New Kid", "Reached 10th level."],
        ["Up and Comer", "Reach 20th level."],
        ["The Boss", "Reach 30th level."],
        ["Ol' Buddy Ol' Pal", "Recruit any companion."],
        ["The Whole Gang's Here", "Recruit all companions."],
        ["Crafty", "Craft 20 items."],
        ["Mod Master", "Install 20 weapon mods."],
        ["Walker of the Mojave", "Discover 50 locations."],
        ["Master of the Mojave", "Discover 125 locations."],
        ["Globe Trotter", "Discover all snow globes."],
        ["You Run Barter Town", "Sell 10,000 caps worth of goods."],
        ["Blast Mastery", "Cause 10,000 damage with Energy Weapons."],
        ["Love the Bomb", "Cause 10,000 damage with Explosives."],
        ["Lead Dealer", "Cause 10,000 damage with Guns."],
        ["No Tumbler Fumbler", "Pick 25 locks."],
        ["Stim-ply Amazing", "Heal 10,000 points of damage with Stimpaks."],
        ["New Vegas Samurai", "Cause 10,000 damage with Melee Weapons."],
        ["Jury Rigger", "Repair 30 items."],
        ["Hack the Mojave", "Hack 25 terminals."],
        ["Artful Pocketer", "Pick 50 pockets."],
        ["Outstanding Orator", "Make 50 Speech challenges."],
        ["Desert Survivalist", "Heal 10,000 points of damage with food."],
        ["Old-Tyme Brawler", "Cause 10,000 damage with Unarmed weapons."],
        ["Know When to Fold Them", "Win 3 games of Caravan."],
        ["One Armed Bandit", "Play 10 spins of Slots."],
        ["Little Wheel", "Play 10 spins of Roulette."],
        ["Double Down", "Play 10 hands of Blackjack."],
        ["Caravan Master", "Win 30 games of Caravan."],
        ["The Courier Who Broke the Bank", "Get banned from all the Strip's casinos."],
        ["Hardcore", "Play the game from start to finish in Hardcore Mode."],
        ["Ain't That a Kick in the Head", "Complete Ain't That a Kick in the Head."],
        ["They Went That-a-Way", "Complete They Went That-a-Way."],
        ["Ring-a-Ding-Ding", "Complete Ring-a-Ding-Ding."],
        ["The House Always Wins", "Complete The House Always Wins."],
        ["For the Republic", "Complete For the Republic."],
        ["Render Unto Caesar", "Complete Render Unto Caesar."],
        ["Wild Card", "Complete Wild Card."],
        ["All or Nothing", "Complete All or Nothing."],
        ["Veni, Vidi, Vici", "Complete Veni, Vidi, Vici."],
        ["Eureka!", "Complete Eureka!"],
        ["No Gods, No Masters", "Complete No Gods, No Masters"],
        ["Come Fly With Me", "Complete Come Fly With Me."],
        ["Talent Pool", "Complete Talent Pool."],
        ["Return to Sender", "Complete Return to Sender."],
        ["Arizona Killer", "Complete Arizona Killer."],
        ["You'll Know It When It Happens", "Complete You'll Know It When It Happens."],
        ["G.I. Blues", "Complete G.I. Blues."],
        ["That Lucky Old Sun", "Complete That Lucky Old Sun."],
        ["Volare!", "Complete Volare!"],
        ["The Legend of the Star", "Complete The Legend of the Star."],
        ["Assemble Your Crew", "Recruit Dean Domino, Christine and Dog."],
        ["Cash Out", "Confront Father Elijah in the Sierra Madre's Vault."],
        ["Having a Ball", "Complete the Sierra Madre Gala Event."],
        ["Safety Deposit Box", "Trap Father Elijah in the Sierra Madre's Vault."],
        ["Sierra Souvenir Aficionado", "Collect 500 Sierra Madre Chips."],
        ["May my Hand Forget its Skill", "Evacuate Zion."],
        ["In a Foreign Land", "Scout the Zion Valley for signs of the White Legs."],
        ["O Daughter of Babylon", "Crush the White Legs."],
        ["When We Remembered Zion", "Arrive at Zion."],
        ["Restore Our Fortunes", "Resupply Daniel and the Sorrows."],
        ["Cardiac Arrest!", "Search your feelings... for your heart."],
        ["Making Friends", "Reactivate all of the Sink's robotic assistants."],
        ["Make up your Mind", "Make up your mind... about your brain."],
        ["Outsmarted", "Complete Old World Blues."],
        ["Spinal-Tapped", "Recovered X-8 vertebrae-pulse-de-sensitizer frequency!"],
        ["ED-Ecated", "Found all of ED-E's upgrades in the Divide."],
        ["Condemned to Repeat It", "Decided the fate of all the Divide dwellers."],
        ["Hometown Hero", "Completed Lonesome Road."],
        ["Rocket's Red Glare", "Fully upgraded The Divide's signature weapon."],
        ["Warhead Hunter", "Detonated all of the warheads in the Divide."],
        ["Curios and Relics", "Caused 10,000 damage with unique Mojave Wasteland weapons."],
        ["Master of the Arsenal", "Caused 10,000 damage with Gun Runners' Arsenal (GRA) Weapons."],
        ["Up to the Challenge", "Completed any three Gun Runners' Arsenal (GRA) one star (*) Challenges."],
        ["Combat Veteran", "Completed any three Gun Runners' Arsenal (GRA) two star (**) Challenges."],
        ["Pros Only", "Completed any three Gun Runners' Arsenal (GRA) three star (***) Challenges."]
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = falloutNewVegas.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
