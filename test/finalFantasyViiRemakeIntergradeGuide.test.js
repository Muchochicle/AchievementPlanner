import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-vii-remake-intergrade.js";

test("the Final Fantasy VII Remake Intergrade guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-vii-remake-intergrade-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-vii-remake-intergrade");

});

test("the Final Fantasy VII Remake Intergrade guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story: The 18 Chapters",
            "Combat, Growth & Side Content",
            "Completion, Hard Mode & Superbosses",
            "INTERmission (Yuffie DLC)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Final Fantasy VII Remake Intergrade achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Master of Fate", "Onetime Gig", "Escape Artist", "Mercenary Endeavors", "Night on the Town", "Plan E", "Lights Out", "Trapped like Sewer Rats", "Reunited", "Never the Bride", "Sewer Survivor", "Paranormal Investigator", "The Collapse", "Broken Dreams", "Picking Up the Pieces", "The Pizza in the Sky", "No Appointment Needed", "Emerging from Chaos", "Destiny's Crossroads", "Warming Up", "Weakened Resolve", "Bonds of Friendship", "Staggering Start", "Music Collector", "Gotta Start Somewhere", "My First Ability", "Materia for Beginners", "My First Summon", "Biker Boy", "Heavenly Dart Player", "Cleanup Crew", "In Lockstep", "Crate Annihilator", "Say It with Flowers", "Summon Slayer", "Sultan of Squat", "Dancing Queen", "Returning Champion", "Snappy Dresser", "Dressed to the Nines", "Whack-a-Box Wunderkind", "Peeress of Pull-Ups", "Divine Gratitude", "The Johnny Experience", "Best in the Business", "Disc Jockey", "Building Character", "Staggering Feat", "Intelligence Agent", "Weapons Expert", "Master of Mimicry", "That's the Smell", "Ultimate Weapon", "Hardened Veteran", "Takes Two IDs to Tango", "Out of Darkness's Clutches", "The Road to Revenge", "Turtle-tastic", "Game, Set, Master", "Condor Queen", "Materia Maven", "Ultimate Weapon 2.0", "Corrupter of the Immaculate"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
