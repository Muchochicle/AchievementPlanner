import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/return-to-monkey-island.js";

test("the Return to Monkey Island guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "return-to-monkey-island-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "return-to-monkey-island");

});

test("the Return to Monkey Island guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Parts & Trivia",
            "Middle Story Beats",
            "Late Story, Secrets & Trivia Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Return to Monkey Island achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Pegleg", "Lucky Duck", "Part One", "Fan Service", "Cartography Nerd", "Mop Heist", "Hey Wait!", "Bragging", "Mop Top", "Part Two", "Super Swabbie", "Neat Freak", "Hot Headed", "Part Three", "Not Bitter", "Dead Dead Dead", "Tight Ship", "Part Four", "Patient Citizen", "Relief Pitcher", "Ahoy There", "Promise Keeper", "Dental Samaritan", "On The Lam", "Flag Facsimile", "Trophy Fisher", "Deep Sea Diver", "Bookworm", "Part Five", "Free Wally", "I Don’t Believe", "Card Collector", "Trivia Go Getter", "Trivia Master", "Trivia Grand Master", "Trivia Lord", "Trivia Overlord", "Cogg Island", "Speed Runner"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
