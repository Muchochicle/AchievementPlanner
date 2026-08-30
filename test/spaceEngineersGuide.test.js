import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/space-engineers.js";

test("the Space Engineers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "space-engineers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "space-engineers");

});

test("the Space Engineers guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Sandbox & Survival Feats",
            "Scenario Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Space Engineers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Crayon Box", "Declare War", "I've Got Present For You", "Lock And Load", "Monolith", "Number 5 Is Alive", "Personality Crisis", "Smile And Wave", "Win-Win", "Death Wish", "Explorer", "Giant Leap For Humankind", "Going Green", "Lost In Space", "Master Engineer", "The Bigger They Are", "The Harder They Fall", "The Story Begins", "Promoted Engineer", "Engineering Degree", "Planetesphobia", "It Takes But One", "I See Dead Drones", "Bring It On", "I'm Doing My Part", "Scrap Delivery", "Joint Operation", "Millionaire Club", "The friend of the factions", "Playing it cool"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
