import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/door-kickers.js";

test("the Door Kickers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "door-kickers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "door-kickers");

});

test("the Door Kickers guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Milestones",
            "Campaigns, Leveling & Feats",
            "Early Achievements & Class Unlocks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Door Kickers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Just one more", "Manhunt", "Hands in the air", "Door Kicker", "All hell breaks loose", "Keep Walking", "Special Weapons and Tactics", "Elite Task Force", "Textbook Material", "Strategist", "Lone Wolf", "Quick Thinker", "Total Luck", "Community Server", "Drug Buster", "Cell Crusher", "Hardcore", "We know it all", "I've seen it all", "We've seen it all", "We unlocked it all", "Lifesavers", "The Daimaju", "Counter Terrorists Win", "Blind as a bat", "Hunker down!", "Swift and Deadly", "Shipboarder", "Against the Odds", "Enough for a Spark", "Enough for a Union", "I'm getting good", "Every life matters", "First time is easy", "Lucky guy", "They can do it", "He can do it", "I'm doing it", "Now I have a machinegun", "No door too strong", "Better be Adamantium", "All around capability", "Persistence is key"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
