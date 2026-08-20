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
        assert.deepStrictEqual(slugs, ["hades", "hollow-knight", "portal-2"]);

        for (const game of body.games) {

            assert.strictEqual(game.hasPlanner, true);
            assert.strictEqual(typeof game.slug, "string");
            assert.strictEqual(typeof game.title, "string");
            assert.ok(Array.isArray(game.genres));

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
