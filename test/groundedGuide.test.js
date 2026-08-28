import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grounded.js";

test("the Grounded guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grounded-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grounded");

});

test("the Grounded guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Crafting",
            "Combat, Building & Exploration",
            "Fun & Photo Mode",
            "Story & End Game",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Grounded achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "BURG.L Flipper", "Hedge Lab", "Pond Lab", "Science Rules", "Growing Pains",
        "Resourceful", "Fine Dining", "From Downtown", "Lounging Around", "Block Buster",
        "Exoskeleton", "Beefing Up", "Flavorful", "Protein Shake", "Fortified",
        "Snoopy", "Face Your Fears", "Web Master", "Friends in Low Places", "Mom Genes",
        "Sticky Hands", "Black Ant Hill Lab", "Get Yoked", "Shrinky and the Brain", "Glob Job",
        "Aim Small", "Underexposed", "Splinter Master", "Raisin Man", "Tighty Whities",
        "Assassin Assassin", "The Best Part of Waking Up", "Gotta Peep Them All", "Ominent Schmominent", "Mini Mix-a-lot",
        "Go Big", "Super Win", "A Muse Sting", "Super Dupe", "Chillax",
        "Creepy Crawler", "No More Homework!", "Royal Arrangements", "Did I Do That?", "Go Big Again"
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
