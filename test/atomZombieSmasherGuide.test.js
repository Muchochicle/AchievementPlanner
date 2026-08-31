import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/atom-zombie-smasher.js";

test("the Atom Zombie Smasher guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "atom-zombie-smasher-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "atom-zombie-smasher");

});

test("the Atom Zombie Smasher guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Rescue & Llama Bombs",
            "Rescue Milestones & Kill Counts",
            "Modifiers & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Atom Zombie Smasher achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Bookworm", "Zed Industrial Complex", "Long Arm", "Big Dipper", "The Operators", "The Big Stick", "Remote Control", "Wrecking Crew", "Llama-rama", "Tactical Camelid", "Multiplicity", "International Killing Machine", "Long November", "The Gold Standard", "Llamas on Demand", "Champion of the People", "Choplifter", "Rescue Raider", "Maximum Overrescue", "How Fast They Are", "Giant's Drink", "Night Owl", "The Lucky Ones", "Hypothesis Now", "The Big Leagues", "The Worm has Turned", "Spring Cleaning", "Snipe Hunt", "Street Sweeper", "Bombardier", "Powder Keg", "Watch Your Step", "They Live", "From Above", "Lit Fuse", "Hit Somebody", "The Diplomats", "Ten Thousand Hours", "Dog Days", "KringleJammer"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
