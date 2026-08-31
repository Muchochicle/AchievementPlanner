import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ares-extinction-agenda.js";

test("the A.R.E.S.: Extinction Agenda guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ares-extinction-agenda-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ares-extinction-agenda");

});

test("the A.R.E.S.: Extinction Agenda guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Ranks",
            "Bosses, Collectibles & Combat",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official A.R.E.S.: Extinction Agenda achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Primary Objective", "Unlimited Energy", "Die Another Day", "I am the Destroyer", "Here is my True Strength", "Soldier of the Universe", "It's a Long Story", "Boss Headhunter", "Don't Come Back Again", "You Should Have Two", "Fight with the Same Size", "Whatever Your Size Is", "Bookworm", "Extinction of the Robots", "I Am Trashman", "Burst with the Energy", "Weapon At Maximum", "Master of Stun", "Ninety-Nine Combo", "Ready For Action", "Close Combat Fighter", "Art of Destruction", "Where is the Emergency?", "It's getting too hot!"];

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
