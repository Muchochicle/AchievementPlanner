import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/anno-117-pax-romana.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3274580 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("anno-117-pax-romana");

test("getPlannerData('anno-117-pax-romana') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for anno-117-pax-romana");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Anno 117: Pax Romana achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Anno 117: Pax Romana achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Anno 117: Pax Romana achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...The Spoils", "Win a race with one of your specialists."],
        ["A Brother's Betrayal", "Eliminate Dorian."],
        ["A Toe In The Caldarium", "Complete Act I."],
        ["Ab Initio Anno", "Start your settlement off with its first Fishery."],
        ["Alea Iacta Est", "Spend at least 170,100 Denarii re-rolling items for sale."],
        ["Anno Horribilis", "Trigger the first bankruptcy warning."],
        ["Aqueduct Vitae", "Build an Aqueduct with a length of at least 99 tiles."],
        ["Bend or Break", "Complete Act II."],
        ["Bread and Games", "Host a Naumachia and the Imperial Races on an island with at least 500 Happiness."],
        ["Burning Devotion", "Establish Vulcan as globally dominant patron and as dedicated patron on 3 Islands."],
        ["Circus Magnificus", "Complete the construction of the Hippodrome."],
        ["City Watched", "Place all 3 Amenities in Latium."],
        ["Collector Craze", "Produce statuettes and board games at a rate of 200t/hr."],
        ["Cura Annonae", "Connect Albion and Latium with a minimum of 3 Trade Routes."],
        ["De Novo", "Change a building's Skin with the Cosmetic Tool 9 times."],
        ["Delenda Est", "Conquer an opponent's Villa."],
        ["Devoted to Devotion", "Reach the fifteenth milestone of Devotion on an island."],
        ["Everyone Wins", "Have your Hippodrome reach its maximum Splendour."],
        ["Ex Amicitia Pax", "Appoint an Allied Rival as a Specialist."],
        ["Ex Gratia", "Gift other Parties 207,000 Denarii in total."],
        ["Experto Crede", "Have a Specialist in a Villa."],
        ["Fast and Furibundus", "Have a rival specialist race for you and win."],
        ["From Sea To Sea", "Sail 2,205 Nautical Miles."],
        ["Fuelling The Flame", "Complete all of Concordia's quests."],
        ["Full House", "Socket 9 Specialists on one island."],
        ["Haec Ornamenta Mea", "Beautify an island with 50 ornaments."],
        ["Heavier Than A Feather", "Eliminate Neferneru."],
        ["Hic Svnt Dracones", "Discover all of Albion."],
        ["Hot Spot", "Settle the volcanic island and have it reach City Status 2: \"Small Vicus\"."],
        ["Interpretatio Celtica", "Appoint Cernunnos as a Patron God of an island in Latium."],
        ["Invictus", "Win nine consecutive races at the Hippodrome."],
        ["Is that... snow?", "Experience Volcanic Winter."],
        ["Libertine Liberty", "Have at least 2700 excess Workforce."],
        ["Life Support", "Complete all of Tarragon's quests."],
        ["Lily Buy-in", "Complete all of Valeria's quests."],
        ["Look To Your Laurels", "Have a specialist win the Imperial Races."],
        ["Monopantheist", "Dedicate 9 Islands to the same Patron God."],
        ["Morituri Te Salutant", "Host 9 Events in the Amphitheater."],
        ["Natural Philosophy", "Unlock all volcanic discoveries."],
        ["Not Built In A Day", "Spend more than 24 hours in one Campaign game."],
        ["Of Rage and Redemption", "Finish Caecilia's storyline."],
        ["One... More... Chain...", "Receive the suggestion to take a break 9 times."],
        ["Orbis Non Sufficit", "Acquire a Discovery from the Hall of Fame."],
        ["Outstanding In The Field", "Cover 70% of an island with farm fields."],
        ["Patrician Tastes", "Have the \"Major City\" (Level IX) City Status on an island without any Liberti or Plebeians."],
        ["Pecunia Non Olet", "Have a positive income balance of 250 Denarii."],
        ["Per Ardua Ad Alta", "Have one of your charioteers reach their maximum racing stats."],
        ["Polygnostic", "Unlock all Inspirations in one Research Category."],
        ["Pompeii", "Reach a population of 50.000 on the volcanic island."],
        ["Pro Gloria", "Accumulate a total value of 1602 Prestige."],
        ["Questing Beast", "Complete all of Athr Iorgwyn's quests."],
        ["Quid Pro Quo", "Attain the rank of Proconsul."],
        ["Reunionatrix", "Socket Uiscarix and Obairrix in the same Villa."],
        ["Romani Ite Domum", "House 2205 Celtic residents on an island without Romanising a single one."],
        ["Save the Trees", "Have at least 3 coal mines and no charcoal burner on a single island."],
        ["Scientia Potestas Est", "Fulfill 9 Research Inspirations."],
        ["Si Vis Pacem", "Broker a peace after waging war with three separate Rivals."],
        ["Starfall", "Eliminate Zara Nitu."],
        ["Sybilline Studies", "Hire ten specialists at Caecilia's harbour. "],
        ["Terra Nova", "Settle on a second island."],
        ["The First Mile", "Have a total population of 50,000 across all your cities."],
        ["To The Victor...", "Accept a Rival's challenge at the Hippodrome."],
        ["Trade Union", "Establish a Trade Treaty."],
        ["Trails in the Sea", "Set up 9 Trade Routes between different islands."],
        ["Travelling Sails Problem", "Set up a Trade Route with 9 stops."],
        ["Tuatha Deorum", "Appoint two Celtic deities as Patron Gods on your islands."],
        ["Ultima Ratio", "Build a Quinquireme equipped with the maximum number of military modules."],
        ["Un-Scathached", "Survive Voada's attack."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
