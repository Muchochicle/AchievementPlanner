import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hunt-showdown-1896.js";

test("the Hunt: Showdown 1896 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hunt-showdown-1896-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hunt-showdown-1896");

});

test("the Hunt: Showdown 1896 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bloodline & Progression",
            "Soul Survivor & Combat",
            "Exploration, Challenges & Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Hunt: Showdown 1896 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Initiation Complete", "Welcome to Tier 2", "Welcome to Tier 3", "Bloodline Peak", "Convalescent Home", "Fifty Shades of Survival", "Five-Ace Hand", "Jack of All Trades", "Master Headhunter", "Vestal Contract", "In the Footsteps of Flaxman Low", "Centennial Contractor", "Clairvoyant", "Sealed and Secured", "Easier than Mining Sulphur", "First Come, First Served", "Live to Fight Another Day", "To The Bitter End", "Simmer Down, Hothead!", "On The Nose", "Debut", "Deadeye", "Eeny, Melee, Miny, Moe", "Throw Hammer or Run", "Battering Ram", "Louisiana Fried Chicken", "Exploration Tour", "Supply Tour", "Playing Tonight: Buddy Bolden", "Trinity Of Pain", "All In A Day's Work", "7 Days Later", "Do Not Disturb", "Weapons Expert", "Regards from John L. Sullivan", "Lone Wolf"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
