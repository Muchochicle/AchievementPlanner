import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wreckfest.js";

test("the Wreckfest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wreckfest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wreckfest");

});

test("the Wreckfest guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ranks, Vehicles & Career",
            "Wrecking & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Wreckfest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Dirty Roller", "Trashing Around", "Showing Some Dedication", "Wheeler Dealer", "Junk Collector", "Regional Juniors Champion", "National Amateurs Champion", "Challengers Champion", "Pro Internationals Champion", "World Masters Champion", "Highballer", "Storm Warning", "Human Lover", "Hating Them Tin Cans", "Glutton For Punishment", "Look Mom, I Can Fly", "Garden Variety", "Maniac Driver", "Rocketeer", "Cash For Crashes"];

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
