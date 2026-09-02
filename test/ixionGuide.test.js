import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ixion.js";

test("the IXION guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ixion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ixion");

});

test("the IXION guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Chapters & Story Events","The Tiqqun","Sector Building","Suggested Order"]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official IXION achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Without Breaking Some Eggs...","Guy de Borderlands","Catastrophe Avoided","Gregor Spinoza","Tiqqun Unchained","Hope Seeker","From the Past","What the Ruins Teach Us","Pulsar Disciple","Man's Best Friend","Mutual Loyalty","Better Him Than Me","Oats","Beyond Time and Space","Tiqqun Contender","What They Hide From Us","Infinite growth...","... in a finite world","Wakey Wakey","Sustainable Energy","Space Society","Sputnik 2049","Remember the Dead","Sightseeing","A Hunk of Junk","In Dolos We Trust","A Thousand Strong","Exceeding Capacity","Power Outage","Praise the Hull!","Fully Recycled","Ready for a New World","Breaking Protocol","Access Granted","Necessary Enhancement","You Had One Job...","This is Fine","Work Harder","Space Greenhouse","Suburban Perfection","A Junker's Dream","Delivery!","Permanent Redesigns","Ain't Nobody Got Time for That","Scenic View","Monotrack Drifter","BRAWL!","All in Good Health","Please Make it Stop!","Pedal to the Metal","Drill-dozer","The Ship of Theseus","Crunch Culture","Scientifically Accurate","Soylent Green","Help of the Forgotten Member","I Give You The Stars"];

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
