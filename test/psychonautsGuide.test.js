import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/psychonauts.js";

test("the Psychonauts guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "psychonauts-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "psychonauts");

});

test("the Psychonauts guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mind Worlds & Story Completion",
            "Ranks & Collectibles",
            "Secrets, Easter Eggs & Camp Life",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Psychonauts achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Your Last Chance to Chicken Out", "A Victory for Good Taste", "Rolling Rock Star", "For Insurance Reasons", "Time to Deliver the Milk", "You're All So Kind", "Thanks for All the Snails", "I Always Loved You More", "Height of Insanity", "I Thought That Was Unbeatable!", "Junior PSI Cadet", "Regular PSI Cadet", "Advanced PSI Cadet", "Super PSI Cadet", "Math is Hard", "Happy Bags", "No More Secrets", "Figgy Piggy", "They Should Totally Sell Those", "They Call Me the Hunter", "I'm Gonna Live Forever", "No Solid Food for Six Hours", "Look at those Pansies!", "I'm Sure She's Over It", "I Think They Were Impressed", "Self Aware", "Victory Tour", "Mmm… Bacon!", "I LOVE PUNCHING!", "Wolpaw Says Thanks", "Made Man", "Maybe It's the Hair", "Stump Speech", "Camp Gossip", "A Slice of History", "Christmas Shopping", "Holiday Dinner"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
