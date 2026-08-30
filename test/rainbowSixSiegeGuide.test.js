import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rainbow-six-siege.js";

test("the Tom Clancy's Rainbow Six Siege guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rainbow-six-siege-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rainbow-six-siege");

});

test("the Tom Clancy's Rainbow Six Siege guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Operator Progression & Customization",
            "Gadgets & Objectives",
            "Combat & Weapon Feats",
            "Mastery & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Tom Clancy's Rainbow Six Siege achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Back in the Day ATK", "First Class Defense", "Old School", "Full Roster", "Jack of All Trades",
        "To the Top", "Designer", "Collector", "Just Getting Started", "Fashion Week",
        "Death From Above", "Coming Through!", "Fortress", "Camera Shy", "Boomshakalaka",
        "Can't Breach This", "It Begins...", "Brain Surgeon", "Speed Round", "Globetrotter",
        "Senseless", "Drone Destruction", "Meat Wall", "Oh Yeah!", "Don't Go in There!",
        "Wrong Number", "Woodworker", "No Trespassing", "Room Cleared", "Strength in Numbers",
        "That Was Close", "Close, but No Cigar", "Asset Protection", "Sureshot", "Ride Shotgun",
        "Full Auto", "Greaser", "Perfectionist", "Overachiever", "Bang!",
        "That Was Fast!", "Objective Driven", "Specialist", "Accessorizing", "Perimeter Secured",
        "That Bullet Pen...", "One Mind", "To the Rescue",
    ];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
