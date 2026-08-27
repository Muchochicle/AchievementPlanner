import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/risk-of-rain-2.json - 171 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 632360 (fetched through this app's own services/steamApi.js) -
// 154 of 171 ship a real, official Steam description. The 17 hidden
// achievements (the Alloyed Collective's Purge/Decompile pairs, the
// False Son's King of the Hill/Purified Freedom, Chef's Order Up!,
// Drifter's Lost in Transit and Mastery, and Operator's Mastery) are
// hidden achievements Steam never describes publicly (confirmed via the
// same API call) - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions, cross-checked
// against riskofrain2.wiki.gg and TrueSteamAchievements. difficulty/
// estimatedTime remain curatorial judgments, same convention as every
// other planner difficulty/time field in this catalog.
const riskOfRain2 = getPlannerData("risk-of-rain-2");

test("getPlannerData('risk-of-rain-2') returns real planner data with 171 curated achievements", () => {

    assert.ok(riskOfRain2, "expected real planner data for risk-of-rain-2");
    assert.ok(Array.isArray(riskOfRain2.achievements));
    assert.strictEqual(riskOfRain2.achievements.length, 171);

});

test("every Risk of Rain 2 achievement has a unique id from 1 to 171 and a unique apiname", () => {

    const ids = riskOfRain2.achievements.map(a => a.id);
    const apinames = riskOfRain2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 171 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 171);
    assert.strictEqual(new Set(apinames).size, 171);

});

