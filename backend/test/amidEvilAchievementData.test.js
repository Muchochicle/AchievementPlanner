import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/amid-evil.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 673130 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("amid-evil");

test("getPlannerData('amid-evil') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for amid-evil");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every AMID EVIL achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every AMID EVIL achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 AMID EVIL achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Real Klutz", "Experience each type of death"],
        ["Abysmal", "Die in the Gateway"],
        ["All-out", "Finish a level with no mana"],
        ["Amid Difficulty", "Find Evil Difficulty"],
        ["Armageddon", "Blow up the earth"],
        ["CHAMPION", "Beat the Black Labyrinth"],
        ["Close Shave", "Finish a level with less than 10 health"],
        ["Cold Fire", "The Black Labyrinth DLC: defeat the secret boss on the Mystic Shrine level, reached via a button in a waterfall cave."],
        ["Destroyer", "Destroy all decorations in a level"],
        ["DON'T GO!", "Quit the game"],
        ["Explorer", "Find all the secrets in a level"],
        ["Filthy Cheater", "Use a cheat code"],
        ["FNORD", "Find the hidden FNORD reference on Journeyman's Way in The Sacred Path."],
        ["Genocider", "Kill all enemies in an episode"],
        ["Hardcore", "Get all awards in a level"],
        ["He swims, he hungers", "Find and complete the secret underwater level accessed through the Arcane Expanse."],
        ["Heh, Brutal", "Kill 10 enemies in under 10 seconds with the Axe"],
        ["Hippie", "Get through a level without killing anything"],
        ["I banish you to the shadow realm!", "Kill 10 enemies with the Void Splitter's soul mode attack"],
        ["If you can...", "Find the hidden developer room, reached after defeating the final boss."],
        ["Indefatigable", "The Black Labyrinth DLC: collect the three developer artifacts in order - the Simon Orb on Dark Coast, the Leon Cube on Thunder Castle, the Andrew Prism on The Chamber."],
        ["Killer", "Kill all enemies in a level"],
        ["NO TOUCHY.", "Don't pickup anything in a level"],
        ["Overkiller", "Get 100 Overkills"],
        ["Pummelled ", "Kill 15 enemies in under 10 seconds with the gauntlets"],
        ["Ready for anything", "Finish a level with full mana"],
        ["Saviour of the Machine", "Beat the Forges"],
        ["Saviour of the Mages", "Beat the Arcane Expanse"],
        ["Saviour of the Moon", "Beat Astral Equinox"],
        ["Saviour of the Pilgrim", "Beat the Sacred Path"],
        ["Saviour of the Sentinels", "Beat Domain of the Sentinels"],
        ["Saviour of the Sun", "Beat Solar Solstice"],
        ["Saviour of the Universe", "Beat the Abyss"],
        ["Scholar", "Read all inscriptions in a level."],
        ["Seeya", "Banish 10 enemies into a black hole"],
        ["Soul Limbo", "Extend soul mode for 30 seconds"],
        ["Soul Sacrifice", "Finish a level with soul mode on"],
        ["Speed Runner", "Beat a level's par time"],
        ["Super Nova", "Destroy 5 enemies with a single sun"],
        ["The almighty power", "Use each weapons soul mode attack once"],
        ["The chosen one", "Rest easy."],
        ["The first test", "Defeat the Thunder Spirit"],
        ["Wheeeeee!", "Use the Axe underwater, in soul mode."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
