import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hades.js";

test("the Hades guide identifies itself correctly as Hades' Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hades-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hades");

});

test("the Hades guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Escape Progress",
            "Weapons & Aspects",
            "Prophecies",
            "Companions, Codex & Collection",
            "Relationships",
            "Skill & Challenge Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 49-achievement, no-missables facts", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);
    assert.match(overview, /none of them are missable/);

});

test("every one of the 49 official Hades achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (see
    // src/data/guides/games/hades.js's header comment for the source) -
    // a regression check that no achievement was silently dropped from
    // the categorized write-up.
    const officialAchievementNames = [
        "Escaped Tartarus", "Escaped Asphodel", "Arms Collector", "Friends in High Places",
        "Escaped Elysium", "Chthonic Colleagues", "Is There No Escape?", "Death Dealer",
        "Skelly Slayer", "Well Stocked", "Three-Headed Boy", "Day-or-Night Trader",
        "Back to Work", "Blessed by the Gods", "Blood Bound", "Urge to Sing",
        "Grown Close", "River Denizens", "Home Makeover", "The Family Secret",
        "To Charon's Credit", "Had to Happen", "Tools of the Architect", "Rare Collectible",
        "Master of Arms", "Weapon of Fate", "Something From Everyone", "Hold the Onions",
        "Well Versed", "War-God's Bloodlust", "Champion of Elysium", "Musician and Muse",
        "Haste of Hermes", "Bad Call", "The Useless Trinket", "Thanks, But No Thanks",
        "Slashed Benefits", "Nyx's Mirror", "Night and Darkness", "End to Torment",
        "Infernal Arms", "Dark Reflections", "Divided by Death", "One for the Ages",
        "Harsh Conditions", "Skelly's Last Lamentations", "Thorn of Thanatos", "Complete Set",
        "Friends Forever"
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
