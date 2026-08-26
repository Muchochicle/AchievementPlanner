import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/portal-2.js";

test("the Portal 2 guide identifies itself correctly as Portal 2's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "portal-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "portal-2");

});

test("the Portal 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Solo Campaign (Chapters 1-3)",
            "Story Beats (Chapters 4-9)",
            "Hidden Chamber Secrets (Solo)",
            "Co-op Campaign",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 51-achievement, 29-solo/22-co-op facts", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);
    assert.match(overview, /29 from the single-player campaign/);
    assert.match(overview, /22 from the separate two-player co-op campaign/);

});

test("every one of the 51 official Portal 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (src/data/games/portal-2.json).
    const officialAchievementNames = [
        "Wake Up Call", "You Monster", "Undiscouraged", "Bridge Over Troubling Water", "SaBOTour",
        "Tater Tote", "Vertically Unchallenged", "Stranger Than Friction", "White Out", "Tunnel of Funnel",
        "The Part Where He Kills You", "Lunacy", "Pit Boss", "Stalemate Associate", "Dual Pit Experiment",
        "Drop Box", "Overclocker", "Preservation of Mass", "Pturretdactyl", "Final Transmission",
        "Good Listener", "Scanned Alone", "No Hard Feelings", "Schrodinger's Catch", "Ship Overboard",
        "Door Prize", "Portrait of a Lady", "You Made Your Point", "Smash TV", "High Five",
        "Team Building", "Confidence Building", "Bridge Building", "Obstacle Building", "You Saved Science",
        "Iron Grip", "Gesticul-8", "Can't Touch This", "Empty Gesture", "Party of Three",
        "Narbacular Drop", "Professor Portal", "Air Show", "Portal Conservation Society", "Four Ring Circus",
        "Triple Crown", "Still Alive", "Asking for Trouble", "Rock Portal Scissors", "Friends List With Benefits",
        "Talent Show"
    ];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
