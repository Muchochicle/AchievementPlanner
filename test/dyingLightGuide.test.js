import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dying-light.js";

test("the Dying Light guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dying-light-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dying-light");

});

test("the Dying Light guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story",
            "Combat & Parkour",
            "Collectibles, Ranks & Craft",
            "Co-op",
            "The Following, Hellraid & Bozak",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 78-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /78 Steam achievements/);

});

test("every one of the 78 official Dying Light achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dying-light.json).
    const officialAchievementNames = [
        "Flight of the Crane", "My left or your left?", "Snake in the grass", "Sightseeing", "Making Faces",
        "Tied loose end", "Now You Can Come In", "Vertigo", "Bittersweet", "The Whole Story",
        "Disaster Recovery", "We're All In This Together", "Homo Homini Lupus Est", "Bolter Hunting", "I'm a Runner and a fighter",
        "Lucky 7", "Harran Athletics", "Trade Company", "Trespassing", "Now It's Safe",
        "Pheidippides", "Mount Everest", "Is It Really Necessary?", "Everybody Dance Now", "Can't Touch This",
        "This is Harraaaaan!", "Mouths Wide Open", "Hush, Hush Now", "BBQ", "A Game of Catch",
        "Harran Shooting Club", "Electrified!", "Blinded by the Lights", "High Flyer", "Judo Master",
        "Prom Night", "Enlightened!", "Little Craftsman", "Master Crafter", "Open Sesame",
        "Everybody Knows Kyle", "The Legend of Harran", "Agile", "Strong", "It's All In the Writing",
        "I've Got Your Back", "Polyamory", "Italian Plumber", "Gabriel's Sword", "A Long Way Down",
        "The Boy Who Could Run", "GD Parkour Instructor", "Pearls in the Mud", "Get the Bozak", "Together Till the End",
        "Electric Whisper", "Things That Go Ka-Boom", "Robin Hood Theory", "Afraid to get wet?", "And you liked him, didn't you?",
        "I was waiting for you for so long", "Sweaty palms?", "It wasn't that hard, was it?", "What if you picked the other one?", "I felt your presence",
        "You realize it's only points, don't you?", "Formidophobic? Interesting…", "I don't approve of mindless fun", "Beginnings are hard", "Throw me a bone",
        "Non omnis moriar", "Blocked by Ba'al", "Clavis was a key all along", "Time to file a tax form", "Wake up!",
        "Well-read", "Fast as hell", "Into the lava"
    ];

    assert.strictEqual(officialAchievementNames.length, 78, "sanity check on this test's own reference list");

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
