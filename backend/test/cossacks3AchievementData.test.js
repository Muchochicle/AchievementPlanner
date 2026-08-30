import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cossacks-3.json - 103 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 333420 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("cossacks-3");

test("getPlannerData('cossacks-3') returns real planner data with 103 curated achievements", () => {

    assert.ok(game, "expected real planner data for cossacks-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 103);

});

test("every Cossacks 3 achievement has a unique id from 1 to 103 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 103 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 103);
    assert.strictEqual(new Set(apinames).size, 103);

});

test("every Cossacks 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 103 Cossacks 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A bayonet is stupid, a bullet is smart.", "Earned by player who has researched all attack upgrades for the Serduks."],
        ["Above the clouds", "Earned by player who has constructed a montgolfier."],
        ["Admiral", "Earned by player who has constructed a ship of the line."],
        ["Agrarian development", "Earned by player who has installed an upgrade at the mill."],
        ["Angelic patience", "Earned by player who has won a game that lasted for over an hour."],
        ["Big bang", "Earned by player who has researched all firepower upgrades at the academy."],
        ["Black friday", "Earned by player who has sold 1 000 000 resources at the market in the course of a single game."],
        ["Blitzkrieg", "Earned by player who has defeated the Lithuanians, the Poles and the Inflanty before Swedish entrance in the war during fourth mission of Russian campaign."],
        ["Bloody peasants!", "Earned by player who was polite with the peasant during second mission of English campaign."],
        ["Boatswain", "Earned by player after ten victories on a random map with a sea."],
        ["Break your chains", "Earned by player who has released more than a hundred of captives during first mission of Ukrainian campaign."],
        ["Brothers, raise the crystal chalices", "Earned by player after completing the Ukrainian campaign on highest difficulty setting."],
        ["Bulldog grasp", "Earned by player who has raised militia in every town during first mission of English campaign."],
        ["By the sweat of your brow", "Earned by player who has collected 1 000 000 resources within 20 minutes of playing."],
        ["Cannon master", "Earned by player who has cast 20 cannons in the course of a single game."],
        ["Capable war minister", "Earned by player who has constructed 5 XVIII century barracks in the course of a single game, beginning with low or average starting resources."],
        ["Captain", "Earned by player after one victory on a random map."],
        ["City builder", "Earned by player who has constructed 100 housing in the course of a single game."],
        ["Colonel", "Earned by player after ten victories on a random map."],
        ["Conquest of Sicily", "Earned by player who has destroyed the garrison of Palermo during third mission of French campaign."],
        ["Conscience defies compromises", "Earned by player who has released the captives during second mission of French campaign."],
        ["Death to the tyrants!", "Earned by player after completing the English campaign on highest difficulty setting."],
        ["Down with the gang!", "Earned by player who has forced the incapable commander to retire during first tutorial mission."],
        ["Duelist", "Earned by player after ten victories over other players."],
        ["Engineer's deed", "Earned by player after completing the first tutorial mission successfully."],
        ["Field marshal", "Earned by player after one hundred victories on a random map."],
        ["Field marshal general of the Empire", "Earned by player after completing the Austrian campaign."],
        ["First blood", "Earned by player after one victory over another player."],
        ["Fortification engineer", "Earned by player who has constructed 10 towers in the course of a single game."],
        ["Four thousand subjects", "Earned by player whose population has reached 4000 men."],
        ["Frantic struggle", "Earned by player after defeating two allied AI opponents on highest difficulty setting."],
        ["Generalissimo", "Earned by player after completing the Austrian campaign on highest difficulty setting."],
        ["Glory of the French fleet", "Earned by player after completing the French campaign."],
        ["Good morning!", "Earned by player who has destroyed the muscovite flank troops without being spotted during fourth mission of Ukrainian campaign."],
        ["Grand Sultan", "Earned by player who has hired 200 janissaries in the course of a single game."],
        ["Great Bey", "Earned by player who has hired 1000 algerian bowmen in the course of a single game."],
        ["Heroic power", "Earned by player who has hired 200 vityazi in the course of a single game."],
        ["Hold the wall!", "Earned by player who has won the fifth mission of Ukrainian campaign with no losses among the bodyguards of the prince."],
        ["Horse breeder", "Earned by player who has researched all cavalry production speed and attack upgrades at the smithy."],
        ["I am Tsar!", "Earned by player after completing the Russian campaign on highest difficulty setting."],
        ["Iron curtain", "Earned by player who has researched all attack and defense upgrades for the Roundshiers."],
        ["Iron hailstorm", "Earned by player who has cast 50 mortars in the course of a single game."],
        ["It's all about respect", "Earned by player who was merciful to the civilians of Berber Coast and to the slave trader during second mission of French campaign."],
        ["Lord of the cupids", "Earned by player who has hired 500 mercenary bowmen in the course of a single game."],
        ["Lord of the sea", "Earned by player who has constructed 10 shipyards in the course of a single game."],
        ["Marching as one", "Earned by player who has achieved victory in alliance with another player or AI on a random map."],
        ["Master of sieges", "Earned by player who let no wagon train reach the besieged Vitebsk during second mission of Russian campaign."],
        ["Metal hedgehog", "Earned by player who has researched 3 attack and defense upgrades for the XVII century pikemen."],
        ["Military traditions", "Earned by player who has reinforced 10 times a regiment that lost over half of its manpower."],
        ["Mining development", "Earned by player who has researched all upgrades to wood and stone collection."],
        ["Noble spirit", "Earned by player who has shown mercy over 5 times."],
        ["Officer's patent", "Earned by player after completing the second tutorial mission successfully."],
        ["Old Fritz", "Earned by player who has hired 200 prussian musketeers in the course of a single game."],
        ["Old warrior makes a wise warrior", "Earned by player after one hundred victories over other players."],
        ["On your shield", "Earned by player after ten losses to another player."],
        ["One for all, and all for one!", "Earned by player who has hired 100 royal musketeers in the course of a single game."],
        ["Patron of sciences", "Earned by player who has researched all possible upgrades in the course of a single game."],
        ["Payback for Samuil Kishka", "Earned by player who has destroyed the buildings of Weissenstein during second mission of Ukrainian campaign."],
        ["Practical thinking", "Earned by player who has hired brigands in one of the missions."],
        ["Prudence", "Earned by player who was merciful to people of the duchy of Mantua during third mission of Austrian campaign."],
        ["Reapers on the mountain", "Earned by player who has hired 50 mercenary Sich cossacks in the course of a single game."],
        ["Rule, France!", "Earned by player after completing the French campaign on highest difficulty setting."],
        ["Ruthlessness", "Earned by player who has displayed a cruel streak over 5 times."],
        ["Scientific breakthrough", "Earned by player who has reached XVIII century within 20 minutes of playing, beginning with low or average starting resources."],
        ["Scotland the Brave", "Earned by player who has hired 200 scottish musketeers in the course of a single game."],
        ["Sea sickness", "Earned by player who has crossed river on a ferry on a random map."],
        ["Sea wolf", "Earned by player after one hundred victories on a random map with a sea."],
        ["Sharp sight", "Earned by player who has discovered 10 secret tasks."],
        ["Ship's boy", "Earned by player after one victory on a random map with a sea."],
        ["Shipwright", "Earned by player who has constructed 100 fishing boats."],
        ["Sir, you're fired", "Earned by player who has executed the incapable commander during first tutorial mission."],
        ["Slayer of infidels", "Earned by player who has saved Oryol from destruction during first mission of Russian campaign."],
        ["Soldiers of fortune", "Earned by player having 100 XVIII century mercenary dragoons simultaneously."],
        ["Successful pursue", "Earned by player who caught turkish wagon train during first mission of Austrian campaign."],
        ["Surrounded at all sides", "Earned by player after defeating six allied AI opponents on highest difficulty setting."],
        ["The architect", "Earned by player who has constructed 5 town centers in the course of a single game, beginning with low or average starting resources."],
        ["The beginnings of the regular army", "Earned by player who has gathered soldiers into a regiment."],
        ["The builder of walls", "Earned by player who has constructed 50 wall sections in the course of a single game."],
        ["The conqueror", "Earned by player who has constructed another nation's town center using captured peasants in the course of a single game."],
        ["The destroyer", "Earned by player who has burnt down 10 enemy buildings."],
        ["The devil's cunning", "Earned by player who has successfully used the captured turkish ship during first mission of French campaign."],
        ["The doom of the tsar of turks", "Earned by player who has captured both turkish fortresses during first mission of Ukrainian campaign."],
        ["The holy man", "Earned by player who has recruited 50 priests in the course of a single game."],
        ["The Hussars can't be defeated, nor stopped, nor contained", "Earned by player who has researched all upgrades for the winged hussars."],
        ["The King of Croats", "Earned by player who has hired 200 croats in the course of a single game."],
        ["The Lion of the North", "Earned by player who has hired 200 swedish reiters in the course of a single game."],
        ["The passage of time", "Earned by player who has reached XVIII century."],
        ["The scourge of God", "Earned by player who has burnt down 100 enemy buildings."],
        ["The Thunderer", "Earned by player who has installed all rate of fire upgrades at a tower."],
        ["The towers shall fall", "Earned by player who has destroyed the buildings of Kafa during third mission of Ukrainian campaign."],
        ["There and back again", "Earned by player after completing the Ukrainian campaign."],
        ["To punish the king", "Earned by player after completing the English campaign."],
        ["To the bowels of Earth", "Earned by player who has boosted mine capacity to 95 workers."],
        ["Treasure hunter", "Earned by player who has found a treasure chest."],
        ["Trench warfare", "Earned by player who has destroyed the garrisons of turkish fortresses during second mission of Austrian campaign."],
        ["Turkish invasion", "Earned by player who has hired 500 mercenary light infantry in the course of a single game."],
        ["Turn the cannons!", "Earned by player who has captured 20 cannons in the course of a single game."],
        ["Two thousand subjects", "Earned by player whose population has reached 2000 men."],
        ["Two Ukrainians make three hetmans", "Earned by player who has hired 3 hetmans in the course of a single game."],
        ["Unassailable wall", "Earned by player who has swiftly won the third mission of Russian campaign by defeating the besiegers."],
        ["Unbreakable walls", "Earned by player who has researched all toughness upgrades for buildings and fortifications."],
        ["Uneven chances", "Earned by player after defeating four allied AI opponents on highest difficulty setting."],
        ["Vityaz", "Earned by player after completing the Russian campaign."],
    ];

    assert.strictEqual(officialAchievements.length, 103, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
