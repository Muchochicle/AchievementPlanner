import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/life-is-strange-before-the-storm.js";

test("the Life is Strange: Before the Storm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "life-is-strange-before-the-storm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "life-is-strange-before-the-storm");

});

test("the Life is Strange: Before the Storm guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episode 1: Awake",
            "Episode 2: Brave New World",
            "Episode 3: Hell Is Empty & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Life is Strange: Before the Storm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Recreational Vandalism", "I See U Saw", "The Last Unicorn", "Home Unimprovement", "Rock Idol", "Dramatis Personae", "Mulligan Stew", "Pioneer Spirit", "Face Your Anger", "Lucid Writing", "Awake, Dear Heart", "Stagehandwriting", "Radical Piratical", "Feels on Wheels", "Canon Wall", "Wishlist", "Tread Harshly", "Friendly Forest Friends", "Permanent Record", "Vanity Fare", "Creature Feature", "O, Wonder!", "American Graffiti", "Extra Credit", "Peer Review", "Monthly Masterpiece", "Spit Take", "Venting Machine", "Hello Nurse", "A Penned Appendage", "Drunk Drawer", "Messed Up", "All the Devils are Here", "Before the Storm"];

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
