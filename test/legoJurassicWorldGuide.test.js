import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lego-jurassic-world.js";

test("the LEGO Jurassic World guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lego-jurassic-world-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lego-jurassic-world");

});

test("the LEGO Jurassic World guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Levels",
            "Collectibles, Dinosaurs & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official LEGO Jurassic World achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome To Jurassic Park", "The Calm Before The Storm", "Objects In The Mirror", "We're Being Hunted", "Decided Not To Endorse Your Park", "That's How It All Starts...", "Mommy's Very Angry", "Don't Go Into The Long Grass", "What About The Others?", "Just Follow The Screams", "Not On InGen's List", "Nobody Move A Muscle", "Is This How You Make Dinosaurs?", "Family Reunion", "Going Home", "The Park Is Open", "Full Jurassic World Experience", "Are You Following The Dinosaur?", "A New Alpha", "We Need More Teeth", "65 Million Bricks In The Making", "Something Has Survived", "We're Out Of A Job…", "… Don't You Mean Extinct?", "Went And Made A New Dinosaur", "All I Got Was This T-Shirt", "Spared No Expense", "Bingo! Dino DNA!", "The Legacy of John Hammond", "Send The Helicopters", "What Lysine Contingency?", "Must Go Faster", "Observe And Document", "Next Time It'll Be Flawless!", "One Big Pile Of Bricks", "Helping Hand", "Survival Expert", "Reason To Fear Man", "We Want To Be Thrilled", "The Concept Of Attraction", "Not Machine Compatible", "Pack Hunter", "Anybody want a Soda?", "Remember To Wash Your Hands", "Do-You-Think-He-Saurus?", "Clever Goal", "Hello John!", "Building Blocks Of Life", "The Human Piece Of Toast"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
