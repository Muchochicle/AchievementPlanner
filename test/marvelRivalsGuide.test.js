import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvel-rivals.js";

test("the Marvel Rivals guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvel-rivals-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvel-rivals");

});

test("the Marvel Rivals guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "General & Progression",
            "Hero Challenges - Part 1",
            "Hero Challenges - Part 2",
            "Hero Challenges - Part 3",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Marvel Rivals achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Thumbs Up", "Vicious Vines", "You Do You", "Rising Star", "Onslaught!",
        "Smoke Screen", "Go Get 'Em, Guardians! ", "Family Ties", "Inevitable！", "Assemble!",
        "Master of Modes", "Smart Is New Smash", "To Me, My X-Men!", "God of Treachery", "Perilous Portal",
        "Victory in Bloom", "West Coast, Best Coast", "Justice for All! ", "Terror of the Ten Realms", "Symphony of Light and Dark",
        "King of the Dead", "Demon's Roar", "Punishment of the Moon", "Multiverse Tour", "\"Ahhh, those tiny claws!\"",
        "Deadly Bites", "Flawless Design", "Grip of Hunger", "Spider-Sense Tingling!", "Homo Superior",
        "No More Mutants", "Divine Justice", "Arm Race", "Watch Your Step!", "Vengeance for the Milano!",
        "Aquatic Assault", "Snack Attack!", "Way of the Butterfly", "Rage Uncaged", "Might of Fuxi",
        "Bouncing Ideas", "Lady of the House", "Hot & Trending", "What Time Is It?", "Schism from Within",
        "No More Strings", "Wish Upon a Phoenix", "Old Haunts", "Hand of Heven",
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
