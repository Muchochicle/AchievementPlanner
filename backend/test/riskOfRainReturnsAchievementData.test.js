import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/risk-of-rain-returns.json - 155 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1337520 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("risk-of-rain-returns");

test("getPlannerData('risk-of-rain-returns') returns real planner data with 155 curated achievements", () => {

    assert.ok(game, "expected real planner data for risk-of-rain-returns");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 155);

});

test("every Risk of Rain Returns achievement has a unique id from 1 to 155 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 155 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 155);
    assert.strictEqual(new Set(apinames).size, 155);

});

test("every Risk of Rain Returns achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 155 Risk of Rain Returns achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"...Ask Questions Later\"", "Drifter: Get 20 temporary items at once."],
        ["\"...Or Your Money Back\"", "Complete the Providence Trial \"Kited Blades\"."],
        ["\"Is This Bugged?\"", "Fail a shrine 3 times in a row."],
        ["A Dime A Dozen", "Kill 12 enemies simultaneously using the Gold-Plated Bomb."],
        ["A Little Extra Push", "Complete the Providence Trial \"Main Systems Offline\"."],
        ["A Sweet Smell", "Complete the Providence Trial \"Specimen Sampling\". Alternatively: Complete 25 stages as Enforcer."],
        ["Acrid's Hunger", "Complete the final Providence Trial as Acrid."],
        ["Activated", "Use the same Equipment Activator 5 times."],
        ["Aerodynamic", "Pilot: Kill 10 enemies without touching the ground or geysers."],
        ["All Purpose", "Complete the Providence Trial \"Brave Heart, Steady Hand\". Alternatively: Complete 25 stages as Commando."],
        ["Altered Genome", "Find the illegal shipment."],
        ["Among the Mushrooms", "Find the Artifact of Distortion."],
        ["Amplified", "Engineer: Acquire a Beam Drone."],
        ["Anti-Virus", "Complete the Providence Trial \"Ruins of the Future\". Alternatively: Collect 300 items as Loader."],
        ["Anywhere, Everywhere", "Visit 10 unique stages."],
        ["Aposematic", "Complete the Providence Trial \"Uncontrolled Experiment\". Alternatively: Defeat 3,000 enemies as Acrid."],
        ["Aquarium", "Complete the Providence Trial \"Drowning in Research\". Alternatively: Defeat 3,000 enemies as Engineer."],
        ["Artificer's Hope", "Complete the final Providence Trial as Artificer."],
        ["Bandit's Cunning", "Complete the final Providence Trial as Bandit."],
        ["Before Titans", "Kill the Magma Worm, Wandering Vagrant, and Colossus."],
        ["Below the Bridge", "Find the Artifact of Glass."],
        ["Beneath the Temple", "Find the Artifact of Spirit."],
        ["Big Red Button", "Pilot: Kill 30 enemies after launching them using Airstrike."],
        ["Biodegradable", "Complete the Providence Trial \"Equivalent Exchange\". Alternatively: Complete 25 stages as Drifter."],
        ["Bionic", "Loader: Travel 6,500 meters using the Hydraulic Gauntlet"],
        ["Blazing Victory", "Miner: Survive the teleporter event without falling below 50% health."],
        ["Broken Continuity", "Acrid: Kill Acrid in less than 15 seconds."],
        ["Burning Out", "Complete the Providence Trial \"Scorching Heart\". Alternatively: Collect 300 items as Miner."],
        ["By Design", "Complete the Providence Trial \"A Duplicator?!\"."],
        ["Campsite", "Complete the Providence Trial \"Lone Wolf\"."],
        ["Carrying Weight", "Get a gold rank on at least 15 Providence Trials."],
        ["Catch and Release", "CHEF: Have 20 cleavers out at once."],
        ["Catchy", "Acrid: Spread Epidemic to 25 enemies."],
        ["Chance of Showers", "Complete the Providence Trial \"Meteor Showers\"."],
        ["Chasing Shadows", "Complete the Providence Trial \"Inner Demons\"."],
        ["Chef's Recipe", "Complete the final Providence Trial as CHEF."],
        ["Classic Man", "Bandit: Reset your cooldown 15 times consecutively."],
        ["Close Calls", "Commando: Dodge 7 lethal attacks."],
        ["Commander", "Complete the Providence Trial \"Routine Maintenance\". Alternatively: Defeat 3,000 enemies as HAN-D."],
        ["Commando's Bravery", "Complete the final Providence Trial as Commando."],
        ["Controlled Demolition", "Engineer: Detonate 15 Bounding Mines within 5 seconds."],
        ["Cracking Claws", "CHEF: SEAR/FLAMBE 20 Sand Crabs"],
        ["Deforestation", "HAN-D: Kill 15 enemies at once using the Sawmerang."],
        ["Desperado", "Bandit: Kill a boss with 'Lights Out.'"],
        ["Dissolved", "Acrid: Spread 3,300 feet of caustic sludge."],
        ["Divebomb", "Complete the Providence Trial \"Crash Landing\". Alternatively: Defeat 3,000 enemies as Loader."],
        ["Divine Intervention", "Unlock a survivor."],
        ["Drifter's Spirit", "Complete the final Providence Trial as Drifter."],
        ["Drowned Below", "Find the Artifact of Enigma."],
        ["Empty Pockets", "Sniper: Beat the third stage without any players collecting items or equipment."],
        ["Endless Voyager", "Collect 4 Keycards."],
        ["Enforcer's Will", "Complete the final Providence Trial as Enforcer."],
        ["Engineer's Intellect", "Complete the final Providence Trial as Engineer."],
        ["Entropy", "Find the Artifact of Tempus."],
        ["Excavation", "Clear a path for the survivor."],
        ["Field Testing", "Complete the Providence Trial \"Get Off My Lawn!\"."],
        ["First Place", "Complete the Providence Trial \"Slide to the Finish!\". Alternatively: Defeat 3,000 enemies as Commando."],
        ["Flash of Light", "Mercenary: Eviscerate 50 enemies."],
        ["Free-Range", "Complete the Providence Trial \"A Fresh Harvest\". Alternatively: Collect 300 items as CHEF."],
        ["Full Circuit", "Complete the Providence Trial \"Lightning Strikes Twice\". Alternatively: Complete 25 stages as Artificer."],
        ["Gassed Up", "Complete the Providence Trial \"Highway Robbery\". Alternatively: Collect 300 items as Bandit."],
        ["Gold Medalist", "Get a gold rank on at least 5 Providence Trials."],
        ["Gourmet", "Obtain Meat Nugget, Bustling Fungus, Sprouting Egg, Bitter Root and Foreign Fruit in one run."],
        ["Grease Fire", "CHEF: Simultaneously kill 15 oiled enemies using SEAR/FLAMBE"],
        ["HAN-D's Directive", "Complete the final Providence Trial as HAN-D."],
        ["Handy", "Find the robot janitor."],
        ["High Caliber", "Sniper: Achieve 15 consecutive perfect reloads."],
        ["High Magnitude", "Complete the Providence Trial \"From All Angles\". Alternatively: Complete 25 stages as Engineer."],
        ["Higher Ground", "Complete the Providence Trial \"Go On Without Me\". Alternatively: Defeat 3,000 enemies as Enforcer."],
        ["Hivemind", "Complete the Providence Trial \"Gup Sorting?\"."],
        ["Hot Streak", "Miner: Reach level 10 without getting hurt more than once."],
        ["Hot-Blooded Vengeance", "Kill 8 Elder Lemurians without losing your Scorching status."],
        ["Huntress's Agility", "Complete the final Providence Trial as Huntress."],
        ["Hydraulic Press", "HAN-D: Kill 10 enemies simultaneously with FORCED_REASSEMBLY."],
        ["In Good Health", "Reach 650 health."],
        ["In the Forest", "Find the Artifact of Honor."],
        ["In the Hive", "Find the Artifact of Command."],
        ["In the Meadow", "Find the Artifact of Spite."],
        ["In the Soup", "Survive in lava for 1 minute straight."],
        ["Infinite Potential", "Complete the Providence Trial \"Shadows of the Past\". Alternatively: Defeat 3,000 enemies as Mercenary."],
        ["Insurance Fraud", "Use a health shrine that drops you below 5% health."],
        ["Iron Sights", "Sniper: 1-shot kill 10 enemies consecutively."],
        ["Itemized", "Obtain 30 unique items in one playthrough."],
        ["Junk Collector", "Kill the Scavenger."],
        ["Kaleidoscope", "Find the Artifact of Origin."],
        ["Keep It Up", "Complete the Providence Trial \"Juggling Priorities\"."],
        ["Last Wish", "Find the bloated survivor."],
        ["Like New", "HAN-D: Beat the third stage without falling below 60% health."],
        ["Live Wire", "Complete the Providence Trial \"Colossal Lift\". Alternatively: Complete 25 stages as Loader."],
        ["Lizard Bait", "Defeat 20 Lemurians in one playthrough."],
        ["Loader's Strength", "Complete the final Providence Trial as Loader."],
        ["Lucky Devil", "Pass a shrine 4 times in a row."],
        ["Macho", "Deal 5000 damage in one shot."],
        ["Massacre", "Artificer: Multi-kill 15 enemies."],
        ["Mastery", "Mercenary: Beat the game on Monsoon difficulty."],
        ["Matricide", "Complete the Providence Trial \"Blades in the Wind\". Alternatively: Collect 300 items as Huntress."],
        ["Mechanic", "Purchase 40 drones total."],
        ["Mechanized Militia", "Have 4 drone helpers at once."],
        ["Mercenary's Technique", "Complete the final Providence Trial as Mercenary."],
        ["Miner's Determination", "Complete the final Providence Trial as Miner."],
        ["Natural Competition", "Complete the Providence Trial \"Scavenger Hunt\". Alternatively: Collect 300 items as Enforcer."],
        ["Near the Core", "Find the Artifact of Sacrifice."],
        ["Never Look Back", "Complete the 1st stage in under 5 minutes."],
        ["New Record", "Complete the Providence Trial \"Break the Targets!\". Alternatively: Complete 25 stages as Miner."],
        ["No Flukes", "Beat the game 5 times."],
        ["Nucleation", "Complete the Providence Trial \"Caustic Climb\". Alternatively: Collect 300 items as Acrid."],
        ["Only the Beginning", "Complete the Providence Trial \"A Colossal Feat\". Alternatively: Collect 300 items as Commando."],
        ["Optimal", "Engineer: Kill a boss in 15 seconds or less."],
        ["Paratrooper", "Complete the Providence Trial \"Emergency Ejection\"."],
        ["Pilot's Focus", "Complete the final Providence Trial as Pilot."],
        ["Pre-Alpha", "Find this item hidden somewhere in the world to unlock it."],
        ["Rapidfire", "Huntress: Achieve 200% attack speed."],
        ["Recycled", "Recycle 6 drones in one playthrough."],
        ["Retrograde", "Complete the Providence Trial \"Castle of Memories\". Alternatively: Defeat 3,000 enemies as Bandit."],
        ["Riposte", "Complete the Providence Trial \"Don't Think, Feel\". Alternatively: Complete 25 stages as Mercenary."],
        ["Rope Burn", "Complete the Providence Trial \"Hot-Rope Hop\"."],
        ["Sagitta Aurum", "HAN-D: Obtain a golden drone."],
        ["Seasoned Wanderer", "Collect 15 Monster Logs."],
        ["Seeing Ghosts", "Find the Artifact of Cognation."],
        ["Selfless", "Complete the Providence Trial \"S.O.S.\"."],
        ["Sight-Seeing", "Find the 4 hidden Artifact Shards."],
        ["Siiick", "Sniper: Kill Providence while backflipping."],
        ["Sixth Sense", "Huntress: Defeat the Ancient Wisp without taking damage."],
        ["Sniper's Reflex", "Complete the final Providence Trial as Sniper."],
        ["Snuffed Out", "Loader: Kill the Overloading Magma Worm."],
        ["Solar Power", "Complete the Providence Trial \"Danger Orbits\". Alternatively: Defeat 3,000 enemies as Artificer."],
        ["Sole Survivor", "Die 50 times."],
        ["Somewhere Dry", "Find the Artifact of Kin."],
        ["Special Delivery", "Unlock a golden chest with the Explorer's Key."],
        ["Steady Grip", "Complete the Providence Trial \"Race to the Finish!\". Alternatively: Collect 300 items as Pilot."],
        ["Still Standing", "Survive a boss with less than 20% health."],
        ["Strength of Will", "Reach max barrier."],
        ["Tank", "Enforcer: Block 2000 damage total with your shield."],
        ["Terminal Velocity", "Complete the Providence Trial \"In the Clouds\". Alternatively: Collect 300 items as Artificer."],
        ["Thank You", "Complete the Providence Trial \"Think of the Children\"."],
        ["The Experiment", "Free the chained creature."],
        ["The Grind", "Level up to level 20."],
        ["The Hunt", "Huntress: Defeat 3 unique event bosses in one run."],
        ["The Lone Survivor", "Survive 40 minutes."],
        ["Thermal Vision", "Complete the Providence Trial \"Bullseyes Only\". Alternatively: Complete 25 stages as Sniper."],
        ["Thread the Needle", "Complete the Providence Trial \"A Rung Above\"."],
        ["Trash Compactor", "Complete the Providence Trial \"Perilous Descent\". Alternatively: Collect 300 items as Drifter."],
        ["Trigger Finger", "Complete the Providence Trial \"Endless Stand-Off\". Alternatively: Complete 25 stages as Bandit."],
        ["Tsuchinoko", "Complete the Providence Trial \"Assassination Contract\". Alternatively: Collect 300 items as Mercenary."],
        ["Turtle", "Enforcer: Stay in Shield Mode for 5 minutes straight (in combat)."],
        ["Untouchable", "Commando: Activate the 3rd teleporter without being hurt once."],
        ["Vampire", "Obtain 7 Monster Teeth and 1 Guardian Heart."],
        ["War Bonds", "Bank 20,000 gold."],
        ["Warrior", "Beat the 3rd stage."],
        ["Washed Away", "Beat the game."],
        ["Watery Grave", "Drown 20 Whorls."],
        ["Well-Seasoned", "Complete the Providence Trial \"The Right Ingredients\". Alternatively: Defeat 3,000 enemies as CHEF."],
        ["Where You Want To Be", "Complete the Providence Trial \"Piercing Space and Time\". Alternatively: Defeat 3,000 enemies as Huntress."],
        ["Yoink", "Complete the Providence Trial \"A Toxic Path\"."],
        ["Zero Sum", "End a Teleporter timer with 0 enemies on the map."],
    ];

    assert.strictEqual(officialAchievements.length, 155, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
