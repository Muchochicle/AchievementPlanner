import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yakuza-0.js";

test("the Yakuza 0 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yakuza-0-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yakuza-0");

});

test("the Yakuza 0 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion, Real Estate & Cabaret",
            "Substories & Money",
            "Minigames & Mastery",
            "Main Story",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Yakuza 0 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Where It All Began", "Stuff of Legend", "President Kiryu", "The Promised Land", "The Glamorous Life", "A Host of Hostesses", "Talk of the Town", "You're Still Number One", "Half the Battle", "Perfectionist", "Tell Me a Story", "Hero of the Story", "Story of My Life", "High Roller", "Make It Rain", "Worked Hard for the Money", "Who Ya Gonna Call?", "...I Did It for the Achievement", "Lucky Star", "Training in Style", "A Wise Investment", "Master of Style", "Whip It Good", "Mr. Shakedown Takedown", "Welcome to the Jungle", "Eye of the Dragon and Tiger", "Prizefighter", "What a Player", "Call Me", "Say You Wanna Dance", "Cat Scratch Fever", "The Dragon of Pocket Circuit", "Nostalgic for the 80s", "New Allies, New Foes", "Rich Taste", "A Matter of Life or Death", "Smooth Criminal", "Time to Say Goodbye", "Business Etiquette 101", "When It All Goes Wrong", "Best Served Cold?", "The Big Reveal", "It Takes Two", "A Familiar Name", "They Won't Mind", "Painful Reunion", "Big Hair in the Crosshairs", "Lamb in the Lion's Den", "Hitting the Bottle", "Awakened and Unleashed", "We Built This City", "Walking On Sunshine", "Generosity of Strangers", "Just Beat It", "Amon Defeated"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
