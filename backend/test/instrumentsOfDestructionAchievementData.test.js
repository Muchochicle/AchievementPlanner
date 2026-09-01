import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/instruments-of-destruction.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1428100 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("instruments-of-destruction");

test("getPlannerData('instruments-of-destruction') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for instruments-of-destruction");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Instruments of Destruction achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Instruments of Destruction achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Instruments of Destruction achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100% Club", "Achieve 3 stars in all missions and challenges in both Campaign and Build & Destroy"],
        ["All Build & Destroy Missions Complete", "Beat all missions in Build & Destroy with 3 stars"],
        ["All Campaign Missions Complete", "Beat all missions in the Campaign with 3 stars"],
        ["BOULDER BAY Challenges Complete in Build & Destroy", "Beat all challenges in BOULDER BAY in Build & Destroy"],
        ["BOULDER BAY Challenges Complete in Campaign", "Beat all challenges in BOULDER BAY in Campaign"],
        ["BOULDER BAY Complete in Build & Destroy", "Beat all missions in BOULDER BAY in Build & Destroy"],
        ["BOULDER BAY Complete in Campaign", "Beat all missions in BOULDER BAY in Campaign"],
        ["Build & Destroy Challenges Complete", "Beat all challenges in Build & Destroy with 3 stars"],
        ["Campaign Challenges Complete", "Beat all challenges in the Campaign with 3 stars"],
        ["Close Call", "Complete mission with 90% or more vehicle damage"],
        ["Crystal Collector", "Collect 100 crystals"],
        ["Driver", "Drive 10 different vehicles"],
        ["FROZEN FRONTIERS Challenges Complete in Build & Destroy", "Beat all challenges in FROZEN FRONTIERS in Build & Destroy"],
        ["FROZEN FRONTIERS Challenges Complete in Campaign", "Beat all challenges in FROZEN FRONTIERS in Campaign"],
        ["FROZEN FRONTIERS Complete in Build & Destroy", "Beat all missions in FROZEN FRONTIERS in Build & Destroy"],
        ["FROZEN FRONTIERS Complete in Campaign", "Beat all missions in FROZEN FRONTIERS in Campaign"],
        ["INFERNAL ISLES Challenges Complete in Build & Destroy", "Beat all challenges in INFERNAL ISLES in Build & Destroy"],
        ["INFERNAL ISLES Challenges Complete in Campaign", "Beat all challenges in INFERNAL ISLES in Campaign"],
        ["INFERNAL ISLES Complete in Build & Destroy", "Beat all missions in INFERNAL ISLES in Build & Destroy"],
        ["INFERNAL ISLES Complete in Campaign", "Beat all missions in INFERNAL ISLES in Campaign"],
        ["JADE ISLANDS Challenges Complete in Build & Destroy", "Beat all challenges in JADE ISLANDS in Build & Destroy"],
        ["JADE ISLANDS Challenges Complete in Campaign", "Beat all challenges in JADE ISLANDS in Campaign"],
        ["JADE ISLANDS Complete in Build & Destroy", "Beat all missions in JADE ISLANDS in Build & Destroy"],
        ["JADE ISLANDS Complete in Campaign", "Beat all missions in JADE ISLANDS in Campaign"],
        ["Mad Max", "Destroy 50 self-driving cars"],
        ["Nature Lover", "Destroy 250 trees"],
        ["NO MAN'S LAND Challenges Complete in Campaign", "Beat all challenges in NO MAN'S LAND in Campaign"],
        ["NO MAN'S LAND Complete in Campaign", "Beat all missions in NO MAN'S LAND in Campaign"],
        ["OUTER TERRITORIES Challenges Complete in Build & Destroy", "Beat all challenges in OUTER TERRITORIES in Build & Destroy"],
        ["OUTER TERRITORIES Challenges Complete in Campaign", "Beat all challenges in OUTER TERRITORIES in Campaign"],
        ["OUTER TERRITORIES Complete in Build & Destroy", "Beat all missions in OUTER TERRITORIES in Build & Destroy"],
        ["OUTER TERRITORIES Complete in Campaign", "Beat all missions in OUTER TERRITORIES in Campaign"],
        ["PARADISE COVE Challenges Complete in Build & Destroy", "Beat all challenges in PARADISE COVE in Build & Destroy"],
        ["PARADISE COVE Challenges Complete in Campaign", "Beat all challenges in PARADISE COVE in Campaign"],
        ["PARADISE COVE Complete in Build & Destroy", "Beat all missions in PARADISE COVE in Build & Destroy"],
        ["PARADISE COVE Complete in Campaign", "Beat all missions in PARADISE COVE in Campaign"],
        ["ROCKY RIDGE Challenges Complete in Campaign", "Beat all challenges in ROCKY RIDGE in Campaign"],
        ["ROCKY RIDGE Complete in Campaign", "Beat all missions in ROCKY RIDGE in Campaign"],
        ["SANDY HAVEN Challenges Complete in Build & Destroy", "Beat all challenges in SANDY HAVEN in Build & Destroy"],
        ["SANDY HAVEN Challenges Complete in Campaign", "Beat all challenges in SANDY HAVEN in Campaign"],
        ["SANDY HAVEN Complete in Build & Destroy", "Beat all missions in SANDY HAVEN in Build & Destroy"],
        ["SANDY HAVEN Complete in Campaign", "Beat all missions in SANDY HAVEN in Campaign"],
        ["THE HIGHLANDS Challenges Complete in Campaign", "Beat all challenges in THE HIGHLANDS in Campaign"],
        ["THE HIGHLANDS Complete in Campaign", "Beat all missions in THE HIGHLANDS in Campaign"],
        ["THE WASTELANDS Challenges Complete in Build & Destroy", "Beat all challenges in THE WASTELANDS in Build & Destroy"],
        ["THE WASTELANDS Challenges Complete in Campaign", "Beat all challenges in THE WASTELANDS in Campaign"],
        ["THE WASTELANDS Complete in Build & Destroy", "Beat all missions in THE WASTELANDS in Build & Destroy"],
        ["THE WASTELANDS Complete in Campaign", "Beat all missions in THE WASTELANDS in Campaign"],
        ["Total Destruction", "Achieve 100% destruction in a mission"],
        ["Workshop", "Download an item from Workshop"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
