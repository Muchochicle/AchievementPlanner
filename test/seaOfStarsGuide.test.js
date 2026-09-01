import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sea-of-stars.js";

test("the Sea of Stars guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sea-of-stars-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sea-of-stars");

});

test("the Sea of Stars guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story: Bosses & Beats",
            "Side Content, Endgame & the Fleshmancer",
            "Co-op Feats & the Watchmaker DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Sea of Stars achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Boss Slugged", "No, wait!", "Stretch Quest", "Now give me that!", "Dweller of Woe", "Who would have thought?", "Yo, Ho!", "Home sweet home", "Solstice Power", "Dweller of Torment", "Detritus Fallen", "And stay down, too!", "Dweller of Strife", "Fight fire with lunar", "The Warrior Cook", "Who would have thought? Part 2", "Chin up!", "Featherweight", "Enter the Artificer", "Dweller of Dread", "Lieupedant", "Clockwork Champion", "Wholesome Food", "Better off dead", "Hey, that's a reskin!", "Elder Dissed", "Glassdiator", "Free from serviduke", "Home Neat Home", "Conch Master", "Master Angler", "Living Encyclopedia", "New Garl +", "No God of mine", "Bouncy", "Lock's Myth", "What a technique!", "Gustative Completion", "To the teeth", "Well read (to)", "Measure Hunter", "Me day", "Turtle Power", "Verifying Glass", "Team Power", "Down Low", "Fishing Trip", "I'm walking here!", "Marquee Star", "Carnival Culinarian", "Warlocked", "Unrivaled Wonder", "Clockworkn't", "What doth it meanst?"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
