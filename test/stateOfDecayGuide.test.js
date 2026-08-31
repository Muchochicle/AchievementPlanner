import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/state-of-decay.js";

test("the State of Decay guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "state-of-decay-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "state-of-decay");

});

test("the State of Decay guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Base Building",
            "Combat & Breakdown",
            "Heroes, Sieges & Lifeline",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official State of Decay achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cannibal Family Picnic", "Holy Rolling", "Survivor", "It Was Just a Police Action", "Home on the Grange", "Arrested Developments", "Gun Thugs", "Pest Control", "Watch the Birdie!", "I Can See My House From Here", "Land Usage", "Home Improvement", "I'll Be There For You", "Mercy Shot", "Come and Knock On Our Door", "Manifest Destiny", "Everywhere You Look", "Movin' On Up!", "Rule #1", "Trust Me, I'm an Expert", "Horde Hoard", "Ya Always Were An A-Hole Gorman", "Torn Apart", "Get Yo' Freak On", "The Bruce", "Double Dead", "Gotta Enjoy the Little Things", "Get Outta My Dreams", "Vehicular Zombicide", "Badass", "The Sacrifice", "The Dead Man", "The Judge", "The Survivor", "The Mercenary", "The Ninja", "The Scientist", "The Rescuer", "Wired for War", "Rucks in Trucks", "Under Siege", "Maverick", "Flugtag", "Freak Hunt", "War Never Changes", "Last Voice of Danforth"];

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
