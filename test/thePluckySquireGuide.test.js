import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-plucky-squire.js";

test("the The Plucky Squire guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-plucky-squire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-plucky-squire");

});

test("the The Plucky Squire guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Bosses","Collectibles & Word Puzzles","Desk One-offs & Extra Modes","Suggested Order"]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official The Plucky Squire achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Story Complete","Adventure Complete","Saviour of the Glitchbirds","Art Collector","Powerful Jot","Powerful Puncher","Metal Warrior","Mighty Witch","WRETCHED RODENT!!!","Triumphant Squire","Huge Frog","Huge Bridge","Bust Buster","Cheese Mushrooms","Cheese Pillar","The Joy Of Art","Cute Little Glitchbird","Perfect Fish Grab","Optimistic Explorer","Star Walker","Challenge Mode Complete","Minigame MaxiGrump","Brawl Buster","Ironclad At Artia"];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
