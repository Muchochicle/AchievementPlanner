import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/half-life-2-episode-two.js";

test("the Half-Life 2: Episode Two guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "half-life-2-episode-two-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "half-life-2-episode-two");

});

test("the Half-Life 2: Episode Two guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress & Set-Piece Feats",
            "Combat Feats & Gnome Chompski",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Half-Life 2: Episode Two achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Acid Reflex", "Get Some Grub", "Piñata Party", "Into the Breach", "Twofer", "Hit and Run", "Meet the Hunters", "Puttin' On a Clinic", "Gunishment!", "Cache Checker", "Pedal to the Metal", "Gordon Propelled Rocket", "Quiet Mountain Getaway", "Little Rocket Man", "Secondary Silo Secured", "Neighborhood Watch", "Defense of the Armament", "Payback", "Bone Breaker", "Deadly Harvest", "Hot Potat0wned", "Grave Robber", "Gnome Alone"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
