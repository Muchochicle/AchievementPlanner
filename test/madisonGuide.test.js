import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/madison.js";

test("the MADiSON guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "madison-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "madison");

});

test("the MADiSON guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Progression","Collectibles & Photos","Challenges & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official MADiSON achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Extra pockets","Fully loaded","You shouldn't have listened","Welcome back","Welcome back, once again","You know what to do","Red","Blue","Professional photographer","He is here","Grandma was right","Say cheese!","No more smiles, please","500X Zoom","Elizabeth's memoirs","No time to die","Hunger","Blinded","Blue Knees?","You...","Found it!","Follow me","Grandpa's tools","BLOODIOUS","The nightmare is over","Do not waste","Out of film","The struggle within","666","Lived to tell the tale","MAD SON","You are possessed"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
