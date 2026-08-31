import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dusk.js";

test("the DUSK guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dusk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dusk");

});

test("the DUSK guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes & Awards",
            "Secrets, Endless & Extras",
            "Speedmaps & Challenge Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official DUSK achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Only the Beginning", "The Foothills", "The Facilities", "The Nameless City", "Pacifist", "Completionist", "Untouchable", "Low Tech", "True 100%", "Gotta Go Fast", "Duskwife", "Duskbaby", "Don't Drop It", "5 Survived ", "10 Survived", "20 Survived", "Frag your Friends", "Thanks!", "Not Even Remotely Fair", "It Lives", "Mother!", "Go Away", "So I Hear You Like...", "Hardcore Parkour", "Swamped", "UNWORTHY", "Intoxigated", "Telefragged", "Somebody's Poisoned the Waterhole!", "Spin 2 Win"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
