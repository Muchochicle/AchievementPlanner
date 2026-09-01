import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pentiment.js";

test("the Pentiment guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pentiment-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pentiment");

});

test("the Pentiment guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Act I: The First Murder",
            "Act II: A Death in the Abbey",
            "Act III: The Reckoning",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official Pentiment achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Stonemason", "Smell the Roses", "The Nun", "The Widow", "The Prior", "The Imposter", "The Adulteress", "The Embezzler", "Nosy Fella", "Kiss Zdena", "Quick Fingers", "Good Graces", "Empty-headed", "Andreas Non Grata", "The Root of the Problem", "Grave Matters", "Hot Goss", "Legal Eagle", "Simple Soul", "Like a Record Baby", "The Baron", "Should Have Seen the Other Guy", "High Roller", "Down to the Last Pfennig", "Matchmaker", "Room Service", "Among Us", "The Cornish Patient", "The Penitent Man", "The Deer Hunter", "The Hand of Mercy", "Vis Major", "Cookie Master", "Look Before you Climb", "The Second Plague", "A Fateful Sausage", "Manu Propria", "Cryptic Solutions", "Good Influence", "A Regular Saint Francis", "Art of Persuasion"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
