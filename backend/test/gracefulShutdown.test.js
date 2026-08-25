import { test } from "node:test";
import assert from "node:assert";
import { EventEmitter } from "node:events";

import { registerGracefulShutdown } from "../utils/gracefulShutdown.js";

// Phase 70 - server.js previously had no SIGTERM/SIGINT handling at all,
// so Node's own default behavior (terminate immediately, dropping any
// in-flight request) applied on every normal stop/restart from a process
// manager. These tests exercise the real registerGracefulShutdown()
// function against a fake EventEmitter-like target (real Node
// EventEmitter + a stubbed .exit()) and a fake httpServer (a stubbed
// .close(callback)), matching processErrorHandlers.test.js's own
// established pattern - actually sending a real signal or closing a real
// server would exit/hang the test runner itself.

function makeFakeProcess() {

    const target = new EventEmitter();

    target.exitCalls = [];
    target.exit = code => { target.exitCalls.push(code); };

    return target;

}

function makeFakeLogger() {

    const logCalls = [];
    const errorCalls = [];

    return {
        logCalls,
        errorCalls,
        log: (...args) => { logCalls.push(args); },
        error: (...args) => { errorCalls.push(args); }
    };

}

function makeFakeHttpServer(closeError = null) {

    const server = new EventEmitter();

    server.closeCalls = 0;

    server.close = callback => {

        server.closeCalls++;

        // Real net.Server.close() is asynchronous (it waits for
        // in-flight connections to finish before invoking the callback) -
        // queued as a microtask here so tests can observe the "shutdown
        // requested but not yet complete" state in between, the same way
        // a real slow-draining server would behave.
        Promise.resolve().then(() => callback(closeError));

    };

    return server;

}

test("registerGracefulShutdown closes the server and exits(0) on SIGTERM", async () => {

    const httpServer = makeFakeHttpServer();
    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerGracefulShutdown(httpServer, target, logger);

    target.emit("SIGTERM");

    assert.strictEqual(httpServer.closeCalls, 1);

    await new Promise(resolve => setImmediate(resolve));

    assert.deepStrictEqual(target.exitCalls, [0], "a clean close must exit(0), not a non-zero/failure code");
    assert.ok(logger.logCalls.some(args => /SIGTERM/.test(args[0])), "expected a log line naming the received signal");

});

test("registerGracefulShutdown closes the server and exits(0) on SIGINT", async () => {

    const httpServer = makeFakeHttpServer();
    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerGracefulShutdown(httpServer, target, logger);

    target.emit("SIGINT");

    await new Promise(resolve => setImmediate(resolve));

    assert.strictEqual(httpServer.closeCalls, 1);
    assert.deepStrictEqual(target.exitCalls, [0]);

});

test("registerGracefulShutdown exits(1) instead of (0) when the server reports a close error", async () => {

    const closeError = new Error("close failed");
    const httpServer = makeFakeHttpServer(closeError);
    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerGracefulShutdown(httpServer, target, logger);

    target.emit("SIGTERM");

    await new Promise(resolve => setImmediate(resolve));

    assert.deepStrictEqual(target.exitCalls, [1]);
    assert.ok(logger.errorCalls.some(args => args[1] === closeError), "the real close error must be logged, not swallowed");

});

test("registerGracefulShutdown only closes the server once, even if a second signal arrives before shutdown finishes", async () => {

    const httpServer = makeFakeHttpServer();
    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerGracefulShutdown(httpServer, target, logger);

    // Both signals fire synchronously, before the fake server's own
    // microtask-queued close() callback has had a chance to run - the
    // exact "impatient double Ctrl+C" race this guard protects against.
    target.emit("SIGTERM");
    target.emit("SIGINT");

    assert.strictEqual(httpServer.closeCalls, 1, "a second signal while already draining must not call close() again");

    await new Promise(resolve => setImmediate(resolve));

    assert.deepStrictEqual(target.exitCalls, [0], "exit must still only be called once, from the one real close() completion");

});
