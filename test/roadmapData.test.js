import { test } from "node:test";
import assert from "node:assert";

import { ROADMAP_ITEMS, SHIPPED_HIGHLIGHTS } from "../src/data/roadmap.js";

test("ROADMAP_ITEMS is non-empty and every item has a valid status/title/body", () => {

    assert.ok(ROADMAP_ITEMS.length > 0);

    for (const item of ROADMAP_ITEMS) {

        assert.ok(["planned", "considering"].includes(item.status), `unexpected status "${item.status}" - ROADMAP_ITEMS should only ever be planned/considering, not shipped`);
        assert.ok(item.title && item.title.length > 0);
        assert.ok(item.body && item.body.length > 0);

    }

});

test("SHIPPED_HIGHLIGHTS is non-empty and every item has a title/body (status is applied by roadmap.js, not stored here)", () => {

    assert.ok(SHIPPED_HIGHLIGHTS.length > 0);

    for (const item of SHIPPED_HIGHLIGHTS) {

        assert.ok(item.title && item.title.length > 0);
        assert.ok(item.body && item.body.length > 0);
        assert.strictEqual(item.status, undefined, "SHIPPED_HIGHLIGHTS items should not carry their own status - roadmap.js applies 'shipped' when rendering");

    }

});
