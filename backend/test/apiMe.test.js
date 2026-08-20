import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// GET /api/me (server.js) is the frontend's only way to ask "am I logged
// in", and had zero test coverage before this file - it's defined inline
// in server.js rather than in a controller, so it was never exercised by
// steamController.test.js's unit tests. Spawns the real, unmodified
// server.js as a child process (the same pattern used throughout this
// suite - see server.test.js and serverSecurity.test.js) and talks to it
// over real HTTP, since the point is to verify the actual response shape
// a browser would receive, not a reimplementation of the route.
//
// Only the logged-out path is covered here: reaching the logged-in path
// against the real server requires a real completed Steam login, which
// needs genuine network access to Steam (the same documented gap as
// steamController.test.js's callback() success path). The logged-in
// read of req.session.user is already covered indirectly by
// steamSessionRegeneration.test.js's own /me-shaped route, against a real
// express-session instance with the real login()/callbackWithDeps()
// handlers.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34591;

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

test("GET /api/me with no session cookie reports logged:false and omits the user field entirely", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/me`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();

        assert.deepStrictEqual(body, { logged: false }, "the unauthenticated response should contain nothing but logged:false - no user key at all");

    });

});

test("GET /api/me with a fabricated/garbage cookie still reports logged:false, not an error", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/me`, {
            headers: { Cookie: "connect.sid=s%3Anot-a-real-session-id.invalidsignature" }
        });

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.deepStrictEqual(body, { logged: false });

    });

});
