import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
