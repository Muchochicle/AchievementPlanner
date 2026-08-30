import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/unrailed.js";

test("the Unrailed! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "unrailed-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "unrailed");

});

test("the Unrailed! guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Endless Mode: Easy Distance Ladder",
            "General Feats & Biomes",
            "Endless Mode: Medium & Hard Distance Ladders",
            "Track Length & Special Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Unrailed! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Stroller", "Hiker", "Voyager", "Wayfarer", "Explorer",
        "Ducky Danger", "Shepherd", "Engineer", "Destructionist", "Leet",
        "Industrialist", "Rocketman", "Nanuk", "Mojave Courier", "Incurious",
        "Satan's Minion", "Apollo 13", "Wrong way!", "Missed Opportunities", "Scrooge",
        "Collector", "Achievement Master", "Marathon", "Lost", "Shopaholic",
        "Advanced Stroller", "Advanced Hiker", "Advanced Voyager", "Advanced Wayfarer", "Advanced Explorer",
        "Expert Stroller", "Expert Hiker", "Expert Voyager", "Expert Wayfarer", "Expert Explorer",
        "Toy Train", "Orient Express", "Trans-Siberian Railway", "Deep Space Transit", "Cowter Space",
        "Climate Change", "Fire fighter", "Megalomaniac", "No Space For Improvement", "Where They Belong",
        "Terminal Station", "Snowman's Land", "Tough Nut!", "Martian", "20 Miles Under the Sea",
        "Dynamite Fishing", "Saved by Nausicaä", "Fireworks!",
    ];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
