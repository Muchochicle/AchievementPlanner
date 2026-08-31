import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-2042.js";

test("the Battlefield 2042 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-2042-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-2042");

});

test("the Battlefield 2042 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & All-Round Mastery",
            "Specialist Gadget Feats",
            "Combat, Vehicle & Support Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Battlefield 2042 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Adapt and Overcome", "Making Dunn Proud", "Luck of the Irish", "Dead in their tracks!", "Command and Conquest ", "Escape Artist", "Pack Rat", "The Winner Takes It All", "Universal Soldier", "Gun Master", "Wheeled Warrior ", "Jack of all Trades", "Aerial Destroyer", "A bird?  A plane?", "Going Places", "Doze this", "B gun's dry", "Doctor Falck in the house", "Happy birthday", "Squad Wiper", "War machine", "I'm Five by Five, B", "Tool Time", "Wrecking Crew", "No-one gets left behind", "Thank you, Santa", "Clean Exit", "Foot Soldier", "CQC Specialist", "Deadshot", "One Careful Owner", "Good Company", "Showoff", "Burnout"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
