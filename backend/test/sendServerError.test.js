import { test } from "node:test";
import assert from "node:assert";
import { sendServerError } from "../utils/sendServerError.js";

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

test("sendServerError responds with a fixed, generic message - never error.message", () => {

    const res = createMockRes();
    const error = new Error("Cannot read properties of undefined (reading 'foo') at /internal/path/leaking-details.js:42");

    sendServerError(res, error, "test-context");

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);
    assert.strictEqual(typeof res.jsonBody.message, "string");
    assert.notStrictEqual(res.jsonBody.message, error.message);
    assert.doesNotMatch(res.jsonBody.message, /leaking-details|internal\/path/);

});

test("sendServerError's response body contains only success and message - nothing else from the error object", () => {

    const res = createMockRes();
    const error = new Error("boom");
    error.stack = "Error: boom\n    at someInternalFunction (/secret/path.js:1:1)";
    error.code = "SOME_INTERNAL_CODE";

    sendServerError(res, error, "test-context");

    assert.deepStrictEqual(Object.keys(res.jsonBody).sort(), ["message", "success"]);

});

test("sendServerError logs the real error server-side so it isn't silently lost", () => {

    const res = createMockRes();
    const error = new Error("the real, detailed error");

    const originalConsoleError = console.error;
    const logged = [];
    console.error = (...args) => logged.push(args);

    try {

        sendServerError(res, error, "GET /api/example");

    } finally {

        console.error = originalConsoleError;

    }

    assert.strictEqual(logged.length, 1);
    assert.match(logged[0][0], /GET \/api\/example/);
    assert.strictEqual(logged[0][1], error);

});

test("sendServerError always returns the same message across different errors and contexts (predictable, non-leaking)", () => {

    const resA = createMockRes();
    const resB = createMockRes();

    sendServerError(resA, new Error("first distinct error"), "context-a");
    sendServerError(resB, new TypeError("a completely different error"), "context-b");

    assert.strictEqual(resA.jsonBody.message, resB.jsonBody.message);

});
