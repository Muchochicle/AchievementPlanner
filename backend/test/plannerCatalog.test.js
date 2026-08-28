import { test } from "node:test";
import assert from "node:assert";

import {
    getPlannerData,
    getAllPlannerSlugs,
    getPlannerDataByAppId
} from "../utils/plannerCatalog.js";

// src/data/games/debug-game.json is a real, checked-in fixture marked
// "internal": true (a developer sandbox with fake achievements) -
// plannerCatalog.js's loadCatalog() is supposed to exclude any such entry
// from every consumer (getPlannerData/getAllPlannerSlugs/
// getPlannerDataByAppId), which is the one thing standing between it and
// showing up as a real game on Home/Games. This had no dedicated test
// before - only indirect coverage via gameMapper.test.js picking
// getAllPlannerSlugs()[0] as a fixture, which never actually asserted the
// exclusion itself.

test("getAllPlannerSlugs never includes the internal debug-game fixture", () => {

    const slugs = getAllPlannerSlugs();

    assert.ok(!slugs.includes("debug-game"), "the internal sandbox fixture must never be listed as a real catalog entry");

});

test("getAllPlannerSlugs still includes the real, non-internal catalog games", () => {

    const slugs = getAllPlannerSlugs();

    // Sanity check that the internal-exclusion filter isn't accidentally
    // excluding everything - these are checked-in, non-internal fixtures
    // (see src/data/games/*.json).
    assert.ok(slugs.includes("hades"));
    assert.ok(slugs.includes("hollow-knight"));
    assert.ok(slugs.includes("portal-2"));
    assert.ok(slugs.includes("celeste"));
    assert.ok(slugs.includes("inside"));
    assert.ok(slugs.includes("portal"));
    assert.ok(slugs.includes("limbo"));
    assert.ok(slugs.includes("braid"));
    assert.ok(slugs.includes("ori-and-the-blind-forest"));
    assert.ok(slugs.includes("what-remains-of-edith-finch"));
    assert.ok(slugs.includes("return-of-the-obra-dinn"));
    assert.ok(slugs.includes("stardew-valley"));
    assert.ok(slugs.includes("a-short-hike"));
    assert.ok(slugs.includes("hyper-light-drifter"));
    assert.ok(slugs.includes("cuphead"));
    assert.ok(slugs.includes("superliminal"));
    assert.ok(slugs.includes("transistor"));
    assert.ok(slugs.includes("bastion"));
    assert.ok(slugs.includes("rime"));
    assert.ok(slugs.includes("slay-the-spire"));
    assert.ok(slugs.includes("disco-elysium"));
    assert.ok(slugs.includes("a-hat-in-time"));
    assert.ok(slugs.includes("the-stanley-parable"));
    assert.ok(slugs.includes("papers-please"));
    assert.ok(slugs.includes("dead-cells"));
    assert.ok(slugs.includes("baba-is-you"));
    assert.ok(slugs.includes("owlboy"));
    assert.ok(slugs.includes("oxenfree"));
    assert.ok(slugs.includes("rogue-legacy"));
    assert.ok(slugs.includes("ori-and-the-will-of-the-wisps"));
    assert.ok(slugs.includes("the-messenger"));
    assert.ok(slugs.includes("pyre"));
    assert.ok(slugs.includes("steamworld-dig-2"));
    assert.ok(slugs.includes("the-forgotten-city"));
    assert.ok(slugs.includes("guacamelee-2"));
    assert.ok(slugs.includes("va11-hall-a"));
    assert.ok(slugs.includes("thomas-was-alone"));
    assert.ok(slugs.includes("furi"));
    assert.ok(slugs.includes("void-bastards"));
    assert.ok(slugs.includes("deaths-door"));
    assert.ok(slugs.includes("darkest-dungeon"));
    assert.ok(slugs.includes("moonlighter"));
    assert.ok(slugs.includes("frostpunk"));
    assert.ok(slugs.includes("spelunky-2"));
    assert.ok(slugs.includes("into-the-breach"));
    assert.ok(slugs.includes("cult-of-the-lamb"));
    assert.ok(slugs.includes("ftl"));
    assert.ok(slugs.includes("mark-of-the-ninja"));
    assert.ok(slugs.includes("enter-the-gungeon"));
    assert.ok(slugs.includes("loop-hero"));
    assert.ok(slugs.includes("little-nightmares"));
    assert.ok(slugs.includes("griftlands"));
    assert.ok(slugs.includes("dredge"));
    assert.ok(slugs.includes("vampire-survivors"));
    assert.ok(slugs.includes("risk-of-rain-2"));
    assert.ok(slugs.includes("streets-of-rogue"));
    assert.ok(slugs.includes("sable"));
    assert.ok(slugs.includes("neon-white"));
    assert.ok(slugs.includes("chained-echoes"));
    assert.ok(slugs.includes("crypt-of-the-necrodancer"));
    assert.ok(slugs.includes("dorfromantik"));
    assert.ok(slugs.includes("pizza-tower"));
    assert.ok(slugs.includes("dave-the-diver"));
    assert.ok(slugs.includes("curse-of-the-dead-gods"));
    assert.ok(slugs.includes("astral-ascent"));
    assert.ok(slugs.includes("dome-keeper"));
    assert.ok(slugs.includes("chicory"));
    assert.ok(slugs.includes("sifu"));
    assert.ok(slugs.includes("neon-abyss"));
    assert.ok(slugs.includes("a-little-to-the-left"));
    assert.ok(slugs.includes("elden-ring"));
    assert.ok(slugs.includes("baldurs-gate-3"));
    assert.ok(slugs.includes("cyberpunk-2077"));
    assert.ok(slugs.includes("terraria"));
    assert.ok(slugs.includes("skyrim-special-edition"));
    assert.ok(slugs.includes("the-witcher-3"));
    assert.ok(slugs.includes("god-of-war"));
    assert.ok(slugs.includes("red-dead-redemption-2"));
    assert.ok(slugs.includes("left-4-dead-2"));
    assert.ok(slugs.includes("grand-theft-auto-v"));
    assert.ok(slugs.includes("sekiro"));
    assert.ok(slugs.includes("dark-souls-3"));
    assert.ok(slugs.includes("satisfactory"));
    assert.ok(slugs.includes("phasmophobia"));
    assert.ok(slugs.includes("garrys-mod"));
    assert.ok(slugs.includes("rust"));
    assert.ok(slugs.includes("dying-light"));
    assert.ok(slugs.includes("palworld"));
    assert.ok(slugs.includes("fallout-new-vegas"));
    assert.ok(slugs.includes("no-mans-sky"));
    assert.ok(slugs.includes("deep-rock-galactic"));
    assert.ok(slugs.includes("left-4-dead"));
    assert.ok(slugs.includes("half-life-2"));
    assert.ok(slugs.includes("the-forest"));
    assert.ok(slugs.includes("ark-survival-evolved"));
    assert.ok(slugs.includes("civilization-vi"));
    assert.ok(slugs.includes("sea-of-thieves"));
    assert.ok(slugs.includes("monster-hunter-world"));
    assert.ok(slugs.includes("cities-skylines"));
    assert.ok(slugs.includes("age-of-empires-2-de"));
    assert.ok(slugs.includes("hogwarts-legacy"));
    assert.ok(slugs.includes("borderlands-2"));
    assert.ok(slugs.includes("raft"));
    assert.ok(slugs.includes("pubg-battlegrounds"));
    assert.ok(slugs.includes("monster-hunter-rise"));
    assert.ok(slugs.includes("team-fortress-2"));
    assert.ok(slugs.includes("rocket-league"));
    assert.ok(slugs.includes("euro-truck-simulator-2"));
    assert.ok(slugs.includes("stellaris"));
    assert.ok(slugs.includes("hearts-of-iron-4"));
    assert.ok(slugs.includes("crusader-kings-3"));
    assert.ok(slugs.includes("total-war-warhammer-3"));
    assert.ok(slugs.includes("dyson-sphere-program"));
    assert.ok(slugs.includes("war-thunder"));
    assert.ok(slugs.includes("v-rising"));
    assert.ok(slugs.includes("resident-evil-2-remake"));
    assert.ok(slugs.includes("resident-evil-4-remake"));
    assert.ok(slugs.includes("resident-evil-village"));
    assert.ok(slugs.includes("factorio"));
    assert.ok(slugs.includes("slime-rancher"));
    assert.ok(slugs.includes("naraka-bladepoint"));
    assert.ok(slugs.includes("7-days-to-die"));
    assert.ok(slugs.includes("green-hell"));
    assert.ok(slugs.includes("grounded"));
    assert.ok(slugs.includes("civilization-5"));
    assert.ok(slugs.includes("age-of-empires-4"));
    assert.ok(slugs.includes("total-war-three-kingdoms"));
    assert.ok(slugs.includes("doom-2016"));
    assert.ok(slugs.includes("doom-eternal"));
    assert.ok(slugs.includes("devil-may-cry-5"));
    assert.ok(slugs.includes("cities-skylines-2"));
    assert.ok(slugs.includes("age-of-mythology-retold"));
    assert.ok(slugs.includes("total-war-warhammer-2"));
    assert.ok(slugs.includes("balatro"));
    assert.ok(slugs.includes("content-warning"));
    assert.ok(slugs.includes("mount-and-blade-2-bannerlord"));
    assert.ok(slugs.includes("brotato"));
    assert.ok(slugs.includes("total-war-rome-2"));
    assert.ok(slugs.includes("counter-strike-source"));

});

