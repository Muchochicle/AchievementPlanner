import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-birds.js";

test("the Star Birds guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-birds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-birds");

});

test("the Star Birds guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign: Sectors 1-7",
            "Campaign: Sectors 3-14",
            "Free Play Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Star Birds achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sector 1 completed!", "Hatchling", "Space Falcon", "Sector 2 completed!", "Logistics", "Fledgling", "Sector 2.1 completed!", "Hummingbird", "Resident Bird", "Sector 3 completed!", "Ruthlessly Efficient", "Sector 3.1 completed!", "Sector 4 completed!", "Sector 5 completed!", "Overload", "Sector 5.1 completed!", "Sector 6 completed!", "Hard Melting", "Sector 7 completed!", "Finch", "Gold Finch", "Kingfisher", "Robin", "Crow", "Chickadee", "Wren", "Sector 8 completed!", "Fungi Friend", "Warbler", "Sector 9 completed!", "Green Alula", "Owl", "Sector 10 completed!", "Mostly Organic", "Duck", "Sector 11 completed!", "On the Shoulders of Dwarves", "Cuckoo", "Sector 12 completed!", "Cuckoo", "Sector 13 completed!", "Cuckoo", "Sector 14 completed!", "Cuckoo", "Cold Comfort", "Bloom Boom", "Scorching Star", "Sunny Side Up", "Atomic Habits", "Earthly Delights", "Things Are Looking Up", "Ice Breaker", "Branching Out", "Sprout Scout", "Crater Caterer", "Leg Day", "Prime Slime", "Melting and Molting", "Rare Finds"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
