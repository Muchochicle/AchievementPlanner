import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/discstorm.js";

test("the DiscStorm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "discstorm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "discstorm");

});

test("the DiscStorm guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single Player Campaign",
            "Multiplayer & Modes",
            "Challenge Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official DiscStorm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Training Montage", "Going Golem Gone", "Eye see what you did there", "I ain't afraid of no ghost", "Where no disc has gone before", "You must be a Ninja", "Dug too deep", "Too hot to handle", "Crashed the Teddy Bear's Picnic", "Didn't even have to spend the night", "4.0 Average", "The A Team", "Plays well with others", "Long in the tooth", "Dances with death", "One in a million kid", "Student becomes the master", "Marathon Man", "Trick shot", "I think you dropped this", "WEEEEEEEEEEEEEEEEEEE!", "I will survive", "In the nick of time", "Return to sender", "Dictatorship", "Save the Rhinos", "Close Encounters", "Two is enough thank you", "You're out of here!", "Doing the Rounds!"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
