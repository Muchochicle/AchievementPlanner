import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pyre.js";

test("the Pyre guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pyre-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pyre");

});

test("the Pyre guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Reader & Gather the Band",
            "The Exiles' Damage Milestones",
            "Liberation Rites",
            "Progression & Collectibles",
            "Rite Challenges",
            "The Beyonder Crystal",
            "Exploration & the Overworld",
            "Versus Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Pyre achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/pyre.json).
    const officialAchievementNames = [
        "The Reader", "The Fast Talker", "The Free Spirit", "The Fallen Soldier", "The Faithful Drifter",
        "The Little Watcher", "The Honor Seeker", "The Guilty Sister", "The Serpent Queen", "The Plan Maker",
        "Gather the Band", "Home Free", "Mercy Shown", "Master of the Rites", "Cover to Cover",
        "Book Worm", "Found Your Calling", "Start Duster", "Crowd Pleaser", "Scribes' Chosen",
        "Scribes' Guardian", "Scribes' Champion", "Sandra's Disciple", "Sandra's Favorite", "Mystic Training",
        "There For Them", "True Freedom", "New Alliance", "Big Spender", "Returned to Glory",
        "First Ceremony", "The Will of the Scribes", "Lick of Flame", "First Whiff", "Sky Explorer",
        "Scourge of the Skies", "The White Lute", "Downside Pilgrim", "Favored to Prevail", "Untouched Flame",
        "Enlightened", "Banished One and All", "Flame Quencher", "Fear Not the Flame", "Star Struck",
        "Home-field Heroes", "Classic Nightwings", "Sons of Jomuer", "Dames of the Downside", "Master Conductor",
        "True Nightwing"
    ];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.strictEqual(tipParagraphs.length, 0, "this guide deliberately has no Tip: paragraphs - Pyre's own varied Rite settings make generic execution tips less meaningful than in a fixed-mechanics game");

});
