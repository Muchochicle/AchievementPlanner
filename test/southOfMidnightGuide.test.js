import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/south-of-midnight.js";

test("the South of Midnight guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "south-of-midnight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "south-of-midnight");

});

test("the South of Midnight guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story",
            "Skill Trees",
            "Combat Techniques",
            "Boss Fights",
            "Exploration",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official South of Midnight achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Night of the Flood", "Other Voices, Other Looms", "A Big Fish", "Wicked Temper", "Everything that Rises", "Hush, Hush, Sweet Cherie ", "A Barman is Hard to Find", "Their Eyes Were Watching", "Of Webs and Woman", "Light in the Darkness", "Muddy Waters", "The Crossroads", "Past Ain't Past", "Stroke of Midnight", "Learning the Ropes", "Mastering the Ropes", "Get Over Here", "Just a Nudge", "A Living Loom", "Crouton of Joy", "Unraveller", "In the Nick of Time", "Took 'em Down a Peg", "Going the Distance", "Taking the High Road", "Cicada Tempest", "Clean Hands", "Close Call", "Gator Tamer", "Owl Do You Do", "Arachnophobia", "Gator Master", "An Owl for an Owl", "Arachnophilia", "A Little Goes a Long Way", "Fit as a Fiddle", "Floof Seeker", "Lore Master", "Finder's Keepers", "A Great Southern Tradition"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
