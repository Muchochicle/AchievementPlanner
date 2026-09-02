import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-wandering-village.js";

test("the The Wandering Village guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-wandering-village-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-wandering-village");

});

test("the The Wandering Village guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Onbu & Monuments",
            "Survival Challenges & Research",
            "City Management & Exploration",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official The Wandering Village achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Petting Zoo", "Our Friend and Protector", "The Light of Human Intellect", "Monumental", "Spa Day", "Dry Spell", "The Wandering Metropolis", "The Wandering City", "Fore!", "Berry Good", "Master Gatherer", "Full Body Shave", "Doki Doki Waku Waku", "Strict Diet", "Agricultural Revolution", "Unfortunate Son", "Parasite", "The Enlightened Village", "Rock Bottom", "A Breath of Fresh Air", "Perfect Sight", "Age of Exploration", "Sandman", "But I'm not Hungry!", "Happy Folks", "Free Real Estate", "Modern Times", "The Soaring Village", "Globetrotter", "Food for Thought", "What's the Buzz?", "Priorities"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
