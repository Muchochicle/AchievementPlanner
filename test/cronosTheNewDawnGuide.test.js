import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cronos-the-new-dawn.js";

test("the Cronos: The New Dawn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cronos-the-new-dawn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cronos-the-new-dawn");

});

test("the Cronos: The New Dawn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Choices I",
            "Story & Choices II",
            "Boss Fights, Collectibles & Weapon Mastery",
            "Collectibles & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Cronos: The New Dawn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Flicker Of Hope", "Better Than One", "Counter-Gravity Traversal", "Do Travelers Dream Of Electric Sheep?", "Don't Let Them Merge", "Down With The Sickness", "Efficiency Discipline", "Essence Aquired", "Fire. Spreading.", "Fixing Things", "For Good And For Ill", "Forged In Fire", "Free From All The Scars", "Hit Like A Train", "I Am Free", "May It Serve You Fault-Free", "My Brother's Keeper", "Public Transport", "Punks Not Dead!", "Raging Bull", "Rapid Oxidation", "Resources Are Scarce", "Shell Not Compromised", "Spacetime Oddity", "Such Is Our Calling", "Suppressed Recomposition", "Temporal Destination Reached", "The Annihilator", "The Anvil Of The Collective", "The Archivist", "The Ascendance", "The Bigger They Are", "The Boon Of The Relics", "The Catfinder", "The Contribution", "The Orthodox", "The Pathfinder", "The Praetorian", "The Preserver", "The Sacrifice Of The Flesh", "To Bring Them Back", "To Pave The Path", "Togetherness", "Unadulterated Joy", "Welcome To The Vocation", "You Never Give Up", "The Pyromaniac"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
