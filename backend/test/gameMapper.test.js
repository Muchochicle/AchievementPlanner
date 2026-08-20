import { test } from "node:test";
import assert from "node:assert";

import { mapSteamGame, mapSteamGameSafe, mapPlannerOnlyGame } from "../utils/gameMapper.js";
import { getAllPlannerSlugs } from "../utils/plannerCatalog.js";

// A fictitious appid/name pair guaranteed not to collide with any real
// catalog entry in src/data/games (see plannerCatalog.js) - keeps the
// "no planner" assertions below independent of whatever games happen to
// be in the catalog at any given time.
const UNKNOWN_APPID = 999999999;

test("mapSteamGame derives a slug from the game name: lowercased, non-alphanumerics collapsed to single hyphens, no leading/trailing hyphen", () => {

    const result = mapSteamGame({
        appid: UNKNOWN_APPID,
        name: "  Some Game: Special Edition!! ",
        playtime_forever: 0,
        img_icon_url: "abc"
    });

    assert.strictEqual(result.slug, "some-game-special-edition");

});

test("mapSteamGame falls back to a placeholder title/slug when the name is missing, blank, or whitespace-only", () => {

    for (const name of [undefined, null, "", "   "]) {

        const result = mapSteamGame({
            appid: UNKNOWN_APPID,
            name,
            playtime_forever: 0,
            img_icon_url: "abc"
        });

        assert.strictEqual(result.title, `Unknown game (${UNKNOWN_APPID})`);
        assert.strictEqual(result.slug, `unknown-${UNKNOWN_APPID}`);

    }

});

test("mapSteamGame rounds playtime from minutes to whole hours", () => {

    const result = mapSteamGame({
        appid: UNKNOWN_APPID,
        name: "Playtime Test",
        playtime_forever: 150, // 2.5 hours
        img_icon_url: "abc"
    });

    assert.strictEqual(result.playtime, 3, "150 minutes should round to 3 hours (Math.round(2.5))");

});

test("mapSteamGame builds the expected Steam CDN image/icon URLs from appid/img_icon_url", () => {

    const result = mapSteamGame({
        appid: 12345,
        name: "URL Test",
        playtime_forever: 0,
        img_icon_url: "deadbeef"
    });

    assert.strictEqual(result.image, "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/12345/header.jpg");
    assert.strictEqual(result.icon, "https://media.steampowered.com/steamcommunity/public/images/apps/12345/deadbeef.jpg");

});

test("mapSteamGame marks a game with no matching catalog entry as owned, with no planner and all planner fields nulled/emptied", () => {

    const result = mapSteamGame({
        appid: UNKNOWN_APPID,
        name: "Definitely Not In The Catalog Zzyzx",
        playtime_forever: 0,
        img_icon_url: "abc"
    });

    assert.strictEqual(result.owned, true);
    assert.strictEqual(result.hasPlanner, false);
    assert.strictEqual(result.difficulty, null);
    assert.strictEqual(result.completionTime, null);
    assert.strictEqual(result.missable, null);
    assert.strictEqual(result.playthroughs, null);
    assert.strictEqual(result.hasGuide, false);
    assert.deepStrictEqual(result.genres, []);
    assert.deepStrictEqual(result.achievements, []);

});

test("mapSteamGameSafe returns the same result as mapSteamGame for valid input", () => {

    const game = {
        appid: UNKNOWN_APPID,
        name: "Safe Wrapper Test",
        playtime_forever: 60,
        img_icon_url: "abc"
    };

    assert.deepStrictEqual(mapSteamGameSafe(game), mapSteamGame(game));

});

test("mapSteamGameSafe catches a malformed entry (null) and returns null instead of throwing", () => {

    const originalConsoleError = console.error;
    console.error = () => {};

    try {

        const result = mapSteamGameSafe(null);
        assert.strictEqual(result, null);

    } finally {

        console.error = originalConsoleError;

    }

});

test("mapSteamGameSafe logs the failing appid and error message, so a bad entry is never silently dropped", () => {

    const logged = [];
    const originalConsoleError = console.error;
    console.error = (...args) => logged.push(args);

    try {

        // playtime_forever is a string here - Math.round(NaN / 60) doesn't
        // throw, so instead force a genuine throw via a getter that blows
        // up when mapSteamGame reads game.name.
        const poisoned = {
            appid: 42,
            get name() { throw new Error("boom from a malformed Steam response"); }
        };

        const result = mapSteamGameSafe(poisoned);

        assert.strictEqual(result, null);
        assert.strictEqual(logged.length, 1);
        assert.match(logged[0][0], /appid=42/);
        assert.match(logged[0][1], /boom from a malformed Steam response/);

    } finally {

        console.error = originalConsoleError;

    }

});

test("mapPlannerOnlyGame returns null for a slug that isn't in the catalog", () => {

    assert.strictEqual(mapPlannerOnlyGame("definitely-not-a-real-catalog-slug-zzyzx"), null);

});

test("mapPlannerOnlyGame marks a real catalog entry as not owned but having a planner, with a defined title/slug", () => {

    const [realSlug] = getAllPlannerSlugs();

    assert.ok(realSlug, "expected at least one non-internal game in the catalog to test against");

    const result = mapPlannerOnlyGame(realSlug);

    assert.strictEqual(result.slug, realSlug);
    assert.strictEqual(result.owned, false);
    assert.strictEqual(result.hasPlanner, true);
    assert.strictEqual(typeof result.title, "string");
    assert.ok(result.title.length > 0);

});
