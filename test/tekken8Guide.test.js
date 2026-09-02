import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tekken-8.js";

test("the TEKKEN 8 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tekken-8-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tekken-8");

});

test("the TEKKEN 8 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Match Wins & Combat Mechanics",
            "Rank Promotions",
            "Story Mode: The Dark Awakens",
            "Character Episodes & Arcade Battle",
            "Arcade Quest & Ghost Battle",
            "Practice & Miscellaneous",
            "Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official TEKKEN 8 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Just relax. You can do it.", "I'll give you a rematch anytime, guv.", "Please don't tell my father.", "Excellent!", "That was too easy!", "Outstanding!", "Behold, the fruits of my labors.", "Let the blistering sands consume you.", "(That's how a true champion fights!)", "What a rush!", "Your fate is already decided.", "Fear my wrath.", "You think you can stop me?", "Under the divine protection of Sirius.", "Now it's time to destroy you.", "Sorry for getting rough back there.", "Resuming mission.", "Come on, just try and kill me.", "...", "(You never learn.)", "How do you take your coffee?", "My moves are way faster than yours.", "I aspire to greater heights!", "I'm actually pretty strong.", "There's no way you can stop me.", "Come, humanity! Unleash the dogs of war! ", "You aren't alone anymore.", "I'll live on, together with my sins.", "Hope", "Despair", "I would do well to follow your example.", "This should be fun.", "Power isn't everything.", "I'll put an end to this.", "Congrats on the victory!", "A new star rising in the world of TEKKEN!", "Get ready for the next battle!", "The fists reveal the fighter.", "All is vanity.", "(Initiating Analysis)", "Godfather", "No pain, no gain!", "Do you want to learn Marshall Arts?", "(This one's in the bag!)", "You're in for it now!", "Your money is my money! ", "A fight is about survival."];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
