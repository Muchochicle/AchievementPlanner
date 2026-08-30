import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dungeon-of-the-endless.js";

test("the Dungeon of the ENDLESS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dungeon-of-the-endless-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dungeon-of-the-endless");

});

test("the Dungeon of the ENDLESS guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Pod Wins & Multiplayer",
            "Heroes, Building & Combat Grinds",
            "Collection & Special Wins",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Dungeon of the ENDLESS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Basic Training", "Graduated Med School", "Guns 'n Glory", "Endless Mining", "Bookworm", "Mr Cleaner", "Out of the Cold", "The Other Great Escape", "Onward and Upward", "Team Builder", "Maxed Out", "HR Boss", "Champions' League", "Medpack Addict", "Too Much Is Not Enough", "Dexterous", "Waste Not Want Not", "What's Behind Every Door?", "I Could Quit If I Wanted To", "Science Fair Winner", "Rocket Scientist", "Everybody Goes Home", "Real Heroes Don't Pause", "Dust Hoarder", "Yearbook Editor", "Members Only", "The Good, the Bad and the Ugly", "Elevator Song", "Endless Day", "Soiled with glue", "Hurnacide", "Grab 'Em All", "So much for the mission"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
