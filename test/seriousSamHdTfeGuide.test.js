import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/serious-sam-hd-tfe.js";

test("the Serious Sam HD: TFE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "serious-sam-hd-tfe-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "serious-sam-hd-tfe");

});

test("the Serious Sam HD: TFE guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single-player & Challenges",
            "Co-op & Rocket Jumps",
            "Deathmatch Wins & Frag Counts",
            "Knife & Combo Frag Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Serious Sam HD: TFE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Beginner", "Game Master", "Serious Sam", "Serious Run", "Cannon Expert", "Perfect Kill", "Look, it's a secret", "Metropolis King", "I am invincible", "Co-op Beginner", "Co-op Hippy", "Serious Co-op", "Rocket Jumper", "Look Ma, I won!", "Deathmatch Master", "Deathmatch Champion", "Deathmatch Veteran", "Deathmatch Duelist", "Untouchable", "Fragger", "Crazy Fragger", "Serious Fragger", "1337 Fragger", "Desperate Fragger", "Butcher", "Swordsman", "Backstabber", "Diverse Fragger", "Deathmatch Marathon", "Deathmatch Marathon Winner", "Grudge", "Nemesis", "Frag Combo", "Royal Frag Combo", "Swimming Instructor"];

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
