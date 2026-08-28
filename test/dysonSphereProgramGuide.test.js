import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dyson-sphere-program.js";

test("the Dyson Sphere Program guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dyson-sphere-program-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dyson-sphere-program");

});

test("the Dyson Sphere Program guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Resource Tricks",
            "Mecha, Icarus & Flight Stunts",
            "Exploration & Interstellar Travel",
            "Power, Production & the Dyson Sphere",
            "Completing the Game (Challenge Runs)",
            "The Dark Fog (Combat)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 128-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /128 Steam achievements/);

});

test("every one of the 128 official Dyson Sphere Program achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Know any campfire songs? ", "Don't underestimate Plant Fuel", "Nice Surprise 1", "Nice Surprise 2", "Nice Surprise 3",
        "Nice Surprise 4", "Nice Surprise 5", "Chemist", "Blackbox designer", "I'm gonna need more drones!",
        "Sail away with me", "Who approved this?", "Light-footed", "Employee of the month", "Magpie",
        "Space invaders", "Mineral field depleted", "Minerals by the dozen", "Slip 'n' slide", "Now Boarding",
        "Interstellar convoy", "Forgot about that", "High-rise", "Determination", "Don't sand so close to me",
        "I saw this in a movie once", "Tickets please!", "Intergalactic logistics", "Low battery", "Space junk",
        "Running on fumes", "No diving!", "Power surge", "Burn baby burn", "I can see my house from here!",
        "Sonic boom!", "Faster than light", "My planet, my rules!", "One giant leap for mankind!", "Where no coal has gone before",
        "Only impossible until it's not", "Before our time", "Planet Explorer I", "Planet Explorer II", "What time is it?",
        "I'm not tilted", "The sun rises in the...West?", "Are you proud of me, Stephen?", "Boy genius", "Bon voyage!",
        "Well traveled", "Let there be light!", "Lean mean cleaning machine", "Environmental nightmare", "Build it and they will come",
        "Maximum efficiency", "Data rules everything around me", "Firing on all cylinders", "Memento!", "Icarus, PhD",
        "Mission accomplished", "x0.5 Resource completion", "Didn't break a sweat!", "Mission impossible!", "Solar Sail? No thank you!",
        "Environmentalist", "Alien Mineral Protection Act", "Bullseye", "We have lift-off", "Critical thinker",
        "Secrets of the universe I", "Secrets of the universe II", "Got Deuterium?", "Green power", "Electromagnetic matrix",
        "Energy matrix", "Structure matrix", "Information matrix", "Gravity matrix", "Universe matrix, Yellow Belt",
        "Universe matrix, Green Belt", "Universe matrix, Blue Belt", "No coal? No problem!", "Sunbather", "All systems are go!",
        "Going nuclear", "Like a diamond in the sky", "CentreBrain needs more energy I", "CentreBrain needs more energy II", "CentreBrain needs more energy III",
        "We can make it if we try", "Backup plan", "Small factory", "Medium factory", "Large factory",
        "Giant factory", "Universe factory", "Infinite Factory I", "Infinite Factory II", "Infinite Factory III",
        "Dust to dust I", "Dust to dust II", "Dust to dust III", "Happy Hunting I", "Happy Hunting II",
        "Happy Hunting III", "Bullet Storm", "A Penny Saved", "Strangle in the cradle", "Peace & Love",
        "In the Spotlight", "War has Changed", "Won't Lie Low", "Monster Kill", "POPCORN!",
        "Unbowed, Unbent, Unbroken", "Invincible", "A.T Field", "Super Nova!", "Shoot Oneself in the Foot",
        "You Started It", "Right Under My Nose", "You Shall Not Pass!", "Global Offense", "Wrong Place",
        "Gotcha", "It's on Fire", "All Calculated"
    ];

    assert.strictEqual(officialAchievementNames.length, 128, "sanity check on this test's own reference list");

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
