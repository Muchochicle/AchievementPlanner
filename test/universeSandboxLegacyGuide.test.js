import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/universe-sandbox-legacy.js";

test("the Universe Sandbox (Legacy) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "universe-sandbox-legacy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "universe-sandbox-legacy");

});

test("the Universe Sandbox (Legacy) guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Startup & Playtime",
            "Tutorials, Codes & Physics",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Universe Sandbox (Legacy) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Startup the Universe", "Startup Deka", "Startup Hecto", "Startup Kilo", "Startup Too Many", "One Minute", "One Hour", "One Day", "One Month", "One Year", "The Code", "Learner", "Photographer", "Heat Wave", "Snowball Earth", "The Answer"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
