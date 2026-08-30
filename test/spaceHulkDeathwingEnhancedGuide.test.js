import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/space-hulk-deathwing-enhanced.js";

test("the Space Hulk: Deathwing - Enhanced Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "space-hulk-deathwing-enhanced-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "space-hulk-deathwing-enhanced");

});

test("the Space Hulk: Deathwing - Enhanced Edition guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Skills & Genestealer Kills",
            "Multiplayer Classes & Endgame Grinds",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Space Hulk: Deathwing - Enhanced Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["For the Chapter!", "Flame Psyker", "Destruction Psyker", "Devotee", "Commandant", "Great psyker", "Killer of stalker-strain Genestealers", "Slayer of warrior-strain Genestealers", "Crusher of scythe-strain Genestealers", "Broodlord killer", "Mutant sorcerer hunter", "Bravery!", "Master of Systems", "Strong Way", "Sanctuary", "Epistolary", "Killing machine", "Phoenix light", "Chapter pillar", "Time lord", "For Honour!", "Brother In Arms", "Champion of the Lions"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
