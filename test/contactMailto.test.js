import { test } from "node:test";
import assert from "node:assert";

const { SUPPORT_EMAIL, buildContactMailtoUrl } = await import("../src/utils/contact/contactMailto.js");

// Regression guard: this project shipped an invented, non-existent address
// ("support@achievementplanner.app") in an earlier version - this pins the
// real one so a future edit can't silently reintroduce a fake address.
test("SUPPORT_EMAIL is the real, confirmed support address", () => {

    assert.strictEqual(SUPPORT_EMAIL, "supportachievementplanner@gmail.com");

});

test("buildContactMailtoUrl targets SUPPORT_EMAIL", () => {

    const url = buildContactMailtoUrl({ reason: "Bug report", message: "It broke" });

    assert.ok(url.startsWith(`mailto:${SUPPORT_EMAIL}?`));

});

test("buildContactMailtoUrl includes the reason in the subject and the message in the body", () => {

    const url = buildContactMailtoUrl({ reason: "Bug report", message: "It broke" });

    assert.match(url, /subject=AchievementPlanner(%20|\+|-)/);
    assert.match(decodeURIComponent(url), /subject=AchievementPlanner - Bug report/);
    assert.match(decodeURIComponent(url), /body=It broke/);

});

test("buildContactMailtoUrl percent-encodes characters that would otherwise corrupt the URL's query string", () => {

    const url = buildContactMailtoUrl({
        reason: "Other",
        message: "line one & line two # line three?"
    });

    // A raw "&"/"#" in the body would truncate everything after it (or
    // merge into a bogus extra query param) once the browser/mail client
    // parses this as a URL - encodeURIComponent must have escaped them.
    assert.ok(url.includes("%26"), "'&' must be percent-encoded");
    assert.ok(url.includes("%23"), "'#' must be percent-encoded");

    // Splitting on the literal (unescaped) "body=" separator and decoding
    // just that segment must round-trip to the exact original message -
    // proof the "&"/"#" inside it never got mistaken for real URL syntax.
    assert.strictEqual(decodeURIComponent(url.split("body=")[1]), "line one & line two # line three?");

});

test("buildContactMailtoUrl handles an empty message without throwing or producing 'undefined'", () => {

    const url = buildContactMailtoUrl({ reason: "Suggestion / feedback", message: "" });

    assert.doesNotMatch(url, /undefined/);
    assert.ok(url.endsWith("body="));

});
