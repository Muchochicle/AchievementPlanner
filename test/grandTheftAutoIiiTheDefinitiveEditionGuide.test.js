import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grand-theft-auto-iii-the-definitive-edition.js";

test("the Grand Theft Auto III - The Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grand-theft-auto-iii-the-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grand-theft-auto-iii-the-definitive-edition");

});

test("the Grand Theft Auto III - The Definitive Edition guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Missions & Secret Objectives","Side Activities & Vehicles","Progression, Collectibles & Completion","Suggested Order"]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Grand Theft Auto III - The Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Day on the Job","Without a Scratch","Escape Artist","Disposing of the Evidence","Mob Boss","Street Sweeper","Planned Ahead","Got This Figured Out","By a Mile","Wreckless Driving","Wheels Up","Come Out to Play-y-y-y","Where To?","Liberty City Minute","Full Artillery","A Marked Man","Offshore Delivery","Not So Fast","A Gift from the King","Man Toyz","Splish Splash","Playing Doctor","Going Rogue","Dirty Money","Right-hand Man","Furious First Responder","Liberty City Secrets","Is That All You've Got?","King of Liberty City"];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
