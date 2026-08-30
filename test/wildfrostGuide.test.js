import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wildfrost.js";

test("the Wildfrost guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wildfrost-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wildfrost");

});

test("the Wildfrost guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat Feats",
            "Runs & Bosses",
            "Deck & Team Composition",
            "Stats & Tribes",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Wildfrost achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Lone Survivor", "Snowball Fight", "Big Hitter", "Bigger Hitter", "Tough Nut",
        "Ritual", "Toxic", "One Punch", "Icemaster", "High Roller",
        "Gnome Friend", "Long Live the King", "Feed the Beast", "Balloonist", "Undefeated",
        "Sunbringer", "Gnomebringer", "Hoarder", "Charmless", "Rampage",
        "Best Friends", "Beastmaster", "Minimalist", "Berry Good", "Snowdweller",
        "Shademancer", "Clunkmaster",
    ];

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
