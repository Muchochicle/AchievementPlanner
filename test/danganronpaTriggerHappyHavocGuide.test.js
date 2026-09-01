import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/danganronpa-trigger-happy-havoc.js";

test("the Danganronpa: Trigger Happy Havoc guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "danganronpa-trigger-happy-havoc-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "danganronpa-trigger-happy-havoc");

});

test("the Danganronpa: Trigger Happy Havoc guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Chapters",
            "Report Cards, Collectibles & Trials",
            "School Mode, Skills & Performance",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Danganronpa: Trigger Happy Havoc achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["From Zero to Hero", "One Is the Loneliest Number", "Two of a Kind", "Three's a Crowd", "Four by Gore", "Five Alive", "All's Well That Ends...Umm...", "The Devil Wears a High School Uniform", "The Game Hungers", "Rebel Without a High School Degree", "Almost Almost Famous", "Lost in Scanslation", "The Sixth Nonsense", "Psychic", "Hope's Peak Confidential", "Mystic Donut", "Strangers in a Brain", "Lovesport", "The French Disconnection", "Memoirs of a Fashionista", "GoodFellows", "Mr. Know-It-All", "Nine Coins, Nine Purses, Nine Bears", "Ooh, For Me?", "Seriously, You Shouldn't Have", "School's Out For Summer", "School's Out Forever", "Skilling 'Em Softly", "Skill or Be Skilled", "Ghostface Skillah", "Hey, Big Spender", "Rogue's Gallery", "You Must Acquit", "What's a Mistrial?", "The Color of Television", "Tuned to a Dead Channel", "Not From Concentrate", "Despair's Last Reward"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
