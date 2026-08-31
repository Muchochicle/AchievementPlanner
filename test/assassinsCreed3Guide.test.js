import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-3.js";

test("the Assassin's Creed III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-3");

});

test("the Assassin's Creed III guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Present Day & Story Sequences",
            "Completion & Homestead",
            "Naval, Clubs & Frontier",
            "Collectibles & Combat Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Assassin's Creed III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rude Awakening", "Daddy Dearest", "Criss Cross", "The End is Nigh", "No Good Deed Goes Unpunished", "Mystery Guest", "How D'ya Like Them Apples", "Heroes are Born", "The Day the Templars Cried", "Tea is for Englishmen", "The Whites of Their Eyes", "Caged Wolf", "Two if by Sea", "Grim Expectations", "Difficult End", "The Sum of Truth", "Perfectionist", "An Extraordinary Man", "Patent Not Pending", "House Party", "A Complete Set", "Original Gamer", "Bring Down the House", "Kidd Gloves", "All Washed Up", "Entrepreneur, not Pirate!", "Tumblehome", "By Invitation Only", "In Good Standing", "Man of the People", "Monopoly Man", "Blowing in the Wind", "Completionist", "Multitasking", "Spit Roast", "Circus Act", "Predator", "Prince of Thieves", "Whit's fur ye'll no go by ye!", "Jager Bomb", "Magna cum Laude", "Coureur des Bois", "Eye Witness", "Fin"];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
