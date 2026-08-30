import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/humankind.json - 99 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1124300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("humankind");

test("getPlannerData('humankind') returns real planner data with 99 curated achievements", () => {

    assert.ok(game, "expected real planner data for humankind");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 99);

});

test("every HUMANKIND achievement has a unique id from 1 to 99 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 99 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 99);
    assert.strictEqual(new Set(apinames).size, 99);

});

test("every HUMANKIND achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 99 HUMANKIND achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Meeting of Minds", "Finish a turn in multiplayer with at least one other human."],
        ["Ada", "Achieve 18 Scientist Era Stars in a single game."],
        ["All the Things", "Extract every Strategic Resource in a single game."],
        ["All You Can Eat Buffet", "Produce at least 1000 Food per turn in a City."],
        ["An Endless Civilization", "Win a game while keeping the same Culture through every Era."],
        ["Animal Lover", "Advance from the Neolithic Era without hurting a single animal."],
        ["Antoine-Augustin", "Achieve 12 Agrarian Era Stars in a single game."],
        ["Ave Caesar!", "Win 5 wars through your enemy's surrender."],
        ["Behold!", "Achieve twice the Fame of a surviving player at the game end."],
        ["Big Red Button Masher", "Nuke at least one City in three players' Empires in a single game."],
        ["Blasphemer", "Destroy a Holy Site."],
        ["Capital Punishment", "Nuke a capital."],
        ["Captain of Industry", "Produce at least 1000 Industry per turn in a City."],
        ["Cartographer", "Discover 5 Landmarks in a single game."],
        ["Check my Bling!", "Gain access to all Strategic and Luxury Resources available on the map by any means."],
        ["Close Encounters of the Endless Kind", "Finish a game with the Official ENDLESS™ Mod activated."],
        ["Collector", "Collect 20 Curiosities over several games."],
        ["Continental Shift", "Possess Cities on three continents."],
        ["Crossroads of the World", "Possess a Trade Route with at least 8 Empires."],
        ["Culture Vulture", "Obtain 3 Cultural Wonders through conquest."],
        ["Deterrence Era", "Possess 10 Nuclear Weapons."],
        ["Disconnected", "Win a game with the AI difficulty set to Nation."],
        ["Does Not Play Well With Others", "Eliminate all other players."],
        ["Don't Know Much About History", "Destroy a Cultural Wonder."],
        ["Eureka!", "Produce at least 500 Science per turn in a City."],
        ["Everybody's Friend", "Be allied with 3 or more players simultaneously."],
        ["Extremist", "Be at maximum or minimum values on all Ideology axes simultaneously."],
        ["Falling Out", "Nuke the capital of an Empire that was an ally at the turn beginning."],
        ["Flawless", "Win a game against an Expert AI Persona."],
        ["From Zero to Hero", "Be first to reach a new Era after reaching the previous Era last."],
        ["Genghis", "Achieve 18 Expansionist Era Stars in a single game."],
        ["Gigalopolis", "Possess a City that spans 30 Territories."],
        ["Hard Rock Knife", "Hire 10 Armies."],
        ["Hatchepsut", "Achieve 12 Builder Era Stars in a single game."],
        ["Heroic Patience", "Play 1000 turns."],
        ["Hoarder", "Collect 50 Curiosities over several games."],
        ["How the Mighty Have Fallen", "Sign an Alliance with a player who was once your Liege."],
        ["I'm a Lumberjack...", "Cut down 30 Forests in a single game."],
        ["In Sargon's Footsteps", "Finish a game without losing a battle."],
        ["Industrial Action", "Produce at least 500 Industry per turn in a City."],
        ["Jack of All Trades", "Play with six different Affinities in a single game."],
        ["Jawaharlal", "Achieve 18 Agrarian Era Stars in a single game."],
        ["Just Eat", "Produce at least 500 Food per turn in a City."],
        ["Key Influencer", "All Empire capitals are in your sphere of influence."],
        ["Khufu", "Achieve 18 Builder Era Stars in a single game."],
        ["King of Kings", "Be Liege of every player simultaneously."],
        ["Landstalker", "Finish a game possessing at least half the Territories."],
        ["Life of Luxury", "Possess 5 Wondrous Luxury Resources."],
        ["Lord of the Flies", "Win a game against 3 AI at Humankind difficulty on the tiniest map."],
        ["M.A.D.", "Possess 20 Nuclear Weapons."],
        ["Material World", "Gain trade access to all Strategic Resources in a game."],
        ["Megalopolis", "Possess a City that spans 20 Territories."],
        ["Midas Touch", "Amass more than 500k in money over several games."],
        ["Millionaires Club", "Amass more than one million in money over several games."],
        ["Moctezuma", "Achieve 12 Militarist Era Stars in a single game."],
        ["Money for Nothing", "Produce at least 500 Money per turn in a City."],
        ["Money, Money, Money", "Produce at least 1000 Money per turn in a City."],
        ["MVP", "Achieve a 25 Unit killstreak with a single Unit."],
        ["Napoléon", "Achieve 18 Militarist Era Stars in a single game."],
        ["Neanderthal", "Lose all your armies during the Neolithic Era."],
        ["Nerdopolis", "Produce at least 1000 Science per turn in a City."],
        ["Nikola", "Achieve 12 Scientist Era Stars in a single game."],
        ["No Man Down", "Win a war without losing any Units."],
        ["Nuclear Power", "Possess 5 Nuclear Weapons."],
        ["Obsessive", "Collect 100 Curiosities over several games."],
        ["Omnist", "Adopt three different State Religions in a single game."],
        ["One Man Army", "Achieve a 50 Unit killstreak with a single Unit."],
        ["One True Faith", "Lead a religion which 8 or more Empires follow."],
        ["Pacesetter", "Be the first to reach all six Eras in a single game."],
        ["Peacemonger", "Win a game without constructing a single military Unit, Scouts aside."],
        ["Polymath", "Research every Technology in a single game."],
        ["Price Cuts", "Hire 20 Armies."],
        ["Punching Up", "Win a battle with less than half Combat Strength of your opponent."],
        ["Rave Culture", "Win a game while keeping a Culture for four Eras."],
        ["Rewilder", "Regrow 30 Forests in a single game."],
        ["Row, Row, Row Your Boat", "Disembark on an uninhabited continent before the Early Modern Era."],
        ["Sejong", "Achieve 12 Aesthete Era Stars in a single game."],
        ["Seven Wonders of My World", "Construct seven Cultural Wonders in a single game."],
        ["Sí, Patrón", "Reach a \"Friendly\" relationship with an Independent People."],
        ["Spartan", "Win a game with a single City."],
        ["Swordpay", "Hire 5 Armies."],
        ["Talk to the Hand", "Finish a game where you refused every received demand."],
        ["Terminated", "Win a game with the AI difficulty set to Humankind."],
        ["The Land of Smiles", "Win a game without Empire Stability falling into Unrest."],
        ["The Meek Shall Inherit the Earth", "Win a game without declaring any wars."],
        ["The Six-Turns War", "Win a war in less than 6 turns."],
        ["The Stars My Destination", "Win a game by accumulating all Era Stars."],
        ["There Can Be Only One", "Win a game against 9 AI at Humankind difficulty on the largest map."],
        ["They Know Not What They Ask", "Win a game without accepting a Civics Backlash."],
        ["Timur", "Achieve 12 Expansionist Era Stars in a single game."],
        ["Toe in the Water", "Play 10 turns."],
        ["Trans-Siberian Lover", "End a game with a train network that stretches across 10 Territories."],
        ["Unbend the Knee", "Declare war on your Liege."],
        ["Unplugged", "Win a game with the AI difficulty set to Metropolis."],
        ["Victoria", "Achieve 18 Aesthete Era Stars in a single game."],
        ["Welcome to the Borg", "Assimilate 15 Independent Peoples."],
        ["Welcome to the Club", "Assimilate 5 Independent Peoples."],
        ["Welcome to the Collective", "Assimilate 10 Independent Peoples."],
        ["Wonder-Full", "Build 22 Cultural Wonders over several games."],
    ];

    assert.strictEqual(officialAchievements.length, 99, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
