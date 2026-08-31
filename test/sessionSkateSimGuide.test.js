import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/session-skate-sim.js";

test("the Session: Skate Sim guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "session-skate-sim-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "session-skate-sim");

});

test("the Session: Skate Sim guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career & Historical Challenges",
            "Pro Skater Missions",
            "Trick Grinds & Shopping",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Session: Skate Sim achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Squad goals", "Ultimate skate nerd", "That's how it's done!", "Bing Bong!", "Loves You Back", "Golden!", "Many plys later...", "You're free now!", "Welcome to the family", "Go with the Flow", "Keep the dream alive", "Fulfilled the dream", "That was wheelie fun", "DIY Boss", "G'Day Mate!", "G.O.A.T. status", "NAHELL!", "Globetrotter", "Manny Destroys All", "Renaissance man", "Prince of Philly", "Trick shot marksman", "Finally he zips it", "Good vibes", "Commence the Hijinx!", "Tank commander", "Sup widdit big dog!", "Purple passion", "Lines for days", "Hoarder", "Pew-Pew", "We get it, you're good", "Keeping it classy", "The finer things in life", "The flip trick crown jewel", "The hard way", "Dipped!", "Skatepark hero", "Cross lock country", "That pinch!", "Laid back", "Upfront shredder", "Cops called!", "Plastic Surgeon", "Bottom ply killer", "Tight lipslides", "Fashionista", "Backpacker"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
