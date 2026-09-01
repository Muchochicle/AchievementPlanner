import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-precinct.js";

test("the The Precinct guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-precinct-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-precinct");

});

test("the The Precinct guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Gangs",
            "Patrol Duties & Progression",
            "Challenges, Races & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official The Precinct achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Thrown in the Deep End", "Cleaning the Streets", "Building a Case", "Big Trouble in Chinatown", "Unlucky, Punk", "Partner in Law", "The Secrets of the ACPD", "Ruined Their Day", "The Most Hated Person in Averno City", "Fine Work", "Book 'Em, Cordell", "There's Gonna Be a Lot of Paperwork", "What Are You in For?", "Track Star", "Self Improvement", "Maxed Out", "Making Your Mark", "A Promising Career", "What's in the Box?", "A Sharp Mind", "Taking Out the Trash", "We'll Pay for the Damage", "We're Gonna Need a Bigger Holding Cell", "Is It a Bird?", "No, It's the Law", "Employee of the Day", "Historian", "I See Everything", "Radio Responder", "Ready for the Real Thing", "Pedal to the Metal", "Fast Responder", "Coming in Clutch", "I'm Fast, I'm Very Fast", "Nowhere to hide", "Clean Slate", "Career Limiting Move", "Hidden in the Hood", "On Top Form"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