test("getPlannerData('debug-game') returns null, not the internal sandbox data", () => {

    assert.strictEqual(getPlannerData("debug-game"), null);

});

// Phase 65: loadCatalog() used to build its cache as a plain {} literal,
// so catalog[slug] resolved through the JS prototype chain for slugs that
// collide with a real Object.prototype member - a caller could hit
// GET /api/games/__proto__ (or /constructor, /toString, /hasOwnProperty,
// /valueOf, /isPrototypeOf) and get back a truthy, non-null "planner
// entry" (Object.prototype itself, or the Object constructor function)
// instead of the expected null/404. Fixed by building the cache with
// Object.create(null) instead.
test("getPlannerData never resolves a prototype-chain property name to a fake catalog entry", () => {

    for (const slug of ["__proto__", "constructor", "toString", "hasOwnProperty", "valueOf", "isPrototypeOf"]) {

        assert.strictEqual(getPlannerData(slug), null, `getPlannerData("${slug}") must return null, not a prototype-chain value`);

    }

});


test("getPlannerData returns real data for a non-internal catalog slug", () => {

    const data = getPlannerData("hades");

    assert.ok(data, "expected real planner data for a known non-internal game");
    assert.strictEqual(data.name, "Hades");

});

test("getPlannerDataByAppId(-1) (the internal fixture's steamAppId) returns null", () => {

    assert.strictEqual(getPlannerDataByAppId(-1), null);

});

