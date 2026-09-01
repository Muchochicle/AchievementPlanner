import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/feist.js";

test("the FEIST guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "feist-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "feist");

});

test("the FEIST guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Trap Feats",
            "Speedrun Clears",
            "No-Death Clears",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official FEIST achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Escape artist", "Flycatcher", "Never feel lonely again", "Take a ride on the wild side", "Ward off the evil", "Who placed it there anyway?", "Strong cover", "Stockpile", "Watch your toes", "It was never meant to work like this", "Ouch!", "Troublemaker", "Barbecue", "Pure luck!", "Avenger", "Vegetarian", "Run like hell", "Good head on your shoulders", "Natural born brawler", "Hard luck", "Jump start", "Relay race", "Steeplechase", "Dancing in the rain", "Parkour", "Short break", "Brief visit", "Rollercoaster", "Raid through the ruins", "Fire walk with me", "Early Bird", "Trapper", "Allrounder", "Water strider", "Lumberjack", "Spelunker", "Intruder", "Avalanche rider", "Archaeologist", "Fire eater"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
