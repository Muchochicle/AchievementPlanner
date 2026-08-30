import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/splinter-cell-blacklist.js";

test("the Tom Clancy's Splinter Cell Blacklist guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "splinter-cell-blacklist-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "splinter-cell-blacklist");

});

test("the Tom Clancy's Splinter Cell Blacklist guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions & Difficulty",
            "Playstyles, SMI & Skill Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Tom Clancy's Splinter Cell Blacklist achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Asset Retrieval", "Ambush Escaped", "American Consumption Prevented", "Terrorist Factor Turned", "Tracker Placed", "Iranian Intel Retrieved", "American Freedom Averted", "Infiltration/Interrogation", "Paladin Restored", "American Fuel Engaged", "4th Echelon Status Confirmed", "4th Echelon Commendation", "4th Echelon Officer", "C&C Optimized", "Tactical Style: Ghost", "Tactical Style: Panther", "Tactical Style: Assault", "Evidence Concealed", "No Kill Option Engaged", "Distraction Tactician", "Tri-Rotor Functionality", "Enhanced Lethality Demonstrated", "Hostile Shield Secured", "Hostages Secured", "Mission Footprint Zero", "Hunter Operator", "Infiltration Operator", "Extraction Operator"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
