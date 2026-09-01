import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-final-station.js";

test("the The Final Station guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-final-station-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-final-station");

});

test("the The Final Station guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Acts & Combat Feats",
            "Passenger Stories & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official The Final Station achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Station A-45", "City of The Factories", "The L-abs Bunker", "Following Orders", "Yes You Can", "Push Back", "Home Safe", "Side Effects", "Know When To Run", "Collateral Damager", "Harry's story", "Jesse's story", "Bill's story", "Brandon's story", "Matthew's story", "Bob's story", "Charles's story", "Marc's story", "Old friend's story", "Soldier's story", "Thomas's story", "Sociopath", "But why?"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
