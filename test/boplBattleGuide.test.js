import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bopl-battle.js";

test("the Bopl Battle guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bopl-battle-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bopl-battle");

});

test("the Bopl Battle guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ability & Physics Chaos",
            "Kills, Wins & Records",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Bopl Battle achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I AM BECOME JAKOB, DESTROYER OF FUN", "Better luck next time, Jakob!", "gg ez", "Begun, the blink war has", "Embrace the chaos", "But my lord, there is no such force", "I'm a big boy now", "Rocket science", "Sniper", "Totem pole!", "Big brain", "Boring master", "Moonwalker", "World ender", "Scientist", "BOOOOOMMM!", "LET'S FRICKIN' GOOOOO!!", "Whoops!", "Double!!", "Triple!!", "What happened there?", "You're already dead.", "2 birds 1 stone", "Built different", "Dominator", "NOICE", "Crunchy!", "GET IN MY BELLY!!"];

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
