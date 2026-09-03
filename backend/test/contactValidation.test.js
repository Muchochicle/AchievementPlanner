import { test } from "node:test";
import assert from "node:assert";

import {
    isValidEmail,
    validateContactSubmission,
    MESSAGE_MAX,
    NAME_MAX,
    ALLOWED_REASONS
} from "../utils/contactValidation.js";

test("isValidEmail accepts ordinary addresses and rejects obvious typos", () => {

    for (const good of ["jordi@example.com", "a.b-c_d@sub.domain.co.uk", "  spaced@example.com  "]) {

        assert.strictEqual(isValidEmail(good), true, good);

    }

    for (const bad of ["jordi@", "@example.com", "jordigmail.com", "jordi@example", "jordi @example.com", "", null, undefined, 42]) {

        assert.strictEqual(isValidEmail(bad), false, JSON.stringify(bad));

    }

});

test("validateContactSubmission requires a non-empty message", () => {

    for (const raw of [{}, { message: "" }, { message: "   " }, { message: 123 }, null, "str", []]) {

        const result = validateContactSubmission(raw);

        assert.strictEqual(result.ok, false, JSON.stringify(raw));
        assert.match(result.message, /message is required/i);

    }

});

test("validateContactSubmission rejects an over-long message with a clear message", () => {

    const result = validateContactSubmission({ message: "x".repeat(MESSAGE_MAX + 1) });

    assert.strictEqual(result.ok, false);
    assert.match(result.message, /too long/i);

});

test("validateContactSubmission: no email provided is a valid submission (reply not possible)", () => {

    const result = validateContactSubmission({ message: "Found a bug", reason: "Bug report" });

    assert.strictEqual(result.ok, true);
    assert.strictEqual(result.value.replyEmail, null);
    assert.strictEqual(result.value.reason, "Bug report");
    assert.strictEqual(result.value.message, "Found a bug");

});

test("validateContactSubmission: a provided-but-malformed email is an error, never silently dropped", () => {

    const result = validateContactSubmission({ message: "hi", email: "not-an-email" });

    assert.strictEqual(result.ok, false);
    assert.match(result.message, /email/i);

});

test("validateContactSubmission: a valid email is trimmed and kept", () => {

    const result = validateContactSubmission({ message: "hi", email: "  me@example.com  " });

    assert.strictEqual(result.ok, true);
    assert.strictEqual(result.value.replyEmail, "me@example.com");

});

test("validateContactSubmission: unknown/empty reason normalizes to 'Other' rather than failing", () => {

    for (const reason of [undefined, "", "made up reason", "  "]) {

        const result = validateContactSubmission({ message: "hi", reason });

        assert.strictEqual(result.ok, true);
        assert.strictEqual(result.value.reason, "Other");

    }

    for (const reason of ALLOWED_REASONS) {

        const result = validateContactSubmission({ message: "hi", reason });

        assert.strictEqual(result.value.reason, reason);

    }

});

test("validateContactSubmission: name is optional and length-capped", () => {

    assert.strictEqual(validateContactSubmission({ message: "hi" }).value.name, null);
    assert.strictEqual(validateContactSubmission({ message: "hi", name: "  Jordi  " }).value.name, "Jordi");

    const tooLong = validateContactSubmission({ message: "hi", name: "n".repeat(NAME_MAX + 1) });
    assert.strictEqual(tooLong.ok, false);
    assert.match(tooLong.message, /name is too long/i);

});

test("validateContactSubmission: steamId and userAgent come from the caller, never the body", () => {

    const result = validateContactSubmission(
        { message: "hi", steamId: "SPOOFED", userAgent: "SPOOFED" },
        { steamId: "real-123", userAgent: "RealAgent/1.0" }
    );

    assert.strictEqual(result.value.steamId, "real-123");
    assert.strictEqual(result.value.userAgent, "RealAgent/1.0");

});
