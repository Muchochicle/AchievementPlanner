import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hollow-knight-silksong.js";

test("the Silksong guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hollow-knight-silksong-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hollow-knight-silksong");

});

test("the Silksong guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Upgrades & Collectibles",
            "Bosses",
            "Wishes, Quests & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Silksong achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Equipped", "Arsenal", "Bound", "Woven", "Claimed", "Consumed", "Protected", "Masked", "Restored", "Extended", "Regenerated", "Cartographer", "Connected", "Bonded", "Transported", "Keen Hunter", "True Hunter", "Flea Finder", "Fleafriend", "Liberated", "Pharloom's Welcome", "Servant", "Fanatic", "Judge", "Last Dance", "Tragedian", "White Knight", "Grey Ghost", "Heretic", "Tyrant", "Seed", "Diva", "Lamenter", "Granted", "Glutton", "Trail's End", "Hero's Call", "Fatal Resolve", "Entwined", "Resident", "Harmonious", "Remembrance", "Weaver Queen", "Snared Silk", "Twisted Child", "Sister of the Void", "Passing of the Age", "Completion", "Speedrunner", "Speed Completion", "Steel Soul", "Steel Heart"];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
