import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-rise-of-the-golden-idol.js";

test("the The Rise of the Golden Idol guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-rise-of-the-golden-idol-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-rise-of-the-golden-idol");

});

test("the The Rise of the Golden Idol guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Base Game","DLC: Sins of New Wells & Lemurian Phoenix","DLC: Age of Restraint & Last Reaper","Suggested Order"]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official The Rise of the Golden Idol achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Constriction","Academic Impact","Under Construction","News Flash","Garden Retreat","Behind Bars","Blockbuster Release","Going Once","Ignition","Protest Movement","The Procedure","Feathered Frenzy","Backstage Drama","Speildance","Complex","Beach Trip","Boardroom Brawl","Ancient Artifacts","Steelside Warehouse","Final Clash","The Curse","The Pursuit","The Machine","The Trials","The Pinnacle","Following Orders","Trouble Unleashed","The Raid","Unravelling","The Sins of New Wells","The Royal Blood","Eternity's End","Ascension","Revelation","Blaze of Glory","The Lemurian Phoenix","Fruits of Disobedience","Court of the Sentinels","The Sentience Gambit","Consequences","The Age of Restraint","Last Orders","Broadside Betrayal","Sickness and Health","Whishbloom","The Curse of the Last Reaper"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
