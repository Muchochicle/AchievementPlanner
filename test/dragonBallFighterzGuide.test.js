import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragon-ball-fighterz.js";

test("the DRAGON BALL FighterZ guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragon-ball-fighterz-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragon-ball-fighterz");

});

test("the DRAGON BALL FighterZ guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Arcade",
            "Local, Practice & Tournament",
            "Online, Arena & Currency",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official DRAGON BALL FighterZ achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Snake Way Sensei", "Extreme Gravity Guru", "Hyperbolic Heavyweight", "Care to Become the next God of Destruction?", "I am Goku, the Legendary Super Saiyan!", "Ho ho ho... What an Unexpected Thrill", "My Appetite...Is Insatiable...!", "Link Level 20", "Link Level 40", "Bye-Bye Buu", "Conversationalist", "To Test Myself, I Too Will Fight", "Ladies and Gents, We Have a Winner!", "Battle-Ready", "Practice Makes Perfect", "Don't Underestimate Earth!", "The Power to Go Beyond the Super Saiyan!", "Before Creation Comes Destruction...", "Goku Isn't the Only Super Saiyan...", "You Can't Win This...", "This Pain Will Make Me Stronger!", "My Power Level is 530,000", "Casual Combatant", "Arena Enthusiast", "Arena Expert", "Just Looking", "It's Play Time!", "Lemme Play Too!", "Stamp of Approval", "Deep Pockets", "Arena Aficionado", "Set for Life", "Millionaire", "Yo, I'm Goku!", "Farewell, Tien..."];

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
