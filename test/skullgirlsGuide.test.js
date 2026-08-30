import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/skullgirls.js";

test("the Skullgirls 2nd Encore guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "skullgirls-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "skullgirls");

});

test("the Skullgirls 2nd Encore guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode & Endings I",
            "Combat & Mode Feats",
            "Character Story Completions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Skullgirls 2nd Encore achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Threads of Fate", "Sküllgirls", "Prolix", "An Ensemble Cast", "Instant Hair Dash ", "Real Circus Damage", "The Kitchen Sink", "Good Hunting, Commander", "Getting A Head In the Game", "My Pain Will Be Visited Upon You", "Medical Board Will Be Notified", "Toil and Trouble", "Breaking the Cycle", "Call the Wardrobe Department", "World Warrior Princess", "Happy Birthday", "Two Weeks", "Independent Study", "Overruled!", "Conqueror", "Survival Serenity", "Lab Monster", "Beau-coup de Grâce", "Prima Donna", "Foreshadowing and Cymbalism", "Me and My Shadows", "The Beast Within", "By the Scruff of Their Necks", "Still \"Alive\"", "Museum of Unnatural History", "Funded!", "A Normal Life", "And It's All Thanks To You", "Picking Up Where Marie Left Off", "Training the Next Generation", "Nadia Fortune and the Mystery of the Missing Fishfolk", "Command Override", "Deeper Into Enemy Lines", "The Other Candidates Will Be Consumed", "Until You Next Awaken", "Not What It Used To Be -- But Neither Am I", "Let Them All Bathe In My Glory", "Kind of an Idiot, But Not a Bad Guy", "Days of Future Cats", "April Fact's Day"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
