import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/american-truck-simulator.json - 140 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 270880 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("american-truck-simulator");

test("getPlannerData('american-truck-simulator') returns real planner data with 140 curated achievements", () => {

    assert.ok(game, "expected real planner data for american-truck-simulator");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 140);

});

test("every American Truck Simulator achievement has a unique id from 1 to 140 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 140 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 140);
    assert.strictEqual(new Set(apinames).size, 140);

});

test("every American Truck Simulator achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 140 American Truck Simulator achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1881", "Drive by the Billy The Kid Museum (requires New Mexico DLC)"],
        ["45th Parallel", "Visit 45th parallel in Idaho - a halfway between the Equator and the North Pole (requires Idaho DLC)"],
        ["Advanced Student", "Complete the pass conditions in at least 23 scenarios in Truck Driving Proficiency (Driving Academy)"],
        ["Agriculture Expert", "Complete one delivery of corn, grain, potatoes and soybean from or within Nebraska (requires Nebraska DLC)"],
        ["Air Capital of the World", "Deliver an Aircraft Wing and Jet Engine Inlets to or from at least 2 aviation depots in Wichita (requires Kansas DLC)"],
        ["Along the Snake River", "Complete perfect deliveries (no damage, no fines, on time) between the following cities: Kennewick - Lewiston; Boise - Twin Falls; Twin Falls - Pocatello; Pocatello - Idaho Falls. Any order or direction counts (requires Washington and Idaho DLCs)"],
        ["Avid Historian", "Discover at least 30 historical markers in Texas (requires Texas DLC)"],
        ["Beehive State", "Discover at least 8 cities in Utah (requires Utah DLC)"],
        ["Between Two Rivers", "View cutscenes from at least 12 viewpoints in Illinois (requires Illinois DLC)"],
        ["Big Boy", "Deliver Train Axles, Tamping Machine and Rails to or from the rail yard in Cheyenne (requires Wyoming DLC)"],
        ["Big Country Views", "View cutscenes from at least 25 viewpoints in Texas (requires Texas DLC)"],
        ["Big in America!", "Complete at least 10 unique deliveries of oversize cargoes (requires Special Transport DLC)"],
        ["Big Muddy Run (Upcoming)", "Reserved for the announced but unreleased South Dakota expansion; Steam has not published this achievement's real description or exact unlock criteria yet."],
        ["Big Sky Country", "View cutscenes from at least 10 viewpoints in Montana (requires Montana DLC)"],
        ["Big Wheels Keep On Turning", "Complete 3 deliveries of Big Tyres cargo from at least 1 tyre factory in Lawton or Ardmore (requires Oklahoma DLC)"],
        ["Bigger Cargo, Bigger Profit", "Earn $100,000 on 5 consecutive Heavy Cargo Pack deliveries (requires Heavy Cargo Pack DLC)"],
        ["Buffalo Bill", "Complete 10 excellent cattle deliveries to livestock auctions in Wyoming (requires Wyoming DLC)"],
        ["Cabbage to Cabbage", "Complete a delivery of vegetables over Cabbage Hill (requires Oregon DLC)"],
        ["California Dreamin'", "Discover at least 15 cities in California"],
        ["Can Do!", "View cutscenes from at least 6 viewpoints in Oklahoma (requires Oklahoma DLC)"],
        ["Can you Keep a Secret?", "Discover at least 3 unmarked roads in Kansas (requires Kansas DLC)"],
        ["Cha-Ching", "Earn $100,000 delivering cargos"],
        ["Cheers!", "Deliver cargo from at least 3 vineyards in California"],
        ["Company Collector", "Perform deliveries for at least 15 different companies"],
        ["Copper State", "Discover at least 12 cities in Arizona"],
        ["Cornfusion", "Drive to the center of the Evergreen cornfield maze (requires Illinois DLC)"],
        ["Cornhusker State", "Discover at least 10 cities in Nebraska (requires Nebraska DLC)"],
        ["Cotton Bloom", "Complete 10 deliveries of at least one Cotton Lint, Cotton Seed and Cotton Harvester within Texas (requires Texas and Heavy Cargo Pack DLCs)"],
        ["Cruising High Below", "Drive through the Eisenhower-Johnson Memorial Tunnel, the highest point on the US Interstate Highway System, in both directions (requires Colorado DLC)"],
        ["Dedicated Student", "Complete at least 28 scenarios in Truck Driving Basics including the final exams (Driving Academy)"],
        ["Double Trouble", "Complete at least 12 scenarios in Double Trailer Handling (Driving Academy)"],
        ["Energy From Above", "Deliver a Tower and Nacelle to at least 1 Vitas Power wind turbine construction site in Colorado (requires Colorado DLC)"],
        ["Failure Is Not an Option", "Complete any 5 scenarios in a row without failure from the third or fourth chapter in Truck Driving Basics (Driving Academy)"],
        ["Farm Away", "Deliver cargo to or from at least 5 farms and 2 livestock auctions in Texas (requires Texas DLC) "],
        ["Ferry Tales", "Use a ferry to cross the water (requires Washington DLC)"],
        ["Final Makeover", "Fully upgrade one of your garages"],
        ["Forest Shortcut", "Discover shortcut through the forest (requires New Mexico DLC)"],
        ["Four Corners", "Visit the famous Four Corners Monument that marks where the states of Arizona, Colorado, New Mexico, and Utah meet (requires Colorado DLC)"],
        ["Gas Guzzler", "Use a gas station"],
        ["Gem State", "Discover at least 8 cities in Idaho (requires Idaho DLC)"],
        ["Get (to) the Chopper!", "Successfully deliver a Helicopter Special Transport DLC mission with no damage and on time (requires Special Transport DLC)"],
        ["Get the Ball Rollin'", "Complete the first scenario of the first chapter in Truck Driving Basics (Driving Academy)"],
        ["Go Big or Go Home", "Complete deliveries on at least 10 oversize routes in base game (requires Special Transport DLC)"],
        ["Gold Fever", "Deliver cargo to at least 1 quarry in Nevada"],
        ["Gold Rush", "Deliver 10 loads to or from the NAMIQ company at the gold mine in Colorado (requires Colorado DLC)"],
        ["Golden Acres Explorer", "View cutscenes from at least 8 viewpoints in Iowa (requires Iowa DLC)"],
        ["Grain of Salt", "Complete 6 deliveries from the Hutchinson Salt Mine in Kansas. At least 2 deliveries must be to a Food Factory (requires Kansas DLC)"],
        ["Great Faces, Great Places (Upcoming)", "Reserved for the announced but unreleased South Dakota expansion; Steam has not published this achievement's real description or exact unlock criteria yet."],
        ["Grown in Idaho", "Complete five deliveries of potatoes from Idaho farms (requires Idaho DLC)"],
        ["Heavy Duty", "Perfectly deliver any machinery: Springfield (IL) - Peoria, then Peoria - Chicago (NAMIQ quarry) (requires Illinois DLC)"],
        ["Heavy, but Not Bull in a China Shop!", "Complete excellent delivery of a cargo from the Heavy Cargo Pack which is at least 1,000 miles long (requires Heavy Cargo Pack DLC)"],
        ["High Five", "Complete a perfect delivery (no damage, no fines, in-time) for a job that is at least 600 miles"],
        ["Home Sweet Home", "Successfully deliver a Turnkey House Special Transport DLC mission with no damage and on time (requires Special Transport DLC)"],
        ["How Heavy Am I?!", "Use truck scale or weigh station with gross vehicle weight of at least 175,000 lbs (requires Heavy Cargo Pack DLC)"],
        ["I Saw Arkansas", "View cutscenes from at least 8 viewpoints in Arkansas (requires Arkansas DLC)"],
        ["I Think I Like It", "Finish 50 deliveries"],
        ["I Thought This Should Be Heavy?!", "Complete a delivery of at least 8 unique cargoes from the Heavy Cargo Pack (requires Heavy Cargo Pack DLC)"],
        ["Interstate Legend (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["It's Something", "Find a sign that says \"nothing\" (requires Utah DLC)"],
        ["Jack of All Trades (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["Keep Sailing", "Deliver a boat to a marina in Washington (requires Washington DLC)"],
        ["Keys in Hand (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["Leave No Branch Behind!", "Complete a perfect delivery (no damage, no fines, in-time) of at least 3 Forest Machinery DLC jobs (requires Forest Machinery DLC)"],
        ["Like a Boss", "Successfully park a trailer at a hard delivery point"],
        ["Logged-In", "Complete delivery of at least 4 Forest Machinery DLC cargoes (requires Forest Machinery DLC)"],
        ["Lumberjack", "Deliver cargo from at least 4 timber harvest sites in Oregon (requires Oregon DLC)"],
        ["Madison County Bridge", "Cross the iconic bridge in Iowa (requires Iowa DLC)"],
        ["Major Miner", "Complete excellent delivery of any machinery equipment to the Bull Mountains coal mine, Silane from the silane gas factory and Talc Powder from the talc factory (requires Montana DLC)"],
        ["Million Dollar Highway", "Drive along this famously scenic and thrilling section of the U.S. 550 in Colorado (requires Colorado DLC)"],
        ["Mount Rushmore State (Upcoming)", "Reserved for the announced but unreleased South Dakota expansion; Steam has not published this achievement's real description or exact unlock criteria yet."],
        ["Nebraska Explorer", "View cutscenes from at least 6 viewpoints in Nebraska (requires Nebraska DLC)"],
        ["Nerd of the Road", "Obtain 3 stars in at least 15 scenarios in Truck Driving Proficiency (Driving Academy)"],
        ["Not a Problem", "Successfully park a trailer at a delivery point"],
        ["Not a Scratch (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["Nowhere to Rush (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["One-Shottin' It", "Complete any scenario in fourth chapter of Truck Driving Basics in one attempt without correcting by driving forward (Driving Academy)"],
        ["One, Two, Three - Breathe!", "Successfully deliver an Air Conditioning Complex Special Transport DLC mission with no damage and on time (requires Special Transport DLC)"],
        ["Over Plains and Mountains", "View cutscenes from at least 8 viewpoints in Wyoming (requires Wyoming DLC)"],
        ["Over the Bayou", "Cross two draw bridges in Louisiana (requires Louisiana DLC)"],
        ["Over the Top", "Drive through the forest road to timber harvest in Bellingham (requires Washington DLC)"],
        ["Ozark Explorer", "View cutscenes from at least 12 viewpoints in Missouri (requires Missouri DLC)"],
        ["Paper Trail", "Complete 3 deliveries of Logs to Chuck & Jack's, and 3 deliveries of Wood Shavings to Page & Price Paper, within Arkansas (requires Arkansas DLC)"],
        ["Parish Explorer", "View cutscenes from at least 8 viewpoints in Louisiana (requires Louisiana DLC)"],
        ["Parking Challenge", "Complete 20 deliveries choosing the trailer delivery option which requires reversing"],
        ["Pelican State", "Discover at least 8 cities in Louisiana (requires Louisiana DLC)"],
        ["Piggy Express", "Complete a live pigs cargo delivery from two livestock farms in Iowa (requires Iowa DLC)"],
        ["Pimp My Truck", "Buy, design and apply a custom paintjob"],
        ["Population 1", "Discover and visit the town of Buford (requires Wyoming DLC)"],
        ["Powell's Trail", "Visit at least 4 Colorado River sights"],
        ["Power On!", "Spark up Montana and support the power network by delivering a Circuit Breakers cargo and a Utility Poles cargo to the electric substations in each of the following cities: Butte, Glasgow and Havre (requires Montana DLC)"],
        ["Professional Driver", "Complete at least 6 scenarios in the fourth chapter of Truck Driving Basics while using only the interior camera (Driving Academy)"],
        ["Pump It Up", "Deliver frac tank trailer to at least 5 oil drilling sites in Utah (requires Utah DLC)"],
        ["Rig Master", "Buy your own truck"],
        ["Rowing Through the Gears", "Complete 20 scenarios in chapters two, three or four of Truck Driving Basics using an H-shifter or sequential transmission (Driving Academy)"],
        ["School Bus Capital", "Deliver 5 Bus Hood cargoes to and 5 School Bus cargoes from the bus factory in Tulsa (requires Oklahoma DLC)"],
        ["Sea Dog", "Deliver cargo to a port in Oakland and a port in San Francisco"],
        ["Seattle Mole", "Drive through both Seattle tunnels (requires Washington DLC)"],
        ["Shining Star", "Obtain 3 stars in any 3 scenarios played in a row in Truck Driving Proficiency (Driving Academy)"],
        ["Shipyard Supplies", "Deliver iron pipes, metal coils, and lumber to any shipyard in Louisiana for oil tanker construction (requires Louisiana DLC)"],
        ["Shoreside Delivery", "Deliver cargo to or from at least 2 shipyards and 4 cargo ports in Texas (requires Texas DLC)"],
        ["Show-Me State!", "Discover at least 10 cities in Missouri (requires Missouri DLC)"],
        ["Silver State", "Discover at least 8 cities in Nevada"],
        ["Size Matters", "Successfully deliver a Special Transport DLC mission with no damage and on time (requires Special Transport DLC)"],
        ["Sky Delivery", "Deliver cargo to An-124 depot (requires New Mexico DLC)"],
        ["Sky Harbor", "Deliver cargo to the Phoenix Airport"],
        ["Some Like It Salty", "Take a job from each branch of at least 6 companies located in Salt Lake City (requires Utah DLC)"],
        ["Spa City", "Complete a delivery to 5 different companies in Hot Springs (requires Arkansas DLC)"],
        ["Start Your Engine!", "Get on the start of the Truck Racing circuit"],
        ["Steel Wings", "Deliver cargo to an aerospace company in Washington (requires Washington DLC)"],
        ["Subterranean", "Complete a delivery to at least 2 underground Terrastore warehouses (requires Missouri DLC)"],
        ["Terminal Terminus", "Deliver cargo to at least 1 port terminal in Washington (requires Washington DLC)"],
        ["The Beaver State", "Discover at least 10 cities in Oregon (requires Oregon DLC)"],
        ["The Centennial State", "Discover at least 10 cities in Colorado (requires Colorado DLC)"],
        ["The Director", "View cutscenes from at least 8 viewpoints in Idaho (requires Idaho DLC)"],
        ["The Equality State", "Discover at least 8 cities in Wyoming (requires Wyoming DLC)"],
        ["The Evergreen State", "Discover at least 12 cities in Washington (requires Washington DLC)"],
        ["The Hawkeye State", "Discover at least 8 cities in Iowa (requires Iowa DLC)"],
        ["The Land of Enchantment", "Discover at least 10 cities in New Mexico (requires New Mexico DLC)"],
        ["The Last Best Place", "Discover at least 12 cities in Montana (requires Montana DLC)"],
        ["The Lone Star State", "Discover at least 20 cities in Texas (requires Texas DLC)"],
        ["The Natural State", "Discover at least 8 cities in Arkansas (requires Arkansas DLC)"],
        ["The Prairie State", "Discover at least 8 cities in Illinois (requires Illinois DLC)"],
        ["The Sooner State", "Discover at least 8 cities in Oklahoma (requires Oklahoma DLC)"],
        ["The Sunflower State", "Discover at least 10 cities in Kansas (requires Kansas DLC)"],
        ["This One Is Mine!", "Visit at least 2 mines and quarries in Utah (requires Utah DLC)"],
        ["Time for Big Hauling", "Deliver first Heavy Cargo Pack job (requires Heavy Cargo Pack DLC)"],
        ["Travel Oregon", "Discover following landmarks of Oregon: Crater Lake, Crooked River Gorge, Thor's Well and Yaquina Head Lighthouse (requires Oregon DLC)"],
        ["Travel Washington", "Visit Mount St. Helens, Grand Coulee Dam, Mount Rainier (requires Washington DLC)"],
        ["Truck Stop Tour", "Visit at least 18 large truck stops and rest stops in New Mexico (requires New Mexico DLC)"],
        ["Up and Away", "Complete 10 deliveries to Denver Airport (requires Colorado DLC)"],
        ["Uplifting", "Travel across the New Youngs Bay Bridge (requires Oregon DLC)"],
        ["Vehicle Dealer", "Complete 3 deliveries from the Utility Vehicle Factory in Lincoln to RV dealers in Omaha, Norfolk, and Columbus (requires Nebraska DLC)"],
        ["Warming Up", "Drive 10,000 miles during deliveries"],
        ["What a Blast!", "Deliver ammonia and sulphuric acid to Namiq in Joplin, then complete a dynamite delivery from it (requires Missouri DLC)"],
        ["What's Your BMI?", "Use a weigh station"],
        ["Wheat State Explorer", "View cutscenes from at least 7 viewpoints in Kansas (requires Kansas DLC)"],
        ["Who Says You Can’t Go Home? (Upcoming)", "Reserved for the announced but unreleased South Dakota expansion; Steam has not published this achievement's real description or exact unlock criteria yet."],
        ["Worth the Detour (Upcoming)", "Reserved for a second, unannounced expansion; Steam has not published this achievement's real description, expansion name, or exact unlock criteria yet."],
        ["Your Dumper Has Arrived!", "Deliver all three parts of a disassembled dumper: Haul Truck Hull, Huge Tyres, Haul Truck Chassis (requires Special Transport DLC)"],
        ["Zero Waste", "Show your support for zero waste by completing a total of 10 deliveries of the Dumpster Bins and Waste Paper cargoes to the Waste Transfer Stations in Montana, and at least one Garbage Truck cargo to or from anywhere in Montana (requires Montana DLC)"],
    ];

    assert.strictEqual(officialAchievements.length, 140, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
