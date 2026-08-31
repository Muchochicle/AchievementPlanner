import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-total-war-saga-troy.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1099410 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("a-total-war-saga-troy");

test("getPlannerData('a-total-war-saga-troy') returns real planner data with 69 curated achievements", () => {

    assert.ok(game, "expected real planner data for a-total-war-saga-troy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 69);

});

test("every A Total War Saga: TROY achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every A Total War Saga: TROY achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 69 A Total War Saga: TROY achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Deal They Can't Refuse", "Playing as Argos, confederate a faction by spending 200 Dominance."],
        ["A Queen's Legacy", "Playing as Hippolyta's Amazons, achieve a Homeric Victory."],
        ["All the Queen's Horses", "Playing as Hippolyta's Amazons or Penthesilea's Amazons, win a battle with an army that contains only mounted units."],
        ["An Arrow to the Heel", "Playing as Paris of Troy, wound Achilles in battle with Paris present."],
        ["Apollo's Plague", "Defeat someone who already has this achievement in any multiplayer battle."],
        ["Bamboozle", "Playing as Lycia, break 5 barter agreements in a single campaign."],
        ["Bread Feeds War", "Collect 100,000 Food only from barters over a single campaign."],
        ["Broken Prophecy", "Win a battle for Troy after successfully Stealing the Palladium."],
        ["Bulwark of the Achaeans", "Playing as Salamis, achieve a Homeric Victory."],
        ["Challenge Accepted", "Playing as Salamis, challenge and defeat all Paragons."],
        ["Countless Hosts of Thrace", "Playing as Rhesus have 6 Countless Host armies at one time."],
        ["Daughters of Ares", "Playing as Hippolyta's Amazons or Penthesilea's Amazons, win a battle an army that contains only Amazon units which cannot be upgraded."],
        ["Destiny Awaits", "Playing as Dardania, achieve a Homeric Victory."],
        ["Doom that crossed the sea", "Playing as Memnon have at least 10 Sherden Warriors recruited in your armies."],
        ["Face Me!", "Playing as Phthia, wound Hector in battle with Achilles present."],
        ["Fame Everlasting", "Playing as Memnon raze 10 settlements with \"Fame\" War Spoils."],
        ["First!", "Win a mythic monster quest battle by turn 50. "],
        ["For Themiscyra!", "Playing as Hippolyta's Amazons or Penthesilea's Amazons, win a battle for the settlement of Athens."],
        ["Godlike Alexandros", "Playing as Paris of Troy, achieve a Homeric victory."],
        ["Good Boy!", "Pet Cerberus."],
        ["Hammer of the Gods", "Reach the highest tier of favour with Hephaestus."],
        ["Healing and Music", "Reach the highest tier of favour with Apollo."],
        ["Heir of Two Kingdoms", "Playing as Lycia, achieve a Homeric Victory."],
        ["Heroic Retinue", "Unlock and equip the strongest bodyguard unit available to a Hero."],
        ["Hidden Island", "Conquer the mystery Cyclops island."],
        ["Homer's Favourite", "Achieve a Total War victory with any faction in the main campaign."],
        ["Honour Restored", "Playing as Sparta, achieve a Homeric Victory."],
        ["Hound of Hell", "Capture Cerberus."],
        ["Immortal Serpent", "Capture the Hydra."],
        ["Isolationist", "Win the game without signing any treaties"],
        ["King of all Animals", "Capture the Griffin."],
        ["King of all Men", "Playing as Mycenae, have all King of Men positions occupied at the same time."],
        ["King of the Bronze Age", "Achieve a Total War Victory with any Faction on the Historic campaign."],
        ["Let it Flow", "Win a campaign battle that results in a river of blood."],
        ["Love and Beauty", "Reach the highest tier of favour with Aphrodite."],
        ["Making Sacrifices", "Playing as Penthesilea's Amazons, gain War Spoils for each god"],
        ["Marriage Over Lust", "Playing as Paris of Troy, have neglected status with Aphrodite and worshipped status with Hera or Athena."],
        ["Master of Trickery", "Playing as Ithaca, achieve a Homeric Victory."],
        ["My Kingdom for a Horse", "Win the battle for Troy with Odysseus' Ruse active."],
        ["Odyssey", "Playing as Ithaca, conquer Troy and then get back home to Ithaca."],
        ["Of the Shining Helm", "Playing as Hector of Troy, achieve a Homeric Victory."],
        ["Poseidon's Wrath", "Win the battle for Troy on the \"earthquake\" map."],
        ["Protector of Ilion", "Playing as Hector of Troy, achieve the highest level of Trojan Alliance"],
        ["Protector of the Hearth", "Reach the highest tier of favour with Hera."],
        ["Realm Conqueror", "Complete all Realm missions in one campaign."],
        ["Reunited", "Playing as Sparta, win a battle for Helen's settlement."],
        ["Ruler of Olympus", "Reach the highest tier of favour with Zeus."],
        ["Say Cheese!", "Take a screenshot using the Photo Mode."],
        ["Shepherd of the People", "Playing as Mycenae, achieve a Homeric Victory."],
        ["Sole Heir", "Playing as Paris of Troy or Hector of Troy, win a campaign where you declared war on your brother on turn 1."],
        ["Speak to the Dead", "Playing as Dardania, unlock all dead heroes in Stygian Voices."],
        ["Speak to the Divine", "Playing as Dardania, complete a mission for each god over a single campaign."],
        ["Surpassed Tydeus", "Playing as Argos, achieve a Homeric Victory."],
        ["The Adventurer King", "Playing as Memnon, achieve Homeric Victory."],
        ["The Great Cause\t", "Playing as Sparta, win a battle with an army that contains 19 units from other factions."],
        ["The Great Hunt", "Reach the highest tier of favour with Artemis."],
        ["The Greatest Warrior", "Playing as Phthia, achieve a Homeric Victory."],
        ["The Host's Champion", "Playing as Mycenae, have Achilles or Ajax as your Lawagetas."],
        ["The Old Gods Speak", "Playing as Rhesus, spend at least 100 Devotion."],
        ["The Rage of Achilles", "Have Achilles in \"Enraged\" mood for 25 turns in one campaign."],
        ["The Sea's Favour", "Reach the highest tier of favour with Poseidon."],
        ["This is Total War", "Win the game having declared war on every faction the turn you encountered them, as well as never negotiating a peace treaty."],
        ["Thrace Triumphant", "Playing as Rhesus, achieve Homeric Victory."],
        ["Tropaion", "Win a campaign battle that results in a Blood totem appearing."],
        ["Vengeance Incarnate", "Playing as Penthesilea's Amazons, achieve a Homeric Victory."],
        ["War Ensemble", "Reach the highest tier of favour with Ares."],
        ["Wisdom and Strategy", "Reach the highest tier of favour with Athena."],
        ["Yoink", "Playing as Lycia, steal 5 barter agreements in a single campaign"],
        ["Your Likeness in the Sky", "Achieve a Total War victory with any faction in the mythic campaign."],
    ];

    assert.strictEqual(officialAchievements.length, 69, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
