import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ea-sports-wrc.js";

test("the EA SPORTS WRC guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ea-sports-wrc-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ea-sports-wrc");

});

test("the EA SPORTS WRC guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Career & Championships","Time Trial, Moments & Distance","Builder & Location Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official EA SPORTS WRC achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Gold Rush","Team Principal","Rookie Season","World Rally Champion!","Consistency is key","Keepin it real","NEW PB!","Ghost Buster","Perfect Score","Asphalt Artist","Gravel Guru","Snow Specialist","Long Haul Hero","Vehicle Builder","Master Vehicle Builder","Class Act","Your first time?","Personalised Podium","In the Headlights","Regularity Renaissance","Algarve it a go!","Snowgloeb","El Matador","Miracle in the Mountains","E-stonia","Driver's Alliance"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
