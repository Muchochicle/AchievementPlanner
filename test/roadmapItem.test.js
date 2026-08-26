import { test } from "node:test";
import assert from "node:assert";

import { createRoadmapItem } from "../src/components/roadmap-item/roadmap-item.js";

test("createRoadmapItem renders the title and body as plain text", () => {

    const html = createRoadmapItem({
        status: "planned",
        title: "More games",
        body: "Growing the catalog."
    });

    assert.match(html, />More games</);
    assert.match(html, />Growing the catalog\.</);

});

test("createRoadmapItem labels each known status correctly", () => {

    for (const [status, label] of [["planned", "Planned"], ["considering", "Considering"], ["shipped", "Shipped"]]) {

        const html = createRoadmapItem({ status, title: "X", body: "Y" });

        assert.match(html, new RegExp(`>${label}<`));

    }

});

test("createRoadmapItem falls back to 'Planned' for an unrecognized status rather than rendering a blank label", () => {

    const html = createRoadmapItem({ status: "unknown-status", title: "X", body: "Y" });

    assert.match(html, />Planned</);

});

test("createRoadmapItem applies a status-specific modifier class matching the item's own status", () => {

    const html = createRoadmapItem({ status: "shipped", title: "X", body: "Y" });

    assert.match(html, /class="roadmap-item roadmap-item--shipped"/);

});

test("createRoadmapItem escapes an HTML-injecting title and body", () => {

    const html = createRoadmapItem({
        status: "planned",
        title: `<script>alert(1)</script>`,
        body: `x" onerror="alert(1)`
    });

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.doesNotMatch(html, /onerror="alert\(1\)"/);

});
