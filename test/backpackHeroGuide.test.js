import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/backpack-hero.js";

test("the Backpack Hero guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "backpack-hero-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "backpack-hero");

});

test("the Backpack Hero guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Quick Run Wins & Early Progress",
            "Heroes & Biome Discovery",
            "Mastery & Item Collection",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Backpack Hero achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Quick Hero", "Purse Hero", "Satchel Hero", "Tote Hero", "Pochette Hero",
        "CR-8 Hero", "Prada's Locket", "Town Hall", "Resilient Town", "Bird Hero",
        "Toad Hero", "Porcupine Hero", "Robotic Hero", "Deep Explorer", "Thorny",
        "Swampland", "Toasty", "Shivers", "Backpack Hero", "Tough Times",
        "Discoverer", "Expert", "Hero", "Popular", "Shiv Master",
        "Builder", "Haggler", "Multipurpose", "Mage", "Archer",
        "Glutton", "Status Master", "Cursed Run", "Poison Stack", "Fully Armored",
    ];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
