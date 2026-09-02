import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/terra-nil.js";

test("the Terra Nil guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "terra-nil-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "terra-nil");

});

test("the Terra Nil guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign Regions","Additional Maps","Arid Region (Vistas Update)","Feats & Photos","Suggested Order"]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Terra Nil achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Valley of the Wind","Abundant Life","Beneath the Snow","Oryx and Crake","Open-cast Reclamation","Flooded Isles","Northern Glaciation","Urban Renewal","Global Rejuvenation","Aerial View","Screensaver","Wildfire","Minecraft Rocks!","Marine Haven","Antarctic Oasis","Goldilocks","Perfect Location","Riverside Restoration","Greenleaf Vale","Coral Renewal","Nature Finds a Way","Feeling Frosty","Rock and Stone","Final Countdown","Reduce Reuse Recycle","Perfectly Pleasant","Fauna Utopia","Okavango Delta","Grand Canyon","Green Energy","Everything the Light Touches","Call of the Void","I Would Drive 500 Tiles","Better than 4k","Caught in the Act","Wildlife Safari","Great Migration"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
