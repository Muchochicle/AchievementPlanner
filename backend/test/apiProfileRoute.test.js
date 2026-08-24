import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getProfileWithDeps } from "../routes/api.js";

// GET /api/profile (routes/api.js) is a distinct route from GET
// /api/profile/stats (profileStatsController.js, already covered by
// profileStatsController.test.js) - it's defined inline in routes/api.js
// rather than in a controller, and had zero test coverage before this
// file. Its unauthenticated-gate path (401 when there's no session user)
// returns before ever calling the Steam API, so it's safe to exercise
// against the real, unmodified server.js over real HTTP - no network
// calls, no mocking needed. Matches the spawn-the-real-server pattern used
// throughout this suite (see server.test.js, serverSecurity.test.js,
// apiMe.test.js).
//
// Its authenticated success path (Finding 16, PHASE_53_AUDIT.md - games
// must now come back mapped through mapSteamGameSafe, not raw Steam data)
// is instead verified below via getProfileWithDeps with fake Steam deps -
// no live network call, mirroring profileStatsController.test.js's own
// getProfileStatsWithDeps convention and its documented reasoning for why
// the real Express handler (getProfile) never accepts a 3rd (deps) param.

function createMockRes() {

    return {

        statusCode: null,
        jsonBody: null,

        status(code) {
            this.statusCode = code;
            return this;
        },

        json(body) {
            this.jsonBody = body;
            return this;
        }

    };

}

function fakeReq(steamId) {

    return {
        session: { user: steamId ? { steamid: steamId } : undefined }
    };

}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34611;

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

test("GET /api/profile returns 401 with a safe message when there is no session", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/profile`);

        assert.strictEqual(res.status, 401);

        const body = await res.json();
        assert.deepStrictEqual(body, { success: false, message: "Not logged in" });

    });

});

test("GET /api/profile returns 401 for a fabricated/garbage session cookie, not an error", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/profile`, {
            headers: { Cookie: "connect.sid=s%3Anot-a-real-session-id.invalidsignature" }
        });

        assert.strictEqual(res.status, 401);

        const body = await res.json();
        assert.strictEqual(body.success, false);

    });

});

test("GET /api/profile (authenticated) returns games mapped through mapSteamGameSafe, not raw Steam data", async () => {

    const res = createMockRes();

    await getProfileWithDeps(fakeReq("76561198000000000"), res, {

        getPlayerSummary: async () => ({ steamid: "76561198000000000", personaname: "Tester" }),

        getOwnedGames: async () => ({

            game_count: 1,

            games: [{ appid: 1145360, name: "Hades", img_icon_url: "abc123", playtime_forever: 120 }]

        })

    });

    assert.strictEqual(res.statusCode, null, "should not set an error status on success");
    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.gameCount, 1, "gameCount must still reflect Steam's raw game_count, unaffected by the mapping fix");

    const [game] = res.jsonBody.games;

    // Raw Steam shape (name/img_icon_url/playtime_forever) must be gone -
    // mapSteamGameSafe's shape (slug/title/owned/hasPlanner/...) is what
    // every other game-returning endpoint already returns.
    assert.strictEqual("name" in game, false, "raw Steam `name` field must not leak through unmapped");
    assert.strictEqual("img_icon_url" in game, false, "raw Steam `img_icon_url` field must not leak through unmapped");

    assert.strictEqual(game.appid, 1145360);
    assert.strictEqual(game.slug, "hades", "Hades is a curated catalog game - its stable catalog slug must win over a name-derived one");
    assert.strictEqual(game.title, "Hades");
    assert.strictEqual(game.owned, true);
    assert.strictEqual(game.playtime, 2, "playtime_forever (minutes) must be converted to playtime (hours) by the mapper, same as every other endpoint");

});

test("GET /api/profile (authenticated) silently drops a game that fails to map, instead of crashing the whole response", async () => {

    const res = createMockRes();

    await getProfileWithDeps(fakeReq("76561198000000000"), res, {

        getPlayerSummary: async () => ({ steamid: "76561198000000000", personaname: "Tester" }),

        getOwnedGames: async () => ({

            game_count: 2,

            // A malformed entry (null) makes mapSteamGame throw internally -
            // mapSteamGameSafe catches it and returns null, which
            // .filter(Boolean) must then drop, exactly like every other
            // mapSteamGameSafe consumer (buildGamesList, getGameDetail).
            games: [

                { appid: 400, name: "Portal", img_icon_url: "x", playtime_forever: 60 },

                null

            ]

        })

    });

    assert.strictEqual(res.jsonBody.success, true, "one malformed game must not fail the whole request");
    assert.strictEqual(res.jsonBody.games.length, 1, "the malformed entry must be dropped, not included as null/undefined");
    assert.strictEqual(res.jsonBody.games[0].appid, 400);

    // gameCount intentionally still reflects Steam's raw, pre-mapping count
    // (2) - it's a distinct field describing the real Steam library size,
    // not the count of successfully-mapped games.
    assert.strictEqual(res.jsonBody.gameCount, 2);

});

test("GET /api/profile (authenticated, empty library) returns an empty mapped games array, not a crash", async () => {

    const res = createMockRes();

    await getProfileWithDeps(fakeReq("76561198000000000"), res, {

        getPlayerSummary: async () => ({ steamid: "76561198000000000", personaname: "Tester" }),

        getOwnedGames: async () => ({ game_count: 0, games: [] })

    });

    assert.strictEqual(res.jsonBody.success, true);
    assert.deepStrictEqual(res.jsonBody.games, []);
    assert.strictEqual(res.jsonBody.gameCount, 0);

});
