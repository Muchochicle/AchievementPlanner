import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/viscera-cleanup-detail.js";

test("the Viscera Cleanup Detail guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "viscera-cleanup-detail-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "viscera-cleanup-detail");

});

test("the Viscera Cleanup Detail guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Cleaning Basics & Grind Feats",
            "Base Game Levels",
            "Advanced Feats & Collectible Sets",
            "Santa's Rampage, Shadow Warrior & Vulcan Affair DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official Viscera Cleanup Detail achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Spring Fresh", "Employee of the Month", "You're Fired!", "Blood Soaked", "Blaze of Glory", "Bloody Hell!", "Who's for Dinner?", "Top Brass", "Taking Out the Trash", "Ubermensch", "Pedestrian", "Janicide", "Need a Hand?", "Bins? Limbs!", "First Aid", "The Nose Knows", "Chew on This!", "Disintegrator", "The Mops Of Wrath", "Anti-Virus", "Ice-Cold Cleana", "Sandblasted", "Pine Fresh", "Surgical Sweeper", "Deep-Sea Dry-cleaning", "Operation Brownwash", "Refined", "One Mop To Rule Them All", "Pass The Torch", "Louis and Clean", "Big Banger Burnout", "Clean Freak", "Employee of the Year", "Identity Theft", "Bring the Thunder", "Master of the Beats", "Plague Bearer", "Head Hunter", "Brushed Steel", "Bushwhacked", "Bob's Legacy", "\"Red Keycard\"", "Keep It Secret, Keep It Safe", "Eggregious", "Lost in Space and Time", "Wicked Unliving", "Thursday the 12th", "Bad Dreams on Helm Street", "Harroween", "The Shimmering", "Never Put It On", "House of Honor", "Back From Whence It Came", "Not Quite a Lumberjack", "Cleanliness is Godliness", "Christmas Crisis Corrected", "Sanitized Earth", "Bloody Incompetent", "St. Nick's Boomstick", "The Red Nose Knows", "Rooks Kept", "Ballistic Weaponry", "Thunder Candle", "Head Hunter", "Santa Hats Must Die!", "Tower of Babel", "The Day the Funk Died", "Cold Storage", "Biomassive Breakdown", "Sanitary Supremacy", "Mr. Two Million Dollars", "Swept Under The Carpet", "Crystal Clear", "Pest Control", "Bleach and Clear", "Audacious Oddities", "Lair Care", "Teeth for Tunes", "Blood in the Water", "We're Gonna Need a Bigger Tank", "Double-Oh Dumbass", "Locked In", "Death From Above", "Cat-astrophe", "Orbital Bang-bardment"];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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
