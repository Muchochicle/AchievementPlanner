import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/field-of-glory-ii.js";

test("the Field of Glory II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "field-of-glory-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "field-of-glory-ii");

});

test("the Field of Glory II guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battles, Difficulty & Campaigns",
            "Multiplayer & Tactical Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Field of Glory II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Battle Winner", "Emperor", "Deity", "Legate", "Freedom Fighter", "Horse Lord", "Strategos", "Spartacus", "Campaigner", "Epic Campaigner", "Challenger", "Good Loser", "Victor", "Flanker", "Hero", "Nemesis", "Elephant Bane", "Artillerist", "Unlucky", "Lucky"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
