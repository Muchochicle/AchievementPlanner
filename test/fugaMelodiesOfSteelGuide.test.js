import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fuga-melodies-of-steel.js";

test("the Fuga: Melodies of Steel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fuga-melodies-of-steel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fuga-melodies-of-steel");

});

test("the Fuga: Melodies of Steel guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Chapters","Battle & the Taranis","Life on Board","Exploration & Bonds","Suggested Order"]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Fuga: Melodies of Steel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Night Without End","The Morning Rain","Two Arabesques","Serenade for the Doll","Evenings Lit by the Burning Coals","Prelude to the Afternoon of a Faun","Moon Descends Upon the Temple that Once Was","The Wind in the Plain","The Wounded Laurel","The Council of the False Gods","Forgotten Songs","From Dawn to Noon on the Sea","Link Attacker","Perfect Harmony","Little Veteran","Prankster","Badge of the Hero","Legendary Hero","Honest Effort","Expert Team","Engineering Enthusiast","Skilled Craftsman","Fishing Enthusiast","Expert Angler","Cooking Enthusiast","Laundry Enthusiast","Gardening Enthusiast","Farming Enthusiast","Sleep Well, Grow Up Healthy","Steady Enhancement","Perfect Facility","Completion of Intelligence","Ace","Explorer Enthusiast","Explorer Expert","Comic Collector","A Real Friend","Soothing Nature","Conversationalist","True Bonds","Shared Destiny","Perfect Player","One Small Step"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
