import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crypt-of-the-necrodancer.js";

test("the Crypt of the NecroDancer guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crypt-of-the-necrodancer-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crypt-of-the-necrodancer");

});

test("the Crypt of the NecroDancer guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base-Game Oddities",
            "Cadence: Zones & All Zones",
            "The Base-Game Roster",
            "Base-Game Challenge Runs",
            "AMPLIFIED DLC",
            "SYNCHRONY DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Crypt of the NecroDancer achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/crypt-of-the-necrodancer.json). Crypt of
    // the NecroDancer has no Steam-hidden achievements at all.
    const officialAchievementNames = [
        "Bat Trick", "Merchanticide", "Heartthrob", "I love gooooooold!", "In The Zone",
        "In The Zone (2)", "In The Zone (3)", "So Hardcore!", "You Don't Miss a Beat, Do You?", "A Beatless Beatdown",
        "Tachycardia", "Two Can Tango!", "Vow down!", "Carpe Diem", "Speed Demon",
        "Flawless Victory!", "Peace Out", "Bombs Away!", "Lute that Loot", "Leaps and Bounds",
        "Impossible, Right?", "Mostly Harmless", "8Ball", "Friendly Fire", "Undeadly",
        "Polyamorous", "Lowest of the Low", "In The Zone (4)", "Bat to the Bone", "In The Zone (5)",
        "No I Won't Back Down", "Hard Act to Follow", "A Haunting Performance", "Mix Master", "What Just Happened?",
        "Mode Master", "A Cut Above", "I Love Ewe", "Keeps on Ticking", "Storybook Ending",
        "Like a Bat Out of Hell", "Golden Loot", "ElecTrick", "Very Polyamorous", "Klari Clear",
        "Enchantée, Chaunter", "Suzuper", "Smitemaster", "Doppelgänger", "Pandaemonium",
        "Étude", "En Passant", "Virtuosoul", "Tachyarrhythmia", "Fully Loaded",
        "Family Trip", "Fool's Mate", "Destructive Interference", "Ghost in the Pot", "Sunk Cost",
        "Polyphonic"
    ];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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
