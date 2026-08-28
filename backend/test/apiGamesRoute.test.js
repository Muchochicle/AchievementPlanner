import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// GET /api/games (routes/games.js) is the actual HTTP contract the Games
// page's frontend (gameService.js's getGamesIndex()) depends on - it had
// only been verified manually (curl, during ad-hoc audits), never as an
// automated regression test. In particular, nothing previously proved
// end-to-end (through the real route, not just the underlying
// plannerCatalog.js functions already covered by
// backend/test/plannerCatalog.test.js) that the internal debug-game
// fixture never reaches this response. Spawns the real, unmodified
// server.js as a child process, matching this suite's established
// pattern (see server.test.js, serverSecurity.test.js, apiMe.test.js).

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34631;

function startServer(envOverrides = {}) {

    const port = nextPort++;

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: {
            ...process.env,
            PORT: String(port),
            CORS_ORIGIN: "http://127.0.0.1:5500",
            FRONTEND_URL: "http://127.0.0.1:5500",
            COOKIE_SECURE: "false",
            ...envOverrides
        },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });

    const ready = new Promise((resolve, reject) => {

        let stdout = "";
        const timeout = setTimeout(() => {
            reject(new Error(`server did not start in time.\nstdout: ${stdout}\nstderr: ${stderr}`));
        }, 5000);

        child.stdout.on("data", chunk => {

            stdout += chunk;

            if (stdout.includes("Server running on port")) {

                clearTimeout(timeout);
                resolve();

            }

        });

        child.on("error", reject);

        child.on("exit", code => {

            if (code !== null) {

                clearTimeout(timeout);
                reject(new Error(`server exited early with code ${code}.\nstderr: ${stderr}`));

            }

        });

    });

    return { child, port, baseUrl: `http://127.0.0.1:${port}`, ready };

}

async function withServer(envOverrides, fn) {

    const server = startServer(envOverrides);

    try {

        await server.ready;
        await fn(server);

    } finally {

        server.child.kill();

    }

}

test("GET /api/games never includes the internal debug-game fixture, for a logged-out (no session) request", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();

        assert.strictEqual(body.success, true);
        assert.ok(Array.isArray(body.games));

        const slugs = body.games.map(g => g.slug);

        assert.ok(!slugs.includes("debug-game"), "the internal sandbox fixture must never reach the real /api/games response");
        assert.ok(!body.games.some(g => g.title === "Developer Sandbox"), "the sandbox's title must never leak into the response either, under any slug");

    });

});

test("GET /api/games returns the real catalog games with hasPlanner:true and the expected count/games shape", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`);
        const body = await res.json();

        assert.strictEqual(body.count, body.games.length, "count must match the actual number of games returned");

        const slugs = body.games.map(g => g.slug).sort();
        assert.deepStrictEqual(slugs, ["a-hat-in-time", "a-little-to-the-left", "a-short-hike", "astral-ascent", "baba-is-you", "bastion", "braid", "celeste", "chained-echoes", "chicory", "crypt-of-the-necrodancer", "cult-of-the-lamb", "cuphead", "curse-of-the-dead-gods", "darkest-dungeon", "dave-the-diver", "dead-cells", "deaths-door", "disco-elysium", "dome-keeper", "dorfromantik", "dredge", "enter-the-gungeon", "frostpunk", "ftl", "furi", "griftlands", "guacamelee-2", "hades", "hollow-knight", "hyper-light-drifter", "inside", "into-the-breach", "limbo", "little-nightmares", "loop-hero", "mark-of-the-ninja", "moonlighter", "neon-abyss", "neon-white", "ori-and-the-blind-forest", "ori-and-the-will-of-the-wisps", "owlboy", "oxenfree", "papers-please", "pizza-tower", "portal", "portal-2", "pyre", "return-of-the-obra-dinn", "rime", "risk-of-rain-2", "rogue-legacy", "sable", "sifu", "slay-the-spire", "spelunky-2", "stardew-valley", "steamworld-dig-2", "streets-of-rogue", "superliminal", "the-forgotten-city", "the-messenger", "the-stanley-parable", "thomas-was-alone", "transistor", "va11-hall-a", "vampire-survivors", "void-bastards", "what-remains-of-edith-finch"]);

        for (const game of body.games) {

            assert.strictEqual(game.hasPlanner, true);
            assert.strictEqual(typeof game.slug, "string");
            assert.strictEqual(typeof game.title, "string");
            assert.ok(Array.isArray(game.genres));

            // attachAchievementAvailability (routes/games.js) only fetches
            // Steam's achievement schema for owned, planner-less games -
            // every catalog game here always has a curated planner, so none
            // of them should trigger that fan-out at all.
            assert.strictEqual("achievementAvailability" in game, false);

        }

    });

});

test("GET /api/games with a garbage/invalid session cookie still succeeds as a logged-out request, not an error", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`, {
            headers: { Cookie: "connect.sid=s%3Anot-a-real-session-id.invalidsignature" }
        });

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.success, true);
        assert.strictEqual(body.games.every(g => g.owned === false), true, "a request with no real session must never report any game as owned");

    });

});

