// Dyson Sphere Program Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dyson-sphere-program.json), whose 128
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1366540 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below (one name carries a trailing double space,
//   preserved byte-for-byte).
// - Sections group by what each achievement needs: early resource
//   tricks, mecha/flight stunts, exploration and interstellar travel,
//   the power/production/Dyson-Sphere ladder, the challenge-run
//   completions, and the Dark Fog combat update.
export const GUIDE = {
    "slug": "dyson-sphere-program-achievement-guide",
    "category": "game",
    "gameSlug": "dyson-sphere-program",
    "icon": "🛰️",
    "title": "Dyson Sphere Program Achievement Guide",
    "summary": "A practical guide to all 128 Steam achievements in Dyson Sphere Program - none are hidden. The early resource and hand-craft tricks, the mecha and Icarus flight stunts, exploration and interstellar travel, the huge power/production/Dyson-Sphere ladder, the challenge-run completion achievements, and the Dark Fog combat set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dyson Sphere Program has 128 Steam achievements and none are hidden. They range from tiny first-hour tasks (burn 40 wood) up to enormous production and power targets (produce 43,200 of a matrix per hour, reach 1 PJ total energy consumption, build a Dyson Sphere generating over 10 GW). A large late block was added with the Dark Fog combat update.",
                "Nothing is missable - a save persists indefinitely and the counters only accumulate - but several achievements are mutually exclusive within a single game (the challenge-run completions: finish without Foundations, without Solar Sails, without rare ores, under a time limit) so a full completion needs a few purpose-built saves.",
                "Difficulty and estimatedTime here are curatorial; the matrix-per-hour and total-power achievements are the real megabase grind.",
                "Tip: keep one \"forever\" save as your main megabase for the big production and power achievements, and spin up small dedicated saves for each challenge-run completion (Environmentalist, Solar Sail? No thank you!, Alien Mineral Protection Act, Mission impossible!) since those restrict how you can build."
            ]
        },
        {
            "heading": "Getting Started & Resource Tricks",
            "body": [
                "The first-hour achievements: burning wood and Plant Fuel, the Nice Surprise ores from mining Stone and harvesting plants, hand-crafting Organic Crystals, discovering rare minerals, and the vein-management tricks (burying veins, depleting a vein, covering many veins with one miner, filling fluid tanks, collecting sand).",
                "The achievements here: Know any campfire songs?  (Consume at least 40 wood by burning it.); Don't underestimate Plant Fuel (Consume at least 100 Plant Fuel by burning it.); Nice Surprise 1 (Obtain at least 100 Titanium Ore by collecting Stone.); Nice Surprise 2 (Obtain at least 100 Silicon Ore by collecting Stone.); Nice Surprise 3 (Obtain at least 100 Organic Crystals by collecting plants.); Nice Surprise 4 (Obtain at least 100 Sulfuric Acid by collecting plants.); Nice Surprise 5 (Obtain at least 10 Carbon Nanotubes by collecting plants.); Chemist (Make 20 Organic Crystals by hand using the original formula.); Magpie (Discover 7 kinds of rare minerals, and collect at least 10 by hand.); Space invaders (Use the mineral burial function to bury at least 20 Veins.); Mineral field depleted (Deplete 1 Vein.); Minerals by the dozen (Cover at least 12 Veins with one Mining machine.); Slip 'n' slide (Fill 10 tanks of fluid in a game.); Don't sand so close to me (Collect at least 4M units of sand in a game.); Burn baby burn (Have Icarus burn at least 16 different fuels in a game.)."
            ]
        },
        {
            "heading": "Mecha, Icarus & Flight Stunts",
            "body": [
                "Icarus (your mecha) itself: construction drones and blueprints, movement and sorter upgrades, running out of energy in various embarrassing ways, wireless-power charging, sailing-speed records, the garbage-clearing and littering achievements, and the energy-shield and replicator-speed feats.",
                "The achievements here: Blackbox designer (Copy and save a Blueprint.); I'm gonna need more drones! (Control 10 or more Construction Drones.); Sail away with me (Unlock upgrade to make the Solar Sail last 2 hours.); Who approved this? (Unlock technology to make the construction latitude of the Dyson Sphere node reach 45 degrees.); Light-footed (Unlock upgrade to make mecha reach 12m/s movement speed.); Employee of the month (Unlock upgrade to allow Pile Sorters to load and unload cargos simultaneously.); Low battery (Have Icarus’ energy below 5% for more than 3 minutes when on the ground.); Space junk (Exhaust both fuel and energy while flying in space.); Running on fumes (Manually collect 20 Hydrogen with Icarus on a Gas Giant while energy is at 5% or less.); No diving! (Have a mecha run out of energy and fall into water.); Power surge (Use 12 Wireless Power Towers to charge a mecha at the same time.); I can see my house from here! (Get Icarus 40m above sea level without entering flight mode.); Sonic boom! (Exceed a sailing speed of 340m/s in the atmosphere.); Faster than light (Reach a sailing speed of 3000m/s in non-warp transportation.); Lean mean cleaning machine (Use Icarus' garbage clearing function to absorb 50,000 units of Iron Ingot at the same time.); Environmental nightmare (Drop 3000 units of Titanium Ingot at once while flying through space.); Unbowed, Unbent, Unbroken (Keep Icarus' energy shield's power consumption at 1GW while resisting damage for over 1 minute.); Invincible (Base radius of Icarus' Energy Shield reaches 25m.); It's on Fire (Icarus' Replicator speed reaches 400%.)."
            ]
        },
        {
            "heading": "Exploration & Interstellar Travel",
            "body": [
                "Leaving home: logistics drones and vessels, wind turbines in vacuum, tall buildings and planet-wide foundations, naming a planet, the first interstellar hop (with and without warp, coal-only), landing on many planets and exotic worlds (tidal-locked, horizontal and reverse axis), and orbiting a Black Hole and a Neutron Star.",
                "The achievements here: Now Boarding (Have at least 100 Logistics Drones for a planet in transit.); Interstellar convoy (Have at least 50 Interstellar Logistics Vessels in space.); Forgot about that (Build Wind Turbines on a planet with no atmosphere.); High-rise (Build a building at least 7 stories tall.); Determination (Use more than 80K foundations on a Waterworld planet.); I saw this in a movie once (Cover a planet with a Foundation.); Tickets please! (Establish an Interstellar Logistics Transportation line.); Intergalactic logistics (Establish 5 Interstellar Logistics Transportation lines between different planetary systems.); My planet, my rules! (Name a planet.); One giant leap for mankind! (Leave the original planet and land on another within an hour.); Where no coal has gone before (Use coal as the only fuel to move from one planet to another.); Only impossible until it's not (Start warp engine.); Before our time (Land on another planet outside the initial planetary system before unlocking Warp drive.); Planet Explorer I (Land on 5 different planets!); Planet Explorer II (Land on 15 different planets!); What time is it? (Find and land on a planet with day and night tidal locking.); I'm not tilted (Find and land on a planet rotating on a horizontal axis.); The sun rises in the...West? (Find and land on a planet rotating on a reverse axis.); Are you proud of me, Stephen? (Find and orbit a Black Hole.); Boy genius (Find and orbit a Neutron Star.); Bon voyage! (Travel to the planetary system farthest from your original system.); Well traveled (Travel to at least 32 planetary systems in a game.)."
            ]
        },
        {
            "heading": "Power, Production & the Dyson Sphere",
            "body": [
                "The endgame ladder: Artificial Stars, Ray Receivers and Orbital Collectors, Matrix Lab upload rates, launching Solar Sails and rockets, the six matrix-per-hour targets plus the three Universe Matrix belts, the per-power-source generation achievements (Wind Turbines, Solar Panels, Energy Hubs, Mini Fusion), the total-factory-power tiers (Small through Universe factory), the Infinite Factory energy-consumption tiers, the CentreBrain Dyson Sphere power targets, Supernova and the Red Giant sphere.",
                "The achievements here: Let there be light! (Light an Artificial Star on the North and South Pole of the original planet, an Ice Field Gelisol Planet, and the eternal night side of a tide-locked planet.); Build it and they will come (Build 10 Orbital Collectors.); Maximum efficiency (Build and maintain 100 Ray Receivers with a receiving efficiency of over 85%.); Data rules everything around me (Achieve a Matrix Lab upload rate of 1M hash/s.); Firing on all cylinders (Unlock upgrade to decrease the mineral mining consumption rate to less than 15%.); Bullseye (Launch a total of 100K Solar Sails.); We have lift-off (Launch a total of 30,000 Small Carrier Rockets.); Critical thinker (Produce a total of 60,000 Critical Photons.); Secrets of the universe I (Upload a total of 1M Universe matrices.); Secrets of the universe II (Upload a total of 10M Universe matrices.); Got Deuterium? (Use Fractionators to produce at least 100K Deuterium per hour on a single planet.); Green power (Produce at least 43,200 Electromagnetic turbines per hour.); Electromagnetic matrix (Produce at least 43,200 Electromagnetic matrices per hour.); Energy matrix (Produce at least 43,200 Energy matrices per hour.); Structure matrix (Produce at least 43,200 Structure matrices per hour.); Information matrix (Produce at least 43,200 Information matrices per hour.); Gravity matrix (Produce at least 43,200 Gravity matrices per hour.); Universe matrix, Yellow Belt (Produce at least 21,600 Universe matrices per hour.); Universe matrix, Green Belt (Produce at least 43,200 Universe matrices per hour.); Universe matrix, Blue Belt (Produce at least 108,000 Universe matrices per hour.); No coal? No problem! (Generate more than 60MW of electricity on a planet using Wind Turbines.); Sunbather (Generate more than 180MW of electricity on a planet using Solar Panels.); All systems are go! (Achieve discharge power of more than 300MW on a planet using Energy Hubs.); Going nuclear (Generate more than 600MW of power on a planet using Mini Fusion Power Plants.); Like a diamond in the sky (Light a star that belongs to you in the Milky Way View.); CentreBrain needs more energy I (Total power generation of the Dyson Sphere reaches 200MW.); CentreBrain needs more energy II (Total power generation of the Dyson Sphere reaches 1GW.); CentreBrain needs more energy III (Total power generation of the Dyson Sphere reaches 1TW.); We can make it if we try (Build a Dyson Sphere around a Red Giant star with a power generation performance of more than 10GW.); Backup plan (Build a Star Cluster with an energy storage capacity of 27GJ or more.); Small factory (Reach a total power generation of 20MW.); Medium factory (Reach a total power generation of 100MW.); Large factory (Reach a total power generation of 1GW.); Giant factory (Reach a total power generation of 5GW.); Universe factory (Reach a total power generation of 50GW.); Infinite Factory I (Exceed a total energy consumption of 1GJ.); Infinite Factory II (Exceed a total energy consumption of 1TJ.); Infinite Factory III (Exceed a total energy consumption of 1PJ.); A.T Field (Planetary Shield's coverage reaches 100% over a planet.); Super Nova! (Activate Supernova.)."
            ]
        },
        {
            "heading": "Completing the Game (Challenge Runs)",
            "body": [
                "Finishing a game (unlock all technologies via Unlimited Technology, then Mission accomplished) and the restricted variants: x0.5 resources, time limits of 25 and 10 hours, and no Solar Sails / no Foundations / no rare ores. Plus Memento! (keep the landing capsule).",
                "The achievements here: Memento! (Don't dismantle the landing capsule before completing the game.); Icarus, PhD (Unlock all technologies (upgrade Unlimited Technology at least once).); Mission accomplished (Complete the game.); x0.5 Resource completion (Complete the game on x0.5 resource difficulty.); Didn't break a sweat! (Complete the game within 25 hours on x1 (or less) resource difficulty.); Mission impossible! (Complete the game within 10 hours on x1 (or less) resource difficulty.); Solar Sail? No thank you! (Complete the game without launching a Solar Sail.); Environmentalist (Complete the game without using Foundations.); Alien Mineral Protection Act (Complete the game without gathering rare veins to obtain rare ores.)."
            ]
        },
        {
            "heading": "The Dark Fog (Combat)",
            "body": [
                "The combat update's achievements: collecting soil piles and neutralising Dark Fog space units (three tiers each), bullet and laser-tower feats, the Difficulty-1.0+ challenge conditions (no buildings lost, no turrets, wipe a base fast), and the risky exploration achievements around Dark Fog Hives, Relay Stations and Communicators.",
                "The achievements here: Dust to dust I (Collect 1M soil piles from Dark Fog.); Dust to dust II (Collect 10M soil piles from Dark Fog.); Dust to dust III (Collect 100M soil piles from Dark Fog.); Happy Hunting I (Neutralize 100 Dark Fog space units.); Happy Hunting II (Neutralize 1000 Dark Fog space units.); Happy Hunting III (Neutralize 10000 Dark Fog space units.); Bullet Storm (Bullet consumption reaches 360/min on any planet.); A Penny Saved (Complete the mission without any buildings destroyed at Difficulty 1.0 or above.); Strangle in the cradle (Wipe out a Dark Fog Planetary Base within 1 hour at Difficulty 1.0 or above.); Peace & Love (Complete the mission without any Dark Fog buildings neutralized at Difficulty 1.0 or above.); In the Spotlight (Have 40 Laser Towers shoot the same target at Difficulty 1.0 or above.); War has Changed (Complete the mission without building any Turrets at Difficulty 1.0 or above.); Won't Lie Low (Attract an attack from a space unit within 1 hour at Difficulty 1.0 or above.); Monster Kill (Icarus neutralizes over 1,000 Dark Fog units within 1 minute.); POPCORN! (Implosion Cannon neutralizes 40 enemies or more with 1 shot.); Shoot Oneself in the Foot (Lure Lancers to destroy a Planetary Base.); You Started It (Have Icarus destroyed by Dark Fog at Passive Dark Fog aggressiveness.); Right Under My Nose (Land on a planet that is 8000m or closer to a Dark Fog Hive.); You Shall Not Pass! (Neutralize a Relay Station before it lands on a planet.); Global Offense (Be simultaneously assaulted by 12 Planetary Bases on a planet.); Wrong Place (Land on a planet occupied by over 20 Planetary Bases.); Gotcha (Find Dark Fog Communicator.); All Calculated (Unlock all secret technologies.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. In your first normal game, let the early-game and mecha achievements come naturally, make the first interstellar jump for the exploration set, and find a Black Hole and Neutron Star to orbit.",
                "2. Grow that save into a megabase and grind the Power, Production & Dyson Sphere block - the matrix-per-hour and total-power achievements are the bulk of the list.",
                "3. Engage the Dark Fog on that save or a combat-focused one for the combat tiers and the Difficulty-1.0+ conditions.",
                "4. Do the challenge-run completions last, one small save each: Environmentalist (no Foundations), Solar Sail? No thank you!, Alien Mineral Protection Act (no rare ores), x0.5 Resource completion, and the timed Didn't break a sweat! / Mission impossible! runs.",
                "Tip: Icarus, PhD (unlock all technologies) requires upgrading Unlimited Technology at least once - do not stop researching the moment the tech tree looks full, or Mission accomplished and the completion variants will not credit."
            ]
        }
    ]
};
