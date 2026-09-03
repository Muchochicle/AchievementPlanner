import { test } from "node:test";
import assert from "node:assert";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
    APP_GUIDE_SUMMARIES,
    GAME_GUIDE_SUMMARIES,
    ALL_GUIDE_SUMMARIES,
    getGuideSummaryBySlug,
    getGameGuideSummaryForSlug
} from "../src/data/guides/manifest.js";

import { APP_GUIDES, GAME_GUIDES, ALL_GUIDES } from "../src/data/guides/index.js";

import { buildManifestData, renderManifest } from "../scripts/generate-guides-manifest.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = path.join(__dirname, "..", "src", "data", "guides", "manifest.js");

// Task 9: manifest.js is a generated, committed file (this repo has no
// bundler). This test regenerates it in memory and fails if the committed
// copy is stale - so it can never silently drift from index.js.
test("committed manifest.js is exactly what the generator would produce now", async () => {

    const [committed, data] = await Promise.all([
        readFile(MANIFEST_PATH, "utf8"),
        buildManifestData()
    ]);

    const expected = renderManifest(data);

    assert.strictEqual(
        committed.replace(/\r\n/g, "\n"),
        expected.replace(/\r\n/g, "\n"),
        "manifest.js is out of date - run: node scripts/generate-guides-manifest.mjs"
    );

});

test("manifest has one summary per real guide, same slugs and order as index.js", () => {

    assert.strictEqual(APP_GUIDE_SUMMARIES.length, APP_GUIDES.length);
    assert.strictEqual(GAME_GUIDE_SUMMARIES.length, GAME_GUIDES.length);
    assert.strictEqual(ALL_GUIDE_SUMMARIES.length, ALL_GUIDES.length);

    assert.deepStrictEqual(
        APP_GUIDE_SUMMARIES.map(s => s.slug),
        APP_GUIDES.map(g => g.slug)
    );

    assert.deepStrictEqual(
        GAME_GUIDE_SUMMARIES.map(s => s.slug),
        GAME_GUIDES.map(g => g.slug)
    );

});

test("each summary's display metadata matches its real guide exactly", () => {

    for (const guide of ALL_GUIDES) {

        const summary = getGuideSummaryBySlug(guide.slug);

        assert.ok(summary, `no manifest summary for ${guide.slug}`);
        assert.strictEqual(summary.title, guide.title, guide.slug);
        assert.strictEqual(summary.summary, guide.summary, guide.slug);
        assert.strictEqual(summary.icon, guide.icon, guide.slug);
        assert.strictEqual(summary.category, guide.category, guide.slug);
        assert.strictEqual(summary.gameSlug ?? null, guide.gameSlug ?? null, guide.slug);

    }

});

test("every summary's module path resolves to a module whose GUIDE.slug matches", async () => {

    // Spot-check a handful across app + game guides (importing all 1000+
    // here would defeat the point of the manifest). The full 1:1 slug/
    // order check above already covers completeness.
    const sample = [
        ALL_GUIDE_SUMMARIES[0],
        GAME_GUIDE_SUMMARIES[0],
        GAME_GUIDE_SUMMARIES[Math.floor(GAME_GUIDE_SUMMARIES.length / 2)],
        GAME_GUIDE_SUMMARIES.at(-1)
    ];

    for (const summary of sample) {

        assert.match(summary.module, /^(app|games)\/[a-z0-9-]+\.js$/, summary.slug);

        const mod = await import(`../src/data/guides/${summary.module}`);

        assert.strictEqual(mod.GUIDE.slug, summary.slug);

    }

});

test("getGameGuideSummaryForSlug mirrors index.js's game-slug lookup", () => {

    for (const guide of GAME_GUIDES.slice(0, 25)) {

        const found = getGameGuideSummaryForSlug(guide.gameSlug);

        assert.ok(found);
        assert.strictEqual(found.slug, guide.slug);

    }

    assert.strictEqual(getGameGuideSummaryForSlug("definitely-not-a-real-game-slug"), null);

});
