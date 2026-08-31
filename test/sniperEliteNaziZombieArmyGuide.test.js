import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-nazi-zombie-army.js";

test("the Sniper Elite: Nazi Zombie Army guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-nazi-zombie-army-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-nazi-zombie-army");

});

test("the Sniper Elite: Nazi Zombie Army guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Solo Kills & Feats",
            "Chapter Completions & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Sniper Elite: Nazi Zombie Army achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We got this by the ass!", "I’m coming to get you Barbara!", "I will not negotiate with the Undead", "..My BOOMSTICK!", "Like a drunk who's lost a bet.", "Explosive Personality!", "You got rid of those stiffs yet?", "Resurrect this!", "Groovy!", "The Preacher says BOOM!", "Don't mention the Z word!", "Resurrection Day", "Play it Thule", "The pen is mightier than the sidearm", "No more room in hell", "Send...more...Paramedics..", "I have given them the last Reichs.", "They're all messed up", "I ran it under a cold tap.", "Soul survivor", "Your blood pressure is zero over zero.", "You’ve got red on you", "Good, bad, I'm the guy with the gun.", "Nazi Army Gold", "Bottles of Blood", "Have you come in contact with...the infected?"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
