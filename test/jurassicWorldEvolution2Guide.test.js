import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/jurassic-world-evolution-2.js";

test("the Jurassic World Evolution 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "jurassic-world-evolution-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "jurassic-world-evolution-2");

});

test("the Jurassic World Evolution 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Chaos Theory & Challenges",
            "Science, Dinosaurs & the Database",
            "Guests, Vehicles & DLC Campaigns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Jurassic World Evolution 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Brave New World", "Washington Complete", "Pennsylvania Done", "Oregon Out", "Entered a New Era", "Hold Onto Your Butts", "Not Making the Same Mistakes Again", "Where's the Phone?", "Open Paddock 9!", "Blue is alive!", "Quite the Challenge", "Good Job", "You Did That?", "All Done", "Glad That's Over", "That, that was a Challenge", "You've Done Well", "Was That Tough?", "Challenge Your Limits", "You Call That a Challenge?", "Engineer 1st Class", "PHD in the Field", "Veterinary Wonder", "Prehistoric Perfection", "Life Finds a Way", "This One is Special", "That's a lot of Dinosaurs", "One More for the Sticker Book", "So Many Teeth", "That's No Tadpole", "Flapped", "Down in the Laboratory", "Starting a Collection", "I Can See Everything", "What do we Have Here?", "I'm a Doctor", "Count Backwards from 5, 4, 3...", "Good Aim", "This is a Modern Prehistoric Marvel", "Jurassic Showdown", "As Light as a Feather", "On the Road to Success", "Insurance Claim", "That Wasn't Luck", "Breakthrough Genetics", "Head 'em up, move 'em out", "That'll do", "Scram!", "Clever Girl", "Dinosaur whisperer", "Do-you-think-he-saurus?", "You can't engineer loyalty", "Cabot Finch's dream", "Pleasure doing business with you"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
