import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/project-cars-2.js";

test("the Project CARS 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "project-cars-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "project-cars-2");

});

test("the Project CARS 2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Progression & Challenge Events",
            "Licenses, Lifetime Goals & Manufacturer Drives",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Project CARS 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One More For The Road", "This Is The Start", "I'm Seasoned", "Get That Dirt Off Your Shoulder", "Best Indy World", "Invite Only", "Mr Popular", "Accoladed", "Winter Soldier", "Advanced Experience", "Hunting For Grip", "No Man's Fly", "All Year Round", "Diversity", "The Milk Man", "Viva Ferrari", "Car Zero", "Straight Six", "Snap Snap Snap", "Strategic Mind", "One-Man Show", "Results Are In, You're Clean!", "Done One Online", "Gimme 50!", "Raving Rookie", "No Longer a Rookie", "Definitely Not a Rookie", "I'm a Pro", "Seen It All", "Zero to Hero", "Twice At The Top", "Jack Of All Trades", "National Pride", "Triple Crown", "Hall of Fame", "Factory Driver", "Cream Of The Crop", "Brand Advocate", "Two Affinity And Beyond", "Manual All The Way", "What's Yours Is Mine", "I'm Just Here To Watch", "The Director", "May I Ask You Something", "Safety First", "I Want To Know Your Secret", "Rest On Your Laurels"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
