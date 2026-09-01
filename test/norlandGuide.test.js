import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/norland.js";

test("the Norland guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "norland-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "norland");

});

test("the Norland guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Victory & Growth",
            "Rulers, Faith & Chaos",
            "Trials & Scholarship",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Norland achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Emperor", "Head of State", "Horde Hammer", "Big City", "Trader", "Long-liver", "Winner", "Commonwealth of Cultures", "RUTABAGA!", "Dead Bishop", "Unlucky Hunter", "Nectar Paradise", "Long Live the King", "In the Name of Sophia", "Lone Hero", "Blind Fury", "Great Lord", "Family of Bastards", "Survivor with Scars", "Cruel Tyrant", "Henry VIII", "Lone Genius", "Great Scholar", "Big Library", "Wolf Hammer"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
