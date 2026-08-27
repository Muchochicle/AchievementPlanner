import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deaths-door.js";

test("the Death's Door guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deaths-door-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deaths-door");

});

test("the Death's Door guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Ability Upgrades",
            "Collectibles",
            "Post-Game Secrets",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Death's Door achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/deaths-door.json).
    const officialAchievementNames = [
        "Crow Gamer", "Academy of Umbrellas", "Meal for a King", "Hot Pot", "Banging Tune",
        "Clever Too Much", "Specialist", "Big Spender", "Ooh Shiny!", "Weapon Master",
        "Zen", "A Stroll with Jefferson", "Reap what you sow", "Conga Line", "Plot Head",
        "Lord of Chores", "Squid Soup?", "Baul Plart, Hall Cop", "In Caw-Hoots", "Cremation",
        "Demo Crow", "Crouching Tiger Hidden Crow", "Hawk Eye", "A True End"
    ];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
