import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/furi.js";

test("the Furi guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "furi-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "furi");

});

test("the Furi guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Nine Guardians",
            "The Three Endings",
            "Meeting The Voice",
            "Combat Technique Achievements",
            "Difficulty & Rank Achievements",
            "Speedrunning",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Furi achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/furi.json).
    const officialAchievementNames = [
        "Kill the Jailer", "A Prison within a Prison", "Master of Time", "Single Impact", "Can You Feel It?",
        "Don't Listen to Her", "She's an 11", "All That Nonsense", "Amateur. Pushover.",
        "Welcome Back, Rider", "Who Will Protect Them Next Time?", "There Is Kindness in You",
        "My Only Chance", "Lucky for You", "Light It Up", "Give It a Real Try", "What a Thrill",
        "It Gives Me Hope", "Furier than Ever", "That Was Intense", "Neon Swagger", "So Fresh",
        "Perfect Parrier", "Boost Master", "Ping Pong", "Let's Brawl", "Take It Back",
        "Jedi Master", "Speedrunner", "Untouchable", "Faster than M", "Faster than B", "Breakout"
    ];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
