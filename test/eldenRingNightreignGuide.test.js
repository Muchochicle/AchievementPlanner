import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/elden-ring-nightreign.js";

test("the Elden Ring Nightreign guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "elden-ring-nightreign-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "elden-ring-nightreign");

});

test("the Elden Ring Nightreign guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Expeditions, Nightlords & the Ending",
            "Shifting Earth, Raids & Run Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Elden Ring Nightreign achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Nightreign", "The Shrouded Roundtable Hold", "The Nightlords", "Night Begins", "The Duchess Joins the Fray", "The Revenant Joins the Fray", "Dawn", "Tricephalos", "Gaping Jaw", "Sentient Pest", "Augur", "Equilibrious Beast", "Darkdrift Knight", "Fissure in the Fog", "Night Aspect", "Nightlord Conqueror", "Relic", "Dresser", "Vessel", "Legendary Armament", "Mountaintop", "The Crater", "Rotted Woods", "Noklateo, the Shrouded City", "Shifting Earth", "Obtained Vessels", "A Champion's Path", "Mastery", "Replenished Sacred Flasks", "Untold Power", "Old Gaol", "Set and Steadfast", "Fell Omen", "Plague of Locusts", "Typhoon", "True Arbiter", "Nightlord Slayer"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
