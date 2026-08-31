import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/call-of-duty-black-ops-2.js";

test("the Call of Duty: Black Ops II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "call-of-duty-black-ops-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "call-of-duty-black-ops-2");

});

test("the Call of Duty: Black Ops II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Veteran, Challenges & Strike Force",
            "Story Outcomes & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Call of Duty: Black Ops II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No Man Left Behind", "Gathering Storm", "Shifting Sands", "Driven by Rage", "Waterlogged", "What Happens in Colossus...", "False Profit", "Deep Cover", "Sinking Star", "Late for the Prom", "Death from Above", "Old Fashioned", "Futurist", "Giant Accomplishment", "Mission Complete", "Just Gettin' Started", "Singapore Sling", "Desert Storm", "Defender", "Black Ops II Master", "Art of War", "Blind Date", "Family Reunion", "Hey Good Looking", "Showdown", "Dirty Business", "Ship Shape", "Dead or Alive", "Ultimate Sacrifice", "Good Karma", "High IQ", "Back in Time", "Man of the People", "Gun Nut", "Ten K"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
