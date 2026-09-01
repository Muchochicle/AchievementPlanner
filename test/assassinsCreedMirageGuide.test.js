import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-mirage.js";

test("the Assassin's Creed Mirage guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-mirage-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-mirage");

});

test("the Assassin's Creed Mirage guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: The Order of the Ancients",
            "Tools, Stealth & Combat Feats",
            "Notoriety, Escape & AlUla",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Assassin's Creed Mirage achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Master Thief of Anbar", "La shay'a waqi'un mutlaq", "The Blood of a Ghoul", "The Blood of a Demon", "The Blood of an Enchantress", "The Blood of a Spymaster", "The Head of the Snake", "Bal kullun mumkin", "Serving the Light", "Self-Improvement", "Cutting Edge", "Thick Skin", "Fashion Statement", "Masquerader", "Treasure Seeker", "Potion Collector", "Fearless", "Bird of Prey", "Explorer", "Defender of the People", "Crossing Paths", "Sage", "Riddle Me This", "Tools of the Trade", "Eagle's Eye", "Headhunter", "Sleep Tight", "Ambush", "Up in Smoke", "Attention Seeker", "The Hands of a Thief", "You Snooze, You Lose", "Curio Collector", "Hoarder", "Dawn and Dusk", "Patron of the Arts", "Patron of Sell-Swords", "Patron of Industry", "Blade in the Crowd", "Surprise!", "The Shadow and the Flame", "Silencer", "Notorious", "Poster Boy", "Spread the News", "Unstoppable", "Eagle's Will", "Gifted Escapist", "A True Hidden One", "Street Cleaner", "Lost and Found", "Once Upon a Time", "Pro Musician", "If I Recall Correctly", "Perfect Memory", "Playback", "Taste Your Own Medicine", "Like a Local", "Make a Break", "Turn the Page", "Give it the Slip"];

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
