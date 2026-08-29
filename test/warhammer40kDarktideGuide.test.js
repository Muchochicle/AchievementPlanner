import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-40k-darktide.js";

test("the Warhammer 40,000: Darktide guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-40k-darktide-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-40k-darktide");

});

test("the Warhammer 40,000: Darktide guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Progression",
            "Combat Feats",
            "Class Challenges",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Warhammer 40,000: Darktide achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Don't Let Me Down, Criminal", "Circle of Trust I", "Circle of Trust II", "Circle of Trust III", "Circle of Trust IV",
        "Circle of Trust V", "Circle of Trust VI", "Unconsidered Trifles", "Well met, Whippersnapper", "Two’s Company",
        "Like a four-leaf Clover", "Flawless Execution", "The Emperor Protects", "Preternatural Dodge", "Serial Killer",
        "Time to Die", "Frenzied Killer", "Dream Team", "Up and at 'Em!", "Inquisitorial Veteran",
        "Inquisitorial Legend", "Flawless Interrogator", "Purge the Heretic", "Banisher", "Something In Your Eye",
        "I'm in Charge!", "Gone Bowling", "Long Bomb", "Marked For Death", "On Overwatch",
        "Cliffhanger", "Not Even Close", "Going Out With a Bang", "Abhor the Mutant", "Buying Time",
        "Shocking Stuff",
    ];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
