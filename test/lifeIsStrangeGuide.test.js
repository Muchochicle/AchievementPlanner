import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/life-is-strange.js";

test("the Life is Strange guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "life-is-strange-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "life-is-strange");

});

test("the Life is Strange guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: Chrysalis & Out of Time",
            "Episodes 3-4: Chaos Theory & Dark Room",
            "Episode 5: Polarized",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Life is Strange achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Chrysalis", "Macro Eyes", "Wide Angles", "Telephotogenic", "Close-Ups", "Red Eye", "Focused", "Zoomed In", "Focal Pointed", "Maximum Aperture", "Light Leak", "Visionary", "Out of Time", "Field Of View", "Full Exposure", "Processor", "Image Stabilizer", "Compressed", "Pixelated", "Dynamic Range", "Colorized", "Meter Made", "Resolution Revolution", "Lab Master", "Chaos Theory", "Parallax View", "Lenscrafted", "The Reflex", "Histogrammar", "Bokeh", "Pinholed", "RAW Strength", "Viewfinder", "Optican", "Flash!", "Camera Eye", "Dark Room", "Ambient", "Time-Lapsed", "Balance", "Rangefinder", "Gamma Value", "Dioptric Power", "Fisheye", "Manually Exposed", "Slideshow", "Tripod", "Shutterbug", "Polarized", "Incandescent", "Night Vision", "Framed", "Camera Obscura", "Blowup", "Iris", "Sensor", "On Display", "Light Meter", "Silhouettes", "Selfie Awareness"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
