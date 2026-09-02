import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-legend-of-heroes-trails-through-daybreak.js";

test("the The Legend of Heroes: Trails through Daybreak guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-legend-of-heroes-trails-through-daybreak-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-legend-of-heroes-trails-through-daybreak");

});

test("the The Legend of Heroes: Trails through Daybreak guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Chapters","Arkride Solutions & Alignment","Collectibles & Systems","Combat & Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official The Legend of Heroes: Trails through Daybreak achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Legend of Heroes","Working Overtime","AAA-rkride Solutions","Time For Sweets","Law-Abiding Spriggan","Morally Gray","Chaos Bringer","Enlightened Centrist","Unrivaled Connection","Unbreakable Bonds","Carving a New Trail","Fervent Bibliophile","Gourmaniac","Chestiny","Aftermarket Modder","Holostar","Arts Virtuoso","Master Driver","Master of Orbments","Time Lord","Hotshot Spriggan","Vanta Claus","Chatterbox","Unlimited Power","HOLO 9000","Solitary Spa Fanatic","Unmatched Cinephile","Virtually Victorious","Virtual Vanguard","SCLM Addict","The Fast and the S-Boosted","Chain Smoker","S-Crutch","W-W-Wombo Combo","Caught 'Em Off Shard","Van the Stampede","Rookie Warrior","Talented Spriggan","Legendary Champion","Bear the Nightmare","Taking Up the Gauntlet","My Way or the Heiyue","The Silver Lining","Partners in Crime","Let's Go, Spriggan!","Spriggan of the Slums","The Young Flame Departs","Bright Star of the Dazzling City","Pleasure in Delirium","Disaster Protocol","A Mysterious Tale in Longlai","The Restless Carnival","For you, Upon Your Return"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
