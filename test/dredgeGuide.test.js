import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dredge.js";

test("the Dredge guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dredge-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dredge");

});

test("the Dredge guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Four Relics & Two Endings",
            "Fishing Milestones",
            "Trading & Research",
            "The Ship",
            "The Eldritch Relics",
            "Exploration & Side Content",
            "The Pale Reach",
            "The Iron Rig",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Dredge achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dredge.json).
    const officialAchievementNames = [
        "Lifted From the Deep", "Tangled in This Web", "Trapped by These Walls", "Lives for Profit", "Cash for Gold",
        "Unwanted", "Careless Harvesting", "Master Angler", "The Key", "The Secret",
        "The Bond", "The Chains", "The Moment", "Unshackled", "Sated",
        "Hull: Improved", "Hull: Refined", "Hull: Advanced", "Perfect Packing", "Feeling Prepared",
        "Aberration Attractor", "From the Fog", "Prey Sighted", "Mixed Results", "Cruel Heat",
        "Dimensional Bypass", "Banisher", "Unsustainable Fishing", "Providence", "Safe Havens",
        "Servant of the Shrines", "Researcher: Rods", "Researcher: Nets", "Researcher: Pots", "Researcher: Engines",
        "Swift Reaper", "No Time to Linger", "Light up the Night", "Introductions", "From the Depths",
        "Polar Angler", "Cold Corruptions", "Feeding Time", "Under The Ice", "Frozen Favors",
        "Icebreaker", "Fresh Fish", "From The Black Depths", "Ancient Angler", "Primordial Deviations",
        "Missing Shipment", "The Iron Ruin", "Rig Architect", "Remedial Apparatus", "Dark Custodian",
        "Hull: Industrial", "Exotic Exemplar", "Enhanced Abilities", "Shadowed Splashes", "The Gleaming Goliath"
    ];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
