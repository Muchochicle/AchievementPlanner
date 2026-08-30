import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/anno-2205.json - 198 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 375910 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("anno-2205");

test("getPlannerData('anno-2205') returns real planner data with 198 curated achievements", () => {

    assert.ok(game, "expected real planner data for anno-2205");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 198);

});

test("every Anno 2205 achievement has a unique id from 1 to 198 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 198 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 198);
    assert.strictEqual(new Set(apinames).size, 198);

});

test("every Anno 2205 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 198 Anno 2205 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Company of Good Record", "Complete 100 optional Assignments."],
        ["A Matter For The Boss", "Complete 10 optional Assignments."],
        ["A New Path", "Complete the sector project in Kinngait Protectorate."],
        ["A Safe Place", "Complete the sector project in Novikov Crater."],
        ["A.I. Pioneers", "Choose a special corporation name."],
        ["Acknowledged", "Settle Officers in one of your cities."],
        ["Agent of Unknown Powers", "Complete 10 Assignments for the Mysterious Woman."],
        ["Agricultural Frontrunner", "Apply all Agriculture Technologies."],
        ["Always On Schedule", "Run 25 Transfer Routes."],
        ["Amicus Ex Machina", "Complete 10 Assignments for Luca Volodin."],
        ["Among Friends", "Apply all Joint Ventures Technologies."],
        ["Anno Day", "Play on the 22nd of May."],
        ["Annonaut", "Construct at least one of each Training Center."],
        ["Anything But the Kitchen Sink", "Run 30 Trade Routes from a single sector."],
        ["Astrophysicists", "Train 100 Physicists for the same shuttle flight."],
        ["Back to the Stone Age", "Use the Tactical Nuke 50 times."],
        ["Battlewise", "Complete an Crisis Sector in the Temperate region on advanced difficulty."],
        ["Beautiful Mind", "Construct 500 ornamentals."],
        ["Because I Can", "Expand your corporation headquarter with all different modules."],
        ["Below Value", "Spend a credit balance of 1,000 on a single world market route."],
        ["Bemedalled", "Complete an Crisis Sector in the Temperate region on expert difficulty."],
        ["Biotech Pioneers", "Choose a special corporation name."],
        ["Bodyguard", "Complete 10 escorting Assignments."],
        ["Brain Drain", "Create 5 routes for Neuro Implants."],
        ["Bridge Day", "Finish a bridge construction project."],
        ["Brute Force", "Clear a Crisis Sector without using special actions."],
        ["Business Friends", "Trade with Nic Papadakis."],
        ["Carved In Concrete", "Complete the sector project in Viridian Coves."],
        ["Change Gonna Come", "Complete the sector project at in Akia Floes."],
        ["Changed My Mind", "Spend 100,000 credits demolishing buildings."],
        ["Chief Architect", "Construct 10,000 buildings."],
        ["Chief Economist", "Have a credit balance of +10,000."],
        ["Chief Optimizer", "Construct 100 Maintenance Modules in a single sector."],
        ["Closing the Circuit", "Produce +1,000 energy in a single sector."],
        ["Cold Blood", "Complete an Crisis Sector in the Arctic region on advanced difficulty."],
        ["Complete Assembly", "Construct 12 Orbital Workshops of any type."],
        ["Copycat", "Choose a special corporation name."],
        ["Cornucopian", "Construct 1,000 modules."],
        ["Cosmic Radiation", "Complete 5 Solar Flare Counter Measures."],
        ["Council Matters", "Vote 10 times."],
        ["Counter Revolutionist", "Complete 10 Assignments for Zandra Haynes."],
        ["Counter-Terrorists Win!", "Defeat 10 Invasions on Veteran difficulty."],
        ["Courier of the Year", "Complete 10 distribution Assignments."],
        ["Creating Space", "Claim a second construction area in any sector."],
        ["Cross-Shareholder", "Buy one share of each corporation."],
        ["Cyborg Developer", "Apply all Biotech Technologies."],
        ["Dam Right!", "Complete the sector project in Walbruck Basin."],
        ["Delivered On-Site", "Create a Transfer Route between temperate sectors."],
        ["Democracy, Ho!", "Vote for the first time."],
        ["Demolition", "Destroy all rare material storages in a crisis sector after unlocking Magnetite."],
        ["Deorbiting", "Demolish at least 20 Orbital Workshops or Modules at once."],
        ["Digital Veins", "Construct 5 Electronics Cleanrooms."],
        ["Dirty Deeds", "Complete the Sector Project in Madrigal Islands."],
        ["Diving Expedition", "Lose 10 ships."],
        ["Dominium Terrae", "Use Geoengineering 50 times with one corporation."],
        ["Don't Expect A Smile", "Complete 10 Assignments for John Rafferty."],
        ["Don't Expect Thanks", "Complete 10 Assignments for Dr. Howard Young."],
        ["Drake's Revenge", "Lose a Crisis Sector."],
        ["Duct Tape Experts", "Train 100 Engineers for the same shuttle flight."],
        ["Earl Grey, Hot", "Produce Replicators."],
        ["Eco Evangelist", "Reach a population of 1,000,000 over all sectors without constructing Gas Power Stations or Fusion Reactors."],
        ["Eden's End", "Construct 10 Drilling Rigs in Vanha Plains."],
        ["Electronics Revolutionary", "Apply all Electronics Technologies."],
        ["Emergency Aid", "Complete 10 optional Assignments in events."],
        ["Energy Optimizer", "Apply all Energy Technologies."],
        ["Energy Turnaround", "Set up an energy Transfer Route."],
        ["Enjoy Your Stay!", "Complete the sector project in Mare Relictum."],
        ["Entertainment Pioneers", "Choose a special corporation name."],
        ["Eradicate THIS", "Defeat 10 Eradicators during Invasions."],
        ["Evolutionary Leap", "Have 4,000,000 Synthetics on Veteran difficulty"],
        ["Expansionist", "Claim 34 construction areas."],
        ["Expense Is No Object", "Spend 1,000,000 credits with traders."],
        ["Extraterrestrial Brain", "Apply a Technology."],
        ["Eye-Hand Coordination", "Demolish 30 buildings at once."],
        ["Feed the World", "Vote 10 times for Emem Buhari."],
        ["Fires Below", "Drill out a geyser in Savik Province."],
        ["First Flight", "Gain an Expertise balance of 100."],
        ["Flood Control", "Complete 5 Climate Warfare Counter Measures."],
        ["Fuelling Civilisations", "Construct 5 Energy Clusters."],
        ["Full Service", "Clear a Crisis Sector with all optional Assignments."],
        ["Fully Automated", "Have a credit balance of +10,000 without any employees."],
        ["Future of Humankind", "Construct 5 Biotech Complexes."],
        ["Gentrification", "Demolish 100 buildings."],
        ["Get Off Me!", "Use the Wave Mine 50 times."],
        ["Get off my Lawn!", "Defeat your first invasion."],
        ["Ghost in the Machine", "Gain Synthetics employees."],
        ["Global Player", "Trade with the World Market."],
        ["Globalization... Complete", "Run 10 transfer routes out of Vanha Plains."],
        ["Good Fellows", "Complete 10 Assignments for Nic Papadakis."],
        ["Hauling At The Moon", "Create a Transfer Route from or to a lunar sector."],
        ["Hedgehopper", "Complete 10 Assignments for your Vanha Plains employees."],
        ["Heir of the ANNOkrat", "Reach a population of 1.000.000 over all sectors in hard mode."],
        ["High-end Technology", "Reach "],
        ["High-Wire Act", "Complete Phase 1 of the Lunar Licensing Program."],
        ["Housing Hypothesis", "Settle Scientists in one of your cities."],
        ["Human Batteries", "Apply the Robotic Workforce and the Kinetic Micro-Generator Technologies."],
        ["I lost my glasses down there", "Drain a swamp."],
        ["I. Drink. Your. Smoothie.", "Drain all swamps in Vanha Plains."],
        ["I'm Rubber, You're Glue", "Use the Kinetic Shield 50 times."],
        ["In Machina", "Produce Androids."],
        ["Incorruptible", "Refuse bribes 20 times."],
        ["Industrial Adulteration", "Construct a Tundra Module in every region."],
        ["Interior Decorator", "Construct each ornamental building at least once."],
        ["Interpolar Express", "Create a Transfer Route from or to an Arctic sector."],
        ["Investment Banker", "Buy one share of any corporation."],
        ["Island Hopper", "Settle all islands in Greentide Archipelago."],
        ["It's a Kind of Magic", "Produce Biocatalysts and Aerogel."],
        ["Jack of all Trades", "Construct all Orbital Workshop types at least once."],
        ["Key to Life", "Construct 5 Agriculture Chambers."],
        ["Know Your Tools", "Use 100 special actions."],
        ["Legacy", "Reach a population of 1.000.000 over all sectors."],
        ["Looks Better There", "Move 100 buildings."],
        ["Machine city", "Settle an island with 101,010 Synthetics and no other employees."],
        ["Make It So", "Settle Executives in one of your cities."],
        ["Margin Call", "Have 13 active world market routes."],
        ["Matter of the Universe", "Construct 5 Heavy Industry Halls."],
        ["Me and THAT Army", "Use the Support Fleet 50 times."],
        ["Medic!", "Use the Repair Drones 50 times."],
        ["Meteoric Rise", "Complete the sector project in Iwamoto Crater."],
        ["Mingling Manager", "Foil 10 of Virgil Drake's plans."],
        ["Monumental", "Construct corporation headquarters."],
        ["Multinational Company", "Claim an area in every sector."],
        ["My First Million", "Attain a credit balance of +1,000,000."],
        ["Narcissist", "Construct the Veteran Statue."],
        ["Naval Power", "Have a fleet with the maximum number of ships."],
        ["Neptune's Wrath", "Destroy 1,000 enemy vehicles."],
        ["New Markets", "Trade with Ville Jorgensen."],
        ["No Pressure", "Complete the Lunar Licensing Program on Veteran difficulty in under 10 hours according to the corporation playtime."],
        ["No White Flags", "Complete an Crisis Sector in the Arctic region on expert difficulty."],
        ["Nope", "Abort 100 optional Assignments."],
        ["Not On My Watch!", "Complete any Calamity Counter Measure."],
        ["On the Lookout", "Complete 10 Assignments for May Tian."],
        ["Online", "Settle Operators in one of your cities."],
        ["Orders Are Orders", "Transfer oxygen from the Moon to a temperate sector."],
        ["Outsider Appeal", "Complete 10 Assignments for Ville Jorgensen."],
        ["Part of the System", "Take bribes 20 times."],
        ["Permanent Crew", "Gain an Expertise balance of 600."],
        ["Polar Survivor", "Complete 5 Polar Night Counter Measures."],
        ["Portfolio Diversification", "Apply one Technology in every industry."],
        ["Power Broker", "Complete 10 Assignments for Emem Buhari."],
        ["Power Struggles", "Vote 10 times for Aidan Bhargava."],
        ["Preferential Relations", "Complete 10 Assignments for Aidan Bhargava."],
        ["Preservation Society", "Complete the sector project in Vanha Plains."],
        ["Project Manager", "Complete the sector projects in all sectors of the basic game."],
        ["Quantum Leap", "Produce Quantum Computers."],
        ["Quiet Work Environment", "Settle Tundra Scientists in one of your cities."],
        ["Rainmaker", "Gain a credit balance of 10,000 from all your world market routes."],
        ["Reassembly", "Move your Orbital Workshops or Modules 100 times."],
        ["Relocation Service", "Spend 1,000,000 credits relocating buildings."],
        ["Research Assistant", "Complete 10 Assignments for Dr. Eleanor Hofwegen."],
        ["Ring the Till", "Have a credit balance of +1,000."],
        ["Sales Oriented", "Gain a credit balance of 1,000 from a single world market route."],
        ["Save the Arctic, Send Ice", "Transfer ice from the Moon to an arctic sector."],
        ["Scientific Consultant", "Vote 10 times for Dr. Eleanor Hofwegen."],
        ["Scientific Victory", "Reach "],
        ["Settling on the Edge", "Settle in all three \"Frontiers\" sectors."],
        ["Shrinking the Big Five", "Reach the first place in the corporation ranking in hard mode."],
        ["Silicon Valley", "Construct 10 silicon mines in one sector."],
        ["Space Botanists", "Train 100 Biologists for the same shuttle flight."],
        ["Station Commander", "Gain an Expertise balance of 1200."],
        ["Station Pressurized", "Produce all Station Expansions."],
        ["Steampowered", "Drill out all geyers in Savik Province."],
        ["Striking Oil", "Complete the sector project in Ikkuma Glacier."],
        ["Stunning Presence", "Use the E.M.-Pulse 50 times."],
        ["Subdue the Earth", "Complete 10 Calamity Counter Measures."],
        ["Terror of the Seas", "Destroy 100 enemy vehicles."],
        ["The Establishment", "Vote 10 times for Luca Volodin."],
        ["The Hague Called", "Use any destructive special action on one of your cities."],
        ["The Micromanager From Above", "Apply the Orbital Warehouses and the Control System Overclocking Technologies."],
        ["The Old School", "Reach a population of 2,000,000 on Veteran difficulty."],
        ["The One Percent", "Buy all shares of all Big Five corporations and leave no sectors controlled by them."],
        ["The Second Wave", "Complete Phase 2 of the Lunar Licensing Program."],
        ["The Spy Who Loved Her", "Vote 10 times for May Tian."],
        ["The Upper Crust", "Settle Investors in one of your cities."],
        ["There Will Be Cake", "Choose a special corporation name."],
        ["They Live", "Complete the Sector Project in Greentide Archipelago."],
        ["Thirst Quencher", "Produce 250 Water in a sector."],
        ["This Is... Luna!", "Have a workforce of 300 on the Moon."],
        ["Titanic", "Lose all eight ships in a crisis sector."],
        ["To Trace an Ark", "Complete the sector project in Cape Ambar."],
        ["Top of the World", "Reach the first place in the corporation ranking."],
        ["Unchained", "Apply all product replacement Technologies."],
        ["Under Arms", "Complete an Crisis Sector in the Temperate region on standard difficulty."],
        ["Unlimited Energy", "Complete Phase 3 of the Lunar Licensing Program."],
        ["Updating Firewall", "Complete 5 Hacker Attack Counter Measures."],
        ["Urban Gardening", "Complete 5 Smog Counter Measures."],
        ["Voices from the Past", "Complete the sector project in Wildwater Bay."],
        ["Walk Like a Lunarian", "Produce Gravity Fields."],
        ["War Hero", "Clear all basic Crisis Sectors on all difficulty levels."],
        ["Wave Rider", "Found a lunar settlement."],
        ["We Shall Fight on the Beaches", "Defeat every type of Invasion once."],
        ["Weightless Industry", "Apply all Heavy Industry Technologies."],
        ["What's That Smell?", "Construct 10 Musk-ox Ranches in Vanha Plains."],
        ["While Stocks Last", "Trade with Zandra Haynes."],
        ["Whiteout", "Found an arctic settlement."],
        ["Wildcatter", "Spend a credit balance of 10,000 over all your world market routes."],
        ["Winter Soldier", "Complete an Crisis Sector in the Arctic region on standard difficulty."],
        ["World Export Champion", "Have at least one incoming and one outgoing route in every sector of the basic game."],
    ];

    assert.strictEqual(officialAchievements.length, 198, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
