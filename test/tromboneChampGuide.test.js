import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trombone-champ.js";

test("the Trombone Champ guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trombone-champ-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trombone-champ");

});

test("the Trombone Champ guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scoring & Song Mastery",
            "Customization & Collection",
            "Champion Status & Endgame",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Trombone Champ achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Music Enjoyer", "S Apprentice", "S Associate", "S Aficionado", "S Virtuoso",
        "S GOD", "I Would Prefer Not To", "The Tootmaster", "The Bassmaster", "Aesthete",
        "Apex Aesthete", "Gettin' Tootier", "Got Tootiest", "Yo! I Got a Sack", "Card Collector",
        "New Friend", "Never Liked the Guy", "No more", "I Want Them All!", "TROMBONE CHAMP",
        "Big Brain Scholar", "S ULTRA-GOD", "S ULTRA-MEGA-GOD", "I DID ENGOLDENATION", "ENGOLDENATION GOD",
    ];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
