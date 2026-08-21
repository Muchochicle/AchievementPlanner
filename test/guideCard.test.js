import { test } from "node:test";
import assert from "node:assert";

import { createGuideCard } from "../src/components/guide-card/guide-card.js";

test("createGuideCard links to the guide's own detail page by slug", () => {

    const html = createGuideCard({
        slug: "getting-started",
        category: "app",
        icon: "🚀",
        title: "Getting Started",
        summary: "Learn the basics."
    });

    assert.match(html, /href="guide\.html\?slug=getting-started"/);

});

test("createGuideCard labels an App Guide correctly", () => {

    const html = createGuideCard({
        slug: "getting-started",
        category: "app",
        icon: "🚀",
        title: "Getting Started",
        summary: "Learn the basics."
    });

    assert.match(html, />App Guide</);
    assert.doesNotMatch(html, />Game Guide</);

});

test("createGuideCard labels a Game Guide correctly", () => {

    const html = createGuideCard({
        slug: "hades-achievements",
        category: "game",
        gameSlug: "hades",
        icon: "🗡️",
        title: "Hades Achievement Guide",
        summary: "How to 100% Hades."
    });

    assert.match(html, />Game Guide</);
    assert.doesNotMatch(html, />App Guide</);

});

test("createGuideCard escapes an HTML-injecting title and summary", () => {

    const html = createGuideCard({
        slug: "x",
        category: "app",
        icon: "🚀",
        title: `<script>alert(1)</script>`,
        summary: `x" onerror="alert(1)`
    });

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.doesNotMatch(html, /onerror="alert\(1\)"/);
    assert.match(html, /x&quot; onerror=&quot;alert\(1\)/);

});

test("createGuideCard still renders a normal guide's title and summary as plain text", () => {

    const html = createGuideCard({
        slug: "getting-started",
        category: "app",
        icon: "🚀",
        title: "Getting Started",
        summary: "Learn the basics."
    });

    assert.match(html, />Getting Started</);
    assert.match(html, />Learn the basics\.</);

});
