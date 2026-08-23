import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getGameDetail } from "../utils/gameDetail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Real, current curated data for a real catalog game - used (not
// hand-typed/hardcoded) so the steamOnlyCount tests below stay honest
// against whatever hades.json actually contains, rather than a stale
// literal list of apinames that could silently drift from the real file.
const HADES_JSON_PATH = path.join(__dirname, "..", "..", "src", "data", "games", "hades.json");
const hadesData = JSON.parse(fs.readFileSync(HADES_JSON_PATH, "utf-8"));
const hadesApinames = hadesData.achievements.map(a => a.apiname);

function schemaAchievement(apiname) {

    return {
        name: apiname,
        displayName: apiname,
        description: `desc ${apiname}`,
        hidden: false,
        icon: null,
        icongray: null
    };

}

function availableSchema(apinames) {

    return async () => ({
        achievements: apinames.map(schemaAchievement),
        status: "available"
    });

}

function neverCalled(label) {

    return async () => {

        throw new Error(`${label} must not be called for this scenario`);

    };

}

// ---------------------------------------------------------------------
// Game resolution: not found / owned vs. catalog-only precedence
// ---------------------------------------------------------------------

test("returns null when the slug matches neither an owned game nor a catalog entry (logged in)", async () => {

    const result = await getGameDetail(
        "totally-not-a-real-game",
        "76500000000000001",
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: neverCalled("fetchSchema"),
            fetchGlobalPercentages: neverCalled("fetchGlobalPercentages"),
            fetchPlayerAchievements: neverCalled("fetchPlayerAchievements")
        }
    );

    assert.strictEqual(result, null);

});

test("returns null when the slug isn't a real catalog entry and there's no session at all", async () => {

    let ownedGamesCalled = false;

    const result = await getGameDetail(
        "totally-not-a-real-game",
        undefined,
        {
            fetchOwnedGames: async () => { ownedGamesCalled = true; return { games: [] }; },
            fetchSchema: neverCalled("fetchSchema"),
            fetchGlobalPercentages: neverCalled("fetchGlobalPercentages"),
            fetchPlayerAchievements: neverCalled("fetchPlayerAchievements")
        }
    );

    assert.strictEqual(result, null);
    assert.strictEqual(ownedGamesCalled, false, "with no steamId, the owned-games library must never be fetched at all");

});

// PHASE_47_AUDIT.md Finding 5: Steam's real "zero owned games" response
// ({"response":{"game_count":0}}, no `games` key) used to crash this route
// with a 500 once it reached the real, non-injected getOwnedGames(). Unlike
// every other test in this file, `fetchOwnedGames` is deliberately left
// un-injected here so this exercises the real steamApi.js getOwnedGames()
// (with only the underlying global `fetch` mocked) - a regression in the
// actual fix would fail this test even though every synthetic-double test
// above it would keep passing.
test("getGameDetail survives a real zero-owned-games Steam response via the actual (non-injected) getOwnedGames, falling back correctly to the catalog-only branch", async () => {

    const originalFetch = globalThis.fetch;

    globalThis.fetch = async url => {

        if (typeof url === "string" && url.includes("GetOwnedGames")) {

            return { ok: true, status: 200, json: async () => ({ response: { game_count: 0 } }) };

        }

        throw new Error(`unexpected Steam URL in this test: ${url}`);

    };

    try {

        const result = await getGameDetail(
            "hades",
            "steamapi-test:gamedetail-zero-owned-games",
            {
                fetchSchema: availableSchema(hadesApinames),
                fetchGlobalPercentages: async () => [],
                fetchPlayerAchievements: async () => ({ achievements: [], status: null })
            }
        );

        assert.ok(result, "hades must still resolve via the catalog-only fallback, not crash");
        assert.strictEqual(result.owned, false, "not owned - the real (mocked) Steam response reported zero owned games");
        assert.strictEqual(result.hasPlanner, true);

    } finally {

        globalThis.fetch = originalFetch;

    }

});

test("an owned Steam game takes precedence over a catalog-only entry when the same slug would otherwise resolve to both", async () => {

    // Real appid/slug for Hades - owning it on Steam must resolve via the
    // owned-library path (owned:true), not silently fall through to
    // mapPlannerOnlyGame's unowned (owned:false) shape.
    const result = await getGameDetail(
        "hades",
        "76500000000000002",
        {
            fetchOwnedGames: async () => ({
                games: [{
                    appid: 1145360,
                    name: "Hades",
                    img_icon_url: "icon",
                    playtime_forever: 120,
                    rtime_last_played: 1700000000
                }]
            }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "available" })
        }
    );

    assert.ok(result, "expected a resolved game");
    assert.strictEqual(result.owned, true, "an owned Steam game must resolve as owned, not fall back to the catalog-only shape");
    assert.strictEqual(result.slug, "hades");
    assert.strictEqual(result.playtime, 2, "playtime_forever (120 min) should be reported in hours, rounded");

});

