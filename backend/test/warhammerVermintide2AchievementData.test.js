import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-vermintide-2.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 552500 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 26 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("warhammer-vermintide-2");

test("getPlannerData('warhammer-vermintide-2') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-vermintide-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Warhammer: Vermintide 2 achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Warhammer: Vermintide 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 officially-described Warhammer: Vermintide 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Avatar of Drakira", "Reach level 30 with Kerillian"],
        ["Champion of Taal", "Reach level 30 with Kruber"],
        ["Conflagration of Doom", "Reach level 30 with Sienna"],
        ["Craftsman", "Craft an Item"],
        ["Escaped!", "Complete Prologue"],
        ["Exemplar", "Unlock all Talent points for 1 career"],
        ["Heirloom", "Equip an Exotic Item"],
        ["Just Like Cousin Okri", "Reach level 30 with Bardin"],
        ["Make Do And Mend", "Salvage 100 items"],
        ["Mark of Expertise", "Equip a Veteran Item"],
        ["Master Craftsman", "Craft 50 items"],
        ["My First Wargear", "Equip a Common Item"],
        ["Norscannihilation", "Complete Skittergate on Legend"],
        ["Now You're Showing Off", "Equip Exotic items in every slot"],
        ["Pact-Smasher", "Complete Skittergate on Veteran"],
        ["Pantheon of Heroes", "Reach Level 30 with all characters"],
        ["Quite the Find", "Equip a Rare Item"],
        ["Reikland Rumble", "Complete Act 3"],
        ["Righteous Crusade", "Complete Skittergate on Champion"],
        ["Striking Back", "Complete Act 2"],
        ["Tempered by War", "Unlock 1st Talent point"],
        ["The Frozen North", "Complete Skittergate on Recruit"],
        ["The Plot Thickens", "Complete Act 1"],
        ["Virtuoso", "Complete a level as every Hero"],
        ["Waste Not, Want Not", "Salvage an item"],
        ["Witch Hunter General", "Reach level 30 with Saltzpyre"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
