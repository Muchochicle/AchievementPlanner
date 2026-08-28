import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dyson-sphere-program.json - 128 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1366540 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 128 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("dyson-sphere-program");

test("getPlannerData('dyson-sphere-program') returns real planner data with 128 curated achievements", () => {

    assert.ok(game, "expected real planner data for dyson-sphere-program");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 128);

});

test("every Dyson Sphere Program achievement has a unique id from 1 to 128 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 128 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 128);
    assert.strictEqual(new Set(apinames).size, 128);

});

test("every Dyson Sphere Program achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 128 Dyson Sphere Program achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Penny Saved", "Complete the mission without any buildings destroyed at Difficulty 1.0 or above."],
        ["A.T Field", "Planetary Shield's coverage reaches 100% over a planet."],
        ["Alien Mineral Protection Act", "Complete the game without gathering rare veins to obtain rare ores."],
        ["All Calculated", "Unlock all secret technologies."],
        ["All systems are go!", "Achieve discharge power of more than 300MW on a planet using Energy Hubs."],
        ["Are you proud of me, Stephen?", "Find and orbit a Black Hole."],
        ["Backup plan", "Build a Star Cluster with an energy storage capacity of 27GJ or more."],
        ["Before our time", "Land on another planet outside the initial planetary system before unlocking Warp drive."],
        ["Blackbox designer", "Copy and save a Blueprint."],
        ["Bon voyage!", "Travel to the planetary system farthest from your original system."],
        ["Boy genius", "Find and orbit a Neutron Star."],
        ["Build it and they will come", "Build 10 Orbital Collectors."],
        ["Bullet Storm", "Bullet consumption reaches 360/min on any planet."],
        ["Bullseye", "Launch a total of 100K Solar Sails."],
        ["Burn baby burn", "Have Icarus burn at least 16 different fuels in a game."],
        ["CentreBrain needs more energy I", "Total power generation of the Dyson Sphere reaches 200MW."],
        ["CentreBrain needs more energy II", "Total power generation of the Dyson Sphere reaches 1GW."],
        ["CentreBrain needs more energy III", "Total power generation of the Dyson Sphere reaches 1TW."],
        ["Chemist", "Make 20 Organic Crystals by hand using the original formula."],
        ["Critical thinker", "Produce a total of 60,000 Critical Photons."],
        ["Data rules everything around me", "Achieve a Matrix Lab upload rate of 1M hash/s."],
        ["Determination", "Use more than 80K foundations on a Waterworld planet."],
        ["Didn't break a sweat!", "Complete the game within 25 hours on x1 (or less) resource difficulty."],
        ["Don't sand so close to me", "Collect at least 4M units of sand in a game."],
        ["Don't underestimate Plant Fuel", "Consume at least 100 Plant Fuel by burning it."],
        ["Dust to dust I", "Collect 1M soil piles from Dark Fog."],
        ["Dust to dust II", "Collect 10M soil piles from Dark Fog."],
        ["Dust to dust III", "Collect 100M soil piles from Dark Fog."],
        ["Electromagnetic matrix", "Produce at least 43,200 Electromagnetic matrices per hour."],
        ["Employee of the month", "Unlock upgrade to allow Pile Sorters to load and unload cargos simultaneously."],
        ["Energy matrix", "Produce at least 43,200 Energy matrices per hour."],
        ["Environmental nightmare", "Drop 3000 units of Titanium Ingot at once while flying through space."],
        ["Environmentalist", "Complete the game without using Foundations."],
        ["Faster than light", "Reach a sailing speed of 3000m/s in non-warp transportation."],
        ["Firing on all cylinders", "Unlock upgrade to decrease the mineral mining consumption rate to less than 15%."],
        ["Forgot about that", "Build Wind Turbines on a planet with no atmosphere."],
        ["Giant factory", "Reach a total power generation of 5GW."],
        ["Global Offense", "Be simultaneously assaulted by 12 Planetary Bases on a planet."],
        ["Going nuclear", "Generate more than 600MW of power on a planet using Mini Fusion Power Plants."],
        ["Got Deuterium?", "Use Fractionators to produce at least 100K Deuterium per hour on a single planet."],
        ["Gotcha", "Find Dark Fog Communicator."],
        ["Gravity matrix", "Produce at least 43,200 Gravity matrices per hour."],
        ["Green power", "Produce at least 43,200 Electromagnetic turbines per hour."],
        ["Happy Hunting I", "Neutralize 100 Dark Fog space units."],
        ["Happy Hunting II", "Neutralize 1000 Dark Fog space units."],
        ["Happy Hunting III", "Neutralize 10000 Dark Fog space units."],
        ["High-rise", "Build a building at least 7 stories tall."],
        ["I can see my house from here!", "Get Icarus 40m above sea level without entering flight mode."],
        ["I saw this in a movie once", "Cover a planet with a Foundation."],
        ["I'm gonna need more drones!", "Control 10 or more Construction Drones."],
        ["I'm not tilted", "Find and land on a planet rotating on a horizontal axis."],
        ["Icarus, PhD", "Unlock all technologies (upgrade Unlimited Technology at least once)."],
        ["In the Spotlight", "Have 40 Laser Towers shoot the same target at Difficulty 1.0 or above."],
        ["Infinite Factory I", "Exceed a total energy consumption of 1GJ."],
        ["Infinite Factory II", "Exceed a total energy consumption of 1TJ."],
        ["Infinite Factory III", "Exceed a total energy consumption of 1PJ."],
        ["Information matrix", "Produce at least 43,200 Information matrices per hour."],
        ["Intergalactic logistics", "Establish 5 Interstellar Logistics Transportation lines between different planetary systems."],
        ["Interstellar convoy", "Have at least 50 Interstellar Logistics Vessels in space."],
        ["Invincible", "Base radius of Icarus' Energy Shield reaches 25m."],
        ["It's on Fire", "Icarus' Replicator speed reaches 400%."],
        ["Know any campfire songs? ", "Consume at least 40 wood by burning it."],
        ["Large factory", "Reach a total power generation of 1GW."],
        ["Lean mean cleaning machine", "Use Icarus' garbage clearing function to absorb 50,000 units of Iron Ingot at the same time."],
        ["Let there be light!", "Light an Artificial Star on the North and South Pole of the original planet, an Ice Field Gelisol Planet, and the eternal night side of a tide-locked planet."],
        ["Light-footed", "Unlock upgrade to make mecha reach 12m/s movement speed."],
        ["Like a diamond in the sky", "Light a star that belongs to you in the Milky Way View."],
        ["Low battery", "Have Icarus’ energy below 5% for more than 3 minutes when on the ground."],
        ["Magpie", "Discover 7 kinds of rare minerals, and collect at least 10 by hand."],
        ["Maximum efficiency", "Build and maintain 100 Ray Receivers with a receiving efficiency of over 85%."],
        ["Medium factory", "Reach a total power generation of 100MW."],
        ["Memento!", "Don't dismantle the landing capsule before completing the game."],
        ["Mineral field depleted", "Deplete 1 Vein."],
        ["Minerals by the dozen", "Cover at least 12 Veins with one Mining machine."],
        ["Mission accomplished", "Complete the game."],
        ["Mission impossible!", "Complete the game within 10 hours on x1 (or less) resource difficulty."],
        ["Monster Kill", "Icarus neutralizes over 1,000 Dark Fog units within 1 minute."],
        ["My planet, my rules!", "Name a planet."],
        ["Nice Surprise 1", "Obtain at least 100 Titanium Ore by collecting Stone."],
        ["Nice Surprise 2", "Obtain at least 100 Silicon Ore by collecting Stone."],
        ["Nice Surprise 3", "Obtain at least 100 Organic Crystals by collecting plants."],
        ["Nice Surprise 4", "Obtain at least 100 Sulfuric Acid by collecting plants."],
        ["Nice Surprise 5", "Obtain at least 10 Carbon Nanotubes by collecting plants."],
        ["No coal? No problem!", "Generate more than 60MW of electricity on a planet using Wind Turbines."],
        ["No diving!", "Have a mecha run out of energy and fall into water."],
        ["Now Boarding", "Have at least 100 Logistics Drones for a planet in transit."],
        ["One giant leap for mankind!", "Leave the original planet and land on another within an hour."],
        ["Only impossible until it's not", "Start warp engine."],
        ["Peace & Love", "Complete the mission without any Dark Fog buildings neutralized at Difficulty 1.0 or above."],
        ["Planet Explorer I", "Land on 5 different planets!"],
        ["Planet Explorer II", "Land on 15 different planets!"],
        ["POPCORN!", "Implosion Cannon neutralizes 40 enemies or more with 1 shot."],
        ["Power surge", "Use 12 Wireless Power Towers to charge a mecha at the same time."],
        ["Right Under My Nose", "Land on a planet that is 8000m or closer to a Dark Fog Hive."],
        ["Running on fumes", "Manually collect 20 Hydrogen with Icarus on a Gas Giant while energy is at 5% or less."],
        ["Sail away with me", "Unlock upgrade to make the Solar Sail last 2 hours."],
        ["Secrets of the universe I", "Upload a total of 1M Universe matrices."],
        ["Secrets of the universe II", "Upload a total of 10M Universe matrices."],
        ["Shoot Oneself in the Foot", "Lure Lancers to destroy a Planetary Base."],
        ["Slip 'n' slide", "Fill 10 tanks of fluid in a game."],
        ["Small factory", "Reach a total power generation of 20MW."],
        ["Solar Sail? No thank you!", "Complete the game without launching a Solar Sail."],
        ["Sonic boom!", "Exceed a sailing speed of 340m/s in the atmosphere."],
        ["Space invaders", "Use the mineral burial function to bury at least 20 Veins."],
        ["Space junk", "Exhaust both fuel and energy while flying in space."],
        ["Strangle in the cradle", "Wipe out a Dark Fog Planetary Base within 1 hour at Difficulty 1.0 or above."],
        ["Structure matrix", "Produce at least 43,200 Structure matrices per hour."],
        ["Sunbather", "Generate more than 180MW of electricity on a planet using Solar Panels."],
        ["Super Nova!", "Activate Supernova."],
        ["The sun rises in the...West?", "Find and land on a planet rotating on a reverse axis."],
        ["Tickets please!", "Establish an Interstellar Logistics Transportation line."],
        ["Unbowed, Unbent, Unbroken", "Keep Icarus' energy shield's power consumption at 1GW while resisting damage for over 1 minute."],
        ["Universe factory", "Reach a total power generation of 50GW."],
        ["Universe matrix, Blue Belt", "Produce at least 108,000 Universe matrices per hour."],
        ["Universe matrix, Green Belt", "Produce at least 43,200 Universe matrices per hour."],
        ["Universe matrix, Yellow Belt", "Produce at least 21,600 Universe matrices per hour."],
        ["War has Changed", "Complete the mission without building any Turrets at Difficulty 1.0 or above."],
        ["We can make it if we try", "Build a Dyson Sphere around a Red Giant star with a power generation performance of more than 10GW."],
        ["We have lift-off", "Launch a total of 30,000 Small Carrier Rockets."],
        ["Well traveled", "Travel to at least 32 planetary systems in a game."],
        ["What time is it?", "Find and land on a planet with day and night tidal locking."],
        ["Where no coal has gone before", "Use coal as the only fuel to move from one planet to another."],
        ["Who approved this?", "Unlock technology to make the construction latitude of the Dyson Sphere node reach 45 degrees."],
        ["Won't Lie Low", "Attract an attack from a space unit within 1 hour at Difficulty 1.0 or above."],
        ["Wrong Place", "Land on a planet occupied by over 20 Planetary Bases."],
        ["x0.5 Resource completion", "Complete the game on x0.5 resource difficulty."],
        ["You Shall Not Pass!", "Neutralize a Relay Station before it lands on a planet."],
        ["You Started It", "Have Icarus destroyed by Dark Fog at Passive Dark Fog aggressiveness."],
    ];

    assert.strictEqual(officialAchievements.length, 128, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
