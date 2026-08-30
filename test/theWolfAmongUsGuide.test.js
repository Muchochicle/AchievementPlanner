import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-wolf-among-us.js";

test("the The Wolf Among Us guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-wolf-among-us-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-wolf-among-us");

});

test("the The Wolf Among Us guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: Faith & Smoke and Mirrors",
            "Episodes 3-4: A Crooked Mile & In Sheep’s Clothing",
            "Episode 5: Cry Wolf",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official The Wolf Among Us achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Fabletown", "Wolf in Sheriff's Clothing", "The Long Goodbye", "The Frog or the Prince?", "Panic in the Parlours", "A Light Snowfall", "Novice Librarian", "Right to an Attorney", "Breaking Point", "Sisters", "Made Them Cry", "Can I Get a Fresh Set of Towels?", "No Respect for the Dead", "Apprentice Librarian", "Promising Leads", "Belly Full of Stones", "What Big Eyes You Have", "Huff and Puff", "Severe Case of Lycanthropy", "The Enchanted Land of New York City", " Journeyman Librarian", "Once Upon a Time", "There Was a Wolf", "Who Ruled The Land", "He Was Much Feared", "But Soon He Mended His Evil Ways", "And All Were Happy", "Master Librarian", "Beginning of the End", "This House of Straw", "A Silver Bullet", "My Last Cigarette", "The North Wind Blows", "Happily Ever After", "Grand Master Librarian"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
