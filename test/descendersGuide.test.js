import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/descenders.js";

test("the Descenders guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "descenders-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "descenders");

});

test("the Descenders guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & REP",
            "Runs, Tricks & Bosses",
            "Bonus Worlds, Career+ & Tours",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Descenders achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Into The Woods", "The Rampage Begins", "The Final Challenge", "Made It", "It Begins", "Carving a Path", "Found Your Flow", "Ain't No Scrub", "Get Some Gear", "It's Getting Cluttered in Here", "Quite a Collection", "Wipeout", "Gap in the Market", "Show em who's Boss", "The training was worth it", "Represent your style", "Dialed in", "Flipping Heck", "Every Axis", "Getting Dizzy", "Speed Demon", "A True Descender", "The Golden Run", "It's Getting Hot In Here", "Hotshot", "The Ring Of Fire", "Pull My Finger", "Go The Extra Mile", "Flying Finish", "Veteran", "Bring A Friend", "Get The Gang Together", "You're Still Here?", "What A Legend", "No More Robots Amateur Tour", "Power Up Audio Amateur Tour", "Liquicity Amateur Tour", "RageSquid Amateur Tour", "No More Robots Pro Tour", "Power Up Audio Pro Tour", "Liquicity Pro Tour", "RageSquid Pro Tour"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
