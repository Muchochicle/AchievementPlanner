import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hades-2.js";

test("the Hades II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hades-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hades-2");

});

test("the Hades II guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Region Clears & Escapes",
            "Bosses & Combat Milestones",
            "Weapons, Aspects & Arcana",
            "Gods, Relationships & the Crossroads",
            "Endgame, True Ending & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Hades II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Witch of the Woods", "Witch of the Depths", "Witch of the Plains", "Witch of the Abyss", "Witch of the Outskirts",
        "Witch of the Waters", "Witch of the Mountains", "Witch of the Clouds", "So Mote It Be", "Soothing Soak",
        "Catch of the Night", "Ambrosia for Two", "Close Comrades", "Hand of the Fates", "Mind for Magick",
        "Breadth of Knowledge", "Unassailable Insight", "The Arms of Night", "The Unseen Sentinel", "Familiar Confidant",
        "Animal Whisperer", "Beast Master", "Giving Back", "Sentimental Value", "Infinite Possibility",
        "Improbable Outcomes", "Chaos in Hell", "Natural Talent", "Unfinished Business", "Haunted by the Past",
        "Soundest of Sleepers", "Silk and Spitefulness", "Voice and Vanity", "Denizens of the Depths", "Unrivaled Prowess",
        "Sword of the Night", "Arcana of the Ages", "Bearing Dark Gifts", "Born to Win", "Fair Fight",
        "Unfamiliar Forms", "Sheep's Clothing", "Breaking Up the Band", "Dressed to Kill", "Behold Night's Champion",
        "Mercy, Night's Executioner", "Elysian Glory", "Death to Chronos", "Golden Age", "Goddess of Nightmares",
    ];

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
