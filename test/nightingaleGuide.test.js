import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nightingale.js";

test("the Nightingale guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nightingale-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nightingale");

});

test("the Nightingale guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Realm Main Quests & Landmarks",
            "Faction Choices & Approvals",
            "Questlines",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Nightingale achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Fledgling Steps", "The Place They Go Towards", "Ad Astra", "Titan of Industry", "In Grove or Green",
        "The Histories", "Run the Gauntlet", "A Safe Haven", "Building Bridges", "Shelter in the Storm ",
        "The Letter of the Law", "Act of Defiance", "To Praise Despair", "Balm and Bitterness", "Wolf in Sheep's Clothing",
        "Muckraker", "Sheriff's Deputy", "Double-Tongued", "The Devil You Know", "Through a Glass Darkly",
        "Spirit Communion", "Doctor's Assistant", "Friend of the Grendels", "The Love of the Unknown", "Riddlemaster",
        "Prospective Squire", "Geoarcane Initiate", "Faith in Fools",
    ];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
