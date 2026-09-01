import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dust-an-elysian-tail.js";

test("the Dust: An Elysian Tail guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dust-an-elysian-tail-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dust-an-elysian-tail");

});

test("the Dust: An Elysian Tail guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Sidequests",
            "Combat & Collectibles",
            "Challenges & Choices",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Dust: An Elysian Tail achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Defused", "Waters of Life", "High Spirits", "...And the Dust Settles", "Friend of Falana", "Hero of Falana", "Savior of Falana", "A Decent Start...", "That's More Like It", "Bringer of Death", "Push and Turn", "Wait, aren't you...?", "Baker's Dozen", "Distant Thunder", "Well on your Way", "With Great Power...", "An Impressive Display", "The Stuff of Legends", "Blue Bomber", "Paragon", "Renegade", "Cutting It Close", "Tinkerer", "Bad Therapist", "Opposite of Fail", "Above and Beyond the Call", "Sad Way to Go", "One Last Wish", "The Blacksmith of Archers' Pass", "Silence Those Guns"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
