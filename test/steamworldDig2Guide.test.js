import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/steamworld-dig-2.js";

test("the SteamWorld Dig 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "steamworld-dig-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "steamworld-dig-2");

});

test("the SteamWorld Dig 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Milestones",
            "The Four Gold Stars",
            "Resources & Collectibles",
            "Gear, Leveling & the Workbench",
            "Combat & Traversal Tricks",
            "Caves & the Ultimate Trial",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official SteamWorld Dig 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/steamworld-dig-2.json).
    const officialAchievementNames = [
        "The Guiding Light", "A Mysterious Garden", "A Shining City", "The Enlightened", "Ghost of the Machine",
        "A New Frontier", "Speedrunner", "Hardcore", "Gold Farmer", "Explorer",
        "The Impossible Dream", "Barnacle’s BFF", "It Makes the World Go Round", "Hobbyist Collector", "Skilled Collector",
        "Master Collector", "O Brother, Where Art Thou?", "My Very Own Sun", "Solid Sneak", "Two Birds, One Stone",
        "Right Back At Ya!", "Lazy Person", "At Least It’s Shiny", "Is It Even a Pickaxe Anymore?", "Hard Carry",
        "That’s Armor-e", "Maximum Potential", "Hook, Line and Sinker", "Cave Diver", "Splendiferous Spelunker",
        "Hopeless Gearhead", "Friendly Neighborhood Spider-Bot", "Sequence Breaker", "To Hell and Back"
    ];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