// GET /api/games/:slug (Phase 45 - see PHASE_45_AUDIT.md) had no end-to-end
// HTTP coverage at all before this phase, despite being the single most
// complex route in the app and the exact place mergedAchievements.
// steamOnlyCount is computed and shipped - the field two real, user-facing
// bugs (Phases 42-43) were fixed around. The bulk of branch coverage for
// this route lives in gameDetail.test.js (unit-level, with injected
// synthetic Steam responses, so it needs no live network access at all);
// the tests below exist specifically to prove the real, fully-wired route -
// as an actual client would hit it - still produces the correct shape for
// the two branches that resolve *before* ever touching Steam, so they're
// exercisable with no live Steam call.
//
// Deliberately does NOT assert on a real catalog game's live-fetched
// achievement data (e.g. asserting Hades' steamOnlyCount is 0 via a real
// HTTP call) - this route's ISteamUserStats/GetSchemaForGame/v2 call
// requires a genuinely valid STEAM_API_KEY, which CI only ever provides a
// placeholder for (see .github/workflows/ci.yml's own comment: "No test in
// this suite ever makes a real Steam API call"). A test asserting exact
// merged-achievement counts here would silently depend on whether the
// environment running it happens to have a real Steam credential -
// passing locally, then failing (or worse, passing for the wrong reason:
// with no live schema data, every curated achievement becomes unmatched but
// steamOnlyCount still reads 0, since there's nothing on the Steam side to
// be "extra") in CI. That exact live-data verification is covered instead
// by manual browser verification against the real dev backend (see
// PHASE_45_AUDIT.md's verification section) and by gameDetail.test.js's
// steamOnlyCount tests, which use hades.json's own real curated apinames
// without needing a live network call.

test("GET /api/games/:slug returns a real 404 (not a crash or a 200 with empty data) for a slug matching no owned or catalog game", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/this-game-does-not-exist-anywhere`);

        assert.strictEqual(res.status, 404);

        const body = await res.json();
        assert.strictEqual(body.success, false);
        assert.match(body.message, /this-game-does-not-exist-anywhere/);

    });

});

test("GET /api/games/:slug 404s for slugs matching a JS Object.prototype member instead of returning a fake 200", async () => {

    // Phase 65: plannerCatalog.js's loadCatalog() used to cache entries in
    // a plain {} literal, so catalog[slug] resolved through the prototype
    // chain for a slug like "__proto__" or "constructor" - returning a
    // truthy value (Object.prototype itself, or the Object constructor
    // function) instead of undefined, which mapPlannerOnlyGame() then
    // treated as a real (if malformed) planner entry and returned as a
    // fake 200. Fixed by building the cache with Object.create(null).
    await withServer({}, async ({ baseUrl }) => {

        for (const slug of ["__proto__", "constructor", "toString", "hasOwnProperty"]) {

            const res = await fetch(`${baseUrl}/api/games/${slug}`);
            assert.strictEqual(res.status, 404, `GET /api/games/${slug} should 404, not resolve through the prototype chain`);

        }

    });

});

test("GET /api/games/debug-game never reaches the internal sandbox fixture either - it 404s the same as any other unknown slug", async () => {

    // Mirrors the existing "GET /api/games never includes the internal
    // debug-game fixture" test above, extended to the single-game route -
    // plannerCatalog.js's loadCatalog() already excludes any "internal":true
    // entry from every consumer (getPlannerData/getAllPlannerSlugs/
    // getPlannerDataByAppId), so mapPlannerOnlyGame("debug-game") must
    // resolve to null here too, not leak the sandbox fixture through this
    // route just because the other one is covered.
    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/debug-game`);

        assert.strictEqual(res.status, 404);

    });

});
