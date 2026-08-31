import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metaphor-refantazio.js";

test("the Metaphor: ReFantazio guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metaphor-refantazio-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metaphor-refantazio");

});

test("the Metaphor: ReFantazio guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Archetypes",
            "Battle & Skill Feats",
            "Followers, Exploration & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Metaphor: ReFantazio achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Traveller", "Coronation of the King", "Allies United", "Out of the Fire", "Calamity Averted", "Dark Truths", "On Knife's Edge", "History Untold", "Mission Accomplished", "Skybound Hope", "Closing the Book", "Star Shatterer", "Archetype Adept", "Archetype Hero", "His Majesty", "United Front", "Teamwork Makes the Dream Work", "For Science!", "Summon Mask Time", "Stunning!", "Tactical Strike", "What's Yours is Mine", "Money is Power", "Stray Elements", "No Mercy", "All That Glitters", "Hey, Listen!", "Shake on It", "Hearts as One", "King of Cuisine", "Monster Hunter", "Help Anyone in Need", "Blessed Power", "Shrewd Shopper", "Globetrotter", "Worldly Wisdom", "Vista Viewer", "Debate Me", "Coliseum Champion", "Sword Surfer", "Chef in Training", "Entrusted", "At Your Own Risk", "Bookworm"];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
