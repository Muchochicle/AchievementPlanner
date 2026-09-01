import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/core-keeper.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1621690 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("core-keeper");

test("getPlannerData('core-keeper') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for core-keeper");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Core Keeper achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Core Keeper achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Core Keeper achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Sting like a bee", "Gained 100 skill points in melee"],
        ["5 Centimeters Per Second", "Planted 10 Cherry Trees"],
        ["A Good Life", "Fed cattle"],
        ["A Slimey Encounter", "Defeat Glurch the Abominous Mass."],
        ["A Strange Song", "Play the Tune of Tempest"],
        ["A Throne Fit for a King", "Sit on a Caveling Toilet while wearing the King Slime Crown."],
        ["A Wizard Is Never Late", "Gained 100 skill points in magic"],
        ["Beam Me Up", "Used a waypoint"],
        ["Bugging Out", "Defeat Ghorm the Devourer."],
        ["Burning Through", "Defeat Igneous the Molten Mass."],
        ["Calculated Prophecy", "Defeat S.A.H.A.B.A.R."],
        ["Cambrian Behemoth", "Defeat Urschleim."],
        ["Certified Chef", "Discovered 100 recipes in the cook book"],
        ["Cheese it!", "Gained 100 skill points in cooking"],
        ["Completely Hooked", "Gained 100 skill points in fishing"],
        ["Crafty Explorer", "Gained 100 skill points in crafting"],
        ["Diggy Diggy Hole", "Gained 100 skill points in mining"],
        ["Explosion Mastery", "Gained 100 skill points in explosions"],
        ["Farmer Midas", "Harvested a golden plant"],
        ["Float like a butterfly...", "Gained 100 skill points in running"],
        ["From the Depths!", "Defeat Omoroth the Sea Titan."],
        ["From the Skies!", "Defeat Azeos the Sky Titan."],
        ["Gossip Group", "Talked to a Big Larva"],
        ["Health Conscious", "Gained 100 skill points in vitality"],
        ["Howl of the Sea", "Defeat Crydra the Ice Titan."],
        ["I want ’em all!", "Stored all color variations of one pet type in a chest"],
        ["Impersonator Syndrome", "Use a Magic Mirror to dress your character to match a key-art illustration character."],
        ["In a Rush", "Reach over 200 movement speed."],
        ["Just Deserts", "Defeat Ra-Akar the Sand Titan."],
        ["Legendary Fossil", "Catch the Starlight Nautilus in the Molten Quarry with the Galaxite Fishing Rod."],
        ["Legion Commander", "Had 8 or more active minions"],
        ["Nature Nurturer", "Gained 100 skill points in gardening"],
        ["Pet Prodigy", "Reached max level on a pet"],
        ["Roar of the Flames", "Defeat Pyrdra the Fire Titan."],
        ["Robin Hood", "Gained 100 skill points in range"],
        ["Rock and Stone!", "Equipped the Ring of Rock and Ring of Stone"],
        ["Silence the Symphony", "Defeat Nimruza, Queen of the Burrowed Sands."],
        ["Slippery Shinobi", "Defeat King Slime."],
        ["Slippery When Wet", "Defeat Morpha the Aquatic Mass."],
        ["Song of the Woods", "Defeat Druidra the Wild Titan."],
        ["Stay Away From The Summoner!", "Gained 100 skill points in summoning"],
        ["Thalassophobia", "Defeat the Atlantean Worm."],
        ["The Credence of Ruin", "Obtain the Credence of Ruin (two parts from puzzle structures, one from S.A.H.A.B.A.R.)."],
        ["The Heart of the Cards", "Obtain the Oracle Card deck (collect all nine Oracle Cards from across the biomes)."],
        ["The Phantom Spark", "Obtain the Phantom Spark legendary bow (from the three ancient Sunken Sea cities)."],
        ["The Rune Song", "Obtain the Rune Song legendary sword."],
        ["The Soul Seeker", "Obtain the Soul Seeker (an upgraded pickaxe crafted at the Ancient Forge)."],
        ["The Titan Breath", "Obtain the Titan Breath (combine drops from the three Hydra bosses)."],
        ["Toxic Personality", "Defeat Ivy the Poisonous Mass."],
        ["Visitor From A Dying World", "Defeat the Core Commander."],
        ["Watch Your Step", "Defeat the Hive Mother."],
        ["Whisper of the Void", "Defeat Oblidra the Void Lord (after collecting 10 Oblivion Fragments)."],
        ["Wielder of Legends", "Obtain the Stormbringer legendary weapon at a Rift Statue."],
        ["You're a Wizard", "Defeat Malugaz the Corrupted."],
        ["Your Very First", "Hatched your first pet from an egg"],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
