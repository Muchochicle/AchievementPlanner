import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/satisfactory.js";

test("the Satisfactory guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "satisfactory-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "satisfactory");

});

test("the Satisfactory guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Space Elevator Progression",
            "Building Milestones",
            "Collectibles",
            "Exploration & Novelty",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Satisfactory achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/satisfactory.json).
    const officialAchievementNames = [
        "A Concrete Example", "Commencing Project Assembly", "Bigger. Better. FICSIT.", "...Satisfactory brought it back", "Curiosity killed the cat...",
        "Mediocre pioneering", "Adequate pioneering", "Pretty good pioneering", "Efficient pioneering", "Saved the Day, probably",
        "Do you want a medal?", "Are you sure that's coffee?", "No refunds", "The floor is lava", "New fear unlocked",
        "Caught them all", "Data driven", "Wheeeee!", "Establish dominance", "Spaghetti master",
        "Pipe dream", "Railroad tycoon", "Thank you for the music", "Look both ways next time", "Wait, you can pet it?",
        "Varied diet", "I'm sure these play a Critical Role", "Oddly familiar", "Consume", "My skin feels itchy all of a sudden...",
        "Rock and stone!", "Now where to spend it...", "Do you need that?", "Peak gameplay", "All aboard!",
        "That was a close one", "Pioneer's best friend", "Too fast, Too factory", "Master Chef", "Yoink!",
        "What a thrill", "Efficiency first", "Heal this, nature!", "Let's see what's out there"
    ];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
