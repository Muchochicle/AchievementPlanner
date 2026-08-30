import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/alien-isolation.js";

test("the Alien: Isolation guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "alien-isolation-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "alien-isolation");

});

test("the Alien: Isolation guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions & Completion",
            "Weapons & Combat",
            "Encounters, Stealth & Systems",
            "Collectibles",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Alien: Isolation achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Awake", "Welcome to Sevastopol", "A Hunt Begins", "You Shouldn't Be There.", "How Do You Feel?", "Caught in the Trap", "An Outpost of Progress", "Shock to the System", "Bait", "Hazard Containment", "A Synthetic Solution", "Consultation", "Survivor", "Ripley, Signing Off", "The Missing", "The Taken", "Archivist", "Light 'em Up", "Just out of Reach", "Use With Caution…", "Every Bullet Counts", "Self Defense", "Not a Scratch", "Retreat From Fire", "A Perfect Organism", "She's in the Vents...", "I Admire its Purity", "Back Off", "Stunned", "Build to Survive", "Mercy or Prudence?", "Mind Your Step", "Seegson Security Bypass", "Seegson Systems Expert", "Power Games", "A True Engineer", "A Record of Disaster", "Voices of Sevastopol", "Fault Detected", "100 Times Too Many", "Throwing the Switch", "The Message", "Hide. Run. Survive.", "Not the First", "Transmission", "One Shot", "Free the Torrens", "End of the Hunt", "This Should Work", "My Turn Now"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