// ---------------------------------------------------------------------
// hasAppid branch: no valid appid short-circuits every Steam call
// ---------------------------------------------------------------------

test("a game with no valid appid never calls the schema/global-percentage/player-achievement fetchers, and defaults schemaStatus to 'available' with no achievements", async () => {

    let schemaCalled = false;
    let globalCalled = false;
    let playerCalled = false;

    const result = await getGameDetail(
        "unknown-0",
        "76500000000000003",
        {
            fetchOwnedGames: async () => ({
                games: [{
                    appid: 0,
                    name: "",
                    img_icon_url: "",
                    playtime_forever: 0,
                    rtime_last_played: 0
                }]
            }),
            fetchSchema: async () => { schemaCalled = true; return { achievements: [], status: "available" }; },
            fetchGlobalPercentages: async () => { globalCalled = true; return []; },
            fetchPlayerAchievements: async () => { playerCalled = true; return { achievements: [], status: "available" }; }
        }
    );

    assert.ok(result, "expected a resolved game even with no real appid");
    assert.strictEqual(schemaCalled, false);
    assert.strictEqual(globalCalled, false);
    assert.strictEqual(playerCalled, false);
    assert.strictEqual(result.schemaStatus, "available");
    assert.strictEqual(result.hasSteamAchievements, false);
    assert.strictEqual(result.playerDataStatus, null);
    assert.strictEqual(result.mergedAchievements.steamOnlyCount, 0);

});

// ---------------------------------------------------------------------
// No session: player-data fetch is skipped even for a real, ownable game
// ---------------------------------------------------------------------

test("with no steamId, a real catalog game's player-achievement fetcher is never called and playerDataStatus stays null", async () => {

    let playerCalled = false;

    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => { playerCalled = true; return { achievements: [], status: "available" }; }
        }
    );

    assert.ok(result);
    assert.strictEqual(result.owned, false, "not owned - resolved via the catalog-only path");
    assert.strictEqual(playerCalled, false, "no session means no player-achievement fetch should ever happen");
    assert.strictEqual(result.playerDataStatus, null);

});

// ---------------------------------------------------------------------
// achievementAvailability classification - every state
// ---------------------------------------------------------------------

test("achievementAvailability is 'planner-available' for a real catalog game with confirmed Steam achievements and no player data (logged out)", async () => {

    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: neverCalled("fetchPlayerAchievements")
        }
    );

    assert.strictEqual(result.achievementAvailability, "planner-available");

});

test("achievementAvailability is 'schema-unavailable' when the schema fetch itself fails, and the global-percentages fetch is correctly skipped too", async () => {

    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: async () => ({ achievements: [], status: "unavailable" }),
            fetchGlobalPercentages: neverCalled("fetchGlobalPercentages")
        }
    );

    assert.strictEqual(result.achievementAvailability, "schema-unavailable");
    assert.strictEqual(result.hasSteamAchievements, false);

});

test("achievementAvailability is 'no-achievements' when Steam confirms zero achievements for this game, and the global-percentages fetch is skipped entirely", async () => {

    // Regression test for a real, minor issue discovered while writing this
    // suite (Phase 45 - see PHASE_45_AUDIT.md): the original route fetched
    // global achievement percentages unconditionally whenever hasAppid was
    // true, even when there were zero schema achievements to attach a
    // percentage to - mapSteamAchievements() discards that data unread in
    // this case (steamAchievementMapper.js's early-return), so the fetch
    // was a real, wasted Steam API call. Fixed as part of this phase.
    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema([]),
            fetchGlobalPercentages: neverCalled("fetchGlobalPercentages")
        }
    );

    assert.strictEqual(result.achievementAvailability, "no-achievements");

});

test("achievementAvailability is 'player-data-unavailable' when Steam declines to answer for this player (private profile)", async () => {

    const result = await getGameDetail(
        "hades",
        "76500000000000004",
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "unavailable" })
        }
    );

    assert.strictEqual(result.achievementAvailability, "player-data-unavailable");

});

test("achievementAvailability is 'player-data-unavailable' for a transient player-data failure too (not just a stable 'unavailable' answer)", async () => {

    const result = await getGameDetail(
        "hades",
        "76500000000000005",
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "transient" })
        }
    );

    assert.strictEqual(result.achievementAvailability, "player-data-unavailable");

});

