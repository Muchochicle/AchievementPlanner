import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/it-takes-two.js";

test("the It Takes Two guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "it-takes-two-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "it-takes-two");

});

test("the It Takes Two guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Chapter Achievements",
            "Garden, Workshop & Tree Chapters",
            "Later Chapters & Endgame",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official It Takes Two achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "It Took Two", "Minigame Megalomania", "Fried Friendship", "Struck A Pose", "Plastic Prison Breakers",
        "Faraway Frequencies", "Look At Him Go", "Break the Bank", "A Daring Devil", "Snackosaurus",
        "Realize Your Art", "On Rails Experience", "Platforming Prodigy", "Force Triangulated", "Lost And Found",
        "Mood Swing", "Something Fishy", "Terror Of The Seven Seas", "Bug Sized Relaxation", "Meditation Maestro",
    ];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
