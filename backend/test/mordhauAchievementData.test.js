import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mordhau.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 629760 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mordhau");

test("getPlannerData('mordhau') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for mordhau");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every MORDHAU achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every MORDHAU achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 MORDHAU achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Boxer", "Kill 30 enemies with fists"],
        ["Burning Man", "Kill an enemy while you are on fire"],
        ["Chambermaid", "Chamber 200 attacks"],
        ["Clobbered", "Kill 5 enemies with the mallet"],
        ["Coming Through", "Kill 5 enemies by trampling them with the horse"],
        ["Crybaby", "Battlecry 500 times"],
        ["Eagle Eye", "Land 10 headshots on enemies with projectiles in a single game"],
        ["Ended Rightly", "Kill an enemy with a pommel throw: equip a compatible weapon such as the Longsword, then tap X then 2 to unscrew the pommel and hurl it as a projectile. The throw is slow and weak, so land it on a bleeding-out or near-dead target (easiest against a friend)."],
        ["Flyswatter", "Block 100 projectiles"],
        ["Friend Indeed", "Reach 1000 assists"],
        ["Guts", "Kill two enemies with a single attack from a melee weapon"],
        ["Highlander", "Decapitate 5 enemies in a single game"],
        ["Home Run", "Deflect a projectile with a strike"],
        ["I Know Kung Fu", "Finish off 10 enemies with a kick"],
        ["Just a Scratch", "Take 400 damage without dying"],
        ["Justice from the Grave", "Kill an enemy after dying"],
        ["Keeps Coming Off", "Lose your head three times in a single match"],
        ["Lived to Tell the Tale", "Regenerate to full health after getting down to 1 health"],
        ["Living Sculpture", "Kill 10 enemies with the carving knife"],
        ["Long List of Names", "Kill 1000 enemies"],
        ["Meat Grinder", "Get 30 kills in a single match"],
        ["Poacher", "Kill 5 enemies with the bear trap"],
        ["Put That Away", "Perform 20 disarms"],
        ["Pyromaniac", "Kill 10 enemies with fire"],
        ["Rock’n’Roll", "Kill 5 enemies with rocks"],
        ["Stairway to Hell", "Kill 5 enemies while climbing a ladder"],
        ["That’s No Ordinary Cold", "Kill an enemy with an icicle"],
        ["The ABCs", "Complete the tutorial"],
        ["The Queen of Weapons", "Kill 20 enemies with the longsword"],
        ["This isn’t Sparta", "Cause someone to fall to their death after kicking them"],
        ["Tough Nut to Crack", "Block 1000 melee attacks"],
        ["Training Accident", "Kill an enemy with the training sword"],
        ["Unstoppable", "Kill 10 enemies in a row without dying"],
        ["Virtuoso", "Kill 5 enemies with the lute"],
        ["Vlad the Impaler", "Kill 20 enemies with the ballista"],
        ["Whack-A-Mole", "Kill 5 enemies with headshots with a couched weapon on horseback"],
        ["Yoink", "Take a melee weapon out of a living enemy’s body"],
        ["You’re Welcome", "Get 30 assists in a single match"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
