import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gtfo.js";

test("the GTFO guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gtfo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gtfo");

});

test("the GTFO guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Rundowns & Sectors","Expedition Challenges","Enemy Kills & Story Logs","Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official GTFO achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Bare Minimum","Indirect Course","Beyond Range","Deviation","Infection","The Vessel","Contact","Rebirth","Destination","Rise","Duality","Additional Duty","Overload Operative","Sum Total","Prisoner Deemed Fit","Invincible","Chemically Improved","Trigger Discipline","Controlled Response","Low Tech","Close Quarters","Detox","Unbroken","Predator","Rapid Response","Swift","Full Blooded","Mutual Insurance","Guardian Angel","Breathing Room","In the Shadows","Matter Wave Projector","The Inner","Demolitions Expert","Theorist","Versed","Cataloger","D-Lock Block Decipherer","John","Work Together","R4 Absolute","R5 Absolute","R6 Absolute","R7 Absolute","R8 Absolute","Main Path","Pure Will","Biotracker","Prisoner Efficiency","Ultimate Efficiency","The Voice of Truth","Unmasked","Loyalist","Defector","Meet Schaeffer","Dots and Dashes","Die Together"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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
