import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/homeworld-remastered.js";

test("the Homeworld Remastered Collection guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "homeworld-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "homeworld-remastered");

});

test("the Homeworld Remastered Collection guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Homeworld 1 Campaign",
            "Homeworld 2 Campaign & Raiders Retreat",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Homeworld Remastered Collection achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Graduated Cadet School", "Kharak System Completed", "Outskirts of Kharak System Completed", "Return to Kharak", "Great Wastelands Completed", "Great Wastelands (part 2) Completed", "Diamond Shoals Completed", "The Gardens of Kadesh Completed", "The Cathedral of Kadesh Completed", "Sea of Lost Souls Completed", "Super Nova Station Completed", "Tenhauser Gate Completed", "Galactic Core Completed", "The Karos Graveyard Completed", "Bridge of Sighs Completed", "Chapel Perilous Completed", "Hiigara Completed", "Graduated Command School", "Tanis Completed", "Angel Moon Completed", "Sarum Completed", "Gehenna Outskirts Completed", "Gehenna Completed", "The Karos Graveyard Complete", "Derelicts Complete", "Dreadnaught Berth Complete", "Counter Attack Complete", "Keepers of Sajuuk Complete", "Sacrifice Complete", "Thaddis Sabbah Complete", "Balcora Gate Complete", "Balcora Complete", "Return to Hiigara Complete", "Raiders Retreat Complete"];

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
