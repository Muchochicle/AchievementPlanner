import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/little-nightmares.js";

test("the Little Nightmares guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "little-nightmares-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "little-nightmares");

});

test("the Little Nightmares guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Five Chapters",
            "Hidden Secrets",
            "Speedrun & Extras",
            "Secrets of the Maw - The Depths",
            "Secrets of the Maw - The Hideaway",
            "Secrets of the Maw - The Residence",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Little Nightmares achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/little-nightmares.json). Note the leading
    // space on " We'll Meet Again" - copied verbatim from Steam's own
    // displayName for this achievement.
    const officialAchievementNames = [
        "Little Lost Things", "Kitchen Hand", "Highly Sprung", "Rascal", "Light Up Your Life",
        "The Prison", "The Lair", "The Kitchen", "The Guest Area", "The Lady's Quarters",
        "Elusive", "Six's Song", "Hard to the Core", "So Close", "Not Alone",
        "Fun & Games Ahead", "End in Sight", "Is Anybody Out There?", "Ashes in The Maw",
        " We'll Meet Again", "Ashes to Ashes", "I'm Losing You"
    ];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
