import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-rise-of-the-golden-idol.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2716400 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-rise-of-the-golden-idol");

test("getPlannerData('the-rise-of-the-golden-idol') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-rise-of-the-golden-idol");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every The Rise of the Golden Idol achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every The Rise of the Golden Idol achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 The Rise of the Golden Idol achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Academic Impact", "Solve the Academic Impact scenario"],
        ["Ancient Artifacts", "Solve the Ancient Artifacts scenario"],
        ["Ascension", "Solve the Ascension scenario"],
        ["Backstage Drama", "Solve the Backstage Drama scenario"],
        ["Beach Trip", "Solve the Beach Trip scenario"],
        ["Behind Bars", "Solve the Behind Bars scenario"],
        ["Blaze of Glory", "Solve the Blaze of Glory scenario"],
        ["Blockbuster Release", "Solve the Blockbuster Release scenario"],
        ["Boardroom Brawl", "Solve the Boardroom Brawl scenario"],
        ["Broadside Betrayal", "Solve Broadside Betrayal"],
        ["Complex", "Solve the Complex scenario"],
        ["Consequences", "Solve Consequences"],
        ["Constriction", "Solve the Constriction scenario"],
        ["Court of the Sentinels", "Solve Court of the Sentinels"],
        ["Eternity's End", "Solve the Eternity's End scenario"],
        ["Feathered Frenzy", "Solve the Feathered Frenzy scenario"],
        ["Final Clash", "Solve the Final Clash scenario"],
        ["Following Orders", "Solve the Following Orders scenario"],
        ["Fruits of Disobedience", "Solve Fruits of Disobedience"],
        ["Garden Retreat", "Solve the Garden Retreat scenario"],
        ["Going Once", "Solve the Going Once scenario"],
        ["Ignition", "Solve the Ignition scenario"],
        ["Last Orders", "Solve Last Orders"],
        ["News Flash", "Solve the News Flash scenario"],
        ["Protest Movement", "Solve the Protest Movement scenario"],
        ["Revelation", "Solve the Revelation scenario"],
        ["Sickness and Health", "Solve Sickness and Health"],
        ["Speildance", "Solve the Speildance scenario"],
        ["Steelside Warehouse", "Solve the Steelside Warehouse scenario"],
        ["The Age of Restraint", "Complete The Age of Restraint story"],
        ["The Curse", "Complete the Curse chapter"],
        ["The Curse of the Last Reaper", "Complete The Curse of the Last Reaper story"],
        ["The Lemurian Phoenix", "Complete the Lemurian Phoenix story"],
        ["The Machine", "Complete the Machine chapter"],
        ["The Pinnacle", "Complete the Pinnacle chapter"],
        ["The Procedure", "Solve the The Procedure scenario"],
        ["The Pursuit", "Complete the Pursuit chapter"],
        ["The Raid", "Solve the Raid scenario"],
        ["The Royal Blood", "Solve the Royal Blood scenario"],
        ["The Sentience Gambit", "Solve The Sentience Gambit"],
        ["The Sins of New Wells", "Complete the Sins of New Wells story"],
        ["The Trials", "Complete the Trials chapter"],
        ["Trouble Unleashed", "Solve the Trouble Unleashed scenario"],
        ["Under Construction", "Solve the Under Construction scenario"],
        ["Unravelling", "Solve the Unravelling scenario"],
        ["Whishbloom", "Solve Whishbloom"],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
