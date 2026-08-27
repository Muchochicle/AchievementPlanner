import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/into-the-breach.js";

test("the Into the Breach guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "into-the-breach-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "into-the-breach");

});

test("the Into the Breach guide has all 12 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Victory & Campaign Progress",
            "Meta Progression",
            "Single-Island Challenges",
            "Pilots",
            "The Harder Challenge Runs",
            "Rift Walkers & Steel Judoka",
            "Rusting Hulks & Flame Behemoths",
            "Zenith Guard & Frozen Titans",
            "Blitzkrieg & Hazardous Mechs",
            "Random, Custom & the Advanced Edition Squads",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Into the Breach achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/into-the-breach.json).
    const officialAchievementNames = [
        "Victory", "Hard Victory", "Adaptable Victory", "Squads Victory", "Complete Victory",
        "Emerging Technologies", "Friends in High Places", "Immovable Objects", "Humanity's Savior", "Perfect Strategy",
        "Perfect Island", "The Defenders", "Untouchable", "Backup Batteries", "Good Samaritan",
        "Field Promotion", "Best of the Best", "Come Together", "I'm getting too old for this...", "Distant Friends",
        "Sustainable Energy", "Engineering Dropout", "Chronophobia", "There is No Try", "Trusted Equipment",
        "Watery Grave", "Ramming Speed", "Island Secure", "Unbreakable", "Unwitting Allies", "Mass Displacement",
        "Overpowered", "Stormy Weather", "Perfect Battle", "Quantum Entanglement", "Scorched Earth", "This is Fine",
        "Get Over Here", "Glittering C-Beam", "Shield Mastery", "Cryo Expert", "Trick Shot", "Pacifist",
        "Chain Attack", "Lightning War", "Hold the Line", "Healing", "Immortal", "Overkill",
        "Loot Boxes!", "Lucky Start", "Change the Odds", "Mech Specialist", "Class Specialist", "Flight Specialist",
        "Hold the Door", "No Survivors", "Powered Blast", "Spider Breeding", "Working Together", "Efficient Explosives",
        "Stay With Me!", "Let's Walk", "On the Backburner", "Boosted", "Feed the Flame", "Maximum Firepower",
        "Unstable Ground", "Core of the Earth", "Miner Inconvenience"
    ];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
