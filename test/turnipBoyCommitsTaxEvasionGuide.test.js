import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/turnip-boy-commits-tax-evasion.js";

test("the Turnip Boy Commits Tax Evasion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "turnip-boy-commits-tax-evasion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "turnip-boy-commits-tax-evasion");

});

test("the Turnip Boy Commits Tax Evasion guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Documents","Items & Collectibles","Endings & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Turnip Boy Commits Tax Evasion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tax evader","Heartless","Most wanted","Murderer","Dumpster diver","Contractor","Simp","Computer wiz","Book worm","Savvy shopper","Draft dodger","The messenger","Waifu","Petitioner","Devil","Estate agent","Gravedigger","Doomsdayers","News boy","Liz","Teacher","Tyrant","Turnipchino","Home owner","Adventurer","Criminal","Anarchist","Hat wearer","Fashionista","Tank","Turnip Boy","Taxation with representation","Winner","Destroyer of the world","Conductor","Passenger","???"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
