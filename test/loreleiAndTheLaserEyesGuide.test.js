import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lorelei-and-the-laser-eyes.js";

test("the Lorelei and the Laser Eyes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lorelei-and-the-laser-eyes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lorelei-and-the-laser-eyes");

});

test("the Lorelei and the Laser Eyes guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Manor & Its Stories",
            "Riddles & Collections",
            "Mazes, Music & the Truth",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Lorelei and the Laser Eyes achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tail Wagging Society Prize", "Strigiformes Award for Best Listener", "Coat Rack Connoisseur of the Year Award (Honorable Mention)", "Herzmuller’s Computing Prize", "Entomologist of the Year", "Tropaeum Ex Fraternitate Oculi", "Miss Knowledgeable of the Year", "S.C. Bolt’s Genius Award", "Super Gamer of the Month", "Simogo Consumer of the Year Award", "The Black Arts Coffee Club Member of the Month", "JW Arkitektkontor Employee of the Month", "Ilona Zevon & Milton Foley Grand Prize", "Cutter of the Week", "Theseus Award", "Euterpe Prize of the Year", "The True American Award", "Augenwaldburg Race Winner", "Nobelle Prize in Anthropology or Sociology", "Totte Ahla Sanningén Prize"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
