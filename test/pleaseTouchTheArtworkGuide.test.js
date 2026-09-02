import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/please-touch-the-artwork.js";

test("the Please, Touch The Artwork guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "please-touch-the-artwork-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "please-touch-the-artwork");

});

test("the Please, Touch The Artwork guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Style","Boogie Woogie","New York City","Suggested Order"]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Please, Touch The Artwork achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Visit The Style Gallery","Visit The Boogie Woogie Gallery","Visit The New York City Gallery","The First Day","The Second Day","The Third Day","The Fourth Day","The Fifth Day","The Sixth Day","The Seventh Day","Counter Composition","The Split","The Style : The End","The Diamond","White Squares","Red Squares","Family","Plazas & Buildings","Tunnels","Night","Broadway","Victory","Betrayal","Nightmare","Boogie Woogie : The End","Crossing Borders","Home No Longer","Silence","Back To Reality","I Love The Rain","Winter Is Coming","Changing Perspectives","New York City : The End"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
