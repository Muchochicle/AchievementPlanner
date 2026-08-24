import { test } from "node:test";
import assert from "node:assert";

import { mapSteamGame, mapSteamGameSafe, mapOwnedGames, mapPlannerOnlyGame } from "../utils/gameMapper.js";
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

test("mapSteamGame passes through Steam's rtime_last_played as lastPlayed, defaulting to 0 when absent (never played)", () => {

    const played = mapSteamGame({
        appid: UNKNOWN_APPID,
        name: "Recently Played Test",
        playtime_forever: 120,
        img_icon_url: "abc",
        rtime_last_played: 1786810894
    });

    assert.strictEqual(played.lastPlayed, 1786810894);

    const neverPlayed = mapSteamGame({
        appid: UNKNOWN_APPID,
        name: "Never Played Test",
        playtime_forever: 0,
        img_icon_url: "abc"
    });

    assert.strictEqual(neverPlayed.lastPlayed, 0);

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

// Finding 3 (PHASE_51-54_AUDIT.md) - two owned, non-catalog games whose
// derivedSlug happened to match (identical/very similar names) made the
// second one permanently unreachable via GET /api/games/:slug, since that
// route resolves a slug via games.find(), which always returns the first
// match. mapOwnedGames() is the shared fix both routes/games.js and
// gameDetail.js now use instead of mapping independently.

test("mapOwnedGames returns each game unchanged (same slug as mapSteamGame alone) when there is no collision", () => {

    const games = mapOwnedGames([

        { appid: 111, name: "Alpha Game", playtime_forever: 60, img_icon_url: "a" },
        { appid: 222, name: "Beta Game", playtime_forever: 30, img_icon_url: "b" }

    ]);

    assert.strictEqual(games.length, 2);
    assert.strictEqual(games[0].slug, "alpha-game");
    assert.strictEqual(games[1].slug, "beta-game");

});

test("mapOwnedGames disambiguates a real slug collision by suffixing every occurrence after the first with its own appid", () => {

    const games = mapOwnedGames([

        { appid: 111, name: "Duplicate Name", playtime_forever: 60, img_icon_url: "a" },
        { appid: 222, name: "Duplicate Name", playtime_forever: 30, img_icon_url: "b" },
        { appid: 333, name: "Duplicate Name", playtime_forever: 10, img_icon_url: "c" }

    ]);

    assert.strictEqual(games.length, 3, "no game may be dropped just because its slug collided");

    const slugs = games.map(g => g.slug);

    assert.strictEqual(slugs[0], "duplicate-name", "the first occurrence keeps the plain, undecorated slug");
    assert.strictEqual(slugs[1], "duplicate-name-222", "the second occurrence is disambiguated with its own appid");
    assert.strictEqual(slugs[2], "duplicate-name-333", "the third occurrence is disambiguated with its own appid");

    // Every slug must be unique - the entire point of this function.
    assert.strictEqual(new Set(slugs).size, 3);

    // Disambiguation must never change which appid a given entry reports -
    // only the collided games' `slug` field changes, nothing else about
    // their identity.
    assert.strictEqual(games[1].appid, 222);
    assert.strictEqual(games[2].appid, 333);

});

test("mapOwnedGames drops a malformed entry (via mapSteamGameSafe) exactly like a plain .map(mapSteamGameSafe).filter(Boolean) would", () => {

    const games = mapOwnedGames([

        { appid: 111, name: "Valid Game", playtime_forever: 60, img_icon_url: "a" },
        null

    ]);

    assert.strictEqual(games.length, 1);
    assert.strictEqual(games[0].appid, 111);

});

test("mapOwnedGames returns an empty array for an empty input, without throwing", () => {

    assert.deepStrictEqual(mapOwnedGames([]), []);

});
