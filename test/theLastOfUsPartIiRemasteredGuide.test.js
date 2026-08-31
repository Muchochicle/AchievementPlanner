import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-last-of-us-part-ii-remastered.js";

test("the The Last of Us Part II Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-last-of-us-part-ii-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-last-of-us-part-ii-remastered");

});

test("the The Last of Us Part II Remastered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Completion",
            "Collectibles & Secrets",
            "No Return Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official The Last of Us Part II Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Every Last One of Them", "What I Had to Do", "Survival Expert", "Arms Master", "Archivist", "Master Set", "Numismatist", "Prepared For the Worst", "Mechanist", "Specialist", "Safecracker", "Sightseer", "Journeyman", "Survival Training", "High Caliber", "In the Field", "Tools of the Trade", "Tinkerer", "Apprentice", "Starter Set", "Mint Condition", "Looks Good On You", "Sharpshooter", "Put My Name Up", "Relic of the Sages", "So Great and Small", "Dig Two Graves", "You Can't Stop This", "Mixed Bag", "Become The Hunter", "Got Your Back", "Burglar", "Roll Call", "Modded", "Risk Taker", "Good Riddance", "Team Ellie", "Team Abby", "True Strength", "May Your Survival Be Long", "May Your Death Be Swift", "This Make You All Nostalgic?", "Biology Lesson", "Queen Firefly", "I Would Do It All Over Again"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