// Phase 40: src/data/games/portal-2.json went from a 3-entry stub to all 51
// of Portal 2's real Steam achievements (verified against the live
// ISteamUserStats/GetSchemaForGame/v2 response for appid 620 - see
// PHASE_40_AUDIT.md). Before this, a player who finished the 3 curated
// achievements got told "100% completion" by getRecommendedAchievement()
// (src/utils/planner/recommendation/recommendation.js) while ~48 real Steam
// achievements remained. These tests exist to catch that regressing back to
// a partial set - through getPlannerData("portal-2"), the same read path
// every consumer (routes/games.js, gameMapper.js) uses.

test("getPlannerData('portal-2') returns the complete 51-achievement curated set, not the old 3-entry stub", () => {

    const data = getPlannerData("portal-2");

    assert.ok(data, "expected real planner data for portal-2");
    assert.strictEqual(
        data.achievements.length,
        51,
        "Portal 2 has 51 real Steam achievements (verified live) - any count below that silently reintroduces the false '100% completion' state in getRecommendedAchievement()"
    );

});

test("getPlannerData('portal-2') achievements have no duplicate id or apiname", () => {

    const { achievements } = getPlannerData("portal-2");

    const ids = achievements.map(a => a.id);
    const apinames = achievements.map(a => a.apiname);

    assert.strictEqual(new Set(ids).size, ids.length, "duplicate achievement id found in portal-2.json");
    assert.strictEqual(new Set(apinames).size, apinames.length, "duplicate achievement apiname found in portal-2.json");

});

