import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hogwarts-legacy.js";

test("the Hogwarts Legacy guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hogwarts-legacy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hogwarts-legacy");

});

test("the Hogwarts Legacy guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Companion & Side Quests",
            "Collections & Exploration",
            "Combat & Spells",
            "Crafting & Progression",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Hogwarts Legacy achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/hogwarts-legacy.json).
    const officialAchievementNames = [
        "The Sort Who Makes an Entrance", "The Toast of the Town", "The Auror's Apprentice", "The Gryffindor in the Graveyard", "The Wise Owl",
        "First Class Student", "Troll with the Punches", "That's a Keeper", "Rising From the Ashes", "Grappling with a Graphorn",
        "The One Who Mastered Memories", "The Hallowed Hero", "The Hero of Hogwarts", "The Seeker of Knowledge", "The Avenging Gazelle",
        "The Defender of Dragons", "Beast Friends", "A Sallow Grave", "Flight the Good Flight", "The Good Samaritan",
        "Challenge Accepted", "Collector's Edition", "A Keen Sense of Spell", "Loom for Improvement", "The Root of the Problem",
        "The Nature of the Beast", "Going Through the Potions", "Put Down Roots", "Third Time's a Charm", "A Talent for Spending",
        "Savvy Spender", "Room with a View", "Spilled Milk", "Floo Around the World", "Followed the Butterflies",
        "Rise to the Challenges", "Merlin's Beard!", "The Intrepid Explorer", "Coasting Along", "Demiguise Dread",
        "The Ends Petrify the Means", "Raising Expectations", "Finishing Touches", "The Spell Master", "A Forte for Achievement"
    ];

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
