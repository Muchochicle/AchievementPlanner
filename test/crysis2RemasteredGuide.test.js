import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crysis-2-remastered.js";

test("the Crysis 2 Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crysis-2-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crysis-2-remastered");

});

test("the Crysis 2 Remastered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign & Difficulty","Combat Feats","Secrets & Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Crysis 2 Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Can it run Crysis?","Foreign Contaminant","More than Human","False Prophet","Internal Affairs","Into the Abyss","Once a Marine, Always a Marine","Hung Out to Dry","Fire Walker","Dark Night of the Soul","Crossroads of the World","Theseus at Last","Home Stretch","Start Spreading the News","City That Never Sleeps","Evolution","Heart of Darkness","Medal of Honor","Men of Destiny","Post-Human Warrior","Close Encounters","The Tourist","Fastball","Death Grip","Popcorn","Two Heads Are Better Than One","Blast Radius","Headhunter","Death Slide","Food for thought","Hole in One","Band of Brothers","Literary Agent","Stealth Assassin","Speeding Ticket"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
