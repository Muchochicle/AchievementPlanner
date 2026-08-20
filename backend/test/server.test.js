import { test } from "node:test";
import assert from "node:assert";
import { execFileSync, spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// server.js's startup validation (and the process.exit(1)/app.listen()
// side effects around it) cannot be unit-tested by importing it directly
// - doing so would either crash the test runner (process.exit) or bind a
// real port as an uncontrolled side effect of module import. Instead this
// runs the real, unmodified server.js as a child process (exactly what
// `npm start` does) and observes its exit code/output - a true black-box
// test of the actual startup behavior, with zero production-code changes.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

function runServerOnce(envOverrides) {

    try {

        const stdout = execFileSync("node", [SERVER_PATH], {
            cwd: BACKEND_DIR,
            env: { ...process.env, ...envOverrides },
            timeout: 5000,
            encoding: "utf-8"
        });

        return { status: 0, stdout, stderr: "" };

    } catch (error) {

        return {
            status: error.status,
            stdout: error.stdout?.toString() ?? "",
            stderr: error.stderr?.toString() ?? ""
        };

    }

}

test("exits with status 1 and a clear message when SESSION_SECRET is missing", () => {

    const result = runServerOnce({ SESSION_SECRET: "" });

    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /Missing required environment variable\(s\).*SESSION_SECRET/);
    assert.match(result.stderr, /\.env\.example/);

});

test("exits with status 1 and lists every missing variable by name", () => {

    const result = runServerOnce({ STEAM_API_KEY: "", SESSION_SECRET: "" });

    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /STEAM_API_KEY/);
    assert.match(result.stderr, /SESSION_SECRET/);

});

test("treats a whitespace-only value the same as missing", () => {

    const result = runServerOnce({ SESSION_SECRET: "   " });

    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /SESSION_SECRET/);

});

test("exits with status 1 and a clear message when SESSION_SECRET is present but too short", () => {

    const result = runServerOnce({ SESSION_SECRET: "short-secret" });

    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /SESSION_SECRET is too short/);
    assert.match(result.stderr, /at least 32 characters/);

});

test("accepts a SESSION_SECRET exactly at the 32-character minimum", async () => {

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: { ...process.env, PORT: "0", SESSION_SECRET: "a".repeat(32) },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";

    await new Promise((resolve, reject) => {

        const timeout = setTimeout(resolve, 2000);

        child.stdout.on("data", chunk => {

            stdout += chunk;

            if (stdout.includes("Server running on port")) {

                clearTimeout(timeout);
                resolve();

            }

        });

        child.on("error", reject);
        child.on("exit", code => {

            if (code !== null && code !== 0) {

                clearTimeout(timeout);
                reject(new Error(`server exited early with code ${code}`));

            }

        });

    });

    child.kill();

    assert.match(stdout, /Server running on port/, "exactly 32 characters should be accepted, not rejected as still too short");

});

test("starts successfully and stays running when all required variables are present", async () => {

    // Relies on backend/.env already containing valid values locally
    // (as it must, for `npm start`/`npm run dev` to work at all).
    // PORT=0 asks the OS for an ephemeral free port so this can never
    // collide with a real server already running on port 3000.
    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: { ...process.env, PORT: "0" },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let exitedEarly = false;

    child.on("exit", () => { exitedEarly = true; });

    await new Promise((resolve, reject) => {

        const timeout = setTimeout(resolve, 2000);

        child.stdout.on("data", chunk => {

            stdout += chunk;

            if (stdout.includes("Server running on port")) {

                clearTimeout(timeout);
                resolve();

            }

        });

        child.on("error", reject);

    });

    child.kill();

    assert.match(stdout, /Server running on port/);
    assert.strictEqual(exitedEarly, false, "server should still have been running when killed, not exited on its own");

});