test("achievementAvailability is 'planner-unavailable' when Steam has real achievements but the game has no curated planner", async () => {

    // A synthetic appid that deliberately does not match any real catalog
    // entry - mapSteamGame() looks up planner data by appid first, slug
    // second (see gameMapper.js), so an owned-game fixture using neither a
    // real catalog appid nor a slug-colliding name is guaranteed to resolve
    // with hasPlanner:false, exercising the "Steam has achievements, no
    // curated planner" branch cleanly.
    const result = await getGameDetail(
        "some-other-game-not-in-our-catalog",
        "76500000000000006",
        {
            fetchOwnedGames: async () => ({
                games: [{
                    appid: 9999999,
                    name: "Some Other Game Not In Our Catalog",
                    img_icon_url: "icon",
                    playtime_forever: 10,
                    rtime_last_played: 1700000000
                }]
            }),
            fetchSchema: availableSchema(["SOME_ACHIEVEMENT"]),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "available" })
        }
    );

    assert.ok(result);
    assert.strictEqual(result.hasPlanner, false, "sanity check: this fixture must genuinely have no curated planner");
    assert.strictEqual(result.achievementAvailability, "planner-unavailable");

});

test("achievementAvailability is 'planner-available' when everything lines up: real achievements, confirmed player data, and a curated planner", async () => {

    const result = await getGameDetail(
        "hades",
        "76500000000000007",
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "available" })
        }
    );

    assert.strictEqual(result.achievementAvailability, "planner-available");

});

// ---------------------------------------------------------------------
// mergedAchievements.steamOnlyCount - the single most important branch,
// given the two real bugs (Phases 42-43) already fixed around this exact
// field. Uses hades.json's own, real, current apinames rather than a
// hand-typed literal list, so this stays honest against the real file.
// ---------------------------------------------------------------------

test("mergedAchievements.steamOnlyCount is 0 when Steam's schema exactly matches the curated achievement set", async () => {

    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => []
        }
    );

    assert.strictEqual(result.mergedAchievements.steamOnlyCount, 0);
    assert.strictEqual(result.mergedAchievements.matchedCount, hadesApinames.length);
    assert.strictEqual(result.mergedAchievements.apOnlyCount, 0);

});

test("mergedAchievements.steamOnlyCount is > 0, and correctly counts every extra achievement, when Steam's live schema reports achievements outside the curated set", async () => {

    // Exactly the shape that produced two real, user-facing bugs in this
    // app (Phases 42-43): a curated set that's a strict subset of what
    // Steam's live schema actually reports. This is the test that would
    // have caught, at the HTTP-response level, either of those two bugs
    // being reintroduced by a future change to this route.
    const schemaWithExtras = [...hadesApinames, "SOME_FUTURE_DLC_ACHIEVEMENT_1", "SOME_FUTURE_DLC_ACHIEVEMENT_2"];

    const result = await getGameDetail(
        "hades",
        undefined,
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(schemaWithExtras),
            fetchGlobalPercentages: async () => []
        }
    );

    assert.strictEqual(result.mergedAchievements.steamOnlyCount, 2, "exactly the 2 achievements outside the curated set must be counted, no more, no fewer");
    assert.strictEqual(result.mergedAchievements.matchedCount, hadesApinames.length, "every real curated achievement must still match correctly alongside the extras");

});

test("mergedAchievements.steamOnlyCount correctly counts ALL Steam achievements as steam-only for a Steam-owned game with no curated planner at all", async () => {

    const result = await getGameDetail(
        "another-uncatalogued-game",
        "76500000000000008",
        {
            fetchOwnedGames: async () => ({
                games: [{
                    appid: 8888888,
                    name: "Another Uncatalogued Game",
                    img_icon_url: "icon",
                    playtime_forever: 5,
                    rtime_last_played: 1700000000
                }]
            }),
            fetchSchema: availableSchema(["A", "B", "C"]),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({ achievements: [], status: "available" })
        }
    );

    assert.strictEqual(result.hasPlanner, false);
    assert.strictEqual(result.mergedAchievements.steamOnlyCount, 3, "with no curated data at all, every real Steam achievement is necessarily steam-only");

});

// ---------------------------------------------------------------------
// Response shape
// ---------------------------------------------------------------------

test("the resolved game includes every field the Game page depends on", async () => {

    const result = await getGameDetail(
        "hades",
        "76500000000000009",
        {
            fetchOwnedGames: async () => ({ games: [] }),
            fetchSchema: availableSchema(hadesApinames),
            fetchGlobalPercentages: async () => [],
            fetchPlayerAchievements: async () => ({
                achievements: [{ apiname: hadesApinames[0], achieved: true, unlocktime: 1700000000 }],
                status: "available"
            })
        }
    );

    for (const field of [
        "slug", "title", "achievements",
        "steamAchievements", "steamPlayerAchievements", "mergedAchievements",
        "schemaStatus", "hasSteamAchievements", "playerDataStatus", "achievementAvailability"
    ]) {

        assert.ok(field in result, `expected the response to include "${field}"`);

    }

    assert.strictEqual(result.mergedAchievements.playerDataAvailable, true);
    assert.ok(Array.isArray(result.mergedAchievements.achievements));

});
