import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lovers-in-a-dangerous-spacetime.js";

test("the Lovers in a Dangerous Spacetime guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lovers-in-a-dangerous-spacetime-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lovers-in-a-dangerous-spacetime");

});

test("the Lovers in a Dangerous Spacetime guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign & Bosses","Boss Challenges","Skill Feats","Suggested Order"]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Lovers in a Dangerous Spacetime achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Romantic Getaway","First Date","Space-man's Best Friend","Bear-Knuckle Boxing","Wave Goodbye","Belt It Out","Love Has Prevailed","Clearing the Air","Perfect Date","Cooties","Dressed to the Nines","Love Is All You Need","Token of Affection","All Creatures Great and Small","Fight With Care, Bear","Underwater Expedition","SPF 1000","Exposed","Seat Warmer","Couples Dance Lessons","Generosity","Gemologist","The Spice of Life","Rocket Science","Warm Embrace","Entrapment","Overprotective","Missile Kiss"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
