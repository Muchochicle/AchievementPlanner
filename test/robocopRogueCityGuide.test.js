import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/robocop-rogue-city.js";

test("the RoboCop: Rogue City guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "robocop-rogue-city-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "robocop-rogue-city");

});

test("the RoboCop: Rogue City guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Trick Kills & Secrets",
            "Evaluations, Skills & Gadgets",
            "Cases & Main Story",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official RoboCop: Rogue City achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No stone unturned", "Zip This Up", "Good eyes, Murphy!", "Live by the bike...", "Strikeout!", "Dead-On", "\"This Guy Is Really Good\"", "SuperCop", "A Real Hero", "Officer of the month", "Nukem!", "Uphold the Law", "May Be Used Against You", "There Can Only Be One", "All Adds Up", "I'd Buy That For a Dollar!", "Practice Makes Perfect", "Hard Boiled", "Night Has Just Begun", "Dead or Alive", "Twenty Seconds to Comply", "Don't Mess With the Money!", "Book Him!", "Let's Talk", "Cashing Out", "Not Arresting You Anymore", "\"Nice shooting, son\""];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
