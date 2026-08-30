import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dirt-4.js";

test("the DiRT 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dirt-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dirt-4");

});

test("the DiRT 4 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Licences & Career Series",
            "Career Feats & Team Management",
            "Joyride, Community & Pro Tour",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official DiRT 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Thanks for Coming", "International Rally R-3", "International Rally R-1", "International Rally H-C", "International Rally H-A", "National Stadium Pro-3", "National Stadium Pro-1", "International Off-Road C-3", "International Off-Road C-1", "A Bonafide Underdog Story", "First on the GRID", "Truckasaurus", "First you have to finish", "Global Superstar", "Rubbing, son, is racing", "It's all terrain, dummy", "Obsolete Models a Specialty", "Completed it mate", "...now watch this Drive", "New R-Evolution", "Textbook", "Never Raced or Rallied", "Make The Dream Work", "Be Brave", "Four-titude", "I am the 13.9%", "Real turbulent juice", "Cleaned up nicely", "This is fine", "Mondays be like...", "Chapter and Verse", "Always Believe", "Precisely", "Kenneth? What's the frequency?", "The Day Today", "Delta Force", "Flavour of the Week", "DiRTy Dozen", "tankflybosswalk", "The Nightman Cometh", "Taps Aff", "Up and up", "Sweaty", "Little Help?", "Double Yolker", "rAd-hoc", "Limp Home", "Tooled Up"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
