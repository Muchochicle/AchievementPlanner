import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-wonders-planetfall.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 718850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("age-of-wonders-planetfall");

test("getPlannerData('age-of-wonders-planetfall') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-wonders-planetfall");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Age of Wonders: Planetfall achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Age of Wonders: Planetfall achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Age of Wonders: Planetfall achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Beginning", "Win a game using the Heritor Dynasty Doomsday Weapon"],
        ["Against all odds", "Defeat the Invasion during a regular scenario game."],
        ["Alchemist", "Complete Vrascal's elixir in the first Oathbound mission without asking your scientists for help"],
        ["All Your Base", "Win a multiplayer match"],
        ["Beyond the Void", "Win a game using the Voidtech Doomsday weapon"],
        ["Builder", "Complete The Builder quest"],
        ["Conquerer", "Complete The Conquerer quest"],
        ["Consortium Dominium", "Complete the Dvar Campaign"],
        ["Critical Failure", "Make enemy units fumble 13 attacks in a single battle"],
        ["Digging Deep", "Complete 40 Anomalous Sites"],
        ["Diplomat", "Complete The Diplomat quest"],
        ["Eater of the Dead", "Recruit an Eater of the Dead from the Forgotten faction"],
        ["Economist", "Complete The Economist quest"],
        ["Emissary", "Complete The Emissary quest"],
        ["Emperor", "Complete The Emperor quest"],
        ["Es'Teq Prophet", "Side with Xito Rhemenses at the end of the Revelations campaign"],
        ["Es'Teq Reformer", "Side with Hatyl Es'Ran at the end of the Revelations campaign"],
        ["Escape to Freedom", "Win as Kir'Ko leader"],
        ["Expeditionary Forces", "Win as Vanguard leader"],
        ["Eye of the Storm", "Complete the Final Campaign mission"],
        ["Four Noble Truths", "Win a game using the Celestian Doomsday weapon"],
        ["Friendly Fire", "Kill your own unit by missing a shot"],
        ["Futurist", "Research a Tier X skill"],
        ["Galactic Matriarchy", "Win as Amazon leader"],
        ["Galactic Warlord", "Win 100 manual battles"],
        ["Harbinger", "Complete The Harbinger quest"],
        ["Hear me roar!", "Have a hero inject DNA to take the form of an Apex."],
        ["Heartbreaker", "Refuse Valer-E's proposal"],
        ["Hello darkness my old friend", "Win a game using the Psynumbra Doomsday weapon"],
        ["Hide and Seek", "Over the course of a single game, find at least 15 hidden Shakarn sleeper agents"],
        ["Homecoming King", "Complete the Kir'Ko Campaign"],
        ["Invader", "Complete The Invader quest"],
        ["Is this seat taken?", "Assign a Lord or Lady to a Colony while having maxed Colony Lord Skills"],
        ["It's Essential", "Collect a total of 500 Essence Charges"],
        ["Justice Prevails", "Declare war using at least 15 casus belli in a scenario"],
        ["Line 'em up!", "Use a Shakarn Deadeye to hit 3 units by using a single ability"],
        ["Make your own luck", "Score 7 successful critical hits in a single round of combat"],
        ["Master Infiltrator", "Complete the Celaudius-2 mission on high difficulty without your cover getting blown"],
        ["Me, the Kingpin", "Win a game of interdimensional poker"],
        ["Missing a Few Lungs", "Complete the Assembly Campaign"],
        ["Mr. Jones", "Find and Collect 5 Relics belonging to NPC factions (i.e. any 5 of the 7)"],
        ["Mr. Universe", "Achieve a Unifier Victory"],
        ["Negotiator", "Complete The Negotiator quest"],
        ["Nihilist", "Win the Invasions campaign for the Voidbringers"],
        ["No one could survive that!", "Kill 5 units with a single tactical operation"],
        ["Now you see me…", "Capture an enemy colony while covered in Reflective Dust"],
        ["Numerous Anomalies", "Complete 10 Anomalous Sites in a single Scenario."],
        ["Only way to travel", "Send a unit between two orbital relays"],
        ["Operator", "Complete The Operator quest"],
        ["Overlord", "Have 3 vassals during a single playthrough"],
        ["Paragon", "Achieve maximum reputation"],
        ["Pariah", "Achieve minimum reputation"],
        ["Patron", "Complete The Patron quest"],
        ["Power Play", "Get your commander to level 20 and have them equip 4 mods"],
        ["Pustules Everywhere!", "Complete the Amazon Campaign"],
        ["RedCore Mining Co.", "Win as Dvar leader"],
        ["Resistance is Futile", "Win as Assembly leader"],
        ["Saint George", "Use an Aspirant to kill a Savage Tyrannodon"],
        ["Shakarn Defector", "Win the Invasions campaign as an ally of the ELOP Confederation"],
        ["Shakarn Loyalist", "Win the Invasions campaign for the Shakarn"],
        ["Singularity", "Win a game using the Synthesis Doomsday weapon"],
        ["Spymaster", "Complete The Spymaster quest"],
        ["Stacked Deck", "Complete a planet with a 300% exp multiplier or higher"],
        ["Star Bureaucrat", "Have 7 doctrines active"],
        ["Story Master", "Complete 25 NPC Faction Quests"],
        ["Syndicate Collective", "Win as Syndicate leader"],
        ["Technologist", "Complete The Technologist quest"],
        ["The Alpha Strain", "Win a game using the Xenoplague Doomsday weapon"],
        ["The Art of Deception", "Complete the Syndicate Campaign"],
        ["The Fifth Noble Truth", "Complete the Oathbound campaign"],
        ["The superior version", "While holoshifted, use the Infiltrator to kill the unit it transformed into"],
        ["The True Emperor", "Reach Empire Level 200"],
        ["The very best, like no one ever was", "Achieve Integration with a NPC faction"],
        ["Unifier", "Complete The Unifier quest"],
        ["Warmonger", "Complete The Warmonger quest"],
        ["We built this city", "Have 7 sectors in a single colony"],
        ["Well Done", "Win a game using the Promethean Doomsday weapon"],
        ["Wide Awake", "Complete the Vanguard Campaign"],
        ["Wololo", "Permanently convert 30 units to your side"],
        ["Xenophile", "Have colonies of 3 different races in your empire"],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
