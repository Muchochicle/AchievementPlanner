import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trepang2.js";

test("the Trepang2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trepang2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trepang2");

});

test("the Trepang2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign, Levels & Difficulty","Secrets & Boss Kills","Intel, Weapons & Combat Feats","Suggested Order"]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Trepang2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Erase Your Light","Take Your Flight","To A Place Where You Will Be Remembered","To A Place Where You Will Be...","..Loved","TREPANG2","Not So Hard","Supersoldier","Subject 106","Unbreakable Will","The Truth","One Last Mission","Complexity","Spelunker","Oil Spill","IT Specialist","Dark Secrets","Lost and Found","Smol Brain","Big Brain","Average Weapons Enjoyer","Trepangus","Average Weapons Fan","You Monster!","You’re Paying For Their F***ing Surgery!","Dry Party","Emersus","50 shades of burnt","TrePayne","Pest Control","XCI","LXXVIII","CVI","Slide Into Your DMs","You're a Firework!","Efficient","That Was a Close One!","Solid 106","Stylish","Oh Snap!","JuggerNOT","How’s That Helmet Working?","Cost Effective","Backfired","Stick Around","Think Fast!","Flashlight!","CV","XCV"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
