import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/guacamelee-2.js";

test("the Guacamelee! 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "guacamelee-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "guacamelee-2");

});

test("the Guacamelee! 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Boss Fights & Story Progression",
            "Combat Mastery",
            "Exploration & Secrets",
            "Full Completion",
            "Enemigos Character Pack",
            "The Proving Grounds DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Guacamelee! 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/guacamelee-2.json).
    const officialAchievementNames = [
        "Guacamastery", "I Remember That Being Harder", "Re-Resurrección", "Show's Over, Go Home", "Severed",
        "Prickly Pair", "Severed 2", "Questionable Plumbing", "Santa Golpiza!", "Grapple Expert",
        "Juan Punch Man", "I Was Told There'd Be Candy", "Cluckstorm", "The Floor Is...", "6-Piece Combo",
        "He Looks Portable", "PERFECT", "Talented Player", "You Survived", "One Born Every Minute",
        "King of the Hill", "Special Delivery!", "Combo Machine", "These Are Not Fertilized", "Temple Raider",
        "y cant guacamelee crawl", "I Have Nothing Left to Teach You", "One Down...", "Very Special", "Talk to the Hend",
        "Moves Like Jaguar", "Luchonarrative Resonance", "El Técnico Táctico", "Mr. Worldwide", "Even Darkester",
        "Nacho Libre", "Legend of the Timelines", "+ Cool Cat Counter Attack ('Enemigos' Character Pack)", "+ Steal the Show ('Enemigos' Character Pack)", "+ Body Builder ('Enemigos' Character Pack)",
        "+ Welcome to MY World ('Enemigos' Character Pack)", "+ Jaguar's Redemption ('Enemigos' Character Pack)", "++ Slippery Snake (The Proving Grounds)", "++ Explosion Therapy (The Proving Grounds)", "++ Snake Temple Throwdown (The Proving Grounds)",
        "++ Salvador’s Sister Act (The Proving Grounds)", "++ Bronze Champion (The Proving Grounds)", "++ Silver Champion (The Proving Grounds)", "++ Let Sleeping Gods Lie (The Proving Grounds)"
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
