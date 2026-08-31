import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/costume-quest.js";

test("the Costume Quest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "costume-quest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "costume-quest");

});

test("the Costume Quest guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Costumes & Bosses",
            "Completion & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Costume Quest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Leave some for the rest of us! ", "Battle Buds", "Binary Bouncer", "Do the Monster Bash", "Make it Work", "Dressed to Quest", "The Last Gourdian", "Master of Disguise", "Downsized!", "Dozer Dodger", "Sweet Justice", "Mask-O'-Raider", "All Decked Out", "They'll be worth a lot someday", "Chompin' Champ", "Jeepers Peepers", "Playin' Hooky", "Revolutionary Hero", "Birdbrain Beatdown", "Short Stack", "Tisn't the Season"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
