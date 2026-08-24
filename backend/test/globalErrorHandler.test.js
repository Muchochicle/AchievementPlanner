import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Phase 51 / Finding 15 - before this phase, an error thrown by Express's
// own routing machinery (not inside any route handler's own try/catch) -
// e.g. a URIError from an invalid percent-escape in a :param segment - fell
// through to Express's built-in finalhandler, which returned the raw stack
// trace (including absolute filesystem paths) as HTML to the client. These
// tests spawn the real, unmodified server.js as a child process (matching
// this suite's established pattern - see apiGamesRoute.test.js,
// server.test.js) and prove that path is now closed, without touching any
// other route's existing behavior.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34731;

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

test("GET /api/games/%ff%fe (invalid percent-encoding, throws inside Express's own routing layer) returns a safe JSON error, not an HTML stack trace with file paths", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/%ff%fe`);

        assert.ok(res.status >= 400 && res.status < 600, `expected an error status, got ${res.status}`);

        const contentType = res.headers.get("content-type") ?? "";
        assert.match(contentType, /application\/json/, "must respond with JSON, not Express's default HTML error page");

        const body = await res.json();

        assert.strictEqual(body.success, false);
        assert.strictEqual(typeof body.message, "string");
        assert.doesNotMatch(body.message, /URIError/);
        assert.doesNotMatch(body.message, /at decodeURIComponent/);
        assert.doesNotMatch(body.message, /node_modules/, "must never leak an internal file path");
        assert.doesNotMatch(body.message, /[A-Za-z]:\\/, "must never leak an absolute Windows filesystem path");

    });

});

test("GET /nonexistent-route (matches no route at all) returns a JSON 404, not Express's default HTML 'Cannot GET' page", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/nonexistent-route`);

        assert.strictEqual(res.status, 404);

        const contentType = res.headers.get("content-type") ?? "";
        assert.match(contentType, /application\/json/);

        const body = await res.json();

        assert.strictEqual(body.success, false);
        assert.doesNotMatch(body.message ?? "", /Cannot GET/);

    });

});

test("GET /api/games (a normal, unaffected route) still returns its existing 200 JSON shape unchanged", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();

        assert.strictEqual(body.success, true);
        assert.ok(Array.isArray(body.games));

    });

});

test("GET /api/games/this-game-does-not-exist-anywhere (the application's own intentional 404, from inside the route handler) is untouched by the new catch-all", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/this-game-does-not-exist-anywhere`);

        assert.strictEqual(res.status, 404);

        const body = await res.json();

        assert.strictEqual(body.success, false);
        assert.match(body.message, /this-game-does-not-exist-anywhere/, "the route's own descriptive 404 message must still be returned, not the generic catch-all one");

    });

});
