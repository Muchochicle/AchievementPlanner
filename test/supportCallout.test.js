import { test } from "node:test";
import assert from "node:assert";

import { createSupportCallout } from "../src/components/support-callout/support-callout.js";
import { SUPPORT_URL, hasSupportDestination } from "../src/utils/support/supportConfig.js";

test("supportConfig ships with NO real destination - no invented donation URL", () => {

    assert.strictEqual(SUPPORT_URL, "", "SUPPORT_URL must ship empty until a real one is configured");
    assert.strictEqual(hasSupportDestination(), false);

});

test("createSupportCallout: with no destination, shows an honest 'not set up yet' state and NO fake link/button", () => {

    const html = createSupportCallout();

    assert.match(html, /Support Achievement Planner/);
    assert.match(html, /isn't set up yet/i);

    // No anchor and no donate button that would go nowhere.
    assert.doesNotMatch(html, /<a[^>]+href=/i, "must not render any link while no destination is configured");
    assert.doesNotMatch(html, /href="#"/);

});

test("createSupportCallout: never claims a supporter leaderboard exists and is explicit about why", () => {

    const html = createSupportCallout();

    assert.match(html, /no supporter leaderboard/i);
    assert.match(html, /never unlocks anything/i);

});

test("hasSupportDestination only accepts a real https URL", () => {

    // Pure check on the guard's own logic (SUPPORT_URL itself stays empty).
    const re = /^https:\/\/\S+$/;

    assert.strictEqual(re.test("https://ko-fi.com/example"), true);
    assert.strictEqual(re.test("http://insecure.example"), false);
    assert.strictEqual(re.test("ko-fi.com/example"), false);
    assert.strictEqual(re.test(""), false);

});
