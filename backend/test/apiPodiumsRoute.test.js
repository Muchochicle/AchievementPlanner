import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import os from "os";
import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "node:url";

// GET /api/podiums/game/:appid and GET /api/podiums/global/:category
// (routes/podiums.js) already have thorough controller-level coverage
// (podiumController.test.js, 10 tests against a real temp SQLite DB via
// direct function calls) and leaderboardStore.js has even deeper coverage
// of the ranking/ties/category logic itself. What neither covers: the
// actual HTTP route mounting, Express param parsing, and the global
// middleware chain (CORS, Cache-Control, session cookie parsing) applied
// to these two specific routes - the same gap already closed for other
// routes (see apiGamesRoute.test.js, apiMe.test.js, apiProfileRoute.test.js).
// Spawns the real, unmodified server.js as a child process, matching this
// suite's established pattern, pointed at a fresh temp SQLite file via
// DATABASE_PATH so this never touches a real (e.g. local dev) database.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34671;

function startServer(envOverrides = {}) {

    const port = nextPort++;

    const dbPath = path.join(
        os.tmpdir(),
        `achievementplanner-podiums-route-test-${crypto.randomUUID()}`,
        "test.db"
    );

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: {
            ...process.env,
            PORT: String(port),
            CORS_ORIGIN: "http://127.0.0.1:5500",
            FRONTEND_URL: "http://127.0.0.1:5500",
            COOKIE_SECURE: "false",
            DATABASE_PATH: dbPath,
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

    return { child, port, baseUrl: `http://127.0.0.1:${port}`, dbPath, ready };

}

function waitForExit(child) {

    return new Promise(resolve => {

        if (child.exitCode !== null || child.signalCode !== null) {

            resolve();
            return;

        }

        child.once("exit", resolve);

    });

}

async function withServer(envOverrides, fn) {

    const server = startServer(envOverrides);

    try {

        await server.ready;
        await fn(server);

    } finally {

        server.child.kill();

        // Windows holds the SQLite file open briefly after the process is
        // signaled to exit - waiting for the actual "exit" event (not just
        // issuing kill()) avoids an EPERM race when removing the temp
        // directory right after. maxRetries/retryDelay is extra insurance
        // for the same class of transient Windows file-lock delay.
        await waitForExit(server.child);

        fs.rmSync(path.dirname(server.dbPath), { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });

    }

}

test("GET /api/podiums/global/:category returns 400 for an unrecognized category, via the real route", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/podiums/global/not-a-real-category`);

        assert.strictEqual(res.status, 400);

        const body = await res.json();
        assert.strictEqual(body.success, false);
        assert.match(body.message, /Unknown leaderboard category/);

    });

});

test("GET /api/podiums/global/:category returns an honest empty result (not an error) for a fresh, unpopulated database", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/podiums/global/games-owned`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.success, true);
        assert.strictEqual(body.category, "games-owned");
        assert.deepStrictEqual(body.top10, []);
        assert.strictEqual(body.me, null);
        assert.strictEqual(body.totalRanked, 0);
        assert.strictEqual(body.loggedIn, false);

    });

});

test("GET /api/podiums/game/:appid returns 400 for a non-positive/non-integer appid, via the real route", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const nonInteger = await fetch(`${baseUrl}/api/podiums/game/abc`);
        assert.strictEqual(nonInteger.status, 400);

        const negative = await fetch(`${baseUrl}/api/podiums/game/-5`);
        assert.strictEqual(negative.status, 400);

        const zero = await fetch(`${baseUrl}/api/podiums/game/0`);
        assert.strictEqual(zero.status, 400);

    });

});

test("GET /api/podiums/game/:appid echoes the requested appid and returns an honest empty result for an unranked game", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/podiums/game/1145360`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.appid, 1145360);
        assert.deepStrictEqual(body.top10, []);
        assert.strictEqual(body.totalRanked, 0);

    });

});

test("both podium routes carry Cache-Control: no-store, matching every other route", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const globalRes = await fetch(`${baseUrl}/api/podiums/global/games-owned`);
        assert.strictEqual(globalRes.headers.get("cache-control"), "no-store");

        const gameRes = await fetch(`${baseUrl}/api/podiums/game/620`);
        assert.strictEqual(gameRes.headers.get("cache-control"), "no-store");

    });

});

test("a garbage/invalid session cookie degrades to an anonymous (loggedIn:false) response, not an error", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/podiums/global/games-owned`, {
            headers: { Cookie: "connect.sid=s%3Anot-a-real-session-id.invalidsignature" }
        });

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.loggedIn, false);
        assert.strictEqual(body.me, null);

    });

});
