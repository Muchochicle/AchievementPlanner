import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shadow-warrior-2.json - 64 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 324800 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("shadow-warrior-2");

test("getPlannerData('shadow-warrior-2') returns real planner data with 64 curated achievements", () => {

    assert.ok(game, "expected real planner data for shadow-warrior-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 64);

});

test("every Shadow Warrior 2 achievement has a unique id from 1 to 64 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 64 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 64);
    assert.strictEqual(new Set(apinames).size, 64);

});

test("every Shadow Warrior 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 64 Shadow Warrior 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alpha R-XIII", "Defeat Alpha R-XIII in side mission: Monster Tea Party"],
        ["Ancient Chinese Secrets", "Find 50 secrets"],
        ["Apprentice of Musashi", "Defeat Apprentice of Musashi in story mission: Ancestral Ties"],
        ["Bullseye", "Perform 100 weakspot kills"],
        ["Call me Wang, Lo Wang", "Kill 2500 enemies"],
        ["Captain Lo-Gan", "Defeat Captain Lo-Gan in side mission: One More Thing"],
        ["Casual Wang", "Complete the game on Tiny Grasshopper difficulty"],
        ["Colonel Fasthand", "Defeat Colonel Fasthand in side mission: Heisenberg - Part 2"],
        ["Eradicator", "Defeat Eradicator in side mission: Stop the Propaganda"],
        ["Executioner", "Kill 500 enemies"],
        ["Experienced Orb Collector", "Collect 1000 Orbs of Masamune"],
        ["Financial Security", "Collect 10000000 zillyen"],
        ["Frozen Widow", "Defeat Frozen Widow in side mission: Ninja'd Scrolls - Part 1"],
        ["Goddess Slayer", "Defeat the Ancient Goddess Ameonna."],
        ["Grandmaster", "Develop any character to level 50"],
        ["Gun Fury", "Defeat Gun Fury in side mission: Demon Trafficking"],
        ["Handyman", "Craft 100 upgrades"],
        ["Hard Wang", "Complete the game on Who Wants Wang difficulty"],
        ["I Think I Saw a Wabbit", "Kill 10 Bunny Lords - rare secret enemies that occasionally appear in levels."],
        ["I'm a Collector Myself", "Unlock all achievements"],
        ["Insane Wang", "Complete the game on No Pain No Gain difficulty"],
        ["Junior Hitman", "Kill 100 enemies"],
        ["King of Mount Akuma", "Defeat Devouring Kamiko. Available via Free-roam on its mission if skipped."],
        ["King of the Dragon Mountain", "Defeat Corrupted Kamiko. If you missed the fight on the story path, replay that mission in Free-roam."],
        ["Legendary Collection", "Collect 100 legendary upgrades"],
        ["Legendary Handyman", "Craft 30 legendary upgrades"],
        ["Lieutenant Akimbo", "Defeat Lieutenant Akimbo in story mission: My Hero"],
        ["Living Torch", "Set 200 enemies on fire"],
        ["Lord Destroyer", "Defeat Lord Destroyer in story mission: All in the Family"],
        ["Magmator of the Devil Mountain", "Defeat Magmator of the Devil Mountain in story mission: Body Shaking"],
        ["Master of The Way of the Wang", "Complete Trials of Infusion, Embedding, Purification and Trial of the Ancient God"],
        ["Mr. Kosugi", "Perform 50 Vanish kills"],
        ["My Precious", "Find 15 secrets"],
        ["Normal Wang", "Complete the game on I Have No Fear difficulty"],
        ["Old Fart", "Defeat Old Fart in side mission: Flirty Fishing - Part 1"],
        ["Orb Collector", "Collect 100 Orbs of Masamune"],
        ["Queen of D.O.L.L.s", "Defeat Queen of D.O.L.L.s in side mission: Flirty Fishing - Part 3"],
        ["Ready for Action", "Collect 500 upgrades"],
        ["Resistor ZL-260", "Defeat Resistor ZL-260 in story mission: Violent Takeover"],
        ["Sempai", "Develop any character to level 10"],
        ["Sensei", "Develop any character to level 25"],
        ["Shady Rascal", "Defeat Shady Rascal in side mission: Flirty Fishing - Part 2"],
        ["Shiny!", "Find 5 secrets"],
        ["Short Circuit", "Electrocute 200 enemies"],
        ["ST-RC1 Titan", "Defeat ST-RC1 Titan in story mission: Zilla Attack"],
        ["Student of The Way of the Wang", "Complete any trial of The Way of the Wang"],
        ["That's a Lot of Coins", "Collect 1000000 zillyen"],
        ["The Chef", "Defeat The Chef in side mission: The Cookery"],
        ["The Guard", "Defeat The Guard in side mission: Ninja'd Scrolls - Part 2"],
        ["The Highest Priest", "Defeat The Highest Priest in side mission: Heisenberg - Part 1"],
        ["The Lord of War", "Defeat The Lord of War in side mission: Heisenberg - Part 3"],
        ["The Sharpest Spike", "Defeat The Sharpest Spike in story mission: Hot Blooded"],
        ["The Toxitor", "Defeat The Toxitor in story mission: Stop the Ooze"],
        ["The Way of Masamune", "Collect 10000 Orbs of Masamune"],
        ["Tiny Little Pieces", "Shatter 100 frozen enemies"],
        ["TL-Devourer", "Defeat TL-Devourer in story mission: Corporate Shill"],
        ["Toxic Blast", "Perform 100 acid corpse explosions"],
        ["Transistor ZL-260", "Defeat Transistor ZL-260 in story mission: Industrial Espionage"],
        ["Trickster", "Perform 200 Special Attack kills"],
        ["Unfinished Business", "Defeat Zilla Mechanoid, the final boss."],
        ["Unique Collection", "Collect 200 unique upgrades"],
        ["Unit-64 Commodore", "Defeat Unit-64 Commodore in side mission: Ninja'd Scrolls - Part 3"],
        ["Vicious Sentinel", "Defeat Vicious Sentinel in side mission: Chi-ters"],
        ["Wang the Impaler", "Perform 100 kills when enemy's grasped by Grip of Darkness"],
    ];

    assert.strictEqual(officialAchievements.length, 64, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