test("every Risk of Rain 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of riskOfRain2.achievements) {

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

test("every one of the 154 officially-described Risk of Rain 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 17 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Rapidfire", "Reach +200% attack speed."],
        ["Automation Activation", "Activate 6 turrets in a single run."],
        ["...To Be Left Alone", "Stabilize the Cell in the Void Fields."],
        ["Warm For Life", "Die three times while burning."],
        ["Captain: Worth Every Penny", "As Captain, repair and recruit a TC-280 Prototype."],
        ["Captain: Mastery", "As Captain, beat the game or obliterate on Monsoon."],
        ["Captain: Wanderlust", "As Captain, visit 10 different environments in a single run."],
        ["Moon Worshipper", "Carry 5 Lunar items in a single run."],
        ["Glorious Battle", "Charge the Teleporter with less than 10% health."],
        ["Cleanup Duty", "Destroy 20 flying rocks in Sky Meadow."],
        ["Commando: Mastery", "As Commando, beat the game or obliterate on Monsoon."],
        ["Commando: Godspeed", "As Commando, fully charge the first-stage teleporter before the timer hits 5 minutes."],
        ["Commando: Rolling Thunder", "As Commando, land the killing blow on an Overloading Worm."],
        ["Commando: Incorruptible", "As Commando, clear 20 stages in a single run without picking up any Lunar items."],
        ["The Long Road", "Complete 20 stages in a single run."],
        ["Engineering Perfection", "Complete 30 stages."],
        ["Washed Away", "Beat the game."],
        ["The Calm", "Beat the game on Monsoon difficulty."],
        ["Ascendant", "Defeat the Teleporter bosses after activating 2 Shrines of the Mountain."],
        ["Prismatically Aligned", "Complete a Prismatic Trial."],
        ["Advancement", "Complete a Teleporter event."],
        ["Flawless", "Fully charge a Teleporter without getting hit."],
        ["Warrior", "Reach and complete the 3rd Teleporter event without dying."],
        ["Naturopath", "Without healing, reach and complete the 3rd Teleporter event."],
        ["True Respite", "Obliterate yourself at the Obelisk.."],
        ["Acrid: Mastery", "As Acrid, beat the game or obliterate on Monsoon."],
        ["Acrid: Bad Medicine", "As Acrid, land the final blow on a Scavenger."],
        ["Acrid: Easy Prey", "As Acrid, land the killing blow on 50 total enemies that have 1 hit point left."],
        ["Acrid: Pandemic", "As Acrid, inflict Poison 1000 total times."],
        ["Guidance Offline", "Defeat the unique guardian of Siren's Call."],
        ["Learning Process", "Die 5 times."],
        ["I Love Dying!", "Die 20 times."],
        ["Experimenting", "Pick up 5 different types of Equipment."],
        ["The Basics", "Discover 10 unique white items."],
        ["Engineer: Better With Friends", "As Engineer, recruit 12 minions at one time."],
        ["Engineer: Mastery", "As Engineer, beat the game or obliterate on Monsoon."],
        ["Engineer: Zero Sum", "As Engineer, finish charging the teleporter with zero monsters remaining on the stage."],
        ["Engineer: 100% Calculated", "As Engineer, defeat the teleporter boss in less than 5 seconds after it spawns."],
        ["\"Is This Bugged?\"", "Fail the Shrine of Chance 3 times in a row."],
        ["Her Concepts", "Find the Altar to N'kuhana."],
        ["[REDACTED]", "Open the Timed Security Chest on Rallypoint Delta."],
        ["Newtist", "Discover and activate 8 unique Newt Altars."],
        ["Pause.", "Free the survivor suspended in time."],
        ["Deicide", "Defeat an Elite boss on Monsoon difficulty."],
        ["Macho", "Deal 5000 damage in one shot."],
        ["Huntress: Finishing Touch", "As Huntress, land a killing blow with every possible hit of a single glaive."],
        ["Huntress: Mastery", "As Huntress, beat the game or obliterate on Monsoon."],
        ["Huntress: One Shot, One Kill", "As Huntress, collect and carry 12 Crowbars at once."],
        ["Huntress: Piercing Wind", "As Huntress, start and finish either Rallypoint Delta or Scorched Acres without falling below 100% health."],
        ["Blockade Breaker", "Kill 15 boss monsters in a single run."],
        ["Keyed Up", "Defeat the Teleporter boss under 15 seconds."],
        ["Death Do Us Part", "Discover the hidden chamber in the Abandoned Aqueduct."],
        ["Elite Slayer", "Defeat an Elite-type monster."],
        ["Cut Down", "Defeat 500 elite monsters."],
        ["Blackout", "Defeat the unique guardian of Gilded Coast without any beacons deactivating."],
        ["Slaughter", "Defeat 3000 enemies."],
        ["Loader: Earthshatter", "As Loader, land a Charged Gauntlet hit at 300mph or higher."],
        ["Loader: Mastery", "As Loader, beat the game or obliterate on Monsoon."],
        ["Loader: Swing By", "As Loader, reach and proceed through the Celestial Portal in 25 minutes or less."],
        ["Bookworm", "Collect 10 Monster or Environment Logs."],
        ["Deja Vu?", "Loop back to the first stage."],
        ["Artificer: Orbital Bombardment", "As Artificer, kill 15 enemies before touching the ground."],
        ["Artificer: Mastery", "As Artificer, beat the game or obliterate on Monsoon."],
        ["Artificer: Chunked!", "As Artificer, fully defeat the teleporter boss in a one-second burst of damage."],
        ["Artificer: Massacre", "As Artificer, perform a multikill of 20 enemies."],
        ["Multikill!", "Kill 15 enemies simultaneously."],
        ["One with the Woods", "Fully upgrade a Shrine of the Woods."],
        ["Mercenary: Mastery", "As Mercenary, beat the game or obliterate on Monsoon."],
        ["Mercenary: Ethereal", "As Mercenary, complete a Prismatic Trial without falling below 100% health."],
        ["Mercenary: Demon of the Skies", "As Mercenary, don't touch the ground for 30 seconds."],
        ["Going Fast Recommended", "Reach +300% movespeed (includes sprinting)."],
        ["Warmonger", "Complete 3 Combat Shrines in a single stage."],
        ["Never Back Down", "In 4 consecutive stages don’t leave the teleporter radius until it is fully charged."],
        ["Trial of Spite", "Complete the Trial of Spite."],
        ["Trial of Command", "Complete the Trial of Command."],
        ["Trial of Honor", "Complete the Trial of Honor."],
        ["Trial of Enigma", "Complete the Trial of Enigma."],
        ["Trial of Chaos", "Complete the Trial of Chaos."],
        ["Trial of Glass", "Complete the Trial of Glass."],
        ["Trial of Dissonance", "Complete the Trial of Dissonance."],
        ["Trial of Evolution", "Complete the Trial of Evolution."],
        ["Trial of Metamorphosis", "Complete the Trial of Metamorphosis."],
        ["Trial of Sacrifice", "Complete the Trial of Sacrifice."],
        ["Trial of Vengeance", "Complete the Trial of Vengeance."],
        ["Trial of Kin", "Complete the Trial of Kin."],
        ["Trial of Swarms", "Complete the Trial of Swarms."],
        ["Trial of Death", "Complete the Trial of Death."],
        ["Trial of Frailty", "Complete the Trial of Frailty."],
        ["Trial of Soul", "Complete the Trial of Soul."],
        ["...Maybe One More.", "Duplicate the same item 7 times in a row with a 3D Printer."],
        ["Verified", "Complete the first Teleporter event 5 times."],
        ["Power Plant", "Repair the broken robot with an Escape Pod's Fuel Array."],
        ["The Lone Survivor", "Stay alive for 30 consecutive minutes."],
        ["The Demons And The Crabs", "Kill 20 Hermit Crabs by chasing them off the edge of the map."],
        ["MUL-T: Mastery", "As MUL-T, beat the game or obliterate on Monsoon."],
        ["MUL-T: Pest Control", "As MUL-T, defeat two Beetle Queens without leaving the teleporter zone."],
        ["MUL-T: Gotcha!", "As MUL-T, land the killing blow on an Imp Overlord with the Preon Accumulator."],
        ["Mechanic", "Repair 30 drones or turrets."],
        ["Funded!", "Collect $30,480 total gold."],
        ["REX: Mastery", "As REX, beat the game or obliterate on Monsoon."],
        ["REX: Dunked", "As REX, kill a Clay Dunestrider on Abandoned Aqueduct by throwing it into a pit."],
        ["REX: Bushwhacked", "As REX, complete an entire teleporter event while under 50% health."],
        ["Cosmic Explorer", "Discover and enter three unique portals."],
        ["Bandit: Mastery", "As Bandit, beat the game or obliterate on Monsoon."],
        ["Bandit: Classic Man", "As Bandit, successfully use 'Lights Out' to reset your cooldowns 15 times in a row."],
        ["Bandit: B&E", "As Bandit, kill the final boss with 'Lights Out'."],
        ["Bandit: Sadist", "As Bandit, kill a monster with 20 stacks of Hemorrhage."],
        ["Captain: Smushed", "As Captain, kill the final boss using a Supply Beacon"],
        ["Loader: The Thunderdome", "As Loader, kill three other Loaders in the Bulwark's Ambry."],
        ["Mercenary: Flash of Blades", "As Mercenary, use 20 abilities in 10 seconds."],
        ["MUL-T: Seventh Day", "As MUL-T, clear the Void Fields on Stage 7 or later."],
        ["REX: Full of Life", "As REX, heal for 1000 health at once."],
        ["Dragged Below", "Escape the Planetarium or complete wave 50 in Simulacrum."],
        ["Railgunner: Annihiliator", "As Railgunner, deal 1,000,000 damage in one shot."],
        ["Railgunner: Marksman", "As Railgunner, fire 30 consecutive sniper shots without missing a Weak Point."],
        ["Railgunner: Trickshot", "As Railgunner, get 3 kills with a single Supercharge shot while airborne."],
        ["Railgunner: Mastery", "As Railgunner, beat the game or obliterate on Monsoon."],
        ["「V??oid Fiend』: Mastery", "As 「V??oid Fiend』, beat the game or obliterate on Monsoon."],
        ["CHEF: Mastery", "As CHEF, beat the game or obliterate on Monsoon."],
        ["CHEF: Barbecued Bison Recipe Complete", "As CHEF complete 10 recipes by searing an oiled bison with Sear."],
        ["CHEF: You’ve Always Been Crazy", "As CHEF hit five airborne enemies with one instance of Roll."],
        ["CHEF: It’s Getting Hot In Here!", "As CHEF apply 20 stacks of Burn at once to the final boss."],
        ["False Son: Mastery", "As False Son, beat the game or obliterate on Monsoon."],
        ["False Son: Stare Them Down", "As False Son, kill 15 enemies with one activation of Laser of the Father."],
        ["False Son: Family Bonding", "As False Son, have Aurelionite kill the final boss while the final boss is inflicted with at least one Lunar Ruin."],
        ["False Son: Protein Heavy Diet", "As False Son, gain up to 40 Lunar Spikes through Growth."],
        ["Seeker: Mastery", "As Seeker, beat the game or obliterate on Monsoon."],
        ["Seeker: Clear Mind", "As Seeker, meditate 20 times without missing an input in a single run."],
        ["Seeker: Scorched Earth", "Deal 500,000% damage with one use of Sojourn's explosion"],
        ["Seeker: Airborne Souls", "As Seeker, hit three or more airborne enemies with a single use of the exploding third hit of Spirit Punch."],
        ["Acrid: Cleared Prime Meridian", "As Acrid, complete the Event on Prime Meridian."],
        ["Artificer: Cleared Prime Meridian", "As Artificer, complete the Event on Prime Meridian."],
        ["Bandit: Cleared Prime Meridian", "As Bandit, complete the Event on Prime Meridian."],
        ["Captain: Cleared Prime Meridian", "As Captain, complete the Event on Prime Meridian."],
        ["Commando: Cleared Prime Meridian", "As Commando, complete the Event on Prime Meridian."],
        ["Engineer: Cleared Prime Meridian", "As Engineer, complete the Event on Prime Meridian."],
        ["Huntress: Cleared Prime Meridian", "As Huntress, complete the Event on Prime Meridian."],
        ["Loader: Cleared Prime Meridian", "As Loader, complete the Event on Prime Meridian."],
        ["MUL-T: Cleared Prime Meridian", "As MUL-T, complete the Event on Prime Meridian."],
        ["Mercenary: Cleared Prime Meridian", "As Mercenary, complete the Event on Prime Meridian."],
        ["Railgunner: Cleared Prime Meridian", "As Railgunner, complete the Event on Prime Meridian."],
        ["REX: Cleared Prime Meridian", "As REX, complete the Event on Prime Meridian."],
        ["Void Fiend: Cleared Prime Meridian", "As Void Fiend, complete the Event on Prime Meridian."],
        ["Experienced Rebirth", "Gain the power of another life by offering to the Shrine of Rebirth."],
        ["Trial of Devotion", "Complete the Trial of Devotion."],
        ["Trial of Delusion", "Complete the Trial of Delusion."],
        ["Drifter: Trash Compactor", "As Drifter carry 20 temporary items at once."],
        ["Drifter: Leave No Trace", "As Drifter claim the contents of the lost backpack in the vault of Solutional Haunt."],
        ["Drifter: In The Bag", "As Drifter defeat a boss from the challenge of the Mountain using a Shrine of the Mountain."],
        ["Operator: Putting Together a Team", "As Operator recruit 5 different drones."],
        ["Operator: Not So Different", "As Operator defeat the teleporter boss on Conduit Canyon without touching the ground."],
        ["Operator: That Just Happened", "As Operator keep an Elder Lemurian airborne for 10 seconds."],
        ["Operator: That All You Got?", "As Operator kill 4 different types of monsters with a single ricochet."],
        ["Trial of Prestige", "Complete the Trial of Prestige"]
    ];

    assert.strictEqual(officialAchievements.length, 154, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["King of the Hill", "Purified Freedom", "Order Up!", "Engineer: Purge", "Bandit: Accept and Decompile", "Captain: Accept and Decompile", "Loader: Accept and Decompile", "Artificer: Accept and Decompile", "REX: Accept and Decompile", "Commando: Purge", "Acrid: Purge", "Huntress: Purge", "Mercenary: Purge", "MUL-T: Purge", "Drifter: Mastery", "Operator: Mastery", "Lost in Transit"]);

    const dataPairs = riskOfRain2.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 17 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    { const a = riskOfRain2.achievements.find(x => x.apiname === "DefeatFalseSon"); assert.ok(a && a.name === "King of the Hill" && a.description.length > 0, "expected DefeatFalseSon to be named \"King of the Hill\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "UnlockFalseSon"); assert.ok(a && a.name === "Purified Freedom" && a.description.length > 0, "expected UnlockFalseSon to be named \"Purified Freedom\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "ActivateChef"); assert.ok(a && a.name === "Order Up!" && a.description.length > 0, "expected ActivateChef to be named \"Order Up!\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "EngiPurge"); assert.ok(a && a.name === "Engineer: Purge" && a.description.length > 0, "expected EngiPurge to be named \"Engineer: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "Bandit2Decompile"); assert.ok(a && a.name === "Bandit: Accept and Decompile" && a.description.length > 0, "expected Bandit2Decompile to be named \"Bandit: Accept and Decompile\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "CaptainDecompile"); assert.ok(a && a.name === "Captain: Accept and Decompile" && a.description.length > 0, "expected CaptainDecompile to be named \"Captain: Accept and Decompile\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "LoaderDecompile"); assert.ok(a && a.name === "Loader: Accept and Decompile" && a.description.length > 0, "expected LoaderDecompile to be named \"Loader: Accept and Decompile\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "MageDecompile"); assert.ok(a && a.name === "Artificer: Accept and Decompile" && a.description.length > 0, "expected MageDecompile to be named \"Artificer: Accept and Decompile\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "TreebotDecompile"); assert.ok(a && a.name === "REX: Accept and Decompile" && a.description.length > 0, "expected TreebotDecompile to be named \"REX: Accept and Decompile\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "CommandoPurge"); assert.ok(a && a.name === "Commando: Purge" && a.description.length > 0, "expected CommandoPurge to be named \"Commando: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "CrocoPurge"); assert.ok(a && a.name === "Acrid: Purge" && a.description.length > 0, "expected CrocoPurge to be named \"Acrid: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "HuntressPurge"); assert.ok(a && a.name === "Huntress: Purge" && a.description.length > 0, "expected HuntressPurge to be named \"Huntress: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "MercPurge"); assert.ok(a && a.name === "Mercenary: Purge" && a.description.length > 0, "expected MercPurge to be named \"Mercenary: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "ToolbotPurge"); assert.ok(a && a.name === "MUL-T: Purge" && a.description.length > 0, "expected ToolbotPurge to be named \"MUL-T: Purge\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "DrifterClearGameMonsoon"); assert.ok(a && a.name === "Drifter: Mastery" && a.description.length > 0, "expected DrifterClearGameMonsoon to be named \"Drifter: Mastery\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "DroneTechClearGameMonsoon"); assert.ok(a && a.name === "Operator: Mastery" && a.description.length > 0, "expected DroneTechClearGameMonsoon to be named \"Operator: Mastery\" with a non-empty curatorial description"); }

    { const a = riskOfRain2.achievements.find(x => x.apiname === "FreeDrifter"); assert.ok(a && a.name === "Lost in Transit" && a.description.length > 0, "expected FreeDrifter to be named \"Lost in Transit\" with a non-empty curatorial description"); }

});
