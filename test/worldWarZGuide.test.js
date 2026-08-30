import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/world-war-z.js";

test("the World War Z guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "world-war-z-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "world-war-z");

});

test("the World War Z guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Campaign",
            "Zombie Kills & Environmental Feats",
            "PvP, Co-op & Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official World War Z achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Specialist", "Handyman", "There are many guns but this one is mine", "Imposing arsenal", "Escape", "Hope", "Salvation of the Motherland", "This is just the beginning", "Well, what did you achieve?", "High caution", "Strong immunity", "The most effective way", "Teamwork", "Genocide", "Sport kills", "Torero", "Can't fool me", "Chain reaction", "Toxicomaniac", "Burglar", "Friend of machines", "Explosive", "The floor is lava", "Builder", "Waste of time", "Veteran", "Winner in life", "Owner", "Walking bank", "First Aid", "What the doctor ordered", "Dispenser", "I am safe!", "Effective communication", "Madman"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
