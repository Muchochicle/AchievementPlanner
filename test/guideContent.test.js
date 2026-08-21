import { test } from "node:test";
import assert from "node:assert";

import { createGuideContent } from "../src/components/guide-content/guide-content.js";

function makeGuide(overrides = {}) {

    return {
        slug: "getting-started",
        category: "app",
        icon: "🚀",
        title: "Getting Started",
        summary: "Learn the basics.",
        sections: [
            { heading: "What It Does", body: ["Paragraph one.", "Paragraph two."] },
            { heading: "Logging In", body: ["Click the button."] }
        ],
        ...overrides
    };

}

test("createGuideContent renders exactly one h1 (the guide title) and one h2 per section", () => {

    const html = createGuideContent(makeGuide());

    assert.strictEqual((html.match(/<h1>/g) ?? []).length, 1);
    assert.match(html, /<h1>Getting Started<\/h1>/);

    assert.strictEqual((html.match(/<h2>/g) ?? []).length, 2);
    assert.match(html, /<h2>What It Does<\/h2>/);
    assert.match(html, /<h2>Logging In<\/h2>/);

});

test("createGuideContent renders every paragraph of every section", () => {

    const html = createGuideContent(makeGuide());

    assert.match(html, /<p>Paragraph one\.<\/p>/);
    assert.match(html, /<p>Paragraph two\.<\/p>/);
    assert.match(html, /<p>Click the button\.<\/p>/);

});

test("createGuideContent labels an App Guide vs. a Game Guide correctly", () => {

    const appHtml = createGuideContent(makeGuide({ category: "app" }));
    assert.match(appHtml, />App Guide</);

    const gameHtml = createGuideContent(makeGuide({ category: "game" }));
    assert.match(gameHtml, />Game Guide</);

});

test("createGuideContent renders no Related Guides section when there are no related guides", () => {

    const html = createGuideContent(makeGuide(), []);

    assert.doesNotMatch(html, /Related Guides/);

});

test("createGuideContent renders a Related Guides link for each resolved related guide", () => {

    const related = [
        { slug: "understanding-achievement-availability", icon: "🏆", title: "Understanding Achievement Availability" },
        { slug: "player-progress", icon: "⭐", title: "Player Progress" }
    ];

    const html = createGuideContent(makeGuide(), related);

    assert.match(html, /Related Guides/);
    assert.match(html, /href="guide\.html\?slug=understanding-achievement-availability"/);
    assert.match(html, /href="guide\.html\?slug=player-progress"/);
    assert.match(html, /Understanding Achievement Availability/);
    assert.match(html, /Player Progress/);

});

test("createGuideContent always renders a link back to the Guides index", () => {

    const html = createGuideContent(makeGuide());

    assert.match(html, /href="guides\.html"/);

});

test("createGuideContent escapes an HTML-injecting title, summary, section heading, and body paragraph", () => {

    const html = createGuideContent(makeGuide({
        title: `<script>alert(1)</script>`,
        summary: `x" onerror="alert(1)`,
        sections: [
            { heading: `<img src=x onerror=alert(1)>`, body: [`<b>bold</b> & "quoted"`] }
        ]
    }));

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
    assert.doesNotMatch(html, /<b>bold<\/b>/);

    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
    assert.match(html, /&lt;b&gt;bold&lt;\/b&gt; &amp; &quot;quoted&quot;/);

});
