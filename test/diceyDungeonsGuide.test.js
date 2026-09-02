import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dicey-dungeons.js";

test("the Dicey Dungeons guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dicey-dungeons-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dicey-dungeons");

});

test("the Dicey Dungeons guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Episodes","Special Rounds","Combat Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Dicey Dungeons achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Unlock episodes","6 episodes","9 episodes","12 episodes","All episodes for one contestant","Curse of Greed","Finders Keepers","You Choose, You Lose","The Inevitability of Rust","Countdown","Losers, Weepers","Elimination Round 1","Elimination Round 2","Elimination Round 3","Elimination Round 4","Elimination Round 5","Elimination Round 6","Parallel Universe 1","Parallel Universe 2","Parallel Universe 3","Parallel Universe 4","Parallel Universe 5","Parallel Universe 6","All six bonus rounds","Hard Mode Bonus Round 1","Hard Mode Bonus Round 2","Hard Mode Bonus Round 3","Hard Mode Bonus Round 4","Hard Mode Bonus Round 5","Hard Mode Bonus Round 6","Defeat a boss with 4 Battle Axes","Use a Finale card","Do 12 damage with thrown dice","Four Prepared Slots","10 ones in a row","Win on your first turn","Defeat a boss with full health","Use limit break twice","20 damage with Dagger","40 damage in a one attack","Inflict 5 Burn","Inflict 5 Freeze","Inflict 5 Shock","Inflict 10 Poison","Inflict 30 Poison","Lock all dice","Triple Gadget","E G G","64 Max HP","Use Dragon's Tooth","Furry Dice","Complete all 36 episodes","Defeat Lady Luck"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
