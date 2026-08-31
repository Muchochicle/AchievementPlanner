import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stray.js";

test("the Stray guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stray-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stray");

});

test("the Stray guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Cat Antics & Milestones",
            "Story & Chases",
            "Collectibles & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Stray achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Little Chatty", "Cat-a-Pult", "Productive Day", "Boom Chat Kalaka", "Can't Cat-ch Me", "Sneakitty", "No More Lives", "Scratch", "Pacifist", "I Am Speed", "Missed Jump", "Not Alone", "Cat Got Your Tongue?", "Catwalk", "Al-Cat-Raz", "Eye Opener", "Meowlody", "Curiosity Killed the Cat", "Cat-a-strophe", "Cat's best friend", "I Remember!", "Télé à chat", "Badges", "Territory"];

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
