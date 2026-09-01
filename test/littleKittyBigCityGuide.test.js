import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/little-kitty-big-city.js";

test("the Little Kitty, Big City guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "little-kitty-big-city-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "little-kitty-big-city");

});

test("the Little Kitty, Big City guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Animals & Ducklings",
            "Collectibles & Activities",
            "Mischief & Gags",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Little Kitty, Big City achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Home Sweet Home!", "Hello Everyone!", "Quack Troops!", "Snap Happy!", "Snack Time!", "Fin-tastic!", "Fat Cat", "Capped Crusader", "World Traveler", "Cat Napper", "Bird Botherer", "If I Fits, I Sits", "Litter Picker", "Smash Hit", "Sticky Business", "Give A Dog A Bone", "Cult Of Purr-sonality", "Local Celebrity", "Papa-cat-zi", "Dumpster Diving", "Neighborhood Hero", "Cat-Like Reflexes", "Back Of The Net", "Surprise!", "Fruit Fall", "Trip Hazard", "Industrial Artist", "Checkmate!", "To Me, To You!", "No Parking!", "Rub-A-Dub-Dub!", "And Stay Out!", "Killer Kitty", "Who Needs Cash?", "Big Kitty, Little City", "Can't Stop The Feelings", "What Sweet Music", "Splish!", "Decluttering"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
