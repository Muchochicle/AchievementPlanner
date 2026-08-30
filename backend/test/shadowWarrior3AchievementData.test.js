import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shadow-warrior-3.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1036890 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("shadow-warrior-3");

test("getPlannerData('shadow-warrior-3') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for shadow-warrior-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Shadow Warrior 3 achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Shadow Warrior 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Shadow Warrior 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["-273 Kelvin", "Freeze 75 enemies"],
        ["A Cold Day in Hell", "Obtain \"Brain Freeze\" Gore Tool from Kugutsu."],
        ["Acupuncture", "Put 50 enemies on spikes"],
        ["Anyone Has a Corkscrew?", "Obtain \"Penetrator\" Gore Tool from Mogura."],
        ["Awake Your Inner Wang", "Fully upgrade one character skill branch"],
        ["Baddies go 'BZZZZZ'", "Electrocute 50 enemies without Motoko's help"],
        ["Big-Laser-Gun-10000", "Complete 'Doomsday Device'"],
        ["Caution! Watch Your Head.", "Obtain \"Brain Tonic\" Gore Tool from Shogai."],
        ["Coaching is overrated", "Obtain all upgrades"],
        ["Cool guys don't look at explosions", "Explode 50 explodables"],
        ["Damn, that's a big dam", "Complete 'That Damn Dam'"],
        ["Disco Inferno", "Obtain \"Disco Grenade\" Gore Tool from Laser Shogun."],
        ["Don't come closer", "Kill 200 enemies"],
        ["Down the raccoon hole", "Complete 'Motoko's Thunderdome'"],
        ["Dragon Slayer", "Complete 'Intestinal Inspector'"],
        ["Executioner", "Perform Finisher 100 times"],
        ["Eye See You!", "Obtain \"Seeking Eye\" from Seeking Shokera."],
        ["Gore Master", "Kill 100 enemies with Gore weapons"],
        ["I don't have friends, I got egg", "Complete 'Egg Express'"],
        ["I'm something of a gunsmith myself", "Fully upgrade a ranged weapon"],
        ["Inside out", "Complete 'Midnight Snack'"],
        ["It's dangerous out there", "Kill 150 enemies with environmental hazards"],
        ["Let me in! LET ME IN!", "Complete 'Way to Motoko'"],
        ["Lo Wang, first of his name", "Complete 'Walking on Eggshells'"],
        ["Lookin for that special someone", "Complete 'Wayfarer's Forest'"],
        ["Master Smith would be proud", "Fully upgrade the katana"],
        ["New Year Has Come Early", "Obtain \"Swarm Launcher\" Gore Tool from Slinky Jakku."],
        ["Samurai", "Kill 100 enemies with the katana"],
        ["Set the world on fire", "Set 25 enemies on fire"],
        ["Shiny! What does it do?", "Obtain your first upgrade"],
        ["Show me what you're made of", "Obtain all Gore Tool types"],
        ["Size Does Matter.", "Obtain \"Double Trouble\" Gore Tool from Gassy Obariyon."],
        ["Ski pass", "Complete 'The Fast and the Furry'"],
        ["Stop! Hammertime!", "Obtain \"Equalizer\" Gore Tool from Oni Hanma."],
        ["Surgeon", "Perform Finisher 15 times"],
        ["The end of the world", "Complete 'The Dragon's Back'"],
        ["What You're Cooking Here?", "Obtain \"Hungry, Hungry Heart\" Gore Tool from Chef Oboru Guruma."],
        ["Your Sword is Mine!", "Obtain \"Blade of Hattori\" Gore Tool from Hattori."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
