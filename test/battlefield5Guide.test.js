import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-5.js";

test("the Battlefield V guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-5");

});

test("the Battlefield V guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "War Stories (Campaign)",
            "Multiplayer Feats & Class Score",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Battlefield V achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Storyteller", "Veteran", "Sins of the Fathers", "Lovely", "Store fuglar fanga ingi flugor", "Ou La Mort", "Off-hand", "Enemy Attrition", "Hoist the Flag", "Globetrotter", "Death from Above", "Fender Bender", "Grim Reaper", "Call ’em in!", "Combat Engineer", "Heads Down", "Jack of All Trades", "Eager Beaver", "Elite", "Last Man Standing", "Not On My Watch"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
