import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/beastieball.js";

test("the Beastieball guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "beastieball-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "beastieball");

});

test("the Beastieball guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The League","Story & Modes","Suggested Order"]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Beastieball achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Go Pro","Raging Blazes","Mythic Dreamers","Golden Gods","Party Pirates","Wild Flowers","Magic Moons","Hello Freaks","Silent Warriors","Platinum Sponsor","Big Leagues","ACHIEVEMENT OF SHAME","Staying Power","Nobody Cares But OK Good Job!","Tower Tourney","[Early Access]","A Real Team","King's Pet","Now THAT'S Beastieball!","Straight to the Top!","It's Canon!","Super Tower Tourney","Draft Challenge","Expedition Summit","You got Staying Power!","Street Wise","Rank Defender"];

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
