import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/slime-rancher-2.js";

test("the Slime Rancher 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "slime-rancher-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "slime-rancher-2");

});

test("the Slime Rancher 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Gadgets & Exploration",
            "Resources & Discovery",
            "Economy & Endgame",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Slime Rancher 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Core Breach", "Fly like a Bea", "Tinker Tailor Science Slime", "Complete Conservatory", "A Real Hero",
        "Tinkerer", "Now You're Thinking With Plortals", "Beam Me Up", "Shady Deals", "Charged Up",
        "Polestar Pro", "All That Glitters", "Rainbow Explorer", "Can't Make an Omelette", "Secret Behind the Waterfall",
        "Into the Unknown", "Plortonomics", "Treasure Hunter", "Far Range Friends", "Quantum Crafter",
        "Pop!", "Turn the Dial", "Bea-llionaire", "A Real Goal-Getter", "Tarrnado",
        "Rainbow Researcher", "You Can Pet the Cat",
    ];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
