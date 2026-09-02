import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragon-quest-treasures.js";

test("the DRAGON QUEST TREASURES guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragon-quest-treasures-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragon-quest-treasures");

});

test("the DRAGON QUEST TREASURES guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Adventure","Adventure Quests","Combat & Monsters","Treasure Vault & Appraisal","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official DRAGON QUEST TREASURES achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sibling Adventurers","Bossy Booters","Fortune Finders","Base Builders","Pit Bullies","Hot Steppers","Ice Screamers","Future Hopers","Emerging Victors","Reluctant Returners","Teacher's Pets","Friendly Competitors","Assistant Professors","Bubble Bursters","Master Mechanics","Competitive Streakers","Bitter Rivals","Unwary Accomplices","Ultimate Adversaries","Banner Raisers","Gold Medallists","Dragon Wranglers","Forte Fanatics","Combat Specialists","New Recruiters","Tummy Fillers","Impulsive Vandals","Pocket Pickers","Back Stabbers","Metal Scrappers","Sparkly Spotters","Accessory Accumulators","Robbin' Robbers","Dispatch Dons","Super Conductors","Veteran Adventurers","Mystery Unravellers","Party Monsters","Gang Stars","Bad Smellers","Heroic Figures","Monster Jewellers","Gullible Gatherers","Initial Icons","Symbolic Valuers","Antique Dealers","Iconic Treasurers","Crazed Completionists","Bank Rollers","Legendary Treasure Hunters"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
