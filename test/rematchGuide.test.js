import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rematch.js";

test("the REMATCH guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rematch-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rematch");

});

test("the REMATCH guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Prologue, Scoring, Saves & Assists",
            "Matches, Progression & Friends",
            "Workshops & Career Finale",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official REMATCH achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["It's just a game", "Goal!", "Serial scorer", "Golden boots", "Acrobat", "Pinball", "Hats off", "Marathon runner", "Not in my house!", "Rampart", "Golden gloves", "Guardian angel", "Team first!", "Vista", "Maestro", "Make them shine", "Post to post", "Eyes closed", "Alley-oop", "Versatile", "New look", "Shopping", "Fashion victim", "Starting blocks", "Clean sheet", "Competitor", "Winner", "The Special One", "Ultra Trail", "Can't lose", "Pro", "Expert", "Power of friendship", "Back on track", "Mr Fundamentals", "No pain no gain", "Making History"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
