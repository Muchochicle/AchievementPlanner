import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/railway-empire.json - 128 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 503940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("railway-empire");

test("getPlannerData('railway-empire') returns real planner data with 128 curated achievements", () => {

    assert.ok(game, "expected real planner data for railway-empire");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 128);

});

test("every Railway Empire achievement has a unique id from 1 to 128 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 128 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 128);
    assert.strictEqual(new Set(apinames).size, 128);

});

test("every Railway Empire achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 128 Railway Empire achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["¡Viva México!", "Completed the Mexico scenario."],
        ["100 Locogami", "Complete a 100-year era free game on the Japan map."],
        ["All beginnings are difficult", "Own an industry"],
        ["All mine!", "Buy out a competitor"],
        ["Auctioneer", "Win 5 auctions in one game"],
        ["Beaver duck", "Complete a 100-year era free game in Down Under."],
        ["Bold and beautiful", "Invest $ 5M into company shares"],
        ["Bookworm", "Chapter 5: Build a University in San Francisco"],
        ["Bowing at 45°", "Achieve an average traveler satisfaction rating of 125% on at least 5 routes."],
        ["Bridging the gap", "Build a long bridge"],
        ["Bull and bear", "Chapter 3: Take Over a Competitor"],
        ["Centennium", "Complete a 100 year era free game in Mexico."],
        ["Cheeky geezer", "Complete the \"Transport revolution\" scenario as president."],
        ["Cocktail Party", "Connect all cities to each other in the region of South America."],
        ["Cowboy", "Complete a scenario in region \"The North-West\" as president"],
        ["Crêpe exprès", "Use the \"Forquenot\" locomotive in the \"Into a new time\" scenario."],
        ["Dog sleigh", "Use the Achilles locomotive in the \"Dominion Day\" scenario."],
        ["Donpirinha", "Complete the \"Coffee baron\" scenario"],
        ["Drop bear", "Complete the \"Pioneering spirit\" scenario."],
        ["Due South", "Complete the \"Dominion Day\" scenario."],
        ["Eager to learn", "Build 10 different universities in one game"],
        ["Easy come easy go", "Invest $ 2M into the stock market"],
        ["Egomaniac", "Own 10 industries"],
        ["El Dorado", "Complete one out of the three South American scenarios as president."],
        ["El Mariachi", "Connect all cities in a game in Mexico."],
        ["El Presidente", "Complete the Mexico scenario as president."],
        ["Favoritism", "20 farms connected"],
        ["Feast of iron mobility", "Connect all towns to your rail network on the Japan map."],
        ["Fill her up, please", "A goods depot has loaded 1000 railcars"],
        ["From A to B", "2 cities connected"],
        ["Full steam ahead", "First engineer recruited"],
        ["FULLSTÄNDIG", "Complete the \"Hibernation\" scenario."],
        ["Fully loaded", "A fully staffed trains"],
        ["Gallivanting", "Connect half of all cities in the Great Britain and Ireland region."],
        ["Go with the flow", "Produce 100 railcars of oil in one game"],
        ["Got balls", "Produce 100 leather balls in the region of Great Britain and Ireland."],
        ["Gran Fiesta", "Complete a free game in Mexico."],
        ["Gun dog", "Chapter 4: Transport weapons to Knoxville"],
        ["Have a butchers", "Unlock all locomotive engines of the Great Britain and Ireland region."],
        ["Heavyweight", "Complete the \"Rising Sun\" scenario."],
        ["Henschel and Gretel", "Unlock the first area in the Germany region."],
        ["Hillbilly", "Complete a scenario in region \"The South-East\" as president"],
        ["Historic moment", "Campaign successfully completed"],
        ["I made it eh", "Connect all cities in the Great Lakes region."],
        ["I'll scratch your back if...", "5 farms connected"],
        ["In a snap", "Complete the \"Transport revolution\" scenario."],
        ["Investi-gator", "Unlock the three Australian locomotive engines in the \"Pioneering spirit\" scenario."],
        ["Isn't that great", "First attraction built"],
        ["It belongs in a museum", "Build 5 different museums in one game"],
        ["Jumbled routes", "10 cities connected"],
        ["Just in beaver", "Own 4 pelt businesses in the Great Lakes region."],
        ["KONGLÖMERǺD", "Connect all cities to each other in the \"Hibernation\" scenario."],
        ["LǺNGSTRUMP", "Connect 1 million citizens to your railroad network in Northern Europe."],
        ["Let off some steam", "Sabotage a competitor"],
        ["Let's go!", "First scenario completed successfully"],
        ["Lightning flash", "Set a speed record"],
        ["Livin' La Vida Loco", "Complete a 100 year era free game in South America."],
        ["Llamas in Pyjamas", "Transport 600 loads of llama wool in any game in South America."],
        ["Loc-Monsieur", "Own 5 luxury tailors in the region of France."],
        ["Loco Cabana", "Make use of the locomotive engines \"Garratt\" and \"Kitson-Meyer\" in any South American scenario."],
        ["Loco-deshi", "Complete the \"Twisted Paths\" scenario."],
        ["Loco-sensei", "Complete the \"Twisted Paths\" scenario as President."],
        ["Locozilla", "Unlock all locomotives from Japan while playing \"Rising Sun\" or \"Twisted Paths\"."],
        ["LOKI", "Complete a 100-year era free game in Northern Europe."],
        ["Lokozuna", "Complete the \"Rising Sun\" scenario as President."],
        ["Lone wolf", "Complete a scenario in region \"The North\" as president"],
        ["Lost my train of thought", "Connect all cities in one game"],
        ["Lots of traffic today", "50 locomotives in use"],
        ["Mantled guereza", "Chapter 2: Deliver clothes to New York"],
        ["Medium-sized business", "You have 50 employees"],
        ["Megalomaniac", "Complete a scenario in region \"The East\" as president"],
        ["Mexico First", "Mexico scenario: associate yourself with Diaz."],
        ["Monopolist", "Produce 80% of an item in the entire region"],
        ["Monster snack", "The towns of Tokyo, Yokohama and Saitama reach a size of 250,000 inhabitants in the \"Rising Sun\" scenario."],
        ["Mountain goat", "Chapter 1: Connect Omaha to Rock Springs"],
        ["Mystery steam ride", "Transport 1000 passengers in one game"],
        ["No dough, no show!", "Receive 5 city bonuses in one game"],
        ["NÖNSTÖPP", "Transport 100 passengers from Oslo to Flensborg without any stops in a Northern Europe free game."],
        ["Not emused", "Produce 350 Rail-O-Mite in the \"Pioneering spirit\" scenario."],
        ["Oil tycoon", "Complete a scenario in region \"The South\" as president"],
        ["On track", "Connect half of the cities of the \"Dominion Day\" scenario."],
        ["Online shop", "Transport 1200 packages in one game"],
        ["Open Borders", "Mexico scenario: associate yourself with Stanford."],
        ["Over-koala-fied", "Reach the rank of President in the \"Pioneering spirit\" scenario."],
        ["PARADÖX", "Produce 200 complex board games in the \"Hibernation\" scenario."],
        ["Perfectionist", "Complete all USA scenarios"],
        ["Pile it on", "Connect all cities in the Great Britain and Ireland region."],
        ["Platform Nine and Three-Quarters", "Construct a railroad station with signaling control in the region of Great Britain and Ireland."],
        ["Pompa Colada", "Complete the \"Outside capital\" scenario"],
        ["Pouch potato", "Found your first settlement in a free game in the Down Under region."],
        ["PRÄSIDËNTLǺ", "Complete the \"Hibernation\" scenario as president."],
        ["Quiche le train", "France scenario: affiliate with Freycinet."],
        ["Quiet times", "20 locomotives in use"],
        ["RAGNALÖK", "Unlock the three Northern Europe locomotive engines in a 100 year era."],
        ["Railpunzel", "Connect the cities of Basel and Königsberg in a Germany game."],
        ["Railway to Hell", "Unlock all locomotives from the 1890s"],
        ["Right through the middle", "Build a long tunnel"],
        ["Robin Sparkles", "Reach the rank of President in the \"Dominion Day\" scenario."],
        ["Roger Libre", "Complete the \"Summiteer\" scenario"],
        ["Rumpelstilttrain", "Transport 400 cuckoo clocks with freight locomotives in the Germany region."],
        ["Snake-a-rang", "Establish an express line between Adelaide and Sydney in a free game in Down Under."],
        ["Speedy Gonzalez", "Set a speed record with a Stirling in the Mexico scenario."],
        ["Sunny boy", "Complete a scenario in region \"The West\" as president"],
        ["Tent camp", "Relocate an indian village"],
        ["The age of the automobile", "Produce 100 railcars full of cars"],
        ["The Customs and the Seven Young Rail Spikes", "Unlock 7x areas in the \"Patchwork\" scenario."],
        ["The Emperor's New Rails", "Complete the \"Patchwork\" scenario as president."],
        ["The future of the railway", "First diesel locomotive bought"],
        ["The Loonie", "Archieve a quarterly result of $5 million in the \"Dominion Day\" scenario."],
        ["The Steaming Beauty", "Complete a 100-year era free game in Germany."],
        ["The Train Prince; or, Iron Henry", "Complete the \"Patchwork\" scenario."],
        ["The Valiant Little Conductor", "Create an express line with a \"Hulda\" in a Germany game."],
        ["Tickety-boo", "Unlock the first locomotive engine of the Great Britain and Ireland region."],
        ["Track to the Future", "Unlock all locomotives from the 1830s"],
        ["Trackatouille", "Connect all cities in the region of France."],
        ["Traffic chaos", "100 locomotives in use"],
        ["Train au chocolat", "France scenario: affiliate with Boulanger."],
        ["Train au Vin", "Transport 300 wine in the region of France."],
        ["Train brûlée", "Complete the \"Into a new time\" as president."],
        ["Train de canard", "Complete a 100 year era free game in France as president."],
        ["Train Jam", "Unlock all locomotives from the 1910s"],
        ["Train or Die", "Unlock all locomotives from the 1870s"],
        ["Trainee mechanic", "Complete a scenario in region \"The Midwest\" as president"],
        ["TRAINing Day", "Unlock all locomotives from the 1850s"],
        ["Tunnel-web spider", "Found 30 settlements in a free game in the Down Under region."],
        ["We brake for nobody", "First express train in use"],
        ["What is a steam engine", "First locomotive purchased"],
        ["Winter is coming", "Stack up 200 commodities in a warehouse in the Great Lakes region."],
    ];

    assert.strictEqual(officialAchievements.length, 128, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
