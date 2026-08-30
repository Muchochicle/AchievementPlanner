import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ratropolis.js";

test("the Ratropolis guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ratropolis-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ratropolis");

});

test("the Ratropolis guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Leaders, Victories & Waves",
            "Events & Card Feats",
            "Endless Waves, Pollution & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Ratropolis achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Wanderer", "Trading City", "Military City", "Metropolis", "Science City", "Fair And Square", "Millionaire", "Great Leader", "Slayers", "Rats Rats Rats", "Hard Worker", "Lazybones", "General", "Builder", "Scientist", "Let's Keep It", "Life of Bureaucrat", "Old Rat's Wisdom", "Game of Thrones", "Follow Me", "Time to Pray", "Strongest Rat", "Quack-Quack", "Give Me All ", "Shiny Chest!", "Mafia", "I'm in Charge", "Under the Shade", "Calculator", "Scrooge", "Nightmare", "Hell", "Torment", "Shaman", "Religious City", "Navigator", "Harbor City", "World's End", "Oops", "Level Up", "Why did you do that?", "Madness", "Wasteland", "Plaguelands", "The Rat God", "Glory"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
