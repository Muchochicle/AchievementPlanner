import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crypt-custodian.js";

test("the Crypt Custodian guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crypt-custodian-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crypt-custodian");

});

test("the Crypt Custodian guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Upgrades, Spirits & Combat",
            "Memories & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Crypt Custodian achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Very Bad Cat", "Pot Full of Spiders", "A Plan Forms...", "Right Back at Ya", "Sticky Business", "Split Vision", "Top of the Tower", "Creature Feature", "Bug Catcher", "Over the Edge", "Strange Shopkeeper", "Risky Ride", "The Band's Back Together", "Rainy Days", "Crumbling Towers", "Sealed Shut", "Very Important Pluto", "First Slot", "Ten Slots", "Twenty-Five Slots", "Fifty Slots", "Trapped Spirit", "A Small Haunt", "Halfway There", "Gangs All Back Together", "Unscathed", "Hexed Hero", "Curse Crusher", "Heavy Hitter", "Ready for Battle", "Tiny and Tidy", "Broom Basher", "Mess Master", "Pebble's Memory", "Grizz's Memory", "Mira's Memory", "Crouton's Memory", "Dagoberg's Memory", "The Little Guys' Memory", "Wailer's Memory", "Roy's Memory", "Rusty's Memory", "Skully's Memory", "Kendra's Memory", "Stocked Up", "Perfect Battle", "Solid Sweeper", "Undefeated"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
