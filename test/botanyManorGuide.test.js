import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/botany-manor.js";

test("the Botany Manor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "botany-manor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "botany-manor");

});

test("the Botany Manor guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Growing the Plants","Completion","Manor Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Botany Manor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Windmill Wort","Fulguria","Phoenix Of The Forest","Pixie Tears","Wolfglove","Sapphire Gloom","Nightfall","Brook Chalice","Cradle Fern","Springdance Shrub","Oscilette","Fool's Emerald","Clean and Tidy","Who Needs A Plumber?","Boom","History Sleuth","Grandmother's Vault","Lockpicker","Fixer Upper","In The Bin","Mountaineer","Frogger","Crack","Quack Quack","Take A Break","Piano Woman","Let Me In!","The End","Quack Quack Quack Quack!","Botanical Researcher","Help?","Flower Arranging","Taking A Nap","Photographer","Green Thumbs","Art Lover"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
