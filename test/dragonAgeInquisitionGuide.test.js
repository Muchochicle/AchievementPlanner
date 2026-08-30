import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragon-age-inquisition.js";

test("the Dragon Age: Inquisition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragon-age-inquisition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragon-age-inquisition");

});

test("the Dragon Age: Inquisition guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Companions, Skyhold & Systems",
            "Combat, Difficulty & Endgame Grinds",
            "DLC & Trials",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official Dragon Age: Inquisition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Wrath of Heaven", "Opposition in All Things", "In Your Heart Shall Burn", "Wicked Eyes and Wicked Hearts", "Here Lies the Abyss",
        "What Pride Had Wrought", "On Burning Wings", "Doom upon All the World", "The Brightest of Their Age", "Beloved and Precious",
        "They Who Stand", "Speak Only the Word", "Saddled Up", "Well-Prepared", "Customized",
        "Commander", "Trailblazer", "Sharp-Eyed", "Well-Read", "Skilled",
        "Specialized", "Cavalier", "Synergized", "Botanist", "Wyrmslayer",
        "Decorator", "Belle of the Ball", "Hard Hitter", "Master Builder", "Master Alchemist",
        "Dragons' Bane", "Herald", "Inquisitor", "Stargazer", "Focused",
        "Well-Funded", "Keymaster", "Pathfinder", "Liberator", "High Commander",
        "Regal", "Persuasive", "Veteran", "Peerless", "People Person",
        "Loremaster", "Demonslayer", "Invincible", "Quartermaster", "Marked for Greatness",
        "Firestarter", "Legend-Marked", "Historian", "Winter's End", "Deep Roads Commander",
        "Giant Slayer", "Fact Finder", "Shaper of Stone", "Trial of the Hermit", "Trial of Temperance",
        "Trial of the Magician", "Trial of the Tower", "Trial of the Emperor", "Trial of the Empress", "Trial of the Fool",
        "Trial of the Lovers", "Forever Marked", "Lateral Thinker", "Coroner",
    ];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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
