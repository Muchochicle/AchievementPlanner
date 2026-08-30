import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/civilization-beyond-earth.json - 90 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 65980 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("civilization-beyond-earth");

test("getPlannerData('civilization-beyond-earth') returns real planner data with 90 curated achievements", () => {

    assert.ok(game, "expected real planner data for civilization-beyond-earth");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 90);

});

test("every Civilization: Beyond Earth achievement has a unique id from 1 to 90 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 90 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 90);
    assert.strictEqual(new Set(apinames).size, 90);

});

test("every Civilization: Beyond Earth achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 90 Civilization: Beyond Earth achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["'X' Never Marks the Spot", "Collect 50 Artifacts"],
        ["42", "Research All Techs"],
        ["8 Days or Bust", "Win a game on Gemini Difficulty"],
        ["A Fistful of Dollars", "Unlock All Tier 1 Virtue Synergy Bonuses"],
        ["A Planet the Very Brother of Your Own", "Win game on Terran Map"],
        ["Ahimsa", "Win a game without starting a war"],
        ["Aim to Misbehave", "Win a game on a Duel Map"],
        ["Beep… Beep…. Beep...", "Win a game on Sputnik Difficulty"],
        ["Best of Both Worlds", "Build a Hybrid Ultimate unique unit"],
        ["C'mon you apes, you wanna live forever?", "Fully explore the Might virtue tree"],
        ["Chief Extraterrestrial Officer", "Win a game as Fielding"],
        ["Cruel and Unusual Geography", "Win game on Equatorial Map"],
        ["Cylon Computer Virus", "Win a multiplayer game"],
        ["Enemy Within", "Kill an enemy spy"],
        ["Energize", "Develop a city to produce more than 100 energy per turn"],
        ["Father of Nations", "Win a game as Barre"],
        ["Fearful Symmetry", "Win game on Skirmish Map (Base Game)"],
        ["For A Few Dollars More", "Unlock All Tier 2 Virtue Synergy Bonuses"],
        ["Fortune and Glory", "Build all Artifact Wonders"],
        ["Gagarin's Legacy", "Win a game as Kozlov"],
        ["Game over, man!", "One Hit Kill"],
        ["Godspeed", "Win a game on Mercury Difficulty"],
        ["Grand Galactic Inquisitor", "Win at least one game with each leader (Base Game)"],
        ["Homo Aliena", "Achieve Max Level in Harmony"],
        ["I'm in the middle of some calibrations", "Play with a Mod"],
        ["I'm On Another Boat", "Embark a unit "],
        ["I've made a lot of special modifications myself", "Download a mod"],
        ["It Belongs in a Museum", "Find an Artifact"],
        ["It's Full of Stars", "Achieve Transcendence"],
        ["Just Like Voskhod 2", "Win game on Taigan Map"],
        ["Let's Make a Deal", "Create an Agreement"],
        ["Liberty Bell 7", "Complete an Expedition on an aquatic crashed satellite"],
        ["Light This Candle", "Launch an orbital unit"],
        ["Lingua Franca", "Produce 100 Diplomatic Capital per turn"],
        ["Live Long and Prosper", "Fully explore the Prosperity virtue tree"],
        ["Logic is the beginning of wisdom", "Fully explore the Knowledge virtue tree"],
        ["Making Way for a Hyperspace Bypass", "Raze 100 Alien nests"],
        ["Mark II", "Upgrade a Unit"],
        ["Mighty Fine Shindig", "Develop a city to produce more than 100 culture per turn"],
        ["Moksha", "Win a game as Kavitha"],
        ["More Than Meets The Eye", "Unlock a Hybrid affinity level"],
        ["Neptune's Glory", "Build all aquatic Wonders"],
        ["Never Surrender", "Win a game as Bolivar"],
        ["No bucks, No Buck Rogers", "Fully explore the Industry virtue tree"],
        ["Once Upon A Time In Space", "Unlock All Tier 3 Virtue Synergy Bonuses"],
        ["Order of Lenin", "Win a game on Soyuz Difficulty"],
        ["Pale Blue Dot", "Win a game on a Standard Map"],
        ["Patent Pending", "Steal a tech"],
        ["Phone Home", "Achieve Promised land"],
        ["Planned Obsolescence", "Achieve Emancipation"],
        ["Poseidon's Children", "Win game on Atlantean Map"],
        ["Ramming Speed", "Kill a unit by moving an aquatic city onto it"],
        ["Resistance is Futile", "Achieve Domination Victory"],
        ["Rules of Acquisition", "Purchase 1000 Tiles"],
        ["Salam", "Win a game as Al Falah"],
        ["Shadow and Light", "Win a game as Chungsu"],
        ["Shai-Hulud", "Leash a Colossal Alien"],
        ["Shining Path", "Win a game as Daoming"],
        ["Silent Service", "Kill 10 units with Invisible units"],
        ["So Say We All", "Achieve Max Level in Purity"],
        ["Splashdown", "Found an aquatic city"],
        ["Steely Eyed Missile Man", "Achieve one of each other victory"],
        ["Terror From the Deep", "Win without controlling any land cities"],
        ["That New Planet Smell", "Win game on Protean Map"],
        ["That's No Moon", "Win a game on a Small Map"],
        ["The Art of the Infinite", "Win a game as Élodie"],
        ["The Big Payoff", "Win a game as Hutama"],
        ["The Eagle Has Landed", "Win a game on Apollo Difficulty"],
        ["The Frontier is Everywhere", "Win a game on a Primordial planet"],
        ["The Halls of R'lyeh", "Complete all Marvel quests"],
        ["The Machineries of Joy", "Build any wonder"],
        ["The Only Good Bug is a Dead Bug", "500 Aliens Killed"],
        ["The Prince", "Attain full Fear and full Respect with another player"],
        ["The Sound Of Inevitability", "Achieve Max Level in Supremacy"],
        ["The Stuff of Legend", "Complete a Marvel quest"],
        ["The View is Tremendous", "Win a game on a Large Map"],
        ["The Voyageur", "Move an aquatic city 50 times"],
        ["There is no Try", "Get beaten to wonders 10 times"],
        ["Thy Sea So Great", "Win a game as North Sea Alliance"],
        ["Tiny Big Planet", "Win a game on a Tiny Map"],
        ["United Federation of Planets", "Win at least one game on each map size and type"],
        ["Valley of the Time Tombs", "Build all wonders (Base Game)"],
        ["Walk Without Rhythm", "Killed Siege Worm"],
        ["We Are Not Alone", "Achieve Contact Victory"],
        ["What Was Once Only Imagined", "Develop a city to produce more than 100 science per turn"],
        ["When Maui Came To This World", "Win game on Archipelago Map"],
        ["Willing is Not Enough", "Win a game as INTEGR"],
        ["Winter is Coming", "Win a game on a Frigid planet"],
        ["You Have Chosen Wisely", "Cash in an Artifact of each category"],
        ["Поехали! (Pojexali!)", "Win a game on Vostok Difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 90, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
