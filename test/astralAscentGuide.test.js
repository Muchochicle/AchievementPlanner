import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/astral-ascent.js";

test("the Astral Ascent guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "astral-ascent-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "astral-ascent");

});

test("the Astral Ascent guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Run Progression",
            "Combat Feats",
            "The Garden",
            "The Twelve Zodiacs",
            "Star Guardians",
            "Path of Destinies & Endings",
            "The Master",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 89-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /89 Steam achievements/);

});

test("every one of the 89 official Astral Ascent achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/astral-ascent.json).
    const officialAchievementNames = [
        "Perseverance", "Scorching Heat", "Deep Water", "Magnetic Storm", "Almost out...",
        "Precious Belongings", "Optimal Affinity", "Astral Wish", "Astral Luck", "Zodiac Strength",
        "Jackpot", "Impressed Zodiacs", "Maximized Friendship", "Wealthy Prisoner", "Galaxy Owner",
        "Key Master", "Moon Testimony", "Sun Testimony", "Sneaky Ally", "Guardian Angel",
        "Time for Oneself", "Yalees Savior", "Multi-Classed", "Lost Spirits", "Celestial Support",
        "Slippery Hero", "A Ton of Damage", "Practice makes perfect", "Where it all started…", "Smiley Face",
        "Mysterious Face", "Knightly Face", "Stellar Face", "Friendly Face", "Stylized Face",
        "The Little Brother", "The Gifted Artist", "Plants Infused", "From the Stars", "Arsenal",
        "Synesthesia", "Grand Library", "Halfway Legend", "Shhh…", "Taurus",
        "Virgo", "Capricorn", "Aries", "Sagittarius", "Leo",
        "Pisces", "Scorpio", "Cancer", "Libra", "Aquarius",
        "Gemini", "The Master", "Unleashed Taurus", "Unleashed Virgo", "Unleashed Capricorn",
        "Unleashed Aries", "Unleashed Sagittarius", "Unleashed Leo", "Unleashed Pisces", "Unleashed Scorpio",
        "Unleashed Cancer", "Unleashed Libra", "Unleashed Aquarius", "Unleashed Gemini", "Defeat The Master",
        "Star Guardian Pegasus", "Star Guardian Lupus", "Star Guardian Draco", "Star Guardian Hydra", "Star Guardian Monoceros",
        "Star Guardian Sculptor", "Bane of the Star Guardians", "Sova’s Secret Plan", "Bending Destiny", "Undecided Power",
        "Pushing Limits", "Beyond Horizon", "Making the Impossible", "The Silver Scout", "Escaping Destiny",
        "Time for Prosperity", "Star Guardian Bodyboulder", "Star Guardian Praxis", "Star Guardian Tasmos"
    ];

    assert.strictEqual(officialAchievementNames.length, 89, "sanity check on this test's own reference list");

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
