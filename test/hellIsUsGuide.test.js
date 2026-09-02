import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hell-is-us.js";

test("the Hell is Us guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hell-is-us-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hell-is-us");

});

test("the Hell is Us guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Good Deeds",
            "Combat: Hazes & Hollow Walkers",
            "Research & Vaults",
            "Exploration, Relics & Abilities",
            "Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Hell is Us achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["So It Begins", "Emotional Baggage", "Redemption", "Good Samaritan", "Man of the People", "End the Suffering", "Amateur Detective", "Super-Sleuth", "All the Rage", "Buzz Killer", "Fear No Evil", "Good Grief", "Big Game Hunter", "Rise and Phol", "Phol Guy", "The Harder They Phol", "Legend of the Phol", "Good Vibrations", "Accessorizing", "To the Teeth", "War Correspondent", "Historian", "Conspiracy Theorist", "Gentleman Scholar", "Demonologist", "Sworn to Secrecy", "Well-Read", "Vault Raider", "Tech-Savvy", "Emotional Damage", "Emotional Warfare", "Curator", "Antiquarian", "Well-Travelled", "Lend an Ear", "Keymaster", "Long and (not so) Winding Road", "It's Mine Now", "Ever After", "Passion for Fashion"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
