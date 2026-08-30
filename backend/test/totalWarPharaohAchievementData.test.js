import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-pharaoh.json - 76 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1937780 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-pharaoh");

test("getPlannerData('total-war-pharaoh') returns real planner data with 76 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-pharaoh");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 76);

});

test("every Total War: PHARAOH achievement has a unique id from 1 to 76 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 76 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 76);
    assert.strictEqual(new Set(apinames).size, 76);

});

test("every Total War: PHARAOH achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 76 Total War: PHARAOH achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...but the Women and Children Too!", "Having chosen Path of the Marauders, use Raze & Exterminate 3 times."],
        ["A Man's World", "Playing as Tausret, complete 10 court actions."],
        ["All Hope in Eclipse", "Complete a campaign with Pillars of Civilisation in Collapse."],
        ["All Property is Theft", "Playing as Irsu, raze 20 Outposts."],
        ["All This Mayhem", "Survive the invasion of the Sea Peoples."],
        ["Anatolian Traveller", "Discover all Hittite realms on the campaign map."],
        ["Aspire to Greatness", "Become the Hittite Great King."],
        ["Billy No Mates", "Playing as Kurunta, have bad diplomatic relations with all Hittite factions."],
        ["Born of Amun", "Playing as Amenmesse, achieve a Total War Ultimate Victory."],
        ["Born of Thoth", "Having chosen Thuthmose's Ancient Legacy, use a sabotage, support and balance action before conquering the targeted settlement"],
        ["Burn the World", "Playing as Seti, be at war with all major Egyptian factions."],
        ["Conqueror & Settler", "Playing as Iolaos or Walwetes, capture a settlement."],
        ["Father of the Peleset", "Playing as Walwetes, conquer Yapo, Megiddo, Ashkelon and Urushalim."],
        ["For the Public Good", "Playing as Tausret, become Pharaoh and use Corvee Labour to develop a settlement."],
        ["Foremost Among the Noble", "Having chosen Hatshepsut's Ancient Legacy, send a trade mission to every realm."],
        ["Fortune Favours the Bold", "Complete 20 ambitions during a single campaign."],
        ["Fury & Flames", "Set fire to 350 buildings during a battle."],
        ["God as Man", "Become Egyptian Pharaoh."],
        ["Gold Merchant", "Playing as Amenmesse, confederate 5 factions."],
        ["He Who Made Himself", "Playing as Irsu, achieve a Total War Ultimate Victory."],
        ["Heqa-waset", "Playing as Amenmesse, eliminate Seti."],
        ["Horned is the Hunter", "Playing as Kurunta, achieve a Total War Ultimate Victory."],
        ["Humbler Origins", "Playing as Bay, have 4 vassals under your control."],
        ["I am the Deer King!", "Playing as Kurunta, become the Hittite king and take control of the entire Hittite court."],
        ["I am the Servant of Sutekh, He Needs No Other", "Playing as Seti, achieve a Total War Ultimate Victory."],
        ["I Come in Peace", "Playing as Iolaos or Walwetes, sign 5 peace treaties with non-Sea Peoples factions."],
        ["I Love the Smell of Collapse in the Morning!", "Playing as Iolaos or Walwetes, survive 20 turns with the civilization in Collapse."],
        ["I Will Be Your Villain", "Playing as Iolaos or Walwetes, raze 25 settlements."],
        ["Internal Intrigues", "Playing as Suppiluliuma, become Great King and use Forced Annexation on Kurunta's faction."],
        ["Intrepid Reformer", "Having chosen Muwatalli's Ancient Legacy, max out 3 vassals."],
        ["Isfet Rising", "Complete a campaign with Pillars of Civilisation in Crisis."],
        ["Join the Dark Side!", "Having chosen Path of the Marauders, use Promise of Glory 3 times."],
        ["Kemetian Adventurer", "Discover all Egyptian realms on the campaign map."],
        ["Leader of the Sea Peoples", "Playing as Iolaos or Walwetes, enter in Military Alliance with all other Sea Peoples factions."],
        ["Levantine Rambler", "Discover all Canaanite realms on the campaign map."],
        ["Local Gods for Local People", "Playing as any Faction Leader, worship 3 gods and reach their highest tier."],
        ["Look Upon Me and Despair!", "Having chosen Path of the Marauders, use Display of Power 3 times."],
        ["Lord of Fear", "Having chosen Path of the Marauders, use Domination 3 times."],
        ["Lovers in Arms", "Playing as Tausret and Seti, win a multiplayer co-op game."],
        ["Manifest Death", "Playing as Seti, eliminate Amenmesse."],
        ["My Name is Ozymandias, King of All This Land", "Playing as Ramesses, achieve a Total War Ultimate Victory."],
        ["Onwards & Upwards", "Playing as Suppiluliuma, have 8 provinces with growth beyond 70."],
        ["Plans Within Plans", "Playing as Bay, complete 10 Intrigues in the Hittite Court."],
        ["Revenge, Served Sweet & Cold", "Playing as Suppiluliuma, eliminate Kurunta in the first 25 turns."],
        ["Reverse the Tide", "Playing as Ramesses, destroy 8 Sea Peoples armies."],
        ["Sea Squatter", "Playing as Iolaos or Walwetes, build a Nuraghe Tower or Peleset Village in each Outpost slot in a province not owned by you."],
        ["Seizure Through Stealth", "Playing as Irsu, raze 5 Cult Centres."],
        ["Small But Mighty", "Playing as any Faction Leader, worship 2 gods and reach their highest tier."],
        ["Spoiled by War", "Playing as Iolaos or Walwetes, receive 10 War Spoils rewards for razing a settlement."],
        ["Stabby, Stabby, Stabbiness!", "Playing as Bay, declare war on 2 allies and conquer their lands."],
        ["Tarhunna? TarhunNAH, More Like...", "Playing as Kurunta, defeat or take control of Suppiuliuma's lands."],
        ["The Crysophilist", "Playing as Irsu, have 20,000 gold in your treasury."],
        ["The Divine Firestarter", "Playing as Iolaos or Walwetes, raze 50 settlements."],
        ["The Divine Potter", "Having chosen Khufu's Ancient Legacy, complete each available Wonder."],
        ["The Eager Beaver", "Having chosen Tudhaliya's Ancient Legacy, have 5 princes."],
        ["The Future is Now", "Playing as Seti, partake in the first Legitimacy War and become Pharaoh."],
        ["The Great Ancestor", "Playing as Ramesses, partake in the first Legitimacy War and become Pharaoh."],
        ["The Great Idealist", "Having chosen Akhenaten's Ancient Legacy, capture the Cult Centre of Aten."],
        ["The Great Water", "Playing as Amenmesse, control each settlement adjacent to the Nile."],
        ["The Isolationist", "Playing as any Faction Leader, achieve victory in a campaign without signing a single diplomatic treaty."],
        ["The Light, the Dark & the Blood Between", "Playing as Iolaos, worship all Sherden gods and reach their highest tier."],
        ["The Maker of Kings", "Playing as Bay, achieve a Total War Ultimate Victory."],
        ["The Saviour of Hatti", "Playing as Suppiluliuma, achieve a Total War Ultimate Victory."],
        ["The Soul of Ra, Beloved of the Gods", "Playing as Tausret, achieve a Total War Ultimate Victory."],
        ["The Two Powerful Ones", "Playing as Ramesses, acquire and equip him with the Pschent Crown."],
        ["The Usurper", "Playing as Bay, become Pharaoh and use the Court Presence Power to take control of the entire court."],
        ["They Came from the Sea", "Playing as Walwetes, worship all Peleset gods and reach their highest tier."],
        ["To the Sea We Shall Return", "Playing as Iolaos or Walwetes, lose all your occupied regions while still having a Horde."],
        ["Total Peleset", "Playing as Walwetes, achieve a Total War Ultimate Victory."],
        ["Tribal Excellence", "Having chosen Path of the Sea Peoples, keep your faction for 20 turns in one of the 4 outermost positions on the Blades and Dwelling scales."],
        ["Tribal Unity", "Having chosen Path of the Sea Peoples, keep your faction for 25 turns in one of the 4 innermost positions on the Blades and Dwelling scales."],
        ["Two Souls United", "Playing as Iolaos, achieve a Total War Ultimate Victory."],
        ["Ultimate Explorer", "Discover all realms on the campaign map."],
        ["Universal Balance", "Complete a campaign with Pillars of Civilisation in Prosperity."],
        ["Waiting for the Sun", "Playing as any Faction Leader, choose Akhenaten's Ancient Legacy and reach the highest tier of Favour with Aten."],
        ["Who is the Little One? A Pet Perhaps?", "Playing as Tausret, vassalise Seti's faction."],
    ];

    assert.strictEqual(officialAchievements.length, 76, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
