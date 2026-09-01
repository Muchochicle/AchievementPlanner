import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monster-train-2.js";

test("the Monster Train 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monster-train-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monster-train-2");

});

test("the Monster Train 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Clan Levels & Covenants",
            "Runs, Challenges & Unlocks",
            "The Titans, The Railforged & Souls",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Monster Train 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Divinity Restored", "Throne of Gold", "Total Eclipse", "Mushroom Mayhem", "The Doctors Are In", "Demonic Domination", "Roots Run Deep", "In Their Depth", "Candlelit Champions", "Gluttony Fulfilled", "Hell's Finest", "Overkill", "Kinslayer", "Golden Gods", "War of the Heavens", "Hive Minded", "Professors of Pain", "Rightful Rulers", "Natural Order", "Magical Tsunami", "Waxen Warriors", "Master of Morsels", "Running Up the Score", "Back to Basics", "Quartermaster", "Monster of a Train", "The First but Not the Last", "Travel In Style", "Moving On Up", "Monster Master", "Rule Breaker", "Masterful Magician", "Tell Me More", "Tyrant Overthrown", "From the Stars", "Fungus Among Us", "Mad Science", "Commander At Arms", "Will It Ever End?", "Swift Demise", "A Pact in Blood", "Titans' Torment", "Out With the Old", "Malicka's Sidekick", "The Gang's All Here", "Was That Always Here?", "Wait, There's More", "Titanslayer", "Key To My Heart", "Get the Band Back Together", "Steel Resolve", "Complete Chrysalis", "Forged in Fire", "Echoes of Greatness", "The Living World", "The Titan of Souls", "Soul of Spring", "Soul of the Briar", "Soul of the Verdant End"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
