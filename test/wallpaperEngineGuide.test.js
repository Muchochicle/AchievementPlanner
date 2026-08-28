import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wallpaper-engine.js";

test("the Wallpaper Engine guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wallpaper-engine-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wallpaper-engine");

});

test("the Wallpaper Engine guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Creating & Publishing",
            "Using Workshop Wallpapers",
            "Favouriting Workshop Wallpapers",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official Wallpaper Engine achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "High aspirations", "Video makers", "The internet on a disk", "Press any key", "Creativity according to instructions",
        "Working with 3D models", "Sharing is caring", "Trying something new", "Keeping an eye on this one", "Pest",
        "k0n4m1", "Getting the hang of it", "Hard to pick just one", "Out of disk space", "Found some good ones",
        "Fair collection", "Wallpaper Connoisseur"
    ];

    assert.strictEqual(officialAchievementNames.length, 17, "sanity check on this test's own reference list");

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
