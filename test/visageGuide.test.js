import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/visage.js";

test("the Visage guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "visage-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "visage");

});

test("the Visage guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Chapters & Endings","Mementos & Collectibles","Secrets & Oddities","Suggested Order"]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Visage achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Matryoshka doll","Matryoshka dolls master","First reaction","Chapter: Lucy","Special recipe","Novice electrician","Dance, dance","George's memento","George's memento master","The Neighbors","The Neighbors master","Gearing up!","Chapter: Dolores","Void","Family reunion","Dwayne's memento","Dwayne's memento master","Hot chocolate","Smile!","10 on the 10th","Mirror mask","Mirror mask master","Psychological evaluation","Easy way out","Gotcha, you little...","Special gift","Chapter: Rakan"];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
