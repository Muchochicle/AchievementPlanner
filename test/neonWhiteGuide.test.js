import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/neon-white.js";

test("the Neon White guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "neon-white-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "neon-white");

});

test("the Neon White guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Missions",
            "Relationships & Memories",
            "Green's Boss Fights",
            "Combat & Card Tricks",
            "Ace Medals & Level Rushes",
            "Gifts, Tickets & Collectibles",
            "The Ending Choice",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Neon White achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/neon-white.json).
    const officialAchievementNames = [
        "Mission 1 Complete", "Mission 2 Complete", "Mission 3 Complete", "Mission 4 Complete", "Mission 5 Complete",
        "Mission 6 Complete", "Mission 7 Complete", "Mission 8 Complete", "Mission 9 Complete", "Mission 10 Complete",
        "Mission 11 Complete", "Mission 12 Complete", "Absolution", "Cheese!", "Cannonball",
        "Vending Machine", "Whole again", "100%", "Sweet Dreams", "Red",
        "Solitary Grace", "Trinity", "Yellow", "Don't Think", "Vault",
        "Violet", "Rigged Game", "Mikey", "Raz", "Souvenir",
        "Green", "Ace", "Mikey's Pet", "Straight A's", "Heavenly Delight",
        "Lousy Keychain", "Trippy", "Not very effective...", "Bloody Knuckles", "Clocktower",
        "Clockwork", "Third Temple", "Divine Intervention", "Hand of God", "Book of Life",
        "Book of Death", "How thoughtful", "Gift Collector", "Gift Hunter", "Mimic",
        "Surprise!", "Parry", "White's Heaven Rush Complete", "White's Hell Rush Complete", "Red's Heaven Rush Complete",
        "Red's Hell Rush Complete", "Violet's Heaven Rush Complete", "Violet's Hell Rush Complete", "Yellow's Heaven Rush Complete", "Yellow's Hell Rush Complete",
        "Mikey's Heaven Rush Complete", "Mikey's Hell Rush Complete", "Idiot"
    ];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
