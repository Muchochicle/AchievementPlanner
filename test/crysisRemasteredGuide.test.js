import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crysis-remastered.js";

test("the Crysis Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crysis-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crysis-remastered");

});

test("the Crysis Remastered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Difficulty & Objectives",
            "Combat Feats & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Crysis Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Little Trouble Parking", "Easy Darlin'", "You Knew, Didn't You?", "Very Strange Readings", "Livin' Up To Your Name", "Pro-Aircraft", "Enjoy The Fireworks", "Empty Platform", "You're On Your Own", "One Careful Owner", "Going Underground", "It's On Like General Kyong", "I'm Coming Home", "Expedition Team", "I'm A Marine, Son!", "Strickland Would Be Proud", "Close Encounter", "Delta: Act I", "Delta: Act II", "Delta: Act III", "Crysis Controlled", "Cool In A Crysis", "Following Orders", "Without Question", "Perfect, Soldier!", "No Fly Zone", "Tank Buster", "This Is My Rifle", "Special Forces", "Team Raptor", "Long Distance Relationship", "Weapons Master", "Something For Every Occasion", "Choke Hold", "Marathon Man", "Nano Ninja", "Knock-off Knockout", "Zoology", "Keen Observer", "Catch This!"];

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
