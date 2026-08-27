import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/spelunky-2.js";

test("the Spelunky 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "spelunky-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "spelunky-2");

});

test("the Spelunky 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Depth Milestones",
            "Self-Imposed Challenge Runs",
            "The Three Secret Challenges",
            "Journal & Shortcuts",
            "Special Modes & NPCs",
            "Rare Item Pickups",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official Spelunky 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/spelunky-2.json).
    const officialAchievementNames = [
        "The Full Spelunky", "You Got This", "Feels Good", "Skills Improving", "Persistent",
        "Journeyman", "Ironman", "Speedlunky", "Low Scorer", "Pilgrim",
        "Master", "Awakened", "Excavator", "Torchbearer", "Survivor",
        "Millionaire", "Seen a Lot", "Seen It All", "Mama's Little Helper", "Mama's Big Helper",
        "Track Star", "Arena Champion", "Turkey Whisperer", "Support a Local Business", "VIP",
        "Shadow Shopper", "Legendary", "Her Favorite", "Divine Right", "A Second Chance",
        "Chosen One", "Parenthood"
    ];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
