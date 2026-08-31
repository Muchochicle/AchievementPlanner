import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shapez.js";

test("the shapez guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shapez-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shapez");

});

test("the shapez guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Basics & Mechanics",
            "Throughput & Efficiency",
            "Milestones & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official shapez achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Painter", "Cutter", "Rotater", "Wait, they stack?", "Now it's easy", "Wires", "Storage", "Freedom", "Computer Guy", "The logo!", "To the moon", "It's piling up", "I'll use it later", "Speedrun Master", "Speedrun Novice", "Not an idle game", "Efficiency 1", "Efficiency 2", "Branding specialist 1", "Branding specialist 2", "Preparing to launch", "SpaceY", "Stack overflow", "It's a mess", "I need trains", "My eyes no longer hurt", "King of Inefficiency", "It's so slow", "Faster", "Even faster", "Oops", "MAM (Make Anything Machine)", "Perfectionist", "Copy-Pasta", "Get rid of them", "It's been a long time", "Addicted", "A bit early?", "Can't stop", "Is this the end?", "Getting into it", "The next dimension", "GPS", "I've seen that before ..", "Memories from the past"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
