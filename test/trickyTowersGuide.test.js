import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tricky-towers.js";

test("the Tricky Towers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tricky-towers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tricky-towers");

});

test("the Tricky Towers guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Trials & Unlocks",
            "Online & Endless Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Tricky Towers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ultimate Wizard", "Master wizard", "Perfect start", "Bare bones", "Speed. Precision.", "Like a glove…", "In the moonlight", "Survivor", "Think fast!", "99 Bricks!", "No need to rotate", "Green fingers", "Mode master", "Almost there", "On the right track", "Doing good", "Baby steps", "Match winner", "Brick stacker", "Trickster", "Architect", "Save some room", "Bigger than magic", "You stay there!", "All-round magician", "Close call", "Show off", "Shadow stacker", "Cup winner!"];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
