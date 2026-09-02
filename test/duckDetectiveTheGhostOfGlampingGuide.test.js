import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/duck-detective-the-ghost-of-glamping.js";

test("the Duck Detective: The Ghost of Glamping guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "duck-detective-the-ghost-of-glamping-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "duck-detective-the-ghost-of-glamping");

});

test("the Duck Detective: The Ghost of Glamping guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Case","One-offs","Suggested Order"]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Duck Detective: The Ghost of Glamping achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Warming Up","Judgemental","Elementary, my dear Frederson","Kicking bins, and taking names","Bird Brain Brilliance","Duck to Water","An Ugly Mistress","Feather Fingers","Scaredy Croc","A Profound Waste of Time","Scream Therapy"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
