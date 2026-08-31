import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sonic-adventure-dx.js";

test("the Sonic Adventure DX guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sonic-adventure-dx-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sonic-adventure-dx");

});

test("the Sonic Adventure DX guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Stories",
            "Emblems & Missions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Sonic Adventure DX achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Miles \"Tails\" Prower", "Knuckles the Echidna", "Amy Rose", "E-102 \"γ\"", "Big the Cat", "Sonic the Hedgehog", "Super Sonic", "The Fastest & Strongest", "Sub Game Master", "Chao's Best Friend", "The Adventurer", "The Perfect Adventurer", "Metal Sonic", "Metal Sonic Master", "Mission All Accomplished"];

    assert.strictEqual(officialAchievementNames.length, 15, "sanity check on this test's own reference list");

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
