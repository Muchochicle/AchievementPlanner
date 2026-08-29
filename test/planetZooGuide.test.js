import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/planet-zoo.js";

test("the Planet Zoo guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "planet-zoo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "planet-zoo");

});

test("the Planet Zoo guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Mode",
            "Franchise & Zoo Building",
            "Animals & Breeding",
            "Welfare, Research & Conservation",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Planet Zoo achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Welcome to Planet Zoo", "Bronze Award", "Silver Award", "Gold Award", "Career Complete",
        "Silver Career", "Gold Career", "Franchise Zoo", "Global Zoo", "Tour Guide",
        "Barrier Builder", "Life finds a way ", "Baby Boom", "Ghost", "Say Goodbye",
        "Welcome to the Family", "Trainer", "Zoologist", "Planet Zoo", "Diversity",
        "Nerd", "Loaner", "Community", "Enriched", "This one’s a Keeper",
        "Circle of Life", "Oh My!", "The Elephant in the Room", "Natural Selection", "Redecorating",
        "Animal Research", "Wow, that's a lot!", "Rebuilding", "A superstar comes along", "An Elephant Never Forgets",
        "Hard - Career Complete", "Hard - Silver Career", "Hard - Gold Career",
    ];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
