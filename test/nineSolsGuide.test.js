import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nine-sols.js";

test("the Nine Sols guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nine-sols-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nine-sols");

});

test("the Nine Sols guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Difficulty & Optional Quests",
            "Collectibles & Miscellany",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Nine Sols achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["My Revenge Starts Here", "I'm Coming for You, Old Friend", "Reap What You Sow", "You Should Respect Your Elders", "Jail Break", "No Pain, No Gain", "Wake Up From My Sin", "Come, Sweet Death", "We Have Each Other", "Learned From the Best", "Shooting Star", "Home Sweet Home", "Fight Through Hardship", "Fight Dirty", "The Cavalry's Here", "Passing on the Torch", "Rest for the Wicked", "Found You", "Evolution", "Magical Bean", "Repurposed", "Across Time and Space", "Blessed Messages", "Do Re Mi So La", "The Warrior Within", "Treasure Hunter", "Well Prepared", "My Most Trusted Friend", "I'm Yi, I Have a Drinking Problem", "One Man Army", "What Have You Done?!", "Robo Fight!", "Stonks!", "You Bastard...", "Gimme Gimme"];

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
