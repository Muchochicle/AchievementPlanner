import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-cells.js";

test("the Dead Cells guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-cells-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-cells");

});

test("the Dead Cells guide has all 12 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Biomes & Exploration",
            "The Concierge, Conjunctivius & the Time Keeper",
            "The Hand of the King & the Boss Stem Cell Ladder",
            "The Giant, the Collector & the Hidden Depths",
            "Mama Tick & the Mushroom Boi",
            "The Arboretum, the Swamp & the Scarecrow",
            "The Queen's Court",
            "The Bank",
            "Return to Castlevania",
            "Self-Inflicted & Joke Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 121-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /121 Steam achievements/);

});

test("every one of the 121 official Dead Cells achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dead-cells.json).
    const officialAchievementNames = [
        "Love the serenity...",
        "A room with a view!",
        "Finally, a moment of rest...",
        "Smells like burned flesh",
        "What's that funky smell?",
        "Who needs an Italian plumber?",
        "My fish is fresh!",
        "The dead center of the island...",
        "It rubs the lotion on its skin!",
        "Quit tickling!",
        "What are you rubbing at anyway?",
        "Going down!",
        "They came from behind!",
        "YOLO! Or not?",
        "Ohhhhhh! That hurt!",
        "The Fat and The Furious",
        "Is there something in your eye?",
        "Not so tough",
        "Steam rolled.",
        "Flawless victory.",
        "Slash! Slash! Roll!",
        "Pimp my ride.",
        "Afraid of the dark?",
        "We've all been there before...",
        "What? There's nothing wrong with these...",
        "Absolution",
        "¡Arriba, arriba! ¡Ándale, ándale!",
        "See, that wasn't so hard now, was it?",
        "Shrewd sleuth",
        "Faster than light!",
        "Here comes a new challenger!",
        "Blade Master",
        "The Dance",
        "Tic… Toc…",
        "High drama",
        "Fortune and glory, kid. Fortune and Glory...",
        "Incy Wincy…",
        "Never fallen",
        "I like to live dangerously…",
        "La Brute",
        "Surgical extraction",
        "Masterful extraction",
        "Artful extraction",
        "Up, Guards, and at them again!",
        "Finished, without fear.",
        "Harder Better Faster Stronger",
        "The last rampart falls...",
        "Do you need... A hand?? Bahaha!",
        "Deft extraction",
        "Let's get down to the nitty gritty...",
        "Please leave your shoes at the entrance.",
        "Bend the knee? I think not…",
        "Even the rats avoid the place...",
        "Perfect extraction",
        "Size doesn't matter",
        "I don't step on toes...",
        "You dig",
        "Hot and cold",
        "Life on the edge",
        "Stargazing",
        "David and Goliath...",
        "Nothing left to... collect.",
        "I've got my eyes on you...",
        "Take that, sucker!",
        "Who's a good boi?",
        "Bound for Hell",
        "Pact with the devil",
        "Gentleman",
        "Go play outside!",
        "The mud is getting warm, so you might as well swim.",
        "Knee deep in mud...",
        "Don't. Touch. Anything!",
        "Cheers!",
        "Born sapper",
        "Return to sender",
        "Blades N' Roses",
        "Beware the step!",
        "Sky Fall",
        "In mushroom, we trust.",
        "Watering Time!",
        "Green thumbs",
        "First aid",
        "Me, jealous?",
        "Pool Party",
        "A cut above",
        "Trapped Trapper",
        "The cowl does not make the monk",
        "Iceberg right ahead!",
        "8th wonder",
        "A sparkle in the night",
        "Her Majesty",
        "Lilibet",
        "Long live the Queen",
        "Full house",
        "On Her Majesty's Secret Service",
        "Oh how fast they grow!",
        "Black flag",
        "Spare!",
        "Plank walk",
        "Put that thing back where it came from or so help me",
        "Infiltration",
        "Herder",
        "You're not my family",
        "Firefighter",
        "Unwavering loyalty",
        "The Bank always wins in the end",
        "Up to the eyeball in debt",
        "Bag of Tricks",
        "Am I still on the island?",
        "Into the vampire's den",
        "Don't fear the Reaper",
        "What is a man?",
        "Death comes for us all... but not you!",
        "Dodge Death!",
        "You don't belong in this world!",
        "See you in 100 years",
        "Honorary Belmont",
        "I still have 8 lives",
        "Can you stop moving please?!",
        "Does what it says on the tin",
        "Knowledge is power"
    ];

    assert.strictEqual(officialAchievementNames.length, 121, "sanity check on this test's own reference list");

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
