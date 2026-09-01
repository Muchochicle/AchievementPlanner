import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tropico-4.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 57690 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tropico-4");

test("getPlannerData('tropico-4') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for tropico-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Tropico 4 achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Tropico 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Tropico 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Tourist Trap", "Build an Aerodrome and a Seven-star hotel in a single mission"],
        ["Averted World War 3", "Complete Modern Times campaign mission 6."],
        ["Better Than Tenements", "Have a Ziggurat with 50 families as tenants"],
        ["Building Blues", "Unlock 20 Blueprints in a single mission"],
        ["Capo Di Tutti Capi", "Renovate your Palace"],
        ["Competent", "Have Character Trait at level 5"],
        ["Coup de Grace", "Suppress a Military Coup"],
        ["Crisis Measures", "Complete Modern Times campaign mission 1."],
        ["Curse of the Llama", "Survive 10 disasters"],
        ["Dictatorship for Dummies", "Finish all tutorial missions"],
        ["Domestic Affairs", "Have maximum respect with all factions"],
        ["Domestic Agenda", "Complete 10 Faction tasks in a single mission"],
        ["Down with the Tyrant", "Finish a sandbox game with the \"Rebel Yell\" option"],
        ["Elitist", "Construct 1337 buildings"],
        ["Expert", "Have all Character Traits at level 5"],
        ["Filthy Rich", "Make $100 000 for your Swiss Bank account in a mission"],
        ["Foreign Affairs", "Have maximum relations with all foreign powers"],
        ["Foreign Agenda", "Complete 10 Foreign tasks in a single mission"],
        ["Foreign Cuisine", "Import 2 000 food"],
        ["From Rags to Riches", "Have 30 Mansions and 10 Tenements"],
        ["Generalissimo", "Have a total of 100 Soldiers and Generals"],
        ["God Complex", "Finish a Sandbox game in God mode"],
        ["Going Green", "Build 4 Bio Farms and 4 Organic Ranches in a single mission"],
        ["Head for High Ground", "Survive a Tsunami with no human casualties"],
        ["Heaven On Earth", "Build a Diamond Cathedral before 1990"],
        ["Heavy Traffic", "Construct at least 1000 meters of roads and 4 Garages"],
        ["Homes for Everyone", "Have population of over 300 and no Shacks"],
        ["IMPORTant business", "Import 10 000 resources"],
        ["Instant Construction", "Issue the Quick-build command on 10 constructions"],
        ["Iron Fist", "Suppress an uprising"],
        ["It's a Trap!", "Kill 5 rebels at once with a trap in your Mausoleum"],
        ["Kill Juanito", "Issue an Execution order on a citizen called Juanito"],
        ["Made In China", "Distribute more than 1 000 Luxury Goods from a Shopping mall "],
        ["Megalopolis", "Reach a population of 1000"],
        ["Metropolis", "Construct 200 buildings on one island"],
        ["Militarist", "Have more than 20 soldiers and generals in one game"],
        ["Modern Agriculture", "Have no dry fields at the end of a Drought"],
        ["Mona Llama", "Earn more than $30 000 from selling Tropican art in a Museum of Modern Art"],
        ["National Agenda", "Complete 20 agenda tasks in a single mission"],
        ["Nuclear Future", "Have a Nuclear Power Plant and a Nuclear Program built on your island"],
        ["Office Space", "Have a Babel Tower with 50 employees"],
        ["Old Faithful", "Survive 3 Volcanic eruptions in a single mission"],
        ["On Top of the World", "Complete the base campaign."],
        ["Paradise Island", "Earn $1 000 000 from tourism profits in a single game"],
        ["Past and Present", "Have both a Dungeon and a Colonial Museum in the same mission"],
        ["Philanthropist", "Issue the \"Tax Cut\" edict 10 times in a single mission"],
        ["Prepared For Everything", "Buy all upgrades for a Weather Station"],
        ["Scapegoat", "Reach the second milestone of the base campaign."],
        ["Smells Like Chemistry", "Buy all upgrades for a Chemical Plant"],
        ["Special Taxes", "Gain $15 000 for your Swiss account from a Customs Office"],
        ["Specialist", "Have 3 Character Traits  at level 5"],
        ["The Big House", "Have 40 inmates in your Prisons"],
        ["The Conclave", "Complete Modern Times campaign mission 4."],
        ["The Full Monty", "Have a full Ministry cabinet"],
        ["The Golf Balls Solution", "Clean an Oil Spill in less than 4 months"],
        ["The Mastermind", "Reach the third milestone of the base campaign."],
        ["The Power of the Atom", "Generate 1 000 MW of electricity in a Nuclear Power Plant"],
        ["The Rumors of my Death...", "Have one of your clones die instead of you during an assassination attempt"],
        ["Theme Park", "Have a Roller Coaster near a Ferris Wheel and an Aqua park"],
        ["Top Exporter", "Earn $1 000 000 from industry in a single game"],
        ["Tornado Valley", "Survive a Tornado Outbreak with no human casualties"],
        ["Touristico", "Have 10 hotels and 15 tourist attractions"],
        ["Tropican Fiesta", "Finish a game with overall Happines of your citizens above 70%"],
        ["Tropico for the Tropicans", "Finish a sandbox game with the \"No immigrants\" option"],
        ["Tropico VS The World", "Reach the first milestone of the base campaign."],
        ["War on Crime", "Arrest 10 Criminals in a single mission"],
        ["Year Of the Dragon", "Put out 10 buildings on fire in a single mission"],
        ["You are Fired!", "Fire a Minister because of his gaffe"],
        ["Your Lucky Day", "Hire an unemployed citizen as a Minister"],
        ["Zeitgeist", "Complete the Modern Times expansion campaign."],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
