import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battleblock-theater.js";

test("the BattleBlock Theater guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battleblock-theater-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battleblock-theater");

});

test("the BattleBlock Theater guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Finales",
            "Arena & Gift Shop",
            "Combat & Community",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official BattleBlock Theater achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cast Member", "Seasoned Performer", "Virtuoso", "Solo Star", "Coop Star", "Insane Solo Star", "Insane Coop Star", "Crowd Pleaser", "Secret Hat Hunter", "Hats Off", "The Professional", "All Around Joe", "Secret Finder", "Nail File Cake", "Black Marketeer", "Jail Breaker", "Social Butterfly", "Freedom Hero", "Armed and Dangerous", "First Time Trader", "Take A Bow", "Traitor", "Deadly Performer", "Chicken Toucher", "Melee Master", "Weapons Master", "Consolation Prize", "Prison Food", "Theater Critic", "Theater Manager"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
