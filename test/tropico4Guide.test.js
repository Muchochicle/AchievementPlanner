import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tropico-4.js";

test("the Tropico 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tropico-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tropico-4");

});

test("the Tropico 4 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Core Challenges",
            "Economy, Buildings & Edicts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Tropico 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Coup de Grace", "Iron Fist", "Elitist", "Filthy Rich", "Heavy Traffic", "Homes for Everyone", "Metropolis", "Militarist", "Paradise Island", "Top Exporter", "Tropican Fiesta", "God Complex", "Dictatorship for Dummies", "Tropico VS The World", "Scapegoat", "The Mastermind", "On Top of the World", "National Agenda", "Domestic Agenda", "Foreign Agenda", "War on Crime", "The Full Monty", "You are Fired!", "Your Lucky Day", "The Golf Balls Solution", "Year Of the Dragon", "Old Faithful", "Tornado Valley", "Modern Agriculture", "Head for High Ground", "Building Blues", "The Power of the Atom", "Nuclear Future", "Made In China", "Smells Like Chemistry", "Mona Llama", "Special Taxes", "The Rumors of my Death...", "It's a Trap!", "Theme Park", "Prepared For Everything", "Past and Present", "Competent", "Specialist", "Expert", "Foreign Cuisine", "IMPORTant business", "Kill Juanito", "Instant Construction", "Curse of the Llama", "Megalopolis", "Touristico", "Generalissimo", "Domestic Affairs", "Foreign Affairs", "Tropico for the Tropicans", "Down with the Tyrant", "The Big House", "From Rags to Riches", "Philanthropist", "Crisis Measures", "The Conclave", "Averted World War 3", "Zeitgeist", "Office Space", "Better Than Tenements", "Capo Di Tutti Capi", "Going Green", "Heaven On Earth", "A Better Tourist Trap"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
