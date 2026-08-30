import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/company-of-heroes-3.js";

test("the Company of Heroes 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "company-of-heroes-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "company-of-heroes-3");

});

test("the Company of Heroes 3 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Italian Campaign & North Africa",
            "Skirmish & Multiplayer",
            "Hold Fast (Final Stand) Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Company of Heroes 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The First Step", "The Second Step", "Fan Of Support", "Terra Nostra", "Gung Ho", "Slow And Steady", "Lest We Forget", "The Way Forward", "Volturno Breaker", "Gustav Breaker", "The Cover-up", "Anniehilator", "Historical Reparation", "Sweet Victory", "Hot Dog!", "El Alamost", "0K", "You're Missing The Point", "Full Stop", "Master Of Full Stops", "It Always Leads Me Here", "But Still They Lead Me Back", "Company Commander V3", "No Quarter", "Heroic Stand", "Defensive Line", "United Front", "Impenetrable", "Afrikakorps Mastery", "Wehrmacht Mastery", "US Forces Mastery", "British Forces Mastery", "Carnage", "Decapitation", "Tactical Supremacy", "Overwhelming Numbers"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
