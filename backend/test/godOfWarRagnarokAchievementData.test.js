import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/god-of-war-ragnarok.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2322010 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("god-of-war-ragnarok");

test("getPlannerData('god-of-war-ragnarok') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for god-of-war-ragnarok");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every God of War Ragnarök achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every God of War Ragnarök achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 God of War Ragnarök achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Grizzly Encounter", "Defeat the bear during Main Quest 1: Surviving Fimbulwinter."],
        ["Backyard Brawl", "Defeat Vanadis at the start of Main Quest 6: The Reckoning."],
        ["Besties", "Complete the 'Animal Instincts' Favor."],
        ["Better Together", "Defeat Hrist and Mist during Main Quest 16: The Summoning."],
        ["Blood Debt", "Fight Thor during Main Quest 1: Surviving Fimbulwinter."],
        ["Blood, Sweat, and Týr", "(Valhalla DLC) Defeat Tyr for the first time in Chapter 3 (The Host)."],
        ["Collector", "Obtain all Relics and Sword Hilts"],
        ["Comeuppance", "Defeat Heimdall during Main Quest 13: Creatures of Prophecy."],
        ["Dark Odyssey", "(Valhalla DLC) Complete the sacrifice scene in Chapter 2 (Homecoming)."],
        ["Dragon Slayer", "Craft the Dragon Scaled Armor Set"],
        ["Easy Come, Easy Go", "Acquire more than 15,000 Fleeting Echoes on a single attempt"],
        ["Fight at the Forum", "Participate in a fight at The Forum arena"],
        ["Full Belly", "Obtain all of the Apples of Iðunn and Horns of Blood Mead"],
        ["Full Gufa", "Complete the 'Secret of the Sands' and 'Song of the Sands' Favors."],
        ["Funeral for a Friend", "Complete the 'A Viking Funeral' Favor."],
        ["God of Hope", "(Valhalla DLC) Complete all six Valhalla story chapters."],
        ["Grave Mistake", "Complete the 'Fit for a King' Favor (defeat King Hrolf Kraki)."],
        ["How it Started", "Equip an Enchantment"],
        ["How it's Going", "Fully repair the Amulet of Yggdrasil"],
        ["Invasive Species ", "Complete all 9 Crater Hunts."],
        ["Invitation Accepted", "Discover the secret of Valhalla"],
        ["It Was a Good Day", "Complete the 'Freya's Missing Peace' Favor."],
        ["Knock off the Rust", "Purchase a Skill"],
        ["Making Amends", "Complete the 'Weight of Chains' Favor."],
        ["New Friends", "Complete the 'The Mysterious Orb' Favor."],
        ["No Kratos, No Scry", "(Valhalla DLC) Pick up Pandora's Statue in the final chapter, by the Chain of Balance."],
        ["Off the Leash", "Defeat Garm during Main Quest 12: Reunion."],
        ["Phalanx", "Obtain all Shields"],
        ["Pure of Hart", "Complete the 'A Stag for All Seasons' Favor."],
        ["Ragnarök", "Defeat Odin during Main Quest 17: The Realms of War."],
        ["Ready for Commitment", "Fully upgrade one armor set"],
        ["Rebel Leader", "Complete the 'Spirit of Rebellion' Favor."],
        ["Rightful Place", "Complete the 'The Lost Lindwyrms' Favor."],
        ["Root of the Problem", "Defeat Nidhogg during Main Quest 6: The Reckoning."],
        ["Scry Me a River", "(Valhalla DLC) Pick up Kratos' Oath Stone in Chapter 4, by the Chain of Balance."],
        ["Spartan Ways", "Remember the Spartan teachings"],
        ["Spit Shine", "Upgrade one piece of armor"],
        ["Style Points", "Equip a Cosmetic Armor"],
        ["The Bear and the Wolf", "Collect all Trophies"],
        ["The Cauldron", "Defeat Gryla during Main Quest 5: The Lost Sanctuary."],
        ["The Curator", "Collect all of the Artifacts"],
        ["The Florist", "Complete the 'Nine Realms in Bloom' Favor."],
        ["The Librarian", "Collect all of the Books"],
        ["The True Queen", "Complete the 'Defend Your Valor' Favor (defeat Gna)."],
        ["Trials by Fire", "Complete the 'The Final Challenges' Favor."],
        ["Understood the Assignment", "Complete 9 Mastery Quests"],
        ["Wayfarer", "Visit all 9 Realms in Valhalla"],
        ["You Again?", "(Valhalla DLC) Find all three Boat Captain Keys."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
