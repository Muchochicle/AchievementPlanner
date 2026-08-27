import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-hat-in-time.js";

test("the A Hat in Time guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-hat-in-time-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-hat-in-time");

});

test("the A Hat in Time guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Clearing Every Chapter",
            "One-Off World Interactions",
            "Chapter-Specific Challenge Runs",
            "Death Wish",
            "Workshop & Online Party",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official A Hat in Time achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/a-hat-in-time.json).
    const officialAchievementNames = [
        "Put a Badge On It", "Sequence Break", "No Time To Explain", "Fan-tastic!", "One Punch",
        "If I fit, I sit", "360 no-feet", "Mafia Town - All clear!", "Subcon Forest - All clear!", "Battle of the Birds - All clear!",
        "Alpine Skyline - All clear!", "Secret Intruder", "True Detective", "False Detective", "Vacuum Vandal",
        "Afraid of Water", "Slip 'n Slide", "The Floor is Lava", "Encore!", "Take a Hike",
        "Pillow Fort", "Badge Master", "A Series of Unfortunate Accidents", "Personally I Prefer the Air", "Return Home",
        "Fueling the Feud", "Let there be light", "Why", "Unlimited Possibilities", "Community Contributor",
        "The Community Thanks You", "Prepare to Die", "Punished Kid", "I Refuse To Die!", "Minimum Shippable",
        "The Arctic Cruise - All clear!", "Little Help From My Friends", "A Work of Art", "Stickin' Star", "Stick It To The Man",
        "Culinary Creativity", "Nyakuza Metro - All clear!", "Life of the Party", "Party Planner", "Party Animal",
        "Challenge Road"
    ];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
