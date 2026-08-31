import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-jedi-fallen-order.js";

test("the Jedi: Fallen Order guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-jedi-fallen-order-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-jedi-fallen-order");

});

test("the Jedi: Fallen Order guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Combat Feats",
            "Collectibles & Customization",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Jedi: Fallen Order achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Kicking Back", "Collector", "Legendary Beasts", "Feel the Force", "A Galaxy Far, Far Away", "Trust Only In The Force", "The Mantis", "A Long Time Ago", "The Obstacle is the Way", "Everything is Connected", "The Holocron Awaits", "Happy Go Wookiee", "Her Name Was Masana Tide", "Visiting Alderaan Places", "Gorgara Falls", "For A More Civilized Age", "I Knew He Was No Good", "Back At You", "Perfect Timing", "Kickoff", "Triple Take", "What Goes Around...", "Big Bang", "Don't Mess with BD-1", "Can't Touch This", "Look Out Below", "Not So Fast", "Bank Shot", "Blade Master", "Cal Got Your Tongue?", "Medical Droid", "Green Thumb", "Full House", "Data Disk", "Sabersmith", "The Full Glow-Up", "Data Collector", "Scum and Villainy", "Echo Location"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