test("getPlannerData('portal-2') achievements all carry well-formed Steam-sourced and curatorial fields", () => {

    const { achievements } = getPlannerData("portal-2");

    for (const achievement of achievements) {

        // Steam-sourced fields (copied verbatim from the live schema).
        assert.strictEqual(typeof achievement.apiname, "string");
        assert.ok(achievement.apiname.length > 0, `achievement ${achievement.id} has an empty apiname`);
        assert.strictEqual(typeof achievement.name, "string");
        assert.ok(achievement.name.length > 0, `achievement ${achievement.id} has an empty name`);
        assert.strictEqual(typeof achievement.description, "string");
        assert.ok(achievement.description.length > 0, `achievement ${achievement.id} has an empty description`);

        // Curatorial fields (assigned, not Steam-sourced).
        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `achievement ${achievement.id} has an out-of-range difficulty: ${achievement.difficulty}`
        );
        assert.strictEqual(typeof achievement.missable, "boolean");
        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `achievement ${achievement.id} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

    }

});

test("getPlannerDataByAppId(620) resolves to the portal-2 slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(620);

    assert.ok(result, "expected a planner entry for Portal 2's appid");
    assert.strictEqual(result.slug, "portal-2");
    assert.strictEqual(result.data.achievements.length, 51);

});

// Phase 41: src/data/games/hollow-knight.json went from an empty
// achievements[] to all 63 of Hollow Knight's real Steam achievements
// (verified against the live ISteamUserStats/GetSchemaForGame/v2 response
// for appid 367520 - see PHASE_41_AUDIT.md). 24 of those 63 are
// Steam-hidden, and Steam's schema never returns a description for a
// hidden achievement (confirmed live, not a fetch failure) - those 24 use
// the same "Hidden achievement" fallback text
// src/components/steam-achievement-card/steam-achievement-card.js already
// falls back to for the Steam-view side, rather than an invented spoiler
// description or a blank/null field (which would render literally as
// "null"/"undefined" via escapeHtml - see recommended-achievement.js).

const HOLLOW_KNIGHT_HIDDEN_APINAMES = [
    "DREAM_FK",
    "HORNET_2",
    "DREAM_BROKEN_VESSEL",
    "COLLECTOR",
    "ZOTE",
    "NAILSMITH_KILL",
    "NAILSMITH_SPARE",
    "QUIRREL_EPILOGUE",
    "ENDING_A",
    "ENDING_B",
    "ENDING_C",
    "VOID",
    "MR_MUSHROOM",
    "DREAM_SOUL_MASTER_DEFEAT",
    "WHITE_DEFENDER",
    "GREY_PRINCE",
    "GRIMM",
    "NIGHTMARE_GRIMM",
    "BANISHMENT",
    "PANTHEON1",
    "PANTHEON2",
    "PANTHEON3",
    "PANTHEON4",
    "ENDINGD"
];

test("getPlannerData('hollow-knight') returns the complete 63-achievement curated set, not an empty planner", () => {

    const data = getPlannerData("hollow-knight");

    assert.ok(data, "expected real planner data for hollow-knight");
    assert.strictEqual(
        data.achievements.length,
        63,
        "Hollow Knight has 63 real Steam achievements (verified live) - the Session Planner and Recommended Achievement are inert without the complete set"
    );

});

test("getPlannerData('hollow-knight') achievements have no duplicate id or apiname", () => {

    const { achievements } = getPlannerData("hollow-knight");

    const ids = achievements.map(a => a.id);
    const apinames = achievements.map(a => a.apiname);

    assert.strictEqual(new Set(ids).size, ids.length, "duplicate achievement id found in hollow-knight.json");
    assert.strictEqual(new Set(apinames).size, apinames.length, "duplicate achievement apiname found in hollow-knight.json");

});

test("getPlannerData('hollow-knight') achievements all carry well-formed Steam-sourced and curatorial fields", () => {

    const { achievements } = getPlannerData("hollow-knight");

    for (const achievement of achievements) {

        // Steam-sourced fields (apiname/name verbatim; description verbatim
        // for visible achievements, or the approved hidden-achievement
        // fallback - either way, always a real non-empty string, never
        // null/undefined/empty, so it can never render as literal
        // "null"/"undefined" text).
        assert.strictEqual(typeof achievement.apiname, "string");
        assert.ok(achievement.apiname.length > 0, `achievement ${achievement.id} has an empty apiname`);
        assert.strictEqual(typeof achievement.name, "string");
        assert.ok(achievement.name.length > 0, `achievement ${achievement.id} has an empty name`);
        assert.strictEqual(typeof achievement.description, "string");
        assert.ok(achievement.description.length > 0, `achievement ${achievement.id} has an empty description`);

        // Curatorial fields (assigned, not Steam-sourced).
        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `achievement ${achievement.id} has an out-of-range difficulty: ${achievement.difficulty}`
        );
        assert.strictEqual(typeof achievement.missable, "boolean");
        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `achievement ${achievement.id} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

    }

});

