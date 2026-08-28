import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/euro-truck-simulator-2.json - 106 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 227300 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 106 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("euro-truck-simulator-2");

test("getPlannerData('euro-truck-simulator-2') returns real planner data with 106 curated achievements", () => {

    assert.ok(game, "expected real planner data for euro-truck-simulator-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 106);

});

test("every Euro Truck Simulator 2 achievement has a unique id from 1 to 106 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 106 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 106);
    assert.strictEqual(new Set(apinames).size, 106);

});

test("every Euro Truck Simulator 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 106 Euro Truck Simulator 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Above the Arctic Circle", "Complete excellent deliveries in this order and direction: Ivalo - Kiruna - Svolvær (requires Nordic Horizons DLC)"],
        ["Advanced Student", "Complete the pass conditions in at least 23 scenarios in Truck Driving Proficiency (Driving Academy)"],
        ["All Around the Blue Island", "Discover at least 2 Sardinian cities (requires Italia DLC)"],
        ["All Around the Isle of Beauty", "Discover at least 4 Corsican cities (requires Vive la France ! DLC)"],
        ["All Inclusive", "Deliver cargo to at least 4 unique hotels in Greece (requires Greece DLC)"],
        ["All Is Possible", "Take and complete jobs with at least 30 different cargo"],
        ["Along the Black Sea", "Complete excellent deliveries between these coastal cities: Istanbul-Burgas, Burgas-Varna, Varna-Mangalia, MangaliaConstanța. Any order or direction counts (requires Road to the Black Sea DLC)"],
        ["Aquaphobia", "Travel across the Øresund Bridge between Copenhagen and Malmö (requires Scandinavia DLC)"],
        ["Aspects of Professionalism", "Have at least 10 female and 10 male employees of maximum level in your company"],
        ["Balkan Explorer", "Discover at least 20 Road to the Black Sea DLC cities (requires Road to the Black Sea DLC)"],
        ["Baltic Tourist", "Discover at least 20 Beyond the Baltic Sea DLC cities (requires Beyond the Baltic Sea DLC)"],
        ["Big Brother", "Complete delivery of the Haul Truck Chassis (requires Special Transport DLC)"],
        ["Bon Voyage!", "Discover at least 20 French cities (requires Vive la France ! DLC) "],
        ["Captain", "Deliver cargo to at least 1 Italian shipyard (requires Italia DLC) "],
        ["Careerist", "Complete 5 jobs in a row - in-time, without taking any damage to cargo and without using autoparking"],
        ["Cattle Drive", "Complete a cattle delivery to any company in Scandinavia DLC (requires Scandinavia DLC)"],
        ["Check-in, Check-out", "Deliver cargo to at least 3 cargo airport terminals in France (requires Vive la France ! DLC)"],
        ["Choo-Choo", "Use the train to cross the channel"],
        ["Concrete Jungle", "Complete 10 deliveries from concrete plants (requires Beyond the Baltic Sea DLC)"],
        ["Conquistador", "Discover at least 30 cities in Iberia (requires Iberia DLC)"],
        ["Dedicated Student", "Complete at least 28 scenarios in Truck Driving Basics including the final exams (Driving Academy)"],
        ["Diesel, No Petrol!", "Use a filling station"],
        ["Double Trouble", "Complete at least 12 scenarios in Double Trailer Handling (Driving Academy)"],
        ["Driver Exceptionnel", "Complete deliveries on at least 10 oversize routes in base game (requires Special Transport DLC)"],
        ["Exclave Transit", "Complete 5 deliveries from Kaliningrad to any other Russian city (requires Beyond the Baltic Sea DLC)"],
        ["Experience Beats All!", "Complete deliveries with following trailer types: Machinery, ADR cargo, Container, Refrigerated, Liquid cargo, Fragile cargo, Construction, Bulk cargo"],
        ["Failure Is Not an Option", "Complete any 5 scenarios in a row without failure from the third or fourth chapter in Truck Driving Basics (Driving Academy)"],
        ["Ferryman", "Use a river ferry (requires Road to the Black Sea DLC)"],
        ["Fleet Builder", "Deliver cargo to at least 3 shipyards in Iberia (requires Iberia DLC)"],
        ["Friends Are Always Here to Help You", "Use automatic parking"],
        ["From the Comfort of Your Home", "Buy a truck online"],
        ["Gas Must Flow!", "Deliver diesel, LPG or petrol to at least 3 truck stops in France (requires Vive la France ! DLC)"],
        ["Get the Ball Rollin'", "Complete the first scenario of the first chapter in Truck Driving Basics (Driving Academy)"],
        ["Giant", "Complete delivery of the Silo cargo (requires Special Transport DLC)"],
        ["Gift of Athena", "Deliver olives or olive oil from Eliarchos Olive Farm to 5 different cities in Greece (requires Greece DLC)"],
        ["Go Nuclear!", "Deliver cargo to at least 3 nuclear plants in France (requires Vive la France ! DLC)"],
        ["Going Camping", "Deliver the following cargoes from companies in West Balkans to complete a production chain in this order: Ore, Aluminium Ingots, Electrical Wiring, Electronics, Campervans (requires West Balkans DLC)"],
        ["Grand Adventurer", "View cutscenes from at least 8 viewpoints in West Balkans (requires West Balkans DLC)"],
        ["Grand Tour", "Complete excellent deliveries between the following countries: Russia - Lithuania; Lithuania - Latvia; Latvia - Estonia; Estonia - Russia; Russia - Finland. Any order or direction counts (requires Beyond the Baltic Sea DLC)"],
        ["Grand Tour Guide", "View cutscenes from at least 12 viewpoints in Iberia (requires Iberia DLC)"],
        ["Head Hunter", "Discover at least 40 recruitment agencies"],
        ["Holiday Coastline", "Complete 3 deliveries along the coast in this order: Rijeka - Zadar - Split - Niksic (requires West Balkans DLC)"],
        ["Honey, I'm Home", "Use quick travel to return to your headquarters"],
        ["I Am a GPS", "Discover at least 20,000 kilometers of roads"],
        ["I Thought This Should Be Heavy?!", "Complete a delivery of at least 8 unique cargoes from the Heavy Cargo Pack (requires Heavy Cargo Pack DLC)"],
        ["Iberian Pilgrimage", "Complete a delivery from Lisbon, Seville, and Pamplona to A Coruña (requires Iberia DLC)"],
        ["Imperator", "Discover at least 15 Italian cities (requires Italia DLC)"],
        ["Industry Standard", "Make 2 deliveries to locomotive, furniture and paper mill factories (requires Beyond the Baltic Sea DLC)"],
        ["Job Is Only Worth It If It's Done Well!", "Complete a perfect delivery (no damage, no fines, in-time) for a job that is at least 1,000 km"],
        ["Just in Time!", "Take an urgent delivery for a minimum of 550 km and complete it with less than 30 minutes remaining"],
        ["Keep Calm and Haul Heavy", "Complete a perfect delivery (no damage, no fines, in-time) of 3 consecutive Heavy Cargo Pack jobs (requires Heavy Cargo Pack DLC)"],
        ["Landmark Tour", "Discover following landmarks of France: Carcassonne, Brotonne bridge, Tiger tank, Peyrat-le-Château, Château de Ventadour, Château d'Ussé (requires Vive la France ! DLC)"],
        ["Let's Get Shipping", "Deliver cargo to at least 4 container ports in Iberia (requires Iberia DLC)"],
        ["Like a Farmer", "Deliver cargo to at least 4 farms in Beyond the Baltic Sea DLC (requires Beyond the Baltic Sea DLC)"],
        ["Long Hauler", "Complete a delivery that was greater than 2,000 km"],
        ["Many Roads Lead to Rome", "Enter Rome from at least 3 corridors that lead to it (requires Italia DLC)"],
        ["Mass-to-don", "Deliver at least 195 tons of oversized cargo in just 3 consecutive deliveries (requires Special Transport DLC)"],
        ["Michelangelo", "Complete a delivery from Carrara quarry (requires Italia DLC)"],
        ["Mind the Lava", "Visit Etna and Vesuvius volcanoes (requires Italia DLC)"],
        ["Miner", "Complete delivery jobs to at least 3 quarries in Scandinavia DLC (requires Scandinavia DLC)"],
        ["Minimaxer", "Gain 20,000 XP for several consecutive jobs with the total distance below 10,000 km"],
        ["My Precious", "Design and apply to your truck a custom multi-color metallic paint"],
        ["National Company", "Own at least one largest garage in your headquarter country"],
        ["Nerd of the Road", "Obtain 3 stars in at least 15 scenarios in Truck Driving Proficiency (Driving Academy)"],
        ["No Pain No Gain", "Deliver total of 250 tons of cargo on 5 consecutive jobs (requires Heavy Cargo Pack DLC)"],
        ["Northern Secrets", "View cutscenes from at least 12 viewpoints of Nordic Horizons regions (requires Nordic Horizons DLC)"],
        ["Not a Big Problem", "Complete 3 consecutive oversize jobs without any damage (requires Special Transport DLC)"],
        ["Not a Canoe", "Complete delivery of the Service Boat (requires Special Transport DLC)"],
        ["Odyssean Voyager", "Discover at least 12 cities in Greece (requires Greece DLC)"],
        ["One-Shottin' It", "Complete any scenario in fourth chapter of Truck Driving Basics in one attempt without correcting by driving forward (Driving Academy)"],
        ["Orient Express", "Complete deliveries between following cities, in this order and direction: Paris-Strasbourg, Strasbourg-Munich, Munich-Vienna, Vienna-Budapest, Budapest-Bucharest, Bucharest-Istanbul (requires Road to the Black Sea and Going East DLCs)"],
        ["Parking Challenge", "Complete 20 deliveries choosing the trailer delivery option which requires reversing"],
        ["Pathfinder", "Discover at least 40,000 kilometers of roads"],
        ["Performance Optimizer", "Achieve at least 75% of the average garage productivity for 10 large garages in your company"],
        ["Polar Explorer", "Discover at least 20 cities in Nordic Horizons (requires Nordic Horizons DLC)"],
        ["Professional Driver", "Complete at least 6 scenarios in the fourth chapter of Truck Driving Basics while using only the interior camera (Driving Academy)"],
        ["Profit Hunter", "Complete a job worth over €130,000 and minimum 2,200 km"],
        ["Property Magnate", "Own at least 30 garages"],
        ["Ranger", "Visit at least 4 border crossings between Romania, Bulgaria and Turkey (requires Road to the Black Sea DLC)"],
        ["Reliable Contractor", "Perform jobs for at least 15 different companies in the game"],
        ["Road to the Adriatics", "Discover at least 20 cities in West Balkans (requires West Balkans DLC)"],
        ["Rowing Through the Gears", "Complete 20 scenarios in chapters two, three or four using manual transmission in Truck Driving Basics (Driving Academy)"],
        ["Sailor", "Deliver yachts to all Scandinavian marinas (requires Scandinavia and High Power Cargo Pack DLCs)"],
        ["Salmon Run", "Deliver 2 cargoes of Salmon Fillet from the city of Tromsø or Alta to 2 different countries (requires Nordic Horizons DLC)"],
        ["Sardine", "Utilize a boat"],
        ["Scania Trucks Lover", "Deliver truck cargo from Scania factory (requires Scandinavia DLC)"],
        ["Shining Star", "Obtain 3 stars in any 3 scenarios played in a row in Truck Driving Proficiency (Driving Academy)"],
        ["Sights and Legends", "View cutscenes from at least 8 viewpoints in Greece (requires Greece DLC)"],
        ["Sightseer", "Discover at least 15 Scandinavia DLC cities (requires Scandinavia DLC)"],
        ["Size Matters", "Deliver first oversize cargo (requires Special Transport DLC)"],
        ["Successfully Docked", "Use at least 5 ports in the game (counts sea, river and train ports)"],
        ["Swimming in Success", "Reach an average daily profit of €450,000"],
        ["Taking the Scenic Route", "Visit the following landmarks and locations: Iron Gates, Bran Castle (Romania), Pomorie Beach, Wall of Heroes in Varna (Bulgaria), Lake Küçükçekmece in Istanbul (Turkey) (requires Road to the Black Sea DLC)"],
        ["Taste the Sun", "Deliver ADR cargo to at least 2 solar power plants in Iberia (requires Iberia DLC)"],
        ["Temple Worthy", "Deliver 3 Marble Blocks and 3 undamaged Marble Slabs from Rock Eater Quarry in Greece (requires Greece DLC)"],
        ["Test Drive Limited", "Drive 999 km during jobs with each of at least 5 truck brands, only your owned trucks count"],
        ["The Bigger the Better", "Complete at least 10 unique deliveries of oversize cargoes (requires Special Transport DLC)"],
        ["Through the Serpentines", "Complete a perfect delivery (no damage, no fines, in-time) between Pristina and Bijelo Polje (requires West Balkans DLC)"],
        ["Time for Big Hauling", "Deliver first Heavy Cargo (requires Heavy Cargo Pack DLC)"],
        ["True Sicilian", "Own a garage in at least 2 Sicilian cities (requires Italia DLC)"],
        ["Turkish Delight", "Complete 3 deliveries from Istanbul which are at least 2,500 km long (requires Road to the Black Sea and Going East DLCs)"],
        ["Volvo Trucks Lover", "Deliver truck cargo from Volvo Trucks factory (requires Scandinavia DLC)"],
        ["Whatever Floats Your Boat", "Deliver cargo to at least 1 container port in Scandinavia DLC (requires Scandinavia DLC)"],
        ["Working with the Elite", "Achieve 100% of productivity for at least 5 large garages at the same time"],
        ["You Bet I Can Park It!", "Collect 1,000 XP from parking on Heavy Cargo Pack deliveries (requires Heavy Cargo Pack DLC)"],
        ["Zzzzz", "Use a rest stop"],
    ];

    assert.strictEqual(officialAchievements.length, 106, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
