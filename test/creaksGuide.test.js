import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/creaks.js";

test("the Creaks guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "creaks-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "creaks");

});

test("the Creaks guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Interactive Paintings",
            "Secret Rooms & Story",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Creaks achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Art Collector", "Home Sweet Home", "Meadow Song", "The Knight", "Time for Tea", "Dancer", "Sunrise", "Good Boy", "Cat’s Back", "The Amazing Magician", "The Exceptional Singer", "Swimmers", "Art Lover", "Secret Room Discovered!", "The Blue Library", "Stalactites", "Scrolls", "Behind the Curtain", "The Egyptian", "Backstage", "Behind the Trophies", "Gazebo", "Old Bones", "Shed", "Hurry Up!", "Dark Corner", "In the Deep", "Through the Night"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