test("exactly the 24 known Steam-hidden Hollow Knight achievements use the 'Hidden achievement' fallback description, and no others do", () => {

    const { achievements } = getPlannerData("hollow-knight");

    const actualHiddenApinames = achievements
        .filter(a => a.description === "Hidden achievement")
        .map(a => a.apiname)
        .sort();

    assert.deepStrictEqual(
        actualHiddenApinames,
        [...HOLLOW_KNIGHT_HIDDEN_APINAMES].sort(),
        "the set of achievements using the hidden-achievement fallback must exactly match Steam's live hidden flag - no more, no fewer"
    );

    const visibleAchievements = achievements.filter(
        a => !HOLLOW_KNIGHT_HIDDEN_APINAMES.includes(a.apiname)
    );

    for (const achievement of visibleAchievements) {

        assert.notStrictEqual(
            achievement.description,
            "Hidden achievement",
            `${achievement.apiname} is not one of the known-hidden achievements but has the hidden fallback description`
        );

    }

});

test("getPlannerDataByAppId(367520) resolves to the hollow-knight slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(367520);

    assert.ok(result, "expected a planner entry for Hollow Knight's appid");
    assert.strictEqual(result.slug, "hollow-knight");
    assert.strictEqual(result.data.achievements.length, 63);

});

// Phase 72: src/data/games/celeste.json and inside.json add two new
// curated catalog games (see PHASE_72_AUDIT.md and celesteAchievementData.
// test.js/insideAchievementData.test.js for the full per-achievement
// coverage) - these two mirror the existing appid-resolution smoke tests
// above for portal-2/hollow-knight.

test("getPlannerDataByAppId(504230) resolves to the celeste slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(504230);

    assert.ok(result, "expected a planner entry for Celeste's appid");
    assert.strictEqual(result.slug, "celeste");
    assert.strictEqual(result.data.achievements.length, 32);

});

test("getPlannerDataByAppId(304430) resolves to the inside slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(304430);

    assert.ok(result, "expected a planner entry for INSIDE's appid");
    assert.strictEqual(result.slug, "inside");
    assert.strictEqual(result.data.achievements.length, 14);

});
