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

// Spawn the real server.js and resolve once it has printed its "Server
// running on port" readiness line, returning the still-running child (the
// caller kills it) and everything it wrote to stdout.
//
// Every spawn-based test below used to inline this with a `setTimeout(
// resolve, 15000)` fallback - which meant that when a freshly spawned
// `node` took longer than 15s just to parse server.js + its imports (seen
// on loaded CI runners under the full ~10k-test parallel suite - the flake
// that turned CI red on f67fba5 and again here), the promise resolved with
// stdout still empty and the test failed on a confusing `assert.match("",
// ...)` rather than a clear "server never became ready". This helper:
//   - waits for the OS to actually start the process (`spawn` event)
//     before starting the readiness clock, so we time server boot, not
//     process scheduling;
//   - uses a far more generous 60s bound - a healthy server resolves in
//     well under a second via the stdout match, so this never slows a
//     green run; it only bounds a genuinely hung process;
//   - rejects (never silently resolves) on timeout or an early exit, with
//     the captured output, so a real regression is an honest failure.
function startServerAndWaitForReady(envOverrides = {}, { readyTimeoutMs = 60000 } = {}) {

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: { ...process.env, PORT: "0", ...envOverrides },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", chunk => { stdout += chunk; });
    child.stderr.on("data", chunk => { stderr += chunk; });

    return new Promise((resolve, reject) => {

        let settled = false;
        let timer = null;

        const finish = fn => {

            if (settled) {

                return;

            }

            settled = true;

            if (timer) {

                clearTimeout(timer);

            }

            fn();

        };

        const checkReady = () => {

            if (stdout.includes("Server running on port")) {

                finish(() => resolve({ child, stdout }));

            }

        };

        child.once("spawn", () => {

            timer = setTimeout(() => {

                finish(() => reject(new Error(
                    `server did not print its readiness line within ${readyTimeoutMs}ms.\n` +
                    `stdout so far: ${JSON.stringify(stdout)}\n` +
                    `stderr so far: ${JSON.stringify(stderr)}`
                )));

            }, readyTimeoutMs);

            checkReady();
            child.stdout.on("data", checkReady);

        });

        child.once("error", error => finish(() => reject(error)));

        child.once("exit", code => {

            // A clean, ready server is killed by the caller, not exited on
            // its own - so any exit before we've seen the readiness line is
            // a failure to start.
            if (!stdout.includes("Server running on port")) {

                finish(() => reject(new Error(
                    `server exited early with code ${code} before becoming ready.\n` +
                    `stderr: ${JSON.stringify(stderr)}`
                )));

            }

        });

    });

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

    const { child, stdout } = await startServerAndWaitForReady({
        SESSION_SECRET: "a".repeat(32)
    });

    child.kill();

    assert.match(stdout, /Server running on port/, "exactly 32 characters should be accepted, not rejected as still too short");

});

test("binds to 0.0.0.0, not just localhost/IPv6-only, so container platforms like Railway can reach it", async () => {

    // Regression test for a real deploy failure: app.listen(PORT) with no
    // host argument can end up bound to the IPv6 "::" address only in some
    // container network stacks, leaving the process running but
    // unreachable from the platform's own edge proxy (which connects over
    // IPv4) - the process looks healthy in its own logs, but the deploy's
    // network/healthcheck step fails. Asserting on the explicit "(host
    // 0.0.0.0)" the startup log prints (server.js) is deterministic across
    // CI environments, unlike asserting on real interface reachability,
    // which depends on network interfaces that may not exist in a sandbox.
    const { child, stdout } = await startServerAndWaitForReady();

    child.kill();

    assert.match(stdout, /Server running on port 0 \(host 0\.0\.0\.0\)/);

});

test("starts successfully and stays running when all required variables are present", async () => {

    // Relies on backend/.env already containing valid values locally
    // (as it must, for `npm start`/`npm run dev` to work at all).
    // PORT=0 asks the OS for an ephemeral free port so this can never
    // collide with a real server already running on port 3000.
    const { child, stdout } = await startServerAndWaitForReady();

    // Still running under its own steam when we get here: the helper
    // rejects if the process exits before printing its readiness line, and
    // .exitCode is null for a process that hasn't exited yet.
    const stillRunning = child.exitCode === null && child.signalCode === null;

    child.kill();

    assert.match(stdout, /Server running on port/);
    assert.strictEqual(stillRunning, true, "server should still have been running when killed, not exited on its own");

});
