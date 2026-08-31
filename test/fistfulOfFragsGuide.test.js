import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fistful-of-frags.js";

test("the Fistful of Frags guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fistful-of-frags-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fistful-of-frags");

});

test("the Fistful of Frags guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Trick Kills & PvP Feats",
            "Progression & Movement Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Fistful of Frags achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Frag Robber", "Robin Hood", "Kick their asses", "Dutch Courage", "Defuser", "Best Friends", "More Dead Than Alive", "A Fistful of Dynamite", "The Unforgiven", "Detonator", "Overweighted", "Overpowered", "My Name is Nobody ", "Level: Rancher", "Level: Gunfighter", "Level: Legend", "Hat-Shooter", "Certified mobile cannon operator", "Sliding killer", "Bouncing around"];

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
