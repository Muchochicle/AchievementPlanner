import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grip-combat-racing.js";

test("the GRIP: Combat Racing guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grip-combat-racing-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grip-combat-racing");

});

test("the GRIP: Combat Racing guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Racing & Speed",
            "Killstreaks & Destruction",
            "Weapons & Stunts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official GRIP: Combat Racing achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Got a GRIP", "You did a thing", "Endurance", "GRIP Rookie", "GRIP Addict", "GRIP Master", "There's a first for everything", "Skill or luck?", "Skillz", "Underdog", "Bullet", "Skewered", "More than a pink slip", "Participated in a death ballet", "We've gone plaid", "Double Kill", "Triple Kill", "Quad Kill", "Penta Kill", "Vehicular homicide", "Vehicular genocide", "There are no cars left to kill, so chill", "It's a play on words. Get it?", "Playground bound", "Combat Racing Legend", "I did it my way", "Stunt double", "Death from above", "Duck hunt", "Twisted", "Dropped your load", "Serpent's kiss", "Demolition man", "Stolen victory", "Driller killer"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
