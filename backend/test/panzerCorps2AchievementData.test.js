import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/panzer-corps-2.json - 130 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1072040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("panzer-corps-2");

test("getPlannerData('panzer-corps-2') returns real planner data with 130 curated achievements", () => {

    assert.ok(game, "expected real planner data for panzer-corps-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 130);

});

test("every Panzer Corps 2 achievement has a unique id from 1 to 130 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 130 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 130);
    assert.strictEqual(new Set(apinames).size, 130);

});

test("every Panzer Corps 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 130 Panzer Corps 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1939 Colonel", "Finish Axis Operations 1939 campaign on Colonel difficulty or higher"],
        ["1939 Field Marshal", "Finish Axis Operations 1939 campaign on Field Marshal difficulty or higher"],
        ["1939 General", "Finish Axis Operations 1939 campaign on General difficulty or higher"],
        ["1939 Generalissimus", "Finish Axis Operations 1939 campaign on Generalissimus difficulty"],
        ["1939 Major", "Finish Axis Operations 1939 campaign on Major difficulty or higher"],
        ["1940 Colonel", "Finish Axis Operations 1940 campaign on Colonel difficulty or higher"],
        ["1940 Field Marshal", "Finish Axis Operations 1940 campaign on Field Marshal difficulty or higher"],
        ["1940 General", "Finish Axis Operations 1940 campaign on General difficulty or higher"],
        ["1940 Generalissimus", "Finish Axis Operations 1940 campaign on Generalissimus difficulty"],
        ["1940 Major", "Finish Axis Operations 1940 campaign on Major difficulty or higher"],
        ["1941 Colonel", "Finish Axis Operations 1941 campaign on Colonel difficulty or higher"],
        ["1941 Field Marshal", "Finish Axis Operations 1941 campaign on Field Marshal difficulty or higher"],
        ["1941 General", "Finish Axis Operations 1941 campaign on General difficulty or higher"],
        ["1941 Generalissimus", "Finish Axis Operations 1941 campaign on Generalissimus difficulty"],
        ["1941 Major", "Finish Axis Operations 1941 campaign on Major difficulty or higher"],
        ["1942 Colonel", "Finish Axis Operations 1942 campaign on Colonel difficulty or higher"],
        ["1942 Field Marshal", "Finish Axis Operations 1942 campaign on Field Marshal difficulty or higher"],
        ["1942 General", "Finish Axis Operations 1942 campaign on General difficulty or higher"],
        ["1942 Generalissimus", "Finish Axis Operations 1942 campaign on Generalissimus difficulty"],
        ["1942 Major", "Finish Axis Operations 1942 campaign on Major difficulty or higher"],
        ["1943 Colonel", "Finish Axis Operations 1943 campaign on Colonel difficulty or higher"],
        ["1943 Field Marshal", "Finish Axis Operations 1943 campaign on Field Marshal difficulty or higher"],
        ["1943 General", "Finish Axis Operations 1943 campaign on General difficulty or higher"],
        ["1943 Generalissimus", "Finish Axis Operations 1943 campaign on Generalissimus difficulty"],
        ["1943 Major", "Finish Axis Operations 1943 campaign on Major difficulty or higher"],
        ["1944 Colonel", "Finish Axis Operations 1944 campaign on Colonel difficulty or higher"],
        ["1944 Field Marshal", "Finish Axis Operations 1944 campaign on Field Marshal difficulty or higher"],
        ["1944 General", "Finish Axis Operations 1944 campaign on General difficulty or higher"],
        ["1944 Generalissimus", "Finish Axis Operations 1944 campaign on Generalissimus difficulty"],
        ["1944 Major", "Finish Axis Operations 1944 campaign on Major difficulty or higher"],
        ["1945 Colonel", "Finish Axis Operations 1945 campaign on Colonel difficulty or higher"],
        ["1945 Field Marshal", "Finish Axis Operations 1945 campaign on Field Marshal difficulty or higher"],
        ["1945 General", "Finish Axis Operations 1945 campaign on General difficulty or higher"],
        ["1945 Generalissimus", "Finish Axis Operations 1945 campaign on Generalissimus difficulty"],
        ["1945 Major", "Finish Axis Operations 1945 campaign on Major difficulty or higher"],
        ["1946 Colonel", "Finish Axis Operations 1946 campaign on Colonel difficulty or higher"],
        ["1946 Field Marshal", "Finish Axis Operations 1946 campaign on Field Marshal difficulty or higher"],
        ["1946 General", "Finish Axis Operations 1946 campaign on General difficulty or higher"],
        ["1946 Generalissimus", "Finish Axis Operations 1946 campaign on Generalissimus difficulty or higher"],
        ["1946 Major", "Finish Axis Operations 1946 campaign on Major difficulty or higher"],
        ["All American Colonel", "Finish the All American campaign on Colonel difficulty or higher"],
        ["All American Field Marshal", "Finish the All American campaign on Field Marshal difficulty or higher"],
        ["All American General", "Finish the All American campaign on General difficulty or higher"],
        ["All American Generalissimus", "Finish the All American campaign on Generalissimus difficulty"],
        ["All American Major", "Finish the All American campaign on Major difficulty or higher"],
        ["Bulge Colonel", "Finish Frontlines - Bulge campaign on Colonel difficulty or higher"],
        ["Bulge Field Marshal", "Finish Frontlines - Bulge campaign on Field Marshal difficulty or higher"],
        ["Bulge General", "Finish Frontlines - Bulge campaign on General difficulty or higher"],
        ["Bulge Generalissimus", "Finish Frontlines - Bulge campaign on Generalissimus difficulty or higher"],
        ["Bulge Major", "Finish Frontlines - Bulge campaign on Major difficulty or higher"],
        ["Cat Hunter", "Solve \"Cat Trap\" puzzle"],
        ["Conquered the Fjords", "Win \"Fjord War\" scenario"],
        ["Cyrenaica British Colonel", "Finish the Frontlines - Cyrenaica's British campaign on Colonel difficulty or higher"],
        ["Cyrenaica British Field Marshal", "Finish the Frontlines - Cyrenaica's British campaign on Field Marshal difficulty or higher"],
        ["Cyrenaica British General", "Finish the Frontlines - Cyrenaica's British campaign on General difficulty or higher"],
        ["Cyrenaica British Generalissimus ", "Finish the Frontlines - Cyrenaica's British campaign on Generalissimus difficulty"],
        ["Cyrenaica British Major", "Finish the Frontlines - Cyrenaica's British campaign on Major difficulty or higher"],
        ["Cyrenaica Italian Colonel", "Finish the Frontlines - Cyrenaica's Italian campaign on Colonel difficulty or higher"],
        ["Cyrenaica Italian Field Marshal", "Finish the Frontlines - Cyrenaica's Italian campaign on Field Marshal difficulty or higher"],
        ["Cyrenaica Italian General", "Finish the Frontlines - Cyrenaica's Italian campaign on General difficulty or higher"],
        ["Cyrenaica Italian Generalissimus", "Finish the Frontlines - Cyrenaica's Italian campaign on Generalissimus difficulty"],
        ["Cyrenaica Italian Major", "Finish the Frontlines - Cyrenaica's Italian campaign on Major difficulty or higher"],
        ["Defender of the Reich", "Win \"Defender of the Reich\" scenario"],
        ["Double Smart", "Solve \"Double Strike\" puzzle"],
        ["Elite Anti-Air", "Gain five stars on an anti-air unit in a campaign"],
        ["Elite Anti-Tank", "Gain five stars on an anti-tank unit in a campaign"],
        ["Elite Artillery", "Gain five stars on an artillery unit in a campaign"],
        ["Elite Fighter", "Gain five stars on a fighter unit in a campaign"],
        ["Elite Infantry", "Gain five stars on an infantry unit in a campaign"],
        ["Elite Recon", "Gain five stars on a recon unit in a campaign"],
        ["Elite Strategic Bomber", "Gain five stars on a strategic bomber unit in a campaign"],
        ["Elite Tactical Bomber", "Gain five stars on a tactical bomber unit in a campaign"],
        ["Elite Tank", "Gain five stars on a tank unit in a campaign"],
        ["First Guards Colonel", "Finish the First Guards campaign on Colonel difficulty or higher"],
        ["First Guards Field Marshall", "Finish the First Guards campaign on Field Marshall difficulty or higher"],
        ["First Guards General", "Finish the First Guards campaign on General difficulty or higher"],
        ["First Guards Generalissimus", "Finish the First Guards campaign on Generalissimus difficulty or higher"],
        ["First Guards Major", "Finish the First Guards campaign on Major difficulty or higher"],
        ["Ghost Division Colonel", "Finish the Ghost Division campaign on Colonel difficulty or higher"],
        ["Ghost Division Field Marshal", "Finish the Ghost Division campaign on Field Marshal difficulty or higher"],
        ["Ghost Division General", "Finish the Ghost Division campaign on General difficulty or higher"],
        ["Ghost Division Generalissimus", "Finish the Ghost Division campaign on Generalissimus difficulty"],
        ["Ghost Division Major", "Finish the Ghost Division campaign on Major difficulty or higher"],
        ["Helpful Enemy", "Solve \"Enemy of my Enemy\" puzzle"],
        ["Hero of Crete", "Win \"Crete\" scenario"],
        ["Hero of Fall Weiss", "Win \"Fall Weiss\" scenario"],
        ["Hero of Gothic Line", "Win \"Gothic Line\" scenario"],
        ["Hero of Lorraine", "Win \"Lorraine\" scenario"],
        ["Hero of Prague Offensive", "Win \"Prague Offensive\" scenario"],
        ["Hero of Rzhev", "Win \"Battle of Rzhev\" scenario"],
        ["Impossible is Possible", "Solve \"Impossible Siege\" puzzle"],
        ["Italy Vol.1 Colonel", "Finish the Italy Vol.1 campaign on Colonel difficulty or higher"],
        ["Italy Vol.1 Field Marshall", "Finish the Italy Vol.1 campaign on  Field Marshall difficulty or higher"],
        ["Italy Vol.1 General", "Finish the Italy Vol.1 campaign on  General difficulty or higher"],
        ["Italy Vol.1 Generalissimus", "Finish the Italy Vol.1 campaign on Generalissimus difficulty"],
        ["Italy Vol.1 Major", "Finish the Italy Vol.1 campaign on Major difficulty or higher"],
        ["Mouse Hunter", "Solve \"Mouse Hunt\" puzzle"],
        ["Panther Hunter", "Solve \"River Panther\" puzzle"],
        ["Poland Colonel", "Finish War Stories - Fall of Poland campaign on Colonel difficulty or higher"],
        ["Poland Field Marshal", "Finish War Stories - Fall of Poland campaign on Field Marshal difficulty or higher"],
        ["Poland General", "Finish War Stories - Fall of Poland campaign on General difficulty or higher"],
        ["Poland Generalissimus", "Finish War Stories - Fall of Poland campaign on Generalissimus difficulty or higher"],
        ["Poland Major", "Finish War Stories - Fall of Poland campaign on Major difficulty or higher"],
        ["Prepped for Battle", "Finish the Tutorial"],
        ["Spanish Colonel", "Finish Spanish Civil War campaign on Colonel difficulty or higher"],
        ["Spanish Field Marshal", "Finish Spanish Civil War campaign on Field Marshal difficulty or higher"],
        ["Spanish General", "Finish Spanish Civil War campaign on General difficulty or higher"],
        ["Spanish Generalissimus", "Finish Spanish Civil War campaign on Generalissimus difficulty"],
        ["Spanish Major", "Finish Spanish Civil War campaign on Major difficulty or higher"],
        ["Successful Surrender", "Solve \"Successful Suppress\" puzzle"],
        ["The Captain", "Guide Captain Orkan safely through the Fall of Poland DLC Campaign"],
        ["The Civilian", "Guide Civilian Paszkowski safely through the Fall of Poland DLC Campaign"],
        ["The Great Escape", "Solve \"Bring them Home\" puzzle"],
        ["The Lieutenant", "Guide Lieutenant Urbanowicz safely through the Fall of Poland DLC Campaign"],
        ["The Nurse", "Guide Nurse Lewinski safely through the Fall of Poland DLC Campaign"],
        ["The Tanker", "Guide Commander Balinski safely through the Fall of Poland DLC Campaign"],
        ["Ultimate Veteran", "Bring a unit that served in the Spanish Civil War into the 1946 Amerika Campaign"],
        ["Victory Fireworks", "Solve \"Fireworks\" puzzle"],
        ["Wehrmacht Colonel", "Finish Wehrmacht campaign on Colonel difficulty or higher"],
        ["Wehrmacht Field Marshal", "Finish Wehrmacht campaign on Field Marshal difficulty or higher"],
        ["Wehrmacht General", "Finish Wehrmacht campaign on General difficulty or higher"],
        ["Wehrmacht Generalissimus", "Finish Wehrmacht campaign on Generalissimus difficulty"],
        ["Wehrmacht Major", "Finish Wehrmacht campaign on Major difficulty or higher"],
        ["Westwall Colonel", "Finish Frontlines - Westwall campaign on Colonel difficulty or higher"],
        ["Westwall Field Marshal", "Finish Frontlines - Westwall campaign on Field Marshal difficulty or higher"],
        ["Westwall General", "Finish Frontlines - Westwall campaign on General difficulty or higher"],
        ["Westwall Generalissimus", "Finish Frontlines - Westwall campaign on Generalissimus difficulty"],
        ["Westwall Major", "Finish Frontlines - Westwall campaign on Major difficulty or higher"],
        ["Xolved", "Solve \"Operation X\" puzzle"],
        ["You are the Best", "Launch the game once"],
    ];

    assert.strictEqual(officialAchievements.length, 130, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
