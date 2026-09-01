import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/control-ultimate-edition.js";

test("the Control guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "control-ultimate-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "control-ultimate-edition");

});

test("the Control guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Side-Mission Bosses",
            "Abilities, Weapons & Combat Grinds",
            "Alerts, Expansions & Advanced Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Control achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Choose to be Chosen", "Altered Manifestations May Occur", "Aggressive Growth", "Head of Communications", "Living Archetypes", "Astral Phenomena", "Welcome to the Oldest House", "Unknown Caller ", "Directorial Override", "Old Boys' Club", "Threshold", "My Brother's Keeper", "The Face of the Enemy", "Finnish Tango", "Polaris", "Take Control", "Paranatural Powerhouse", "Insular Telekinesis", "Shifting Positions", "Psychic Occupation", "Rising Thought", "Niche Position", "One of Us", "Star Performance", "Astral Plumbing", "Familiar Methodologies", "Chief Investigator", "Vending Spree", "The Third Thing", "Workplace Recreation", "Astral Construction", "Non-Standard Issue", "Career Development", "The Importance of Synergy", "Inter-Departmental Cooperation", "FBC Crisis Solution Task Force", "Paranatural Collection", "Interdimensional Defender", "Parautilitarian", "Expert Parautilitarian", "Master Parautilitarian", "Ritualistic Thinking", "Ritual Intuition", "Discerning the Pattern", "Strange Collection", "Record Keeper", "Bureau Archivist", "Cognitive Intruder", "Unstable Matter", "Volatile Debris", "Proper Handling Procedures", "War Games", "Astral Tactician", "First On the Scene", "Crisis Management", "< Make/Unmake >", "Hostile Work Environment", "Rush Job", "Subterranean Research", "Supportive Staff", "A Strong Foundation", "Surge Protector", "Elevated Mind", "Multiple Applications", "In-depth Investigations", "Work Smarter, Not Harder", "Surge of Power"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
