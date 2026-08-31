import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/blood-and-bacon.js";

test("the Blood and Bacon guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "blood-and-bacon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "blood-and-bacon");

});

test("the Blood and Bacon guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Farm Feats & Bosses",
            "Secrets, Hats & Space Update",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Blood and Bacon achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Kaboom Kaboom", "While You're Down", "You Murderer", "You Wont Like Me When Im Angry", "Skidmarked", "Mama Said Knock You Out", "Bite the Hand that Feeds You", "Gas Guzzler", "I'm Ambidextrous", "Needy Greedy", "Royalty Killer", "Watch The Show", "Charcoal Crumbler", "The Chunk Kicker", "Acid Washed", "Where Credits Due", "Graphics Whore", "Blinded By The Light", "The Longest Yard", "You Are The Champion", "You Have An Apt Pupil ", "Ride The Wave", "Chicken On The Farm", "That's The Way The Boar Bounces", "Become A Mile High Club Member", "FrankenBoar's Monsters", "I Will Swallow You Whole", "Always Sing Off Key", "Birds Of A Feather ", "You Are Hardened", "Life After Death", "The Mad Hatter", "Doctor Who", "It Was The Hindenburg", "The Red Sun", "Friended", "Optional Achievement", "Optional Achievement", "Optional Achievement", "Heirlooms", "Mr Green", "FreeFall "];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
