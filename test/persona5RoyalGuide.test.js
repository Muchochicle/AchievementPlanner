import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/persona-5-royal.js";

test("the Persona 5 Royal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "persona-5-royal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "persona-5-royal");

});

test("the Persona 5 Royal guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Confidants & Social Life",
            "Combat, Mementos & the Velvet Room",
            "Tokyo Activities & Part-Time Jobs",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Persona 5 Royal achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Phenomenal Phantom Thief", "Castle of Lust: Seized", "Museum of Vanity: Repossessed", "Bank of Gluttony: Cleaned Out", "Pyramid of Wrath: Plundered",
        "Spaceport of Greed: Obliterated", "Casino of Jealousy: Bankrupted", "Cruiser of Pride: Capsized", "The Thorough Trickster", "Take Back the Future",
        "The Path Chosen", "Spirit of Rebellion", "Phantom Thieves: Assemble!", "One Step at a Time", "A Most Studious Disguise",
        "Pure Perfection", "Tokyo Tourist", "My Closest Partner", "True Confidence", "Awakening the Phantom Thieves",
        "I am Thou...", "Tactical Teamwork", "Let's Blow It Up", "You'd Better Hang On!", "Technician",
        "Talent Thief", "The Purpose of a Thief", "It's Showtime!", "Jose's Favorite Customer", "The Phantom Philatelist",
        "The Search for Power", "The Deviated Cognition", "Unsurpassed Rebel", "A Deadly Debut", "Efficient Executioner",
        "Intensive Training", "Success Built on Sacrifice", "Accident-Prone", "A Grand Experiment", "Leblanc Buffer",
        "Punch That Clock!", "Batter Up!", "Getting the Vapors", "Easy Money", "Going Against the Crane",
        "Trash Into Treasure", "Dartslinger", "A Hustler's Journey", "A Night in Kichijoji", "A Serene Experience",
        "Professional Modification", "Angler's Debut", "Master of Akihabara",
    ];

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
