import { test } from "node:test";
import assert from "node:assert";
import { EventEmitter } from "node:events";

import { registerProcessErrorHandlers } from "../utils/processErrorHandlers.js";

// Phase 62 (PHASE_62_AUDIT.md) - server.js previously had no
// process-level uncaughtException/unhandledRejection handlers at all, so
// Node's own default behavior (crash the whole process, silently or with
// only its own generic report) applied to any error outside a request's
// own promise chain. These tests exercise the real
// registerProcessErrorHandlers() function against a fake EventEmitter-like
// target (real Node EventEmitter + a stubbed .exit()) instead of the real
// global `process`, since actually calling process.exit() would exit the
// test runner itself.

function makeFakeProcess() {

    const target = new EventEmitter();

    target.exitCalls = [];
    target.exit = code => { target.exitCalls.push(code); };

    return target;

}

function makeFakeLogger() {

    const calls = [];

    return {
        calls,
        error: (...args) => { calls.push(args); }
    };

}

test("registerProcessErrorHandlers logs and exits(1) on an uncaughtException", () => {

    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerProcessErrorHandlers(target, logger);

    const boom = new Error("boom");

    target.emit("uncaughtException", boom);

    assert.strictEqual(logger.calls.length, 1);
    assert.match(logger.calls[0][0], /\[uncaughtException\]/);
    assert.strictEqual(logger.calls[0][1], boom, "the real error object must be logged, not swallowed or replaced");

    assert.deepStrictEqual(target.exitCalls, [1], "must exit with a non-zero code exactly once");

});

test("registerProcessErrorHandlers logs and exits(1) on an unhandledRejection", () => {

    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerProcessErrorHandlers(target, logger);

    const reason = new Error("rejected for no good reason");

    target.emit("unhandledRejection", reason);

    assert.strictEqual(logger.calls.length, 1);
    assert.match(logger.calls[0][0], /\[unhandledRejection\]/);
    assert.strictEqual(logger.calls[0][1], reason);

    assert.deepStrictEqual(target.exitCalls, [1]);

});

test("registerProcessErrorHandlers handles a non-Error rejection reason (e.g. a rejected string/plain value) without throwing", () => {

    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerProcessErrorHandlers(target, logger);

    // Promise.reject("just a string") is legal JS - the reason isn't
    // guaranteed to be an Error instance, and the handler must not assume
    // it has a .message/.stack.
    assert.doesNotThrow(() => target.emit("unhandledRejection", "just a string"));

    assert.strictEqual(logger.calls.length, 1);
    assert.strictEqual(logger.calls[0][1], "just a string");
    assert.deepStrictEqual(target.exitCalls, [1]);

});

test("the two handlers are independent - triggering one does not also fire the other's log message", () => {

    const target = makeFakeProcess();
    const logger = makeFakeLogger();

    registerProcessErrorHandlers(target, logger);

    target.emit("uncaughtException", new Error("sync boom"));

    assert.strictEqual(logger.calls.length, 1);
    assert.match(logger.calls[0][0], /\[uncaughtException\]/);
    assert.doesNotMatch(logger.calls[0][0], /\[unhandledRejection\]/);

});
