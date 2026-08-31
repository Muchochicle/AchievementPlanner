import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dishonored-2.js";

test("the Dishonored 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dishonored-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dishonored-2");

});

test("the Dishonored 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mission Completions",
            "Situational & Optional Objectives",
            "Powers, Combat & Collectibles",
            "Playthrough Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Dishonored 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Imperial Seal", "Jewel of the South", "The Beast Within", "Labyrinthine Mind", "A Night in 1849", "Spirit Thief", "Down with the Duke", "The Greatest Gift", "Freedom of Speech", "Morbid Theft", "Stay of Execution", "Fearless Fall", "Counter-serum", "Place of Three Deaths", "Silence", "Oracular Echoes", "Howlers ’til the End", "Faithful to the Abbey", "Eureka", "Under the Table", "Flooded Basement", "Dilapidation", "Years Ago, Another Time", "Gazebo", "Familiarity Breeds Contempt", "The Lovers", "Sliding Marksman", "Occult Carver", "Heartbeat Reaper", "Fatal Redirect", "Circle of Life", "Ghostly", "Alternative Approach", "Black Market Burglar", "Well Funded", "Souvenirs", "Heart Whispers", "Clockwork Collector", "Art Collector", "Royal Spymaster", "Songs of Serkonos", "Rogue", "Acrobat", "Shadow", "Flesh and Steel", "The Royal Protector", "The Empress", "In Good Conscience", "Empire in Chaos", "Clean Hands"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
