import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cities-skylines.json - 135 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 255710 (fetched through this app's own services/steamApi.js).
// 127 of 135 ship a real, official Steam description; the
// 8 hidden achievements ship no Steam description and
// their conditions are curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const citiesSkylines = getPlannerData("cities-skylines");

test("getPlannerData('cities-skylines') returns real planner data with 135 curated achievements", () => {

    assert.ok(citiesSkylines, "expected real planner data for cities-skylines");
    assert.ok(Array.isArray(citiesSkylines.achievements));
    assert.strictEqual(citiesSkylines.achievements.length, 135);

});

test("every Cities: Skylines achievement has a unique id from 1 to 135 and a unique apiname", () => {

    const ids = citiesSkylines.achievements.map(a => a.id);
    const apinames = citiesSkylines.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 135 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 135);
    assert.strictEqual(new Set(apinames).size, 135);

});

test("every Cities: Skylines achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of citiesSkylines.achievements) {

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

test("every one of the 127 officially-described Cities: Skylines achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 8 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Pioneer", "Create your very first city"],
        ["Decorator", "Use the Asset Editor to make your very own asset"],
        ["Terraformer", "Create a map"],
        ["Well Informed", "Have a look at all the different info-view panels"],
        ["City Planner", "Use the district tool to draw 3 districts"],
        ["Lawmaker", "Apply a policy to a district you created"],
        ["Power at Your Fingertips", "Unlock all city services"],
        ["Heavenly City", "Unlock Monuments"],
        ["Medic!", "Build the Medical Center Monument"],
        ["A Huge Hadron", "Build the Hadron Collider Monument"],
        ["Beam Me Up", "Build the Space Elevator Monument"],
        ["New Eden", "Build the Eden Project Monument"],
        ["Short Fuse", "Build the Fusion Power Plant Monument"],
        ["I Want It All", "Unlock every single building in the game"],
        ["Metropolis", "Have a population of 100,000 in your city"],
        ["Distroy", "Have more than 10 districts with unique policies"],
        ["City in Motion", "Have 20 transport lines"],
        ["City in Motion 2", "Have 50 transport lines"],
        ["Climbing the Social Ladder", "Have a Citizen educated to level 3 from 0"],
        ["Unpopular Mayor", "Have 15% happiness"],
        ["Rolling in Dough", "Earn 15,000 per week"],
        ["Frenetic Player", "Click on a police building 100 times in a row"],
        ["Happy Town", "Have more than 95% city happiness for 5 years"],
        ["Tough City", "Have the city survive a crime rate of over 40% for 2 years"],
        ["Fire Watch", "Have 5 Fire Stations"],
        ["The Safest Town", "Have 5 Police Headquarters"],
        ["Professional Dumper", "Fill five landfill sites"],
        ["Earthloving City", "No water or ground pollution in a city of over 10,000 residents"],
        ["Higher Education", "Have over 70% of citizens highly educated in a city of over 10,000 people"],
        ["SIMulated City", "Have an area the size of nine map tiles"],
        ["Safe City", "Keep the crime rate under 10% for 4 years straight"],
        ["Power to the People", "Have the industry tax rate over 5% higher than either residential tax rate for one year"],
        ["Make Them Pay", "Have both residential tax rates over 5% higher than industry for one year"],
        ["Leisure Suites", "Have 1000 squares of leisure specialized commercial zone"],
        ["Playing With The Boys", "Have 1000 squares of beach specialized commercial zone"],
        ["Prison Break", "Have 15 Prisons in the city"],
        ["1001 Nights", "Experience 1001 nights in the game"],
        ["Does My Bum Look Big In This?", "Change Chirper look"],
        ["Singing In The-", "Experience rain"],
        ["Foggy Weather", "Experience fog"],
        ["Brrr!", "Create a winter map in map editor"],
        ["Get Your Snowshoes Ready!", "Experience snowfall"],
        ["Here's A Tram", "Have one tram line active"],
        ["I Love Trams!", "Have 10 tram lines active"],
        ["Are They Naked In There?", "Have a Sauna in the city"],
        ["It's Wintertime!", "Change Chirper to a winter look"],
        ["Speed up!", "Boost 100 km of streets with Road maintenance service"],
        ["The Plowmaster", "Have snowplows collect 2000000 units of snow"],
        ["Quay-King", "Build one quay"],
        ["With Canals You Can!", "Build one canal"],
        ["We need snorkels!", "Experience a tsunami"],
        ["Shake It Up!", "Experience an earthquake"],
        ["It's heading right for us!", "Experience a meteor strike"],
        ["Drop the Base", "Experience a sinkhole"],
        ["Run, Bambi!", "Experience a forest fire"],
        ["Thunder and Lightning", "Experience a thunderstorm"],
        ["Twist and shout", "Experience a tornado"],
        ["What the...?", "Experience a special disaster"],
        ["Eternal City", "Have ten disasters hit the same city"],
        ["Creator", "Create 10 scenarios"],
        ["We Have A Winner!", "Win 10 scenarios"],
        ["The Underdog", "Lose 10 scenarios"],
        ["Rejoice And Be Ferry", "Have 3 ferry lines"],
        ["Ferry Faerie", "Have 15 ferry lines"],
        ["Triorail", "Have 3 monorail lines"],
        ["Not So Mono", "Have 10 monorail lines"],
        ["Clark Cable", "Transport 5 000 passengers with Cable Cars"],
        ["Cables Galore", "Transport 20 000 passengers with Cable Cars"],
        ["Blimp? Blimp.", "Have 3 blimp lines"],
        ["Put Some Blimp In Your Blimp", "Have 10 blimp lines"],
        ["Combo Breaker!", "Have one Ferry and Bus Exchange Stop, Metro-Monorail-Train Hub, Monorail-Bus Hub and Multiplatform Train Station"],
        ["Nomen Est Omen", "Name a road"],
        ["Centurion", "Name 100 roads"],
        ["It's Called Steve", "Name a road \"Steve\""],
        ["Totally In Motion", "Win all three Mass Transit scenarios"],
        ["Reporting!", "Check a route of a citizen"],
        ["Super Self-Sufficient", "Have all residential zone in your city be specialized Self-Sufficient Housing"],
        ["I to the T", "Have all office zone in your city be specialized IT-Cluster"],
        ["Organistic", "Have all commercial zone in your city be specialized Organic and Local Produce"],
        ["Green Energy", "Produce all electricity without using raw materials"],
        ["Friendly Teaching", "Build one of each eco-friendly schools: Community School, Institute of Creative Arts and Modern Technology Institute"],
        ["Greenest City", "Have no polluting industry in your city, only Office Zone and specialized zones"],
        ["The Park To Rule All Parks", "Have a maximum level park made with Park Tool"],
        ["Parking Not Forbidden", "Have 10 parks made with Park Tool"],
        ["Z00", "Have a park with all zoo buildings built in it"],
        ["Ambulare", "Have 5 pedestrian Walking Tour lines"],
        ["Maintain That Park", "Have a Park Maintenance Service and a Zoo, Nature Reserve and Amusement Park in your city"],
        ["Coaster Tycoon", "Have a park with all Amusement Park buildings built in it"],
        ["Naturally", "Have a park with all Nature Reserve buildings built in it"],
        ["Sights To Be Seen", "Have 15 Sightseeing Bus lines"],
        ["Full Capacity", "Level up an Industry Area up to Level 5"],
        ["Serial Investor", "Build 10 Industry Areas"],
        ["Offshore Assets", "Build five Oil Rigs"],
        ["Industry Tycoon", "Build all Unique Factories"],
        ["Postman", "Deliver 1 000 000 units of Mail"],
        ["Just Tolling", "Build one of each road Toll Booth buildings"],
        ["Scaling Up", "Build 10 Warehouse buildings"],
        ["Student Housing Project", "Have total number of 10 Dormitories"],
        ["Education Nation", "Have 15 000 students studying on campuses at the same time"],
        ["Distinguished Academics", "Have one campus reach \"Prestigious\" in reputation"],
        ["Varsity Sports Patron", "Build all five varsity sports arenas on one campus in one city"],
        ["Higher Learning", "Build all Campus Area types with all of their respective campus buildings and faculties"],
        ["Academic Scholar", "Create 100 academic works"],
        ["For For-Profit Education!", "Cover one campus area upkeep cost entirely with tuition fees paid by students in a campus area with more than 5000 students"],
        ["Aquaculture", "Farm 7 500 000 units of fish and sea plants."],
        ["Fisher King", "Catch 10 000 000 units of fish."],
        ["Multidisciplinary Transport Tycoon", "Build one of each of the following transport hubs: Underground Metro-Intercity Bus Hub, Bus-Intercity Bus Hub, Train-Metro Hub, Metropolitan Airport, Bus-Metro Hub"],
        ["Trolleyface", "Transport 35 000 amount of citizens in trolleybuses."],
        ["World of Rotorcraft", "Transport 15 000 amount of citizens in passenger helicopters."],
        ["Come Fly With Me!", "Have 60 tourists visit the Aviation Club during one week."],
        ["The Waters of Our Lives", "Treat 20 000 000 m3 of waste water using the Inland Water Treatment Plants."],
        ["Airline Tycoon ", "Have an airport area reach level 3."],
        ["Airlifter", "Have 10 000 total passengers travel through an airport area. "],
        ["Airport Architect", "Build an airport area with a terminal, a runway and an aircraft stand."],
        ["Airfield Expertise", "Build an airport area with an area of 25000 cells."],
        ["High-cost-carrier ", "Set the airline ticket price slider to the maximum price. "],
        ["Garbage Collection Issues", "Have 5 garbage service points reach their capacity limit."],
        ["The Sweetest City", "Build 10 ice cream stand plazas in one pedestrian area."],
        ["Very Focused", "Have one pedestrian area focused on residential, one in commercial, and one in workplace zones."],
        ["Can't Buy Me Love ", "Earn ₡5,000,000 through investments."],
        ["All In", "Have at least ₡1 000 000 in cash. Put all of your available cash into investments, then don't sell any investments for one month."],
        ["Cash Flow", "Have a bank building get flooded."],
        ["So Much Cash!", "Transport ₡2,000,000 using cash transport vans in one week."],
        ["No risk, no fun!", "Take a loan in order to make an investment."],
        ["Very Accommodating", "Have total of 500 weekly guests to stay at hotels."],
        ["Peak Season", "Organize three hotel events."],
        ["Fully Booked!", "Have the maximum possible number of guests stay at any 5 star hotel with at least 100 rooms."],
    ];

    assert.strictEqual(officialAchievements.length, 127, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "StartYourEngines",
        "GrandCircuitPro",
        "IRunThisCity",
        "TourDeMetro",
        "FootTraffic",
        "WhiteNight",
        "HeDidWhatInThisCup",
        "GrandeParade",
    ]);

    assert.strictEqual(hiddenApinames.size, 8, "sanity check - Cities: Skylines has 8 hidden achievements");

    const dataPairs = citiesSkylines.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 8 hidden Cities: Skylines achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["StartYourEngines", "Start your engines!"],
        ["GrandCircuitPro", "Grand Circuit Pro"],
        ["IRunThisCity", "I Run This City"],
        ["TourDeMetro", "Tour de Metro"],
        ["FootTraffic", "Foot Traffic"],
        ["WhiteNight", "White Night"],
        ["HeDidWhatInThisCup", "He Did What in This Cup?"],
        ["GrandeParade", "Grande Parade"],
    ];

    assert.strictEqual(names.length, 8, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = citiesSkylines.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
