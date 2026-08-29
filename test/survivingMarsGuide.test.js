import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/surviving-mars.js";

test("the Surviving Mars guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "surviving-mars-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "surviving-mars");

});

test("the Surviving Mars guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mysteries & Story",
            "Colony Growth & Tech",
            "Challenges & Feats",
            "Completion & One-Offs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Surviving Mars achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Cubism", "Space Invaders", "Mirror, mirror...", "Swan Song", "Sentience 2.0",
        "Whistleblower", "The Beanstalk", "Snow Globe", "It's Always Sunny on Mars", "Alpha Scientist",
        "The Rabbit Hole", "Cast in Concrete", "What is Real?", "Bubble Wrap", "There and Back Again",
        "Spacey Food", "Where No Man has Gone Before", "Marvin the Martian", "Good News, Everyone!", "Space Communism",
        "Multiplanet Species", "The Boundaries of Knowledge", "Can't Stop the Signal", "The Final Frontier", "How Much is a Googol?",
        "Wubba, lubba, dub, dub!", "You can't take the Sky from Me!", "In the High Tower", "Open the Pod Bay Doors", "A Shooting Star",
        "Dream of a Green Mars", "Marsopolis", "Assisted Self-Improvement", "For the Benefit of All", "Building a Better Future",
        "Interesting Times", "In the Service of Humankind", "Because we Care", "Aren't they Cute?", "Gagarin's Legacy",
        "The New Ark", "Perfect Moment", "A Better Planet", "Posthuman", "The Watney Challenge",
        "S.P.E.C.I.A.L.", "The New Wonders of the World", "The Positronic Man", "Do Androids Dream of Electric Sheep?", "Immortality of a Kind",
        "Space Shopping", "Tao", "Space Capitalism", "Europa Universalis", "Waste Not, Want Not",
        "The Pace of Progress", "No Pain, No Gain", "The Garden of Eden", "Bushido", "Gold Rush",
        "Move this Mountain!", "Seeds of Life", "Red Button", "Tears of Joy", "Fear my Botany Powers!",
        "Now we need ducks", "Detox", "Skies of Blue", "Creator of Worlds ", "Capital Achievement",
        "Asteroid Hopping", "Into the Unknown", "Job’s done", "Mission Success", "Multitasking",
        "Mysteries of Mars", "The Perfect Run", "Space Dwarves", "Space Explorer", "Will they hold?",
    ];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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
